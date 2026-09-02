import React from "react";
import Navbar from "../components/Navbar";
import styles from "@/app/proyectos/projectsPage.module.css";
import ImageWithLoader from "@/utils/CustomImage/CustomImage";
import { FeaturedWorkList } from "@/utils/Projects";
import Footer from "../components/Footer";
import CTA from "../components/CTA";

function Page() {
  return (
    <main>
      <Navbar />
      <div className={styles.header}>
        <h1>Explora mi trabajo</h1>
      </div>
      <section className={styles.container}>
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
      <CTA />
      <Footer />
    </main>
  );
}

export default Page;
