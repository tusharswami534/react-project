import React from 'react'
import Lottie from 'lottie-react'
import groovyWalkAnimation from '../../assets/lottie/groovyWalkAnimation.json'

const LottieTesting = () => {
  return (
    <div className='relative'>
      <div className='max-w-[1140px] w-full min-h-[320px] overflow-hidden mx-auto'>
        <div className='max-w-80 lottie-animation'>
       <Lottie animationData={groovyWalkAnimation} loop={true} speed={2} />
       </div>
       </div>
    </div>
  )
}

export default LottieTesting