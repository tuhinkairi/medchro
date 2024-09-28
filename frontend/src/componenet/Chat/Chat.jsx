import React, { useState, useRef, useEffect } from "react";
import {
  FiEdit,
  FiMenu,
  FiMoreVertical,
  FiTrash2,
  FiUser,
} from "react-icons/fi";
import { SlSizeActual, SlSizeFullscreen } from "react-icons/sl";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useDocumentTitle from "../layout/useDocumentTitle";
import Title from "../layout/Title";

function MedicalChatApp() {
  useDocumentTitle('Chat')

  const auth = useSelector((state)=>state.authentication.auth)
  const navigate = useNavigate()
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);
  const [isHistoryVisible, setIsHistoryVisible] = useState(true); // Toggle history section
  const [showDelete, setShowDelete] = useState(null); // Track which history item to show delete option

  const handleSendMessage = async () => {
    if (input.trim()) {
      // Add the user's message to the chat
      const newMessage = { text: input, sender: "user" };
      setMessages((prev) => [...prev, newMessage]);

      // Clear the input field
      setInput("");

      // Call backend and stream the response
      await sendMessageToBackend(input);
    }
  };

  const sendMessageToBackend = async (userMessage) => {
    try {
      // Start a fetch request to the backend
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_USER_URI}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ content: userMessage }),
        }
      );

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let done = false;
      let botResponse = ""; // Store the growing bot response
      let botMessageIndex = null; // Track index of the bot's response

      // Start reading the response stream chunk by chunk
      while (!done) {
        const { value, done: streamDone } = await reader.read();
        done = streamDone;
        const chunk = decoder.decode(value); // Decode each chunk
        const parsedChunk = JSON.parse(chunk).content; // Parse chunk content

        // Append chunk to the growing bot response
        botResponse += parsedChunk;

        // Add a new bot message only if it hasn't been added yet
        if (botMessageIndex === null) {
          setMessages((prev) => {
            botMessageIndex = prev.length; // Capture the index of the new bot message
            return [...prev, { text: "", sender: "bot" }]; // Add an empty bot message
          });
        }

        // Update the existing bot message with the accumulated response
        setMessages((prev) => {
          const updatedMessages = [...prev];
          updatedMessages[botMessageIndex] = {
            ...updatedMessages[botMessageIndex],
            text: botResponse, // Update bot message with accumulated text
          };
          return updatedMessages;
        });
      }
    } catch (error) {
      console.error("Error fetching response from backend:", error);
    }
  };

  useEffect(() => {
    if (!auth) {
      navigate('/login')         
    }

    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [auth,messages]);

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
          <button onClick={toggleHistory} className="focus:outline-none">
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
          <h1 className="text-xl font-bold font-headingFont">
            <a href="/">          <Title title="SageAi"/>
            </a>
          </h1>
          {/* Account Icon */}
          <div>
            <a href="/dashboard">
              <FiUser className="text-2xl rounded-full border border-zinc-400 mr-8" />
            </a>
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
