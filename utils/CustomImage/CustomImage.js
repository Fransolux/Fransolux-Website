/* eslint-disable jsx-a11y/alt-text */
"use client";

import { useState } from "react";
import Image, { getImageProps } from "next/image";

import styles from "./customimage.module.css";

const MOBILE_MEDIA = "(max-width: 600px)";

function ImageWithLoader({
  alt = "",
  onLoad,
  fill = false,
  mobile,
  sizes = "100vw",
  ...props
}) {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = (event) => {
    setIsLoading(false);

    if (onLoad) {
      onLoad(event);
    }
  };

  const className = `${styles.image} ${
    fill ? styles.fillImage : ""
  } ${!isLoading ? styles.loaded : ""}`;

  // Si la imagen ya estaba en caché, onLoad puede dispararse antes de hidratar
  const handleRef = (el) => {
    if (el?.complete) setIsLoading(false);
  };

  let content;

  if (mobile) {
    const { props: desktopImg } = getImageProps({ ...props, alt, fill, sizes });
    const { props: mobileImg } = getImageProps({
      ...mobile,
      alt,
      fill,
      sizes,
    });

    content = (
      <picture>
        <source
          media={MOBILE_MEDIA}
          srcSet={mobileImg.srcSet}
          width={mobileImg.width}
          height={mobileImg.height}
        />

        <img
          {...desktopImg}
          ref={handleRef}
          onLoad={handleLoad}
          className={className}
        />
      </picture>
    );
  } else {
    content = (
      <Image
        {...props}
        alt={alt}
        fill={fill}
        sizes={props.sizes}
        onLoad={handleLoad}
        className={className}
      />
    );
  }

  return (
    <div className={`${styles.container} ${fill ? styles.fillContainer : ""}`}>
      {isLoading && <div className={styles.loader} />}
      {content}
    </div>
  );
}

export default ImageWithLoader;
