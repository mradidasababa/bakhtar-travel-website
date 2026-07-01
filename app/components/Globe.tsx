"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

function Earth() {
  return (
    <mesh rotation={[0.4, 0.2, 0]}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial color="#00d4ff" wireframe />
    </mesh>
  );
}

export default function Globe() {
  return (
    <div className="absolute inset-0 opacity-40">
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={1} />
        <pointLight position={[5, 5, 5]} />
        <Stars />
        <Earth />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
      </Canvas>
    </div>
  );
}