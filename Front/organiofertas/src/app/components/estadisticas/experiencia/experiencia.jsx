"use client"
import Experiencia from "./chart"
import React, { useState, useEffect, use } from 'react';


const traerExp = async () => {
    const response =  await fetch(`http://localhost:5000/stats/exp`)
    return response.json()
  }

const dataProm = traerExp()

export default function Exp({id}) {
    
  const result = use(dataProm)
  const data = id === 1 ? result.uno : id === 2 ? result.dos : id === 3? result.tres : null;


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