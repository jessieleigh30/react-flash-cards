import React, { Component, Fragment, } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import App from './App';
import About from './About';
import NoMatch from './NoMatch';
import Navbar from "./Navbar";
import { Container } from "semantic-ui-react";

const MainApp = () => (
  <Fragment>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/about" component={About} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Fragment>
);

export default MainApp;