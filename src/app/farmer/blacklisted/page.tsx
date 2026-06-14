'use client';

import { useAuth } from '@/lib/contexts/AuthContext';
import { Farmer } from '@/types';
import Link from 'next/link';

export default function FarmerBlacklistedPage() {
    const { user, logout } = useAuth();
    const farmer = user as Farmer;

    const getCategoryInfo = (category?: string) => {
        const categories: { [key: string]: { label: string; labelUrdu: string; description: string; icon: string } } = {
            'PAYMENT_DEFAULT': {
                label: 'Payment Default',
                labelUrdu: 'ادائیگی میں ناکامی',
                description: 'Your account has been restricted due to missed or defaulted payments.',
                icon: 'credit_card_off'
            },
            'FRAUD': {
                label: 'Fraud Detection',
                labelUrdu: 'دھوکہ دہی',
                description: 'Suspicious activity was detected on your account.',
                icon: 'gpp_bad'
            },
            'POLICY_VIOLATION': {
                label: 'Policy Violation',
                labelUrdu: 'پالیسی کی خلاف ورزی',
                description: 'Your account violated our terms of service.',
                icon: 'policy'
            },
            'KYC_FAILURE': {
                label: 'KYC Failure',
                labelUrdu: 'شناخت کی تصدیق میں ناکامی',
                description: 'Your identity verification documents were rejected.',
                icon: 'badge'
            },
            'MANUAL_REVIEW': {
                label: 'Under Review',
                labelUrdu: 'جائزہ کے تحت',
                description: 'Your account is under manual review by our team.',
                icon: 'rate_review'
            },
            'AUTO_OVERDUE': {
                label: 'Overdue Payments',
                labelUrdu: 'واجب الادا رقم',
                description: 'Your installments are overdue beyond the grace period.',
                icon: 'schedule'
            }
        };
        return categories[category || 'MANUAL_REVIEW'] || categories['MANUAL_REVIEW'];
    };

    const categoryInfo = getCategoryInfo(farmer?.blacklistCategory);
    const expiryDate = farmer?.blacklistExpiryDate ? new Date(farmer.blacklistExpiryDate) : null;
    const daysRemaining = expiryDate ? Math.max(0, Math.ceil((expiryDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24))) : null;

    return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 flex items-center justify-center p-4">
            <div className="max-w-lg w-full">
                {/* Main Card */}
                <div className="bg-white dark:bg-charcoal rounded-2xl shadow-xl overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-red-600 to-red-700 p-6 text-white text-center">
                        <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <span className="material-symbols-outlined text-5xl">{categoryInfo.icon}</span>
                        </div>
                        <h1 className="text-2xl font-bold mb-1">Account Restricted</h1>
                        <p className="text-red-100 font-urdu text-lg">اکاؤنٹ محدود ہے</p>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-6">
                        {/* Category Badge */}
                        <div className="flex justify-center">
                            <span className="px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-full font-semibold text-sm flex items-center gap-2">
                                <span className="material-symbols-outlined text-lg">{categoryInfo.icon}</span>
                                {categoryInfo.label}
                            </span>
                        </div>

                        {/* Reason */}
                        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4">
                            <h3 className="font-semibold text-charcoal dark:text-off-white mb-2 flex items-center gap-2">
                                <span className="material-symbols-outlined text-red-500">info</span>
                                Reason
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                {farmer?.blacklistReason || categoryInfo.description}
                            </p>
                        </div>

                        {/* Expiry Info */}
                        {expiryDate && (
                            <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-4 border border-orange-200 dark:border-orange-800">
                                <h3 className="font-semibold text-orange-700 dark:text-orange-400 mb-2 flex items-center gap-2">
                                    <span className="material-symbols-outlined">schedule</span>
                                    Restriction Period
                                </h3>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Expires on</p>
                                        <p className="font-bold text-charcoal dark:text-off-white">
                                            {expiryDate.toLocaleDateString('en-PK', {
                                                day: 'numeric',
                                                month: 'long',
                                                year: 'numeric'
                                            })}
                                        </p>
                                    </div>
                                    {daysRemaining !== null && (
                                        <div className="text-center">
                                            <div className="text-3xl font-bold text-orange-600">{daysRemaining}</div>
                                            <div className="text-xs text-gray-500">days left</div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* What You Can Do */}
                        <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                            <h3 className="font-semibold text-charcoal dark:text-off-white mb-3">What you can do:</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                                    <span className="material-symbols-outlined text-indus-green text-lg">check_circle</span>
                                    <span>Pay any outstanding dues to resolve payment issues</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                                    <span className="material-symbols-outlined text-indus-green text-lg">check_circle</span>
                                    <span>Contact support for account review or clarification</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                                    <span className="material-symbols-outlined text-indus-green text-lg">check_circle</span>
                                    <span>Wait for the restriction period to expire automatically</span>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Support */}
                        <div className="bg-trust-blue/10 rounded-xl p-4">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-trust-blue/20 rounded-full flex items-center justify-center">
                                    <span className="material-symbols-outlined text-trust-blue text-2xl">support_agent</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-charcoal dark:text-off-white">Need Help?</h4>
                                    <p className="text-sm text-gray-500">Contact our support team</p>
                                </div>
                            </div>
                            <div className="mt-3 flex gap-3">
                                <a
                                    href="tel:+923001234567"
                                    className="flex-1 py-2 px-4 bg-trust-blue text-white rounded-lg text-center text-sm font-medium hover:bg-trust-blue/90 transition-colors"
                                >
                                    Call Support
                                </a>
                                <Link
                                    href="/farmer/help"
                                    className="flex-1 py-2 px-4 bg-gray-100 dark:bg-gray-800 text-charcoal dark:text-off-white rounded-lg text-center text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                                >
                                    Help Center
                                </Link>
                            </div>
                        </div>

                        {/* Logout Button */}
                        <button
                            onClick={logout}
                            className="w-full py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center justify-center gap-2"
                        >
                            <span className="material-symbols-outlined">logout</span>
                            Sign Out
                        </button>
                    </div>
                </div>

                {/* Footer */}
                <p className="text-center text-sm text-gray-500 mt-6">
                    AgriConnect - Supporting Pakistan's Farmers
                </p>
            </div>
        </div>
    );
}
