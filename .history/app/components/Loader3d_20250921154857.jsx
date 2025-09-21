"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Suspense, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

function RingModel({ mouse }) {
  const { scene } = useGLTF("/models/loader.glb");
  const ref = useRef();

  // Continuous spin
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01;

      // Add mouse-controlled rotation
      ref.current.rotation.x += (mouse.current.y / 200 - ref.current.rotation.x) * 0.05;
      ref.current.rotation.y += (mouse.current.x / 200 - ref.current.rotation.y) * 0.05;
    }
  });

  return <primitive ref={ref} object={scene} scale={0.6} />;
}

export default function Loader3D({ onFinish }) {
  const [show, setShow] = useState(true);
  const mouse = useRef({ x: 0, y: 0 });

  // Fake loading (replace with real fetch logic later)
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onFinish, 600); // allow fade-out before removing
    }, 3000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  // Track mouse movement
  const handleMouseMove = (e) => {
    mouse.current.x = e.clientX - window.innerWidth / 2;
    mouse.current.y = e.clientY - window.innerHeight / 2;
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black z-50"
          onMouseMove={handleMouseMove}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={1} />

            <Suspense fallback={null}>
              <RingModel mouse={mouse} />
            </Suspense>
          </Canvas>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
