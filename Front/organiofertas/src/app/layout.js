import './globals.css' // estilos que se van a aplicar a toda la página.  
import Navigation from "./components/nav bar"



  const links = [{
    label :  "Home",
    route: "/"            // trabajo de ruteo, las guardas en un link para trabajarlo.
  },
  {
    label: "About",
    route: "/about"
  }]

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <body>
        <Navigation />
        {children}
       </body>
    </html>
  )
}


// lo crea nextjs 13 para envolver nuestras rutas. te permite envolver cada ruta anidada. Body tiene todo lo que se renderiza hacia
// abajo en nuestras rutas. 

// Es importante para crear una ruta es necesario crear una carpeta. 
