import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import appointmentSlice from './Features/User/AppointmentSlice';
import UserSlice from './Features/User/AuthenticationSlice';

// Define your persist configuration
const persistConfig = {
  key: 'root',
  storage, // Choose your storage method, defaults to localStorage
};

// Combine all your reducers
const rootReducer = combineReducers({
  appointmentBook: appointmentSlice,
  authentication: UserSlice,
});

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store with middleware to handle non-serializable values
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'], // These actions are from redux-persist
      // Add other actions you may want to ignore, if needed
    },
  }),
});

// Create a persistor
const persistor = persistStore(store);

export { store, persistor };
