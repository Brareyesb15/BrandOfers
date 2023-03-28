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
  NativeSelect
} from '@mui/material';
import { TableSortLabel } from '@mui/material';
import { use } from 'react';

const traer = async () => {
  const response =  await fetch(`http://localhost:5000/obtener`)
  return response.json()
}

const dataProm = traer()


export default function Fetching() {  // el async acá rompe toda la funcion. No puede ser una funcion con async en estos componentes, para eso usa el use. 
  const offers = use(dataProm)

    return ( 
        <>
        <div>holaaaa</div>
        <TableContainer component={Paper}>
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
                <TableSortLabel>
                 Descripción
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel>
                 Link
                </TableSortLabel>
              </TableCell>
              
              <TableCell>
                <TableSortLabel>
                  Fecha
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel >
                    Experiencia
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel >
                  Tipo de Postulación
                </TableSortLabel>
              </TableCell>
              <TableCell>
                País
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
          {offers.map((student,i) => (
            <TableRow key={i}>
              <TableCell>{i+1}</TableCell>
              <TableCell>{student.titulo}</TableCell>
              <TableCell>{student.empresa}</TableCell>
              <TableCell>{student.descripcion}</TableCell>
              <TableCell>{student.linkOferta}</TableCell>
              <TableCell>{student.fechaPresentacion}</TableCell>
              <TableCell>{student.experiencia}</TableCell>
              <TableCell>{student.postulacion}</TableCell>
              <TableCell>{student.pais}</TableCell>
              <TableCell>{student.stack}</TableCell>
              <TableCell>{student.tecnologias}</TableCell>
              <TableCell>{student.plataforma}</TableCell>
             
              <TableCell><NativeSelect defaultValue={"Student"} >    
            
                <option value={"Inglés"}>Inglés</option></NativeSelect></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
    )}