"use client"
import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';


export default function Selector({offers,setRoffers,id}) {
    const [selectedOption, setSelectedOption] = useState('');
    let render = []
 


        id === "experiencia"? render = ["Todos","-1 año","1 y 2 años","2 y 5 años","+5 años"]: 
        id === "postulacion"? render = ["Todas","Espontanea", "Regular"]  :
        // id === "pais"? render = "paises" : 
        id === "stack"? render = ["Todos", 'Fullstack', 'Backend', 'Frontend'] :
        // id === "tecnologias" ? render = Aquí va una selección, puede escoger varias, ahorita buscas como. 
        // id === "plataforma" ? render = "plataformas" : 
        null
    
        

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
                    {render.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
          </Select>
        </FormControl>
        </>
  )
}