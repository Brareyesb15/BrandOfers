import Fetching from "./components/tablas";
import dynamic from "next/dynamic";


function Home() {
  return (
    <>
    <div>Estamos en home</div>
     <Fetching />
    </>
  )
}

export default dynamic (() => Promise.resolve(Home), {ssr: false})


// FUNDAMENTAL: Archivo Page.jsx, es una regla que tiene next para definir las rutas. 