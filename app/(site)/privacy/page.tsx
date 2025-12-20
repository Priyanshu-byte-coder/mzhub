import type { Metadata } from 'next'
import SectionWrapper from '@/components/ui/shared/SectionWrapper'
import ScrollReveal from '@/components/ui/shared/scroll-reveal'

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: 'Learn how MZHUB collects, uses, and protects your personal information.',
}

export default function PrivacyPolicy() {
    return (
        <div className="bg-white dark:bg-primary-dark">
            {/* Hero Section */}
            <SectionWrapper className="bg-gradient-to-b from-primary-light/50 to-neutral-light dark:from-primary-dark dark:to-secondary-dark pt-32 pb-16">
                <div className="max-w-4xl mx-auto text-center">
                    <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={5} blurStrength={10}>
                        <h1 className="text-5xl md:text-6xl font-bold text-secondary-light dark:text-accent-gold mb-6">
                            Privacy Policy
                        </h1>
                        <p className="text-lg text-secondary-light/80 dark:text-text-mist/80">
                            Your privacy is important to us. Learn how we protect your personal information.
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
                                Welcome to MZHUB. Your privacy is important to us, and we are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application or related services.
                            </p>

                            <section>
                                <h2 className="text-3xl font-bold text-secondary-light dark:text-accent-gold mb-4">
                                    Information We Collect
                                </h2>
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-xl font-semibold text-secondary-light dark:text-accent-gold mb-2">
                                            1.Personal Information
                                        </h3>
                                        <p className="text-base leading-relaxed">
                                            We may collect personal information such as your name, email address, and contact details when you create an account, subscribe to a newsletter, or contact us for support.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-secondary-light dark:text-accent-gold mb-2">
                                            2.Usage Data
                                        </h3>
                                        <p className="text-base leading-relaxed">
                                            We may collect information about your device, including your IP address, browser type, operating system, and app usage patterns. This data helps us understand how users interact with the app and improve our services.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-secondary-light dark:text-accent-gold mb-2">
                                            3.Location Data
                                        </h3>
                                        <p className="text-base leading-relaxed">
                                            If you allow us, we may collect information about your location to provide location-based services. You can enable or disable location services through your mobile device settings.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-3xl font-bold text-secondary-light dark:text-accent-gold mb-4">
                                    How We Use Your Information
                                </h2>
                                <ul className="space-y-3 list-disc list-inside">
                                    <li className="text-base leading-relaxed">
                                        <strong className="text-secondary-light dark:text-accent-gold">To Provide and Maintain Our Service:</strong> We use your information to operate and maintain the app, including delivering content and managing user accounts.
                                    </li>
                                    <li className="text-base leading-relaxed">
                                        <strong className="text-secondary-light dark:text-accent-gold">To Improve Our Service:</strong> We analyze usage data to enhance the app's performance, features, and user experience.
                                    </li>
                                    <li className="text-base leading-relaxed">
                                        <strong className="text-secondary-light dark:text-accent-gold">To Communicate with You:</strong> We may use your contact information to send you updates, newsletters, and respond to your inquiries.
                                    </li>
                                    <li className="text-base leading-relaxed">
                                        <strong className="text-secondary-light dark:text-accent-gold">To Ensure Security:</strong> We use data to detect and prevent fraud, spam, and abuse to protect the integrity of our app and users.
                                    </li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-3xl font-bold text-secondary-light dark:text-accent-gold mb-4">
                                    Sharing Your Information
                                </h2>
                                <p className="text-base leading-relaxed mb-4">
                                    We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
                                </p>
                                <ul className="space-y-3 list-disc list-inside">
                                    <li className="text-base leading-relaxed">
                                        <strong className="text-secondary-light dark:text-accent-gold">Service Providers:</strong> We may share information with third-party service providers who assist us in operating our app, conducting our business, or providing services to you.
                                    </li>
                                    <li className="text-base leading-relaxed">
                                        <strong className="text-secondary-light dark:text-accent-gold">Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or a government agency).
                                    </li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-3xl font-bold text-secondary-light dark:text-accent-gold mb-4">
                                    Security
                                </h2>
                                <p className="text-base leading-relaxed">
                                    We implement a variety of security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee its absolute security.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-3xl font-bold text-secondary-light dark:text-accent-gold mb-4">
                                    Your Choices
                                </h2>
                                <ul className="space-y-3 list-disc list-inside">
                                    <li className="text-base leading-relaxed">
                                        <strong className="text-secondary-light dark:text-accent-gold">Account Information:</strong> You can update, correct, or delete your account information at any time by accessing your account settings.
                                    </li>
                                    <li className="text-base leading-relaxed">
                                        <strong className="text-secondary-light dark:text-accent-gold">Opt-Out:</strong> You can opt-out of receiving promotional communications from us by following the unsubscribe instructions provided in those emails or by contacting us directly.
                                    </li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-3xl font-bold text-secondary-light dark:text-accent-gold mb-4">
                                    Children's Privacy
                                </h2>
                                <p className="text-base leading-relaxed">
                                    Our app is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected information from a child under 13, we will take steps to delete such information from our records.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-3xl font-bold text-secondary-light dark:text-accent-gold mb-4">
                                    Changes to This Privacy Policy
                                </h2>
                                <p className="text-base leading-relaxed">
                                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
                                </p>
                            </section>

                            <section className="bg-primary-light/30 dark:bg-secondary-dark/30 p-6 rounded-lg text-center">
                                <p className="text-base leading-relaxed mb-4">
                                    If you have any questions or concerns about this Privacy Policy, please{' '}
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
