"use client"
import React, { useState, useEffect, use } from 'react';
import LinesChart from './chart';


const traerPlats = async () => {
    const response =  await fetch(`http://localhost:5000/stats/plataformas/1`)
    return response.json()
  }
  const traerPlats2 = async () => {
    const response =  await fetch(`http://localhost:5000/stats/plataformas/2`)
    return response.json()
  }
  const traerPlats3 = async () => {
    const response =  await fetch(`http://localhost:5000/stats/plataformas/3`)
    return response.json()
  }

const dataProm = traerPlats()
const dataProm2 = traerPlats2()
const dataProm3 = traerPlats3()

export default function Plats({id}) {
    const plataformas = id === 1 ? use(dataProm) : id === 2 ? use(dataProm2) : id === 3? use(dataProm3) : null ;
  

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
