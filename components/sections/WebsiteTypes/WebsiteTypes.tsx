"use client";

import React from "react";
import Image from "next/image";
import styles from "./WebsiteTypes.module.css";
import Container from "@/components/ui/Container/Container";
import { websiteTypesData } from "@/data/siteData";

export default function WebsiteTypes({ isNested = false }: { isNested?: boolean }) {
  const content = (
    <>
      <p className={styles.title}>Expertise in Diverse Digital Products</p>

      <div className={styles.grid}>
        {websiteTypesData && websiteTypesData.length > 0 ? (
          websiteTypesData.map((type, index) => (
            <div key={index} className={styles.pill}>
              <span className={styles.icon}>
                {type.logo ? (
                  <Image
                    src={type.logo}
                    alt={type.label}
                    width={24}
                    height={24}
                    className={styles.logoImg}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                ) : (
                  type.icon
                )}
              </span>
              <span className={styles.label}>{type.label}</span>
            </div>
          ))
        ) : (
          <p>Loading expertise...</p>
        )}
      </div>
    </>
  );

  if (isNested) return content;

  return (
    <section className={styles.websiteTypes}>
      <Container>
        {content}
      </Container>
    </section>
  );
}
