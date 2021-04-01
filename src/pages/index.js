import * as React from "react";
import { Helmet } from 'react-helmet';
import Intro from './components/intro.js';
import Login from './components/login.js';
import Signup from './components/signup.js';
import Homepage from './components/home.js';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

const IndexPage = () => {

  // const user = null;

  return(
    <div id = 'root'>
      <Helmet>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/camanjs/4.1.2/caman.full.min.js"
        integrity="sha512-JjFeUD2H//RHt+DjVf1BTuy1X5ZPtMl0svQ3RopX641DWoSilJ89LsFGq4Sw/6BSBfULqUW/CfnVopV5CfvRXA=="
        crossorigin="anonymous"></script>
      </Helmet>
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
}

export default IndexPage;