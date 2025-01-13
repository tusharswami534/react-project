import React from 'react'
import { Tilt } from 'react-tilt'

const defaultOptions = {
	reverse:        false, 
	max:            35,    
	perspective:    1000,  
	scale:          1.1,    
	speed:          1000,  
	transition:     true, 
	axis:           null,  
	reset:          true,  
	easing:         "cubic-bezier(.03,.98,.52,.99)",  
}

const TiltJs = () => {
  return (
    <div className='flex items-center py-12 flex-col  justify-center'>
                   <h1 className='text-5xl text-black font-bold pb-6 text-center'>TiltJs </h1>
         <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
         <div  className='size-56 text-7xl cursor-pointer bg-blue-400 flex justify-center items-center'>
         🌳
            </div>    
    </Tilt>
        
    </div>
  )
}

export default TiltJs