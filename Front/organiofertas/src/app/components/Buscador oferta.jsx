"use client"
import React, { useState } from 'react';
import { TextField } from '@mui/material';

export default function BuscOferta() {
    const [searchValue, setSearchValue] = useState("")

    console.log(searchValue) 

    return (

        <>
        <TextField
              label="Buscar"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            </>
    )

}