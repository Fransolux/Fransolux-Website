import React from "react";
import styles from "@/styles/modules/featuredwork.module.css";
import { WorkList } from "@/utils/Projects";
import ImageWithLoader from "@/utils/CustomImage/CustomImage";

const featuredProjects = WorkList.filter((project) => project.featured);

function FeaturedWork() {
  return (
    <section className={styles.container} id="trabajo-destacado">
      <h2>Trabajo destacado</h2>
      <div className={styles.cards}>
        {featuredProjects.map((item, index) => {
          return (
            <a key={index} href={`/proyectos/${item.slug}`}>
              <ImageWithLoader
                src={item.cover}
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
