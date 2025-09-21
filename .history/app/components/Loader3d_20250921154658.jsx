"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useState } from "react";

function RingModel({ hover }) {
  const { scene } = useGLTF("/models/loader.glb");
  
  // Slight scale-up on hover
  return (
    <primitive 
      object={scene} 
      scale={} 
      rotation={[0, 0, 0]} 
    />
  );
}

export default function Loader3D() {
  const [hover, setHover] = useState(false);

  return (
    <div 
      className="w-full h-screen flex items-center justify-center bg-white"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        
        <Suspense fallback={null}>
          <RingModel hover={hover} />
        </Suspense>

        {/* Optional controls for dev preview */}
        {/* <OrbitControls enableZoom={false} /> */}
      </Canvas>
    </div>
  );
}
