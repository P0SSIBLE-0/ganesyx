import styles from "./About.module.css";
import Container from "@/components/ui/Container/Container";
import { whyChooseUsData } from "@/data/siteData";

import AnimatedGraph from "./AnimatedGraph";
import WebsiteTypes from "../WebsiteTypes/WebsiteTypes";

export default function About() {
  const { label, title, description } = whyChooseUsData;

  return (
    <section className={styles.about} id="about">
      <div className={styles.aboutWrapper}>

        <div className={styles.header}>
          <div className={styles.eyebrow}>
            <span className={styles.line} aria-hidden="true" />
            <span className={styles.label}>{label}</span>
            <span className={styles.line} aria-hidden="true" />
          </div>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>

        <div className={styles.graphWrapper}>
          <div className={styles.blob} aria-hidden="true" />
          <div className={`${styles.blob} ${styles.blob2}`} aria-hidden="true" />
          <div className={`${styles.blob} ${styles.blob3}`} aria-hidden="true" />
          <div className={styles.graphContainer}>
            <div className={styles.noiseOverlay} aria-hidden="true" />
            <AnimatedGraph />
          </div>
        </div>

        <div className={styles.websiteTypesWrapper}>
          <WebsiteTypes isNested />
        </div>
      </div>
    </section>
  );
}
