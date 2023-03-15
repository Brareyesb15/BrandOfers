"use client"
import { useState } from 'react';


export default function FormOfertas() {
  const [tempTec, setTempTec] = useState('');
  const [initial, setInitial] = useState({
    empresa: '',
    descripcion: '',
    tecnologias: [],
    linkOferta: '',
    stack: ''
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
                    placeholder="Ins  ertar Título"
                    required
                    value={formData.stack}
                    onChange={handleInputChange}
                  />
            </label>
            <button type="submit" >guardar oferta</button>
        </form>
    </>
    )



} 