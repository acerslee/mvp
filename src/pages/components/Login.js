import React, { useState } from 'react';

const Login = () => {

  const handleSubmit = () => {
    console.log('clicked')
  }


  return(
  <div id = 'login-page'>
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
    <p>Don't have an account, signup here!</p>
  </div>
  )
};

export default Login;