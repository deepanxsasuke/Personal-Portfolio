import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei';

function Orb() {
  const meshRef = useRef();

  useFrame((state) => {
    const { clock } = state;
    meshRef.current.rotation.x = clock.getElapsedTime() * 0.3;
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.2;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1, 64, 64]}>
        <MeshDistortMaterial
          color="#3b82f6"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0}
          metalness={1}
          emissive="#1d4ed8"
          emissiveIntensity={0.5}
        />
      </Sphere>
    </Float>
  );
}

const Scene = () => {
  return (
    <div className="w-full h-[400px] lg:h-[600px]">
      <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Orb />
      </Canvas>
    </div>
  );
};

export default Scene;