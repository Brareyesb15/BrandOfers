import Fetching from "./components/fetching ofertas"
import RealFetching from "./components/realfetching"


export default function Home() {
  return (
    <>
    <div>Estamos en home</div>
     <Fetching />
     <RealFetching />
    </>
  )
}


// FUNDAMENTAL: Archivo Page.jsx, es una regla que tiene next para definir las rutas. 