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
  Box
} from '@mui/material';
import { TableSortLabel } from '@mui/material';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
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

  const options = ["Todos", 'Fullstack', 'Backend', 'Frontend'];


  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  }

    return ( 
        <>
        <TableContainer>
        <Table>
          <TableHead>
    <TableRow>
      <TableCell></TableCell>
      <TableCell>Oferta</TableCell>
      <TableCell>Stack</TableCell>
      <TableCell>
        <TableSortLabel active={orderBy === 'Fecha'} direction={orderBy === 'Fecha'? order : 'asc'} onClick={() => handleSort('Fecha')}>
        Fecha
        </TableSortLabel> 
      </TableCell>
      <TableCell>Experiencia</TableCell>
      <TableCell>Postulación</TableCell>
      <TableCell>País</TableCell>
      <TableCell>Stack</TableCell>
      <TableCell>Tecnologías</TableCell>
      <TableCell>Plataforma</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        {/* Selector de postulación */}
      </TableCell>
      <TableCell>
        {/* Selector de país */}
      </TableCell>
      <TableCell>
        {/* Selector de stack */}
      </TableCell>
      <TableCell>
        {/* No hay selector */}
      </TableCell>
      <TableCell>
        {/* Selector de postulación */}
      </TableCell>
      <TableCell>
        {/* Selector de país */}
      </TableCell>
      <TableCell>
      </TableCell>
      <TableCell>
      <FormControl style={{ minWidth: 100}}>
                  <Select
                    labelId="stack-label"
                    id="stack-select"
                    value={selectedOption}
                    onChange={(event) => handleOptionSelect(event.target.value)}
                    style={{ zIndex: 999}}
                  >
                    {options.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
      </TableCell>
      <TableCell>
        {/* No hay selector */}
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