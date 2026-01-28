import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

// Generate random points in a sphere
const generateParticles = (count: number) => {
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  
  for (let i = 0; i < count; i++) {
    const r = 4;
    const theta = 2 * Math.PI * Math.random();
    const phi = Math.acos(2 * Math.random() - 1);
    
    // Convert spherical to cartesian
    const x = r * Math.sin(phi) * Math.cos(theta);
    const y = r * Math.sin(phi) * Math.sin(theta);
    const z = r * Math.cos(phi);
    
    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;

    // Color gradient based on position (Blue to Purple)
    colors[i * 3] = 0.1 + Math.random() * 0.2;     // R
    colors[i * 3 + 1] = 0.5 + Math.random() * 0.5; // G
    colors[i * 3 + 2] = 1.0;                       // B
  }
  
  return { positions, colors };
};

const ParticleCloud = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const { positions, colors } = useMemo(() => generateParticles(2000), []);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x -= delta / 10;
      pointsRef.current.rotation.y -= delta / 15;
      
      // Gentle pulsing effect
      const scale = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
      pointsRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <Points 
      ref={pointsRef} 
      positions={positions} 
      colors={colors} 
      stride={3} 
      frustumCulled={false}
      rotation={[0, 0, Math.PI / 4]}
    >
      <PointMaterial
        transparent
        vertexColors
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

export default function ThreeScene() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 opacity-60 pointer-events-none">
      <Canvas 
        camera={{ position: [0, 0, 6], fov: 60 }}
        onCreated={({ scene }) => {
          scene.fog = new THREE.Fog('#020617', 5, 15);
        }}
      >
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <ParticleCloud />
        </Float>
      </Canvas>
      {/* Gradient overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950 pointer-events-none" />
    </div>
  );
}