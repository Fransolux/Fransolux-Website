"use client";

import React from "react";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import styles from "@/styles/modules/footer.module.css";

import { scrollToSection } from "@/utils/Helpers";

function Footer() {
  const pathname = usePathname();

  const isProjectsIndex = pathname === "/proyectos";
  const isProjectDetail = pathname.startsWith("/proyectos/");

  const scrollFunction = (param) => {
    scrollToSection(param);
  };

  return (
    <footer className={styles.container}>
      <div className={styles.top}>
        <Link href="/">
          <Image
            className={styles.logo}
            src="/placeholder-logo.svg"
            alt="Fransolux logo"
            width={32}
            height={32}
          />
        </Link>

        <ul className={styles.links}>
          {(isProjectsIndex || isProjectDetail) && (
            <li>
              <Link href="/">Inicio</Link>
            </li>
          )}

          {!isProjectsIndex && (
            <li>
              <Link href="/proyectos">Trabajos</Link>
            </li>
          )}

          {!isProjectsIndex && !isProjectDetail && (
            <>
              <li>
                <button
                  type="button"
                  onClick={() => scrollFunction("servicios")}
                >
                  Servicios
                </button>
              </li>

              <li>
                <button
                  type="button"
                  onClick={() => scrollFunction("sobre-mi")}
                >
                  Sobre mi
                </button>
              </li>
            </>
          )}

          <li>
            <a
              href="https://shorturl.at/RaB2f"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contactame
            </a>
          </li>
        </ul>
      </div>

      <div className={styles.bottom}>
        <div className={styles.contact}>
          <p>+54 223 522 8237</p>
          <p>fransolux@gmail.com</p>
        </div>

        <span>© 2026 Fransolux</span>
      </div>
    </footer>
  );
}

export default Footer;
