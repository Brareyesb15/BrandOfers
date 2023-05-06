"use client"
import Fechas from "./chart"
import React, { useState, useEffect, use } from 'react';


const traerFecha = async () => {
    const response =  await fetch(`http://localhost:5000/stats/exp`)
    return response.json()
  }

const dataProm = traerFecha()

export default function Fecha() {
    
    const data = use(dataProm)


    function getFecha(fecha) {
        const uniqueExp = [...new Set(exp)];
        const counts = uniqueExp.map(expe => exp.filter(c => c === expe).length);
        return [uniqueExp, counts];
      }

        const [uniqueExp, counts] = getExperiencias(data);
        console.log(uniqueExp);
        console.log(counts);

    return (
    <>
    <div>
        <Experiencia exp={uniqueExp} num={counts}></Experiencia>
   </div>
    </>
)


}