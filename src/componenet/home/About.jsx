import React from "react";

export default function About() {
  return (
    <div id="about" className="min-h-screen bg-white relative z-10 flex flex-col justify-center items-center px-5 md:px-20 space-y-6 md:space-y-20 py-20">
      <h1 className="text-5xl md:text-7xl text-center">About Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-10">
        <p className="md:text-start text-lg md:text-2xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem libero
          accusamus voluptate accusantium molestias? Soluta, excepturi
          necessitatibus. Ab commodi ullam a asperiores similique, culpa quam
          excepturi aspernatur perspiciatis nihil sint.
        </p>
        <div className="relative w-48 h-48 md:w-60 md:h-60 m-auto border border-gray-900 rounded-full animate-spinning grid grid-cols-2 items-center justify-center md:gap-10">
          <span className="tracking-widest w-24 h-24 bg-rose-500  rounded-full grid items-center justify-center animate-text-spinning">
            Title 1
          </span>
          <span className="tracking-widest w-24 h-24 bg-yellow-500  rounded-full grid items-center justify-center animate-text-spinning">
            Title 2
          </span>
          <span className="tracking-widest w-24 h-24 bg-blue-500  rounded-full grid items-center justify-center animate-text-spinning">
            Title 3
          </span>
          <span className="tracking-widest w-24 h-24 bg-purple-500  rounded-full grid items-center justify-center animate-text-spinning">
            Title 4
          </span>
        </div>
      </div>
    </div>
  );
}
