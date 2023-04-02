"use client"
import "./tablas.css"
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { TableSortLabel } from '@mui/material';
import { use, useState } from 'react';

const traer = async () => {
  const response =  await fetch(`http://localhost:5000/obtener`)
  return response.json()
}

const dataProm = traer()


export default function Fetching() {  // el async acá rompe toda la funcion. No puede ser una funcion con async en estos componentes, para eso usa el use. 
  const offers = use(dataProm)
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

    return ( 
        <>
        <TableContainer>
        <Table>
          <TableHead>
            <TableRow>

              <TableCell>
                <TableSortLabel>
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel>
                 Oferta
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel>
                 Empresa
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel active={orderBy === 'Fecha'} direction={orderBy === 'Fecha'? order : 'asc'} onClick={() => handleSort('Fecha')}>
                  Fecha
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel>
                 Experiencia
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel>
                 Postulación
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel>
                 País
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel>
                 Stack
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel>
                 Tecnologías
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel>
                 Plataforma
                </TableSortLabel>
              </TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
          {sortData(offers).map((student,i) => (
            <TableRow key={i}>
              <TableCell>{i+1}</TableCell>
              <TableCell>{student.titulo}</TableCell>
              <TableCell>{student.empresa}</TableCell>
              <TableCell>{student.fechaPresentacion}</TableCell>
              <TableCell>{student.experiencia}</TableCell>
              <TableCell>{student.postulacion}</TableCell>
              <TableCell>{student.pais}</TableCell>
              <TableCell>{student.stack}</TableCell>
              <TableCell>{student.tecnologias.join(" ")}</TableCell>
              <TableCell>{student.plataforma}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
</>
    )}