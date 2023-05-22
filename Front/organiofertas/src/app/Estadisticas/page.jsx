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
import Idioma2 from '../components/estadisticas/idiomas/idiomas2';
import { textEsta } from '../../../utils/textos';
import Welcome from '../components/welcome';
import "./page.css";

export default function Estadisticas() {
  const [selectedOption, setSelectedOption] = useState(1);

  const handleOptionChange = (id) => {
    setSelectedOption(id);
  };
  
  const selector = (
    <select value={selectedOption} onChange={(e) => handleOptionChange(parseInt(e.target.value))}>
      <option value={1}>Todos</option>
      <option value={2}>Con avances</option>
      <option value={3}>Sin avances</option>
    </select>
  );

  return (
    <>
      <Welcome text={textEsta}></Welcome>
      {selector}
      <div className="gridContainer">
        <div className="componentBox">
          <Tecs id={selectedOption}>Estadisticas sobre Tecnologías</Tecs>
        </div>
        <div className="componentBox">
          <Paises id={selectedOption}>Estadisticas sobre Países</Paises>
        </div>
        <div className="componentBox">
          <Exp id={selectedOption}></Exp>
        </div>
        <div className="componentBox">
          <Post id={selectedOption}></Post>
        </div>
        <div className="componentBox">
          <Stack id={selectedOption}></Stack>
        </div>
        <div className="componentBox">
          <Estado id={selectedOption}></Estado>
        </div>
        <div className="componentBox">
          <Idioma id={selectedOption}></Idioma>
        </div>
        <div className="componentBox">
          <Plats id={selectedOption}></Plats>
        </div>
        <div className="componentBox">
          <Fecha id={selectedOption}></Fecha>
        </div>
        <div className="componentBox">
          <Idioma2 id={selectedOption}></Idioma2>
        </div>
      </div>
    </>
  );
}
