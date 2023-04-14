"use client"
import React, { useState } from 'react';
import { TextField } from '@mui/material';

export default function BuscOferta({offers,setRoffers,id}) {
    const [searchValue, setSearchValue] = useState("")
    console.log(offers)


    const filter = (buscar) => {
        console.log(buscar)
        if (id === "oferta") {
            setRoffers(offers.filter(obj => obj.titulo.toLowerCase().includes(buscar.toLowerCase()))) 
            } 
        else if (id === "empresa") {
            setRoffers(offers.filter(obj => obj.empresa.toLowerCase().includes(buscar.toLowerCase()))) 
            } 
        else if (id  === "fecha" ) {
            setRoffers(offers.filter(obj => obj.fecha.toLowerCase().includes(buscar.toLowerCase()))) 
            }
    }

    return (

        <>
        <TextField
              label="Buscar"
              value={searchValue}
              onChange={(e) => {setSearchValue(e.target.value); filter(e.target.value)}}
            />
            </>
    )

}