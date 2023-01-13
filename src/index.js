import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvbUZ6kgk8uuhYTkW0c-gThwYr5I96MDw",
  authDomain: "cart-17ba5.firebaseapp.com",
  projectId: "cart-17ba5",
  storageBucket: "cart-17ba5.appspot.com",
  messagingSenderId: "793970702645",
  appId: "1:793970702645:web:69d4df19264624e4fab47c"
};

const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default app;

