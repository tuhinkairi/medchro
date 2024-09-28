import React, { useEffect, useState } from "react";
import {
  FiHome,
  FiMessageCircle,
  FiCalendar,
  FiTarget,
  FiInfo,
  FiSettings,
  FiBell,
  FiMenu,
  FiX,
} from "react-icons/fi";
import HomeContent from "./dashboardutils/HomeContent";
import ChatHistory from "./dashboardutils/ChatHistory";
import Appointments from "./dashboardutils/Appointments";
import HealthGoals from "./dashboardutils/HealthGoals";
import MedicalInfo from "./dashboardutils/MedicalInfo";
import Settings from "./dashboardutils/Settings";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useDocumentTitle from "../layout/useDocumentTitle";

function Dashboard() {
  useDocumentTitle('Dashboard')

  const [selectedTab, setSelectedTab] = useState("home");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const auth = useSelector((state)=>state.authentication.auth)
  const navigate = useNavigate()
  useEffect(()=>{
    if (!auth) {
      navigate('/login')         
    }
  },[auth])

  const renderContent = () => {
    switch (selectedTab) {
      case "home":
        return <HomeContent />;
      case "chat":
        return <ChatHistory />;
      case "appointments":
        return <Appointments />;
      case "goals":
        return <HealthGoals />;
      case "info":
        return <MedicalInfo />;
      case "settings":
        return <Settings />;
      default:
        return <HomeContent />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 font-subheadingFont">
      {/* Toggle Button */}
      <button
        className="md:hidden p-4 text-gray-500  top-0 absolute "
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? (
          <FiX className="text-2xl" />
        ) : (
          <FiMenu className="text-2xl" />
        )}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed h-screen md:static z-10 w-64 bg-white flex flex-col py-6 px-4 border-r border-gray-200 transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <button
            className="md:hidden p-4 text-gray-500 "
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? (
              <FiX className="text-2xl" />
            ) : (
              <FiMenu className="text-2xl" />
            )}
          </button>
        </div>

        {/* Navigation */}
        <ul className="space-y-6">
          <li
            className={`flex items-center space-x-3 p-2 rounded-lg cursor-pointer ${
              selectedTab === "home"
                ? "bg-blue-500 text-white"
                : "text-gray-700"
            }`}
            onClick={() => setSelectedTab("home")}
          >
            <FiHome />
            <span>Home</span>
          </li>
          <li
            className={`flex items-center space-x-3 p-2 rounded-lg cursor-pointer ${
              selectedTab === "chat"
                ? "bg-blue-500 text-white"
                : "text-gray-700"
            }`}
            onClick={() => setSelectedTab("chat")}
          >
            <FiMessageCircle />
            <span>Chat History</span>
          </li>
          <li
            className={`flex items-center space-x-3 p-2 rounded-lg cursor-pointer ${
              selectedTab === "appointments"
                ? "bg-blue-500 text-white"
                : "text-gray-700"
            }`}
            onClick={() => setSelectedTab("appointments")}
          >
            <FiCalendar />
            <span>Appointments</span>
          </li>
          <li
            className={`flex items-center space-x-3 p-2 rounded-lg cursor-pointer  ${
              selectedTab === "goals"
                ? "bg-blue-500 text-white"
                : "text-gray-700"
            }`}
            onClick={() => setSelectedTab("goals")}
          >
            <FiTarget />
            <span>Health Goals</span>
          </li>
          <li
            className={`flex items-center space-x-3 p-2 rounded-lg cursor-pointer text-start ${
              selectedTab === "info"
                ? "bg-blue-500 text-white"
                : "text-gray-700"
            }`}
            onClick={() => setSelectedTab("info")}
          >
            <FiInfo />
            <span>Medical Information</span>
          </li>
          <li
            className={`flex items-center space-x-3 p-2 rounded-lg cursor-pointer ${
              selectedTab === "settings"
                ? "bg-blue-500 text-white"
                : "text-gray-700"
            }`}
            onClick={() => setSelectedTab("settings")}
          >
            <FiSettings />
            <span>Settings</span>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-6">{renderContent()}</main>
    </div>
  );
}

export default Dashboard;
