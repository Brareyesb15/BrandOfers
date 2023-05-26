"use client"
import Estadux from "./chart"
import React, { use } from 'react';


const traerEstado = async () => {
    const response =  await fetch(`http://localhost:5000/stats/estado/1`)
    let respu = await response.json();
    console.log("Entre en 1", response,respu)
    return respu
  }
  const traerEstado2 = async () => {
    const response =  await fetch(`http://localhost:5000/stats/estado/2`)
    let respu = await response.json();
    console.log("Entre en 2", response,respu)
    return respu
  }
  const traerEstado3 = async () => {
    const response =  await fetch(`http://localhost:5000/stats/estado/3`)
    let respu = await response.json();
    console.log("Entre en 3", response,respu)
    return respu
  }


const dataProm = traerEstado()
const dataProm2 = traerEstado2()
const dataProm3 = traerEstado3()

export default function Estado({id}) {
  console.log(id)
    
  const data = id === 1 ? use(dataProm) : id === 2 ? use(dataProm2) : id === 3? use(dataProm3) : null ;

  console.log(data)
    function getEstado(est) {
        let uniqueEst = [...new Set(est)];
        
        let counts = uniqueEst.map(esta => est.filter(c => c === esta).length);
       
       
         uniqueEst = uniqueEst.map(esta => esta === true ? "Activo" : "Inactivo");
        return [uniqueEst, counts];
      }

        const [uniqueEst, counts] = getEstado(data);
        
      

    return (
    <>
     <div style={{ textAlign: 'center' }}>
        <h2>Estado de la oferta</h2>
        <Estadux est={uniqueEst} num={counts}></Estadux>
   </div>
    </>
)


}