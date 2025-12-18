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
    videoUrl = '/home/video/MZHub.mp4',
    posterUrl,
    caption,
    className = ''
}: VideoShowcaseProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const videoContainerRef = useRef<HTMLDivElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showCursor, setShowCursor] = useState(false);

    // Cursor/touch tracking with bounds constraints
    const cursorX = useMotionValue(0);
    const cursorY = useMotionValue(0);

    const springConfig = { damping: 15, stiffness: 500, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    // Constrain position within section bounds
    const constrainPosition = (clientX: number, clientY: number) => {
        const section = videoContainerRef.current;
        if (!section) return { x: 0, y: 0 };

        const rect = section.getBoundingClientRect();
        let x = clientX - rect.left;
        let y = clientY - rect.top;

        // Button radius (half of button size: 80px/2 = 40px for desktop, 64px/2 = 32px for mobile)
        // Using 40px as safe constraint for both
        const buttonRadius = 40;
        x = Math.max(buttonRadius, Math.min(x, rect.width - buttonRadius));
        y = Math.max(buttonRadius, Math.min(y, rect.height - buttonRadius));

        return { x, y };
    };

    // Mouse move handler
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { x, y } = constrainPosition(e.clientX, e.clientY);
        cursorX.set(x);
        cursorY.set(y);
        setShowCursor(true);
    };

    // Touch move handler for mobile
    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        if (e.touches.length > 0) {
            const touch = e.touches[0];
            const { x, y } = constrainPosition(touch.clientX, touch.clientY);
            cursorX.set(x);
            cursorY.set(y);
            setShowCursor(true);
        }
    };

    // Touch start handler
    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        if (e.touches.length > 0) {
            const touch = e.touches[0];
            const { x, y } = constrainPosition(touch.clientX, touch.clientY);
            cursorX.set(x);
            cursorY.set(y);
            setShowCursor(true);
        }
    };

    const handleMouseLeave = () => {
        setShowCursor(false);
    };

    const handleTouchEnd = () => {
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
            className={`relative w-full min-h-[500px] md:min-h-[600px] ${className}`}
        >
            {/* Video - responsive positioning */}
            <div className="absolute bottom-2 md:bottom-6 w-full px-4 md:px-0 flex justify-center">
                <motion.div
                    ref={videoContainerRef}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="relative rounded-xl md:rounded-2xl overflow-hidden bg-background/50 dark:bg-background/30 border-2 border-border/50 dark:border-border/30 shadow-2xl w-full md:max-w-5xl md:cursor-none"
                    style={{ aspectRatio: '16/10' }}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    onTouchMove={handleTouchMove}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                    onClick={handleClick}
                >
                    <video
                        ref={videoRef}
                        className="w-full h-full object-cover"
                        loop
                        playsInline
                        poster={posterUrl}
                    >
                        <source src={videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    {/* Theme-aware gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 dark:from-black/50 via-transparent to-transparent pointer-events-none" />

                    {/* Caption - responsive text size */}
                    {caption && (
                        <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4">
                            <p className="text-white dark:text-text-mist text-xs md:text-sm font-medium drop-shadow-lg">
                                {caption}
                            </p>
                        </div>
                    )}

                    {/* Floating play button - desktop only */}
                    {showCursor && (
                        <motion.div
                            className="hidden md:block absolute pointer-events-none z-50 will-change-transform"
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
                                {/* Responsive button size */}
                                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-accent-gold flex items-center justify-center shadow-2xl">
                                    {isPlaying ? (
                                        <div className="flex gap-1 md:gap-1.5">
                                            <div className="w-1 md:w-1.5 h-5 md:h-7 bg-secondary-dark dark:bg-primary-dark rounded-full" />
                                            <div className="w-1 md:w-1.5 h-5 md:h-7 bg-secondary-dark dark:bg-primary-dark rounded-full" />
                                        </div>
                                    ) : (
                                        <Play
                                            className="w-6 h-6 md:w-8 md:h-8 text-secondary-dark dark:text-primary-dark ml-0.5"
                                            fill="currentColor"
                                            strokeWidth={0}
                                        />
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </div>
    );
}
