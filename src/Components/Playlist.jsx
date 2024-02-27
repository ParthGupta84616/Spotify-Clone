import React from 'react'

function Playlist() {
  return (
    <div className=" flex Box2  p-4 text-xl" >
        <div className="playlogo size-7 mr-5 ml-8">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABFElEQVR4nO3YsS4EURSA4RuK1WqQSBQShVo8hsJTaDV6EoV4CS8gkVB4Aq1oUaDZiEpB2OrTbCKZIGOEOTPOV8+du/89M5lkS0kppZT+CSxgHbs4xRkmS2SYq/zoBx+bqi5szSchjzWXhw/RKCQa9WVItIkMSmS+dotDbJTovBviBNtYw2zpEmONF7YhQ3r9aEUjQ4KRE+nLRLQoQ7pAvuzB6MNEMNGXkKXOh2CAo8YhbXwrKvvPYxPX31kXIgSL2MFF0wOI8DLvYdTkAMLA1k8mGQauanaMSmR4rRlyWSLDXc2Q/RIZjmtE3GOmyc1/VWWvFTx/cfkQq01P6c9Cxvst4wA3eMETzsd/jU43ikgppdIVb4uQyed/dF8wAAAAAElFTkSuQmCC"/>  
        </div>
        <div className=''>
          <h1 className='text-white'><strong>Playlist</strong></h1>
        </div>
    </div>
  )
}

export default Playlist