import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import FilterItem from './filterItem.js';
import Slider from './slider.js';

const filterOptions = [
  {
    name: 'Brightness',
    property: 'brightness',
    value: 50,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Contrast',
    property: 'contrast',
    value: 50,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  }
];

const Filters = () => {
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
  )
};

export default Filters;