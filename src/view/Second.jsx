import React from 'react'
import AnimateCss from '../components/second/AnimateCss'
import TiltJs from '../components/second/TiltJs'
import LottieTesting from '../components/second/LottieTesting'
import HeaderLogo from '../components/common/HeaderLogo'
import YearFunction from '../components/common/YearFunction'
import Navbar from '../components/common/Navbar'
import MySwiper from '../components/second/MySwiper'
import FormValidation from '../components/home/FormValidation'


const Second = () => {
  return (
    <div>
      <Navbar/>
      <HeaderLogo/>
        <AnimateCss/>
        <TiltJs/>
        <LottieTesting/>
        <MySwiper/>
        <FormValidation/>
        <YearFunction/>
    </div>
  )
}

export default Second