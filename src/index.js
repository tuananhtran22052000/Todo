import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
import Test from './components/Test.js'
import Homepage from './Homepage'
import TestApi from './TestApi'
import LaunchpadTierSystem from './code/LaunchpadTierSystem'
import AmbassadorProgram from './code/AmbassadorProgram'
import About from './code/About'
import Home from '../src/hocReactjs/Home'

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
