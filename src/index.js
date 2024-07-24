import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
      domain="dev-mwsqdzgd1kozsfnf.us.auth0.com"
      clientId="rXJ6SwEXizaBzt9fMEBSfoHiGL7yN1DN"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
    <App />
    </Auth0Provider>,
);


reportWebVitals();
