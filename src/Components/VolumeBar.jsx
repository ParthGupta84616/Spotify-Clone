import React, { useState } from 'react';

function VolumeBar() {
  // State to hold the current volume value
  const [volume, setVolume] = useState(50);

  // Function to handle volume change
  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
  };

  return (
    <div className="flex items-center ml-6 transform transition duration-300 hover:scale-110">
      <input
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={handleVolumeChange}
        className="slider appearance-none h-2 bg-gray-900 rounded-md outline-none "
        style={{ width: '10vw' }}
      />
    </div>
  );
}

export default VolumeBar;
