import Exp from "../components/estadisticas/experiencia/experiencia"
import Paises from "../components/estadisticas/paises/paises"
import Post from "../components/estadisticas/postulacion/postulacion"
import Stack from "../components/estadisticas/stack/stack"
import Tecs from "../components/estadisticas/tecnologias/tecs"



export default function Estadisticas() {
  return (
    <>
    <div>Estamos en estadisticas</div>
    <Tecs>Estadisticas sobre Tecnologías</Tecs>
    <Paises>Estadisticas sobre Países</Paises>
    <Exp></Exp>
    <Post></Post>
    <Stack></Stack>
    </>
  )
}

