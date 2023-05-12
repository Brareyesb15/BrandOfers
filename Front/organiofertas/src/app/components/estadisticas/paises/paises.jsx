"use client"
import Pais from "./chart"
import React, { useState, useEffect, use } from 'react';

const traerPaises = async () => {
    const response =  await fetch(`http://localhost:5000/stats/paises/1`)
    return response.json()
  }
  const traerPaises2 = async () => {
    const response =  await fetch(`http://localhost:5000/stats/paises/2`)
    return response.json()
  }
  const traerPaises3 = async () => {
    const response =  await fetch(`http://localhost:5000/stats/paises/3`)
    return response.json()
  }

const dataProm = traerPaises()
const dataProm2 = traerPaises2()
const dataProm3= traerPaises3()

export default function Paises({id}) {
    
  const data = id === 1 ? use(dataProm) : id === 2 ? use(dataProm2) : id === 3? use(dataProm3) : null ;

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