'use client';

import { useRef, useState } from 'react';
import { Play } from 'lucide-react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface VideoShowcaseProps {
    videoUrl?: string;
    posterUrl?: string;
    caption?: string;
    className?: string;
}

export default function VideoShowcase({
    videoUrl = '/video/mzhub.mp4',
    posterUrl,
    caption,
    className = ''
}: VideoShowcaseProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showCursor, setShowCursor] = useState(false);

    // Optimized cursor tracking
    const cursorX = useMotionValue(0);
    const cursorY = useMotionValue(0);

    const springConfig = { damping: 15, stiffness: 500, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const section = sectionRef.current;
        if (!section) return;

        const rect = section.getBoundingClientRect();
        cursorX.set(e.clientX - rect.left);
        cursorY.set(e.clientY - rect.top);
        setShowCursor(true);
    };

    const handleMouseLeave = () => {
        setShowCursor(false);
    };

    const handleClick = () => {
        const video = videoRef.current;
        if (!video) return;

        if (video.paused) {
            video.play();
            setIsPlaying(true);
        } else {
            video.pause();
            setIsPlaying(false);
        }
    };

    return (
        <div
            ref={sectionRef}
            className={`relative w-full min-h-[450px] cursor-none ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            {/* Video positioned bottom-left, shifted further left */}
            <div className="absolute bottom-8 -left-12 w-full max-w-2xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="relative rounded-2xl overflow-hidden bg-background/50 dark:bg-background/30 border-2 border-border/50 dark:border-border/30 shadow-2xl"
                    style={{ aspectRatio: '16/10' }}
                >
                    <video
                        ref={videoRef}
                        className="w-full h-full object-cover"
                        loop
                        muted
                        playsInline
                        poster={posterUrl}
                    >
                        <source src={videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    {/* Theme-aware gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 dark:from-black/50 via-transparent to-transparent pointer-events-none" />

                    {/* Caption */}
                    {caption && (
                        <div className="absolute bottom-4 left-4 right-4">
                            <p className="text-white dark:text-text-mist text-sm font-medium drop-shadow-lg">
                                {caption}
                            </p>
                        </div>
                    )}
                </motion.div>
            </div>

            {/* Cursor-following play button */}
            {showCursor && (
                <motion.div
                    className="fixed pointer-events-none z-50 will-change-transform"
                    style={{
                        left: 0,
                        top: 0,
                        x: cursorXSpring,
                        y: cursorYSpring,
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                >
                    <div className="relative" style={{ transform: 'translate(-50%, -50%)' }}>
                        <div className="w-20 h-20 rounded-full bg-accent-gold flex items-center justify-center shadow-2xl">
                            {isPlaying ? (
                                <div className="flex gap-1.5">
                                    <div className="w-1.5 h-7 bg-secondary-dark dark:bg-primary-dark rounded-full" />
                                    <div className="w-1.5 h-7 bg-secondary-dark dark:bg-primary-dark rounded-full" />
                                </div>
                            ) : (
                                <Play
                                    className="w-8 h-8 text-secondary-dark dark:text-primary-dark ml-0.5"
                                    fill="currentColor"
                                    strokeWidth={0}
                                />
                            )}
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
    );
}
