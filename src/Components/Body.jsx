import React from 'react';
import Header from './Header';
import { useMarketValue } from '../Datalayer';
import Icons from './Icons';
import Songslist from './Songslist';

function Body({ spotify }) {
  const [{top_hits},dispatch] = useMarketValue();

  return (
    <div className='bg-gradient-to-b from-gray-900 to-black p-4'>
      <Header spotify={spotify} /> 
      <div className="body-content flex-col -mt-1 rounded-xl p-5 w-full">
        <div className="box w-full rounded-xl bg-gray-900">
          <div className="card rounded-2xl flex transition duration-500 ease-in-out transform hover:scale-105">
            <div className="img p-4 m-4 ">
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
            <div className="discription text-white p-16 ml-16">
              <h2><strong>{top_hits?.description}</strong></h2>
            </div>
          </div>
        </div>
        <Icons/>
        <div className="list -mb-9" style={{ background: "#121212", maxHeight: "230px", overflowY: "auto", WebkitOverflowScrolling: "touch" }}>
        {top_hits?.tracks.items.map(item=>(
            <Songslist track={item.track}/>
        ))}
        </div>
        
      </div>
    </div>
  );
}

export default Body;
