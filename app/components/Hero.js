import React from "react";
import styles from "@/styles/modules/hero.module.css";

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
          <button className="primary-cta">Trabajemos juntos</button>
          <button className="secondary-cta">Explora mi trabajo</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
