"use client"
import React, { useState, useEffect, use } from 'react';
import LinesChart from './chart';
import "../tecnologias/tecs.css"


const traerTecs = async () => {
    const response =  await fetch(`http://localhost:5000/stats/tecs`)
    return response.json()
  }

const dataProm = traerTecs()


export default function Tecs({id}) {

  const result = use(dataProm)
  const matrix = id === 1 ? result.uno : id === 2 ? result.dos : id === 3? result.tres : null
 
   
  function tecnologiasMasComunes(matriz) {
    const frecuenciaInversa = {};
    for (const lista of matriz) {
      const tecnologiasUnicas = new Set(lista);
      for (const tecnologia of tecnologiasUnicas) {
        if (tecnologia in frecuenciaInversa) {
          frecuenciaInversa[tecnologia] += 1;
        } else {
          frecuenciaInversa[tecnologia] = 1;
        }
      }
    }
    const tecnologiasOrdenadas = Object.entries(frecuenciaInversa).sort((a, b) => b[1] - a[1]).slice(0, 15);
    return tecnologiasOrdenadas.map(([tecnologia, frecuencia]) => [tecnologia, frecuencia]);
  } 

    
    const combinations = {
        two: {},
        three: {},
        four: {}
      };

      const tecsMas = tecnologiasMasComunes(matrix)
 
      
      matrix.forEach((array) => {
        for (let i = 0; i < array.length; i++) {
          for (let j = i + 1; j < array.length; j++) {
            // Combinaciones de dos tecnologías
            const combinationTwo = [array[i], array[j]].sort().join();
            if (combinationTwo in combinations.two) {
              combinations.two[combinationTwo]++;
            } else {
              combinations.two[combinationTwo] = 1;
            }
            
            for (let k = j + 1; k < array.length; k++) {
              // Combinaciones de tres tecnologías
              const combinationThree = [array[i], array[j], array[k]].sort().join();
              if (combinationThree in combinations.three) {
                combinations.three[combinationThree]++;
              } else {
                combinations.three[combinationThree] = 1;
              }
              
              for (let l = k + 1; l < array.length; l++) {
                // Combinaciones de cuatro tecnologías
                const combinationFour = [array[i], array[j], array[k], array[l]].sort().join();
                if (combinationFour in combinations.four) {
                  combinations.four[combinationFour]++;
                } else {
                  combinations.four[combinationFour] = 1;
                }
              }
            }
          }
        }
      });
      
      // Ordenar los resultados y seleccionar los valores más comunes para cada combinación.
      const resultFour = Object.entries(combinations.four).sort((a, b) => b[1] - a[1]).slice(0, 10).map(([technologies, count]) => [technologies.replace(/,/g, ', '), count]);
      const resultThree = Object.entries(combinations.three).sort((a, b) => b[1] - a[1]).slice(0, 10).map(([technologies, count]) => [technologies.replace(/,/g, ', '), count]);
      const resultTwo = Object.entries(combinations.two).sort((a, b) => b[1] - a[1]).slice(0, 10).map(([technologies, count]) => [technologies.replace(/,/g, ', '), count]);
      

    return (
        <>
      <div className="gridContainerTecs">
       
        <div  className="componentBox" style={{ textAlign: 'center' }}>
          <h2>Tecnologías más postuladas</h2>
            <LinesChart datos={tecsMas}></LinesChart> </div>
        <div  className="componentBox" style={{ textAlign: 'center' }}>
          <h2>Par de Tecnologías que más se repiten juntas</h2>
          <LinesChart datos={resultFour}></LinesChart> </div>
        <div  className="componentBox" style={{ textAlign: 'center' }}>
          <h2>Trio de Tecnologías que más se repiten juntas</h2>
          <LinesChart datos={resultThree}></LinesChart> </div>
        <div  className="componentBox" style={{ textAlign: 'center' }}>
          <h2>Poker de Tecnologías que más se repiten juntas</h2>
          <LinesChart datos={resultTwo}></LinesChart> </div>
      </div>
        </>
    )


  }
