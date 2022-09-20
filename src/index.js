// Absolute imports
import React from 'react';
import ReactDOM from 'react-dom/client';

// Components
import App from 'App';

// Styles
import 'index.css';
import 'styles/normalize.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);