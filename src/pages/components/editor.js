import React, { useState, useEffect } from 'react';
import filterOptions from '../../data/filterdata.js';
import FilterItem from './filterItem.js';
import Slider from './slider.js';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import Button from '@material-ui/core/Button';
import useLocalStorageState from 'use-local-storage-state';
import useFirestore from '../../hooks/useFirestore.js';

const Editor = ({clickedImage, boolean}) => {
  const { images } = useFirestore('images');

  const [storageImage, setStorageImage] = useLocalStorageState('storage image', []);
  const [filters, setFilters] = useState(filterOptions)
  const [selectedIndex, setSelectedIndex] = useState(0);

  var renderedImage;
  if (images.length > 0) {
    renderedImage = images[0].url;
  }

  if (boolean) {
    renderedImage = clickedImage;
    // setStorageImage(clickedImage);
  }

  useEffect(() => {
    renderedImage = storageImage
  },[])

  const selectedFilter = filters[selectedIndex];

  const filterSlider = event => {
    setFilters(prevOptions => {
      return prevOptions.map((filter, index) => {
        if (index !== selectedIndex) return filter

        return { ...filter, value: event.target.value}
      })
    });
  };

  const setImageFilters = () => {
    const styles = filters.map(filter => {
      return `${filter.property}(${filter.value}${filter.unit})`
    })

    return { filter: styles.join(' ') };
  };

  return(
    <div
      id = 'photo-editor'
      style = {{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100vh',
        width: '100vw'
      }}
    >
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
            <img
              className = 'edit-image'
              src = {renderedImage}
              alt = 'some image'
              style = {setImageFilters()}
            />
          </TransformComponent>
        </React.Fragment>
      )}
      </TransformWrapper>
      <div className = 'filters'>
        {filters.map((filter, index) => (
          <FilterItem
            key = {index}
            name = {filter.name}
            active = {index === selectedIndex}
            handleClick = {() => setSelectedIndex(index)}
          />
        ))}
        <Slider
          min = {selectedFilter.range.min}
          max = {selectedFilter.range.max}
          value = {selectedFilter.value}
          filterSlider = {filterSlider}
        />
      </div>

    </div>
  )
};

export default Editor;