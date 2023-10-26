import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './fonts/MYRIADPRO-BOLD.woff'
import './fonts/MYRIADPRO-BOLDCOND.woff'
import './fonts/MYRIADPRO-BOLDCONDIT.woff'
import './fonts/MYRIADPRO-BOLDIT.woff'
import './fonts/MYRIADPRO-COND.woff'
import './fonts/MYRIADPRO-CONDIT.woff'
import './fonts/MyriadPro-Light.woff'
import './fonts/MYRIADPRO-REGULAR.woff'
import './fonts/MYRIADPRO-SEMIBOLD.woff'
import './fonts/MYRIADPRO-SEMIBOLDIT.woff'
import { BrowserRouter } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </React.StrictMode>
);
