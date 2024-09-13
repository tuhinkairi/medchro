import React from 'react'
import Banner from './banner'
import ShowCase from './ShowCase'
import Vision from './Vision'
import TestimonialSlider from './Testimonial'
import About from './About'
import FAQ from './FAQ'

export default function Home() {
  return (
    <main>
      <Banner/>
      <ShowCase/>
      <Vision/>
      <TestimonialSlider/>
      <About/>
      <FAQ/>
    </main>
  )
}
