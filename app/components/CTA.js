"use client";

import React from "react";
import { useState } from "react";
import styles from "@/styles/modules/cta.module.css";

import ContactPopUp from "@/utils/ContactPopUp/ContactPopUp";

function CTA() {
  const [popupOpen, setPopupOpen] = useState(false);

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
          <a
            href="https://shorturl.at/RaB2f"
            target="_blank"
            rel="noopener noreferrer"
          >
            PONTE EN CONTACTO
          </a>
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
