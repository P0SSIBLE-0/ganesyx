import React from "react";
import styles from "./Comparison.module.css";
import Container from "@/components/ui/Container/Container";
import { comparisonData } from "@/data/siteData";
import { CheckCircle2, XCircle } from "lucide-react";
import Image from "next/image";

export default function Comparison() {
  const { title, othersLabel, usLabel, features } = comparisonData;

  return (
    <section className={styles.comparison}>
      <Container>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
        </div>

        <div className={styles.tableContainer}>
          <div className={styles.flexLayout}>
            {/* Left Side: Labels and Others */}
            <div className={styles.leftSide}>
              <div className={styles.labelHeader}></div>
              <div className={styles.othersHeader}>{othersLabel}</div>

              {features.map((feature, index) => (
                <React.Fragment key={index}>
                  <div className={styles.featureName}>{feature.name}</div>
                  <div className={styles.othersValue}>
                    <XCircle className={styles.crossIcon} size={20} />
                    <span>{feature.others}</span>
                  </div>
                </React.Fragment>
              ))}
            </div>

            {/* Right Side: Ganesyx Card */}
            <div className={styles.usSide}>
              <div className={styles.usCard}>
                <div className={styles.usHeader}>
                  <Image
                    src="/logo.png"
                    alt="Ganesyx Logo"
                    width={160}
                    height={25}
                    className={styles.logoImg}
                  />
                </div>
                <div className={styles.usInner}>
                  <div className={styles.usRows}>
                    {features.map((feature, index) => (
                      <div key={index} className={styles.usValueRow}>
                        <CheckCircle2 className={styles.checkIcon} size={22} />
                        <span className={styles.usText}>{feature.us}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );

}
