"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/styles/modules/navbar.module.css";

import { scrollToSection } from "@/utils/Helpers";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const scrollFunction = (param) => {
    setMenuOpen(false);
    scrollToSection(param);
    return;
  };

  const isProjectsPage = pathname.startsWith("/proyectos");

  return (
    <header className={styles.header}>
      <nav className={styles.container}>
        <Link href="/">
          <Image
            className={styles.logo}
            src="/placeholder-logo.svg"
            alt="Fransolux logo"
            width={32}
            height={32}
          />
        </Link>

        <button
          className={styles.menuBtn}
          onClick={() => {
            setMenuOpen((prev) => !prev);
          }}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          type="button"
        >
          <Image
            src={menuOpen ? "/menu-cerrar.svg" : "/menu-hamburguesa.svg"}
            alt=""
            width={24}
            height={24}
          />
        </button>

        <ul className={styles.navList}>
          <li style={{ display: isProjectsPage ? "block" : "none" }}>
            <Link href="/">Inicio</Link>
          </li>
          <li style={{ display: isProjectsPage ? "none" : "block" }}>
            <a href="/proyectos">Trabajos</a>
          </li>

          <li style={{ display: isProjectsPage ? "none" : "block" }}>
            <button type="button" onClick={() => scrollFunction("servicios")}>
              Servicios
            </button>
          </li>

          <li style={{ display: isProjectsPage ? "none" : "block" }}>
            <button type="button" onClick={() => scrollFunction("sobre-mi")}>
              Sobre mi
            </button>
          </li>

          <li>
            <a
              href="https://shorturl.at/RaB2f"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-cta"
            >
              Contactame
            </a>
          </li>
        </ul>
      </nav>

      {menuOpen && (
        <ul className={styles.dropdown}>
          <li style={{ display: isProjectsPage ? "block" : "none" }}>
            <Link href="/">Inicio</Link>
          </li>

          <li style={{ display: isProjectsPage ? "none" : "block" }}>
            <a href="/proyectos">Trabajos</a>
          </li>

          <li style={{ display: isProjectsPage ? "none" : "block" }}>
            <button type="button" onClick={() => scrollFunction("servicios")}>
              Servicios
            </button>
          </li>

          <li style={{ display: isProjectsPage ? "none" : "block" }}>
            <button type="button" onClick={() => scrollFunction("sobre-mi")}>
              Sobre mi
            </button>
          </li>

          <li>
            <a
              href="https://shorturl.at/RaB2f"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-cta"
            >
              Contactame
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}

export default Navbar;
