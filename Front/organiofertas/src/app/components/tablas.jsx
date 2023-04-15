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
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { use, useState } from 'react';

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

  const stack = ["Todos", 'Fullstack', 'Backend', 'Frontend'];
  const experiencia = ["Todos","-1 año","1 y 2 años","2 y 5 años","+5 años"];
  const postulacion = ["Todas","Espontanea", "Regular"]


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
      <TableCell>Empresa</TableCell>
      <TableCell>
        <TableSortLabel  active={orderBy === 'Fecha'} direction={orderBy === 'Fecha'? order : 'asc'} onClick={() => handleSort('Fecha')}>
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
      <TableCell>
        <FormControl style={{ minWidth: 100}}>
          <Select
          labelId="experiencia-label"
          id="experiencia-select"
          value={selectedOption}
          onChange={(event) => handleOptionSelect(event.target.value)} >
                    {experiencia.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
          </Select>
        </FormControl>
      </TableCell>
      <TableCell>
      <FormControl style={{ minWidth: 100}}>
          <Select
          labelId="postulacion-label"
          id="postulacion-select"
          value={selectedOption}
          onChange={(event) => handleOptionSelect(event.target.value)} >
                    {postulacion.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
          </Select>
        </FormControl>
      </TableCell>
      <TableCell>
      <FormControl style={{ minWidth: 100}}>
          <Select
          labelId="pais-label"
          id="pais-select"
          value={selectedOption}
          onChange={(event) => handleOptionSelect(event.target.value)} >
                    {/* AQUI VIENE UNA LLAMADA PARA LA BUSQUEDA DE PAISES.*/ postulacion.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
          </Select>
        </FormControl>
        </TableCell>
      <TableCell>
      <FormControl style={{ minWidth: 100}}>
                  <Select
                    labelId="stack-label"
                    id="stack-select"
                    value={selectedOption}
                    onChange={(event) => handleOptionSelect(event.target.value)}
                  >
                    {stack.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
      </TableCell>
      <TableCell>
      <FormControl style={{ minWidth: 100}}>
                  <Select
                    labelId="tecs-label"
                    id="tecs-select"
                    value={selectedOption}
                    onChange={(event) => handleOptionSelect(event.target.value)}
                  >
                    {/* AQUI VIENE UNA LLAMADA PARA LA BUSQUEDA DE LAS TECS EXISTENTES.*/stack.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
      </TableCell>
      <TableCell>
      <FormControl style={{ minWidth: 100}}>
                  <Select
                    labelId="platform-label"
                    id="platform-select"
                    value={selectedOption}
                    onChange={(event) => handleOptionSelect(event.target.value)}
                  >
                    {/* AQUI VIENE UNA LLAMADA PARA LA BUSQUEDA DE LAS plataformas EXISTENTES.*/stack.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
      </TableCell>
    </TableRow>
  </TableHead>
          <TableBody>
          {sortData(roffers).map((student,i) => (
            <TableRow key={i}>
              <TableCell>{i+1}</TableCell>
              <TableCell>{student.titulo}</TableCell>
              <TableCell>{student.empresa}</TableCell>
              <TableCell style={{ minWidth: "100px", maxWidth: "150px" }}>{student.fechaPresentacion}</TableCell>
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