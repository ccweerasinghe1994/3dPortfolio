import React, { Suspense, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls, Preload, useGLTF, SpotLight } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

const CanvasLoader = () => <h1>Loading</h1>;

const Computers = () => {
  const mesh = useRef<THREE.Mesh>(null!);
  const hemisphereLight = useRef<THREE.HemisphereLight>(null!);
  const pointLight = useRef<THREE.PointLight>(null!);
  const computer = useGLTF('./desktop_pc/scene.gltf');
  return (
    <mesh ref={mesh}>
      <hemisphereLight
        ref={hemisphereLight}
        intensity={0.15}
        groundColor={'black'}
      />
      <pointLight intensity={1} />
      <primitive
        ref={pointLight}
        object={computer.scene}
        scale={0.75}
        position={[0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputerCanvas = () => {
  return (
    <Canvas
      frameloop={'demand'}
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default Computers;
