import * as React from "react"
import Intro from './components/intro.js';
import Login from './components/login.js';
import Signup from './components/signup.js';
import Homepage from './components/homepage.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const IndexPage = () => (
  <div id = 'root'>
    <BrowserRouter>
      <Switch>
        <Route exact path = '/'>
          <Intro />
        </Route> />
        <Route path = '/signup'>
          <Signup />
        </Route>
        <Route path = '/login'>
          <Login />
        </Route>
        <Route path = '/home'>
          <Homepage />
        </Route>
      </Switch>
    </BrowserRouter>
  </div>
);

export default IndexPage