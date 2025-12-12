"use client";

import React, { useEffect, useRef, useCallback, useState } from "react";

interface CarouselItem {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

interface InfiniteCarouselProps {
  items: CarouselItem[];
  speed?: number;
  direction?: "left" | "right";
}

export default function InfiniteCarousel({ 
  items, 
  speed = 30,
  direction = "left" 
}: InfiniteCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const seqRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const lastTimestampRef = useRef<number | null>(null);
  const offsetRef = useRef(0);
  
  const [seqWidth, setSeqWidth] = useState(0);
  const [copyCount, setCopyCount] = useState(3);

  const velocity = direction === "left" ? speed * 10 : -speed * 10;

  const updateDimensions = useCallback(() => {
    if (!seqRef.current) return;
    const sequenceWidth = seqRef.current.getBoundingClientRect().width;
    if (sequenceWidth > 0) {
      setSeqWidth(sequenceWidth);
      const containerWidth = trackRef.current?.parentElement?.clientWidth ?? 0;
      const copiesNeeded = Math.ceil(containerWidth / sequenceWidth) + 2;
      setCopyCount(Math.max(3, copiesNeeded));
    }
  }, []);

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [updateDimensions, items]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || seqWidth === 0) return;

    const animate = (timestamp: number) => {
      if (lastTimestampRef.current === null) {
        lastTimestampRef.current = timestamp;
      }

      const deltaTime = Math.max(0, timestamp - lastTimestampRef.current) / 1000;
      lastTimestampRef.current = timestamp;

      let nextOffset = offsetRef.current + velocity * deltaTime;
      nextOffset = ((nextOffset % seqWidth) + seqWidth) % seqWidth;
      offsetRef.current = nextOffset;

      track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      lastTimestampRef.current = null;
    };
  }, [velocity, seqWidth]);

  const renderItems = (copyIndex: number) => (
    <div 
      key={`copy-${copyIndex}`}
      className="flex gap-6"
      ref={copyIndex === 0 ? seqRef : undefined}
    >
      {items.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <div
            key={`${copyIndex}-${index}`}
            className="flex-shrink-0 w-[280px] sm:w-[300px] bg-secondary-light/10 backdrop-blur-md rounded-xl p-6 text-center hover:bg-secondary-light/20 transition-colors dark:bg-white/10 dark:hover:bg-white/20"
          >
            <div className="flex justify-center mb-3">
              <IconComponent className="w-12 h-12 text-secondary-light dark:text-accent-gold" />
            </div>
            <h3 className="font-bold text-xl mb-2 text-secondary-light dark:text-white">
              {item.title}
            </h3>
            <p className="text-secondary-light/70 dark:text-neutral-light text-sm">
              {item.description}
            </p>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="relative w-full overflow-hidden py-4">
      <div 
        ref={trackRef}
        className="flex gap-6 will-change-transform"
      >
        {Array.from({ length: copyCount }, (_, i) => renderItems(i))}
      </div>
    </div>
  );
}
