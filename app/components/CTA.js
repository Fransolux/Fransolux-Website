import React from "react";
import styles from "@/styles/modules/cta.module.css";

function CTA() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.contentText}>
          <h6>¿Listo para dar el siguiente paso?</h6>
          <p>
            Contame sobre tu proyecto y trabajemos juntos en una solución que
            represente lo que querés construir, comunicar y alcanzar.
          </p>
        </div>
        <a href="">PONTE EN CONTACTO</a>
      </div>
    </section>
  );
}

export default CTA;
