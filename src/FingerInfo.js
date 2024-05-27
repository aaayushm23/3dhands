import React from 'react';
import './FingerInfo.css';

function FingerInfo({ selectedFinger }) {
  return (
    <div className="finger-info">
      <h2>Selected Finger</h2>
      <p>{selectedFinger || 'None'}</p>
    </div>
  );
}

export default FingerInfo;
