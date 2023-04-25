"use client"
import Pais from "./chart"

const traerPaises = async () => {
    const response =  await fetch(`http://localhost:5000/paises`)
    return response.json()
  }

const dataProm = traerPaises()

export default function Paises() {
    
    const data = use(dataProm)
    
    return (
    <>
    <div>
        <Pais></Pais>
   </div>
    </>
)


}