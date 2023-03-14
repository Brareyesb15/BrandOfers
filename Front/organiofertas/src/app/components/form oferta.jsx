"use client"
import { useState } from 'react';

export default function FormOfertas() {
  const [formData, setFormData] = useState({
    empresa: '',
    descripcion: '',
    tecnologias: "",
    linkOferta: "",
    stack: []
  });
const handleSubmit = () => {}
    return (
        <>
        <h2>Ingresa la oferta</h2>
          <form onSubmit={handleSubmit}>
            <label>
             
                <div >
                  Empresa:
                  <input
                    type="text"
                    name="Title"
                    minLength="1"
                    maxLength="100"
                    placeholder="Insertar Título"
                    required
                    // value={formData.Title}
                    // onChange={handleInputChange}
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
                    maxLength="500"
                    placeholder="Insertar Descripción"
                    // value={formData.Description}
                    // onChange={handleInputChange}
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
                name="Duration"
                // value={formData.Duration}
                // onChange={handleInputChange}
                min={1}
                max={50}
                required
              />
              <br></br>
              Link de la Oferta:
                  <input
                    type="text"
                    name="Title"
                    minLength="1"
                    maxLength="100"
                    placeholder="Insertar Título"
                    required
                    // value={formData.Title}
                    // onChange={handleInputChange}
                  />
                  <br />
                  Stack:
                  <input
                    type="text"
                    name="Title"
                    minLength="1"
                    maxLength="100"
                    placeholder="Ins  ertar Título"
                    required
                    // value={formData.Title}
                    // onChange={handleInputChange}
                  />
            </label>
        </form>
    </>
    )



}