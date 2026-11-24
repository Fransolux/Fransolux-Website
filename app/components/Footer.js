"use client";

import React from "react";

import Link from "next/link";
import Logo from "@/utils/Logo/Logo";
import { useState } from "react";
import { usePathname } from "next/navigation";

import styles from "@/styles/modules/footer.module.css";
import ContactPopUp from "@/utils/ContactPopUp/ContactPopUp";
import { scrollToSection } from "@/utils/Helpers";

function Footer() {
  const pathname = usePathname();
  const [popupOpen, setPopupOpen] = useState(false);

  const isProjectsIndex = pathname === "/proyectos";
  const isProjectDetail = pathname.startsWith("/proyectos/");

  const scrollFunction = (param) => {
    scrollToSection(param);
  };

  return (
    <>
      <footer className={styles.container}>
        <div className={styles.top}>
          <Logo accent={"var(--white)"} primary={"var(--white)"} />

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

            <li className={styles.contactLink}>
              <span
                className="secondary-cta"
                type="button"
                onClick={() => setPopupOpen(true)}
              >
                Contactame
              </span>
            </li>
          </ul>
        </div>

        <div className={styles.bottom}>
          <div className={styles.contact}>
            <a href="https://www.tiktok.com/@fransolux" target="_blank">
              TikTok
            </a>
            <a href="https://www.instagram.com/fransolux/" target="_blank">
              Instagram
            </a>
            <p>fransolux@gmail.com</p>
          </div>

          <span>© 2026 Fransolux</span>
        </div>
      </footer>
      <ContactPopUp isOpen={popupOpen} onClose={() => setPopupOpen(false)} />
    </>
  );
}

export default Footer;
