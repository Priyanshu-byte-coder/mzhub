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
    
    if (slides.length > 0 && wrapperRef.current) {
      gsap.to(slides, {
        xPercent: -100 * (slides.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: wrapperRef.current,
          pin: true,
          scrub: true,
          snap: {
            snapTo: 1 / (slides.length - 1),
            duration: 0.1,
          },
          end: "+=4000",
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
        {items.map((card) => (
          <div
            key={card.id}
            className="slide flex-shrink-0 w-screen h-full flex items-center justify-center px-8"
          >
            <div className="relative h-[500px] w-full max-w-[700px] overflow-hidden rounded-[32px] border border-secondary-light/20 dark:border-secondary-dark/60 bg-white dark:bg-secondary-dark/90 shadow-lg">
              <div className="absolute inset-0 z-0 p-8 md:p-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="h-12 w-12 rounded-xl bg-spiritual-indigo-100 dark:bg-spiritual-indigo-900/30 flex items-center justify-center">
                    <svg className="w-6 h-6 text-spiritual-indigo-600 dark:text-spiritual-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <span className="text-3xl font-bold text-secondary-light/40 dark:text-text-mist/40">{card.number}</span>
                </div>
                
                <h3 className="text-3xl font-semibold text-secondary-light dark:text-white mb-4">
                  {card.title}
                </h3>
                
                <p className="text-xl font-medium text-spiritual-indigo-600 dark:text-spiritual-indigo-400 mb-4">
                  {card.subtitle}
                </p>
                
                <p className="text-lg text-secondary-light/80 dark:text-text-mist/80 leading-relaxed mb-6">
                  {card.description}
                </p>
                
                <div className="absolute bottom-8 left-8 right-8 pt-6 border-t border-secondary-light/20 dark:border-secondary-dark/40">
                  <p className="text-sm text-secondary-light/60 dark:text-text-mist/60 uppercase tracking-wider">
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
