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

const traer = async() => {
   return await fetch(`http://localhost:5000/obtener`).data
}

export default function Fetching() {
const offers = use(traer()) 

console.log("oferta",   offers)
    return ( 
        <>
        <div>holaaaa</div>
        <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel>
                  Name
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel>
                  Email
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel >
                  Register Date
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel >
                  Active
                </TableSortLabel>
              </TableCell>
              <TableCell>
                Edit
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {tecs.map((student) => (
            <TableRow key={student}>
              <TableCell>{student}</TableCell>
              <TableCell>{student}</TableCell>
              <TableCell>{student}</TableCell>
              <TableCell>
  <Switch defaultChecked={student} onChange={(e) => handleToggle(e, student)} />
</TableCell>
              <TableCell><NativeSelect defaultValue={"Student"} onChange={(e) => handleUserType(e, student)}>    
                <option value={"Student"}>Student</option>
                <option value={"Instructor"}>Instructor</option>
                <option value={"AdvUser"}>AdvUser</option></NativeSelect></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
    )}