"use client";

import { cn } from "@/lib/shared/utils";
import { motion, useMotionValue } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

const SCROLL_TIMEOUT_OFFSET = 100;
const MIN_SCROLL_INTERVAL = 300;
const SCROLL_THRESHOLD = 20;
const TOUCH_SCROLL_THRESHOLD = 100;
const SCALE_FACTOR = 0.08;
const MIN_SCALE = 0.08;
const MAX_SCALE = 2;
const HOVER_SCALE_MULTIPLIER = 1.02;
const CARD_PADDING = 100;

type CardItem = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  footer: string;
  number: string;
};

export type ScrollableCardStackProps = {
  items: CardItem[];
  cardHeight?: number;
  perspective?: number;
  transitionDuration?: number;
  className?: string;
};

const ScrollableCardStack: React.FC<ScrollableCardStackProps> = ({
  items,
  cardHeight = 384,
  perspective = 1000,
  transitionDuration = 180,
  className,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollY = useMotionValue(0);
  const lastScrollTime = useRef(0);

  // Calculate the total number of items
  const totalItems = items.length;
  const maxIndex = totalItems - 1;

  // Constants for visual effects - matching reference code exactly
  const FRAME_OFFSET = -30;
  const FRAMES_VISIBLE_LENGTH = 3;
  const SNAP_DISTANCE = 50;

  // Clamp function from reference code - memoized to prevent recreation
  const clamp = useCallback(
    (val: number, [min, max]: [number, number]): number =>
      Math.min(Math.max(val, min), max),
    []
  );

  // Controlled scroll function to move exactly one card
  const scrollToCard = useCallback(
    (direction: 1 | -1) => {
      if (isScrolling) {
        return;
      }

      const now = Date.now();
      const timeSinceLastScroll = now - lastScrollTime.current;

      if (timeSinceLastScroll < MIN_SCROLL_INTERVAL) {
        return;
      }

      const newIndex = clamp(currentIndex + direction, [0, maxIndex]);

      if (newIndex !== currentIndex) {
        lastScrollTime.current = now;
        setIsScrolling(true);
        setCurrentIndex(newIndex);
        scrollY.set(newIndex * SNAP_DISTANCE);

        setTimeout(() => {
          setIsScrolling(false);
        }, transitionDuration + SCROLL_TIMEOUT_OFFSET);
      }
    },
    [currentIndex, maxIndex, scrollY, isScrolling, transitionDuration, clamp]
  );

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle scroll events with improved responsiveness
  const handleScroll = useCallback(
    (deltaY: number) => {
      if (isDragging || isScrolling) {
        return;
      }

      if (Math.abs(deltaY) < SCROLL_THRESHOLD) {
        return;
      }

      const scrollDirection = deltaY > 0 ? 1 : -1;
      scrollToCard(scrollDirection);
    },
    [isDragging, isScrolling, scrollToCard]
  );

  // Handle wheel events
  const handleWheel = useCallback(
    (e: WheelEvent) => {
      const scrollDirection = e.deltaY > 0 ? 1 : -1;
      const atStart = currentIndex === 0 && scrollDirection === -1;
      const atEnd = currentIndex === maxIndex && scrollDirection === 1;
      
      // Allow page scroll when at boundaries
      if (atStart || atEnd) {
        return;
      }
      
      e.preventDefault();
      handleScroll(e.deltaY);
    },
    [handleScroll, currentIndex, maxIndex]
  );

  // Handle keyboard navigation - improved with reference code logic
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (isScrolling) {
        return;
      }

      switch (e.key) {
        case "ArrowUp":
        case "ArrowLeft": {
          if (currentIndex === 0) {
            // Allow page scroll when at first card
            return;
          }
          e.preventDefault();
          scrollToCard(-1);
          break;
        }
        case "ArrowDown":
        case "ArrowRight": {
          if (currentIndex === maxIndex) {
            // Allow page scroll when at last card
            return;
          }
          e.preventDefault();
          scrollToCard(1);
          break;
        }
        case "Home": {
          e.preventDefault();
          if (currentIndex !== 0) {
            setIsScrolling(true);
            setCurrentIndex(0);
            scrollY.set(0);
            setTimeout(() => {
              setIsScrolling(false);
            }, transitionDuration + SCROLL_TIMEOUT_OFFSET);
          }
          break;
        }
        case "End": {
          e.preventDefault();
          if (currentIndex !== maxIndex) {
            setIsScrolling(true);
            setCurrentIndex(maxIndex);
            scrollY.set(maxIndex * SNAP_DISTANCE);
            setTimeout(() => {
              setIsScrolling(false);
            }, transitionDuration + SCROLL_TIMEOUT_OFFSET);
          }
          break;
        }
        default: {
          // No action for other keys
          break;
        }
      }
    },
    [
      currentIndex,
      maxIndex,
      scrollY,
      isScrolling,
      scrollToCard,
      transitionDuration,
    ]
  );

  // Handle touch events for mobile
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const touchStartIndex = useRef(0);
  const touchStartTime = useRef(0);
  const touchMoved = useRef(false);
  const swipeDirection = useRef<'horizontal' | 'vertical' | null>(null);

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
      touchStartY.current = e.touches[0].clientY;
      touchStartIndex.current = currentIndex;
      touchStartTime.current = Date.now();
      touchMoved.current = false;
      swipeDirection.current = null;
      setIsDragging(true);
    },
    [currentIndex]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isDragging || isScrolling) {
        return;
      }

      const touchX = e.touches[0].clientX;
      const touchY = e.touches[0].clientY;
      const deltaX = touchStartX.current - touchX;
      const deltaY = touchStartY.current - touchY;
      
      // Mobile: horizontal swipe for cards, vertical for page scroll
      if (isMobile) {
        // Determine swipe direction on first significant movement
        if (!swipeDirection.current && (Math.abs(deltaX) > 10 || Math.abs(deltaY) > 10)) {
          if (Math.abs(deltaX) > Math.abs(deltaY)) {
            swipeDirection.current = 'horizontal';
          } else {
            swipeDirection.current = 'vertical';
          }
        }
        
        // If vertical swipe, allow page scroll
        if (swipeDirection.current === 'vertical') {
          setIsDragging(false);
          return;
        }
        
        // If horizontal swipe, handle card navigation
        if (swipeDirection.current === 'horizontal' && Math.abs(deltaX) > TOUCH_SCROLL_THRESHOLD && !touchMoved.current) {
          e.preventDefault();
          const scrollDirection = deltaX > 0 ? 1 : -1;
          
          // Check if at boundaries
          const atStart = currentIndex === 0 && scrollDirection === -1;
          const atEnd = currentIndex === maxIndex && scrollDirection === 1;
          
          if (!atStart && !atEnd) {
            scrollToCard(scrollDirection);
            touchMoved.current = true;
          }
        }
      } else {
        // Desktop: vertical swipe for card navigation (original behavior)
        const scrollDirection = deltaY > 0 ? 1 : -1;
        
        // Check if at boundaries
        const atStart = currentIndex === 0 && scrollDirection === -1;
        const atEnd = currentIndex === maxIndex && scrollDirection === 1;
        
        // Allow page scroll when at boundaries
        if (atStart || atEnd) {
          setIsDragging(false);
          return;
        }

        if (Math.abs(deltaY) > TOUCH_SCROLL_THRESHOLD && !touchMoved.current) {
          e.preventDefault();
          scrollToCard(scrollDirection);
          touchMoved.current = true;
        }
      }
    },
    [isDragging, isScrolling, scrollToCard, currentIndex, maxIndex, isMobile]
  );

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
    touchMoved.current = false;
    swipeDirection.current = null;
  }, []);

  // Set up event listeners
  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, [handleWheel]);

  // Snap to current index when not dragging
  useEffect(() => {
    if (!isDragging) {
      scrollY.set(currentIndex * SNAP_DISTANCE);
    }
  }, [currentIndex, isDragging, scrollY]);

  // Calculate transform for each card based on the reference code
  const getCardTransform = useCallback(
    (index: number) => {
      const offsetIndex = index - currentIndex;

      // Apply blur effect for cards behind the current one - matching reference exactly
      const blur = currentIndex > index ? 2 : 0;

      // Opacity based on distance - improved logic from reference
      const opacity = currentIndex > index ? 0 : 1;

      // Scale with improved calculation inspired by reference - using clamp function
      const scale = clamp(1 - offsetIndex * SCALE_FACTOR, [
        MIN_SCALE,
        MAX_SCALE,
      ]);

      // Vertical offset with improved calculation - matching reference exactly
      const y = clamp(offsetIndex * FRAME_OFFSET, [
        FRAME_OFFSET * FRAMES_VISIBLE_LENGTH,
        Number.POSITIVE_INFINITY,
      ]);

      // Z-index for proper layering - matching reference pattern
      const zIndex = items.length - index;

      return {
        y,
        scale,
        opacity,
        blur,
        zIndex,
      };
    },
    [currentIndex, items.length, clamp]
  );

  return (
    <section
      aria-atomic="true"
      aria-label="Scrollable card stack"
      aria-live="polite"
      className={cn("relative mx-auto h-fit w-full px-4 md:px-0 md:w-fit md:min-w-[300px]", className)}
    >
      <div
        aria-label="Scrollable card container"
        className="h-full w-full"
        onKeyDown={handleKeyDown}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
        onTouchStart={handleTouchStart}
        ref={containerRef}
        role="application"
        style={{
          minHeight: `${cardHeight + CARD_PADDING}px`,
          perspective: `${perspective}px`,
          perspectiveOrigin: "center 60%",
          touchAction: "pan-y",
        }}
        tabIndex={0}
      >
        {items.map((item, i) => {
          const transform = getCardTransform(i);
          const isActive = i === currentIndex;
          const isHovered = hoveredIndex === i;

          return (
            <motion.div
              animate={{
                y: `calc(-50% + ${transform.y}px)`,
                scale: transform.scale,
                x: "-50%",
              }}
              aria-hidden={!isActive}
              className="absolute top-1/2 left-1/2 w-[calc(100%-2rem)] md:w-full max-w-3xl overflow-hidden rounded-2xl md:rounded-[32px] border border-secondary-light/20 dark:border-secondary-dark/60 bg-white dark:bg-secondary-dark/90 shadow-lg"
              data-active={isActive}
              initial={false}
              key={`scrollable-card-${item.id}`}
              onBlur={() => setHoveredIndex(null)}
              onFocus={() => isActive && setHoveredIndex(i)}
              onMouseEnter={() => isActive && setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                height: `${cardHeight}px`,
                zIndex: transform.zIndex,
                pointerEvents: isActive ? "auto" : "none",
                transformOrigin: "center center",
                willChange: "opacity, filter, transform",
                filter: `blur(${transform.blur}px)`,
                opacity: transform.opacity,
                transitionProperty: "opacity, filter",
                transitionDuration: "200ms",
                transitionTimingFunction: "ease-in-out",
                borderWidth: `${2 / transform.scale}px`,
              }}
              tabIndex={isActive ? 0 : -1}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 20,
                mass: 0.5,
              }}
              whileHover={
                isActive
                  ? {
                      scale: transform.scale * HOVER_SCALE_MULTIPLIER,
                      transition: {
                        type: "spring",
                        stiffness: 250,
                        damping: 20,
                        mass: 0.5,
                      },
                    }
                  : {}
              }
            >
              {/* Card Content */}
              <div
                className={cn(
                  "flex flex-col w-full h-full rounded-2xl md:rounded-[32px] p-6 md:p-8 lg:p-10 bg-white dark:bg-secondary-dark/90 transition-all duration-200",
                  isHovered && "shadow-xl"
                )}
              >
                {/* Scroll indicator */}
                {isScrolling && isActive && (
                  <div className="-top-1 -translate-x-1/2 absolute left-1/2 h-1 w-8 rounded-full bg-spiritual-indigo-600 dark:bg-spiritual-indigo-400 opacity-75" />
                )}

                <div className="flex justify-between items-start mb-4 md:mb-6">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg md:rounded-xl bg-spiritual-indigo-100 dark:bg-spiritual-indigo-900/30 flex items-center justify-center">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-spiritual-indigo-600 dark:text-spiritual-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <span className="text-xl md:text-2xl lg:text-3xl font-bold text-secondary-light/40 dark:text-text-mist/40">{item.number}</span>
                </div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-secondary-light dark:text-white mb-3 md:mb-4">
                  {item.title}
                </h3>
                <p className="text-base md:text-lg lg:text-xl font-medium text-spiritual-indigo-600 dark:text-spiritual-indigo-400 mb-3 md:mb-4">
                  {item.subtitle}
                </p>
                <p className="text-sm md:text-base lg:text-lg text-secondary-light/80 dark:text-text-mist/80 leading-relaxed mb-4 md:mb-6">
                  {item.description}
                </p>
                <div className="pt-4 md:pt-6 border-t border-secondary-light/20 dark:border-secondary-dark/40 mt-auto">
                  <p className="text-[10px] md:text-xs lg:text-sm text-secondary-light/60 dark:text-text-mist/60 uppercase tracking-wider">
                    {item.footer}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* Navigation indicators */}
        <div
          aria-label="Card navigation"
          className="-translate-x-1/2 absolute bottom-4 left-1/2 flex transform space-x-2"
          role="tablist"
        >
          {Array.from({ length: items.length }, (_, i) => (
            <motion.button
              aria-label={`Go to card ${i + 1} of ${items.length}`}
              aria-selected={i === currentIndex}
              className={cn(
                "h-2 w-2 rounded-full transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-spiritual-indigo-600 dark:focus:ring-spiritual-indigo-400 focus:ring-offset-1",
                i === currentIndex
                  ? "scale-125 bg-spiritual-indigo-600 dark:bg-spiritual-indigo-400"
                  : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
              )}
              key={`scrollable-indicator-${items[i]?.id || i}`}
              onClick={() => {
                if (i !== currentIndex && !isScrolling) {
                  setIsScrolling(true);
                  setCurrentIndex(i);
                  scrollY.set(i * SNAP_DISTANCE);
                  setTimeout(() => {
                    setIsScrolling(false);
                  }, transitionDuration + SCROLL_TIMEOUT_OFFSET);
                }
              }}
              role="tab"
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 20,
                mass: 0.5,
              }}
              type="button"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>

        {/* Instructions for screen readers */}
        <div aria-live="polite" className="sr-only">
          {`Card ${currentIndex + 1} of ${items.length} selected. Use arrow keys to navigate one card at a time, or click the dots below.`}
        </div>
      </div>
    </section>
  );
};

export default ScrollableCardStack;
