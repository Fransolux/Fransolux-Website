import styles from "@/utils/ProjectRender/projectrender.module.css";
import ImageWithLoader from "@/utils/CustomImage/CustomImage";
import SlideShow from "@/utils/ProjectRender/SlideShow";

function ProjectHeader({ project }) {
  const { client, year, services } = project.header.info;

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <h1>{project.header.content.title}</h1>
        <p>{project.header.content.text}</p>
      </div>
      <hr />
      <div className={styles.info}>
        {client && (
          <p>
            {client === "Facultad" ? (
              "Trabajo académico"
            ) : (
              <>
                <strong>Cliente / </strong>
                {client}
              </>
            )}
          </p>
        )}

        {year && (
          <p>
            <strong>Año / </strong>
            {year}
          </p>
        )}

        {services?.length > 0 && (
          <p>
            {client === "Facultad" ? (
              services.join(" - ")
            ) : (
              <>
                <strong>Servicios / </strong>
                {services.join(" - ")}
              </>
            )}
          </p>
        )}
      </div>
    </header>
  );
}

function FullImage({ image }) {
  return (
    <section className={styles.fullImage}>
      <ImageWithLoader
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        mobile={image.mobile}
      />
    </section>
  );
}

function Explanation({ text }) {
  return (
    <section className={styles.explanation}>
      <p>{text}</p>
    </section>
  );
}

function Bento({ top, bottom }) {
  return (
    <section className={styles.bento}>
      <div className={styles.bentoTop}>
        {top.map((image, index) => (
          <ImageWithLoader
            key={index}
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
          />
        ))}
      </div>

      <ImageWithLoader
        src={bottom.src}
        alt={bottom.alt}
        width={bottom.width}
        height={bottom.height}
      />
    </section>
  );
}

function SideBySide({ images }) {
  return (
    <section className={styles.sideBySide}>
      {images.map((image, index) => (
        <ImageWithLoader
          key={index}
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
        />
      ))}
    </section>
  );
}

function Quote({ text }) {
  return (
    <section className={styles.quote}>
      <p>“{text}”</p>
    </section>
  );
}

function Gallery({ images }) {
  return (
    <section className={styles.gallery}>
      {images.map((image, index) => (
        <ImageWithLoader
          key={index}
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
        />
      ))}
    </section>
  );
}

function ShowProcess({ result, process }) {
  return (
    <section className={styles.processBand}>
      <div className={styles.showProcess}>
        {[result, process].map((image, index) => (
          <div
            key={index}
            className={styles.processItem}
            style={{ "--ratio": image.width / image.height }}
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

function Grid({ images }) {
  return (
    <section className={styles.postGrid}>
      {images.map((image, index) => (
        <ImageWithLoader
          key={index}
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
        />
      ))}
    </section>
  );
}

function ProjectRenderer({ project }) {
  return (
    <div className={styles.container}>
      <ProjectHeader project={project} />

      <div className={styles.sections}>
        {project.sections.map((section, index) => {
          switch (section.type) {
            case "fullImage":
              return <FullImage key={index} image={section.image} />;

            case "explanation":
              return <Explanation key={index} text={section.text} />;

            case "bento":
              return (
                <Bento key={index} top={section.top} bottom={section.bottom} />
              );

            case "sideBySide":
              return <SideBySide key={index} images={section.images} />;

            case "quote":
              return <Quote key={index} text={section.text} />;

            case "gallery":
              return <Gallery key={index} images={section.images} />;

            case "showProcess":
              return (
                <ShowProcess
                  key={index}
                  result={section.result}
                  process={section.process}
                />
              );

            case "grid":
              return <Grid key={index} images={section.images} />;

            case "slideShow":
              return (
                <SlideShow
                  key={index}
                  images={section.images}
                  speed={section.speed}
                />
              );

            default:
              return null;
          }
        })}
      </div>
    </div>
  );
}

export default ProjectRenderer;
