"use client"
import Estadux from "./chart"
import React, { use } from 'react';


const traerEstado = async () => {
    const response =  await fetch(`http://localhost:5000/stats/estado/1`)
    return response.json()
  }
  const traerEstado2 = async () => {
    const response =  await fetch(`http://localhost:5000/stats/estado/2`)
    return response.json()
  }
  const traerEstado3 = async () => {
    const response =  await fetch(`http://localhost:5000/stats/estado/3`)
    return response.json()
  }


const dataProm = traerEstado()
const dataProm2 = traerEstado2()
const dataProm3 = traerEstado3()

export default function Estado({id}) {
    
  const data = id === 1 ? use(dataProm) : id === 2 ? use(dataProm2) : id === 3? use(dataProm3) : null ;


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
     <div style={{ textAlign: 'center' }}>
        <h2>Estado de la oferta</h2>
        <Estadux est={uniqueEst} num={counts}></Estadux>
   </div>
    </>
)


}