import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from './state/AuthContext';

import axios from 'axios';

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  // </React.StrictMode>
);

