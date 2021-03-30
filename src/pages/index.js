import * as React from "react"
import Intro from './components/Intro.js';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import Homepage from './components/Homepage.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const IndexPage = () => (
  <div id = 'root'>
    <BrowserRouter>
      <Switch>
        <Route path = '/' exact component = {Intro} />
        <Route path = '/signup' exact component = {Signup} />
        <Route path = '/login' exact component = {Login} />
        <Route path = '/home' exact component = {Homepage} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default IndexPage