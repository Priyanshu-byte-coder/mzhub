"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial: "MZHub has helped us reach devotees worldwide. We serve 5x more seekers with personalized guidance.",
    by: "Swami Prakash, Spiritual Director at Vedanta Center",
    imgSrc: "https://i.pravatar.cc/150?img=1"
  },
  { 
    tempId: 1,
    testimonial: "I'm confident our sacred teachings are protected with MZHub. The doctrinal alignment is unmatched.",
    by: "Rabbi David Cohen, Head Rabbi at Temple Beth Shalom",
    imgSrc: "https://i.pravatar.cc/150?img=2"
  },
  {
    tempId: 2,
    testimonial: "Before MZHub, we struggled to preserve our guru's teachings digitally. Now they reach thousands!",
    by: "Sister Maria Santos, Abbess at Sacred Heart Monastery",
    imgSrc: "https://i.pravatar.cc/150?img=3"
  },
  {
    tempId: 3,
    testimonial: "MZHub makes managing our spiritual community seamless. Our congregation engagement has tripled!",
    by: "Pastor Michael Thompson, Senior Pastor at Grace Fellowship",
    imgSrc: "https://i.pravatar.cc/150?img=4"
  },
  {
    tempId: 4,
    testimonial: "If I could give 11 stars, I'd give 12. MZHub perfectly serves our temple's mission.",
    by: "Pandit Rajesh Kumar, Head Priest at Shiva Mandir",
    imgSrc: "https://i.pravatar.cc/150?img=5"
  },
  {
    tempId: 5,
    testimonial: "SO HAPPY WE FOUND MZHub! It's saved me 100+ hours organizing our scripture archives.",
    by: "Imam Hassan Al-Rashid, Imam at Al-Noor Islamic Center",
    imgSrc: "https://i.pravatar.cc/150?img=6"
  },
  {
    tempId: 6,
    testimonial: "We were hesitant about AI in faith contexts, but MZHub's ethical approach won us over completely.",
    by: "Reverend Sarah Johnson, Minister at First United Church",
    imgSrc: "https://i.pravatar.cc/150?img=7"
  },
  {
    tempId: 7,
    testimonial: "The community insights from MZHub are invaluable. We understand our sangha's needs like never before.",
    by: "Bhante Sujato, Abbot at Lotus Buddhist Monastery",
    imgSrc: "https://i.pravatar.cc/150?img=8"
  },
  {
    tempId: 8,
    testimonial: "It's simply the best platform for faith-based digital transformation. Period.",
    by: "Giani Harpreet Singh, Granthi at Gurudwara Singh Sabha",
    imgSrc: "https://i.pravatar.cc/150?img=9"
  },
  {
    tempId: 9,
    testimonial: "We adopted MZHub three years ago and it's been transformative for our ministry.",
    by: "Father Gabriel Ortiz, Parish Priest at St. Augustine Cathedral",
    imgSrc: "https://i.pravatar.cc/150?img=10"
  },
  {
    tempId: 10,
    testimonial: "I've been searching for a solution like MZHub for YEARS. Finally, technology that respects tradition!",
    by: "Dr. Priya Sharma, Director at Interfaith Spiritual Center",
    imgSrc: "https://i.pravatar.cc/150?img=11"
  },
  {
    tempId: 11,
    testimonial: "So intuitive! Our entire administrative team was trained on MZHub in under 15 minutes.",
    by: "Deacon James Miller, Operations Manager at Holy Cross Church",
    imgSrc: "https://i.pravatar.cc/150?img=12"
  },
  {
    tempId: 12,
    testimonial: "MZHub's support team understands our spiritual mission. They're always there when needed.",
    by: "Sister Aisha Rahman, Community Coordinator at Masjid Al-Falah",
    imgSrc: "https://i.pravatar.cc/150?img=13"
  },
  {
    tempId: 13,
    testimonial: "Our operational efficiency has skyrocketed since implementing MZHub. More time for spiritual work!",
    by: "Roshi Kenji Tanaka, Zen Master at Mountain Gate Temple",
    imgSrc: "https://i.pravatar.cc/150?img=14"
  },
  {
    tempId: 14,
    testimonial: "MZHub revolutionized how we share the Dharma. It's truly a game-changer for our ashram!",
    by: "Acharya Deepak Verma, Spiritual Teacher at Yoga Ashram",
    imgSrc: "https://i.pravatar.cc/150?img=15"
  },
  {
    tempId: 15,
    testimonial: "As our congregation grows, MZHub scales effortlessly. It grows with our spiritual community.",
    by: "Bishop Martin Wesley, Episcopal Bishop at Trinity Cathedral",
    imgSrc: "https://i.pravatar.cc/150?img=16"
  },
  {
    tempId: 16,
    testimonial: "I appreciate how MZHub respects our traditions while embracing innovation. Perfect balance!",
    by: "Cantor Rebecca Goldstein, Cantor at Beth Israel Synagogue",
    imgSrc: "https://i.pravatar.cc/150?img=17"
  },
  {
    tempId: 17,
    testimonial: "The return on investment is incredible. MZHub paid for itself within the first quarter!",
    by: "Dr. Ahmed Hassan, Director at Islamic Studies Institute",
    imgSrc: "https://i.pravatar.cc/150?img=18"
  },
  {
    tempId: 18,
    testimonial: "MZHub is powerful yet simple. It's the perfect tool for our digital ministry initiatives.",
    by: "Minister Grace Chen, Youth Minister at Community Fellowship",
    imgSrc: "https://i.pravatar.cc/150?img=19"
  },
  {
    tempId: 19,
    testimonial: "We evaluated many platforms, but MZHub stands out for reliability and doctrinal integrity.",
    by: "Satguru Baba Nirmal, Spiritual Guide at Divine Light Mission",
    imgSrc: "https://i.pravatar.cc/150?img=20"
  }
];

interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonials[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  position,
  testimonial,
  handleMove,
  cardSize
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter
          ? "z-10 bg-primary text-primary-foreground border-primary"
          : "z-0 bg-card text-card-foreground border-border hover:border-primary/50"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px hsl(var(--border))" : "0px 0px 0px 0px transparent"
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-border"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2
        }}
      />
      <img
        src={testimonial.imgSrc}
        alt={`${testimonial.by.split(',')[0]}`}
        className="mb-4 h-14 w-12 bg-muted object-cover object-top"
        style={{
          boxShadow: "3px 3px 0px hsl(var(--background))"
        }}
      />
      <h3 className={cn(
        "text-base sm:text-xl font-medium",
        isCenter ? "text-primary-foreground" : "text-foreground"
      )}>
        "{testimonial.testimonial}"
      </h3>
      <p className={cn(
        "absolute bottom-8 left-8 right-8 mt-2 text-sm italic",
        isCenter ? "text-primary-foreground/80" : "text-muted-foreground"
      )}>
        - {testimonial.by}
      </p>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Auto-rotation effect
  useEffect(() => {
    const autoRotateInterval = setInterval(() => {
      handleMove(1); // Move forward by 1
    }, 2500); // Rotate every 4 seconds

    return () => clearInterval(autoRotateInterval);
  }, [testimonialsList]);

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: 600 }}
    >
      {testimonialsList.map((testimonial, index) => {
        const position = testimonialsList.length % 2
          ? index - (testimonialsList.length + 1) / 2
          : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-background border-2 border-border hover:bg-primary hover:text-primary-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-background border-2 border-border hover:bg-primary hover:text-primary-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};