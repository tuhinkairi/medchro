import React from 'react';

export default function Banner() {
  return (
    <div className="h-screen flex items-center justify-center sticky top-0 ">
      <div className="px-4 md:px-10 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold">Powered by AI</h1>
        <h2 className="text-lg md:text-xl lg:text-2xl my-6 md:my-8 lg:my-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dignissimos
          enim provident deleniti distinctio culpa minima mollitia perferendis alias,
          dolore, pariatur, itaque delectus aperiam quia excepturi vero quibusdam
          necessitatibus modi!
        </h2>
        <button className="relative inline-block border rounded-full px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 group overflow-hidden font-semibold">
          Get Started
          <span className="absolute left-0 top-0 w-0 h-full bg-yellow-200 group-hover:w-full transition-all duration-300 ease-in-out z-[-1]"></span>
        </button>
      </div>
    </div>
  );
}
