    "use client"
    import { useState } from "react";

    const send = async (type, data, id) => {
      try {
        const res = await fetch(`http://localhost:5000/avances?type=${type}&id=${id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
    
      } catch (error) {
        console.error(error);
      }
    };
    
    export default function Avances({ oferta }) {
      const [mostrar, setMostrar] = useState(false);
      const [tipoAvance, setTipoAvance] = useState("");
      const [titulo, setTitulo] = useState("");
      const [detalles, setDetalles] = useState("");
    
      const setearEstado = () => {
        setMostrar(true);
      };
    
      const handleChange = (e) => {
        setTipoAvance(e.target.value);
      };
    
      const handleTituloChange = (e) => {
        setTitulo(e.target.value);
      };
    
      const handleDetallesChange = (e) => {
        setDetalles(e.target.value);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const data = { titulo, detalles };
        switch (tipoAvance) {
          case "Entrevista":
            send("entrevista", data, oferta.id);
            break;
          case "Agregar postulación espontanea":
            send("postulacion", data, oferta.id);
            break;
          default:
            send("otro", data, oferta.id);
            break;
        }
        setMostrar(false);
        setTipoAvance("");
        setTitulo("");
        setDetalles("");
      };
    
      return (
        <div>
          <button onClick={setearEstado}>Agregar Avance</button>
          {mostrar && (
            <div>
              <label htmlFor="tipoAvance">Tipo de avance:</label>
              <select id="tipoAvance" name="tipoAvance" onChange={handleChange}>
                <option value="">Seleccione una opción</option>
                <option value="Entrevista">Entrevista</option>
                {oferta.postulacion === "Regular" && (
                  <option value="Agregar postulación espontanea">
                    Agregada postulación espontanea
                  </option>
                )}
                <option value="Otro">Otro</option>
              </select>
    
              {tipoAvance && (
                <div>
                  <label htmlFor="titulo">Título:</label>
                  <input type="text" id="titulo" name="titulo" value={titulo} onChange={handleTituloChange} />
    
                  <label htmlFor="detalles">Detalles:</label>
                  <textarea id="detalles" name="detalles" value={detalles} onChange={handleDetallesChange} />
    
                  <button onClick={handleSubmit}>Guardar</button>
                </div>
              )}
            </div>
          )}
        </div>
      );
    }
    