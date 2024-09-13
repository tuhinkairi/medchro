import React, { useState, useRef, useEffect } from "react";
import { FiEdit, FiMenu, FiMoreVertical, FiTrash2, FiUser } from "react-icons/fi";
import { SlSizeActual, SlSizeFullscreen } from "react-icons/sl";

function MedicalChatApp() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);
  const [isHistoryVisible, setIsHistoryVisible] = useState(true); // Toggle history section
  const [showDelete, setShowDelete] = useState(null); // Track which history item to show delete option

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");
    }
  };

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // Toggle history visibility for mobile
  const toggleHistory = () => {
    setIsHistoryVisible(!isHistoryVisible);
  };
  // Toggle the delete button
  const toggleDeleteOption = (index) => { 
    setShowDelete(showDelete === index ? null : index);
  };

  // Delete the history item (mock function)
  const deleteHistory = (index) => {
    console.log(`Delete history at index: ${index}`);
  };

  return (
    <main className="flex h-screen bg-gray-100 text-gray-900 font-subheadingFont">
      {/* History Section */}
      <aside
        className={`${
          isHistoryVisible ? "block" : "hidden"
        } w-64 bg-white border-r border-gray-300 transition-all duration-300 `}
      >
        <div className="flex justify-between items-center p-4">
          {/* Edit History Button */}
          <button className="flex items-center space-x-2">
            <FiEdit />
          </button>

          {/* Hamburger Menu */}
          <button onClick={toggleHistory}  className="focus:outline-none">
            <SlSizeActual />
          </button>
        </div>

        {/* History Content */}
        <div className="p-4">
          <h2 className="font-bold text-lg mb-4">Chat History</h2>
          <ul className="space-y-2">
            {[
              "Chat with Dr. Smith",
              "Follow-up with Nurse",
              "Health Report Review",
            ].map((history, index) => (
              <li
                key={index}
                className="relative bg-gray-200 p-2 rounded-lg flex justify-between items-center"
              >
                {history}
                <button
                  className="ml-2"
                  onClick={() => toggleDeleteOption(index)}
                >
                  <FiMoreVertical className="text-gray-600" />
                </button>
                {/* Delete Button */}
                {showDelete === index && (
                  <button
                    className="absolute -right-20  z-50 bg-red-600 text-white px-2 py-1 rounded-lg"
                    onClick={() => deleteHistory(index)}
                  >
                    <FiTrash2 className="inline mr-1" />
                    Delete
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      </aside>
      {/* Chat Section */}
      <div className="flex-grow flex flex-col">
        {/* Header */}
        <header className=" flex justify-between items-center p-4   ">
          <button onClick={toggleHistory} className="focus:outline-none">
            {!isHistoryVisible ? <SlSizeFullscreen /> : <></>}
          </button>
          <h1 className="text-xl font-bold font-headingFont">MediBot</h1>
          {/* Account Icon */}
          <div>
            <a href="/account"><FiUser className="text-2xl rounded-full border border-zinc-400 mr-8" /></a>
          </div>
        </header>

        {/* Chat Area */}
        <div className="flex-grow overflow-y-auto p-6 px-28 space-y-4 overflow-hidden">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`rounded-xl p-4 max-w-lg ${
                  message.sender === "user"
                    ? "bg-zinc-900 text-white"
                    : "bg-gray-200 text-gray-900"
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
        <div className="bg-white border-t border-gray-300 p-4 px-28 flex items-center">
          <input
            type="text"
            className="flex-grow bg-gray-200 text-gray-900 px-4 py-2 rounded-lg focus:outline-none"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <button
            className="ml-4 bg-zinc-900 text-white px-4 py-2 rounded-lg hover:bg-zinc-700"
            onClick={handleSendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </main>
  );
}

export default MedicalChatApp;
