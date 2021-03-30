import React, { useState } from 'react';
// import Filters from './filter.js';
import filterOptions from '../../data/filterdata.js';
import { StaticImage } from 'gatsby-plugin-image';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import Button from '@material-ui/core/Button';
import '../../styles/editor.css';
import FilterItem from './filterItem.js';
import Slider from './slider.js';

const Editor = () => {

  const [filters, setFilters] = useState(filterOptions)
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectedFilter = filters[selectedIndex];

  const filterSlider = event => {
    setFilters(prevOptions => {
      return prevOptions.map((option, index) => {
        if (index !== selectedIndex) return option
        return { ...option, value: event.target.value}
      })
    });
  };

  const setImageFilters = () => {
    const styles = filters.map(filter => {
      return `${filter.property}(${filter.value}${filter.unit})`
    })

    return { filter: styles.join(' ') };
  }

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
          value = {selectedFilter.range.value}
          filterSlider = {filterSlider}
        />
      </div>
    </div>
  )
};

export default Editor;