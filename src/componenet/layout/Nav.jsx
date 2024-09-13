import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={"sticky bg-gray-100 md:fixed md:bg-transparent w-full top-0 z-50 p-4 py-6 tracking-widest text-lg"}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Brand Name */}
        <a href="/" className="font-semibold text-2xl">
          Medibot
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-12">
          <li className="group w-fit flex-col flex">
            <a
              className="inline-block group-hover:bg-yellow-200 font-semibold"
              href="/"
            >
              Home
            </a>
            <span className="h-0.5 bg-black w-0 group-hover:w-full mt-2 transition-all"></span>
          </li>
          <li className="group w-fit flex flex-col">
            <a
              className="inline-block group-hover:bg-yellow-200 font-semibold"
              href="/#features"
            >
              Feature
            </a>
            <span className="h-0.5 bg-black w-0 group-hover:w-full mt-2 transition-all"></span>
          </li>
          <li className="group w-fit flex flex-col">
            <a
              className="inline-block group-hover:bg-yellow-200 font-semibold"
              href="/chat"
            >
              chat
            </a>
            <span className="h-0.5 bg-black w-0 group-hover:w-full mt-2 transition-all"></span>
          </li>
          <li className="group w-fit flex flex-col">
            <a
              className="inline-block group-hover:bg-yellow-200 font-semibold"
              href="/#about"
            >
              About
            </a>
            <span className="h-0.5 bg-black w-0 group-hover:w-full mt-2 transition-all"></span>
          </li>
          <li className="group w-fit flex flex-col">
            <a
              className="inline-block group-hover:bg-yellow-200 font-semibold"
              href="/contactus"
            >
              Contact
            </a>
            <span className="h-0.5 bg-black w-0 group-hover:w-full mt-2 transition-all"></span>
          </li>
        </ul>

        {/* Login Button */}
        <button onClick={()=>navigate('/login')} className="hidden md:inline-block font-bold px-4 py-2 border rounded hover:bg-yellow-200 h-fit">
          Login
        </button>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className=" md:hidden ">
          <ul className="space-y-4 text-center mt-4">
            <li>
              <a className="block py-2 hover:bg-yellow-200" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="block py-2 hover:bg-yellow-200" href="/#features">
                Feature
              </a>
            </li>
            <li>
              <a className="block py-2 hover:bg-yellow-200" href="/chat">
                Chat
              </a>
            </li>
            
            <li>
              <a className="block py-2 hover:bg-yellow-200" href="/#about">
                About
              </a>
            </li>
            <li>
              <a className="block py-2 hover:bg-yellow-200" href="/contactus">
                Contact
              </a>
            </li>
            <li>
              <button onClick={()=>navigate('/login')} className="block w-full font-bold px-4 py-2 border rounded hover:bg-yellow-200">
                Login
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
