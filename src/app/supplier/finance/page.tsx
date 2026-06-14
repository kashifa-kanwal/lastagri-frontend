'use client';

import { useState, useEffect } from 'react';
import { apiRequest } from '@/lib/api';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { useToast } from '@/lib/contexts/ToastContext';

interface Settlement {
    order_id: number;
    farmer_name: string;
    order_amount: number;
    platform_fee: number;
    net_amount: number;
    payment_method: string;
    farmer_fully_paid: boolean;
    settled_at: string | null;
    status: 'SETTLED' | 'ADVANCE_PAID';
}

interface FinanceData {
    total_revenue: number;
    platform_fee: number;
    available_balance: number;
    pending_orders_value: number;
    total_orders: number;
    settlements: Settlement[];
}

export default function SupplierFinancePage() {
    const [financeData, setFinanceData] = useState<FinanceData | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const { t } = useLanguage();
    const { showToast } = useToast();

    useEffect(() => { fetchFinanceData(); }, []);

    const fetchFinanceData = async () => {
        try {
            const data = await apiRequest<FinanceData>('/suppliers/finance/balance');
            setFinanceData(data);
        } catch (error) {
            console.error('Failed to fetch finance data:', error);
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading || !financeData) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-trust-blue"></div>
            </div>
        );
    }

    return (
        <div className="p-6 max-w-7xl mx-auto pb-24 lg:pb-6">
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-charcoal dark:text-off-white mb-1">{t('supplier.finance.title')}</h1>
                <p className="text-gray-500 text-sm">Interest-free BNPL platform — 5% service fee per order</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="bg-gradient-to-br from-indus-green to-indus-green/80 rounded-xl p-5 text-white">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="material-symbols-outlined text-lg">account_balance_wallet</span>
                        <div className="text-sm opacity-90">Available Balance</div>
                    </div>
                    <div className="text-2xl font-bold">PKR {financeData.available_balance.toLocaleString()}</div>
                    <div className="text-xs opacity-75 mt-1">Ready for withdrawal</div>
                </div>
                <div className="bg-white dark:bg-charcoal/20 rounded-xl p-5 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-2 mb-2 text-gray-500">
                        <span className="material-symbols-outlined text-lg">trending_up</span>
                        <div className="text-sm">Total Revenue</div>
                    </div>
                    <div className="text-2xl font-bold text-charcoal dark:text-off-white">PKR {financeData.total_revenue.toLocaleString()}</div>
                    <div className="text-xs text-gray-400 mt-1">From delivered orders</div>
                </div>
                <div className="bg-white dark:bg-charcoal/20 rounded-xl p-5 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-2 mb-2 text-gray-500">
                        <span className="material-symbols-outlined text-lg">receipt</span>
                        <div className="text-sm">Platform Fee (5%)</div>
                    </div>
                    <div className="text-2xl font-bold text-charcoal dark:text-off-white">PKR {financeData.platform_fee.toLocaleString()}</div>
                    <div className="text-xs text-gray-400 mt-1">Service charges</div>
                </div>
                <div className="bg-white dark:bg-charcoal/20 rounded-xl p-5 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-2 mb-2 text-gray-500">
                        <span className="material-symbols-outlined text-lg">local_shipping</span>
                        <div className="text-sm">Active Orders</div>
                    </div>
                    <div className="text-2xl font-bold text-charcoal dark:text-off-white">PKR {financeData.pending_orders_value.toLocaleString()}</div>
                    <div className="text-xs text-gray-400 mt-1">Being processed</div>
                </div>
            </div>

            {/* How It Works */}
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-5 border border-blue-200 dark:border-blue-700 mb-6">
                <h3 className="font-bold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg">info</span>
                    Platform Payment Model — Interest Free (5% Fee)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                    <div className="flex items-start gap-2">
                        <span className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold shrink-0">1</span>
                        <p className="text-blue-700 dark:text-blue-300">Farmer BNPL order karta hai</p>
                    </div>
                    <div className="flex items-start gap-2">
                        <span className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold shrink-0">2</span>
                        <p className="text-blue-700 dark:text-blue-300">Order deliver karo — 95% advance mil jaata hai</p>
                    </div>
                    <div className="flex items-start gap-2">
                        <span className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold shrink-0">3</span>
                        <p className="text-blue-700 dark:text-blue-300">Request Payout karke bank mein transfer lo</p>
                    </div>
                </div>
            </div>

            {/* Request Payout */}
            {financeData.available_balance > 0 && (
                <div className="bg-white dark:bg-charcoal/20 rounded-xl p-6 border border-gray-200 dark:border-gray-700 mb-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-xl font-bold text-charcoal dark:text-off-white mb-1">Request Payout</h2>
                            <p className="text-gray-500 text-sm">Transfer to your bank account</p>
                        </div>
                        <div className="text-right">
                            <div className="text-3xl font-bold text-indus-green">PKR {financeData.available_balance.toLocaleString()}</div>
                            <button
                                className="mt-2 px-6 py-2 bg-indus-green text-white rounded-lg hover:bg-indus-green/90 font-semibold flex items-center gap-2 text-sm ml-auto"
                                onClick={() => showToast('Payout request submitted! Admin will process in 2-3 business days.', 'success')}>
                                <span className="material-symbols-outlined text-base">send</span>
                                Request Payout
                            </button>
                        </div>
                    </div>
                    <div className="mt-4 text-xs text-gray-400 space-y-1 border-t pt-3">
                        <p>• Minimum payout: PKR 1,000</p>
                        <p>• Processing time: 2-3 business days</p>
                        <p>• Make sure bank details are up to date in Settings</p>
                    </div>
                </div>
            )}

            {/* All Settlements */}
            <div className="bg-white dark:bg-charcoal/20 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-indus-green">receipt_long</span>
                    Settlement History ({financeData.settlements.length})
                </h2>

                {financeData.settlements.length === 0 ? (
                    <div className="text-center py-8">
                        <span className="material-symbols-outlined text-5xl text-gray-300 mb-3 block">history</span>
                        <p className="text-gray-500 text-sm">No settlements yet</p>
                        <p className="text-xs text-gray-400 mt-1">Appears when orders are delivered</p>
                    </div>
                ) : (
                    <div className="space-y-3">
                        {financeData.settlements.map(s => (
                            <div key={s.order_id} className={`rounded-lg p-4 border ${s.farmer_fully_paid ? 'bg-green-50 dark:bg-green-900/10 border-green-200 dark:border-green-800' : 'bg-gray-50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700'}`}>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <div className="font-bold text-charcoal dark:text-off-white">
                                            Order #{s.order_id} — {s.farmer_name}
                                        </div>
                                        <div className="text-xs text-gray-500 mt-0.5 flex items-center gap-2">
                                            <span>{s.payment_method}</span>
                                            <span>•</span>
                                            <span>{s.settled_at ? new Date(s.settled_at).toLocaleDateString('en-PK', { day: 'numeric', month: 'short', year: 'numeric' }) : 'Recently'}</span>
                                            <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${s.farmer_fully_paid ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                                                {s.farmer_fully_paid ? '✓ Fully Paid' : 'Advance Paid'}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-lg font-bold text-indus-green">+PKR {s.net_amount.toLocaleString()}</div>
                                        <div className="text-xs text-gray-400">
                                            PKR {s.order_amount.toLocaleString()} − PKR {s.platform_fee.toLocaleString()} fee
                                        </div>
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