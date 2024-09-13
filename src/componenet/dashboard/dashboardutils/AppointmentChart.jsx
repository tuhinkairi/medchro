import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeAppointment } from "../../../store/Features/User/AppointmentSlice";

export default function AppointmentChart() {
  const appointment = useSelector((state) => state.appointmentBook.appointments);
  const dispatch = useDispatch()
  const handelRemove = (appointment)=>{
    confirm('Are you Sure?')
    dispatch(removeAppointment(appointment))

  }
  
  return (
    <>
      {appointment.length ? (
        <ul className="space-y-4">
          {appointment.map((e, index) => (
            <li
              key={index}
              className="bg-gray-50 p-4 rounded-lg shadow flex justify-between items-center flex-wrap"
            >
              <span>Appointment with {e.name}</span>
              <span>{e.specialty}</span>
              <span className="text-sm text-gray-500">{e.date}</span>
              <br />
              <button onClick={()=>{handelRemove(e)}} className="whitespace-nowrap bg-red-600 hover:bg-red-500 text-white  px-4 shadow-sm border py-2 rounded-md">Cancel</button>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="space-y-4">
          <li className="bg-gray-50 p-4 rounded-lg shadow flex justify-center items-center text-gray-500">
            <span>No Appointment</span>
          </li>
        </ul>
      )}
    </>
  );
}
