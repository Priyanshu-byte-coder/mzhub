"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type CardItem = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  footer: string;
  number: string;
};

type GSAPHorizontalScrollProps = {
  items: CardItem[];
};

const GSAPHorizontalScroll: React.FC<GSAPHorizontalScrollProps> = ({ items }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only initialize GSAP on desktop (768px and above)
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    gsap.registerPlugin(ScrollTrigger);

    const slides = gsap.utils.toArray(".slide");
    if (slides.length > 0 && wrapperRef.current && containerRef.current) {
      // Calculate total scroll distance based on container width
      const containerWidth = containerRef.current.scrollWidth;
      const wrapperWidth = wrapperRef.current.offsetWidth;
      const scrollDistance = containerWidth - wrapperWidth;
      const cardWidth = containerRef.current ? containerRef.current.scrollWidth / slides.length : 1;
      gsap.to(slides, {
        x: () => `-${scrollDistance}`,
        ease: "none",
        scrollTrigger: {
          trigger: wrapperRef.current,
          pin: true,
          scrub: true,
          snap: {
            snapTo: (raw, self) => {
              // Snap to the nearest card index
              const progress = self?.progress ?? 0;
              const nearestIndex = Math.round(progress * (slides.length - 1));
              return nearestIndex / (slides.length - 1);
            },
            duration: 0.2,
          },
          end: () => `+=${scrollDistance}`,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [items]);

  return (
    <div 
      ref={wrapperRef} 
      className="wrapper relative w-full h-screen overflow-hidden"
      style={{ 
        transition: "0s",
        overscrollBehavior: "none"
      }}
    >
      <div 
        ref={containerRef}
        className="flex h-full items-center"
      >
        {items.map((card, idx) => (
          <div
            key={card.id}
            className="slide flex-shrink-0 w-[95vw] md:w-[600px] h-full flex items-center justify-center px-2 md:px-4 relative"
            style={{ marginRight: idx < items.length - 1 ? '6rem' : 0 }}
          >
            {/* Horizontal connector line between cards (except last) */}
            {idx < items.length - 1 && (
              <div
                className="hidden md:block absolute top-1/2 left-full z-20 w-0 h-0 -translate-y-1/2"
                style={{ pointerEvents: 'none' }}>
                <div
                  className="flex items-center"
                  style={{
                    position: 'absolute',
                    left: 'calc(-3rem)', // start line even further from card edge
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '8.5rem', // even longer line to bridge bigger gap
                    minWidth: '7rem',
                  }}
                >
                  {/* Start node */}
                  <span className="block h-3 w-3 rounded-full bg-accent-gold shadow-md" style={{ boxShadow: '0 0 8px 2px #ffe06655', marginLeft: 0, marginRight: 0 }} />
                  {/* Line */}
                  <span className="flex-1 h-1 bg-gradient-to-r from-accent-gold via-yellow-200 to-accent-gold opacity-80 shadow-sm" style={{ boxShadow: '0 1px 8px 0 #ffe06633', marginLeft: 0, marginRight: 0 }} />
                  {/* End node */}
                  <span className="block h-3 w-3 rounded-full bg-accent-gold shadow-md" style={{ marginRight: 0, boxShadow: '0 0 8px 2px #ffe06655' }} />
                </div>
              </div>
            )}
            <div className="relative h-[480px] md:h-[500px] w-full max-w-[440px] md:max-w-[480px] overflow-hidden rounded-[32px] md:rounded-[40px] border border-accent-gold/20 dark:border-accent-gold/30 bg-gradient-to-br from-white via-[#f7f9fc] to-[#fff8e7] dark:from-[#23263a] dark:via-[#181a29] dark:to-[#23263a] shadow-2xl hover:shadow-[0_8px_40px_0_rgba(255,215,64,0.10)] transition-shadow duration-300">
              <div className="absolute inset-0 z-0 p-7 md:p-12 flex flex-col">
                <div className="flex justify-between items-center mb-4 md:mb-6">
                  <div className="h-12 w-12 md:h-14 md:w-14 rounded-2xl bg-spiritual-indigo-100 dark:bg-spiritual-indigo-900/30 flex items-center justify-center shadow-sm">
                    <svg className="w-6 h-6 md:w-7 md:h-7 text-spiritual-indigo-600 dark:text-spiritual-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <span className="text-2xl md:text-3xl font-extrabold text-accent-gold/70 dark:text-accent-gold/80 drop-shadow-sm">{card.number}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-spiritual-indigo-700 dark:text-accent-gold mb-2 md:mb-4 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-base md:text-xl font-semibold text-spiritual-indigo-500 dark:text-accent-gold mb-2 md:mb-4">
                  {card.subtitle}
                </p>
                <p className="text-sm md:text-lg text-secondary-light/90 dark:text-text-mist/90 leading-relaxed mb-4 md:mb-6">
                  {card.description}
                </p>
                <div className="absolute bottom-6 md:bottom-8 left-7 md:left-12 right-7 md:right-12 pt-4 md:pt-6 border-t border-accent-gold/20 dark:border-accent-gold/30">
                  <p className="text-xs md:text-sm text-accent-gold/80 dark:text-accent-gold/80 uppercase tracking-wider font-semibold">
                    {card.footer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GSAPHorizontalScroll;
