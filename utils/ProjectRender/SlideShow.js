"use client";

import { useEffect, useRef } from "react";

import styles from "@/utils/ProjectRender/projectrender.module.css";
import ImageWithLoader from "@/utils/CustomImage/CustomImage";

function SlideShow({ images, speed = 60 }) {
  const trackRef = useRef(null);
  const state = useRef({
    pos: 0,
    dir: 1,
    paused: false,
    visible: false,
    timer: null,
  });

  useEffect(() => {
    const track = trackRef.current;
    const s = state.current;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(([entry]) => {
      s.visible = entry.isIntersecting;
    });
    observer.observe(track);

    let raf;
    let last = performance.now();
    let holdUntil = 0;

    const tick = (now) => {
      const dt = Math.min(now - last, 50) / 1000;
      last = now;

      const max = track.scrollWidth - track.clientWidth;

      if (s.visible && !s.paused && max > 0 && now >= holdUntil) {
        s.pos += s.dir * speed * dt;

        if (s.pos >= max) {
          s.pos = max;
          s.dir = -1;
          holdUntil = now + 1000;
        } else if (s.pos <= 0) {
          s.pos = 0;
          s.dir = 1;
          holdUntil = now + 1000;
        }

        track.scrollLeft = s.pos;
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      clearTimeout(s.timer);
    };
  }, [speed]);

  return (
    <section className={styles.slideShow}>
      <div className={styles.slideTrack} ref={trackRef}>
        {images.map((image, index) => (
          <div
            className={styles.slide}
            key={index}
            style={{ aspectRatio: image.width / image.height }}
          >
            <ImageWithLoader
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default SlideShow;
