'use client';

import { useAuth } from '@/lib/contexts/AuthContext';
import { apiRequest } from '@/lib/api';
import { Farmer } from '@/types';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

interface DashboardStats {
    available_credit: number;
    credit_limit: number;
    total_debt: number;
    credit_used_percentage: number;
    farm_size: number;
    risk_score: number | null;
    risk_label: string | null;
    total_orders: number;
    pending_installments: number;
}

export default function FarmerDashboard() {
    const { user } = useAuth();
    const farmer = user as Farmer;
    const [dashboardStats, setDashboardStats] = useState<DashboardStats | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const { t } = useLanguage();

    useEffect(() => {
        const fetchDashboardStats = async () => {
            try {
                const stats = await apiRequest<DashboardStats>('/farmers/dashboard-stats');
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
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indus-green"></div>
            </div>
        );
    }

    if (error || !dashboardStats) {
        return (
            <div className="flex flex-col justify-center items-center min-h-screen p-4">
                <div className="text-red-500 text-center mb-4">
                    <span className="material-symbols-outlined text-4xl mb-2">error_outline</span>
                    <p className="text-xl font-bold">{t('farmer.dashboard.unableToLoad')}</p>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">{error || "No data available"}</p>
                </div>
                <button
                    onClick={() => window.location.reload()}
                    className="px-6 py-2 bg-indus-green text-white rounded-lg hover:bg-green-700 transition"
                >
                    {t('common.retry')}
                </button>
            </div>
        );
    }

    const stats = [
        {
            icon: 'account_balance_wallet',
            label: t('farmer.dashboard.availableCredit'),
            value: `PKR ${dashboardStats.available_credit.toLocaleString()}`,
            color: 'indus-green',
            subtext: `of PKR ${dashboardStats.credit_limit.toLocaleString()}`,
        },
        {
            icon: 'trending_up',
            label: t('farmer.dashboard.creditUsed'),
            value: `${dashboardStats.credit_used_percentage.toFixed(1)}%`,
            color: 'trust-blue',
            subtext: `PKR ${dashboardStats.total_debt.toLocaleString()} ${t('farmer.dashboard.used')}`,
        },
        {
            icon: 'verified',
            label: t('farmer.dashboard.riskScore'),
            value: dashboardStats.risk_score !== null ? dashboardStats.risk_score.toString() : 'N/A',
            color: 'primary',
            subtext: dashboardStats.risk_label || t('farmer.dashboard.notAssessed'),
        },
        {
            icon: 'agriculture',
            label: t('farmer.dashboard.farmSize'),
            value: `${dashboardStats.farm_size} ${t('common.acres')}`,
            color: 'indus-green',
            subtext: farmer.location?.district || t('farmer.dashboard.unknownLocation'),
        },
    ];

    const quickActions = [
        { icon: 'store', label: t('farmer.dashboard.browseProducts'), href: '/farmer/marketplace', color: 'indus-green' },
        { icon: 'payment', label: t('farmer.dashboard.makePayment'), href: '/farmer/wallet', color: 'trust-blue' },
        { icon: 'partly_cloudy_day', label: t('farmer.dashboard.viewWeather'), href: '/farmer/weather', color: 'primary' },
        { icon: 'groups', label: t('farmer.dashboard.community'), href: '/farmer/community', color: 'indus-green' },
    ];

    // Safely parse crops (could be string or array)
    const farmerCrops = typeof farmer.crops === 'string'
        ? farmer.crops.split(',').map(c => c.trim())
        : (Array.isArray(farmer.crops) ? farmer.crops : []);

    return (
        <div className="p-6 max-w-7xl mx-auto pb-24 lg:pb-6">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-charcoal dark:text-off-white mb-2">
                    <span className="font-urdu">السلام عليكم،</span> {farmer.name}
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                    {t('farmer.dashboard.greeting')}
                </p>
            </div>

            {/* KYC Verification Banner */}
            {!['APPROVED', 'AUTO_APPROVED', 'AUTO_APPROVED_FLAGGED'].includes(farmer.kycStatus) &&
                (() => {
                    const isError = farmer.kycStatus === 'REJECTED' || farmer.kycStatus === 'REQUIRES_RESUBMISSION';
                    const isProcessing = ['UNDER_REVIEW', 'DOCUMENTS_SUBMITTED', 'REQUIRES_MANUAL_REVIEW', 'OCR_PROCESSING'].includes(farmer.kycStatus);
                    const bgClass = isError
                        ? 'bg-red-50 dark:bg-red-900/20 border-red-300 dark:border-red-700'
                        : isProcessing
                            ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-300 dark:border-blue-700'
                            : 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-300 dark:border-yellow-700';
                    const iconBgClass = isError ? 'bg-red-100 dark:bg-red-800' : isProcessing ? 'bg-blue-100 dark:bg-blue-800' : 'bg-yellow-100 dark:bg-yellow-800';
                    const iconTextClass = isError ? 'text-red-600 dark:text-red-400' : isProcessing ? 'text-blue-600 dark:text-blue-400' : 'text-yellow-600 dark:text-yellow-400';
                    const titleClass = isError ? 'text-red-800 dark:text-red-200' : isProcessing ? 'text-blue-800 dark:text-blue-200' : 'text-yellow-800 dark:text-yellow-200';
                    const descClass = isError ? 'text-red-700 dark:text-red-300' : isProcessing ? 'text-blue-700 dark:text-blue-300' : 'text-yellow-700 dark:text-yellow-300';

                    const icon = isError ? 'error' : isProcessing ? 'hourglass_top' : 'verified_user';
                    const title = farmer.kycStatus === 'REJECTED' ? t('farmer.dashboard.kycRejected')
                        : farmer.kycStatus === 'REQUIRES_RESUBMISSION' ? t('farmer.dashboard.documentsResubmission')
                        : farmer.kycStatus === 'OCR_PROCESSING' ? t('farmer.dashboard.aiVerificationInProgress')
                        : farmer.kycStatus === 'REQUIRES_MANUAL_REVIEW' ? t('farmer.dashboard.manualReviewInProgress')
                        : isProcessing ? t('farmer.dashboard.kycInProgress')
                        : t('farmer.dashboard.completeKyc');
                    const description = farmer.kycStatus === 'REJECTED' ? t('farmer.dashboard.kycRejectedMsg')
                        : farmer.kycStatus === 'REQUIRES_RESUBMISSION' ? t('farmer.dashboard.documentsResubmitMsg')
                        : farmer.kycStatus === 'OCR_PROCESSING' ? t('farmer.dashboard.ocrProcessingMsg')
                        : farmer.kycStatus === 'REQUIRES_MANUAL_REVIEW' ? t('farmer.dashboard.manualReviewMsg')
                        : isProcessing ? t('farmer.dashboard.documentsUnderReviewMsg')
                        : t('farmer.dashboard.uploadDocumentsMsg');

                    return (
                        <div className={`mb-8 rounded-xl p-6 border-2 ${bgClass}`}>
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                <div className="flex items-start gap-4">
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${iconBgClass}`}>
                                        <span className={`material-symbols-outlined text-2xl ${iconTextClass}`}>{icon}</span>
                                    </div>
                                    <div>
                                        <h3 className={`text-lg font-bold ${titleClass}`}>{title}</h3>
                                        <p className={`text-sm mt-1 ${descClass}`}>{description}</p>
                                    </div>
                                </div>
                                {(farmer.kycStatus === 'PENDING' || farmer.kycStatus === 'REJECTED' || farmer.kycStatus === 'REQUIRES_RESUBMISSION') && (
                                    <Link
                                        href="/farmer/kyc"
                                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all flex-shrink-0 ${
                                            isError ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-yellow-500 hover:bg-yellow-600 text-white'
                                        }`}
                                    >
                                        <span className="material-symbols-outlined">upload_file</span>
                                        {farmer.kycStatus === 'PENDING' ? t('farmer.dashboard.uploadDocuments') : t('farmer.dashboard.resubmitDocuments')}
                                    </Link>
                                )}
                            </div>
                        </div>
                    );
                })()}

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat) => (
                    <div key={stat.label} className="bg-white dark:bg-charcoal/20 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                        <div className="flex items-start justify-between mb-4">
                            <div className={`w-12 h-12 bg-${stat.color}/10 rounded-lg flex items-center justify-center`}>
                                <span className={`material-symbols-outlined text-${stat.color} text-2xl`}>
                                    {stat.icon}
                                </span>
                            </div>
                        </div>
                        <div className="text-2xl font-bold text-charcoal dark:text-off-white mb-1">
                            {stat.value}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                            {stat.label}
                        </div>
                        <div className="text-xs text-gray-500">
                            {stat.subtext}
                        </div>
                    </div>
                ))}
            </div>

            {/* Credit Usage Gauge */}
            <div className="bg-white dark:bg-charcoal/20 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 mb-8">
                <h2 className="text-xl font-bold mb-6 text-charcoal dark:text-off-white">
                    {t('farmer.dashboard.creditFacility')}
                </h2>
                <div className="relative">
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-8 overflow-hidden">
                        <div
                            className="bg-gradient-to-r from-indus-green to-trust-blue h-full transition-all duration-500 flex items-center justify-center text-white text-sm font-semibold"
                            style={{ width: `${Math.min(dashboardStats.credit_used_percentage, 100)}%` }}
                        >
                            {dashboardStats.credit_used_percentage > 5 && `${dashboardStats.credit_used_percentage.toFixed(1)}${t('farmer.dashboard.percentUsed')}`}
                        </div>
                    </div>
                    <div className="flex justify-between mt-2 text-sm">
                        <span className="text-gray-600 dark:text-gray-400">
                            PKR {dashboardStats.total_debt.toLocaleString()} {t('farmer.dashboard.used')}
                        </span>
                        <span className="text-gray-600 dark:text-gray-400">
                            PKR {dashboardStats.available_credit.toLocaleString()} {t('farmer.dashboard.available')}
                        </span>
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="mb-8">
                <h2 className="text-xl font-bold mb-4 text-charcoal dark:text-off-white">
                    {t('farmer.dashboard.quickActions')}
                </h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {quickActions.map((action) => (
                        <Link
                            key={action.href}
                            href={action.href}
                            className={`bg-white dark:bg-charcoal/20 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md hover:border-${action.color} transition-all group`}
                        >
                            <div className={`w-14 h-14 bg-${action.color}/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                <span className={`material-symbols-outlined text-${action.color} text-3xl`}>
                                    {action.icon}
                                </span>
                            </div>
                            <div className="text-sm font-semibold text-charcoal dark:text-off-white">
                                {action.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Crop Information */}
            <div className="bg-white dark:bg-charcoal/20 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-bold mb-4 text-charcoal dark:text-off-white">
                    {t('farmer.dashboard.myCrops')}
                </h2>
                <div className="flex flex-wrap gap-2">
                    {farmerCrops.length > 0 ? (
                        farmerCrops.map((crop) => (
                            <span
                                key={crop}
                                className="px-4 py-2 bg-indus-green/10 text-indus-green rounded-full text-sm font-medium"
                            >
                                {crop}
                            </span>
                        ))
                    ) : (
                        <p className="text-gray-500">{t('farmer.dashboard.noCrops')}</p>
                    )}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                            <span className="text-gray-600 dark:text-gray-400">{t('farmer.dashboard.location')}</span>
                            <div className="font-semibold text-charcoal dark:text-off-white">
                                {farmer.location?.village || t('farmer.dashboard.unknownVillage')}, {farmer.location?.district || t('farmer.dashboard.unknownDistrict')}
                            </div>
                        </div>
                        <div>
                            <span className="text-gray-600 dark:text-gray-400">{t('farmer.dashboard.kycStatus')}</span>
                            <div className="font-semibold">
                                <span className={`px-3 py-1 rounded-full text-xs ${
                                    ['APPROVED', 'AUTO_APPROVED', 'AUTO_APPROVED_FLAGGED'].includes(farmer.kycStatus)
                                        ? 'bg-green-100 text-green-700'
                                        : farmer.kycStatus === 'REJECTED' || farmer.kycStatus === 'REQUIRES_RESUBMISSION'
                                            ? 'bg-red-100 text-red-700'
                                            : farmer.kycStatus === 'UNDER_REVIEW' || farmer.kycStatus === 'DOCUMENTS_SUBMITTED' || farmer.kycStatus === 'REQUIRES_MANUAL_REVIEW'
                                                ? 'bg-blue-100 text-blue-700'
                                                : 'bg-yellow-100 text-yellow-700'
                                }`}>
                                    {farmer.kycStatus === 'APPROVED' ? t('farmer.dashboard.approved')
                                        : farmer.kycStatus === 'AUTO_APPROVED' ? t('farmer.dashboard.autoApproved')
                                            : farmer.kycStatus === 'AUTO_APPROVED_FLAGGED' ? t('farmer.dashboard.approvedFlagged')
                                                : farmer.kycStatus === 'REJECTED' ? t('farmer.dashboard.rejected')
                                                    : farmer.kycStatus === 'REQUIRES_RESUBMISSION' ? t('farmer.dashboard.resubmissionRequired')
                                                        : farmer.kycStatus === 'UNDER_REVIEW' ? t('farmer.dashboard.underReview')
                                                            : farmer.kycStatus === 'DOCUMENTS_SUBMITTED' ? t('farmer.dashboard.documentsSubmitted')
                                                                : farmer.kycStatus === 'REQUIRES_MANUAL_REVIEW' ? t('farmer.dashboard.manualReview')
                                                                    : t('farmer.dashboard.pending')}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
