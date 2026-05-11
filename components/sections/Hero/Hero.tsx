import Image from "next/image";
import styles from "./Hero.module.css";
import Container from "@/components/ui/Container/Container";
import Button from "@/components/ui/Button/Button";
import TypingEffect from "@/components/ui/TypingEffect/TypingEffect";
import { heroData } from "@/data/siteData";

export default function Hero() {
  const { badge, headline, subheading, primaryCta, secondaryCta } = heroData;

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.spotlight} aria-hidden="true" />
      <div className={styles.pattern} aria-hidden="true" />

      {/* Floating Logos */}
      <div className={styles.floatingLogos} aria-hidden="true">
        <div className={`${styles.floatingLogo} ${styles.logoShopify}`}>
          <Image src="/logos/shopify.svg" alt="Shopify" width={40} height={40} />
        </div>
        <div className={`${styles.floatingLogo} ${styles.logoWordpress}`}>
          <Image src="/logos/wordpress.svg" alt="WordPress" width={40} height={40} />
        </div>
        <div className={`${styles.floatingLogo} ${styles.logoNext}`}>
          <Image src="/logos/nextjs_icon_dark.svg" alt="Next.js" width={40} height={40} />
        </div>
        <div className={`${styles.floatingLogo} ${styles.logoReact}`}>
          <Image src="/logos/react_light.svg" alt="React" width={40} height={40} />
        </div>
        <div className={`${styles.floatingLogo} ${styles.logoNode}`}>
          <Image src="/logos/nodejs.svg" alt="Node.js" width={40} height={40} />
        </div>
      </div>

      <Container>
        <div className={styles.content}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} aria-hidden="true" />
            <span className={styles.eyebrowText}>{badge}</span>
            <span className={styles.eyebrowLine} aria-hidden="true" />
          </div>

          <h1 className={styles.headline}>
            We build websites
            <br />
            that&nbsp;
            <span className={styles.accentText}>
              <TypingEffect
                text={[" scale.", " perform.", " secure.", " endure."]}
                pauseDuration={2000}
                typingSpeed={80}
                deletingSpeed={40}
              />
            </span>
          </h1>

          <div className={styles.bottom}>
            <p className={styles.subheading}>{subheading}</p>
            <div className={styles.ctas}>
              <Button href="#contact" variant="primary" size="lg">
                {primaryCta}
              </Button>
              <Button href="#works" variant="secondary" size="lg">
                {secondaryCta}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
