import * as React from "react";
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import { Button } from '@material-ui/core';
import { AuthProvider } from '../hooks/authorization.js';
import { makeStyles } from '@material-ui/core/styles';
import Seo from './components/SEO.js';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
});


const IndexPage = () => {

  const classes = useStyles();
  // const user = null;
  return(
    <AuthProvider>
      <div id = 'intro-page' className = {classes.root}>
       <Seo />
        <h1>Welcome to Photo Editor</h1>
        <div className = {classes.buttons}>
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
        </div>
      </div>
    </AuthProvider>
  )
}

export default IndexPage;