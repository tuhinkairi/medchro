import { configureStore } from '@reduxjs/toolkit';
import appointmentSlice from './Features/User/AppointmentSlice';

const store = configureStore({
  reducer: {
    appointmentBook: appointmentSlice,  // Add more slices here if needed
  },
});

export default store;
