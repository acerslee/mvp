import * as React from "react";
import { Link } from 'gatsby';
import { Button } from '@material-ui/core';
import { AuthProvider } from '../hooks/useAuthorization.js';
import styled from 'styled-components';
import Seo from '../components/SEO.js';

const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`

const IndexPage = () => {

  // const user = null;
  return(
    <AuthProvider>
      <RootContainer>
       <Seo />
        <h1 className = 'intro-header'>Welcome to Photo Editor</h1>
        <Buttons>
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
        </Buttons>
      </RootContainer>
    </AuthProvider>
  )
}

export default IndexPage;