"use client";
import React from "react";
import styles from "./BottomContactBar.module.css";
import { MessageCircle, PhoneCall } from "lucide-react";
import { contactInfo } from "@/data/siteData";
import Container from "@/components/ui/Container/Container";
import Image from "next/image";

export default function BottomContactBar() {
  const whatsappLink = `https://wa.me/${contactInfo.phone.replace(/\D/g, "")}`;

  return (
    <div className={styles.bottomBar}>
      <div className={styles.alert}>
        <Container className={styles.container}>
          <div className={styles.inner}>
            <div className={styles.message}>
              <span className={styles.dot} />
              <span>Available for new projects</span>
            </div>

            <div className={styles.actions}>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappBtn}
              >
                <Image src="/logos/whatsapp-icon.svg" alt="WhatsApp" width={16} height={16} />
                <span>WhatsApp</span>
              </a>

              <a href="#contact" className={styles.talkBtn}>
                <PhoneCall size={16} />
                <span>Let's Talk</span>
              </a>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
