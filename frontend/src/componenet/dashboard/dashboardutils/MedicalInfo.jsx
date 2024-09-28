import React from 'react'

export default function MedicalInfo() {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <h2 className="text-xl font-bold">Medical Information</h2>
        <p className="text-gray-600">Access important medical resources and information.</p>
  
        <ul className="space-y-4">
          <li className="bg-gray-50 p-4 rounded-lg shadow flex justify-between items-center">
            <span>Health & Wellness Articles</span>
            <a href="#" className="text-blue-500 text-sm">Read more</a>
          </li>
          <li className="bg-gray-50 p-4 rounded-lg shadow flex justify-between items-center">
            <span>Fitness Tips</span>
            <a href="#" className="text-blue-500 text-sm">Explore</a>
          </li>
          <li className="bg-gray-50 p-4 rounded-lg shadow flex justify-between items-center">
            <span>Mental Health Resources</span>
            <a href="#" className="text-blue-500 text-sm">Learn more</a>
          </li>
        </ul>
      </div>
    );
  }
  