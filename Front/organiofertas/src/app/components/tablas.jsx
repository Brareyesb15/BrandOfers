"use client"
import "./tablas.css"
import React from 'react';
import BuscOferta from "./Buscador oferta";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box
} from '@mui/material';
import { TableSortLabel } from '@mui/material';
import { use, useState } from 'react';
import Selector from "./Selectores";
import SelectorTec from "./SelectorTec";
import Link from "next/link";

const traer = async () => {
  const response =  await fetch(`http://localhost:5000/obtener`)
  return response.json()
}
 
const dataProm = traer()


export default function Fetching() {  // el async acá rompe toda la funcion. No puede ser una funcion con async en estos componentes, para eso usa el use. 
  const offer = use(dataProm)
  const [offers,setOffers] = useState(offer)
  const [roffers,setRoffers] = useState(offers)
  const [orderBy, setOrderBy] = useState('Oferta');
  const [order, setOrder] = useState('asc');

  const handleSort = (column) => {
    const isAsc = orderBy === column && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(column);
  }

  const sortData = (data) => {
    const sortedData = data.sort((a, b) => {
      if (orderBy === "Fecha") {
        const dateA = new Date(a.fechaPresentacion);
        const dateB = new Date(b.fechaPresentacion);
        if (order === "asc") {
          return dateA - dateB;
        } else {
          return dateB - dateA;
        }
      } else {
        return 0;
      }
    });
    return sortedData;
  };

  const handleClick = async (oferta) => {
    const options = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ activate: !oferta.activate })
    };
  
    const response = await fetch(`http://localhost:5000/activate/${oferta.id}`, options);
    const data = await response.json();
    
    // actualizar el estado de la oferta
    setRoffers(data)
  }

  


    return ( 
        <>
        <TableContainer>
        <Table>
          <TableHead>
    <TableRow>
      <TableCell></TableCell>
      <TableCell>Estado</TableCell>
      <TableCell>Oferta</TableCell>
      <TableCell>Empresa</TableCell>
      <TableCell>
        <TableSortLabel  active={orderBy === 'Fecha'} direction={orderBy === 'Fecha'? order : 'asc'} onClick={() => handleSort('Fecha')}>
        Fecha
        </TableSortLabel> 
      </TableCell>
      {/* <TableCell>Experiencia</TableCell> */}
      <TableCell>Postulación</TableCell>
      <TableCell>País</TableCell>
      {/* <TableCell>Stack</TableCell> */}
      <TableCell>Tecnologías</TableCell>
      <TableCell>Plataforma</TableCell>
      <TableCell>Estado</TableCell>

    </TableRow>
    <TableRow>
      <TableCell></TableCell>
      <TableCell></TableCell>
      <TableCell>
        <BuscOferta id={"oferta"} offers={offers} setRoffers={setRoffers} ></BuscOferta>
      </TableCell>
      <TableCell>
        <BuscOferta id={"empresa"} offers={offers} setRoffers={setRoffers}></BuscOferta>
      </TableCell>
      <TableCell>
        <BuscOferta id={"fecha"} offers={offers} setRoffers={setRoffers}></BuscOferta>
      </TableCell>
        {/* <TableCell>
          <Selector id={"experiencia"} offers={offers} setRoffers={setRoffers} ></Selector>
        </TableCell> */}
      <TableCell>
        <Selector id={"postulacion"} offers={offers} setRoffers={setRoffers} ></Selector>
      </TableCell>
      <TableCell>
        <Selector id={"pais"} offers={offers} setRoffers={setRoffers} ></Selector>
      </TableCell>
      {/* <TableCell>
        <Selector id={"stack"} offers={offers} setRoffers={setRoffers} ></Selector>
      </TableCell> */}
      <TableCell>
        <SelectorTec id={"tecnologias"} offers={offers} setRoffers={setRoffers} ></SelectorTec>
      </TableCell>
      <TableCell>
        <Selector id={"plataforma"} offers={offers} setRoffers={setRoffers} ></Selector>
      </TableCell>
      <TableCell>
        <Selector id={"estado"} offers={offers} setRoffers={setRoffers} ></Selector>
      </TableCell>
      
    </TableRow>
  </TableHead>
          <TableBody>
          {sortData(roffers).map((oferta, i) => (
              <TableRow key={i}>
                <TableCell>{i+1}</TableCell>
                <TableCell> <button onClick={() => handleClick(oferta)}>{oferta.active ? "Desactivar" : "Activar"}</button></TableCell>
                <TableCell><Link href={`Detalles/${oferta.id}`}>{oferta.titulo}</Link></TableCell>
                <TableCell>{oferta.empresa}</TableCell>
                <TableCell style={{ minWidth: "100px", maxWidth: "150px" }}>{oferta.fechaPresentacion}</TableCell>
                {/* <TableCell>{oferta.experiencia}</TableCell> */}
                <TableCell>{oferta.postulacion}</TableCell>
                <TableCell>{oferta.pais}</TableCell>
                {/* <TableCell>{oferta.stack}</TableCell> */}
                <TableCell>{oferta.tecnologias.join(" ")}</TableCell>
                <TableCell>{oferta.plataforma}</TableCell>
                <TableCell>{oferta.active ?  "Activa" : "Inactiva"}</TableCell>  
              </TableRow>
))}
        </TableBody>
      </Table>
    </TableContainer>
</>
    )}