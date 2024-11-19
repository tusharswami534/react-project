import React from 'react'
import UseEffect from '../components/home/UseEffect'
import UseState from '../components/home/UseState'
import ShowCard from '../components/home/ShowCard'
import { TestEmailJs } from '../components/home/TestEmailJs'
import HeaderLogo from '../components/common/HeaderLogo'
import YearFunction from '../components/common/YearFunction'
import TyperWrite from '../components/home/TyperWrite'
import Navbar from '../components/common/Navbar'
import CounterTest from '../components/home/CounterTest'
import FormValidation from '../components/home/FormValidation'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <CounterTest/>
        <UseEffect/>
        <TyperWrite/>
        <UseState/>
        <ShowCard/>
        <HeaderLogo/>
        <FormValidation/>
        <TestEmailJs/>
        <YearFunction/>
    </div>
  )
}

export default Home