    "use client"
    import { useState } from "react";

    const send = async(info) => {
    try {
        const res = await fetch(`http://localhost:5000/oferta`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
      
      } catch (error) {
        console.error(error);
      }
    };

    
    export default function Avances({ oferta }) {
      const [mostrar, setMostrar] = useState(false);
      const [tipoAvance, setTipoAvance] = useState("");
      console.log(oferta)
    
      const setearEstado = () => {
        setMostrar(true);
      };
    
      const handleChange = (e) => {
        setTipoAvance(e.target.value);
        e.target.value === "Entrevista" ? console.log("entrevista") : console.log("NoEntrevista")
      };
    
      return (
        <>
          <button onClick={setearEstado}>Agregar detalles</button>
          {mostrar && (
            <>
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
            </>
          )}
        </>
      );
    }