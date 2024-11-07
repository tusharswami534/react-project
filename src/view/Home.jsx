import React from 'react'
import UseEffect from '../components/home/UseEffect'
import UseState from '../components/home/UseState'
import ShowCard from '../components/home/ShowCard'
import { TestEmailJs } from '../components/home/TestEmailJs'
import HeaderLogo from '../components/common/HeaderLogo'
import YearFunction from '../components/common/YearFunction'

const Home = () => {
  return (
    <div>
        <HeaderLogo/>
        <UseEffect/>
        <UseState/>
        <ShowCard/>
        <TestEmailJs/>
        <YearFunction/>
    </div>
  )
}

export default Home