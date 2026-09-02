"use client";

import React from "react";
import styles from "@/styles/modules/hero.module.css";
import { scrollToSection } from "@/utils/Helpers";

function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h1>
            EL <span>SIGUIENTE PASO</span> DE TU NEGOCIO
          </h1>
          <p className={styles.mobileText}>
            Diseño y desarrollo de soluciones visuales que conectan marcas con
            personas
          </p>
          <p className={styles.desktopText}>
            Diseño y desarrollo de soluciones visuales que conectan marcas con
            las personas a través de la estrategia y la estética, ayudando a los
            negocios a comunicar mejor y construir una presencia sólida.
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
            className="secondary-cta"
            onClick={() => scrollToSection("trabajo-destacado")}
          >
            Explora mi trabajo
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
