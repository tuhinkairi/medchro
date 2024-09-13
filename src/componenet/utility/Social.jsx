import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

export default function Social() {
  return (
    <div className="flex justify-center space-x-10 ">
        <a href="https://github.com" target="_blank" className="inline-block  hover:text-yellow-200 ">
          <FaGithub className='scale-[200%]'/>
        </a>
        <a href="https://facebook.com" target="_blank" className="inline-block  hover:text-yellow-200">
          <FaFacebookF className='scale-[200%]'/>
        </a>
        <a href="https://twitter.com" target="_blank" className="inline-block  hover:text-yellow-200">
          <FaXTwitter className='scale-[200%]'/>
        </a>
        <a href="https://instagram.com" target="_blank" className="inline-block  hover:text-yellow-200">
          <FaInstagram className='scale-[200%]'/>
        </a>
      </div>
  )
}
