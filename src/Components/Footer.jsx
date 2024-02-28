import React from 'react'
import Box1 from './Box1'
import Box2 from './Box2'
import Box3 from './Box3'

function Footer() {
  return (
    <div className='flex bg-black' style={{height:"20vh"}}> 
      <div className="box1 w-1/3">
        <Box1 />
      </div>
      <div className="box2 w-1/3">
      <Box2 />
      </div>
      <div className="box3 w-1/3">
      <Box3 />
      </div>
    </div>
  )
}

export default Footer