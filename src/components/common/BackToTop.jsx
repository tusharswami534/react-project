import React, { useEffect, useState } from 'react'

const BackToTop = () => {
   const [scrollTop , setToTop] = useState(false)
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth'})
    }
 const setHandler = () => {
    setToTop (window.scrollY > 100)
 }
    
    useEffect(() => {
        window.addEventListener("scroll" , setHandler )
    }, [])
    

    
  return (
    <div>
        {scrollTop && (  <button onClick={handleClick} className='fixed bottom-5 right-5 bg-black text-white py-2 px-4 rounded-full hover:bg-white hover:text-black transition duration-300'>Top</button> )
    }
    </div>
  )
}

export default BackToTop