"use client"
import Fetching from "./components/tablas";
import dynamic from "next/dynamic";
import { Box } from '@mui/material';


function Home() {
  return (
    <Box border={1} p={2}>
      <Fetching></Fetching>
    </Box>
  );
}

export default dynamic (() => Promise.resolve(Home), {ssr: false})


// FUNDAMENTAL: Archivo Page.jsx, es una regla que tiene next para definir las rutas. 