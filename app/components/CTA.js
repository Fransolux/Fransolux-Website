"use client";

import React from "react";
import { useState } from "react";
import styles from "@/styles/modules/cta.module.css";
import { scrollToSection } from "@/utils/Helpers";
import ContactPopUp from "@/utils/ContactPopUp/ContactPopUp";

function CTA() {
  const [popupOpen, setPopupOpen] = useState(false);

  const scrollFunction = (param) => {
    scrollToSection(param);
    return;
  };

  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.contentText}>
            <h6>Contame tu proyecto</h6>
            <p>
              Hablemos sobre tu idea y trabajemos juntos en una solución que
              represente lo que querés construir, comunicar y alcanzar.
            </p>
          </div>
          <button
            onClick={() => {
              scrollFunction("footer");
            }}
          >
            PONTE EN CONTACTO
          </button>
          <button type="button" onClick={() => setPopupOpen(true)}>
            PONTE EN CONTACTO
          </button>
        </div>
      </section>

      <ContactPopUp isOpen={popupOpen} onClose={() => setPopupOpen(false)} />
    </>
  );
}

export default CTA;
