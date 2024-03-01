import React from 'react';

function Songslist({ track }) {
  return (
    <div className="flex p-2">
      <div className="img">
        <button><img className="w-16 h-16" src={track.album.images[0].url} alt={track.name} /></button>
      </div>
      <div className="info ml-4">
        <button><h1 className="text-white font-bold">{track.name}</h1></button>
        <p className="text-gray-400">
          {track.artists.map((artist) => artist.name).join(", ")} - {track.album.name}
        </p>
      </div>
    </div>
  );
}

export default Songslist;
