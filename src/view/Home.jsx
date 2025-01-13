import React from 'react'
import UseEffect from '../components/home/UseEffect'
import UseState from '../components/home/UseState'
import ShowCard from '../components/home/ShowCard'
import { TestEmailJs } from '../components/home/TestEmailJs'
import YearFunction from '../components/common/YearFunction'
import TyperWrite from '../components/home/TyperWrite'
import CounterTest from '../components/home/CounterTest'
import FormValidation from '../components/home/FormValidation'
import CustomAccordion from '../components/home/CustomAccordion'
import UseLocationPractice from '../components/common/UseLocationPractice'
import Header from '../components/common/Header'

const Home = () => {
  return (
    <div>
      <Header/>
      <CustomAccordion/>
      <CounterTest/>
        <UseEffect/>
        <TyperWrite/>
        <UseState/>
        <ShowCard/>
        <UseLocationPractice/>
        <FormValidation/>
        <TestEmailJs/>
        <YearFunction/>
    </div>
  )
}

export default Home