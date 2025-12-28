"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/shared/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  baseOpacity?: number;
  enableBlur?: boolean;
  baseRotation?: number;
  blurStrength?: number;
  className?: string;
}

const ScrollReveal = React.memo(function ScrollReveal({
  children,
  baseOpacity = 0,
  enableBlur = true,
  baseRotation = 5,
  blurStrength = 10,
  className,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-1000 ease-out",
        className
      )}
      style={{
        opacity: isVisible ? 1 : baseOpacity,
        transform: isVisible
          ? "translateY(0) rotate(0deg)"
          : `translateY(20px) rotate(${baseRotation}deg)`,
        filter: isVisible
          ? "blur(0px)"
          : enableBlur
            ? `blur(${blurStrength}px)`
            : "none",
      }}
    >
      {children}
    </div>
  );
});

export default ScrollReveal;

