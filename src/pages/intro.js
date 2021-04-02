import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Container from '@material-ui/core/Container';

const Intro = () => {
  return(
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
  )
};

export default Intro;