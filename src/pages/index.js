import * as React from "react";
import { Helmet } from 'react-helmet';
import Intro from './components/intro.js';
import Login from './components/login.js';
import Signup from './components/signup.js';
import AddImage from './components/addimage.js';
import Homepage from './components/home.js';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

const IndexPage = () => {

  // const user = null;

  return(
    // <Helmet>
    //   <meta charSet = "utf-8" />
    //   <title>MVP</title>
    // </Helmet>
    // user ?
    //   <Homepage />
    // :
    <BrowserRouter>
      <Switch>
         {/* <Route exact path = '/'>
           <Intro />
         </Route> />
         <Route path = '/signup'>
           <Signup />
         </Route>
         <Route path = '/login'>
           <Login />
         </Route> */}
        <Route path = '/' component = {Homepage} />
     </Switch>
  </BrowserRouter>
  );
}

export default IndexPage