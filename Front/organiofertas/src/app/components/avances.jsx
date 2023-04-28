    "use client"
    import { useState } from "react";
    
    export default function Avances({ oferta }) {
      const [mostrar, setMostrar] = useState(false);
      const [tipoAvance, setTipoAvance] = useState("");
      console.log(oferta)
    
      const setearEstado = () => {
        setMostrar(true);
      };
    
      const handleChange = (e) => {
        setTipoAvance(e.target.value);
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
                  <option value="Agregada postulación espontanea">
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