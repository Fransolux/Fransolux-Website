"use client";

import React from "react";
import { useState } from "react";
import styles from "@/styles/modules/hero.module.css";
import ContactPopUp from "@/utils/ContactPopUp/ContactPopUp";
import Link from "next/link";

function Hero() {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <>
      <section className={styles.container}>
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
            <a
              href="https://shorturl.at/RaB2f"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-cta"
            >
              Trabajemos juntos
            </a>
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
