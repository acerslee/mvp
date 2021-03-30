import React from 'react';
// import Slider from './slider.js';
import { StaticImage } from 'gatsby-plugin-image';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import Button from '@material-ui/core/Button';
import '../../styles/editor.css';
// import pineapples from '../../images/pineapples.jpg';

const Editor = () => {

  return(
    <div id = 'photo-editor'>
      <TransformWrapper
        defaultScale = {1}
        defaultPositionX = {200}
        defaultPositionY = {100}
      >
        {({ zoomIn, zoomOut, resetTransform, ...rest}) => (
          <React.Fragment>
            <div className = 'tools'>
              <Button variant = 'contained' onClick={zoomIn}>+</Button>
              <Button variant = 'contained' onClick={zoomOut}>-</Button>
              <Button variant = 'contained' onClick={resetTransform}>Reset</Button>
            </div>
            <TransformComponent>
              <StaticImage
                className = 'edit-image'
                src = '../../images/pineapples.jpg'
                alt = 'pineapples'
                // style = {{
                //   height: '50vh',
                //   width: '80vh'
                // }}
              />
            </TransformComponent>
          </React.Fragment>
        )}
        </TransformWrapper>
        <div className = 'filters'>
          <Button color = 'primary'>Brightness</Button>
          <Button color = 'primary'>Contrast</Button>
        </div>
        {/* Slider */}
        <div className = 'slider'>
          <input
            type = 'range'
            id = 'range'
            min = '10'
            max = '100'
            value = '50'
          />
        </div>
    </div>
  )
};

export default Editor;