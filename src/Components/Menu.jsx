import React from 'react';

function Menu({ icon, option }) {
  return (
    <div className='flex ml-8'>
      <div className="box1 p-4 size-14">
        <img src={icon} alt="" />
      </div>
      <div className="box2 text-white p-4">
        <h1><strong>{option}</strong></h1>
      </div>
    </div>
  );
}

export default Menu;
