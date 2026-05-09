"use client";

import { useState } from "react";
import styles from "./Contact.module.css";
import Container from "@/components/ui/Container/Container";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import Button from "@/components/ui/Button/Button";
import { contactInfo } from "@/data/siteData";
import { Mail, MapPin, Phone } from "lucide-react";

const SERVICES = [
  {
    value: "full-stack",
    label: "Full-Stack Development",
  },
  {
    value: "shopify",
    label: "Shopify",
  },
  {
    value: "web-app",
    label: "Web Application",
  },
  {
    value: "wordPress",
    label: "Wordpress",
  },
  {
    value: "api",
    label: "API Design & Integration",
  },
  {
    value: "other",
    label: "Other",
  }
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Thank you! We'll be in touch soon.");
    setFormData({ name: "", email: "", company: "", service: "", message: "" });
  };

  return (
    <section className={styles.section} id="contact">
      <Container>
        <div className={styles.wrapper}>
          {/* Left side */}
          <div className={styles.left}>
            <SectionHeading
              label="Get in Touch"
              title="Let's build something great together"
              subtitle="Ready to scale your digital product? Tell us about your project and our engineering team will get back to you within 24 hours."
              align="left"
            />
            <div className={styles.contactDetails}>
              <div className={styles.detailItem}>
                <span className={styles.detailIcon}>
                  <Mail size={18} />
                </span>
                <div>
                  <p className={styles.detailLabel}>Email</p>
                  <p className={styles.detailValue}>{contactInfo.email}</p>
                </div>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailIcon}>
                  <MapPin size={18} />
                </span>
                <div>
                  <p className={styles.detailLabel}>Location</p>
                  <p className={styles.detailValue}>{contactInfo.location}</p>
                </div>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailIcon}>
                  <Phone size={18} />
                </span>
                <div>
                  <p className={styles.detailLabel}>Phone</p>
                  <p className={styles.detailValue}>{contactInfo.phone}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side — form */}
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="contact-name" className={styles.label}>
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  className={styles.input}
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="contact-email" className={styles.label}>
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  className={styles.input}
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="contact-company" className={styles.label}>
                  Company
                </label>
                <input
                  id="contact-company"
                  name="company"
                  type="text"
                  className={styles.input}
                  placeholder="Acme Inc."
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="contact-service" className={styles.label}>
                  Service Needed
                </label>
                <select
                  id="contact-service"
                  name="service"
                  className={styles.input}
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a solution</option>
                  {
                    SERVICES.map((service) => (
                      <option key={service.value} value={service.value}>
                        {service.label}
                      </option>
                    ))
                  }
                </select>
              </div>
            </div>
            <div className={styles.field}>
              <label htmlFor="contact-message" className={styles.label}>
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                className={`${styles.input} ${styles.textarea}`}
                placeholder="Tell us about your project..."
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <Button type="submit" variant="primary" size="lg">
              Send Message
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
}
