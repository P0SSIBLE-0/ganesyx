'use client';
import Image from "next/image";
import styles from "./Partners.module.css";
import Container from "@/components/ui/Container/Container";
import { motion } from "framer-motion";

const partnerLogos = [
  { name: "Google", src: "/logos/google-wordmark.svg" },
  { name: "Amazon", src: "/logos/logo-amazon.svg" },
  { name: "Flipkart", src: "/logos/flipkart.svg" },
  { name: "WhatsApp", src: "/logos/whatsapp-wordmark.svg" },
  { name: "Shopify", src: "/logos/shopify-wordmark-light.svg" },
];

export default function Partners() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Official Partners & Integrations</h2>
          <div className={styles.grid}>
            {partnerLogos.map((partner, index) => (
              <motion.div
                key={partner.name}
                className={styles.logoWrapper}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Image
                  src={partner.src}
                  alt={partner.name}
                  width={140}
                  height={50}
                  className={styles.logo}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
