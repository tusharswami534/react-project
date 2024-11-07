import React, { useEffect, useState } from 'react'

const UseEffect = () => {
const [count, setCount] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setCount(count + 1 === 5 ? 0 : count + 1);
        }, 1000);
    },)
    
  return (
    <div className='py-12'>
     <h1 className='text-5xl text-black font-bold pb-6 text-center'>Use Effect </h1>
    <p className='text-3xl text-red-500 text-center'>{count}</p>
        <div></div>
    </div>
  )
}

export default UseEffect