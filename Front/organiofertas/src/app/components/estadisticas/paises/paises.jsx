"use client"
import Pais from "./chart"
import React, { useState, useEffect, use } from 'react';

const traerPaises = async () => {
    const response =  await fetch(`http://localhost:5000/stats/paises`)
    return response.json()
  }


const dataProm = traerPaises()


export default function Paises({id}) {
    
  const result = use(dataProm)
  const data = id === 1 ? result.uno : id === 2 ? result.dos : id === 3? result.tres : null;

  console.log(data)

    function getCountryCounts(countries) {
        const uniqueCountries = [...new Set(countries)];
        const counts = uniqueCountries.map(country => countries.filter(c => c === country).length);
        return [uniqueCountries, counts];
      }

      let uniqueCountries, counts; 
      
      if (data) {
        [uniqueCountries, counts] = getCountryCounts(data);
      } else {
        uniqueCountries = null;
        counts = null;
      }
    

    return (
    <>
    <div style={{ textAlign: 'center' }}>
        <h2>Paises</h2>
        <Pais paises={uniqueCountries} num={counts}></Pais>
   </div>
    </>
)


}