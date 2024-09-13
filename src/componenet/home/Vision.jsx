import React from 'react';
import CircleFlow from '../utility/CircleFlow';

export default function Vision() {
  return (
    <div className="min-h-screen py-20 bg-gray-100 relative z-10 flex items-center justify-center">
      <div className="text-center space-y-6 px-4 md:px-8 lg:px-0">
        <h1 className="font-bold text-gray-900 text-4xl md:text-5xl lg:text-7xl">Our Vision</h1>
        <p className="w-full md:w-2/3 lg:w-1/3 mx-auto text-base md:text-lg lg:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus excepturi eaque maiores possimus nulla dolorum
          tempora alias, magni fuga earum incidunt vitae ut debitis obcaecati in at! Sit, dolore temporibus.
        </p>
        <CircleFlow />
      </div>
    </div>
  );
}
