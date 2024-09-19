import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated for React 18
import { Provider } from 'react-redux';
import { store } from './redux/store'; // Path to your store.js
import App from './App';
import './index.css'; // Add your CSS if needed

// Create root using React 18's createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}> {/* Wrap the App in the Redux Provider */}
      <App />
    </Provider>
  </React.StrictMode>
);
