'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '@/lib/contexts/AuthContext';
import Link from 'next/link';
import { Supplier } from '@/types';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { LanguageToggle } from '@/app/components/LanguageToggle';

export default function SupplierLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { user, isAuthenticated, logout } = useAuth();
    const router = useRouter();
    const pathname = usePathname();
    const { t } = useLanguage();

    // KYC is fully approved — gives full platform access
    const KYC_APPROVED_STATUSES = ['APPROVED', 'AUTO_APPROVED', 'AUTO_APPROVED_FLAGGED'];

    useEffect(() => {
        if (!isAuthenticated || user?.role !== 'supplier') {
            router.push('/login?role=supplier');
            return;
        }

        const supplier = user as Supplier;

        // Check if supplier is blacklisted - redirect to blacklist page
        const allowedBlacklistPaths = ['/supplier/blacklisted', '/supplier/settings'];
        if (supplier.isBlacklisted && !allowedBlacklistPaths.includes(pathname)) {
            router.push('/supplier/blacklisted');
            return;
        }

        // If KYC not yet approved, force redirect to KYC page for ALL non-KYC routes
        if (!KYC_APPROVED_STATUSES.includes(supplier.kycStatus) && pathname !== '/supplier/kyc' && !supplier.isBlacklisted) {
            router.push('/supplier/kyc');
        }
    }, [isAuthenticated, user, router, pathname]);

    if (!isAuthenticated || user?.role !== 'supplier') {
        return null;
    }

    const supplier = user as Supplier;

    // KYC approved = full platform access
    const kycApproved = KYC_APPROVED_STATUSES.includes(supplier.kycStatus);
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
                                <span className="material-symbols-outlined text-3xl text-trust-blue">store</span>
                                <div>
                                    <div className="font-black text-xl text-charcoal dark:text-off-white">AgriConnect</div>
                                    <div className="text-xs text-gray-500 font-urdu">{t('nav.supplier.portalUrdu')}</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <LanguageToggle />
                                <div className="text-end hidden sm:block">
                                    <div className="text-sm font-semibold text-charcoal dark:text-off-white">{supplier.name}</div>
                                    <div className="text-xs text-gray-500">{supplier.businessName}</div>
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
        { icon: 'dashboard', label: t('nav.supplier.dashboard'), href: '/supplier/dashboard' },
        { icon: 'verified_user', label: t('nav.supplier.kyc'), href: '/supplier/kyc', alert: kycNeedsAction },
        { icon: 'inventory_2', label: t('nav.supplier.products'), href: '/supplier/products' },
        { icon: 'shopping_bag', label: t('nav.supplier.orders'), href: '/supplier/orders' },
        { icon: 'payments', label: t('nav.supplier.finance'), href: '/supplier/finance' },
        { icon: 'bar_chart', label: t('nav.supplier.analytics'), href: '/supplier/analytics' },
        { icon: 'settings', label: t('nav.supplier.settings'), href: '/supplier/settings' },
    ];

    return (
        <div className="min-h-screen bg-off-white dark:bg-background-dark">
            {/* Top Navigation */}
            <nav className="bg-white dark:bg-charcoal/20 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <Link href="/supplier/dashboard" className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-3xl text-trust-blue">store</span>
                            <div>
                                <div className="font-black text-xl text-charcoal dark:text-off-white">AgriConnect</div>
                                <div className="text-xs text-gray-500 font-urdu">{t('nav.supplier.portalUrdu')}</div>
                            </div>
                        </Link>

                        {/* Right Section */}
                        <div className="flex items-center gap-4">
                            {/* Language Toggle */}
                            <LanguageToggle />

                            {/* Notifications */}
                            <button className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                                <span className="material-symbols-outlined text-gray-600 dark:text-gray-400">notifications</span>
                                <span className="absolute top-1 end-1 w-2 h-2 bg-alert-red rounded-full"></span>
                            </button>

                            {/* User Menu */}
                            <div className="flex items-center gap-3 ps-4 border-s border-gray-200 dark:border-gray-700">
                                <div className="text-end hidden sm:block">
                                    <div className="text-sm font-semibold text-charcoal dark:text-off-white">{supplier.name}</div>
                                    <div className="text-xs text-gray-500">{supplier.businessName}</div>
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
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-trust-blue/10 text-gray-700 dark:text-gray-300 hover:text-trust-blue transition-colors relative ${
                                    item.alert ? 'bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-300 dark:border-yellow-700' : ''
                                }`}
                            >
                                <span className={`material-symbols-outlined ${item.alert ? 'text-yellow-600' : ''}`}>{item.icon}</span>
                                <span className="font-medium">{item.label}</span>
                                {item.alert && (
                                    <span className="ms-auto bg-yellow-500 text-white text-xs rounded-full px-2 py-0.5 font-bold animate-pulse">
                                        {t('common.required')}
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
                <div className="grid grid-cols-4 gap-1">
                    {navItems.slice(0, 4).map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex flex-col items-center justify-center py-2 text-gray-600 dark:text-gray-400 hover:text-trust-blue relative ${
                                item.alert ? 'bg-yellow-50 dark:bg-yellow-900/20' : ''
                            }`}
                        >
                            <span className={`material-symbols-outlined text-xl ${item.alert ? 'text-yellow-600' : ''}`}>{item.icon}</span>
                            <span className={`text-xs mt-1 ${item.alert ? 'text-yellow-600 font-semibold' : ''}`}>{item.label}</span>
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
