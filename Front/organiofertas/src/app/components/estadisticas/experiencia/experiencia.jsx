"use client"
import Experiencia from "./chart"
import React, { useState, useEffect, use } from 'react';


const traerExp = async () => {
    const response =  await fetch(`http://localhost:5000/stats/exp/1`)
    return response.json()
  }
const traerExp2 = async () => {
    const response =  await fetch(`http://localhost:5000/stats/exp/2`)
    return response.json()
  }
const traerExp3 = async () => {
    const response =  await fetch(`http://localhost:5000/stats/exp/3`)
    return response.json()
  }

const dataProm = traerExp()
const dataProm2 = traerExp2()
const dataProm3 = traerExp3()

export default function Exp({id}) {
    
  const data = id === 1 ? use(dataProm) : id === 2 ? use(dataProm2) : id === 3? use(dataProm3) : null ;


    function getExperiencias(exp) {
        const uniqueExp = [...new Set(exp)];
        const counts = uniqueExp.map(expe => exp.filter(c => c === expe).length);
        return [uniqueExp, counts];
      }

        const [uniqueExp, counts] = getExperiencias(data);

    return (
    <>
     <div style={{ textAlign: 'center' }}>
        <h2>Experiencia</h2>
        <Experiencia exp={uniqueExp} num={counts}></Experiencia>
   </div>
    </>
)


}