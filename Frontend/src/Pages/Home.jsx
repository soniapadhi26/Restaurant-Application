/* eslint-disable no-unused-vars */
import React from 'react'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Qualities from '../components/Qualities'
import Menu from '../components/Menu'
import WhoAreWe from '../components/WhoAreWe.jsx'
import Team from '../components/Team.jsx'
import Reservation from '../components/Reservation.jsx'
import Footer from '../components/Footer.jsx'

const Home = () => {
  return (
    <>
     <HeroSection/>
     <About/>

     <Qualities/>
     <Menu/>
     <WhoAreWe/>
     <Team/>
     <Reservation/>
     <Footer/>
    </>
  )
}

export default Home
