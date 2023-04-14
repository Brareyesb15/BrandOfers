"use client"
import React, { useState } from 'react';
import { TextField } from '@mui/material';

export default function BuscOferta({offers,setOffers}) {
    const [searchValue, setSearchValue] = useState("")


    const filter = (off) => {


    }

    return (

        <>
        <TextField
              label="Buscar"
              value={searchValue}
              onChange={(e) => {setSearchValue(e.target.value); console.log(e.target)}}
            />
            </>
    )

}