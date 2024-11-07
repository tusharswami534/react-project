import React from 'react'
import { useLocation } from 'react-router-dom'

const HeaderLogo = () => {
    const location = useLocation().pathname
  return (
    <div className={`${location === '/' ? "text-red-900 text-5xl text-center bg-blue-500" : "text-black text-center bg-red-500 text-5xl"}`}>Use  location</div>
  )
}

export default HeaderLogo