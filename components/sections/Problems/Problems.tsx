import Image from "next/image";
import styles from "./Problems.module.css";
import Container from "@/components/ui/Container/Container";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import { problemsData } from "@/data/siteData";

export default function Problems() {
  return (
    <section className={styles.problems} id="solutions">
      <Container>
        <SectionHeading
          label="THE FRICTION"
          title="Technical debt is expensive."
          subtitle="These are the technical challenges holding your product back. We engineer solutions for every single one."
        />
        <div className={styles.bentoGrid}>
          {problemsData.map((problem, index) => (
            <div
              key={problem.title}
              className={`${styles.card} ${index === 0 || index === 5 ? styles.cardLarge : ""
                }`}
            >
              {problem.image && (
                <div className={styles.cardImageContainer}>
                  <Image
                    src={problem.image}
                    alt={problem.title}
                    width={100}
                    height={100}
                    className={styles.cardImage}
                  />
                </div>
              )}
              <span className={styles.icon}>{problem.icon}</span>
              <h3 className={styles.cardTitle}>{problem.title}</h3>
              <p className={styles.cardDescription}>{problem.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
