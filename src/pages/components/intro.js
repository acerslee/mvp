import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Intro = () => {
  return(
    <div id = 'intro-page'>
      <Helmet>
        <meta charSet = 'utf-8' />
        <title>MVP</title>
      </Helmet>
      <h1>WELCOME!</h1>
      <Button variant = 'contained'>
      <Link
          to = '/login'
          style = {{
            textDecoration: 'none'
          }}
        >
            Login
        </Link>
      </Button>
      <Button variant = 'contained'>
        <Link
          to = '/signup'
          style = {{
            textDecoration: 'none'
          }}
        >
            Signup
        </Link>
      </Button>
    </div>
  )
};

export default Intro;