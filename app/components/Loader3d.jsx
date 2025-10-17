"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Html } from "@react-three/drei";
import { Suspense, useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 🌀 Spinning model with mouse tilt
function RingModel({ mouse }) {
  const { scene } = useGLTF("/models/loader.glb");
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      // Continuous base spin
      ref.current.rotation.y += 0.03;

      // Smooth tilt effect based on mouse position (subtle)
      const targetX = mouse.current.y / 400;
      const targetY = mouse.current.x / 400;

      ref.current.rotation.x += (targetX - ref.current.rotation.x) * 0.05;
      ref.current.rotation.z += (targetY - ref.current.rotation.z) * 0.05;
    }
  });

  return <primitive ref={ref} object={scene} scale={0.4} />;
}

// 🔋 Progress bar UI
function ProgressBar({ progress }) {
  return (
    <Html center>
      <div className="absolute bottom-[-100px] left-0 right-0 w-full h-2 bg-gray-200 border rounded overflow-hidden">
        <motion.div
          className="h-2 bg-black rounded"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <p className="text-sm text-black font-extrabold mt-2">{Math.round(progress)}%</p>
    </Html>
  );
}

// 🧠 Custom loader hook
function useGlobalLoader() {
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const images = [...document.querySelectorAll("img")];
    const videos = [...document.querySelectorAll("video")];
    const total = images.length + videos.length || 1;
    let count = 0;

    const update = () => {
      count++;
      setProgress(Math.min((count / total) * 100, 100));
    };

    images.forEach((img) => {
      if (img.complete) update();
      else img.addEventListener("load", update, { once: true });
      img.addEventListener("error", update, { once: true });
    });

    videos.forEach((vid) => {
      if (vid.readyState >= 3) update();
      else vid.addEventListener("loadeddata", update, { once: true });
      vid.addEventListener("error", update, { once: true });
    });

    const safety = setTimeout(() => setProgress(100), 10000);
    return () => clearTimeout(safety);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const doneTimer = setTimeout(() => setLoaded(true), 1500);
      return () => clearTimeout(doneTimer);
    }
  }, [progress]);

  return { progress, loaded };
}

// 🌐 Loader3D Component
export default function Loader3D({ onFinish }) {
  const { progress, loaded } = useGlobalLoader();
  const [show, setShow] = useState(true);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (loaded) {
      const timer = setTimeout(() => {
        setShow(false);
        onFinish?.();
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [loaded, onFinish]);

  const handleMouseMove = (e) => {
    mouse.current.x = e.clientX - window.innerWidth / 2;
    mouse.current.y = e.clientY - window.innerHeight / 2;
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-white z-50"
          onMouseMove={handleMouseMove}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <Suspense fallback={null}>
              <RingModel mouse={mouse} />
              <ProgressBar progress={progress} />
            </Suspense>
          </Canvas>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
