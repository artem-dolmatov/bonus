import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

import App from './App';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-102736038-1'); //Unique Google Analytics tracking number

function logPageView() {
  ReactGA.set({ page: window.location.pathname + window.location.search });
  ReactGA.pageview(window.location.pathname + window.location.search);
}

ReactDOM.render(
  <BrowserRouter onUpdate={logPageView}>
    <App />
  </BrowserRouter>,
document.getElementById('root'));
registerServiceWorker();
