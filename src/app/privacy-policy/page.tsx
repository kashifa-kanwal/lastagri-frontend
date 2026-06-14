'use client';

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-off-white dark:bg-background-dark py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white dark:bg-charcoal/20 rounded-2xl shadow-sm p-8 md:p-12">
                <h1 className="text-3xl font-bold text-charcoal dark:text-off-white mb-8">Privacy Policy</h1>

                <div className="prose dark:prose-invert max-w-none space-y-6 text-gray-600 dark:text-gray-300">
                    <p>Last updated: November 27, 2025</p>

                    <section>
                        <h2 className="text-xl font-bold text-charcoal dark:text-off-white mb-3">1. Introduction</h2>
                        <p>
                            AgriConnect ("we," "our," or "us") respects your privacy and is committed to protecting your personal data.
                            This privacy policy will inform you as to how we look after your personal data when you visit our website
                            and tell you about your privacy rights and how the law protects you.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-charcoal dark:text-off-white mb-3">2. Data We Collect</h2>
                        <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:</p>
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                            <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                            <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                            <li><strong>Financial Data:</strong> includes bank account and payment card details.</li>
                            <li><strong>Transaction Data:</strong> includes details about payments to and from you and other details of products and services you have purchased from us.</li>
                            <li><strong>Farm Data:</strong> includes land size, crop types, and location data for credit assessment.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-charcoal dark:text-off-white mb-3">3. How We Use Your Data</h2>
                        <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                            <li>To register you as a new customer.</li>
                            <li>To process and deliver your order including managing payments, fees and charges.</li>
                            <li>To manage our relationship with you.</li>
                            <li>To enable you to partake in a prize draw, competition or complete a survey.</li>
                            <li>To improve our website, products/services, marketing or customer relationships.</li>
                            <li>To recommend products or services which may be of interest to you.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-charcoal dark:text-off-white mb-3">4. Data Security</h2>
                        <p>
                            We have put in place appropriate security measures to prevent your personal data from being accidentally lost,
                            used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal
                            data to those employees, agents, contractors and other third parties who have a business need to know.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-charcoal dark:text-off-white mb-3">5. Contact Us</h2>
                        <p>
                            If you have any questions about this privacy policy or our privacy practices, please contact us at:
                            <a href="mailto:privacy@agriconnect.pk" className="text-indus-green hover:underline ml-1">privacy@agriconnect.pk</a>
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
