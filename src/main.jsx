import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

import { GoogleOAuthProvider } from '@react-oauth/google';

const container = document.getElementById('root');
const root = createRoot(container);

const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={googleClientId}>
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);