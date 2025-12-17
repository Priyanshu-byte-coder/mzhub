"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/shared/utils";

interface ScrollSlideRevealProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  className?: string;
  delay?: number;
}

export default function ScrollSlideReveal({
  children,
  direction = "left",
  className,
  delay = 0,
}: ScrollSlideRevealProps) {
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
        rootMargin: "0px 0px -50px 0px",
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

  const translateValue = direction === "left" ? "-100px" : "100px";

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-1000 ease-out",
        className
      )}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? "translateX(0)"
          : `translateX(${translateValue})`,
        transitionDelay: isVisible ? `${delay}ms` : "0ms",
      }}
    >
      {children}
    </div>
  );
}
