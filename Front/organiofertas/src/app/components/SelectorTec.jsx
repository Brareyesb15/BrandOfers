"use client"
import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import tecs from '../../../../../Back/utils/tecs';

export default function SelectorTec({ offers, setRoffers, id }) {
  const [selectedOptions, setSelectedOptions] = useState([]);
  console.log(selectedOptions)

  const render = tecs

  const handleOptionSelect = (event) => {
    const option = event.target.value;
    console.log("opcion =>>>>", option)
    
    setSelectedOptions(prevOptions => {
      const index = prevOptions.indexOf(option);
      let newOptions = [...prevOptions];
      console.log(newOptions)
    
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
          renderValue={() => null}
        >
          {render.map((option) => (
            <MenuItem key={option} value={option} style={{ backgroundColor: selectedOptions.includes(option) ? 'lightgray' : 'white' }}>
              {option}
            </MenuItem>
          ))}
        </Select>
        <div style={{ marginTop: 10 }}>
          {selectedOptions.map(option => (
            <span key={option} style={{ backgroundColor: 'lightgray', padding: '5px', borderRadius: '5px', marginRight: '5px' }}>{option}</span>
          ))}
        </div>
      </FormControl>
    </>
  );
}