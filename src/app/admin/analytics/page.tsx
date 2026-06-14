'use client';

import { useState, useEffect } from 'react';
import { apiRequest } from '@/lib/api';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
    PieChart, Pie, Cell,
    BarChart, Bar
} from 'recharts';

interface AnalyticsData {
    userGrowth: {
        farmers: Array<{ month: string; count: number }>;
        suppliers: Array<{ month: string; count: number }>;
    };
    categoryDistribution: Array<{ category: string; count: number }>;
    regionalPerformance: Array<{ district: string; farmer_count: number }>;
}

const COLORS = ['#2D6A4F', '#007EA7', '#D4AF37', '#e74c3c', '#9b59b6', '#34495e'];

export default function AdminAnalyticsPage() {
    const { t } = useLanguage();
    const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchAnalytics();
    }, []);

    const fetchAnalytics = async () => {
        try {
            const [userGrowth, categories, regions] = await Promise.all([
                apiRequest('/admin/analytics/user-growth'),
                apiRequest('/admin/analytics/category-distribution'),
                apiRequest('/admin/analytics/regional-performance')
            ]);

            setAnalytics({
                userGrowth: userGrowth as any,
                categoryDistribution: categories as AnalyticsData['categoryDistribution'],
                regionalPerformance: regions as AnalyticsData['regionalPerformance']
            });
        } catch (error) {
            console.error('Failed to fetch analytics:', error);
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading || !analytics) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-trust-blue"></div>
            </div>
        );
    }

    // Process User Growth Data for Line Chart
    // We need to merge farmers and suppliers data by month
    const growthDataMap = new Map<string, any>();

    analytics.userGrowth.farmers.forEach(d => {
        const month = new Date(d.month).toLocaleDateString('en-US', { month: 'short' });
        if (!growthDataMap.has(month)) growthDataMap.set(month, { name: month, farmers: 0, suppliers: 0 });
        growthDataMap.get(month).farmers = d.count;
    });

    analytics.userGrowth.suppliers.forEach(d => {
        const month = new Date(d.month).toLocaleDateString('en-US', { month: 'short' });
        if (!growthDataMap.has(month)) growthDataMap.set(month, { name: month, farmers: 0, suppliers: 0 });
        growthDataMap.get(month).suppliers = d.count;
    });

    const growthData = Array.from(growthDataMap.values());

    return (
        <div className="p-6 max-w-7xl mx-auto pb-24 lg:pb-6">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-charcoal dark:text-off-white mb-2">{t('admin.analytics.title')}</h1>
                <p className="text-gray-600 dark:text-gray-400">{t('admin.analytics.subtitle')}</p>
            </div>

            {/* User Growth Chart */}
            <div className="bg-white dark:bg-charcoal/20 rounded-xl p-6 border border-gray-200 dark:border-gray-700 mb-6">
                <h2 className="text-xl font-bold text-charcoal dark:text-off-white mb-6">{t('admin.analytics.userGrowth')}</h2>
                <div className="h-80 w-full">
                    {growthData.length > 0 ? (
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={growthData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                                <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#6B7280' }} axisLine={false} tickLine={false} />
                                <YAxis tick={{ fontSize: 12, fill: '#6B7280' }} axisLine={false} tickLine={false} />
                                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                                <Legend />
                                <Line type="monotone" dataKey="farmers" name={t('admin.analytics.farmers')} stroke="#2D6A4F" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                                <Line type="monotone" dataKey="suppliers" name={t('admin.analytics.suppliers')} stroke="#007EA7" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    ) : (
                        <div className="h-full flex items-center justify-center text-gray-500">{t('admin.analytics.noGrowthData')}</div>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Category Distribution */}
                <div className="bg-white dark:bg-charcoal/20 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <h2 className="text-xl font-bold text-charcoal dark:text-off-white mb-6">{t('admin.analytics.categoryDistribution')}</h2>
                    <div className="h-80 w-full">
                        {analytics.categoryDistribution.length > 0 ? (
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={analytics.categoryDistribution}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        outerRadius={100}
                                        fill="#8884d8"
                                        dataKey="count"
                                        nameKey="category"
                                        label={({ name, percent }: { name?: string; percent?: number }) => `${name || ''} ${((percent || 0) * 100).toFixed(0)}%`}
                                    >
                                        {analytics.categoryDistribution.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                        ) : (
                            <div className="h-full flex items-center justify-center text-gray-500">{t('admin.analytics.noCategoryData')}</div>
                        )}
                    </div>
                </div>

                {/* Regional Performance */}
                <div className="bg-white dark:bg-charcoal/20 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <h2 className="text-xl font-bold text-charcoal dark:text-off-white mb-6">{t('admin.analytics.regionalPerformance')}</h2>
                    <div className="h-80 w-full">
                        {analytics.regionalPerformance.length > 0 ? (
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                    data={analytics.regionalPerformance.slice(0, 10)}
                                    layout="vertical"
                                    margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#E5E7EB" />
                                    <XAxis type="number" hide />
                                    <YAxis
                                        dataKey="district"
                                        type="category"
                                        width={100}
                                        tick={{ fontSize: 12, fill: '#6B7280' }}
                                        axisLine={false}
                                        tickLine={false}
                                    />
                                    <Tooltip cursor={{ fill: 'transparent' }} />
                                    <Bar dataKey="farmer_count" name={t('admin.analytics.farmers')} fill="#2D6A4F" radius={[0, 4, 4, 0]} barSize={20} />
                                </BarChart>
                            </ResponsiveContainer>
                        ) : (
                            <div className="h-full flex items-center justify-center text-gray-500">{t('admin.analytics.noRegionalData')}</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
