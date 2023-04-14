"use client"
import React, { useState } from 'react';
import { TextField } from '@mui/material';

export default function BuscOferta({offers,setOffers,id}) {
    const [searchValue, setSearchValue] = useState("")


    const filter = (buscar) => {
        console.log(buscar, id)



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