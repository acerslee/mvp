import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
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
              <button onClick={zoomIn}>+</button>
              <button onClick={zoomOut}>-</button>
              <button onClick={resetTransform}>Reset</button>
            </div>
            <TransformComponent>
              <StaticImage src = '../../images/pineapples.jpg' alt = 'pineapples' />
            </TransformComponent>
          </React.Fragment>
        )}
        </TransformWrapper>
    </div>
  )

};

export default Editor;