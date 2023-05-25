import Link from "next/link";
import { MdHome, MdSave, MdInsertChart } from "react-icons/md";
import "./nav bar.css";

const links = [
  {
    label: "Home",
    route: "/",
    icon: MdHome,
  },
  {
    label: "Guardar Oferta",
    route: "/Guardar",
    icon: MdSave,
  },
  {
    label: "Estadisticas",
    route: "/Estadisticas",
    icon: MdInsertChart,
  },
];

export default function Navigation() {
  return (
    <header className="header">
      <nav>
        <ul className="navbar-items">
          {links.map(({ label, route, icon: Icon }) => (
            <li key={route}>
              <Link href={route}>
                <div className="navbar-item">
                  <Icon className="navbar-icon" />
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
