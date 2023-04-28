    "use client"
    import { useState } from "react";

    const send = async(type,data,id) => {
    try {
        const res = await fetch(`http://localhost:5000/avance?type=${type}&id=${id}`, {
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
      console.log(oferta)
    
      const setearEstado = () => {
        setMostrar(true);
      };
    
      const handleChange = (e) => {
        setTipoAvance(e.target.value);
        e.target.value === "Entrevista" ? send("entrevista",data,oferta.id) : 
        e.target.value === "Agregar postulación espontanea" ? send ("postulacion", data,oferta.id) : 
        send("otro", data,oferta.id)
      };
    
      return (
        <>
          <button onClick={setearEstado}>Agregar Avance</button>
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