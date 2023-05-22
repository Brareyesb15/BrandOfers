  "use client"
import Fetching from "./components/tablas";
import dynamic from "next/dynamic";
import { Box } from '@mui/material';
import "./page.module.css"
import Welcome from "./components/welcome";


  function Home() {
    return (
      <div>
      <Welcome></Welcome>
      <Box border={1} p={2}>
        <Fetching></Fetching>
      </Box>
      </div>
    );
  }

  export default dynamic (() => Promise.resolve(Home), {ssr: false})


  // FUNDAMENTAL: Archivo Page.jsx, es una regla que tiene next para definir las rutas. 