"use client"
import { useState, useEffect} from 'react';
import tecs from "../../../../../Back/utils/tecs"
import {idiomas,nivel} from "../../../../../Back/utils/idiomas"

// OJO!!! PONELE UN SELECT AL STACK.

export default function FormOfertas() {
  const [tempTec, setTempTec] = useState([]);
  const [initial, setInitial] = useState({
    titulo: "",
    empresa: '',
    descripcion: '',
    tecnologias: [],
    linkOferta: '',
    stack: 'Fullstack',
    idioma: {idioma : "español", nivel : "Nativo"},
    experiencia: "",
    pais: "",
    postulacion: "Espontanea",
    experiencia: "Menos de 1 año",
    plataforma: ""


  });
  const [formData,setFormData] = useState(initial)
  const [searchQuery, setSearchQuery] = useState('')
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:5000/oferta`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      setFormData(initial);
    
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, checked, type} = e.target;
    
    if (name === "idioma" || name === "nivel") {
      setFormData({
        ...formData,
        idioma: {
          ...formData.idioma,
          [name]: value,
        },
      });
    } else if (type === "checkbox") {
      console.log("entrando al checkbox tec",value)
      setTempTec((prevTec) => 
        checked ? [...prevTec, value] : prevTec.filter((tec) => tec !== value)
      );
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      tecnologias: tempTec,
    }));
  }, [tempTec]);

  const filteredTecs = tecs.filter(tec =>
    tec.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = e => {
    setSearchQuery(e.target.value);
  };

    return (
        <>
        <h2>Ingresa la oferta</h2>
          <form onSubmit={handleSubmit}>
            <label>
             
                <div >
                Titulo de la Oferta:
                  <input
                    type="text"
                    name="titulo"
                    minLength="1"
                    maxLength="100"
                    placeholder="Insertar Título"
                    required
                    value={formData.titulo}
                    onChange={handleInputChange}
                  />
                  Empresa:
                  <input
                    type="text"
                    name="empresa"
                    minLength="1"
                    maxLength="100"
                    placeholder="Insertar Título"
                    required
                    value={formData.empresa}
                    onChange={handleInputChange}
                  />
                </div>
            </label>
            <br />
            <label>
              <div>
                <div>
                  Descripción:
                  <textarea
                    name="descripcion"
                    minLength="5"
                    maxLength="1500"
                    placeholder="Insertar Descripción"
                    value={formData.descripcion}
                    onChange={handleInputChange}
                    rows="10"
                    cols="65"
                    required></textarea>                  
                </div>              
              </div>
            </label>
            <label>
        Tecnologías:
        <input
          type="text"
          placeholder="Buscar tecnología"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        {filteredTecs.map((tec, id) => (
          <label key={id}>
            <input
              type="checkbox"
              name={tec}
              checked={tempTec.includes(tec)}
              value={tec}
              onChange={handleInputChange}
            />
            {tec}
          </label>
            ))}
                <ul>
                  {formData.tecnologias.map((tec, index) => (
                    <li key={index}>{tec}</li>
                  ))}
                </ul>
                <br />
              Link de la Oferta:
                  <input
                    type="text"
                    name="linkOferta"
                    minLength="1"
                    placeholder="Insertar Título"
                    required
                    value={formData.linkOferta}
                    onChange={handleInputChange}
                  />
                  <br />
              Plataforma:
                  <input
                    type="text"
                    name="plataforma"
                    minLength="1"
                    maxLength="100"
                    placeholder="Insertar Título"
                    required
                    value={formData.plataforma}
                    onChange={handleInputChange}
                  />
                  <br />
                  Stack:
                  <select name="stack" value={formData.stack} onChange={handleInputChange}>
    
                  </select>
                  <br />
                  Idioma:
  <select name="idioma" value={formData.idioma.idioma} onChange={handleInputChange}>
    {idiomas.map((idioma) => (
      <option key={idioma} value={idioma}>
        {idioma}
      </option>
    ))}
  </select>
</label>
<label>
  Nivel de idioma:
  <select name="nivel" value={formData.idioma.nivel} onChange={handleInputChange}>
    {nivel.map((niv) => (
      <option key={niv} value={niv}>
        {niv}
      </option>
    ))}
  </select>
          
                  <br />
                  País del aspirante:
                  <input
                    type="text"
                    name="pais"
                    minLength="1"
                    maxLength="100"
                    placeholder="Insertar Título"
                    required
                    value={formData.pais}
                    onChange={handleInputChange}
                  />
                  <br />  
                  <label>Tipo de postulación:</label>
                      <select name="postulacion" onChange={handleInputChange}>
                        <option value="Espontanea">Espontánea</option>
                        <option value="Regular">Regular</option>
                        <option value="Mixta">Mixta</option>
                      </select>
                      <br />
                      <label>Experiencia:</label>
                      <select name="experiencia" onChange={handleInputChange}>
                        <option value="Menos de 1 año">Menos de 1 año</option>
                        <option value="Entre 1 y 2 años">Entre 1 y 2 años</option>
                        <option value="Entre 2 y 5 años">Entre 2 y 5 años</option>
                        <option value="Más de 5 años">Más de 5 años</option>
                      </select>
                      <br />
            </label>
            <button type="submit" >guardar oferta</button>
        </form>
    </>
    )



} 