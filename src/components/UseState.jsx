import React, { useState } from  'react'

const UseState = () => {
    const [name, setName] = useState('Tushar');
    
    const toggleName = () => {
        setName((prevName) => (prevName === 'Tushar' ? 'Swami' : 'Tushar'));
      };
  return (
    <div className='flex flex-col justify-center items-center gap-2'>
   <p className='text-3xl text-red-500 text-center'>{name}</p>
   <button onClick={toggleName} className='text-3xl border-2 border-red-500 py-2 px-4 rounded-md hover:bg-red-500 hover:text-white transition duration-500'>Toggle</button>
    </div>
  )
}

export default UseState