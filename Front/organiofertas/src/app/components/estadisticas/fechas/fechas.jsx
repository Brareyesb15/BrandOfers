"use client"
import Fech from "./chart"
import React, { useState, useEffect, use } from 'react';



const traerFecha = async () => {
    const response =  await fetch(`http://localhost:5000/stats/fechas/1`)
    return response.json()
  }
  const traerFecha2 = async () => {
    const response =  await fetch(`http://localhost:5000/stats/fechas/2`)
    return response.json()
  }
  const traerFecha3 = async () => {
    const response =  await fetch(`http://localhost:5000/stats/fechas/3`)
    return response.json()
  }

const dataProm = traerFecha()
const dataProm2 = traerFecha2()
const dataProm3 = traerFecha3()

export default function Fecha({id}) {
    
  const data = id === 1 ? use(dataProm) : id === 2 ? use(dataProm2) : id === 3? use(dataProm3) : null ;
  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!", data)
    function getFecha(fecha) {
        const uniqueFecha = [...new Set(fecha)];
        console.log(uniqueFecha, "DATOOOOOOOOOOOS")
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