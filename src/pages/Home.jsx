import React from 'react'
import Carousel from '../components/Carousel'
import MidBanner from '../components/Banner'
import Features from '../components/Features'
import Footer from '../components/Footer'



const Home = () => {
  return (
    <div>
      <Carousel/>
      <MidBanner/>
      <Features/>
      <Footer/>
    </div>
  )
}

export default Home