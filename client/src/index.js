import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './redux/store';
import {Auth0Provider} from "@auth0/auth0-react";
const domain = process.env.AWA_GAZEBOS_AUTH0_DOMAIN || "dev-5s685zkrt358f18s.us.auth0.com";
const clientId = process.env.AWA_GAZEBOS_AUTH0_CLIENT_ID || "jwlDfKUDcFAs9p1Hz6tQxa9D4oj2hWRb";

console.log(
clientId,
domain  
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<Provider store={store}>
        <BrowserRouter>
                <Auth0Provider
                 domain={domain} 
                 clientId={clientId}
                 redirectUri={window.location.origin}
                 >
                <App />
                </Auth0Provider>
        </BrowserRouter>
</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
