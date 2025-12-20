'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Twitter, Linkedin, Mail } from 'lucide-react'

interface AuthorBioProps {
    author: string
    bio?: string
    avatar?: string
    twitter?: string
    linkedin?: string
    email?: string
}

export function AuthorBio({ author, bio, avatar, twitter, linkedin, email }: AuthorBioProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-16 p-8 bg-white/80 dark:bg-secondary-dark/80 backdrop-blur-sm border border-accent-blue/10 dark:border-accent-gold/10 rounded-2xl"
        >
            <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Author Avatar */}
                {avatar && (
                    <div className="flex-shrink-0">
                        <div className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-accent-blue/20 dark:ring-accent-gold/20">
                            <Image
                                src={avatar}
                                alt={author}
                                width={80}
                                height={80}
                                className="object-cover"
                            />
                        </div>
                    </div>
                )}

                {/* Author Info */}
                <div className="flex-1">
                    <h3 className="text-xl font-bold text-secondary-light dark:text-text-mist mb-2">
                        About {author}
                    </h3>
                    <p className="text-secondary-light/80 dark:text-text-mist/80 leading-relaxed mb-4">
                        {bio || `${author} is a contributor at MZHub, sharing insights on AI, technology, and digital transformation.`}
                    </p>

                    {/* Social Links */}
                    {(twitter || linkedin || email) && (
                        <div className="flex gap-3">
                            {twitter && (
                                <a
                                    href={`https://twitter.com/${twitter}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-lg bg-accent-blue/10 dark:bg-accent-gold/10 text-accent-blue dark:text-accent-gold hover:bg-accent-blue/20 dark:hover:bg-accent-gold/20 transition-colors"
                                    aria-label="Twitter"
                                >
                                    <Twitter className="w-5 h-5" />
                                </a>
                            )}
                            {linkedin && (
                                <a
                                    href={linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-lg bg-accent-blue/10 dark:bg-accent-gold/10 text-accent-blue dark:text-accent-gold hover:bg-accent-blue/20 dark:hover:bg-accent-gold/20 transition-colors"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </a>
                            )}
                            {email && (
                                <a
                                    href={`mailto:${email}`}
                                    className="p-2 rounded-lg bg-accent-blue/10 dark:bg-accent-gold/10 text-accent-blue dark:text-accent-gold hover:bg-accent-blue/20 dark:hover:bg-accent-gold/20 transition-colors"
                                    aria-label="Email"
                                >
                                    <Mail className="w-5 h-5" />
                                </a>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    )
}
