import * as React from "react";
import { Link } from 'gatsby';
import { Button } from '@material-ui/core';
import { AuthProvider } from '../hooks/authorization.js';
import { makeStyles } from '@material-ui/core/styles';
import Seo from '../components/SEO.js';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
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

      <div className = {classes.root}>
          <AuthProvider>
       <Seo />
        <h1 className = 'intro-header'>Welcome to Photo Editor</h1>
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

    </AuthProvider>
    </div>
  )
}

export default IndexPage;