import React from "react";
import styles from "./Industries.module.css";
import Container from "@/components/ui/Container/Container";
import { industriesData } from "@/data/siteData";
import { ArrowUpRight } from "lucide-react";

export default function Industries() {
  const { title, description, items } = industriesData;

  return (
    <section className={styles.industries} id="solutions">
      <div className={`${styles.decoration} ${styles.decoration1}`} aria-hidden="true" />
      <div className={`${styles.decoration} ${styles.decoration2}`} aria-hidden="true" />

      <Container>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>

        <div className={styles.grid}>
          {items.map((industry, index) => (
            <div
              key={index}
              className={styles.card}
              style={{ "--industry-color": industry.color } as React.CSSProperties}
            >
              <div className={styles.iconWrapper}>
                {industry.icon}
              </div>
              <h3 className={styles.cardTitle}>{industry.name}</h3>
              <p className={styles.cardDescription}>{industry.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
