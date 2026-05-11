import Image from "next/image";
import styles from "./Works.module.css";
import Container from "@/components/ui/Container/Container";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import { worksData } from "@/data/siteData";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button/Button";
export default function Works() {
  return (
    <section className={styles.works} id="works">
      <Container>
        <SectionHeading
          label="Portfolio"
          title="Recent Works"
          subtitle="From complex SaaS platforms to full-stack applications — every project is engineered for performance and scalability."
          align="left"
        />
        <div className={styles.list}>
          {worksData.map((work, index) => (
            <article key={work.title} className={styles.card}>
              <div

                className={styles.cardLink}
              >
                <div className={styles.content}>
                  <div className={styles.meta}>
                    <span className={styles.index}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className={styles.category}>{work.category}</span>
                  </div>
                  <div className={styles.titleWrapper}>
                    <h3 className={styles.title}>
                      <Link href={work.url} target="_blank">
                        {work.title}
                      </Link>
                    </h3>
                    <ArrowUpRight className={styles.linkIcon} size={20} />
                  </div>
                  <p className={styles.description}>{work.description}</p>
                  <div className={styles.metrics}>
                    {work.metrics.slice(0, 3).map((metric, i) => (
                      <span key={i} className={styles.metric}>
                        <span className={styles.metricInner}>{metric}</span>
                      </span>
                    ))}
                  </div>
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
              </div>
            </article>
          ))}
        </div>

        <div className={styles.ctaWrapper}>
          <Button href="#contact" variant="primary" size="lg">
            Start Your Project
          </Button>
        </div>
      </Container>
    </section>
  );
}
