"use client"
import BarChart from "./chart2";
import React, { use } from 'react';

const traerIdioma = async () => {
    const response =  await fetch(`http://localhost:5000/stats/idioma2`)
    return response.json()
  }


const dataProm = traerIdioma()


export default function Idioma2({id}) {
   
const result = use(dataProm)
const data = id === 1 ? result.uno : id === 2 ? result.dos : id === 3? result.tres : null;
    
    function obtenerInformacionIdiomas(info) {
        // Obtener los idiomas únicos y su cantidad de repeticiones
        const idiomas = {};
        info.forEach((item) => {
          const { idioma, nivel } = item;
          if (!idiomas[idioma]) {
            idiomas[idioma] = { num: 1, niveles: { [nivel]: 1 } };
          } else {
            idiomas[idioma].num++;
            if (!idiomas[idioma].niveles[nivel]) {
              idiomas[idioma].niveles[nivel] = 1;
            } else {
              idiomas[idioma].niveles[nivel]++;
            }
          }
        });
      
        // Generar el nuevo array de objetos
        const resultado = Object.keys(idiomas).map((idioma) => ({
          nombre: idioma,
          num: idiomas[idioma].num,
          niveles: Object.entries(idiomas[idioma].niveles).map(([nivel, repeticiones]) => ({
            nivel,
            repeticiones,
          })),
        }));
      
        return resultado;
      }

      const resultado = data ? obtenerInformacionIdiomas(data) : null;
    
  
      return (
      <>
      <div style={{ textAlign: 'center' }}>
        <h2>Nivel de idioma</h2>
         <BarChart datos={resultado}></BarChart>
     </div>
      </>
  )
  
  
  }