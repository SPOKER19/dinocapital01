import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ThemeProvider } from "@material-tailwind/react";
import { NotificationProvider } from "@web3uikit/core";
import { MoralisProvider } from "react-moralis";
import App from './App';



//const APP_ID = process.env.REACT_APP_MORALIS_ID;
//const SERVER_URL = process.env.REACT_APP_SERVER_URL;
const APP_ID = "quISszzmnD7Cvah28YPOiigSHcsbise3uKDaQqxj";
const SERVER_URL = "https://c4moss4mgyoc.usemoralis.com:2053/server";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
      <NotificationProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </NotificationProvider>
    </MoralisProvider>
  </React.StrictMode>
);


