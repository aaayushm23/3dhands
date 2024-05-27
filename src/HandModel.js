import React from 'react';
import { Box } from '@react-three/drei';

const HandModel = ({ color, position, onFingerClick }) => {
  const fingers = [
    { name: 'Thumb', position: [-0.75, 1.2, 0], rotation: [0, 0, -0.5], scale: [0.4, 0.9, 0.4] },
    { name: 'Index Finger', position: [-0.35, 1.6, 0], rotation: [0, 0, 0], scale: [0.3, 1.2, 0.3] },
    { name: 'Middle Finger', position: [0, 1.7, 0], rotation: [0, 0, 0], scale: [0.3, 1.3, 0.3] },
    { name: 'Ring Finger', position: [0.35, 1.6, 0], rotation: [0, 0, 0], scale: [0.3, 1.2, 0.3] },
    { name: 'Pinky Finger', position: [0.75, 1.5, 0], rotation: [0, 0, 0], scale: [0.3, 1, 0.3] },
  ];

  return (
    <group position={position}>
      {/* Palm */}
      <Box
        args={[1.5, 2, 0.3]}
        position={[0, 0.5, 0]}
        onClick={() => onFingerClick('Palm')}
      >
        <meshStandardMaterial attach="material" color={color} />
      </Box>
      {/* Wrist */}
      <Box
        args={[1.5, 0.5, 0.3]}
        position={[0, -1.25, 0]}
        onClick={() => onFingerClick('Wrist')}
      >
        <meshStandardMaterial attach="material" color={color} />
      </Box>
      {/* Fingers */}
      {fingers.map((finger, index) => (
        <Box
          key={index}
          args={finger.scale}
          position={finger.position}
          rotation={finger.rotation}
          onClick={() => onFingerClick(finger.name)}
        >
          <meshStandardMaterial attach="material" color={color} />
        </Box>
      ))}
    </group>
  );
};

export default HandModel;
