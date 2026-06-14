'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function OnboardingPage() {
    const [step, setStep] = useState(0);

    const steps = [
        {
            title: 'Welcome to AgriConnect',
            description: 'Your partner in modern agriculture. Access quality products, credit facilities, and expert advice all in one place.',
            image: 'agriculture',
            color: 'indus-green',
        },
        {
            title: 'Shop with BNPL',
            description: 'Buy seeds, fertilizers, and tools now and pay later in easy installments of 3, 6, or 12 months.',
            image: 'shopping_cart',
            color: 'trust-blue',
        },
        {
            title: 'Track Your Farm',
            description: 'Monitor weather, manage your expenses, and get personalized farming tips to improve your yield.',
            image: 'analytics',
            color: 'primary',
        },
    ];

    const handleNext = () => {
        if (step < steps.length - 1) {
            setStep(step + 1);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-off-white dark:bg-background-dark p-4">
            <div className="max-w-md w-full bg-white dark:bg-charcoal/20 rounded-3xl shadow-2xl overflow-hidden relative">
                {/* Progress Bar */}
                <div className="absolute top-0 left-0 h-1 bg-gray-100 dark:bg-gray-700 w-full">
                    <div
                        className="h-full bg-indus-green transition-all duration-300"
                        style={{ width: `${((step + 1) / steps.length) * 100}%` }}
                    ></div>
                </div>

                <div className="p-8 pt-12 text-center">
                    {/* Illustration */}
                    <div className={`w-32 h-32 mx-auto mb-8 rounded-full bg-${steps[step].color}/10 flex items-center justify-center animate-bounce-slow`}>
                        <span className={`material-symbols-outlined text-6xl text-${steps[step].color}`}>
                            {steps[step].image}
                        </span>
                    </div>

                    {/* Content */}
                    <h2 className="text-2xl font-bold mb-4 text-charcoal dark:text-off-white transition-opacity duration-300">
                        {steps[step].title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-12 leading-relaxed min-h-[80px]">
                        {steps[step].description}
                    </p>

                    {/* Controls */}
                    <div className="flex items-center justify-between">
                        {step < steps.length - 1 ? (
                            <>
                                <button
                                    onClick={() => setStep(steps.length - 1)}
                                    className="text-gray-500 font-medium hover:text-gray-700 dark:hover:text-gray-300"
                                >
                                    Skip
                                </button>
                                <div className="flex gap-2">
                                    {steps.map((_, idx) => (
                                        <div
                                            key={idx}
                                            className={`w-2 h-2 rounded-full transition-colors ${idx === step ? 'bg-indus-green' : 'bg-gray-300 dark:bg-gray-600'
                                                }`}
                                        ></div>
                                    ))}
                                </div>
                                <button
                                    onClick={handleNext}
                                    className="w-12 h-12 rounded-full bg-indus-green text-white flex items-center justify-center hover:bg-indus-green/90 shadow-lg shadow-indus-green/20"
                                >
                                    <span className="material-symbols-outlined">arrow_forward</span>
                                </button>
                            </>
                        ) : (
                            <Link
                                href="/login"
                                className="w-full py-4 bg-indus-green text-white rounded-xl font-bold text-lg hover:bg-indus-green/90 shadow-lg shadow-indus-green/20 flex items-center justify-center gap-2"
                            >
                                Get Started
                                <span className="material-symbols-outlined">rocket_launch</span>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
