import Exp from "../components/estadisticas/experiencia/experiencia"
import Paises from "../components/estadisticas/paises/paises"
import Tecs from "../components/estadisticas/tecnologias/tecs"




export default function Estadisticas() {
  return (
    <>
    <div>Estamos en estadisticas</div>
    <Tecs>Estadisticas sobre Tecnologías</Tecs>
    <Paises>Estadisticas sobre Países</Paises>
    <Exp></Exp>
    </>
  )
}

