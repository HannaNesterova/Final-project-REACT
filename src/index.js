import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log('Domain:', process.env.REACT_APP_AUTH0_DOMAIN);
console.log('Client ID:', process.env.REACT_APP_AUTH0_CLIENT_ID);
root.render(
  
  <React.StrictMode>
  <Auth0Provider
    domain='dev-dseqq7ugiytcafqw.us.auth0.com'
    clientId='YUu6PdSLaSVszEi2ehHxZyUN8EFFllP1'
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Provider store={store}>
      <App />
    </Provider>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
