"use client"
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  Switch,
  NativeSelect
} from '@mui/material';
import { TableSortLabel } from '@mui/material';
import tecs from "../../../../../Back/utils/tecs"
import { use } from 'react';

const traer = async () => {
  const response =  await fetch(`http://localhost:5000/obtener`)
  return response.json()
}

const dataProm = traer()

export default function Fetching() {  // el async acá rompe toda la funcion. No puede ser una funcion con async en estos componentes, para eso usa el use. 
  const offers = use(dataProm)
  console.log(offers)

    return ( 
        <>
        <div>holaaaa</div>
        <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel>
                 Oferta
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel>
                  Fecha
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel >
                 Empresa
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel >
                  Descripcion
                </TableSortLabel>
              </TableCell>
              <TableCell>
                Idioma
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {offers.map((student) => (
            <TableRow key={student.titulo}>
              <TableCell>{student.titulo}</TableCell>
              <TableCell>{student.titulo}</TableCell>
              <TableCell>{student.postulacion}</TableCell>
              <TableCell>
</TableCell>
              <TableCell><NativeSelect defaultValue={"Student"} >    
            
                <option value={"Inglés"}>Inglés</option></NativeSelect></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
    )}