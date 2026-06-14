'use client';

import { useState, useEffect } from 'react';
import { apiRequest } from '@/lib/api';
import { useLanguage } from '@/lib/i18n/LanguageContext';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface AnalyticsData {
    total_revenue: number;
    total_orders: number;
    avg_order_value: number;
    revenue_trend: Array<{ month: string; revenue: number }>;
    top_products: Array<{
        id: number;
        name: string;
        rating: number | null;
        stock: number;
    }>;
}

export default function SupplierAnalyticsPage() {
    const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const { t } = useLanguage();

    useEffect(() => {
        fetchAnalytics();
    }, []);

    const fetchAnalytics = async () => {
        try {
            const data = await apiRequest<AnalyticsData>('/suppliers/analytics/overview');
            setAnalyticsData(data);
        } catch (error) {
            console.error('Failed to fetch analytics:', error);
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading || !analyticsData) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-trust-blue"></div>
            </div>
        );
    }

    // Format data for chart
    const chartData = analyticsData.revenue_trend.map(item => ({
        name: new Date(item.month).toLocaleDateString('en-US', { month: 'short' }),
        revenue: item.revenue
    }));

    return (
        <div className="p-6 max-w-7xl mx-auto pb-24 lg:pb-6">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-charcoal dark:text-off-white mb-2">{t('supplier.analytics.title')}</h1>
                <p className="text-gray-600 dark:text-gray-400">{t('supplier.analytics.subtitle')}</p>
            </div>

            {/* Overview Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-trust-blue to-trust-blue/80 rounded-xl p-6 text-white">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="material-symbols-outlined">attach_money</span>
                        <div className="text-sm opacity-90">{t('supplier.analytics.totalRevenue')}</div>
                    </div>
                    <div className="text-4xl font-bold">PKR {analyticsData.total_revenue.toLocaleString()}</div>
                    <div className="text-sm opacity-75 mt-1">{t('supplier.analytics.allTimeEarnings')}</div>
                </div>

                <div className="bg-gradient-to-br from-indus-green to-indus-green/80 rounded-xl p-6 text-white">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="material-symbols-outlined">shopping_bag</span>
                        <div className="text-sm opacity-90">{t('supplier.analytics.totalOrders')}</div>
                    </div>
                    <div className="text-4xl font-bold">{analyticsData.total_orders}</div>
                    <div className="text-sm opacity-75 mt-1">{t('supplier.analytics.ordersCompleted')}</div>
                </div>

                <div className="bg-gradient-to-br from-primary to-primary/80 rounded-xl p-6 text-white">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="material-symbols-outlined">calculate</span>
                        <div className="text-sm opacity-90">{t('supplier.analytics.avgOrderValue')}</div>
                    </div>
                    <div className="text-4xl font-bold">PKR {analyticsData.avg_order_value.toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
                    <div className="text-sm opacity-75 mt-1">{t('supplier.analytics.perOrder')}</div>
                </div>
            </div>

            {/* Revenue Trend Chart */}
            <div className="bg-white dark:bg-charcoal/20 rounded-xl p-8 border border-gray-200 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-charcoal dark:text-off-white mb-6">{t('supplier.analytics.revenueTrend')}</h2>
                <div className="h-80 w-full">
                    {chartData.length > 0 ? (
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart
                                data={chartData}
                                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                            >
                                <defs>
                                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#2D6A4F" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#2D6A4F" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                                <XAxis
                                    dataKey="name"
                                    tick={{ fontSize: 12, fill: '#6B7280' }}
                                    axisLine={false}
                                    tickLine={false}
                                />
                                <YAxis
                                    tick={{ fontSize: 12, fill: '#6B7280' }}
                                    axisLine={false}
                                    tickLine={false}
                                    tickFormatter={(value) => `PKR ${value / 1000}k`}
                                />
                                <Tooltip
                                    formatter={(value: number) => [`PKR ${value.toLocaleString()}`, 'Revenue']}
                                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="revenue"
                                    stroke="#2D6A4F"
                                    fillOpacity={1}
                                    fill="url(#colorRevenue)"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    ) : (
                        <div className="h-full flex items-center justify-center text-gray-500">
                            {t('supplier.analytics.noRevenueData')}
                        </div>
                    )}
                </div>
            </div>

            {/* Top Performing Products */}
            <div className="bg-white dark:bg-charcoal/20 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-charcoal dark:text-off-white mb-6">{t('supplier.analytics.topProducts')}</h2>

                {analyticsData.top_products.length === 0 ? (
                    <div className="text-center py-12">
                        <span className="material-symbols-outlined text-6xl text-gray-300 dark:text-gray-600 mb-4 block">star</span>
                        <p className="text-gray-600 dark:text-gray-400">{t('supplier.analytics.noProducts')}</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th className="text-left py-3 px-4 font-semibold text-gray-600 dark:text-gray-400">{t('supplier.analytics.productName')}</th>
                                    <th className="text-center py-3 px-4 font-semibold text-gray-600 dark:text-gray-400">{t('supplier.analytics.stock')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {analyticsData.top_products.map((product, index) => (
                                    <tr key={product.id} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                                        <td className="py-4 px-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 bg-trust-blue/10 rounded-full flex items-center justify-center text-trust-blue font-bold">
                                                    {index + 1}
                                                </div>
                                                <div className="font-semibold text-charcoal dark:text-off-white">{product.name}</div>
                                            </div>
                                        </td>
                                        <td className="py-4 px-4 text-center">
                                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${product.stock > 0
                                                ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                                                : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
                                                }`}>
                                                {product.stock} {t('supplier.analytics.units')}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}
