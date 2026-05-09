import Image from "next/image";
import styles from "./BrandMarquee.module.css";
import Container from "@/components/ui/Container/Container";
import { brandsData } from "@/data/siteData";

export default function BrandMarquee() {
  // Duplicate the data to create a seamless infinite loop
  const duplicatedBrands = [...brandsData, ...brandsData];

  return (
    <section className={styles.brands}>
      <Container>
        <p className={styles.title}>Trusted by industry leaders</p>
      </Container>

      <div className={styles.marquee}>
        <div className={styles.track}>
          {duplicatedBrands.map((brand, index) => (
            <div key={`${brand.name}-${index}`} className={styles.brandLogo}>
              <Image
                src={brand.logo}
                alt={`${brand.name} logo`}
                height={60}
                width={160}
                className={styles.logoImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
