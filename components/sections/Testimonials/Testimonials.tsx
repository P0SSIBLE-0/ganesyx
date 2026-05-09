import Image from "next/image";
import styles from "./Testimonials.module.css";
import Container from "@/components/ui/Container/Container";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import { testimonialsData } from "@/data/siteData";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className={styles.stars} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < rating ? styles.starFilled : styles.star}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  // Triple the array to ensure enough content for ultra-wide screens
  const items = [...testimonialsData, ...testimonialsData, ...testimonialsData];

  return (
    <section className={styles.section} id="testimonials">
      <Container>
        <SectionHeading
          label="Testimonials"
          title="Engineering partnerships that last"
          subtitle="Don't just take our word for it — hear from the engineering leaders and founders we've partnered with."
        />
      </Container>

      <div className={styles.marqueeWrapper}>
        <div className={styles.marquee}>
          {items.map((t, i) => (
            <div key={`${t.name}-${i}`} className={styles.card}>
              <div className={styles.avatar}>
                {t.avatar.startsWith("http") || t.avatar.startsWith("/") ? (
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    sizes="75px"
                    className={styles.avatarImg}
                  />
                ) : (
                  t.avatar
                )}
              </div>
              <StarRating rating={t.rating} />
              <p className={styles.content}>&ldquo;{t.content}&rdquo;</p>
              <div className={styles.author}>
                <p className={styles.name}>{t.name}</p>
                <p className={styles.role}>{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
