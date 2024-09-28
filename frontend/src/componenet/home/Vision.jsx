import React from 'react';
import CircleFlow from '../utility/CircleFlow';

export default function Vision() {
  return (
    <div className="min-h-screen py-20 bg-gradient-to-r from-gray-100 to-gray-200 relative z-10 flex items-center justify-center">
      <div className="text-center space-y-8 px-4 md:px-8 lg:px-0">
        {/* Vision Header */}
        <h1 className="font-extrabold text-gray-900 text-4xl md:text-6xl lg:text-7xl leading-tight">
          Our Vision
        </h1>
        
        {/* Vision Text */}
        <p className="w-full md:w-2/3 lg:w-1/2 mx-auto text-base md:text-lg lg:text-xl leading-relaxed text-gray-700">
          At Medibot, we envision a future where healthcare is smarter, more precise, and accessible for all. 
          By harnessing the power of Artificial Intelligence, we aim to empower medical professionals with 
          cutting-edge tools to enhance diagnostics, streamline treatments, and deliver personalized care. 
          Our goal is to bridge the gap between technology and patient well-being, ensuring every individual 
          receives efficient, accurate, and compassionate care powered by AI-driven innovation.
        </p>

        {/* Circle Flow Animation or Element */}
        <CircleFlow className="w-full h-auto mx-auto" />
      </div>
    </div>
  );
}
