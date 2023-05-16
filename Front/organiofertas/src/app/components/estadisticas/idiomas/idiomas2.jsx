"use client"
import BarChart from "./chart2";

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
  

          
  
      return (
      <>
      <div>
         <BarChart></BarChart>
     </div>
      </>
  )
  
  
  }