import React, { useState, useRef, useEffect } from 'react';
import { FiEdit, FiMenu, FiUser } from 'react-icons/fi';

function MedicalChatApp() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);
  const [isHistoryVisible, setIsHistoryVisible] = useState(false); // Default hidden on mobile

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
    }
  };

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // Toggle history visibility for mobile
  const toggleHistory = () => {
    setIsHistoryVisible(!isHistoryVisible);
  };

  return (
    <div className="flex h-screen bg-gray-100 text-gray-900">
      {/* History Section */}
      <aside
        className={`${
          isHistoryVisible ? 'w-64' : 'w-0'
        } md:w-64 bg-white border-r border-gray-300 transition-all duration-300 overflow-hidden`}
      >
        <div className="flex justify-between items-center bg-blue-600 text-white p-5">
          {/* Edit History Button */}
          <button className="flex items-center space-x-2">
            <FiEdit />
            <span>Edit History</span>
          </button>

          {/* Hamburger Menu */}
          <button onClick={toggleHistory} className="focus:outline-none md:hidden">
            <FiMenu />
          </button>
        </div>
        {/* History Content */}
        <div className="p-4">
          <h2 className="font-bold text-lg mb-4">Chat History</h2>
          <ul className="space-y-2">
            <li className="bg-gray-200 p-2 rounded-lg">Chat with Dr. Smith</li>
            <li className="bg-gray-200 p-2 rounded-lg">Follow-up with Nurse</li>
            <li className="bg-gray-200 p-2 rounded-lg">Health Report Review</li>
          </ul>
        </div>
      </aside>

      {/* Chat Section */}
      <div className="flex-grow flex flex-col">
        {/* Header */}
        <header className="bg-blue-600 flex justify-between items-center p-4 text-white">
          <h1 className="text-lg font-bold">Medical Chat</h1>

          {/* Hamburger for Mobile */}
          <button onClick={toggleHistory} className="md:hidden">
            <FiMenu className="text-2xl" />
          </button>
            
          {/* Account Icon */}
          <div>
            <FiUser className="text-2xl" />
          </div>
        </header>

        {/* Chat Area */}
        <div className="flex-grow overflow-y-auto p-6 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`rounded-xl p-4 max-w-lg ${
                  message.sender === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-900'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
          {/* Dummy div to scroll to */}
          <div ref={chatEndRef}></div>
        </div>

        {/* Input Section */}
        <div className="bg-white border-t border-gray-300 p-4 flex items-center">
          <input
            type="text"
            className="flex-grow bg-gray-200 text-gray-900 px-4 py-2 rounded-lg focus:outline-none"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <button
            className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            onClick={handleSendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default MedicalChatApp;
