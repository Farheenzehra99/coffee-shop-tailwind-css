"use client"
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import Hero from '@/src/components/Hero/Hero';
import Services from '@/src/app/Services/page';
import Banner from '@/src/components/Banner/Banner';
import PlayStore from '@/src/components/PlayStore/PlayStore';
import Testimonials from '@/src/app/testimonials/page';
import Contact from './contact/page';


const Home = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, [])


  return (
    <>
    <Hero/>
    <Services/>
    <Banner/>
    <PlayStore/>
    <Testimonials/>
    <Contact/>
    </>
  )
}

export default Home;