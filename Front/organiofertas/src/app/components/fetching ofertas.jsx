"use client"
import React, { useState, useEffect } from 'react';
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

export default function Fetching() {
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