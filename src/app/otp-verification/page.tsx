'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function OTPVerificationPage() {
    const router = useRouter();

    // This page is no longer used — OTP verification is now handled
    // inline on the forgot-password page. Redirect there.
    useEffect(() => {
        router.replace('/forgot-password');
    }, [router]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-off-white dark:bg-background-dark">
            <div className="text-center text-gray-500">Redirecting...</div>
        </div>
    );
}
