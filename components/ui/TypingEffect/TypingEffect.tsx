"use client";

import { useState, useEffect } from "react";
import styles from "./TypingEffect.module.css";

interface TypingEffectProps {
  /** The text string or array of strings to type out */
  text: string | string[];
  /** Speed of typing in milliseconds per character (default: 100) */
  typingSpeed?: number;
  /** Speed of deleting in milliseconds per character (default: 50) */
  deletingSpeed?: number;
  /** Pause duration before deleting starts in milliseconds (default: 2000) */
  pauseDuration?: number;
  /** Whether to loop the typing effect (default: true for arrays, false for single string) */
  loop?: boolean;
  /** Custom CSS class for the container */
  className?: string;
  /** Custom CSS class for the cursor */
  cursorClassName?: string;
  /** Whether to show the blinking cursor (default: true) */
  showCursor?: boolean;
}

export default function TypingEffect({
  text,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
  loop,
  className = "",
  cursorClassName = "",
  showCursor = true,
}: TypingEffectProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const strings = Array.isArray(text) ? text : [text];
  const shouldLoop = loop !== undefined ? loop : Array.isArray(text);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const currentString = strings[currentIndex];

    if (isDeleting) {
      if (displayedText.length === 0) {
        setIsDeleting(false);
        if (shouldLoop || currentIndex < strings.length - 1) {
          setCurrentIndex((prev) => (prev + 1) % strings.length);
        }
      } else {
        timeout = setTimeout(() => {
          setDisplayedText(currentString.substring(0, displayedText.length - 1));
        }, deletingSpeed);
      }
    } else {
      if (displayedText.length === currentString.length) {
        if (shouldLoop || currentIndex < strings.length - 1) {
          timeout = setTimeout(() => {
            setIsDeleting(true);
          }, pauseDuration);
        }
      } else {
        timeout = setTimeout(() => {
          setDisplayedText(currentString.substring(0, displayedText.length + 1));
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timeout);
  }, [
    displayedText,
    isDeleting,
    currentIndex,
    strings,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    shouldLoop,
  ]);

  return (
    <span className={`${styles.container} ${className}`}>
      {displayedText}
      {showCursor && (
        <span className={`${styles.cursor} ${cursorClassName}`}>|</span>
      )}
    </span>
  );
}
