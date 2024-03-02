import React from 'react';

function Box1() {
  return (
    <div className='w-full flex'>
      <div>
        <button className='focus:outline-none'>
          <img className='w-20 h-20 m-3 rounded-xl hover:scale-110 transition duration-300 ease-in-out transform' src="https://imgs.search.brave.com/wvHF7FALUPXK-S4FuonoJv-B94SRNb6Xcpi4h9n2Pck/rs:fit:500:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE3LzA1/L2xvZ28tWW91VHVi/ZS01MDB4NTAwLmpw/Zw" alt="" />
        </button>
      </div>
      <div className="name text-xl mt-6 text-white flex flex-col">
        <button className='focus:outline-none'>
          <h1 className="hover:underline hover:text-white"><strong>Youtube</strong></h1>
        </button>
        <button className='focus:outline-none'>
          <p className='text-sm mt-1 hover:underline hover:text-white'>Makil</p>
        </button>
      </div>
    </div>
  );
}

export default Box1;
