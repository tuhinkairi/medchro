import React from 'react'
import AppointmentChart from './AppointmentChart';

export default function Appointments() {

    return (
      <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <h2 className="text-xl font-bold">Manage Appointments</h2>
        <p className="text-gray-600">Here you can manage your upcoming and past appointments.</p>
  
          <AppointmentChart />
        
      </div>
    );
  }
  