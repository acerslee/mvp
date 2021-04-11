import * as React from "react";
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
// import Intro from './intro.js';
// import Login from './login.js';
// import Signup from './signup.js';
// import Homepage from './home.js';
import { Button, Container } from '@material-ui/core';
import { AuthProvider } from '../hooks/authorization.js';

const IndexPage = () => {

  // const user = null;
  return(
    <AuthProvider>
      <div id = 'intro-page'>
        <Helmet>
          <meta charSet = 'utf-8' />
          <title>Photo Editor</title>
        </Helmet>
        <Container component = "main" maxWidth = "xs">
        <h1>Welcome!</h1>
        <Button variant = 'contained'>
        <Link
            to = '/login'
            style = {{
              textDecoration: 'none',
              color: 'white'
            }}
          >
              Login
          </Link>
        </Button>
        <Button variant = 'contained'>
          <Link
            to = '/signup'
            style = {{
              textDecoration: 'none',
              color: 'white'
            }}
          >
              Signup
          </Link>
        </Button>
        </Container>
      </div>
    </AuthProvider>
  )
  // return(
  //   <AuthProvider>
  //     <div id = 'root'>
  //       <Helmet>
  //       <script
  //         src="https://cdnjs.cloudflare.com/ajax/libs/camanjs/4.1.2/caman.full.min.js"
  //         integrity="sha512-JjFeUD2H//RHt+DjVf1BTuy1X5ZPtMl0svQ3RopX641DWoSilJ89LsFGq4Sw/6BSBfULqUW/CfnVopV5CfvRXA=="
  //         crossorigin="anonymous"></script>
  //       </Helmet>
  //       <Intro />
  //         <Link to = '/signup'>
  //           <Signup />
  //         </Link>
  //         <Link to = '/login'>
  //           <Login />
  //         </Link>

  //           <Homepage />
  //   </div>
  // </AuthProvider>
  // );
}

export default IndexPage;
