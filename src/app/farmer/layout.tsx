'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '@/lib/contexts/AuthContext';
import Link from 'next/link';
import { useCart } from '@/lib/contexts/CartContext';
import { Farmer } from '@/types';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { LanguageToggle } from '@/app/components/LanguageToggle';

export default function FarmerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { user, isAuthenticated, logout } = useAuth();
    const { itemCount } = useCart();
    const router = useRouter();
    const pathname = usePathname();
    const { t } = useLanguage();

    // KYC is fully approved — gives full platform access
    const KYC_APPROVED_STATUSES = ['APPROVED', 'AUTO_APPROVED', 'AUTO_APPROVED_FLAGGED'];

    useEffect(() => {
        if (!isAuthenticated || user?.role !== 'farmer') {
            router.push('/login?role=farmer');
            return;
        }

        const farmer = user as Farmer;

        // Check if farmer is blacklisted - redirect to blacklist page
        const allowedBlacklistPaths = ['/farmer/blacklisted', '/farmer/help'];
        if (farmer.isBlacklisted && !allowedBlacklistPaths.includes(pathname)) {
            router.push('/farmer/blacklisted');
            return;
        }

        // If KYC not yet approved, force redirect to KYC page for ALL non-KYC routes
        if (!KYC_APPROVED_STATUSES.includes(farmer.kycStatus) && pathname !== '/farmer/kyc' && !farmer.isBlacklisted) {
            router.push('/farmer/kyc');
        }
    }, [isAuthenticated, user, router, pathname]);

    if (!isAuthenticated || user?.role !== 'farmer') {
        return null;
    }

    const farmer = user as Farmer;

    // KYC approved = full platform access
    const kycApproved = KYC_APPROVED_STATUSES.includes(farmer.kycStatus);
    const kycNeedsAction = !kycApproved;

    // --- LOCKED LAYOUT: shown when KYC not approved ---
    if (!kycApproved) {
        return (
            <div className="min-h-screen bg-off-white dark:bg-background-dark flex flex-col">
                {/* Minimal top bar */}
                <nav className="bg-white dark:bg-charcoal/20 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-16">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-3xl text-indus-green">agriculture</span>
                                <div>
                                    <div className="font-black text-xl text-charcoal dark:text-off-white">AgriConnect</div>
                                    <div className="text-xs text-gray-500 font-urdu">{t('nav.farmer.portalUrdu')}</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <LanguageToggle />
                                <div className="text-end hidden sm:block">
                                    <div className="text-sm font-semibold text-charcoal dark:text-off-white">{farmer.name}</div>
                                    <div className="text-xs text-gray-500">{farmer.farmName}</div>
                                </div>
                                <button
                                    onClick={logout}
                                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                                    title={t('common.logout')}
                                >
                                    <span className="material-symbols-outlined text-gray-600 dark:text-gray-400">logout</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
                {/* KYC page content only */}
                <main className="flex-1">
                    {children}
                </main>
            </div>
        );
    }

    const navItems = [
        { icon: 'dashboard', label: t('nav.farmer.dashboard'), href: '/farmer/dashboard' },
        { icon: 'verified_user', label: t('nav.farmer.kyc'), href: '/farmer/kyc', alert: kycNeedsAction },
        { icon: 'store', label: t('nav.farmer.marketplace'), href: '/farmer/marketplace' },
        { icon: 'shopping_cart', label: t('nav.farmer.orders'), href: '/farmer/orders', badge: itemCount },
        { icon: 'account_balance_wallet', label: t('nav.farmer.wallet'), href: '/farmer/wallet' },
        { icon: 'shield', label: t('nav.farmer.insurance'), href: '/farmer/insurance' },
        { icon: 'partly_cloudy_day', label: t('nav.farmer.weather'), href: '/farmer/weather' },
        { icon: 'groups', label: t('nav.farmer.community'), href: '/farmer/community' },
        { icon: 'support_agent', label: t('nav.farmer.help'), href: '/farmer/help' },
    ];

    return (
        <div className="min-h-screen bg-off-white dark:bg-background-dark">
            {/* Top Navigation */}
            <nav className="bg-white dark:bg-charcoal/20 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <Link href="/farmer/dashboard" className="flex items-center gap-3">
                            <img src="/agriconnect_logo.png" alt="AgriConnect Logo" className="h-10 w-10 object-contain" />
                            <div>
                                <div className="font-black text-xl text-charcoal dark:text-off-white">AgriConnect</div>
                                <div className="text-xs text-gray-500 font-urdu">{t('nav.farmer.portalUrdu')}</div>
                            </div>
                        </Link>

                        {/* Right Section */}
                        <div className="flex items-center gap-4">
                            {/* Language Toggle */}
                            <LanguageToggle />

                            {/* Notifications */}
                            <button className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                                <span className="material-symbols-outlined text-gray-600 dark:text-gray-400">notifications</span>
                                <span className="absolute top-1 rtl:top-1 end-1 w-2 h-2 bg-alert-red rounded-full"></span>
                            </button>

                            {/* Cart */}
                            <Link href="/farmer/cart" className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                                <span className="material-symbols-outlined text-gray-600 dark:text-gray-400">shopping_cart</span>
                                {itemCount > 0 && (
                                    <span className="absolute -top-1 -end-1 bg-indus-green text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                                        {itemCount}
                                    </span>
                                )}
                            </Link>

                            {/* User Menu */}
                            <div className="flex items-center gap-3 ps-4 border-s border-gray-200 dark:border-gray-700">
                                <div className="text-end hidden sm:block">
                                    <div className="text-sm font-semibold text-charcoal dark:text-off-white">{farmer.name}</div>
                                    <div className="text-xs text-gray-500">{farmer.farmName}</div>
                                </div>
                                <button
                                    onClick={logout}
                                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                                    title={t('common.logout')}
                                >
                                    <span className="material-symbols-outlined text-gray-600 dark:text-gray-400">logout</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content with Sidebar */}
            <div className="flex">
                {/* Sidebar */}
                <aside className="hidden lg:block w-64 bg-white dark:bg-charcoal/20 border-e border-gray-200 dark:border-gray-700 min-h-[calc(100vh-4rem)] sticky top-16">
                    <nav className="p-4 space-y-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-indus-green/10 text-gray-700 dark:text-gray-300 hover:text-indus-green transition-colors relative ${
                                    item.alert ? 'bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-300 dark:border-yellow-700' : ''
                                }`}
                            >
                                <span className={`material-symbols-outlined ${item.alert ? 'text-yellow-600' : ''}`}>{item.icon}</span>
                                <span className="font-medium">{item.label}</span>
                                {item.badge !== undefined && item.badge > 0 && (
                                    <span className="ms-auto bg-indus-green text-white text-xs rounded-full px-2 py-0.5 font-bold">
                                        {item.badge}
                                    </span>
                                )}
                                {item.alert && (
                                    <span className="ms-auto bg-yellow-500 text-white text-xs rounded-full px-2 py-0.5 font-bold animate-pulse">
                                        {t('common.actionRequired')}
                                    </span>
                                )}
                            </Link>
                        ))}
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="flex-1">
                    {children}
                </main>
            </div>

            {/* Mobile Bottom Navigation */}
            <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-charcoal/20 border-t border-gray-200 dark:border-gray-700 z-50">
                <div className="grid grid-cols-5 gap-1">
                    {navItems.slice(0, 5).map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex flex-col items-center justify-center py-2 text-gray-600 dark:text-gray-400 hover:text-indus-green relative ${
                                item.alert ? 'bg-yellow-50 dark:bg-yellow-900/20' : ''
                            }`}
                        >
                            <span className={`material-symbols-outlined text-xl ${item.alert ? 'text-yellow-600' : ''}`}>{item.icon}</span>
                            <span className={`text-xs mt-1 ${item.alert ? 'text-yellow-600 font-semibold' : ''}`}>{item.label.split(' ')[0]}</span>
                            {item.badge !== undefined && item.badge > 0 && (
                                <span className="absolute top-1 right-2 bg-indus-green text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">
                                    {item.badge}
                                </span>
                            )}
                            {item.alert && (
                                <span className="absolute top-0 right-2 w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></span>
                            )}
                        </Link>
                    ))}
                </div>
            </nav>
        </div>
    );
}
