"use client"
import React, { useState, useEffect, use } from 'react';
import LinesChart from './chart';


const traerPlats = async () => {
    const response =  await fetch(`http://localhost:5000/stats/plataformas`)
    return response.json()
  }

const dataProm = traerPlats()


export default function Plats({id}) {

  const result = use(dataProm)
  const data = id === 1 ? result.uno : id === 2 ? result.dos : id === 3? result.tres : null;
  

    function getPlat(plat) {
        const uniquePlat = [...new Set(plat)];
        const counts = uniquePlat.map(sta=> plat.filter(c => c === sta).length);
        return [uniquePlat, counts];
      }

      let uniquePlat, counts; 
      
      if (data) {
        [uniquePlat, counts] = getPlat(data);
      } else {
        uniquePlat = null;
        counts = null;
      }
  

     
    return (
        <>
      <div style={{ textAlign: 'center' }}>
        <h2>Plataformas</h2>
        <LinesChart plats={uniquePlat} nums={counts}></LinesChart>
      </div>
        </>
    )


  }
