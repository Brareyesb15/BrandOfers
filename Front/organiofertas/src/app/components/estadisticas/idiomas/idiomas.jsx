"use client"
import Idiomi from "./chart"
import React, { use } from 'react';


const traerIdioma = async () => {
    const response =  await fetch(`http://localhost:5000/stats/idioma/1`)
    return response.json()
  }
  const traerIdioma2 = async () => {
    const response =  await fetch(`http://localhost:5000/stats/idioma/2`)
    return response.json()
  }
  const traerIdioma3 = async () => {
    const response =  await fetch(`http://localhost:5000/stats/idioma/3`)
    return response.json()
  }

const dataProm = traerIdioma()
const dataProm2 = traerIdioma2()
const dataProm3 = traerIdioma3()

export default function Idioma({id}) {
  
  const data = id === 1 ? use(dataProm) : id === 2 ? use(dataProm2) : id === 3? use(dataProm3) : null ;


    function getIdioma(idioma) {
        const uniqueIdioma = [...new Set(idioma)];
        const counts = uniqueIdioma.map(sta=> idioma.filter(c => c === sta).length);
        return [uniqueIdioma, counts];
      }

        const [uniqueIdioma, counts] = getIdioma(data);
        console.log(uniqueIdioma,counts)
        

    return (
    <>
    <div style={{ textAlign: 'center' }}>
        <h2>Idiomas</h2>
        <Idiomi idio={uniqueIdioma} num={counts}></Idiomi>
   </div>
    </>
)


}