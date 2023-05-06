"use client"
import Fech from "./chart"
import React, { useState, useEffect, use } from 'react';


const traerFecha = async () => {
    const response =  await fetch(`http://localhost:5000/stats/fechas`)
    return response.json()
  }

const dataProm = traerFecha()

export default function Fecha() {
    
    const data = use(dataProm)


    function getFecha(fecha) {
        const uniqueFecha = [...new Set(fecha)];
        console.log(uniqueFecha, "DATOOOOOOOOOOOS")
        const counts = uniqueFecha.map(fech => fecha.filter(c => c === fech).length);
        return [uniqueFecha, counts];
      }
        const [uniqueFecha, counts] = getFecha(data);
    return (
    <>
    <div>
        <Fech fec={uniqueFecha} num={counts}></Fech>
   </div>
    </>
)


}