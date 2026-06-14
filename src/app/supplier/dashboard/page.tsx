'use client';

import { useAuth } from '@/lib/contexts/AuthContext';
import { apiRequest } from '@/lib/api';
import { Supplier } from '@/types';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';

interface DashboardStats {
    total_products: number;
    products_in_stock: number;
    products_out_of_stock: number;
    total_orders: number;
    pending_orders: number;
    total_revenue: number;
    average_rating: number;
    recent_orders: Array<{
        id: number;
        farmer_id: number;
        total_amount: number;
        status: string;
        payment_method: string;
        created_at: string;
    }>;
}

export default function SupplierDashboard() {
    const { user } = useAuth();
    const supplier = user as Supplier;
    const [dashboardStats, setDashboardStats] = useState<DashboardStats | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const { t } = useLanguage();

    useEffect(() => {
        const fetchDashboardStats = async () => {
            try {
                const stats = await apiRequest<DashboardStats>('/suppliers/dashboard-stats');
                setDashboardStats(stats);
                setError(null);
            } catch (error) {
                console.error('Failed to fetch dashboard stats:', error);
                setError('Failed to load dashboard data. Please try again.');
            } finally {
                setIsLoading(false);
            }
        };

        if (user) {
            fetchDashboardStats();
        }
    }, [user]);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-trust-blue"></div>
            </div>
        );
    }

    if (error || !dashboardStats) {
        return (
            <div className="flex flex-col justify-center items-center min-h-screen p-4">
                <div className="text-red-500 text-center mb-4">
                    <span className="material-symbols-outlined text-4xl mb-2">error_outline</span>
                    <p className="text-xl font-bold">Unable to load dashboard</p>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">{error || "No data available"}</p>
                </div>
                <button
                    onClick={() => window.location.reload()}
                    className="px-6 py-2 bg-trust-blue text-white rounded-lg hover:bg-blue-700 transition"
                >
                    Retry
                </button>
            </div>
        );
    }

    const stats = [
        {
            label: t('supplier.dashboard.totalProducts'),
            value: dashboardStats.total_products,
            icon: 'inventory_2',
            color: 'trust-blue',
            change: `${dashboardStats.products_in_stock} ${t('supplier.dashboard.inStock')}`,
        },
        {
            label: t('supplier.dashboard.pendingOrders'),
            value: dashboardStats.pending_orders,
            icon: 'pending_actions',
            color: 'primary',
            change: `${dashboardStats.pending_orders} ${t('supplier.dashboard.toProcess')}`,
        },
        {
            label: t('supplier.dashboard.totalOrders'),
            value: dashboardStats.total_orders,
            icon: 'shopping_bag',
            color: 'indus-green',
            change: t('supplier.dashboard.allTime'),
        },
    ];

    return (
        <div className="p-6 max-w-7xl mx-auto pb-24 lg:pb-6">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-charcoal dark:text-off-white mb-2">
                    {t('supplier.dashboard.welcome')}, {supplier.businessName}
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                    {t('supplier.dashboard.subtitle')}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {stats.map((stat) => (
                    <div key={stat.label} className="bg-white dark:bg-charcoal/20 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                        <div className="flex items-start justify-between mb-4">
                            <div className={`w-12 h-12 bg-${stat.color}/10 rounded-lg flex items-center justify-center`}>
                                <span className={`material-symbols-outlined text-${stat.color} text-2xl`}>
                                    {stat.icon}
                                </span>
                            </div>
                        </div>
                        <div className="text-3xl font-bold text-charcoal dark:text-off-white mb-1">
                            {stat.value}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                            {stat.label}
                        </div>
                        <div className="text-xs text-gray-500">
                            {stat.change || stat.subtext}
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <Link href="/supplier/products?action=add" className="bg-white dark:bg-charcoal/20 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-md hover:border-trust-blue transition-all group">
                    <div className="w-12 h-12 bg-trust-blue/10 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform mx-auto">
                        <span className="material-symbols-outlined text-trust-blue text-2xl">add_circle</span>
                    </div>
                    <div className="text-sm font-semibold text-center">{t('supplier.dashboard.addProduct')}</div>
                </Link>
                <Link href="/supplier/orders" className="bg-white dark:bg-charcoal/20 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-md hover:border-indus-green transition-all group">
                    <div className="w-12 h-12 bg-indus-green/10 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform mx-auto">
                        <span className="material-symbols-outlined text-indus-green text-2xl">local_shipping</span>
                    </div>
                    <div className="text-sm font-semibold text-center">{t('supplier.dashboard.processOrders')}</div>
                </Link>
                <Link href="/supplier/analytics" className="bg-white dark:bg-charcoal/20 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-md hover:border-primary transition-all group">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform mx-auto">
                        <span className="material-symbols-outlined text-primary text-2xl">bar_chart</span>
                    </div>
                    <div className="text-sm font-semibold text-center">{t('supplier.dashboard.viewAnalytics')}</div>
                </Link>
                <Link href="/supplier/finance" className="bg-white dark:bg-charcoal/20 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-md hover:border-trust-blue transition-all group">
                    <div className="w-12 h-12 bg-trust-blue/10 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform mx-auto">
                        <span className="material-symbols-outlined text-trust-blue text-2xl">payments</span>
                    </div>
                    <div className="text-sm font-semibold text-center">{t('supplier.dashboard.viewPayments')}</div>
                </Link>
            </div>

            <div className="bg-white dark:bg-charcoal/20 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-charcoal dark:text-off-white">{t('supplier.dashboard.recentOrders')}</h2>
                    <Link href="/supplier/orders" className="text-trust-blue hover:underline text-sm font-semibold">
                        {t('supplier.dashboard.viewAll')}
                    </Link>
                </div>
                {dashboardStats.recent_orders.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                        {t('supplier.dashboard.noRecentOrders')}
                    </div>
                ) : (
                    <div className="space-y-3">
                        {dashboardStats.recent_orders.map((order) => (
                            <div key={order.id} className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50">
                                <div className="flex-1">
                                    <div className="font-semibold">{t('supplier.dashboard.orderId')}{order.id}</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">
                                        {t('supplier.dashboard.farmerId')}: {order.farmer_id} • {new Date(order.created_at).toLocaleDateString()}
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="font-bold text-trust-blue">PKR {order.total_amount.toLocaleString()}</div>
                                    <div className="text-sm">
                                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${order.status === 'DELIVERED' ? 'bg-green-100 text-green-700' :
                                            order.status === 'PENDING' ? 'bg-yellow-100 text-yellow-700' :
                                                'bg-blue-100 text-blue-700'
                                            }`}>
                                            {order.status}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
