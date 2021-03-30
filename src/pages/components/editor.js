import React from 'react';
import Filters from './filter.js';
// import Slider from './slider.js';
import { StaticImage } from 'gatsby-plugin-image';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import Button from '@material-ui/core/Button';
import '../../styles/editor.css';

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
              // style = {setImageFilters()}
            />
          </TransformComponent>
        </React.Fragment>
      )}
      </TransformWrapper>
      <Filters />
    </div>
  )
};

export default Editor;