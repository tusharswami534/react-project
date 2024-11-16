import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'

const TyperWrite = () => {
  const [text] = useTypewriter({
    words: [ 'Hello my all friends' , 'What are you doing?'],
    loop: 0
  })

  return (
    <div className='App'>
        <div className='flex items-center justify-center'>
      <span className='text-5xl font-bold text-red-500 text-center mx-auto'> {text} ...</span>
      </div>
    </div>
  )
}
export default TyperWrite