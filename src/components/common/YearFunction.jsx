import React from 'react'

const YearFunction = () => {
    const year = new Date().getFullYear()
  return (
    <div className='text-3xl text-center text-black font-bold py-6'>Copyright© {year} All Rights Reserved.</div>
  )
}

export default YearFunction