import Link from "next/link"

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
          <ul>
            {links.map(({label,route}) => (
              <li key={route}>
                <Link href={route}>
                  {label}
                </Link> 
              </li>
            ))}
          </ul>
        </nav>
      </header>
    )
  }
 