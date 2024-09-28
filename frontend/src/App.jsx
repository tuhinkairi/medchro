import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect } from "react";
import Home from "./componenet/home/Home";
import Footer from "./componenet/layout/Footer";
import Nav from "./componenet/layout/Nav";
import Chat from "./componenet/Chat/Chat";
import MedicalInformationPage from "./componenet/dashboard/MedicalInformationPage";
import Dashboard from "./componenet/dashboard/Dashboard";
import AppointmentBooking from "./componenet/Appointment/AppointmentBooking";
import ContactUs from "./componenet/ContactUs";
import AuthForm from "./componenet/Auth/Login";
import axios from "axios";
import { setAuth } from "./store/Features/User/AuthenticationSlice";
import { useDispatch } from "react-redux";
import { Toaster } from "react-hot-toast";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_USER_URI}/getUserDetails`,
          {
            withCredentials: true,
          }
        );

        if (response) {
        dispatch(setAuth({"user":response.data.user,"auth":true }))
          // console.log(response.data.user); // Log the fetched user data
          // console.log(true); // Log the authentication status
        } else {
          dispatch(setAuth({"user":{},"auth":false }))

          // console.log("User is not authenticated");
        }
      } catch (error) {
        //console.error("Error fetching user:", error);
        dispatch(setAuth({"user":{},"auth":false }))
        
      }
    };

    fetchUser();
  }, [setAuth]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Nav />
                <Home />
                <Footer />
              </>
            }
          />

          <Route
            path="/contactus"
            element={
              <>
                <Nav />
                <ContactUs />
              </>
            }
          />
          <Route path="/chat" element={<Chat />} />
          <Route path="/Appointment" element={<AppointmentBooking />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/report" element={<MedicalInformationPage />} />
          <Route path="/login" element={<AuthForm />} />
        </Routes>
          <Toaster position="top-center" reverseOrder={false} />
      </BrowserRouter> 
    </>
  );
}

export default App;
