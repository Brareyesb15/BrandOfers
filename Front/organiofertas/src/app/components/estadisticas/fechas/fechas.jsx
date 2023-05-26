"use client"
import Fech from "./chart"
import React, { useState, useEffect, use } from 'react';



const traerFecha = async () => {
    const response =  await fetch(`http://localhost:5000/stats/fechas`)
    return response.json()
}

const dataProm = traerFecha()

export default function Fecha({id}) {
    

  const result = use(dataProm)
  const data = id === 1 ? result.uno : id === 2 ? result.dos : id === 3? result.tres : null;

    function getFecha(fecha) {
        const uniqueFecha = [...new Set(fecha)];
        const counts = uniqueFecha.map(fech => fecha.filter(c => c === fech).length);
        return [uniqueFecha, counts];
      }
        const [uniqueFecha, counts] = getFecha(data);

    return (
    <>
     <div style={{ textAlign: 'center'}}>
        <h2>Fecha de postulación</h2> 
        <Fech fec={uniqueFecha} num={counts}></Fech>
      </div>
    </>
)
}