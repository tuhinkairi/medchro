import React, { useState } from 'react';

export default function Settings() {
  
  const [activeSection, setActiveSection] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  // State for profile inputs
  const [fullName, setFullName] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // State for notification settings
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [smsNotifications, setSmsNotifications] = useState(false);

  // State for privacy settings
  const [privacy, setPrivacy] = useState('');

  const toggleSection = (section) => {
    if (activeSection === section) {
      setActiveSection(null); // Collapse if the section is already active
    } else {
      setActiveSection(section); // Open the selected section
    }
    setSuccessMessage(''); // Reset the success message when changing sections
  };

  const handleSaveChanges = (section) => {
    // Simulate saving process
    setSuccessMessage(`${section} changes saved successfully!`);

    // Reset fields after save
    if (section === 'Profile') {
      setFullName('');
      setNewPassword('');
      setConfirmPassword('');
    } else if (section === 'Notification') {
      setEmailNotifications(false);
      setSmsNotifications(false);
    } else if (section === 'Privacy') {
      setPrivacy('');
    }

    // You can add logic here to actually handle saving the settings (e.g., API call)
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
      <h2 className="text-xl font-bold">Settings</h2>
      <p className="text-gray-600">Manage your user profile and preferences.</p>

      <div className="space-y-4">
        {successMessage && (
          <div className="p-4 bg-green-100 text-green-700 rounded">
            {successMessage}
          </div>
        )}

        {/* Profile Settings */}
        <button 
          onClick={() => toggleSection('profile')} 
          className="block w-full bg-gray-50 p-4 rounded-lg shadow"
        >
          <h3 className="text-lg font-semibold">Profile Settings</h3>
          <p className="text-sm text-gray-600 mt-2">Update your personal details and change your password.</p>
        </button>
        {activeSection === 'profile' && (
          <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
            <p className="text-sm">Here you can edit your profile details and change your password.</p>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Full Name"
              className="block w-full p-2 mt-2 border"
            />
            <div className='flex gap-5'>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="New Password"
                className="block w-1/2 p-2 mt-2 border"
              />
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                className="block w-1/2 p-2 mt-2 border"
              />
            </div>
            <button
              onClick={() => handleSaveChanges('Profile')}
              className="mt-4 bg-blue-500 text-white p-2 rounded"
            >
              Save Changes
            </button>
          </div>
        )}

        {/* Notification Settings */}
        <button 
          onClick={() => toggleSection('notifications')} 
          className="block w-full bg-gray-50 p-4 rounded-lg shadow"
        >
          <h3 className="text-lg font-semibold">Notification Settings</h3>
          <p className="text-sm text-gray-600 mt-2">Control your notification preferences.</p>
        </button>
        {activeSection === 'notifications' && (
          <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
            <p className="text-sm">Here you can set your notification preferences.</p>
            <label className="block mt-2">
              <input
                type="checkbox"
                checked={emailNotifications}
                onChange={(e) => setEmailNotifications(e.target.checked)}
                className="mr-2"
              />
              Email Notifications
            </label>
            <label className="block mt-2">
              <input
                type="checkbox"
                checked={smsNotifications}
                onChange={(e) => setSmsNotifications(e.target.checked)}
                className="mr-2"
              />
              SMS Notifications
            </label>
            <button
              onClick={() => handleSaveChanges('Notification')}
              className="mt-4 bg-blue-500 text-white p-2 rounded"
            >
              Save Changes
            </button>
          </div>
        )}

        {/* Privacy Settings */}
        <button 
          onClick={() => toggleSection('privacy')} 
          className="block w-full bg-gray-50 p-4 rounded-lg shadow"
        >
          <h3 className="text-lg font-semibold">Privacy Settings</h3>
          <p className="text-sm text-gray-600 mt-2">Manage who can see your profile and activity.</p>
        </button>
        {activeSection === 'privacy' && (
          <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
            <p className="text-sm">Here you can control your privacy settings.</p>
            <label className="block mt-2">
              <input
                type="radio"
                name="privacy"
                value="public"
                checked={privacy === 'public'}
                onChange={(e) => setPrivacy(e.target.value)}
                className="mr-2"
              />
              Public
            </label>
            <label className="block mt-2">
              <input
                type="radio"
                name="privacy"
                value="friends"
                checked={privacy === 'friends'}
                onChange={(e) => setPrivacy(e.target.value)}
                className="mr-2"
              />
              Friends Only
            </label>
            <label className="block mt-2">
              <input
                type="radio"
                name="privacy"
                value="private"
                checked={privacy === 'private'}
                onChange={(e) => setPrivacy(e.target.value)}
                className="mr-2"
              />
              Private
            </label>
            <button
              onClick={() => handleSaveChanges('Privacy')}
              className="mt-4 bg-blue-500 text-white p-2 rounded"
            >
              Save Changes
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
