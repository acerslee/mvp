import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Signup = () => {
  return(
    <div id = 'signup-page'>
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
      <p>
        Already have an account?
        <Link
          to = '/login'
          style = {{
            textDecoration: 'none'
          }}
        >
          Login here!
        </Link>
      </p>
    </div>
  )
};

export default Signup;