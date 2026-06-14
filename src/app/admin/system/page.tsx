'use client';

import { useState, useEffect } from 'react';
import { apiRequest } from '@/lib/api';
import { useLanguage } from '@/lib/i18n/LanguageContext';

interface SystemHealth {
    database_status: string;
    active_users: number;
    total_orders: number;
    system_uptime: string;
}

export default function SystemHealthPage() {
    const { t } = useLanguage();
    const [healthData, setHealthData] = useState<SystemHealth | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

    useEffect(() => {
        fetchHealthData();
        // Refresh every 30 seconds
        const interval = setInterval(fetchHealthData, 30000);
        return () => clearInterval(interval);
    }, []);

    const fetchHealthData = async () => {
        try {
            const data = await apiRequest<SystemHealth>('/admin/system/health');
            setHealthData(data);
            setLastUpdated(new Date());
        } catch (error) {
            console.error('Failed to fetch system health:', error);
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

    return (
        <div className="p-6 max-w-7xl mx-auto pb-24 lg:pb-6">
            {/* Header */}
            <div className="mb-8 flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-bold mb-2 text-charcoal dark:text-off-white">{t('admin.system.title')}</h1>
                    <p className="text-gray-600 dark:text-gray-400">{t('admin.system.subtitle')}</p>
                </div>
                <div className="text-sm text-gray-500">
                    {t('admin.system.lastUpdated')} {lastUpdated.toLocaleTimeString()}
                </div>
            </div>

            {/* Main Status Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {/* Database Status */}
                <div className="bg-white dark:bg-charcoal/20 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm relative overflow-hidden">
                    <div className={`absolute top-0 right-0 p-4 opacity-10`}>
                        <span className="material-symbols-outlined text-6xl">database</span>
                    </div>
                    <div className="relative z-10">
                        <div className="text-sm text-gray-500 mb-2">{t('admin.system.databaseStatus')}</div>
                        <div className="flex items-center gap-2">
                            <span className={`w-3 h-3 rounded-full ${healthData?.database_status === 'healthy' ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></span>
                            <span className="text-2xl font-bold capitalize text-charcoal dark:text-off-white">
                                {healthData?.database_status || 'Unknown'}
                            </span>
                        </div>
                        <div className="text-xs text-green-600 mt-2 font-medium">
                            {healthData?.database_status === 'healthy' ? t('admin.system.operational') : t('admin.system.attentionNeeded')}
                        </div>
                    </div>
                </div>

                {/* Active Users */}
                <div className="bg-white dark:bg-charcoal/20 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <span className="material-symbols-outlined text-6xl">group</span>
                    </div>
                    <div className="relative z-10">
                        <div className="text-sm text-gray-500 mb-2">{t('admin.system.activeUsers')}</div>
                        <div className="text-3xl font-bold text-trust-blue">
                            {healthData?.active_users.toLocaleString()}
                        </div>
                        <div className="text-xs text-gray-500 mt-2">{t('admin.system.registeredAccounts')}</div>
                    </div>
                </div>

                {/* Total Orders */}
                <div className="bg-white dark:bg-charcoal/20 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <span className="material-symbols-outlined text-6xl">shopping_cart</span>
                    </div>
                    <div className="relative z-10">
                        <div className="text-sm text-gray-500 mb-2">{t('admin.system.totalOrders')}</div>
                        <div className="text-3xl font-bold text-indus-green">
                            {healthData?.total_orders.toLocaleString()}
                        </div>
                        <div className="text-xs text-gray-500 mt-2">{t('admin.system.allTimeVolume')}</div>
                    </div>
                </div>

                {/* System Uptime */}
                <div className="bg-white dark:bg-charcoal/20 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <span className="material-symbols-outlined text-6xl">schedule</span>
                    </div>
                    <div className="relative z-10">
                        <div className="text-sm text-gray-500 mb-2">{t('admin.system.uptime')}</div>
                        <div className="text-2xl font-bold text-charcoal dark:text-off-white truncate">
                            {healthData?.system_uptime}
                        </div>
                        <div className="text-xs text-green-600 mt-2 font-medium">{t('admin.system.sinceRestart')}</div>
                    </div>
                </div>
            </div>

            {/* Service Status List (Static for now as backend doesn't support individual services yet) */}
            <div className="bg-white dark:bg-charcoal/20 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden mb-8">
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                    <h2 className="font-bold text-lg text-charcoal dark:text-off-white">{t('admin.system.serviceInfrastructure')}</h2>
                </div>
                <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-green-500">api</span>
                                <span className="font-medium">{t('admin.system.apiGateway')}</span>
                            </div>
                            <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-semibold">{t('admin.system.operational')}</span>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-green-500">lock</span>
                                <span className="font-medium">{t('admin.system.authService')}</span>
                            </div>
                            <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-semibold">{t('admin.system.operational')}</span>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-green-500">payments</span>
                                <span className="font-medium">{t('admin.system.paymentProcessing')}</span>
                            </div>
                            <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-semibold">{t('admin.system.operational')}</span>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-green-500">notifications</span>
                                <span className="font-medium">{t('admin.system.notifications')}</span>
                            </div>
                            <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-semibold">{t('admin.system.operational')}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
