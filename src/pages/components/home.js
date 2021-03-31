import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Editor from './editor.js';
import ImageGrid from './imagegrid.js';
import ProgressBar from './progress.js';

const Homepage = () => {

  const [image, setImage] = useState(null);
  const [clickedImage, setClickedImage] = useState(null);
  const [error, setError] = useState(null);
  const [menu, setMenu] = useState(null);
  const [boolean, setBoolean] = useState(false);

  const types = ['image/png', 'image/jpeg'];

  const handleChange = event => {
    event.preventDefault();
    let selectedFile = event.target.files[0];

    console.log('selectedfile', selectedFile)
    if (selectedFile && types.includes(selectedFile.type)) {
      setImage(selectedFile);
      setError(null);
    } else {
      setImage(null);
      setError('Please select either a .jpeg or .png file');
    }
  }

  const handleClick = (event) => {
    setMenu(event.currentTarget)
  };

  const handleClose = () => {
    setMenu(null);
  };

  const updateEditImage = (id, url) => {
    setClickedImage(url);
    setBoolean(true);
  }

  let renderEditor;
  if (clickedImage) {
    renderEditor = <Editor clickedImage = {clickedImage} boolean = {boolean} />
  }

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

      <form>
        <input type = 'file' onChange = {handleChange} />
          <div className = 'output'>
          {error && <div className = 'error'>{error}</div>}
          {image && <div>{image.name}</div>}
          {image && <ProgressBar image = {image} setImage = {setImage} />}
        </div>
      </form>

      {renderEditor}
      <ImageGrid
        updateEditImage = {updateEditImage}
      />
    </div>
  );
};

export default Homepage;