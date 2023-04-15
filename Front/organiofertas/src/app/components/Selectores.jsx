"use client"
import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';


export default function Selector({offers,setRoffers,id}) {
    const [selectedOption, setSelectedOption] = useState('');
    
        const stack = ["Todos", 'Fullstack', 'Backend', 'Frontend'];
        const experiencia = ["Todos","-1 año","1 y 2 años","2 y 5 años","+5 años"];
        const postulacion = ["Todas","Espontanea", "Regular"] 
        

    const handleOptionSelect = (option) => {
        console.log(selectedOption)
    setSelectedOption(option);}
  return (
    <>
    <FormControl style={{ minWidth: 100}}>
          <Select
          labelId="label"
          id="select"
          value={selectedOption}
          onChange={(event) => handleOptionSelect(event.target.value)} >
                    {experiencia.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
          </Select>
        </FormControl>
        </>
  )
}