import React, { useEffect, useState } from 'react'
import PreloaderGif from '../../assets/gif/preloader.gif'

const Preloader = () => {
  const [preloader , setPreloader] = useState(true)
  useEffect(() => {
    setTimeout(() => {
        setPreloader(false)
    }, 1000)
},)

  return (
    <div>
      {preloader ? (
        <div className='min-h-screen fixed z-[100] h-full w-full top-0 right-0'>
          <img className='w-full h-full' src={PreloaderGif} alt="preloader" />
        </div>
      ) : null}
       
    </div>
  )
}

export default Preloader