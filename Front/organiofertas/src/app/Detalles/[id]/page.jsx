"use client"
import { usePathname, useSearchParams} from 'next/navigation'
import React from "react";

const traerDetalles= async (opcion) => {
    const response =  await fetch(`http://localhost:5000/opciones/${opcion}`)
    return response.json()
  }

export default function DetalleID() {
    
    let id = parseInt(usePathname().substring(10)) // en next utilizas usePathname para obtener la url. Aqui le saco el numero a una url que es /Detalles/12



    return (
      <>
      <div>Estamos en detalle ID</div>
      </>
    )
  }