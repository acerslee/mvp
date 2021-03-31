import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Editor from './editor.js';
import AddImage from './addimage.js';

const Homepage = () => {

  const [menu, setMenu] = useState(null);

  const handleClick = (event) => {
    setMenu(event.currentTarget)
  };

  const handleClose = () => {
    setMenu(null);
  };

  return(
    <div id = 'homepage'>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick = {handleClick}>
        Menu
      </Button>
      <Menu
        id = 'menu'
        menu = {menu}
        keepMounted
        open = {Boolean(menu)}
        onClose = {handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>
          {/* <Link to = '/'>Logout</Link> */}
        </MenuItem>
      </Menu>
      <AddImage />
      <Editor />
    </div>
  );
};

export default Homepage;