'use client';
import React from 'react';
import Image from "next/image";
import styles from "./AnimatedGraph.module.css";
import { motion, Variants } from "framer-motion";

export interface NodeItem {
  id: string;
  icon: React.ReactNode;
  label: string;
  color?: string;
}

export interface AnimatedGraphProps {
  leftNode?: React.ReactNode;
  leftNodeLabel?: string;
  centerNode?: React.ReactNode;
  centerNodeLabel?: string;
  rightNodes?: NodeItem[];
}

const UserIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const CenterLogo = () => (
  <Image src="/logo-1.png" alt="Ganesyx" height={42} width={42} />
);
const NextJsIcon = () => (
  <Image src="/logos/nextjs_icon_dark.svg" alt="Next.js" fill />
);

const ReactIcon = () => (
  <Image src="/logos/react_light.svg" alt="React" fill />
);

const ShopifyBagIcon = () => (
  <Image src="/logos/shopify.svg" alt="Shopify" fill />
);

const WordPressIcon = () => (
  <Image src="/logos/wordpress.svg" alt="WordPress" fill />
);

const NodeJsIcon = () => (
  <Image src="/logos/nodejs.svg" alt="Node.js" fill />
);

const defaultRightNodes: NodeItem[] = [
  { id: 'next', icon: <NextJsIcon />, label: 'Next.js', color: '#cccccc' },
  { id: 'react', icon: <ReactIcon />, label: 'React', color: '#61dafb' },
  { id: 'shopify', icon: <ShopifyBagIcon />, label: 'Shopify', color: '#95BF47' },
  { id: 'wordpress', icon: <WordPressIcon />, label: 'WordPress', color: '#21759b' },
  { id: 'node', icon: <NodeJsIcon />, label: 'Node.js', color: '#339933' },
];

const basePathVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: .8, ease: "easeInOut" },
  },
};

const transitionSettings = {
  duration: 1.2,
  ease: "linear" as const,
  repeat: Infinity,
  repeatDelay: 1
};

const pulseLeftVariants: Variants = {
  hidden: { pathLength: 0, pathOffset: 0, opacity: 0 },
  visible: {
    pathLength: 0.15,
    pathOffset: [0, 1],
    opacity: [0, 1, 1],
    transition: {
      ...transitionSettings,
      opacity: { ...transitionSettings, times: [0, 0.1, 0.9, 1] }
    }
  }
};

const pulseRightVariants: Variants = {
  hidden: { pathLength: 0, pathOffset: 0, opacity: 0 },
  visible: {
    pathLength: 0.15,
    pathOffset: [0, 1],
    opacity: [0, 0.8, 1],
    transition: {
      ...transitionSettings,
      delay: 1.4,
      opacity: { ...transitionSettings, delay: 1.4, times: [0, 0.1, 0.9, 1] }
    }
  }
};

const nodeVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.2,
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
};

const activeNodeVariants: Variants = {
  visible: (custom: { color: string, timeTrigger: number }) => ({
    borderColor: ["rgba(226, 221, 213, 1)", custom.color, "rgba(226, 221, 213, 1)"],
    boxShadow: ["0 0 0px rgba(0,0,0,0)", `1px 1px 14px ${custom.color}`, "0 0 0px rgba(0,0,0,0)"],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatDelay: 1.2, // Total cycle is precisely 2.2s (matches 1.2s pulse + 1s delay)
      delay: custom.timeTrigger,
      times: [0, 0.5, 1],
      ease: "easeInOut"
    }
  })
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const BASE_PATH_COLOR = "#393939ae";

export default function AnimatedGraph({
  leftNode = <UserIcon />,
  leftNodeLabel = "Client",
  centerNode = <CenterLogo />,
  centerNodeLabel = "Ganesyx Core",
  rightNodes = defaultRightNodes
}: AnimatedGraphProps) {

  const calculateY = (index: number, total: number) => {
    if (total === 1) return 250;
    return 100 + (300 / (total - 1)) * index;
  };

  const leftLinePath = "M 100 250 L 380 250";

  return (
    <motion.div
      className={styles.container}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className={styles.svgWrapper}>
        <svg viewBox="0 0 800 500" className={styles.svg} preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--border)" />
              <stop offset="100%" stopColor="var(--brand-light, #7a2bc1)" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Base Lines */}
          <motion.path
            d={leftLinePath}
            className={styles.path}
            style={{ stroke: BASE_PATH_COLOR }}
            variants={basePathVariants}
            vectorEffect="non-scaling-stroke"
          />

          {rightNodes.map((_, index) => {
            const y = calculateY(index, rightNodes.length);
            const path = `M 380 250 C 500 250, 550 ${y}, 700 ${y}`;
            return (
              <motion.path
                key={`base-${index}`}
                d={path}
                className={styles.path}
                variants={basePathVariants}
                vectorEffect="non-scaling-stroke"
                style={{ stroke: BASE_PATH_COLOR }}
              />
            );
          })}

          {/* Pulse Lines */}
          <motion.path
            d={leftLinePath}
            className={styles.neonPath}
            variants={pulseLeftVariants}
            vectorEffect="non-scaling-stroke"
            style={{
              stroke: "var(--brand, #330099)",
              filter: "drop-shadow(0 0 5px var(--brand, #330099))"
            }}
          />

          {rightNodes.map((node, index) => {
            const y = calculateY(index, rightNodes.length);
            const path = `M 380 250 C 500 250, 550 ${y}, 700 ${y}`;
            const pathColor = node.color || "var(--brand, #560591)";
            return (
              <motion.path
                key={`pulse-${index}`}
                d={path}
                className={styles.neonPath}
                variants={pulseRightVariants}
                vectorEffect="non-scaling-stroke"
                style={{
                  stroke: pathColor,
                  filter: `drop-shadow(0 0 5px ${pathColor})`
                }}
              />
            );
          })}
        </svg>

        {/* Left Node */}
        <motion.div className={`${styles.node} ${styles.iconNode} ${styles.leftNode}`} variants={nodeVariants}>
          <div className={styles.nodeWrapper}>
            <span className={styles.nodeLabelLeft}>{leftNodeLabel}</span>
            <motion.div
              className={styles.nodeIcon}
              variants={activeNodeVariants}
              custom={{ color: "var(--brand)", timeTrigger: 0 }}
            >
              {leftNode}
            </motion.div>
          </div>
        </motion.div>

        {/* Center Node */}
        <motion.div className={`${styles.node} ${styles.centerNode}`} variants={nodeVariants}>
          <div className={styles.nodeWrapper}>
            <motion.div
              className={styles.nodeIcon}
              variants={activeNodeVariants}
              custom={{ color: "var(--brand)", timeTrigger: 1.2 }}
            >
              {centerNode}
            </motion.div>
            <span className={styles.nodeLabelBottom}>{centerNodeLabel}</span>
          </div>
        </motion.div>

        {/* Right Nodes */}
        {rightNodes.map((node, index) => {
          const topPercent = (calculateY(index, rightNodes.length) / 500) * 100;
          return (
            <motion.div key={node.id} className={`${styles.node} ${styles.iconNode} ${styles.rightNode}`} style={{ top: `${topPercent - 5}%` }} variants={nodeVariants}>
              <div className={styles.nodeWrapper}>
                <motion.div
                  className={styles.nodeIcon}
                  variants={activeNodeVariants}
                  custom={{ color: node.color || "var(--brand)", timeTrigger: 2.2 }}
                >
                  {node.icon}
                </motion.div>
                <span className={styles.nodeLabelRight}>{node.label}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
