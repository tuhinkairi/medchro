import React from 'react'
import Social from '../utility/Social'

export default function Footer() {
  return (
    <footer className='bg-gray-950 p-10 font-subheadingFont content-center relative z-50 text-gray-200 space-y-4'>
        <h1 className=' font-headingFont text-6xl'>MediBot</h1>
        <h2 className='text-xl '>Get Assistance to Imporve Health</h2>
        <span className='inline-block'>Contact Us - <a href="#" className=' lowercase hover:underline hover:text-yellow-200'>tuhinkairii@gmail.com</a></span>
        <div className='pt-6'>
        <Social/>
        </div>
        
    </footer>
  )
}
