import React from 'react'

export default function Settings() {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <h2 className="text-xl font-bold">Settings</h2>
        <p className="text-gray-600">Manage your user profile and preferences.</p>
  
        <div className="space-y-4">
          <button className="block w-full bg-gray-50 p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Profile Settings</h3>
            <p className="text-sm text-gray-600 mt-2">Update your personal details and change your password.</p>
          </button>
          <button className="block w-full bg-gray-50 p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Notification Settings</h3>
            <p className="text-sm text-gray-600 mt-2">Control your notification preferences.</p>
          </button>
          <button className="block w-full bg-gray-50 p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Privacy Settings</h3>
            <p className="text-sm text-gray-600 mt-2">Manage who can see your profile and activity.</p>
          </button>
        </div>
      </div>
    );
  }
  