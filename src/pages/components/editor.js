import React, { useState } from 'react';
import filterOptions from '../../data/filterdata.js';
import FilterItem from './filterItem.js';
import Slider from './slider.js';
import { StaticImage } from 'gatsby-plugin-image';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import Button from '@material-ui/core/Button';

const Editor = () => {

  const [filters, setFilters] = useState(filterOptions)
  const [selectedIndex, setSelectedIndex] = useState(0);

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
            <StaticImage
              className = 'edit-image'
              src = '../../images/pineapples.jpg'
              alt = 'pineapples'
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