import React, { useEffect, useState } from "react";

export default function ChatHistory() {
  const [history, setHistory] = useState([]);
  useEffect(() => {
    // fetch here and destructure it and pass the list
    setHistory([]);
  }, []);
  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
      <h2 className="text-xl font-bold">Chat History</h2>
      <p className="text-gray-600">
        View your previous conversations with Bot.
      </p>

      <ul className="space-y-4">
        {history.length ? 
          history.map((e) => {
            <li className="bg-gray-50 p-4 rounded-lg shadow flex justify-between items-center">
              <span>Chat with {e.title}</span>
              <span className="text-sm text-gray-500">
                Last message: {e.date}
              </span>
            </li>;
          })
         : 
          <li className="bg-gray-50 p-4 rounded-lg shadow flex justify-center items-center text-gray-500">
            <span>No Chat</span>
          </li>
        }
      </ul>
    </div>
  );
}
