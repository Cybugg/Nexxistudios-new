"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Html, useProgress } from "@react-three/drei";
import { Suspense, useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useFullProgress } from "./useFullProgress";

function RingModel({ mouse }) {
  const { scene } = useGLTF("/models/loader.glb");
  const ref = useRef();

  // Continuous rotation + smooth mouse influence
  useFrame(() => {
    if (ref.current) {
      // Constant spin
      ref.current.rotation.y += 0.01;

      // Add mouse-based rotation influence
      ref.current.rotation.x += (mouse.current.y / 200 - ref.current.rotation.x) * 0.05;
      ref.current.rotation.y += (mouse.current.x / 200 - ref.current.rotation.y) * 0.05;
    }
  });

  return <primitive ref={ref} object={scene} scale={0.4} />;
}

function ProgressBar() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="absolute bottom-[-100px] left-0 right-0 w-full h-2 bg-white border rounded">
        <motion.div
          className="h-2 bg-black rounded"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.2 }}
        />
      </div>
      <p className="text-sm text-black font-extrabold">
        {Math.round(progress)}%
      </p>
    </Html>
  );
}

export default function Loader3D({ onFinish }) {
  const mouse = useRef({ x: 0, y: 0 });
  const progress = useFullProgress();
  const [show, setShow] = useState(true);

  // 🧠 Wait for load to reach 100%, then add extra 3s delay before fade-out
  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        setShow(false);
        onFinish?.(); // Ensure callback fires safely
      }, 3000); // 👈 extra 3 seconds after load complete
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
          {/* ⚡ 3D element stays spinning until fade-out completes */}
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
