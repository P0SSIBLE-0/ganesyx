import styles from "./Footer.module.css";
import Image from "next/image";
import Container from "@/components/ui/Container/Container";
import { footerData } from "@/data/siteData";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <a href="#" className={styles.logo}>
              <Image
                src="/logo.png"
                alt="Ganesyx Logo"
                width={791}
                height={181}
                quality={100}
                className={styles.logoImg}
                priority
              />
            </a>
            <p className={styles.description}>{footerData.description}</p>
            <div className={styles.socials}>
              {footerData.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={styles.socialLink}
                  aria-label={social.label}
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Quick Links</h4>
            <ul className={styles.columnList}>
              {footerData.quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className={styles.columnLink}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Expertise</h4>
            <ul className={styles.columnList}>
              {footerData.services.map((service) => (
                <li key={service}>
                  <span className={styles.columnLink}>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Ganesyx. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
