import React from 'react';
import Header from './Header';
import { useMarketValue } from '../Datalayer';
import Icons from './Icons';
import Songslist from './Songslist';

function Body({ spotify }) {
  const [{ top_hits }, dispatch] = useMarketValue();

  return (
    <div className='bg-gradient-to-b from-gray-900 to-black p-4'>
      <Header spotify={spotify} /> 
      <div className="body-content flex flex-col items-center justify-center rounded-xl p-5 w-full">
        <div className="box w-full rounded-xl bg-gray-900 mb-4 md:flex md:items-center md:justify-center md:mb-0">
          <div className="img p-4 md:m-4">
            <img className="size-40 rounded-xl" src={top_hits?.images[0]?.url} alt="" />
          </div>
          <div className="text-white mt-2 p-2">
            <div className="text pt-6 mt-5 text-lg">
              <h1><strong>PLAYLIST</strong></h1>
            </div>
            <div className="text text-3xl mt-1">
              <h1><strong>Discover</strong></h1>
            </div>
            <div className="text text-3xl mt-1">
              <h1><strong>Weekly</strong></h1>
            </div>
          </div>
          <div className="discription text-white p-4 md:p-16 ml-4 md:ml-16">
            <h2><strong>{top_hits?.description}</strong></h2>
          </div>
        </div>
        <Icons />
        <div className="list mt-4 md:-mb-9 max-h-52 lg:max-h-52 md:h-5/6" style={{ background: "#121212", overflowY: "auto", WebkitOverflowScrolling: "touch", width: "100%" }}>
          {top_hits?.tracks.items.map(item => (
            <Songslist track={item.track} key={item.track.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Body;
