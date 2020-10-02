import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';


// have to wrap app for routing
// BrowserRouter wraps history compoent and pases it down the component tree
// Anywhere in out component tree we will be able to use histroy object
// Thats how we get routing
ReactDOM.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
   , document.getElementById('root'));
registerServiceWorker();
