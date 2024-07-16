import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/Hero'
import Marquee from './components/Testimonial'
import About from './components/Ads'
import Featured from './components/SmartSnacks'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';

function App() {


  const locomotiveScroll = new LocomotiveScroll();


  return (
    <div className='w-full min-h-screen  text-white bg-zinc-800'>
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Featured />
      <Footer />
    </div>
  )
}

export default App


