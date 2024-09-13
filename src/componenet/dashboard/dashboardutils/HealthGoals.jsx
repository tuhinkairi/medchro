import React from 'react'

export default function HealthGoals() {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <h2 className="text-xl font-bold">Health Goals</h2>
        <p className="text-gray-600">Track your progress towards your health goals.</p>
  
        <ul className="space-y-4">
          <li className="bg-gray-50 p-4 rounded-lg shadow flex justify-between items-center">
            <span>Weight Loss Goal</span>
            <span className="text-sm text-green-500">70% Completed</span>
          </li>
          <li className="bg-gray-50 p-4 rounded-lg shadow flex justify-between items-center">
            <span>Cardio Fitness Goal</span>
            <span className="text-sm text-green-500">50% Completed</span>
          </li>
          <li className="bg-gray-50 p-4 rounded-lg shadow flex justify-between items-center">
            <span>Mental Wellness Goal</span>
            <span className="text-sm text-green-500">85% Completed</span>
          </li>
        </ul>
      </div>
    );
  }
  