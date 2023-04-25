"use client"
import Pais from "./chart"
import React, { useState, useEffect, use } from 'react';

const traerPaises = async () => {
    const response =  await fetch(`http://localhost:5000/stats/paises`)
    return response.json()
  }

const dataProm = traerPaises()

export default function Paises() {
    
    const data = use(dataProm)
    console.log(data)

    function getCountryCounts(countries) {
        const uniqueCountries = [...new Set(countries)];
        const counts = uniqueCountries.map(country => countries.filter(c => c === country).length);
        return [uniqueCountries, counts];
      }

        const [uniqueCountries, counts] = getCountryCounts(data);
        console.log(uniqueCountries);
        console.log(counts);

    return (
    <>
    <div>
        <Pais paises={uniqueCountries} num={counts}></Pais>
   </div>
    </>
)


}