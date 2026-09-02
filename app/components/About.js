import React from "react";
import styles from "@/styles/modules/about.module.css";
import Image from "next/image";

function About() {
  return (
    <section className={styles.container} id="sobre-mi">
      <div className={styles.content}>
        <h4>Sobre mi</h4>
        <div>
          <p>
            Soy Franco Espinosa y, bajo el nombre de Fransolux, llevo más de dos
            años trabajando en proyectos de diseño y desarrollo para clientes de
            distintos rubros.
          </p>
          <p>
            Mi formación comenzó de manera autodidacta en programación y
            actualmente continúo mi formación académica como Técnico en Diseño
            Gráfico. Este recorrido me permitió desarrollar una mirada que
            combina el pensamiento técnico con el diseño y la comunicación
            visual.
          </p>
          <p>
            A lo largo de estos años he trabajado en el diseño y desarrollo de
            sitios web, identidades visuales, logotipos, papelería corporativa y
            distintas piezas de comunicación, adaptando cada proyecto a las
            necesidades y objetivos de quienes confían en mi trabajo.
          </p>
        </div>
      </div>
      <Image
        src="/comilla-icono.svg"
        alt="Icono decorativo"
        width={124}
        height={124}
      />
    </section>
  );
}

export default About;
