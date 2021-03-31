import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Signup = () => {

  const history = useHistory();

  const handleBackClick = () => {
    history.goBack();
  };

  return(
    <div id = 'signup-page'>
       <Button onClick = {handleBackClick}>
          Back
       </Button>
        <Link
          to = '/login'
          style = {{
            textDecoration: 'none'
          }}
        >
          Already have an account? Login here!
        </Link>
    </div>
  )
};

export default Signup;