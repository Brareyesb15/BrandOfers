"use client"
import { usePathname, useSearchParams} from 'next/navigation'
import React from "react";
import {use, useState} from "react"


const traerDetalles= async (opcion) => {
    const response =  await fetch(`http://localhost:5000/detalles/${opcion}`)
    return response.json()
  }

const traer = (id) => {traerDetalles(id)}


export default function DetalleID() {
    let id = parseInt(usePathname().substring(10)) // en next utilizas usePathname para obtener la url. Aqui le saco el numero a una url que es /Detalles/12
    const detalles = use(traerDetalles(id))
    console.log(detalles)


    return (
      <>
      <div>Estamos en detalle ID</div>
      </>
    )
  }