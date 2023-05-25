import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSave, faChartBar } from "@fortawesome/free-solid-svg-icons";
import "./nav bar.css";

const links = [
  {
    label: "Home",
    route: "/",
    icon: faHome,
  },
  {
    label: "Guardar Oferta",
    route: "/Guardar",
    icon: faSave,
  },
  {
    label: "Estadisticas",
    route: "/Estadisticas",
    icon: faChartBar,
  },
];

export default function Navigation() {
  return (
    <header className="header">
      <nav>
        <ul className="navbar-items">
          {links.map(({ label, route, icon }) => (
            <li key={route}>
              <Link href={route}>
                <div className="navbar-item">
                  <FontAwesomeIcon icon={icon} />
                  {label}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
} 