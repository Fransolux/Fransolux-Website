"use client";

import { useEffect } from "react";
import Image from "next/image";
import styles from "./contactpopup.module.css";

function ContactPopUp({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.popup} role="dialog" aria-modal="true">
        <button
          type="button"
          className={styles.close}
          onClick={onClose}
          aria-label="Cerrar"
        >
          <Image
            src="/menu-cerrar.svg"
            alt="Icono para cerrar menu"
            width={24}
            height={24}
          />
        </button>

        <div
          className={styles.content}
          onClick={(event) => event.stopPropagation()}
        >
          <span>¡Ponte en contacto!</span>
          <ul className={styles.contact}>
            <li>
              <span>Teléfono: </span>+54 9 223 522 8237
            </li>
            <li>
              <span>Email: </span>fransolux@gmail.com
            </li>
          </ul>
          <div className={styles.buttons}>
            <a
              href="https://shorturl.at/RaB2f"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            <a
              href="https://www.linkedin.com/in/espinosa-franco/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPopUp;
