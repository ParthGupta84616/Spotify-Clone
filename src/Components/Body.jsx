import React from 'react'
import Header from './Header'

function Body({spotify}) {
  return (
    <div className='bg-gradient-to-b from-gray-900 to-black p-4 'style={{height:"80vh"}}>
         <Header spotify={spotify}/>
    </div>
  )
}

export default Body