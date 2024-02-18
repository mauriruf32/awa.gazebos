import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './redux/store';
import { Auth0Provider } from '@auth0/auth0-react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <Auth0Provider
    domain="dev-5s685zkrt358f18s.us.auth0.com"
    clientId="BrlKd7nVLyAQd9BoJrBQI8qIIIF8scHq"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
<Provider store={store}>
        <BrowserRouter>
                <App />
        </BrowserRouter>
</Provider>
</Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
