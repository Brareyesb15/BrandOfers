"use client"
import React, { useState } from 'react';
import Estado from "../components/estadisticas/estado/estado";
import Exp from "../components/estadisticas/experiencia/experiencia";
import Fecha from "../components/estadisticas/fechas/Fechas";
import Idioma from "../components/estadisticas/idiomas/idiomas";
import Paises from "../components/estadisticas/paises/paises";
import Plats from "../components/estadisticas/plataformas/plats";
import Post from "../components/estadisticas/postulacion/postulacion";
import Stack from "../components/estadisticas/stack/stack";
import Tecs from "../components/estadisticas/tecnologias/tecs";

export default function Estadisticas() {
  const [selectedOption, setSelectedOption] = useState(1);

  const handleOptionChange = (id) => {
    setSelectedOption(id);
  };

  return (
    <>
      <div>Estamos en estadisticas</div>
      <select value={selectedOption} onChange={(e) => handleOptionChange(parseInt(e.target.value))}>
        <option value={1}>Todos</option>
        <option value={2}>Con avances</option>
        <option value={3}>Sin avances</option>
      </select>
          <Tecs id={selectedOption}>Estadisticas sobre Tecnologías</Tecs>
          <Paises id={selectedOption}>Estadisticas sobre Países</Paises>
          <Exp id={selectedOption}></Exp>
          <Post id={selectedOption}></Post>
          {/* <Stack id={selectedOption}></Stack>
          <Estado id={selectedOption}></Estado>
          <Idioma id={selectedOption}></Idioma>
          <Plats id={selectedOption}></Plats>
          <Fecha id={selectedOption}></Fecha> */}
    </>
  );
}