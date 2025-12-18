import type { Metadata } from 'next'
import SectionWrapper from '@/components/ui/shared/SectionWrapper'
import ScrollReveal from '@/components/ui/shared/scroll-reveal'

export const metadata: Metadata = {
    title: 'Terms & Conditions',
    description: 'Terms & Conditions governing your access and use of the MZHUB platform.',
}

export default function TermsAndConditions() {
    return (
        <div className="bg-white dark:bg-primary-dark">
            {/* Hero Section */}
            <SectionWrapper className="bg-gradient-to-b from-primary-light/50 to-neutral-light dark:from-primary-dark dark:to-secondary-dark pt-32 pb-16">
                <div className="max-w-4xl mx-auto text-center">
                    <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={5} blurStrength={10}>
                        <h1 className="text-5xl md:text-6xl font-bold text-secondary-light dark:text-accent-gold mb-6">
                            Terms & Conditions
                        </h1>
                        <p className="text-lg text-secondary-light/80 dark:text-text-mist/80">
                            Please read these terms carefully before using our platform.
                        </p>
                    </ScrollReveal>
                </div>
            </SectionWrapper>

            {/* Content Section */}
            <SectionWrapper className="bg-neutral-light dark:bg-primary-dark">
                <div className="max-w-4xl mx-auto">
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <div className="space-y-8 text-secondary-light/90 dark:text-text-mist">
                            <p className="text-base leading-relaxed">
                                Welcome to MZHUB, a digital platform for faith, spirituality, and wellness. These Terms & Conditions ("Terms") govern your access and use of the MZHUB mobile application, website, and all related services (collectively, the "Platform"). By using MZHUB, you agree to comply with and be bound by these Terms. If you do not agree, please do not use the Platform.
                            </p>

                            <section>
                                <h2 className="text-3xl font-bold text-secondary-light dark:text-accent-gold mb-4">
                                    User Accounts
                                </h2>
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-xl font-semibold text-secondary-light dark:text-accent-gold mb-2">
                                            1.Account Creation
                                        </h3>
                                        <p className="text-base leading-relaxed">
                                            To access certain features, you may be required to register for an account. You must provide accurate, current, and complete information and update such information as necessary.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-secondary-light dark:text-accent-gold mb-2">
                                            2.Account Security
                                        </h3>
                                        <p className="text-base leading-relaxed">
                                            You are responsible for safeguarding your account credentials and agree to notify us immediately if you suspect any unauthorized access. MZHUB will not be liable for any loss arising from your failure to protect your account.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-secondary-light dark:text-accent-gold mb-2">
                                            3.Account Termination
                                        </h3>
                                        <p className="text-base leading-relaxed">
                                            We reserve the right to suspend or terminate your access to the Platform, with or without notice, if you violate these Terms, engage in fraudulent or harmful behavior, or pose a risk to the community or Platform integrity.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-3xl font-bold text-secondary-light dark:text-accent-gold mb-4">
                                    Use of the Platform
                                </h2>
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-xl font-semibold text-secondary-light dark:text-accent-gold mb-2">
                                            1.License Grant
                                        </h3>
                                        <p className="text-base leading-relaxed">
                                            MZHUB grants you a limited, non-exclusive, non-transferable, and revocable license to access and use the Platform for personal and non-commercial purposes, subject to these Terms.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-secondary-light dark:text-accent-gold mb-2">
                                            2.Prohibited Activities
                                        </h3>
                                        <p className="text-base leading-relaxed mb-3">You agree not to:</p>
                                        <ul className="space-y-2 list-disc list-inside ml-4">
                                            <li className="text-base leading-relaxed">Use the Platform for any unlawful purpose.</li>
                                            <li className="text-base leading-relaxed">Disrupt, interfere with, or harm the Platform or its users.</li>
                                            <li className="text-base leading-relaxed">Access or collect data for competing services or research without consent.</li>
                                            <li className="text-base leading-relaxed">Reverse-engineer, decompile, or disassemble any aspect of the Platform.</li>
                                            <li className="text-base leading-relaxed">Use bots, scrapers, or other automated means to access the Platform.</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-3xl font-bold text-secondary-light dark:text-accent-gold mb-4">
                                    Content
                                </h2>
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-xl font-semibold text-secondary-light dark:text-accent-gold mb-2">
                                            1.User Content
                                        </h3>
                                        <p className="text-base leading-relaxed">
                                            You may submit, post, or upload content including comments, questions, or media. By doing so, you retain ownership of your content but grant MZHUB a worldwide, royalty-free, non-exclusive, perpetual license to use, reproduce, adapt, display, and distribute your content in connection with the Platform.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-secondary-light dark:text-accent-gold mb-2">
                                            2.MZHUB Intellectual Property
                                        </h3>
                                        <p className="text-base leading-relaxed">
                                            All Platform content, including text, graphics, images, software, and branding, is the intellectual property of MZHUB FaithTech or its licensors and is protected by applicable copyright, trademark, and intellectual property laws. Unauthorized use is strictly prohibited.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-3xl font-bold text-secondary-light dark:text-accent-gold mb-4">
                                    Disclaimers
                                </h2>
                                <p className="text-base leading-relaxed">
                                    The Platform is provided "as is" and "as available". MZHUB makes no warranties—express or implied—about the accuracy, reliability, or availability of the Platform or content. To the fullest extent permitted by law, we disclaim all implied warranties, including merchantability and fitness for a particular purpose.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-3xl font-bold text-secondary-light dark:text-accent-gold mb-4">
                                    Limitation of Liability
                                </h2>
                                <p className="text-base leading-relaxed mb-3">
                                    In no event shall MZHUB FaithTech, its directors, officers, employees, or agents be liable for any indirect, incidental, special, or consequential damages, including but not limited to:
                                </p>
                                <ul className="space-y-2 list-disc list-inside ml-4">
                                    <li className="text-base leading-relaxed">Loss of profits or data.</li>
                                    <li className="text-base leading-relaxed">Unauthorized access or data breaches.</li>
                                    <li className="text-base leading-relaxed">Platform downtimes or interruptions.</li>
                                    <li className="text-base leading-relaxed">Harm caused by viruses or malicious code.</li>
                                    <li className="text-base leading-relaxed">Errors or omissions in Platform content.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-3xl font-bold text-secondary-light dark:text-accent-gold mb-4">
                                    Indemnification
                                </h2>
                                <p className="text-base leading-relaxed mb-3">
                                    You agree to indemnify, defend, and hold harmless MZHUB FaithTech, its officers, employees, and agents from any claims, damages, obligations, losses, liabilities, or expenses (including legal fees) arising from:
                                </p>
                                <ul className="space-y-2 list-disc list-inside ml-4">
                                    <li className="text-base leading-relaxed">Your use of the Platform.</li>
                                    <li className="text-base leading-relaxed">Your violation of these Terms.</li>
                                    <li className="text-base leading-relaxed">Your violation of any rights of a third party.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-3xl font-bold text-secondary-light dark:text-accent-gold mb-4">
                                    Governing Law
                                </h2>
                                <p className="text-base leading-relaxed">
                                    These Terms are governed by and construed in accordance with the laws of India, without regard to its conflict of law principles. You agree to submit to the exclusive jurisdiction of courts located in India for any disputes.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-3xl font-bold text-secondary-light dark:text-accent-gold mb-4">
                                    Modifications to Terms
                                </h2>
                                <p className="text-base leading-relaxed">
                                    We may update these Terms from time to time. Any changes will be effective immediately upon posting the updated Terms on the Platform. Your continued use of MZHUB after such changes constitutes your acceptance of the revised Terms.
                                </p>
                            </section>

                            <section className="bg-primary-light/30 dark:bg-secondary-dark/30 p-6 rounded-lg text-center">
                                <p className="text-base leading-relaxed mb-4">
                                    If you have any questions or concerns about these Terms & Conditions, please{' '}
                                    <a href="/contact" className="text-accent-blue dark:text-accent-gold hover:underline font-semibold">
                                        contact us
                                    </a>
                                    .
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    )
}
