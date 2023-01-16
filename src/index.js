import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import SettingsProvider from './Context/Settings';
import { Auth0Provider } from "@auth0/auth0-react";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH_DOMAIN}
    clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
    redirectUri={process.env.REACT_APP_AUTH_REDIRECT_URI_REACT_SITE_URL}
    audience={process.env.AUTH_API_IDENTIFIER}
    scope="read:current_user update:current_user_metadata"
    useRefreshTokens={true}
  >
    <React.StrictMode>
      <SettingsProvider>
        <App />
      </SettingsProvider>
    </React.StrictMode>
  </Auth0Provider>,
);

