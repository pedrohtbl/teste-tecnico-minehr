import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Providers from './providers';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Providers>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Providers>
);
