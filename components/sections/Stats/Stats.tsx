"use client";

import { useState, useEffect, useRef, Fragment } from "react";
import styles from "./Stats.module.css";
import Container from "@/components/ui/Container/Container";
import { statsData } from "@/data/siteData";

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const start = performance.now();
          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Number((eased * target).toFixed(target % 1 === 0 ? 0 : 1)));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className={styles.value}>
      {count}
      <span className={styles.suffix}>{suffix}</span>
    </div>
  );
}

export default function Stats() {
  return (
    <section className={styles.stats} id="results">
      <Container>
        <div className={styles.strip}>
          {statsData.map((stat, i) => (
            <Fragment key={stat.label}>
              <div className={styles.stat}>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                <p className={styles.label}>{stat.label}</p>
              </div>
              {i < statsData.length - 1 && (
                <div className={styles.divider} aria-hidden="true" />
              )}
            </Fragment>
          ))}
        </div>
      </Container>
    </section>
  );
}
