"use client"
import { useState } from "react"

export default function Avances () {
    const [mostrar,setMostrar] = useState(false)


   const setearEstado = () => {
    setMostrar(true)
    console.log(mostrar)
   }

    return (
        <>
      
        <button onClick={setearEstado}>Agregar detalles</button>
        {mostrar && <p>HOLAAAAAAAAAAAAA</p>}
        </>
      )
  }