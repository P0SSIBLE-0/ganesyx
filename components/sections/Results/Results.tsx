import styles from "./Results.module.css";
import Container from "@/components/ui/Container/Container";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import { resultsData } from "@/data/siteData";

export default function Results() {
  return (
    <section className={styles.section} id="results">
      <Container>
        <SectionHeading
          label="Proven Performance"
          title="Engineering by the numbers"
          subtitle="Real-world performance metrics from our latest deployments. We let the code do the talking."
        />
        <div className={styles.grid}>
          {resultsData.map((result) => (
            <div key={result.label} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.icon}>{result.icon}</span>
                <span className={styles.metric}>{result.metric}</span>
              </div>
              <h3 className={styles.label}>{result.label}</h3>
              <p className={styles.description}>{result.description}</p>
              <div className={styles.bar}>
                <div className={styles.barFill} />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
