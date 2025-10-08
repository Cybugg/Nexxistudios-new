'use client';

import { useEffect, useRef, useState } from 'react';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { useGLTF, useTexture, Environment, Lightformer } from '@react-three/drei';
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
  useRopeJoint,
  useSphericalJoint
} from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';


import * as THREE from 'three';

extend({ MeshLineGeometry, MeshLineMaterial });

export default function LanyardTosin({
  position = [0, 0, 30],
  gravity = [0, -40, 0],
  fov = 20,
  transparent = true
}) {
  return (
    <div className="relative z-0 w-full  h-[450px] flex justify-center items-center transform scale-100 origin-center">
      <Canvas
        camera={{ position: position, fov: fov }}
        gl={{ alpha: transparent }}
        onCreated={({ gl }) => {
          // set clear color + alpha
          gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1);
        }}
      >
        {/* sensible ambient intensity */}
        <ambientLight intensity={1} />
        <Physics gravity={gravity} timeStep={1 / 60}>
          <Band />
        </Physics>

        <Environment blur={0.75}>
          <Lightformer intensity={2} color="white" position={[0, -1, 5]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={3} color="white" position={[-1, -1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={3} color="white" position={[1, 1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer
            intensity={10}
            color="white"
            position={[-10, 0, 14]}
            rotation={[0, Math.PI / 2, Math.PI / 3]}
            scale={[100, 10, 1]}
          />
        </Environment>
      </Canvas>
    </div>
  );
}

function Band({ maxSpeed = 50, minSpeed = 0 }) {
  const band = useRef();
  const fixed = useRef();
  const j1 = useRef();
  const j2 = useRef();
  const j3 = useRef();
  const card = useRef();
  const wind = useRef(0); // time accumulator for wind oscillation

  // vectors reused
  const vec = new THREE.Vector3();
  const ang = new THREE.Vector3();
  const rot = new THREE.Vector3();
  const dir = new THREE.Vector3();

  const segmentProps = { type: 'dynamic', canSleep: true, colliders: false, angularDamping: 4, linearDamping: 4 };

  const { nodes, materials } = useGLTF('/models/card_tosin.glb');
  const texture = useTexture('/lanyard.png');


  useEffect(
    ()=>{
 // make texture usage correct
  if (texture) {
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(16, 1);
    // set anisotropy properly on the texture (not as JSX prop)
    texture.anisotropy = Math.min(16, (typeof window !== 'undefined' && window.devicePixelRatio * 4) || 16);
    texture.needsUpdate = true;
  }
    },[texture]
  )
 

  // if materials exist, set a few properties on the material objects to avoid incorrect JSX props
  if (materials?.metal) {
    materials.metal.roughness = 0.3;
  }
  if (materials?.base?.map) {
    // ensure base map uses the lanyard texture if desired (the original used materials.base.map, keep as-is)
    // materials.base.map = texture; // uncomment if you want the lanyard texture applied to the card base
  }

  const [curve] = useState(
    () => new THREE.CatmullRomCurve3([new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()])
  );
  const [dragged, setDragged] = useState(false);
  const [dragOffset, setDragOffset] = useState(() => new THREE.Vector3());
  const [hovered, setHover] = useState(false);
  const [isSmall, setIsSmall] = useState(() => typeof window !== 'undefined' && window.innerWidth < 1024);

  // attach joints (these hooks expect refs created above)
  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, card, [
    [0, 0, 0],
    [0, 1.5, 0]
  ]);

  // cursor change on hover
  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? 'grabbing' : 'grab';
      return () => {
        document.body.style.cursor = 'auto';
      };
    }
  }, [hovered, dragged]);

  // responsive
  useEffect(() => {
    const handleResize = () => setIsSmall(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useFrame((state, delta) => {

    
    // dragging kinematic card
    if (dragged && card.current) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));

      // wake up any bodies (if methods exist)
      [card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp?.());

      // apply next kinematic translation (only when card ref has that method)
      if (card.current?.setNextKinematicTranslation) {
        const target = { x: vec.x - dragOffset.x, y: vec.y - dragOffset.y, z: vec.z - dragOffset.z };
        card.current.setNextKinematicTranslation(target);
      } else {
        // fallback: set world translation if available
        if (card.current?.translation) {
          const t = card.current.translation();
          card.current.setTranslation?.({ x: vec.x - dragOffset.x, y: vec.y - dragOffset.y, z: vec.z - dragOffset.z }, true);
        }
      }
    }

    // rope smoothing + band geometry update
    if (fixed.current && j1.current && j2.current && j3.current && band.current && card.current) {
      [j1, j2].forEach((ref) => {
        if (!ref.current) return;
        if (!ref.current.lerped) ref.current.lerped = new THREE.Vector3().copy(ref.current.translation());
        // safe calls - ensure translation() returns a Vector3
        const currentTranslation = ref.current.translation ? ref.current.translation() : new THREE.Vector3();
        const clampedDistance = Math.max(0.1, Math.min(1, ref.current.lerped.distanceTo(currentTranslation)));
        ref.current.lerped.lerp(currentTranslation, delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed)));
      });

      // update curve control points
      curve.points[0].copy(j3.current.translation ? j3.current.translation() : new THREE.Vector3());
      curve.points[1].copy(j2.current.lerped || j2.current.translation?.());
      curve.points[2].copy(j1.current.lerped || j1.current.translation?.());
      curve.points[3].copy(fixed.current.translation ? fixed.current.translation() : new THREE.Vector3());

      // update mesh points (MeshLine expects the geometry to be updated)
      if (band.current.geometry && typeof band.current.geometry.setPoints === 'function') {
        band.current.geometry.setPoints(curve.getPoints(32));
      } else {
        // fallback: replace geometry
        band.current.geometry = new MeshLineGeometry();
        band.current.geometry.setPoints(curve.getPoints(32));
      }

      // angular velocity tweaks (safely)
      const angVel = card.current.angvel ? card.current.angvel() : { x: 0, y: 0, z: 0 };
      const rotVal = card.current.rotation ? card.current.rotation() : { x: 0, y: 0, z: 0 };

      if (card.current.setAngvel && angVel) {
        card.current.setAngvel({ x: angVel.x, y: angVel.y - (rotVal.y || 0) * 0.25, z: angVel.z });
      } else if (card.current.setAngularVelocity && angVel) {
        // different API name fallback
        card.current.setAngularVelocity({ x: angVel.x, y: angVel.y - (rotVal.y || 0) * 0.25, z: angVel.z });
      }
    }
  });

  // ensure chordal curve
  curve.curveType = 'chordal';

  return (
    <>
      <group position={[0, 4, 0]}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>

        <RigidBody
          position={[2, 0, 0]}
          ref={card}
          {...segmentProps}
          type={dragged ? 'kinematicPosition' : 'dynamic'}
        >
          <CuboidCollider args={[0.8, 1.125, 0.01]} />

          <group
            scale={3.75}
            position={[0, -3, -0.05]}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
           onPointerDown={(e) => {
  if (isSmall) return; // 🚫 disable dragging on smaller screens
  try {
    e.target.setPointerCapture?.(e.pointerId);
  } catch (err) {}
  const offset = new THREE.Vector3().copy(e.point);
  const t = card.current?.translation ? card.current.translation() : new THREE.Vector3();
  offset.sub(t);
  setDragOffset(offset);
  setDragged(true);
}}

onPointerUp={(e) => {
  if (isSmall) return; // 🚫 skip pointer up on mobile
  try {
    e.target.releasePointerCapture?.(e.pointerId);
  } catch (err) {}
  setDragged(false);
}}
          >
            {nodes?.card && (
              <mesh geometry={nodes.card.geometry}>
                {/* ensure map props exist on material rather than using invalid JSX props */}
                <meshPhysicalMaterial
                  map={materials?.base?.map ?? null}
                  clearcoat={1}
                  clearcoatRoughness={0.15}
                  roughness={0.9}
                  metalness={0.8}
                />
              </mesh>
            )}

            {nodes?.clip && (
              <mesh geometry={nodes.clip.geometry} material={materials?.metal ?? undefined} />
            )}

            {nodes?.clamp && <mesh geometry={nodes.clamp.geometry} material={materials?.metal ?? undefined} />}
          </group>
        </RigidBody>
      </group>

      <mesh ref={band}>
        {/* attach geometry and material so three-fiber knows where to put them */}
        <meshLineGeometry attach="geometry" />
        <meshLineMaterial
          attach="material"
          color="white"
          depthTest={false}
          resolution={isSmall ? [1000, 2000] : [1000, 1000]}
          useMap
          map={texture}
          lineWidth={1.65}
        />
      </mesh>
    </>
  );
}
