"use client"
import Estadux from "./chart"
import React, { use } from 'react';


const traerEstado = async () => {
    const response =  await fetch(`http://localhost:5000/stats/estado`)
    return response.json();
  }

const dataProm = traerEstado()


export default function Estado({id}) {
    
  const result = use(dataProm) // Podrías pensar en ponerle un catcheador de errores aquí, luego averiguas como. Esto es algo que podría romper.

  const data = id === 1 ? result.uno : id === 2 ? result.dos : id === 3? result.tres : null

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