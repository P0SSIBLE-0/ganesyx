'use client';
import { useState } from "react";
import styles from "./FAQ.module.css";
import Container from "@/components/ui/Container/Container";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import { faqData } from "@/data/siteData";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [activeTab, setActiveTab] = useState(faqData.categories[0].id);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const activeCategory = faqData.categories.find((cat) => cat.id === activeTab) || faqData.categories[0];

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setOpenIndex(0); // Reset accordion when switching tabs
  };

  return (
    <section className={styles.faq} id="faq">
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <SectionHeading
              title={faqData.title}
              subtitle={faqData.description}
              align="center"
            />
          </div>

          <div className={styles.tabsWrapper}>
            <div className={styles.tabs}>
              {faqData.categories.map((category) => (
                <button
                  key={category.id}
                  className={`${styles.tab} ${activeTab === category.id ? styles.activeTab : ""}`}
                  onClick={() => handleTabChange(category.id)}
                >
                  {category.label}
                  {activeTab === category.id && (
                    <motion.div
                      layoutId="activeTab"
                      className={styles.activeIndicator}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.content}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className={styles.accordion}
              >
                {activeCategory.faqs.map((faq, index) => {
                  const isOpen = openIndex === index;
                  return (
                    <div
                      key={`${activeTab}-${index}`}
                      className={`${styles.item} ${isOpen ? styles.open : ""}`}
                      onClick={() => toggleQuestion(index)}
                    >
                      <button className={styles.questionButton}>
                        <span className={styles.question}>{faq.question}</span>
                        <motion.span
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className={styles.icon}
                        >
                          <ChevronDown size={20} />
                        </motion.span>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className={styles.answerWrapper}
                          >
                            <p className={styles.answer}>{faq.answer}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}

