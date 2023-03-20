"use client"
import { useState } from 'react';


export default function FormOfertas() {
  const [tempTec, setTempTec] = useState('');
  const [initial, setInitial] = useState({
    titulo: "",
    empresa: '',
    descripcion: '',
    tecnologias: [],
    linkOferta: '',
    stack: '',
    ingles: {},
    experiencia: "",
    pais: "",
    postulacion: "",
    experiencia: ""


  });
  const [formData,setFormData] = useState(initial)

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

  const handleChangeTecs = (e) => {
    const { value } = e.target;
    setTempTec(value);
  };

  const handleAddTec = () => {
    if (tempTec.trim() !== '') {
      setFormData({
        ...formData,
        tecnologias: [...formData.tecnologias, tempTec.trim()]
      });
      setTempTec('');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

      setFormData({
        ...formData,
        [name]: value,
      });
    
  };

  console.log(formData);
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
                    maxLength="500"
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
                  name="tecnologias"
                  value={tempTec}
                  onChange={handleChangeTecs}
                />
                <button type="button" onClick={handleAddTec}>Agregar tecnología</button>
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
                    maxLength="100"
                    placeholder="Insertar Título"
                    required
                    value={formData.linkOferta}
                    onChange={handleInputChange}
                  />
                  <br />
                  Stack:
                  <input
                    type="text"
                    name="stack"
                    minLength="1"
                    maxLength="100"
                    placeholder="Insertar Título"
                    required
                    value={formData.stack}
                    onChange={handleInputChange}
                  />
                  <br />
                  Nivel de ingles:
                  <input
                    type="text"
                    name="ingles"
                    minLength="1"
                    maxLength="100"
                    placeholder="Insertar Título"
                    required
                    value={formData.ingles}
                    onChange={handleInputChange}
                  />
                  <br />
                  experiencia
                  <input
                    type="text"
                    name="experiencia"
                    minLength="1"
                    maxLength="100"
                    placeholder="Insertar Título"
                    required
                    value={formData.experiencia}
                    onChange={handleInputChange}
                  />
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