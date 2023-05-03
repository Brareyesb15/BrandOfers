"use client"
import Estado from "./chart"
import React, { use } from 'react';


const traerEstado = async () => {
    const response =  await fetch(`http://localhost:5000/stats/estado`)
    return response.json()
  }


const dataProm = traerEstado()

export default function Estado() {
    
    const data = use(dataProm)
    console.log(data)


    function getEstado(est) {
        const uniqueEst = [...new Set(est)];
        const counts = uniqueEst.map(este => este.filter(c => c === este).length);
        return [uniqueEst, counts];
      }

        const [uniqueEst, counts] = getEstado(data);
        console.log(uniqueEst);
        console.log(counts);

    return (
    <>
    <div>
        <Estado est={uniqueEst} num={counts}></Estado>
   </div>
    </>
)


}