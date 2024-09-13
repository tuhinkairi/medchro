import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./componenet/home/Home";
import Footer from "./componenet/layout/Footer";
import Nav from "./componenet/layout/Nav";
import Chat from "./componenet/Chat/Chat";

import MedicalInformationPage from "./componenet/dashboard/MedicalInformationPage";
import Dashboard from "./componenet/dashboard/Dashboard";
import AppointmentBooking from "./componenet/Appointment/AppointmentBooking";
import ContactUs from "./componenet/ContactUs";
import AuthForm from "./componenet/Auth/Login";

function App() {
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

          <Route path="/contactus" element={<><Nav/><ContactUs /></>} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/Booking" element={<AppointmentBooking />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/report" element={<MedicalInformationPage />} />
          <Route path="/login" element={<AuthForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
