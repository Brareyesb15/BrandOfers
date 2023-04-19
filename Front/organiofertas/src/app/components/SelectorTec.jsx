"use client"
import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

export default function SelectorTec({ offers, setRoffers, id }) {
  const [selectedOptions, setSelectedOptions] = useState([]);
  console.log(selectedOptions)

  const render = ["porte", "pepe", "camino"];

  const handleOptionSelect = (event) => {
    const option = event.target.value;
    
    setSelectedOptions(prevOptions => {
      const index = prevOptions.indexOf(option);
      let newOptions = [...prevOptions];
    
      if (index > -1) {
        // Si la opción ya existe en la lista, la eliminamos
        newOptions.splice(index, 1);
      } else {
        // Si la opción no existe en la lista, la agregamos
        newOptions.push(option);
      }
  
      return newOptions;
    });
  };

  return (
    <>
      <FormControl style={{ minWidth: 100 }}>
        <InputLabel id="label">Selecciona opciones</InputLabel>
        <Select
          labelId="label"
          id="select"
          value={selectedOptions}
          onChange={handleOptionSelect}
          renderValue={(selected) => selected.join(', ')}
        >
          {render.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
        <div>
          {selectedOptions.map(option => (
            <span key={option}>{option} </span>
          ))}
        </div>
      </FormControl>
    </>
  );
}