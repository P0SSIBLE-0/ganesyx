import Hero from "@/components/sections/Hero/Hero";
import BrandMarquee from "@/components/sections/BrandMarquee/BrandMarquee";
import Brands from "@/components/sections/Brands/Brands";
import Stats from "@/components/sections/Stats/Stats";
import About from "@/components/sections/About/About";
import Problems from "@/components/sections/Problems/Problems";
import Works from "@/components/sections/Works/Works";
import HowItWorks from "@/components/sections/HowItWorks/HowItWorks";
import Results from "@/components/sections/Results/Results";
import Testimonials from "@/components/sections/Testimonials/Testimonials";
import Contact from "@/components/sections/Contact/Contact";
import FAQ from "@/components/sections/FAQ/FAQ";
import Partners from "@/components/sections/Partners/Partners";
import Industries from "@/components/sections/Industries/Industries";
import Comparison from "@/components/sections/Comparison/Comparison";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandMarquee />
      <Stats />
      {/* <Problems /> */}
      <About />
      <Works />
      <Industries />
      <Comparison />
      <HowItWorks />
      {/* <Results /> */}
      <Testimonials />
      <Brands />
      <Partners />
      <FAQ />
      <Contact />
    </>
  );
}
