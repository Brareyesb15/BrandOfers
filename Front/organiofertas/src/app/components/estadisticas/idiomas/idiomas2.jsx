"use client"
import BarChart from "./chart2";
import React, { use } from 'react';

const traerIdioma = async () => {
    const response =  await fetch(`http://localhost:5000/stats/idioma2/1`)
    return response.json()
  }
  const traerIdioma2 = async () => {
    const response =  await fetch(`http://localhost:5000/stats/idioma2/2`)
    return response.json()
  }
  const traerIdioma3 = async () => {
    const response =  await fetch(`http://localhost:5000/stats/idioma2/3`)
    return response.json()
  }

const dataProm = traerIdioma()
const dataProm2 = traerIdioma2()
const dataProm3 = traerIdioma3()

export default function Idioma2({id}) {
    const data = id === 1 ? use(dataProm) : id === 2 ? use(dataProm2) : id === 3? use(dataProm3) : null ;
    
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

      const resultado = obtenerInformacionIdiomas(data);
    
  
      return (
      <>
      <div>
         <BarChart datos={resultado}></BarChart>
     </div>
      </>
  )
  
  
  }