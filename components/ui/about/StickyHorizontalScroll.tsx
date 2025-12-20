"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/shared/utils";

type CardItem = {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    footer: string;
    number: string;
};

interface StickyHorizontalScrollProps {
    items: CardItem[];
    className?: string;
}

const StickyHorizontalScroll = ({ items, className }: StickyHorizontalScrollProps) => {
    const targetRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    const x = useTransform(
        scrollYProgress,
        [0, 1],
        ["0%", `-${(items.length - 1) * 100}%`]
    );

    return (
        <div ref={targetRef} className={cn("relative", className)} style={{ height: `${items.length * 100}vh` }}>
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-8 md:gap-16 px-8 md:px-24">
                    {items.map((item) => (
                        <Card key={item.id} item={item} />
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

const Card = ({ item }: { item: CardItem }) => {
    return (
        <div className="relative h-[65vh] w-[85vw] md:w-[70vw] lg:w-[55vw] shrink-0 overflow-hidden rounded-[32px] md:rounded-[40px] border-2 border-secondary-light/20 dark:border-secondary-dark/60 bg-white dark:bg-secondary-dark/90 p-8 md:p-12 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
            <div className="flex h-full flex-col justify-between">
                <div>
                    <div className="flex justify-between items-start mb-6 md:mb-8">
                        <div className="h-14 w-14 md:h-16 md:w-16 rounded-2xl bg-spiritual-indigo-100 dark:bg-spiritual-indigo-900/30 flex items-center justify-center">
                            <svg
                                className="w-7 h-7 md:w-8 md:h-8 text-spiritual-indigo-600 dark:text-spiritual-indigo-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                />
                            </svg>
                        </div>
                        <span className="text-4xl md:text-5xl font-bold text-secondary-light/20 dark:text-text-mist/20">
                            {item.number}
                        </span>
                    </div>

                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-secondary-light dark:text-white mb-4 md:mb-6 leading-tight">
                        {item.title}
                    </h3>
                    <p className="text-xl md:text-2xl lg:text-3xl font-medium text-spiritual-indigo-600 dark:text-spiritual-indigo-400 mb-6 md:mb-8">
                        {item.subtitle}
                    </p>
                    <p className="text-lg md:text-xl lg:text-2xl text-secondary-light/80 dark:text-text-mist/80 leading-relaxed">
                        {item.description}
                    </p>
                </div>

                <div className="pt-6 md:pt-8 border-t border-secondary-light/20 dark:border-secondary-dark/40">
                    <p className="text-xs md:text-sm lg:text-base font-medium text-secondary-light/60 dark:text-text-mist/60 uppercase tracking-[0.2em]">
                        {item.footer}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default StickyHorizontalScroll;
