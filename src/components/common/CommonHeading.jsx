import React from 'react'

const CommonHeading = ({Heading , ColorHeading}) => {
  return (
    <div>
        <p className='text-5xl text-black font-bold pb-6 text-center'>{Heading} <span className='text-red-500'>{ColorHeading}</span></p>
    </div>
  )
}

export default CommonHeading