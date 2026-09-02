import React from "react";
import styles from "@/styles/modules/workprocess.module.css";

const ProcessList = [
  {
    number: "01",
    title: "Entender",
    text: "Antes de diseñar, entiendo el proyecto. Analizo qué necesitás, por qué lo necesitás y qué objetivo debe cumplir la solución para encontrar el punto de partida adecuado.",
  },
  {
    number: "02",
    title: "Explorar",
    text: "A partir de lo definido, desarrollo distintas propuestas y caminos visuales. Esta etapa permite contrastar ideas, descubrir posibilidades y establecer una dirección clara para el proyecto.",
  },
  {
    number: "03",
    title: "Desarrollar",
    text: "Con una dirección definida, desarrollo la propuesta seleccionada y la llevo hasta una versión prácticamente terminada. A partir de ella, revisamos los detalles y ajustes necesarios.",
  },
  {
    number: "04",
    title: "Entregar",
    text: "Con el proyecto finalizado, entrego todas las piezas y archivos necesarios para que la solución pueda implementarse. Dejando el proyecto listo para pasar a la etapa de aplicación.",
  },
];

function WorkProcess() {
  return (
    <section className={styles.container}>
      <h5>Proceso de trabajo</h5>
      <div className={styles.list}>
        {ProcessList.map((item, index) => (
          <div key={index} className={styles.item}>
            <span className={styles.itemIcon}>{item.number}</span>
            <div className={styles.itemContent}>
              <span>{item.title}</span>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WorkProcess;
