"use client";

import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
  useMemo,
  TouchEvent,
} from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export interface ThreeDCarouselItem {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  year: string;
  link?: string;
}

interface ThreeDCarouselProps {
  items: ThreeDCarouselItem[];
  autoRotate?: boolean;
  rotateInterval?: number;
  cardHeight?: number;
}

const ThreeDCarousel = ({
  items,
  autoRotate = true,
  rotateInterval = 4000,
  cardHeight = 500,
}: ThreeDCarouselProps) => {
  const [active, setActive] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const minSwipeDistance = 50;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (autoRotate && isInView && !isHovering) {
      const interval = setInterval(() => {
        setActive((prev) => (prev + 1) % items.length);
      }, rotateInterval);
      return () => clearInterval(interval);
    }
  }, [isInView, isHovering, autoRotate, rotateInterval, items.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const onTouchStart = useCallback((e: TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(null);
  }, []);

  const onTouchMove = useCallback((e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }, []);

  const onTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      setActive((prev) => (prev + 1) % items.length);
    } else if (distance < -minSwipeDistance) {
      setActive((prev) => (prev - 1 + items.length) % items.length);
    }
  }, [touchStart, touchEnd, items.length, minSwipeDistance]);

  // 3D positioning variants for cards - memoized since static
  const cardVariants = useMemo(() => ({
    center: {
      x: 0,
      zIndex: 30,
      scale: 1,
      rotateY: 0,
      opacity: 1,
      filter: "blur(0px) brightness(1)",
    },
    right: {
      x: 260,
      zIndex: 20,
      scale: 0.92,
      rotateY: -18,
      opacity: 0.7,
      filter: "blur(0px) brightness(0.95)",
    },
    left: {
      x: -260,
      zIndex: 20,
      scale: 0.92,
      rotateY: 18,
      opacity: 0.7,
      filter: "blur(0px) brightness(0.95)",
    },
    hidden: {
      x: 0,
      zIndex: 10,
      scale: 0.8,
      rotateY: 0,
      opacity: 0,
      filter: "blur(0px) brightness(0.9)",
    },
  } as const), []);

  const getCardVariant = useCallback((index: number) => {
    if (index === active) return "center";
    if (index === (active + 1) % items.length) return "right";
    if (index === (active - 1 + items.length) % items.length) return "left";
    return "hidden";
  }, [active, items.length]);

  return (
    <section
      id="ThreeDCarousel"
      className="bg-transparent min-w-full mx-auto flex items-center justify-center"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 min-w-[350px] md:min-w-[1000px] max-w-7xl">
        <div
          className="relative overflow-hidden h-[600px] md:h-[650px]"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          ref={carouselRef}
        >
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                className="absolute top-0 w-full max-w-md"
                style={{
                  transformStyle: "preserve-3d",
                  perspective: 1200,
                  willChange: "transform, opacity",
                }}
                variants={cardVariants}
                initial="hidden"
                animate={getCardVariant(index)}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  opacity: { duration: 0.6 },
                  scale: { duration: 0.8, ease: [0.34, 1.56, 0.64, 1] },
                }}
              >
                <div
                  className="overflow-hidden bg-white dark:bg-card border border-border/40 shadow-lg hover:shadow-2xl hover:shadow-accent-gold/20 flex flex-col rounded-2xl transition-shadow duration-500"
                  style={{
                    height: `${cardHeight}px`,
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                  }}
                >
                  <div
                    className="relative bg-black p-6 flex items-center justify-center h-48 overflow-hidden"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10" />
                    <div className="relative z-20 text-center text-white">
                      <h3 className="text-2xl font-bold mb-2 font-serif">
                        {item.category.toUpperCase()}
                      </h3>
                      <div className="w-12 h-1 bg-accent-gold mx-auto mb-2" />
                      <p className="text-sm">{item.title}</p>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-secondary-light dark:text-white">
                        {item.title}
                      </h3>
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-accent-gold/10 text-accent-gold border border-accent-gold/20">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-secondary-light/70 dark:text-text-mist/70 text-sm mb-4 flex-grow">
                      {item.description}
                    </p>

                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-accent-gold/5 text-accent-gold rounded-full text-xs border border-accent-gold/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {item.link && (
                        <a
                          href={item.link}
                          className="text-accent-gold flex items-center hover:underline relative group"
                          onClick={() => {
                            if (item.link?.startsWith("/")) {
                              window.scrollTo(0, 0);
                            }
                          }}
                        >
                          <span className="relative z-10 font-medium">Learn more</span>
                          <ArrowRight className="ml-2 w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />
                          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-accent-gold transition-all duration-300 group-hover:w-full"></span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {!isMobile && (
            <>
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 dark:bg-primary-dark/90 rounded-full flex items-center justify-center text-secondary-light dark:text-text-mist hover:bg-white dark:hover:bg-primary-dark z-30 shadow-md transition-all hover:scale-110 border border-border/20"
                onClick={() =>
                  setActive((prev) => (prev - 1 + items.length) % items.length)
                }
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 dark:bg-primary-dark/90 rounded-full flex items-center justify-center text-secondary-light dark:text-text-mist hover:bg-white dark:hover:bg-primary-dark z-30 shadow-md transition-all hover:scale-110 border border-border/20"
                onClick={() => setActive((prev) => (prev + 1) % items.length)}
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center space-x-3 z-30">
            {items.map((_, idx) => (
              <button
                key={idx}
                className={`h-2 rounded-full transition-all duration-300 ${active === idx
                  ? "bg-accent-gold w-8"
                  : "bg-secondary-light/30 dark:bg-text-mist/30 w-2 hover:bg-accent-gold/50"
                  }`}
                onClick={() => setActive(idx)}
                aria-label={`Go to item ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeDCarousel;
