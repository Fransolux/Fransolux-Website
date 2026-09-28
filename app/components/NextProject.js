import React from "react";
import Link from "next/link";

import ImageWithLoader from "@/utils/CustomImage/CustomImage";

import { WorkList } from "@/utils/Projects";

import styles from "@/styles/modules/nextProjects.module.css";

export default function NextProjects({ currentSlug }) {
  const currentIndex = WorkList.findIndex(
    (project) => project.slug === currentSlug,
  );

  if (currentIndex === -1) return null;

  const previousProject =
    WorkList[(currentIndex - 1 + WorkList.length) % WorkList.length];

  const nextProject = WorkList[(currentIndex + 1) % WorkList.length];

  return (
    <div className={styles.wrapper}>
      <section className={styles.container}>
        <p className={styles.label}>También podés ver</p>

        <div className={styles.projects}>
          <Link
            href={`/proyectos/${previousProject.slug}`}
            className={styles.project}
          >
            <ImageWithLoader
              src={previousProject.thumbnail}
              alt={previousProject.alt}
              width={950}
              height={712}
            />

            <div className={styles.info}>
              <span className={styles.direction}>Proyecto anterior</span>

              <h3>{previousProject.header.content.title}</h3>
            </div>
          </Link>

          <Link
            href={`/proyectos/${nextProject.slug}`}
            className={styles.project}
          >
            <ImageWithLoader
              src={nextProject.thumbnail}
              alt={nextProject.alt}
              width={950}
              height={712}
            />

            <div className={styles.info}>
              <span className={styles.direction}>Proyecto siguiente</span>

              <h3>{nextProject.header.content.title}</h3>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
