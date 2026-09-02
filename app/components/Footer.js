"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/modules/footer.module.css";
import { scrollToSection } from "@/utils/Helpers";

function Footer() {
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
          <li>
            <a href="/proyectos">Trabajos</a>
          </li>

          <li>
            <button type="button" onClick={() => scrollToSection("servicios")}>
              Servicios
            </button>
          </li>

          <li>
            <button type="button" onClick={() => scrollToSection("sobre-mi")}>
              Sobre mi
            </button>
          </li>

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
