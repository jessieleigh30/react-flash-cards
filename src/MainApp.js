import React, { Component, Fragment,} from 'react';
import { Route, Switch} from 'react-router-dom';
import './App.css';
import App from './App';

const MainApp = () => (
  <Route exact path="/" component={App} />
);

export default MainApp;