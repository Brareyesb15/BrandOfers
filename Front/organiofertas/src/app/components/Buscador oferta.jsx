"use client"
import React, { useState } from 'react';
import { TextField } from '@mui/material';

export default function BuscOferta({offers,setOffers,id}) {
    const [searchValue, setSearchValue] = useState("")



    const filter = (buscar) => {
        id === "oferta" ? 
        setOffers(offers.filter(obj => obj.titulo.toLowerCase().includes(buscar.toLowerCase()))) : 
        id === "empresa" ? 
            console.log("llamado a funcion empresa", buscar) :
        id === "fecha" ?  
            console.log("llamado a funcion fecha", buscar) : 
        null

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