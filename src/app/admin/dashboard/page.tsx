'use client';

import { useState, useEffect } from 'react';
import { apiRequest } from '@/lib/api';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';

interface DashboardStats {
    pending_reviews: number;
    approved: number;
    rejected: number;
    total_farmers: number;
    total_suppliers: number;
    total_orders: number;
}

export default function AdminDashboard() {
    const { t } = useLanguage();
    const [stats, setStats] = useState<DashboardStats | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchDashboardStats();
    }, []);

    const fetchDashboardStats = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const data = await apiRequest<DashboardStats>('/admin/dashboard/stats');
            setStats(data);
        } catch (error) {
            console.error('Failed to fetch dashboard stats:', error);
            setError('Failed to load admin dashboard data.');
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-trust-blue"></div>
            </div>
        );
    }

    if (error || !stats) {
        return (
            <div className="flex flex-col justify-center items-center min-h-screen p-4">
                <div className="text-red-500 text-center mb-4">
                    <span className="material-symbols-outlined text-4xl mb-2">error_outline</span>
                    <p className="text-xl font-bold">Unable to load dashboard</p>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">{error || "No data available"}</p>
                </div>
                <button
                    onClick={fetchDashboardStats}
                    className="px-6 py-2 bg-trust-blue text-white rounded-lg hover:bg-blue-700 transition"
                >
                    Retry
                </button>
            </div>
        );
    }

    return (
        <div className="p-6 max-w-7xl mx-auto pb-24 lg:pb-6">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-charcoal dark:text-off-white mb-2">{t('admin.dashboard.title')}</h1>
                <p className="text-gray-600 dark:text-gray-400">{t('admin.dashboard.subtitle')}</p>
            </div>

            {/* KYC Review Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Link href="/admin/kyc?tab=pending" className="relative overflow-hidden bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl p-6 text-white hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300 group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl group-hover:bg-white/20 transition-all"></div>
                    <div className="relative">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                                <span className="material-symbols-outlined text-white text-2xl">pending_actions</span>
                            </div>
                            <span className="text-xs font-semibold bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">{t('admin.dashboard.requiresAction')}</span>
                        </div>
                        <div className="text-sm font-medium text-white/90 mb-1">{t('admin.dashboard.pendingReviews')}</div>
                        <div className="text-4xl font-extrabold tracking-tight">{stats.pending_reviews}</div>
                    </div>
                </Link>

                <Link href="/admin/kyc?tab=approved" className="relative overflow-hidden bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-6 text-white hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/20 transition-all duration-300 group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl group-hover:bg-white/20 transition-all"></div>
                    <div className="relative">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                                <span className="material-symbols-outlined text-white text-2xl">check_circle</span>
                            </div>
                            <span className="text-xs font-semibold bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">{t('admin.dashboard.activeUsers')}</span>
                        </div>
                        <div className="text-sm font-medium text-white/90 mb-1">{t('admin.dashboard.approved')}</div>
                        <div className="text-4xl font-extrabold tracking-tight">{stats.approved}</div>
                    </div>
                </Link>

                <Link href="/admin/kyc?tab=rejected" className="relative overflow-hidden bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl p-6 text-white hover:-translate-y-1 hover:shadow-xl hover:shadow-rose-500/20 transition-all duration-300 group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl group-hover:bg-white/20 transition-all"></div>
                    <div className="relative">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                                <span className="material-symbols-outlined text-white text-2xl">cancel</span>
                            </div>
                            <span className="text-xs font-semibold bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">{t('admin.dashboard.notApproved')}</span>
                        </div>
                        <div className="text-sm font-medium text-white/90 mb-1">{t('admin.dashboard.rejected')}</div>
                        <div className="text-4xl font-extrabold tracking-tight">{stats.rejected}</div>
                    </div>
                </Link>
            </div>

            {/* Platform Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white dark:bg-charcoal/40 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                    <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/10 dark:to-blue-800/10 rounded-full group-hover:scale-150 transition-transform duration-500 z-0"></div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center">
                                <span className="material-symbols-outlined text-2xl">group</span>
                            </div>
                            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">{t('admin.dashboard.totalFarmers')}</div>
                        </div>
                        <div className="text-3xl font-extrabold text-charcoal dark:text-off-white">{stats.total_farmers}</div>
                    </div>
                </div>

                <div className="bg-white dark:bg-charcoal/40 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                    <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/10 dark:to-purple-800/10 rounded-full group-hover:scale-150 transition-transform duration-500 z-0"></div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-xl flex items-center justify-center">
                                <span className="material-symbols-outlined text-2xl">store</span>
                            </div>
                            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">{t('admin.dashboard.totalSuppliers')}</div>
                        </div>
                        <div className="text-3xl font-extrabold text-charcoal dark:text-off-white">{stats.total_suppliers}</div>
                    </div>
                </div>

                <div className="bg-white dark:bg-charcoal/40 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                    <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/10 dark:to-emerald-800/10 rounded-full group-hover:scale-150 transition-transform duration-500 z-0"></div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-xl flex items-center justify-center">
                                <span className="material-symbols-outlined text-2xl">shopping_bag</span>
                            </div>
                            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">{t('admin.dashboard.totalOrders')}</div>
                        </div>
                        <div className="text-3xl font-extrabold text-charcoal dark:text-off-white">{stats.total_orders}</div>
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href="/admin/kyc" className="bg-white dark:bg-charcoal/40 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:shadow-lg hover:border-trust-blue/50 hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center justify-center text-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-trust-blue/10 to-blue-500/10 dark:from-trust-blue/20 dark:to-blue-500/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                        <span className="material-symbols-outlined text-trust-blue text-3xl">verified_user</span>
                    </div>
                    <div className="text-sm font-bold text-charcoal dark:text-off-white group-hover:text-trust-blue transition-colors">{t('admin.dashboard.kycVerification')}</div>
                </Link>

                <Link href="/admin/farmers" className="bg-white dark:bg-charcoal/40 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:shadow-lg hover:border-indus-green/50 hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center justify-center text-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-indus-green/10 to-green-500/10 dark:from-indus-green/20 dark:to-green-500/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                        <span className="material-symbols-outlined text-indus-green text-3xl">agriculture</span>
                    </div>
                    <div className="text-sm font-bold text-charcoal dark:text-off-white group-hover:text-indus-green transition-colors">{t('admin.dashboard.manageFarmers')}</div>
                </Link>

                <Link href="/admin/suppliers" className="bg-white dark:bg-charcoal/40 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:shadow-lg hover:border-purple-500/50 hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center justify-center text-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500/10 to-purple-600/10 dark:from-purple-500/20 dark:to-purple-600/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                        <span className="material-symbols-outlined text-purple-600 dark:text-purple-400 text-3xl">storefront</span>
                    </div>
                    <div className="text-sm font-bold text-charcoal dark:text-off-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{t('admin.dashboard.manageSuppliers')}</div>
                </Link>

                <Link href="/admin/analytics" className="bg-white dark:bg-charcoal/40 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:shadow-lg hover:border-amber-500/50 hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center justify-center text-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-amber-500/10 to-orange-500/10 dark:from-amber-500/20 dark:to-orange-500/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                        <span className="material-symbols-outlined text-amber-600 dark:text-amber-400 text-3xl">analytics</span>
                    </div>
                    <div className="text-sm font-bold text-charcoal dark:text-off-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">{t('admin.dashboard.viewAnalytics')}</div>
                </Link>
            </div>
        </div>
    );
}
