import React from 'react';

export default function ShowCase() {
  return (
    <div id="features" className="min-h-screen py-20 bg-white relative z-10 flex items-center justify-center">
      <div className="showcase grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-5/6 mx-auto">
        
        {/* AI-Powered Healthcare Card */}
        <div className="rounded shadow-lg group relative hover:cursor-pointer w-full border border-zinc-400 h-48 sm:col-span-2 flex items-center justify-center transition-transform transform hover:scale-105 hover:shadow-2xl">
          <h2 className="text-3xl font-semibold px-3 group-hover:text-yellow-500 transition-colors">
            AI-Powered Healthcare
          </h2>
          <p className="text-lg md:text-xl p-3 absolute opacity-0 bg-yellow-200 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-10 h-full w-full top-0 flex items-center justify-center text-center">
            Medibot leverages cutting-edge AI to provide precise diagnostics, smarter treatments, and improved patient care.
          </p>
        </div>

        {/* Real-Time Quick Response Card */}
        <div className="rounded shadow-lg group relative hover:cursor-pointer w-full border border-zinc-400 h-48 flex items-center justify-center transition-transform transform hover:scale-105 hover:shadow-2xl">
          <h2 className="text-3xl font-semibold px-3 group-hover:text-yellow-500 transition-colors">
            Real-Time Quick Response
          </h2>
          <p className="text-lg md:text-xl p-3 absolute opacity-0 bg-yellow-200 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-10 h-full w-full top-0 flex items-center justify-center text-center">
            Our AI-driven systems ensure rapid, accurate responses in critical situations, providing support when it matters most.
          </p>
        </div>

        {/* Enhanced Medical Capabilities Card */}
        <div className="rounded shadow-lg group relative hover:cursor-pointer w-full border border-zinc-400 h-48 flex items-center justify-center transition-transform transform hover:scale-105 hover:shadow-2xl">
          <h2 className="text-3xl font-semibold px-3 group-hover:text-yellow-500 transition-colors">
            Enhanced Medical Capabilities
          </h2>
          <p className="text-lg md:text-xl p-3 absolute opacity-0 bg-yellow-200 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-10 h-full w-full top-0 flex items-center justify-center text-center">
            Unlock the potential of healthcare with Medibot’s AI, assisting doctors in providing advanced, personalized care.
          </p>
        </div>

        {/* Why Choose Medibot Card */}
        <div className="rounded shadow-lg group relative hover:cursor-pointer w-full border border-zinc-400 h-48 sm:col-span-2 flex items-center justify-center transition-transform transform hover:scale-105 hover:shadow-2xl">
          <h2 className="text-3xl font-semibold px-3 group-hover:text-yellow-500 transition-colors">
            Why Choose Medibot
          </h2>
          <p className="text-lg md:text-xl p-3 absolute opacity-0 bg-yellow-200 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-10 h-full w-full top-0 flex items-center justify-center text-center">
            Medibot combines innovative AI technology, deep healthcare expertise, and a patient-centric approach to deliver better outcomes.
          </p>
        </div>
      </div>
    </div>
  );
}
