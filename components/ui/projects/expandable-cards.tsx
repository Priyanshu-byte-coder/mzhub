"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/shared/use-outside-click";
import Link from "next/link";

export default function ExpandableCardDemo() {
    const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
        null
    );
    const ref = useRef<HTMLDivElement>(null);
    const id = useId();

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setActive(false);
            }
        }

        if (active && typeof active === "object") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    useOutsideClick(ref, () => setActive(null));

    return (
        <>
            <AnimatePresence>
                {active && typeof active === "object" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/30 dark:bg-black/50 backdrop-blur-sm h-full w-full z-10"
                    />
                )}
            </AnimatePresence>
            <AnimatePresence>
                {active && typeof active === "object" ? (
                    <div className="fixed inset-0 grid place-items-center z-[100] p-4">
                        <motion.button
                            key={`button-${active.title}-${id}`}
                            layout
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0,
                                transition: {
                                    duration: 0.05,
                                },
                            }}
                            className="flex absolute top-6 right-6 lg:hidden items-center justify-center bg-white dark:bg-neutral-800 rounded-full h-8 w-8 shadow-lg z-10"
                            onClick={() => setActive(null)}
                        >
                            <CloseIcon />
                        </motion.button>
                        <motion.div
                            layoutId={`card-${active.title}-${id}`}
                            ref={ref}
                            className="w-full max-w-[500px] max-h-[85vh] md:max-h-[90%] flex flex-col bg-white dark:bg-primary-dark rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-2xl"
                        >
                            <div>
                                <div className="flex justify-between items-start p-4">
                                    <div className="">
                                        <motion.h3
                                            layoutId={`title-${active.title}-${id}`}
                                            className="font-bold text-foreground"
                                        >
                                            {active.title}
                                        </motion.h3>
                                    </div>

                                    <Link href={active.ctaLink}>
                                        <motion.button
                                            layoutId={`button-${active.title}-${id}`}
                                            className="px-4 py-3 text-sm rounded-full font-bold text-white transition-colors shadow-md"
                                            style={{ backgroundColor: active.color }}
                                        >
                                            {active.ctaText}
                                        </motion.button>
                                    </Link>
                                </div>
                                <div className="pt-4 relative px-4">
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="text-foreground/80 dark:text-foreground/70 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                                    >
                                        {typeof active.content === "function"
                                            ? active.content()
                                            : active.content}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>
            <ul className="max-w-2xl mx-auto w-full gap-4">
                {cards.map((card, index) => (
                    <motion.div
                        layoutId={`card-${card.title}-${id}`}
                        key={`card-${card.title}-${id}`}
                        onClick={() => setActive(card)}
                        className="p-4 flex flex-col md:flex-row justify-between items-center rounded-xl cursor-pointer transition-all duration-300 border-l-4 hover:shadow-lg hover:scale-[1.02]"
                        style={{ 
                            borderLeftColor: card.color,
                            backgroundColor: `${card.color}08`
                        }}
                    >
                        <div className="flex gap-4 flex-col md:flex-row ">
                            <div className="">
                                <motion.h3
                                    layoutId={`title-${card.title}-${id}`}
                                    className="font-medium text-foreground text-center md:text-left"
                                >
                                    {card.title}
                                </motion.h3>
                            </div>
                        </div>
                        <motion.button
                            layoutId={`button-${card.title}-${id}`}
                            className="px-4 py-2 text-sm rounded-full font-bold text-white transition-all duration-300 mt-4 md:mt-0 shadow-md hover:shadow-lg"
                            style={{ backgroundColor: card.color }}
                        >
                            {card.ctaText}
                        </motion.button>
                    </motion.div>
                ))}
            </ul>
        </>
    );
}

export const CloseIcon = () => {
    return (
        <motion.svg
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            exit={{
                opacity: 0,
                transition: {
                    duration: 0.05,
                },
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-foreground"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
        </motion.svg>
    );
};

const cards = [
    {
        title: "AI-Powered Spiritual Guidance",
        ctaText: "Learn More",
        ctaLink: "/blog",
        color: "#6366f1",
        content: () => {
            return (
                <p className="leading-relaxed">
                    <strong className="text-lg block mb-3">Conversational AI for Faith Communities</strong>
                    MZHub leverages advanced AI technology to create knowledge-grounded conversational agents that provide accurate, contextual spiritual guidance. Our RAG (Retrieval-Augmented Generation) architecture ensures responses are grounded in verified doctrinal knowledge.
                    <br /><br />
                    <strong>Key Features:</strong>
                    <br />• Enterprise-grade security with Azure OpenAI
                    <br />• Multilingual support for diverse communities
                    <br />• Real-time, contextually accurate spiritual answers
                    <br />• Scalable infrastructure for global reach
                </p>
            );
        },
    },
    {
        title: "Cultural Heritage Preservation",
        ctaText: "Learn More",
        ctaLink: "/blog",
        color: "#6366f1",
        content: () => {
            return (
                <p className="leading-relaxed">
                    <strong className="text-lg block mb-3">Digital Archiving & Transcription</strong>
                    We help preserve endangered cultural and religious manuscripts through AI-powered OCR and transcription services. Our Azure Document Intelligence models are specially trained to handle historical typography and non-standard scripts.
                    <br /><br />
                    <strong>Our Approach:</strong>
                    <br />• High-fidelity manuscript digitization
                    <br />• Custom neural models for ancient scripts
                    <br />• Secure cloud storage and backup
                    <br />• Accessible digital archives for future generations
                </p>
            );
        },
    },
    {
        title: "Personalized Spiritual Wellness",
        ctaText: "Learn More",
        ctaLink: "/blog",
        color: "#6366f1",
        content: () => {
            return (
                <p className="leading-relaxed">
                    <strong className="text-lg block mb-3">Ritual & Therapy Recommendations</strong>
                    Our Personalized Ritual and Therapy Recommendation Engine (PRTRE) blends ancient spiritual wisdom with evidence-based therapeutic methods. Using GraphRAG technology, we deliver hyper-personalized guidance tailored to individual needs.
                    <br /><br />
                    <strong>Benefits:</strong>
                    <br />• Culturally sensitive mental wellness support
                    <br />• Integration of spiritual practices with therapy
                    <br />• Data-driven personalization
                    <br />• Privacy-first architecture
                </p>
            );
        },
    },
    {
        title: "Multi-Agent CX Automation",
        ctaText: "Learn More",
        ctaLink: "/blog",
        color: "#6366f1",
        content: () => {
            return (
                <p className="leading-relaxed">
                    <strong className="text-lg block mb-3">Intelligent Customer Experience</strong>
                    Transform your faith organization's operations with our Agentic AI platform. Our multi-agent systems handle complex workflows autonomously while maintaining the highest ethical standards for sensitive spiritual interactions.
                    <br /><br />
                    <strong>Capabilities:</strong>
                    <br />• Autonomous workflow execution
                    <br />• 24/7 personalized support
                    <br />• Seamless integration with existing systems
                    <br />• Ethical AI governance framework
                </p>
            );
        },
    },
    {
        title: "Ethical AI Framework",
        ctaText: "Learn More",
        ctaLink: "/blog",
        color: "#6366f1",
        content: () => {
            return (
                <p className="leading-relaxed">
                    <strong className="text-lg block mb-3">Responsible AI Governance</strong>
                    Our comprehensive AI Governance Framework (RAIOps) ensures all AI deployments meet the highest ethical standards. We implement robust guardrails to protect sensitive religious content and maintain institutional sovereignty.
                    <br /><br />
                    <strong>Safeguards:</strong>
                    <br />• Content filtering and moderation
                    <br />• Bias detection and mitigation
                    <br />• Transparent AI decision-making
                    <br />• Compliance with religious doctrine
                </p>
            );
        },
    },
];
