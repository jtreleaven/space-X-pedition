import React from 'react';
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory } from 'react-router';
import App from './containers/App'
import CustomerInfo from './containers/CustomerInfo';
import PlanetCapture from './containers/PlanetCapture';
import Payment from './containers/Payment';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App} />
    <Route path="/customerInfo" component={CustomerInfo} />
    <Route path="/planetCapture" component={PlanetCapture} />
    <Route path="/payment" component={Payment} />
  </Router>
, document.getElementById('app'))
