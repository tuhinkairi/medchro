import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your backend server.
    console.log('Form data submitted:', formData);

    // Display the success message
    setIsSubmitted(true);

    // Optionally reset the form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
    
    // Hide the message after a few seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 tracking-widest">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg px-6 py-8 lg:px-12 lg:py-4 md:w-4/5 sm:w-full mx-4">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              placeholder="something@gmail.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              placeholder="Message"
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              rows="4"
              required
            />
          </div>
          <button
            type="submit"
          className="block w-full font-bold px-4 py-2 border rounded hover:bg-yellow-200">
                Login
              </button>
        </form>

        {/* Success message */}
        {isSubmitted && (
          <div className="mt-4 p-4 text-green-700 bg-green-100 border border-green-400 rounded">
            Message sent successfully!
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
