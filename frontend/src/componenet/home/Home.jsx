import React from 'react'
import Banner from './Banner'
import ShowCase from './ShowCase'
import Vision from './Vision'
import TestimonialSlider from './Testimonial'
import About from './About'
import FAQ from './FAQ'
import useDocumentTitle from '../layout/useDocumentTitle'

export default function Home() {
  useDocumentTitle('SageAi')
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
