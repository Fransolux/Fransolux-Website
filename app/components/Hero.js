"use client";

import React from "react";
import { useState } from "react";
import styles from "@/styles/modules/hero.module.css";
import ContactPopUp from "@/utils/ContactPopUp/ContactPopUp";
import Link from "next/link";

import { scrollToSection } from "@/utils/Helpers";

function Hero() {
  const [popupOpen, setPopupOpen] = useState(false);

  const scrollFunction = (param) => {
    scrollToSection(param);
  };

  return (
    <>
      <section className={styles.container} id="inicio">
        <div className={styles.content}>
          <div className={styles.text}>
            <h1>DISEÑOS PARA TU NEGOCIO</h1>
            <p className={styles.mobileText}>
              Identidad visual, branding y piezas gráficas pensadas para
              comunicar lo que hace única a tu marca.
            </p>
            <p className={styles.desktopText}>
              Identidad visual, branding y piezas gráficas pensadas para
              comunicar lo que hace única a tu marca.
            </p>
          </div>
          <div className={styles.buttons}>
            <button
              rel="noopener noreferrer"
              className="primary-cta"
              onClick={() => scrollFunction("footer")}
            >
              Trabajemos juntos
            </button>
            <button
              className="primary-cta"
              type="button"
              onClick={() => setPopupOpen(true)}
            >
              Trabajemos juntos
            </button>
            <Link
              href="/proyectos"
              rel="noopener noreferrer"
              className="secondary-cta"
            >
              Explora mi trabajo
            </Link>
          </div>
        </div>
      </section>

      <ContactPopUp isOpen={popupOpen} onClose={() => setPopupOpen(false)} />
    </>
  );
}

export default Hero;
