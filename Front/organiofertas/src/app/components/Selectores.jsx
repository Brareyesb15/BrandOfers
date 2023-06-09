"use client"
import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const traerOpciones = async (opcion) => {
  const response =  await fetch(`http://localhost:5000/opciones/${opcion}`)
  return response.json()
}

export default function Selector({offers,setRoffers,id}) {
  const [selectedOption, setSelectedOption] = useState('');
  const [prevSelectedOption, setPrevSelectedOption] = useState('');
  const [render, setRender] = useState([]);

  useEffect(() => {
    if (id === "pais") {
      traerOpciones(id).then(opciones => {
        setRender(["Todos",...opciones]);
      });
      
    } 
    else if  ( id === "plataforma")  
      traerOpciones(id).then(opciones => {
      setRender(["Todas",...opciones]);
    });
    else if (id === "experiencia") {
      setRender(["Todos","-1 año","1 y 2 años","2 y 5 años","+5 años"]);
    } else if (id === "postulacion") {
      setRender(["Todas","Espontanea", "Regular"]);
    } else if (id === "stack") {
      setRender(["Todos", 'Fullstack', 'Backend', 'Frontend']);
    }
    else if (id === "estado") {
      setRender(["Todas", 'Activa', 'Inactiva']);
    }
      
  }, [id]);

  useEffect(() => {
    if (selectedOption !== prevSelectedOption) {
      if (id === "experiencia"){ 
        if (selectedOption === "Todos") {
          setRoffers(offers);
        } else if (selectedOption === "-1 año") {
          setRoffers(offers.filter(obj => obj.experiencia.toLowerCase().includes("Menos de 1 año".toLowerCase())));
          setPrevSelectedOption(selectedOption);
        } else if (selectedOption === "+5 años") {
          setRoffers(offers.filter(obj => obj.experiencia.toLowerCase().includes("Más de 5 años".toLowerCase())));
          setPrevSelectedOption(selectedOption);
        } else {
          setRoffers(offers.filter(obj => obj.experiencia.toLowerCase().includes(selectedOption.toLowerCase())));
        }
        setPrevSelectedOption(selectedOption);
      }
      if (id === "pais"){
          if (selectedOption === "Todos") {
            setRoffers(offers)}
           else setRoffers(offers.filter(obj => obj.pais.toLowerCase().includes(selectedOption.toLowerCase())));
      }
      if (id === "postulacion"){
        if (selectedOption === "Todas") {
          setRoffers(offers)}
         else  setRoffers(offers.filter(obj => obj.postulacion.toLowerCase().includes(selectedOption.toLowerCase())));
      }
      // if (id === "stack"){
      //   setRoffers(offers.filter(obj => obj.stack.toLowerCase().includes(selectedOption.toLowerCase())));
      // }
      if (id === "plataforma"){
        if (selectedOption === "Todas") {
          setRoffers(offers)}
         else setRoffers(offers.filter(obj => obj.plataforma.toLowerCase().includes(selectedOption.toLowerCase())));
      }
      if (id === "estado") {
        setRoffers(offers.filter(obj => {
          if (selectedOption === "Activa") {
            return obj.active;
          } else if (selectedOption === "Inactiva") {
            return !obj.active;
          } else { // selectedOption === "Todos"
            return true; // devolver todos los elementos de offers
          }
        }));
      }
      }}, [selectedOption, prevSelectedOption, offers, setRoffers]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  }
    

  return (
    <>
      <FormControl style={{ minWidth: 100 }}>
        <Select
          labelId="label" 
          id="select"
          value={selectedOption}
          onChange={(event) => handleOptionSelect(event.target.value)}>
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