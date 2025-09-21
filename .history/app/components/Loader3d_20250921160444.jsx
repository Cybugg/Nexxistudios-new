"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Html, useProgress } from "@react-three/drei";
import { Suspense, useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function RingModel({ mouse }) {
  const { scene } = useGLTF("/models/loader.glb");
  const ref = useRef();

  // Continuous + mouse-controlled spin
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01;
      ref.current.rotation.x += (mouse.current.y / 200 - ref.current.rotation.x) * 0.05;
      ref.current.rotation.y += (mouse.current.x / 200 - ref.current.rotation.y) * 0.05;
    }
  });

  return <primitive ref={ref} object={scene} scale={0.5} />;
}

function ProgressBar() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="absolute bottom-[-100px] left-0 right-0 w-full h-2 bg-gray-700 rounded">
        <motion.div
          className="h-2 bg-rounded"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.2 }}
        />
      </div>
      <p className="text-white text-sm mt-2 text-center">{Math.round(progress)}%</p>
    </Html>
  );
}

export default function Loader3D({ onFinish }) {
  const mouse = useRef({ x: 0, y: 0 });
  const { progress } = useProgress();
  const [show, setShow] = useState(true);

  // Fade out when loading completes
  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        setShow(false);
        onFinish(); // ✅ safe to call inside useEffect
      }, 600); // let fade-out animation play
      return () => clearTimeout(timer);
    }
  }, [progress, onFinish]);

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
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={1} />

            <Suspense fallback={null}>
              <RingModel mouse={mouse} />
              <ProgressBar />
            </Suspense>
          </Canvas>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
