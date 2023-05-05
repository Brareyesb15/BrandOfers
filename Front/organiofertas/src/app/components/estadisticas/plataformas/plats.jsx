"use client"
import React, { useState, useEffect, use } from 'react';
import LinesChart from './chart';


const traerPlats = async () => {
    const response =  await fetch(`http://localhost:5000/stats/plataformas`)
    return response.json()
  }

const dataProm = traerPlats()
console.log(dataProm,"DATAAAAAAAAAA")

export default function Plats() {
    const plataformas = use(dataProm)
  

    function getIdioma(idioma) {
        const uniqueIdioma = [...new Set(idioma)];
        const counts = uniqueIdioma.map(sta=> idioma.filter(c => c === sta).length);
        return [uniqueIdioma, counts];
      }

        const [uniqueIdioma, counts] = getIdioma(plataformas);
        console.log(uniqueIdioma,counts)

     
    return (
        <>
      <div>
        <LinesChart plats={uniqueIdioma} nums={counts}></LinesChart>
      </div>
        </>
    )


  }
