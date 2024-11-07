import React from 'react'
import AnimateCss from '../components/second/AnimateCss'
import TiltJs from '../components/second/TiltJs'
import LottieTesting from '../components/second/LottieTesting'
// import Swiper from '../components/second/Swiper'
import HeaderLogo from '../components/common/HeaderLogo'
import YearFunction from '../components/common/YearFunction'

const Second = () => {
  return (
    <div>
      <HeaderLogo/>
        <AnimateCss/>
        <TiltJs/>
        <LottieTesting/>
        <YearFunction/>
        {/* <Swiper/> */}
    </div>
  )
}

export default Second