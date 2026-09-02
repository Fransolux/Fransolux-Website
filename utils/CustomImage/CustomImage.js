"use client";

import { useState } from "react";
import Image from "next/image";

import styles from "./customimage.module.css";

function ImageWithLoader({ alt = "", onLoad, fill = false, ...props }) {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = (event) => {
    setIsLoading(false);

    if (onLoad) {
      onLoad(event);
    }
  };

  return (
    <div className={`${styles.container} ${fill ? styles.fillContainer : ""}`}>
      {isLoading && <div className={styles.loader} />}

      <Image
        {...props}
        alt={alt}
        fill={fill}
        onLoad={handleLoad}
        className={`${styles.image} ${
          fill ? styles.fillImage : ""
        } ${!isLoading ? styles.loaded : ""}`}
      />
    </div>
  );
}

export default ImageWithLoader;
