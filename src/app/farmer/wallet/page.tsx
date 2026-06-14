'use client';

import { useAuth } from '@/lib/contexts/AuthContext';
import { Farmer, Installment } from '@/types';
import { useState, useEffect } from 'react';
import { apiRequest } from '@/lib/api';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function WalletPage() {
    const { user } = useAuth();
    const farmer = user as Farmer;
    const [installments, setInstallments] = useState<Installment[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const { t } = useLanguage();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await apiRequest<any[]>('/farmers/installments');
                const mappedInstallments = data.map(i => ({
                    id: i.id.toString(),
                    amount: i.amount_due,
                    dueDate: new Date(i.due_date),
                    paidDate: i.paid_date ? new Date(i.paid_date) : undefined,
                    status: i.status.toLowerCase(),
                    lateFee: i.late_fee,
                } as Installment));
                setInstallments(mappedInstallments);
            } catch (error) {
                console.error('Failed to fetch installments:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    // Calculate dynamic stats
    const totalDebt = installments
        .filter(i => i.status === 'pending' || i.status === 'overdue')
        .reduce((sum, i) => sum + i.amount, 0);

    const availableCredit = farmer.creditLimit - totalDebt;

    const stats = [
        {
            label: t('farmer.wallet.availableCredit'),
            value: `PKR ${availableCredit.toLocaleString()}`,
            icon: 'account_balance_wallet',
            color: 'indus-green',
            change: '',
        },
        {
            label: t('farmer.wallet.totalDebt'),
            value: `PKR ${totalDebt.toLocaleString()}`,
            icon: 'trending_down',
            color: 'alert-red',
            change: '',
        },
        {
            label: t('farmer.wallet.creditLimit'),
            value: `PKR ${farmer.creditLimit.toLocaleString()}`,
            icon: 'credit_card',
            color: 'trust-blue',
        },
    ];

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indus-green"></div>
            </div>
        );
    }

    return (
        <div className="p-6 max-w-7xl mx-auto pb-24 lg:pb-6">
            {/* Header */}
            <div className="mb-6">
                <h1 className="text-3xl font-bold mb-2 text-charcoal dark:text-off-white">{t('farmer.wallet.title')}</h1>
                <p className="text-gray-600 dark:text-gray-400">{t('farmer.wallet.subtitle')}</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {stats.map((stat) => (
                    <div key={stat.label} className="bg-white dark:bg-charcoal/20 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
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
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                            {stat.label}
                        </div>
                    </div>
                ))}
            </div>

            {/* Credit Usage */}
            <div className="bg-white dark:bg-charcoal/20 rounded-xl p-6 border border-gray-200 dark:border-gray-700 mb-8">
                <h2 className="text-xl font-bold mb-4 text-charcoal dark:text-off-white">{t('farmer.wallet.creditUtilization')}</h2>
                <div className="relative mb-4">
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-6 overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-indus-green to-trust-blue flex items-center justify-center text-white text-sm font-semibold transition-all"
                            style={{ width: `${(totalDebt / farmer.creditLimit) * 100}%` }}
                        >
                            {Math.round((totalDebt / farmer.creditLimit) * 100)}%
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                        <span className="text-gray-600 dark:text-gray-400">{t('farmer.wallet.used')}</span>
                        <span className="ml-2 font-semibold">PKR {totalDebt.toLocaleString()}</span>
                    </div>
                    <div>
                        <span className="text-gray-600 dark:text-gray-400">{t('farmer.wallet.available')}</span>
                        <span className="ml-2 font-semibold text-indus-green">PKR {availableCredit.toLocaleString()}</span>
                    </div>
                </div>
            </div>

            {/* Installments List */}
            <div className="bg-white dark:bg-charcoal/20 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-bold mb-4 text-charcoal dark:text-off-white">{t('farmer.wallet.yourInstallments')}</h2>
                <div className="space-y-3">
                    {installments.length === 0 ? (
                        <p className="text-gray-500">{t('farmer.wallet.noInstallments')}</p>
                    ) : (
                        installments.map((inst) => (
                            <div key={inst.id} className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors border border-gray-100 dark:border-gray-800">
                                <div className="flex items-center gap-4">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${inst.status === 'paid' ? 'bg-green-100 dark:bg-green-900/30' : 'bg-yellow-100 dark:bg-yellow-900/30'
                                        }`}>
                                        <span className={`material-symbols-outlined ${inst.status === 'paid' ? 'text-green-600' : 'text-yellow-600'
                                            }`}>
                                            {inst.status === 'paid' ? 'check_circle' : 'schedule'}
                                        </span>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-charcoal dark:text-off-white">Installment #{inst.id}</div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400">{t('farmer.wallet.due')} {inst.dueDate.toLocaleDateString()}</div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-lg font-bold text-charcoal dark:text-off-white">
                                        PKR {inst.amount.toLocaleString()}
                                    </div>
                                    <div className={`text-sm font-medium uppercase ${inst.status === 'paid' ? 'text-green-600' : 'text-yellow-600'}`}>
                                        {inst.status}
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
