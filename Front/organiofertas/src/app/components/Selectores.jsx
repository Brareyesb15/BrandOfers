"use client"
import React, { use, useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const traerOpciones = async (opcion) => {
  const response =  await fetch(`http://localhost:5000/opciones/${opcion}`)
  return response.json()
}


export default function Selector({offers,setRoffers,id}) {

    const [selectedOption, setSelectedOption] = useState('');
    const [prevSelectedOption, setPrevSelectedOption] = useState('');
    let render = []
  


        if (id === "experiencia") {
          render = ["Todos","-1 año","1 y 2 años","2 y 5 años","+5 años"];
          if (selectedOption !== prevSelectedOption) {
            selectedOption === "Todos" ? null : 
            selectedOption === "-1 año" ? (setRoffers(offers.filter(obj => obj.experiencia.toLowerCase().includes("Menos de 1 año".toLowerCase()))),
            setPrevSelectedOption(selectedOption)) :
            selectedOption === "+5 años" ? (setRoffers(offers.filter(obj => obj.experiencia.toLowerCase().includes("Más de 5 años".toLowerCase()))),
            setPrevSelectedOption(selectedOption)) :
          setRoffers(offers.filter(obj => obj.experiencia.toLowerCase().includes(selectedOption.toLowerCase())));
          setPrevSelectedOption(selectedOption);
          }}
        
        // id === "postulacion"? render = ["Todas","Espontanea", "Regular"]  :
        // id === "pais"? render = use(traerOpciones(id)): 
        // id === "stack"? render = ["Todos", 'Fullstack', 'Backend', 'Frontend'] :
        //  id === "plataforma" ? render = use(traerOpciones(id)): 
        // null
    
        

    const handleOptionSelect = (option) => {
    setSelectedOption(option);}
    
    console.log(selectedOption)

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