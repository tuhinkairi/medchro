import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot for React 18
import './index.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store'; // Adjust the path to your store
import App from './App';

// Get the root element from your HTML
const container = document.getElementById('root');

// Create a root and render your app
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
