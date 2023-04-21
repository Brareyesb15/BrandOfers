"use client"
import { usePathname, useSearchParams} from 'next/navigation'
import React from "react";

export default function DetalleID() {
    let id = parseInt(usePathname().substring(10)) // en next utilizas usePathname para obtener la url.
    console.log(id)



    return (
      <>
      <div>Estamos en detalle ID</div>
      </>
    )
  }