'use client';
import styles from "./HowItWorks.module.css";
import Container from "@/components/ui/Container/Container";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import { processData } from "@/data/siteData";
import { motion, type Variants } from "framer-motion";
import Button from "@/components/ui/Button/Button";

const containerVariants: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, x: 150, filter: "blur(13px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.4,
      ease: 'anticipate',
    },
  },
};

export default function HowItWorks() {
  return (
    <section className={styles.section} id="process">
      <Container>
        <SectionHeading
          label="Our Process"
          title="How we build for the future"
          subtitle="A proven 4-step engineering framework that turns complex ideas into scalable digital products."
        />
        <motion.div
          className={styles.list}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {processData.map((item, index) => (
            <motion.div
              key={item.step}
              className={`${styles.card} ${styles[`card${index}`]}`}
              variants={cardVariants}
            >
              <div className={styles.stepNumber}>{item.step}</div>
              <div className={styles.cardContent}>
                <h3 className={styles.stepTitle}>{item.title}</h3>
                <p className={styles.stepDescription}>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className={styles.ctaWrapper}>
          <Button href="#contact" variant="primary" size="lg">
            Start Your Project
          </Button>
          {/* <Button href="#works" variant="secondary" size="lg">
            View Portfolio
          </Button> */}
        </div>
      </Container>
    </section>
  );
}
