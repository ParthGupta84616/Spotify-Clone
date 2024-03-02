import React from 'react';

function Menu({ icon, option }) {
  return (
    <div className='flex ml-4 md:ml-8'>
      <button className="focus:outline-none flex">
        <div className="box1 p-2 md:p-4 size-14">
          <img src={icon} alt="" className="menu-icon hover:scale-110 transition-transform duration-300" />
        </div>
        <div className="box2 text-white p-2 md:p-4">
          <h1 className="menu-option hover:text-blue-500 transition-color duration-300"><strong>{option}</strong></h1>
        </div>
      </button>
    </div>
  );
}

export default Menu;
