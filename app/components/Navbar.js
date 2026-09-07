"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/styles/modules/navbar.module.css";
import ContactPopUp from "@/utils/ContactPopUp/ContactPopUp";

import { scrollToSection } from "@/utils/Helpers";
import Logo from "@/utils/Logo/Logo";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const pathname = usePathname();

  const scrollFunction = (param) => {
    setMenuOpen(false);
    scrollToSection(param);
    return;
  };

  const isProjectsIndex = pathname === "/proyectos";
  const isProjectDetail = pathname.startsWith("/proyectos/");

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.container}>
          <Logo accent={"var(--primary)"} primary={"var(--black)"} />

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
            <li
              style={{
                display: isProjectsIndex || isProjectDetail ? "block" : "none",
              }}
            >
              <Link href="/">Inicio</Link>
            </li>

            <li
              style={{
                display: !isProjectsIndex ? "block" : "none",
              }}
            >
              <Link href="/proyectos">Trabajos</Link>
            </li>

            <li
              style={{
                display:
                  !isProjectsIndex && !isProjectDetail ? "block" : "none",
              }}
            >
              <button type="button" onClick={() => scrollFunction("servicios")}>
                Servicios
              </button>
            </li>

            <li
              style={{
                display:
                  !isProjectsIndex && !isProjectDetail ? "block" : "none",
              }}
            >
              <button type="button" onClick={() => scrollFunction("sobre-mi")}>
                Sobre mi
              </button>
            </li>

            <li>
              <span
                className="primary-cta"
                type="button"
                onClick={() => setPopupOpen(true)}
              >
                CONTACTAME
              </span>
            </li>
          </ul>
        </nav>

        {menuOpen && (
          <ul className={styles.dropdown}>
            <li
              style={{
                display: isProjectsIndex || isProjectDetail ? "block" : "none",
              }}
            >
              <Link href="/" onClick={() => setMenuOpen(false)}>
                Inicio
              </Link>
            </li>

            <li
              style={{
                display: !isProjectsIndex ? "block" : "none",
              }}
            >
              <Link href="/proyectos" onClick={() => setMenuOpen(false)}>
                Trabajos
              </Link>
            </li>

            <li
              style={{
                display:
                  !isProjectsIndex && !isProjectDetail ? "block" : "none",
              }}
            >
              <button type="button" onClick={() => scrollFunction("servicios")}>
                Servicios
              </button>
            </li>

            <li
              style={{
                display:
                  !isProjectsIndex && !isProjectDetail ? "block" : "none",
              }}
            >
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
      <ContactPopUp isOpen={popupOpen} onClose={() => setPopupOpen(false)} />
    </>
  );
}

export default Navbar;
