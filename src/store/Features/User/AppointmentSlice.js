import { createSlice } from '@reduxjs/toolkit';

export const appointmentSlice = createSlice({
  name: 'appointmentBook',
  initialState: {
    value: 0,
    appointments: [],
  },
  reducers: {
    addAppointment: (state, action) => {
      state.value += 1;
      state.appointments.push(action.payload);
    },
    removeAppointment: (state, action) => {
      // Ensure the payload is the index or the ID of the appointment to remove
      const appointment = action.payload; // Assuming the payload is an index
      if (appointment.id > -1) {
        state.appointments.splice(appointment.id, 1); // Remove the appointment at the given index
        state.value -= 1; // Decrease the appointment count
      }
    },
  },
});

// Export actions to use in components
export const { addAppointment, removeAppointment } = appointmentSlice.actions;

// Export the reducer to be used in the store
export default appointmentSlice.reducer;
