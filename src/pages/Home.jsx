import React from 'react'
import Carousel from '../components/Carousel'
import MidBanner from '../components/Banner'
import Features from '../components/Features'
import Footer from '../components/Footer'



const Home = () => {
  return (
    <div className=" bg-linear-to-br from-slate-50 via-indigo-50 to-slate-100 "
>
      <Carousel/>
      <MidBanner/>
      <Features/>
      
    </div>
  )
}

export default Home