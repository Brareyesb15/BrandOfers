"use client"
import Idiomi from "./chart"
import React, { use } from 'react';


const traerIdioma = async () => {
    const response =  await fetch(`http://localhost:5000/stats/idioma`)
    return response.json()
  }
 

const dataProm = traerIdioma()


export default function Idioma({id}) {
  

  const result = use(dataProm)
  const data = id === 1 ? result.uno : id === 2 ? result.dos : id === 3? result.tres : null;


    function getIdioma(idioma) {
        const uniqueIdioma = [...new Set(idioma)];
        const counts = uniqueIdioma.map(sta=> idioma.filter(c => c === sta).length);
        return [uniqueIdioma, counts];
      }

        const [uniqueIdioma, counts] = getIdioma(data);
        

    return (
    <>
    <div style={{ textAlign: 'center' }}>
        <h2>Idiomas</h2>
        <Idiomi idio={uniqueIdioma} num={counts}></Idiomi>
   </div>
    </>
)


}