import React from 'react'
import { useSelector } from 'react-redux';

export default function HomeContent() {
  const activeAppointment = useSelector((state)=>state.appointmentBook.value)

    return (
      <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
        <h2 className="text-xl font-bold">Welcome to Your Dashboard</h2>
        <p className="mt-2 text-gray-600">Here is an overview of your recent activities.</p>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-700">Upcoming Appointments</h3>
            <p className="mt-2 text-4xl font-bold text-blue-900">{activeAppointment}</p>
          </div>
  
          <div className="bg-green-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-green-700">Completed Health Goals</h3>
            <p className="mt-2 text-4xl font-bold text-green-900">5</p>
          </div>
  
          <div className="bg-yellow-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-yellow-700">Unread Messages</h3>
            <p className="mt-2 text-4xl font-bold text-yellow-900">12</p>
          </div>
        </div>
      </div>
    );
  }
  