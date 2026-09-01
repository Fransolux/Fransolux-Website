"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/modules/navbar.module.css";

import { scrollToSection } from "@/utils/Helpers";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

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
          <li>
            <button type="button" onClick={() => scrollToSection("servicios")}>
              Trabajos
            </button>
          </li>

          <li>
            <button type="button" onClick={() => scrollToSection("nosotros")}>
              Servicios
            </button>
          </li>

          <li>
            <button type="button" onClick={() => scrollToSection("productos")}>
              Sobre mi
            </button>
          </li>

          <li>
            <a
              href=""
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
          <li>
            <button type="button" onClick={() => scrollToSection("servicios")}>
              Trabajos
            </button>
          </li>

          <li>
            <button type="button" onClick={() => scrollToSection("nosotros")}>
              Servicios
            </button>
          </li>

          <li>
            <button type="button" onClick={() => scrollToSection("productos")}>
              Sobre mi
            </button>
          </li>

          <li>
            <a
              href=""
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
