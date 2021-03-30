import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Login = () => {

  const handleSubmit = () => {
    console.log('clicked')
  }


  return(
    <div id = 'login-page'>
      <Button>
        <Link
          to = '/'
          style = {{
            textDecoration: 'none'
          }}
        >
          Back
        </Link>
       </Button>
      <form onSubmit = {handleSubmit}>
        <input
          type = 'text'
          placeholder = 'Enter login id'
          // value =
          // onChange =
        >
        </input>
        <input
          type = 'text'
          placeholder = 'Enter password'
          // onChange =
        >
        </input>
        <button type = 'button'>Submit</button>
      </form>
      <p>
        Don't have an account?
        <Link
              to = '/signup'
              style = {{
                textDecoration: 'none'
              }}
            >
            Signup here!
        </Link>
      </p>
    </div>
  )
};

export default Login;