import React from 'react'
import Hero from '../components/Hero'
import Steps from '../components/Steps'
import Description from '../components/Description'
import Testimonial from '../components/Testimonial'
import Examples from '../components/Examples'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Examples/>
      <Steps/>
      <Description/>
      <Testimonial/>
    </div>
  )
}

export default Home
