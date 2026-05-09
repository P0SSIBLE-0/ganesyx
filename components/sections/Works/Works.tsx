import Image from "next/image";
import styles from "./Works.module.css";
import Container from "@/components/ui/Container/Container";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import { worksData } from "@/data/siteData";

export default function Works() {
  return (
    <section className={styles.works} id="works">
      <Container>
        <SectionHeading
          label="Portfolio"
          title="Recent Deployments"
          subtitle="From complex SaaS platforms to full-stack applications — every project is engineered for performance and scalability."
          align="left"
        />
        <div className={styles.list}>
          {worksData.map((work, index) => (
            <article key={work.title} className={styles.card}>
              <div className={styles.content}>
                <div className={styles.meta}>
                  <span className={styles.index}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className={styles.category}>{work.category}</span>
                </div>
                <h3 className={styles.title}>{work.title}</h3>
                <p className={styles.description}>{work.description}</p>
                <span className={styles.metric}>{work.metrics}</span>
              </div>
              <div className={styles.preview}>
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={styles.image}
                />
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
