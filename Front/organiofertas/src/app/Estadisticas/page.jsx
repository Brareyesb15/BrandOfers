import Estado from "../components/estadisticas/estado/estado"
import Exp from "../components/estadisticas/experiencia/experiencia"
import Idioma from "../components/estadisticas/idiomas/idiomas"
import Paises from "../components/estadisticas/paises/paises"
import Plats from "../components/estadisticas/plataformas/plats"
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
    <Estado></Estado>
    <Idioma></Idioma>
    <Plats></Plats>
    </>
  )
}

