import React from 'react';

function Songslist({ track }) {
  return (
    <div className="flex p-2 md:p-2">
      <div className="img">
        <button><img className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" src={track.album.images[0].url} alt={track.name} /></button>
      </div>
      <div className="info ml-4">
        <button><h1 className="text-white font-bold text-base md:text-lg lg:text-xl">{track.name}</h1></button>
        <p className="text-gray-400 text-xs md:text-sm lg:text-base">
          {track.artists.map((artist) => artist.name).join(", ")} - {track.album.name}
        </p>
      </div>
    </div>
  );
}

export default Songslist;
