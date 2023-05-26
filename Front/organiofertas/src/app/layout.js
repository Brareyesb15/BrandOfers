import './globals.css' // estilos que se van a aplicar a toda la página.  
import Navigation from "./components/nav bar"




export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className="body">
      <div className="container">
        <Navigation />
      <div className="divtabla">{children}</div>
      </div>
    </body>
  </html>
);
  
}


// lo crea nextjs 13 para envolver nuestras rutas. te permite envolver cada ruta anidada. Body tiene todo lo que se renderiza hacia
// abajo en nuestras rutas. 

// Es importante para crear una ruta es necesario crear una carpeta. 
