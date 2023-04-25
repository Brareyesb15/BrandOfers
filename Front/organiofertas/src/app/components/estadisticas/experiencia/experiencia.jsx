"use client"
import Experiencia from "./chart"
import React, { useState, useEffect, use } from 'react';


const traerExp = async () => {
    const response =  await fetch(`http://localhost:5000/stats/exp`)
    return response.json()
  }

const dataProm = traerExp()

export default function Exp() {
    
    const data = use(dataProm)


    function getExperiencias(exp) {
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