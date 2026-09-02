import React from "react";
import styles from "@/styles/modules/services.module.css";
import Image from "next/image";

const ServicesList = [
  {
    icon: "/sitiosweb-icono.svg",
    alt: "Icono sitio web",
    title: "Sitios web",
    text: "Diseño y desarrollo de sitios web para para marcas, empresas y particulares.",
    tags: [
      { tag: "Diseño" },
      { tag: "UX/UI" },
      { tag: "Desarrollo" },
      { tag: "Responsive" },
    ],
  },
  {
    icon: "/identidadvisual-icono.svg",
    alt: "Icono identidad visual",
    title: "Identidad visual",
    text: "Sistemas visuales para proyectos que necesitan construir o reforzar su identidad.",
    tags: [
      { tag: "Identidad" },
      { tag: "Dirección visual" },
      { tag: "Logotipos" },
    ],
  },
  {
    icon: "/diseñografico-icono.svg",
    alt: "Icono diseño gráfico",
    title: "Diseño gráfico",
    text: "Piezas gráficas para comunicar una marca de manera consistente.",
    tags: [
      { tag: "Papelería" },
      { tag: "Redes sociales" },
      { tag: "Material impreso" },
    ],
  },
];

function Services() {
  return (
    <section className={styles.container} id="servicios">
      <h3>Mis servicios</h3>
      <div className={styles.cards}>
        {ServicesList.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardIcon}>
              <Image src={item.icon} alt={item.alt} width={48} height={48} />
            </div>
            <div className={styles.cardContent}>
              <div className={styles.cardText}>
                <span>{item.title}</span>
                <p>{item.text}</p>
              </div>
              <div className={styles.cardTags}>
                {item.tags.map((obj, i) => (
                  <span key={i}>{obj.tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
