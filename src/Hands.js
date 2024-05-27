import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import HandModel from './HandModel';

const Hands = ({ user }) => {
  const [selectedFinger, setSelectedFinger] = useState(null);

  const handleFingerClick = (finger) => {
    setSelectedFinger(finger);
  };

  const handColor = user.leftHand === 'user1' ? 'purple' : 'green';

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '70%' }}>
        <Canvas>
          <OrbitControls />
          <ambientLight />
          <HandModel color={handColor} position={[-2, 0, 0]} onFingerClick={handleFingerClick} />
          <HandModel color={handColor} position={[2, 0, 0]} onFingerClick={handleFingerClick} />
        </Canvas>
      </div>
      <div style={{ width: '30%', padding: '20px', backgroundColor: '#f0f0f0' }}>
        <h2>Selected Finger</h2>
        <p>{selectedFinger || 'None'}</p>
      </div>
    </div>
  );
};

export default Hands;
