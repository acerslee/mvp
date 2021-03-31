import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddImage = () => {

  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);
  const types = ['image/png', 'image/jpeg'];

  const handleChange = event => {
    let selectedFile = event.target.files[0];

    if (selectedFile && types.includes(selectedFile.type)) {
      setImage(selectedFile);
      setError(null);
    } else {
      setImage(null);
      setError('Please select either a .jpeg or .png file');
    }
  }

  let visibleLink;
  if (image) {
    visibleLink =
      <Link
        to = {{
        pathname: '/home',
        state: {
          imageURL: image
        }
      }}>Click here to continue
      </Link>
  }

  return(
    <div className = 'add-image-form'>
      <form>
        <input type = 'file' onChange = {handleChange} />
          <div className = 'output'>
          {error && <div className = 'error'>{error}</div>}
        </div>
      </form>
      {visibleLink}
    </div>
  )
};

export default AddImage;