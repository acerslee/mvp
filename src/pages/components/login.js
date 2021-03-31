import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Login = () => {

  const history = useHistory();

  const handleBackClick = () => {
    history.goBack();
  };

  const handleSubmit = () => {
  }

  return(
    <div id = 'login-page'>
       <Button onClick = {handleBackClick}>
          Back
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
        <Link
              to = '/signup'
              style = {{
                textDecoration: 'none'
              }}
            >
             Don't have an account? Signup here!
        </Link>
    </div>
  )
};

export default Login;