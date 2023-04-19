
"use client"
import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

export default function SelectorTec({offers, setRoffers, id}) {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const render = ["porte", "pepe", "camino"];

  const handleOptionSelect = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <>
      <FormControl style={{ minWidth: 100 }}>
        <InputLabel id="label">Selecciona opciones</InputLabel>
        <Select
          labelId="label"
          id="select"
          multiple
          value={selectedOptions}
          onChange={(event) => handleOptionSelect(event.target.value)}
        >
          {render.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}