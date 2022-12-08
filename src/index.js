import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import the styling here
import './index.css';
import { BrowserRouter } from "react-router-dom"


// this is the main page that gets the App component to render in
// the HTML root div placed in the public folder.
// we use Browser Router functionality to redirect pages in the nav bar

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

