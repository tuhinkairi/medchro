import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addAppointment } from "../../store/Features/User/AppointmentSlice";

// Mock doctor data
const doctorsData = [
  {
    id: 1,
    name: "Dr. Smith",
    date: "12-09-24",
    specialty: "Cardiologist",
    location: [40.7128, -74.006],
  },
  {
    id: 2,
    name: "Dr. Johnson",
    date: "22-09-24",
    specialty: "Dermatologist",
    location: [40.7145, -74.0059],
  },
  {
    id: 3,
    name: "Dr. Taylor",
    date: "21-09-24",
    specialty: "Dentist",
    location: [40.7138, -74.008],
  },
  {
    id: 4,
    name: "Dr. Brown",
    date: "2-09-24",
    specialty: "Pediatrician",
    location: [40.711, -74.0075],
  },
];

export default function AppointmentBooking() {
  useDocumentTitle('Appointment')

  const auth = useSelector((state) => state.authentication.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [filteredDoctors, setFilteredDoctors] = useState(doctorsData);
  const [currentLocation, setCurrentLocation] = useState([40.7128, -74.006]); // Default to NYC

  // Update doctor list based on selected specialty
  useEffect(() => {
    if (!auth) {
        navigate("/login");
      }
  
    if (selectedSpecialty) {
      setFilteredDoctors(
        doctorsData.filter((doc) => doc.specialty === selectedSpecialty)
      );
    } else {
      setFilteredDoctors(doctorsData);
    }
  }, [auth,selectedSpecialty]);

  // Handle map click and location updates
  const LocationUpdater = () => {
    useMapEvents({
      click: (e) => {
        setCurrentLocation([e.latlng.lat, e.latlng.lng]);
      },
    });
    return null;
  };

  // Booking handler
  const bookingHandel = (doctor, index) => {
    alert(`Booking appointment with ${doctor.name}`);

    const data = {
      id: index,
      name: doctor.name,
      date: doctor.date,
      specialty: doctor.specialty,
    };

    // Dispatch the action and wait for it to complete if it's async
    try {
      dispatch(addAppointment(data));
      navigate("/dashboard");
    } catch (error) {
      console.error("Error booking appointment:", error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen font-subheadingFont">
      {/* Map Section */}
      <div className="md:w-2/3 w-full h-80 md:h-full">
        <MapContainer
          center={currentLocation}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {filteredDoctors.map((doc) => (
            <Marker key={doc.id} position={doc.location}></Marker>
          ))}
          <LocationUpdater />
        </MapContainer>
      </div>

      {/* Doctor List Section */}
      <div className="md:w-1/3 w-full bg-white p-4 overflow-y-auto">
        <h1 className="text-xl md:text-2xl font-bold mb-4 text-center md:text-left">
          Find Doctors Near You
        </h1>

        {/* Specialty Filter */}
        <div className="mb-4">
          <label className="block text-gray-700">Filter by Specialty:</label>
          <select
            className="w-full p-2 border border-gray-300 rounded-lg"
            value={selectedSpecialty}
            onChange={(e) => setSelectedSpecialty(e.target.value)}
          >
            <option value="">All Specialties</option>
            <option value="Cardiologist">Cardiologist</option>
            <option value="Dermatologist">Dermatologist</option>
            <option value="Dentist">Dentist</option>
            <option value="Pediatrician">Pediatrician</option>
          </select>
        </div>

        {/* Doctors List */}
        <ul className="space-y-4">
          {filteredDoctors.map((doctor, index) => (
            <li
              key={doctor.id}
              className="p-4 border border-gray-300 rounded-lg shadow"
            >
              <h2 className="text-lg font-semibold">{doctor.name}</h2>
              <span className="text-sm text-zinc-700">
                Book on {doctor.date}
              </span>
              <p className="text-gray-500">{doctor.specialty}</p>
              <button
                className="mt-2 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
                onClick={() => bookingHandel(doctor, index)}
              >
                Book Appointment
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
