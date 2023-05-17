import Link from "next/link"
import "./nav bar.css"

const links = [{
    label :  "Home",
    route: "/"            // trabajo de ruteo, las guardas en un link para trabajarlo.
  },
  {
    label: "Guardar Oferta",
    route: "/Guardar"
  },
  {
    label : "Estadisticas",
    route: "/Estadisticas"
  }
]
  export default function Navigation() {
    return (
      <header>
      <nav>
        <ul class="navbar-items">
          {links.map(({ label, route }) => (
            <li key={route}>
              <Link href={route}>
                <div class="navbar-item">{label}</div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
    
    )
  }
 