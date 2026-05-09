'use client';
import Image from "next/image";
import styles from "./Brands.module.css";
import { motion } from "framer-motion";

const techLogos = [
  "/logos/nextjs_icon_dark.svg",
  "/logos/react_light.svg",
  "/logos/shopify.svg",
  "/logos/wordpress.svg",
  "/logos/nodejs.svg",
];

const floatingNodes = [
  { top: '15%', left: '10%', scale: 1.1, blur: 0, opacity: 0.8 },
  { top: '25%', left: '25%', scale: 0.8, blur: 3, opacity: 0.5 },
  { top: '10%', left: '45%', scale: 0.6, blur: 5, opacity: 0.3 },
  { top: '20%', left: '60%', scale: 1, blur: 1, opacity: 0.7 },
  { top: '15%', left: '80%', scale: 0.9, blur: 2, opacity: 0.6 },
  { top: '35%', left: '85%', scale: 1.2, blur: 0, opacity: 0.9 },
  { top: '45%', left: '15%', scale: 0.7, blur: 4, opacity: 0.4 },
  { top: '60%', left: '8%', scale: 1, blur: 1, opacity: 0.8 },
  { top: '75%', left: '20%', scale: 1.3, blur: 0, opacity: 0.9 },
  { top: '80%', left: '40%', scale: 0.8, blur: 3, opacity: 0.5 },
  { top: '70%', left: '60%', scale: 0.6, blur: 5, opacity: 0.3 },
  { top: '85%', left: '75%', scale: 1.1, blur: 1, opacity: 0.7 },
  { top: '65%', left: '90%', scale: 0.9, blur: 2, opacity: 0.6 },
  { top: '40%', left: '75%', scale: 0.5, blur: 6, opacity: 0.2 },
  { top: '55%', left: '25%', scale: 0.7, blur: 4, opacity: 0.4 },
  { top: '25%', left: '90%', scale: 0.4, blur: 8, opacity: 0.15 },
  { top: '85%', left: '10%', scale: 0.5, blur: 6, opacity: 0.2 },
  { top: '30%', left: '40%', scale: 0.3, blur: 10, opacity: 0.1 },
  { top: '75%', left: '85%', scale: 0.4, blur: 8, opacity: 0.15 },
  { top: '10%', left: '70%', scale: 0.3, blur: 10, opacity: 0.1 },
  { top: '90%', left: '50%', scale: 0.5, blur: 6, opacity: 0.2 },
  { top: '50%', left: '85%', scale: 0.3, blur: 10, opacity: 0.1 },
  { top: '15%', left: '30%', scale: 0.4, blur: 8, opacity: 0.15 },
  { top: '85%', left: '30%', scale: 0.3, blur: 10, opacity: 0.1 },
];

export default function Brands() {
  return (
    <section className={styles.brands}>
      <h2 className={styles.centerText}>
        <span>Shopify</span> <br />
        <span>Wordpress</span>
        <br /><span>Custom Solutions</span>
      </h2>

      {floatingNodes.map((node, i) => {
        const logoSrc = techLogos[i % techLogos.length];

        return (
          <motion.div
            key={i}
            className={styles.floatingLogo}
            style={{
              top: node.top,
              left: node.left,
              opacity: node.opacity,
              filter: `blur(${node.blur}px)`,
              scale: node.scale
            }}
            animate={{
              y: [0, -20, 0, 20, 0],
              x: [0, 10, 0, -10, 0]
            }}
            transition={{
              duration: 10 + (i % 5),
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.2
            }}
          >
            <Image src={logoSrc} alt="Tech Logo" width={56} height={56} unoptimized />
          </motion.div>
        );
      })}
    </section>
  );
}
