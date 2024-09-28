import React from 'react'
import AppointmentChart from './AppointmentChart';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Appointments() {
  const navigate = useNavigate('/booking')

    return (
      <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <h2 className="text-xl font-bold">Manage Appointments</h2>
        <p className="text-gray-600">Here you can manage your upcoming and past appointments.</p>
  
          <AppointmentChart />
        <button onClick={()=>navigate('/Booking')} className='bg-blue-500 hover:bg-blue-300 text-white px-4 py-2'>book appointment</button>
      </div>
    );
  }
  