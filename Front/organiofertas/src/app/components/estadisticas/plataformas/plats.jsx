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
  
  function plataformasMasComunes(matriz) {
    const frecuenciaInversa = {};
    for (const lista of matriz) {
      const platsUnicas = new Set(lista);
      for (const plats of platsUnicas) {
        if (plats in frecuenciaInversa) {
          frecuenciaInversa[plats] += 1;
        } else {
          frecuenciaInversa[plats] = 1;
        }
      }
    }
    const plataformasOrdenadas = Object.entries(frecuenciaInversa).sort((a, b) => b[1] - a[1]).slice(0, 15);
    return plataformasOrdenadas.map(([plataforma, frecuencia]) => [plataforma, frecuencia]);
  } 

      const platsMas = plataformasMasComunes(plataformas)
     
    return (
        <>
      <div>
        <LinesChart datos={platsMas}></LinesChart>
      </div>
        </>
    )


  }
