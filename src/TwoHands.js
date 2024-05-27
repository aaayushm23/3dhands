import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Finger = ({ position, rotation, scale, color, onClick, name }) => (
  <mesh position={position} rotation={rotation} scale={scale} onClick={() => onClick(name)}>
    <boxGeometry args={[0.1, 0.5, 0.1]} />
    <meshStandardMaterial color={color} />
  </mesh>
);

const Hand = ({ position, color, onClick }) => (
  <group position={position}>
    <Finger position={[-0.2, 0, 0]} rotation={[0, 0, 0.2]} scale={[0.2, 0.7, 0.2]} color={color} onClick={onClick} name="Thumb" />
    <Finger position={[-0.1, 0, 0]} rotation={[0, 0, 0]} scale={[0.1, 0.9, 0.1]} color={color} onClick={onClick} name="Index Finger" />
    <Finger position={[0, 0, 0]} rotation={[0, 0, 0]} scale={[0.1, 1, 0.1]} color={color} onClick={onClick} name="Middle Finger" />
    <Finger position={[0.1, 0, 0]} rotation={[0, 0, 0]} scale={[0.1, 0.9, 0.1]} color={color} onClick={onClick} name="Ring Finger" />
    <Finger position={[0.2, 0, 0]} rotation={[0, 0, -0.2]} scale={[0.1, 0.7, 0.1]} color={color} onClick={onClick} name="Pinky Finger" />
  </group>
);

const TwoHands = () => {
  const [selectedFinger, setSelectedFinger] = useState(null);

  const handleFingerClick = (fingerName) => {
    setSelectedFinger(fingerName);
  };

  return (
    <>
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Hand position={[-1, 0, 0]} color="purple" onClick={handleFingerClick} />
        <Hand position={[1, 0, 0]} color="olive" onClick={handleFingerClick} />
        <OrbitControls />
      </Canvas>
      {selectedFinger && (
        <div style={{ position: 'absolute', top: 10, right: 10, padding: '10px', backgroundColor: 'white', border: '1px solid black' }}>
          <strong>Selected Finger</strong>
          <div>{selectedFinger}</div>
        </div>
      )}
    </>
  );
};

export default TwoHands;
