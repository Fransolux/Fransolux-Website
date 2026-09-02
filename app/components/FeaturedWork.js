import React from "react";
import styles from "@/styles/modules/featuredwork.module.css";
import { FeaturedWorkList } from "@/utils/Projects";
import ImageWithLoader from "@/utils/CustomImage/CustomImage";

function FeaturedWork() {
  return (
    <section className={styles.container} id="trabajo-destacado">
      <h2>Trabajo destacado</h2>
      <div className={styles.cards}>
        {FeaturedWorkList.map((item, index) => {
          return (
            <a key={index} href={`/proyectos/${item.slug}`}>
              <ImageWithLoader
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 767px) 100vw, 33vw"
                priority={index === 0}
              />
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default FeaturedWork;
