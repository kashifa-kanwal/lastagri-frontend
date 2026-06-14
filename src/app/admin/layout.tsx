'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/contexts/AuthContext';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { LanguageToggle } from '@/app/components/LanguageToggle';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { user, isAuthenticated, logout } = useAuth();
    const router = useRouter();
    const { t } = useLanguage();

    useEffect(() => {
        if (!isAuthenticated || user?.role !== 'admin') {
            router.push('/login?role=admin');
        }
    }, [isAuthenticated, user, router]);

    if (!isAuthenticated || user?.role !== 'admin') {
        return null;
    }

    const navItems = [
        { icon: 'dashboard', label: t('nav.admin.dashboard'), href: '/admin/dashboard' },
        { icon: 'verified_user', label: t('nav.admin.verification'), href: '/admin/verification' },
        { icon: 'document_scanner', label: t('nav.admin.ocrInsights'), href: '/admin/ocr-insights' },
        { icon: 'people', label: t('nav.admin.farmers'), href: '/admin/farmers' },
        { icon: 'store', label: t('nav.admin.suppliers'), href: '/admin/suppliers' },
        { icon: 'receipt_long', label: t('nav.admin.transactions'), href: '/admin/transactions' },
        { icon: 'monitoring', label: t('nav.admin.system'), href: '/admin/system' },
        { icon: 'bar_chart', label: t('nav.admin.analytics'), href: '/admin/analytics' },
        { icon: 'forum', label: 'Support Messages', href: '/admin/messages' },
        { icon: 'shield', label: t('nav.admin.risk'), href: '/admin/risk' },
        { icon: 'settings', label: t('nav.admin.settings'), href: '/admin/settings' },
    ];

    return (
        <div className="min-h-screen bg-off-white dark:bg-background-dark">
            {/* Top Navigation */}
            <nav className="bg-white dark:bg-charcoal/20 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <Link href="/admin/dashboard" className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-3xl text-primary">admin_panel_settings</span>
                            <div>
                                <div className="font-black text-xl text-charcoal dark:text-off-white">AgriConnect Admin</div>
                                <div className="text-xs text-gray-500 font-urdu">{t('nav.admin.portalUrdu')}</div>
                            </div>
                        </Link>

                        {/* Right Section */}
                        <div className="flex items-center gap-4">
                            {/* Language Toggle */}
                            <LanguageToggle />

                            {/* System Status */}
                            <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-green-100 dark:bg-green-900/30 rounded-full">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                <span className="text-xs font-semibold text-green-700 dark:text-green-300">{t('common.systemOnline')}</span>
                            </div>

                            {/* Notifications */}
                            <button className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                                <span className="material-symbols-outlined text-gray-600 dark:text-gray-400">notifications</span>
                                <span className="absolute top-1 end-1 w-2 h-2 bg-alert-red rounded-full"></span>
                            </button>

                            {/* User Menu */}
                            <div className="flex items-center gap-3 ps-4 border-s border-gray-200 dark:border-gray-700">
                                <div className="text-end hidden sm:block">
                                    <div className="text-sm font-semibold text-charcoal dark:text-off-white">{user.name}</div>
                                    <div className="text-xs text-gray-500">{t('common.administrator')}</div>
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
                                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary/10 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                            >
                                <span className="material-symbols-outlined">{item.icon}</span>
                                <span className="font-medium">{item.label}</span>
                            </Link>
                        ))}
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="flex-1">
                    {children}
                </main>
            </div>
        </div>
    );
}
