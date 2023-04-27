"use client"
import { usePathname, useSearchParams} from 'next/navigation'
import React from "react";
import {use} from "react"
import NewComponent from "../../components/new component"



const traerDetalles= async (opcion) => {
  const response =  await fetch(`http://localhost:5000/detalles/${opcion}`)
  return response.json()
}


export default function DetalleID() {
  let id = parseInt(usePathname().substring(10))
  const detalles = use(traerDetalles(id))

  return (
    <>
        {detalles ? (
          <div>
            <h2>Oferta: {detalles.titulo}</h2>
            <p>{detalles.descripcion}</p>
            <p>Empresa: {detalles.empresa}</p>
            <p>País: {detalles.pais}</p>
            <p>Experiencia: {detalles.experiencia}</p>
            <p>Tecnologías: {detalles.tecnologias.join(", ")}</p>
            <p>Estado: {detalles.active? "Activo": "Inactivo"}</p>
            <p>Idioma: {detalles.idioma.idioma} Nivel: {detalles.idioma.nivel}</p>
            <a href={detalles.linkOferta} target="_blank">Link</a>
            <p>Plataforma: {detalles.plataforma}</p>
            <p>Tipo de postulación: {detalles.postulacion}</p>
            <p>Stack: {detalles.stack}</p>
          </div>
        ) : (
          <p>Cargando detalles...</p>
        )}
      
      <NewComponent></NewComponent>
    </>
  ) 
}