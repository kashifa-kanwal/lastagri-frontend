'use client';

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-off-white dark:bg-background-dark py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white dark:bg-charcoal/20 rounded-2xl shadow-sm p-8 md:p-12">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl font-bold text-charcoal dark:text-off-white">Terms & Conditions</h1>
                    <span className="font-urdu text-2xl text-indus-green">شرائط اور احکام</span>
                </div>

                <div className="prose dark:prose-invert max-w-none space-y-6 text-gray-600 dark:text-gray-300">
                    <p>Last updated: November 27, 2025</p>

                    <section>
                        <h2 className="text-xl font-bold text-charcoal dark:text-off-white mb-3">1. Agreement to Terms</h2>
                        <p>
                            By accessing or using the AgriConnect platform, you agree to be bound by these Terms and Conditions.
                            If you disagree with any part of the terms, then you may not access the service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-charcoal dark:text-off-white mb-3">2. BNPL Services</h2>
                        <p>
                            Our Buy Now, Pay Later (BNPL) service is subject to credit approval.
                            <span className="font-urdu mx-1">ادھار کی سہولت</span> is available to eligible farmers based on their farm size,
                            crop history, and repayment behavior.
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                            <li>Repayment periods are fixed at 3, 6, or 12 months.</li>
                            <li>Late payments may incur additional charges.</li>
                            <li>Defaulting on payments may result in suspension of services and legal action.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-charcoal dark:text-off-white mb-3">3. User Accounts</h2>
                        <p>
                            When you create an account with us, you must provide us information that is accurate, complete, and current at all times.
                            Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-charcoal dark:text-off-white mb-3">4. Intellectual Property</h2>
                        <p>
                            The Service and its original content, features and functionality are and will remain the exclusive property of AgriConnect and its licensors.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-charcoal dark:text-off-white mb-3">5. Termination</h2>
                        <p>
                            We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever,
                            including without limitation if you breach the Terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-charcoal dark:text-off-white mb-3">6. Governing Law</h2>
                        <p>
                            These Terms shall be governed and construed in accordance with the laws of Pakistan, without regard to its conflict of law provisions.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
