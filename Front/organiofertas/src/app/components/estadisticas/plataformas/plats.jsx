"use client"
import React, { useState, useEffect, use } from 'react';
import LinesChart from './chart';


const traerPlats = async () => {
    const response =  await fetch(`http://localhost:5000/stats/plataformas/1`)
    return response.json()
  }

const dataProm = traerPlats()


export default function Plats({id}) {

  const result = use(dataProm)
  const plataformas = id === 1 ? result.uno : id === 2 ? result.dos : id === 3? result.tres : null;
  

    function getIdioma(idioma) {
        const uniqueIdioma = [...new Set(idioma)];
        const counts = uniqueIdioma.map(sta=> idioma.filter(c => c === sta).length);
        return [uniqueIdioma, counts];
      }

        const [uniqueIdioma, counts] = getIdioma(plataformas);
  

     
    return (
        <>
      <div style={{ textAlign: 'center' }}>
        <h2>Plataformas</h2>
        <LinesChart plats={uniqueIdioma} nums={counts}></LinesChart>
      </div>
        </>
    )


  }
