import React, { useState } from 'react';

const AuthForm = () => {
  const [isRegistering, setIsRegistering] = useState(true);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    age: '',
    gender: '',
    dob: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegistering) {
      // Registration logic here
      console.log('Registering:', formData);
    } else {
      // Login logic here
      console.log('Logging in:', { email: formData.email, password: formData.password });
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 font-subheadingFont">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md overflow-hidden">
        <h2 className="text-2xl font-bold text-center mb-6">
          {isRegistering ? 'Register' : 'Login'}
        </h2>

        <form onSubmit={handleSubmit}>
          {isRegistering && (
            <>
              <div className="flex flex-wrap mb-4 -mx-2">
                <div className="w-1/2 px-2 mb-4">
                  <label className="block text-gray-700">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="w-1/2 px-2 mb-4">
                  <label className="block text-gray-700">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
              </div>
              <div className="flex flex-wrap mb-4 -mx-2">
                <div className="w-1/2 px-2 mb-4">
                  <label className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="w-1/2 px-2 mb-4">
                  <label className="block text-gray-700">Age</label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
              </div>
              <div className="flex flex-wrap mb-4 -mx-2">
                <div className="w-1/2 px-2 mb-4">
                  <label className="block text-gray-700">Gender</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="w-1/2 px-2 mb-4">
                  <label className="block text-gray-700">Date of Birth</label>
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
              </div>
            </>
          )}
          {/* Login form fields */}
          {!isRegistering && (
            <>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
            </>
          )}
          {isRegistering && (
            <div className="mb-4">
              <label className="block text-gray-700">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            {isRegistering ? 'Register' : 'Login'}
          </button>
        </form>

        <div className="text-center mt-4">
          <button
            className="text-blue-500 hover:underline"
            onClick={() => setIsRegistering(!isRegistering)}
          >
            {isRegistering ? 'Already have an account? Login' : "Don't have an account? Register"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
