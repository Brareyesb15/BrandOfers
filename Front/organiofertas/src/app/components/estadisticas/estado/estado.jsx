"use client"
import Estadux from "./chart"
import React, { use } from 'react';


const traerEstado = async () => {
    const response =  await fetch(`http://localhost:5000/stats/estado`)
    return response.json()
  }


const dataProm = traerEstado()

export default function Estado() {
    
    const data = use(dataProm)


    function getEstado(est) {
        let uniqueEst = [...new Set(est)];
        console.log(uniqueEst, "arriba")
        let counts = uniqueEst.map(esta => est.filter(c => c === esta).length);
        console.log(counts,"medio")
       
         uniqueEst = uniqueEst.map(esta => esta === true ? "Activo" : "Inactivo");
        return [uniqueEst, counts];
      }

        const [uniqueEst, counts] = getEstado(data);
        console.log(uniqueEst,"DEEEEE");
        console.log(counts,"Diiiii");

    return (
    <>
    <div>
        <Estadux est={uniqueEst} num={counts}></Estadux>
   </div>
    </>
)


}