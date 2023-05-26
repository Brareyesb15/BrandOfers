"use client"
import Link from "next/link";
import { useState } from "react";
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
  const [activeLink, setActiveLink] = useState(""); // Estado para el enlace activo

  const handleClick = (route) => {
    setActiveLink(route); // Actualizar el enlace activo al hacer clic en un enlace
  };

  return (
    <header className="header">
      <nav>
        <div className="navbar-items">
          <div className="navbar-item"></div> {/* Primer división vacía */}
          <div className="navbar-item">
            {links.map(({ label, route, icon: Icon }) => (
              <div key={route}>
                <Link className="perso" href={route}>
                  <div
                    className={`navbar-item-inner ${activeLink === route ? "active" : ""}`}
                    onClick={() => handleClick(route)}
                  >
                    <Icon className="navbar-icon" />
                    <span>{label}</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          
          <div className="navbar-item"></div> {/* Tercera división vacía */}
        </div>
      </nav>
    </header>
  );
}
