'use client';

import { useState, useEffect } from 'react';
import { apiRequest } from '@/lib/api';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { useToast } from '@/lib/contexts/ToastContext';

interface Farmer {
    id: number;
    name: string;
    phone_number: string;
    district: string;
    cnic: string;
    land_holding: number;
    credit_limit: number;
    kyc_status: string;
    approved_by_admin: boolean;
    is_blacklisted: boolean;
    blacklist_category?: string;
    blacklist_reason?: string;
    blacklist_expiry_date?: string;
}

interface BlacklistAuditLog {
    id: number;
    farmer_id: number;
    action: string;
    previous_status: boolean;
    new_status: boolean;
    reason?: string;
    category?: string;
    created_at: string;
}

const BLACKLIST_CATEGORIES = [
    { value: 'PAYMENT_DEFAULT', labelKey: 'admin.farmers.paymentDefault', icon: 'credit_card_off', descKey: 'admin.farmers.missedPayments' },
    { value: 'FRAUD', labelKey: 'admin.farmers.fraud', icon: 'gpp_bad', descKey: 'admin.farmers.fraudulentActivity' },
    { value: 'POLICY_VIOLATION', labelKey: 'admin.farmers.policyViolation', icon: 'policy', descKey: 'admin.farmers.violatedTerms' },
    { value: 'KYC_FAILURE', labelKey: 'admin.farmers.kycFailure', icon: 'badge', descKey: 'admin.farmers.failedVerification' },
    { value: 'MANUAL_REVIEW', labelKey: 'admin.farmers.manualReview', icon: 'rate_review', descKey: 'admin.farmers.requiresReview' },
];

export default function AdminFarmersPage() {
    const { t } = useLanguage();
    const { showToast } = useToast();
    const [farmers, setFarmers] = useState<Farmer[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedFarmer, setSelectedFarmer] = useState<any>(null);
    const [showAuditLogs, setShowAuditLogs] = useState(false);
    const [auditLogs, setAuditLogs] = useState<BlacklistAuditLog[]>([]);

    // Blacklist Modal State
    const [showBlacklistModal, setShowBlacklistModal] = useState(false);
    const [blacklistTarget, setBlacklistTarget] = useState<Farmer | null>(null);
    const [blacklistCategory, setBlacklistCategory] = useState('MANUAL_REVIEW');
    const [blacklistReason, setBlacklistReason] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Credit Limit Modal State
    const [creditLimitModalOpen, setCreditLimitModalOpen] = useState(false);
    const [selectedCreditFarmerId, setSelectedCreditFarmerId] = useState<number | null>(null);
    const [newCreditLimitInput, setNewCreditLimitInput] = useState('');

    // Unblacklist Modal State
    const [unblacklistModalOpen, setUnblacklistModalOpen] = useState(false);
    const [unblacklistTargetId, setUnblacklistTargetId] = useState<number | null>(null);

    useEffect(() => {
        fetchFarmers();
    }, []);

    const fetchFarmers = async () => {
        try {
            const data = await apiRequest<Farmer[]>('/admin/farmers');
            setFarmers(data);
        } catch (error) {
            console.error('Failed to fetch farmers:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const viewFarmerDetails = async (farmerId: number) => {
        try {
            const details = await apiRequest(`/admin/farmers/${farmerId}`);
            setSelectedFarmer(details);
            setShowAuditLogs(false);

            // Fetch audit logs
            try {
                const logs = await apiRequest<BlacklistAuditLog[]>(`/admin/blacklist-audit/farmer/${farmerId}`);
                setAuditLogs(logs);
            } catch (error) {
                console.error('Failed to fetch audit logs:', error);
                setAuditLogs([]);
            }
        } catch (error: any) {
            showToast(`Failed to fetch details: ${error.message}`, 'error');
        }
    };

    const updateCreditLimit = (farmerId: number) => {
        setSelectedCreditFarmerId(farmerId);
        setNewCreditLimitInput('');
        setCreditLimitModalOpen(true);
    };

    const confirmUpdateCreditLimit = async () => {
        if (!selectedCreditFarmerId) return;
        const limitStr = newCreditLimitInput.trim();
        if (!limitStr || isNaN(parseFloat(limitStr))) {
            showToast('Please enter a valid credit limit', 'warning');
            return;
        }

        setIsSubmitting(true);
        try {
            await apiRequest(`/admin/farmers/${selectedCreditFarmerId}/credit-limit?new_limit=${parseFloat(limitStr)}`, {
                method: 'PUT'
            });
            showToast('Credit limit updated successfully!', 'success');
            setCreditLimitModalOpen(false);
            fetchFarmers();
        } catch (error: any) {
            showToast(`Failed to update: ${error.message}`, 'error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const openBlacklistModal = (farmer: Farmer) => {
        setBlacklistTarget(farmer);
        setBlacklistCategory('MANUAL_REVIEW');
        setBlacklistReason('');
        setShowBlacklistModal(true);
    };

    const closeBlacklistModal = () => {
        setShowBlacklistModal(false);
        setBlacklistTarget(null);
        setBlacklistCategory('MANUAL_REVIEW');
        setBlacklistReason('');
    };

    const handleBlacklist = async () => {
        if (!blacklistTarget) return;

        setIsSubmitting(true);
        try {
            const url = `/admin/blacklist-farmer/${blacklistTarget.id}?category=${blacklistCategory}${blacklistReason ? `&reason=${encodeURIComponent(blacklistReason)}` : ''}`;
            await apiRequest(url, { method: 'PUT' });
            closeBlacklistModal();
            fetchFarmers();
        } catch (error: any) {
            showToast(`Failed to blacklist: ${error.message}`, 'error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleUnblacklistClick = (farmerId: number) => {
        setUnblacklistTargetId(farmerId);
        setUnblacklistModalOpen(true);
    };

    const confirmUnblacklist = async () => {
        if (!unblacklistTargetId) return;
        setIsSubmitting(true);
        try {
            await apiRequest(`/admin/unblacklist-farmer/${unblacklistTargetId}`, { method: 'PUT' });
            showToast('Farmer successfully removed from the blacklist.', 'success');
            setUnblacklistModalOpen(false);
            fetchFarmers();
        } catch (error: any) {
            showToast(`Failed to unblacklist: ${error.message}`, 'error');
        } finally {
            setIsSubmitting(false);
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
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-charcoal dark:text-off-white mb-2">{t('admin.farmers.title')}</h1>
                <p className="text-gray-600 dark:text-gray-400">{t('admin.farmers.subtitle')} ({farmers.length} {t('admin.farmers.total').toLowerCase()})</p>
            </div>

            {/* Stats Summary */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white dark:bg-charcoal/20 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                    <div className="text-2xl font-bold text-charcoal dark:text-off-white">{farmers.length}</div>
                    <div className="text-sm text-gray-500">{t('admin.farmers.total')}</div>
                </div>
                <div className="bg-white dark:bg-charcoal/20 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                    <div className="text-2xl font-bold text-green-600">{farmers.filter(f => !f.is_blacklisted).length}</div>
                    <div className="text-sm text-gray-500">{t('admin.farmers.active')}</div>
                </div>
                <div className="bg-white dark:bg-charcoal/20 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                    <div className="text-2xl font-bold text-red-600">{farmers.filter(f => f.is_blacklisted).length}</div>
                    <div className="text-sm text-gray-500">{t('admin.farmers.blacklisted')}</div>
                </div>
                <div className="bg-white dark:bg-charcoal/20 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                    <div className="text-2xl font-bold text-yellow-600">{farmers.filter(f => f.kyc_status === 'PENDING').length}</div>
                    <div className="text-sm text-gray-500">{t('admin.farmers.kycPending')}</div>
                </div>
            </div>

            {/* Farmers Table */}
            <div className="bg-white dark:bg-charcoal/20 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700">
                            <tr>
                                <th className="text-left py-3 px-4 font-semibold text-sm">{t('admin.farmers.name')}</th>
                                <th className="text-left py-3 px-4 font-semibold text-sm">{t('admin.farmers.district')}</th>
                                <th className="text-left py-3 px-4 font-semibold text-sm">{t('admin.farmers.landAcres')}</th>
                                <th className="text-left py-3 px-4 font-semibold text-sm">{t('admin.farmers.creditLimit')}</th>
                                <th className="text-center py-3 px-4 font-semibold text-sm">{t('admin.farmers.kycStatus')}</th>
                                <th className="text-center py-3 px-4 font-semibold text-sm">{t('admin.farmers.status')}</th>
                                <th className="text-right py-3 px-4 font-semibold text-sm">{t('admin.farmers.actions')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {farmers.map((farmer) => (
                                <tr key={farmer.id} className={`border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 ${farmer.is_blacklisted ? 'bg-red-50/50 dark:bg-red-900/10' : ''}`}>
                                    <td className="py-4 px-4">
                                        <div className="font-semibold text-charcoal dark:text-off-white">{farmer.name}</div>
                                        <div className="text-sm text-gray-500">{farmer.phone_number}</div>
                                    </td>
                                    <td className="py-4 px-4 text-sm">{farmer.district}</td>
                                    <td className="py-4 px-4 text-sm">{farmer.land_holding}</td>
                                    <td className="py-4 px-4">
                                        <div className="font-bold text-trust-blue">PKR {farmer.credit_limit.toLocaleString()}</div>
                                    </td>
                                    <td className="py-4 px-4 text-center">
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${farmer.kyc_status === 'APPROVED' ? 'bg-green-100 text-green-700' :
                                            farmer.kyc_status === 'REJECTED' ? 'bg-red-100 text-red-700' :
                                                'bg-yellow-100 text-yellow-700'
                                            }`}>
                                            {farmer.kyc_status}
                                        </span>
                                    </td>
                                    <td className="py-4 px-4 text-center">
                                        {farmer.is_blacklisted ? (
                                            <div className="flex flex-col items-center gap-1">
                                                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700 flex items-center gap-1">
                                                    <span className="material-symbols-outlined text-sm">block</span>
                                                    Blacklisted
                                                </span>
                                                {farmer.blacklist_category && (
                                                    <span className="text-xs text-gray-500">{farmer.blacklist_category}</span>
                                                )}
                                            </div>
                                        ) : (
                                            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                                                Active
                                            </span>
                                        )}
                                    </td>
                                    <td className="py-4 px-4 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <button
                                                onClick={() => viewFarmerDetails(farmer.id)}
                                                className="px-3 py-1.5 bg-trust-blue text-white text-xs rounded-lg hover:bg-trust-blue/90 flex items-center gap-1"
                                            >
                                                <span className="material-symbols-outlined text-sm">visibility</span>
                                                {t('admin.farmers.view')}
                                            </button>
                                            <button
                                                onClick={() => updateCreditLimit(farmer.id)}
                                                className="px-3 py-1.5 bg-indus-green text-white text-xs rounded-lg hover:bg-indus-green/90 flex items-center gap-1"
                                            >
                                                <span className="material-symbols-outlined text-sm">edit</span>
                                                {t('admin.farmers.credit')}
                                            </button>
                                            {farmer.is_blacklisted ? (
                                                <button
                                                    onClick={() => handleUnblacklistClick(farmer.id)}
                                                    className="px-3 py-1.5 bg-green-600 text-white text-xs rounded-lg hover:bg-green-700 flex items-center gap-1"
                                                >
                                                    <span className="material-symbols-outlined text-sm">check_circle</span>
                                                    {t('admin.farmers.unblock')}
                                                </button>
                                            ) : (
                                                <button
                                                    onClick={() => openBlacklistModal(farmer)}
                                                    className="px-3 py-1.5 bg-red-600 text-white text-xs rounded-lg hover:bg-red-700 flex items-center gap-1"
                                                >
                                                    <span className="material-symbols-outlined text-sm">block</span>
                                                    {t('admin.farmers.block')}
                                                </button>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Blacklist Modal */}
            {showBlacklistModal && blacklistTarget && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
                    <div className="bg-white dark:bg-charcoal rounded-2xl max-w-lg w-full shadow-2xl my-8 max-h-[90vh] flex flex-col">
                        {/* Header */}
                        <div className="bg-gradient-to-r from-red-600 to-red-700 p-6 rounded-t-2xl flex-shrink-0">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                        <span className="material-symbols-outlined text-white text-2xl">block</span>
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold text-white">{t('admin.farmers.blacklistFarmer')}</h2>
                                        <p className="text-red-100 text-sm">{t('admin.farmers.restrictAccess')}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={closeBlacklistModal}
                                    className="text-white/80 hover:text-white"
                                >
                                    <span className="material-symbols-outlined">close</span>
                                </button>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 space-y-6 overflow-y-auto flex-1">
                            {/* Target Info */}
                            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                                        <span className="material-symbols-outlined text-2xl text-gray-500">person</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-charcoal dark:text-off-white text-lg">{blacklistTarget.name}</h3>
                                        <p className="text-sm text-gray-500">{blacklistTarget.phone_number}</p>
                                        <p className="text-sm text-gray-500">{blacklistTarget.district}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Category Selection */}
                            <div>
                                <label className="block text-sm font-semibold text-charcoal dark:text-off-white mb-3">
                                    {t('admin.farmers.blacklistCategory')} *
                                </label>
                                <div className="grid grid-cols-1 gap-2">
                                    {BLACKLIST_CATEGORIES.map((cat) => (
                                        <button
                                            key={cat.value}
                                            type="button"
                                            onClick={() => setBlacklistCategory(cat.value)}
                                            className={`flex items-center gap-3 p-3 rounded-xl border-2 transition-all text-left ${
                                                blacklistCategory === cat.value
                                                    ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                                                    : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'
                                            }`}
                                        >
                                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                                                blacklistCategory === cat.value
                                                    ? 'bg-red-500 text-white'
                                                    : 'bg-gray-100 dark:bg-gray-800 text-gray-500'
                                            }`}>
                                                <span className="material-symbols-outlined">{cat.icon}</span>
                                            </div>
                                            <div className="flex-1">
                                                <div className={`font-semibold ${
                                                    blacklistCategory === cat.value
                                                        ? 'text-red-700 dark:text-red-400'
                                                        : 'text-charcoal dark:text-off-white'
                                                }`}>
                                                    {t(cat.labelKey)}
                                                </div>
                                                <div className="text-xs text-gray-500">{t(cat.descKey)}</div>
                                            </div>
                                            {blacklistCategory === cat.value && (
                                                <span className="material-symbols-outlined text-red-500">check_circle</span>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Reason */}
                            <div>
                                <label className="block text-sm font-semibold text-charcoal dark:text-off-white mb-2">
                                    {t('admin.farmers.reason')} ({t('admin.farmers.optional')})
                                </label>
                                <textarea
                                    value={blacklistReason}
                                    onChange={(e) => setBlacklistReason(e.target.value)}
                                    placeholder={t('admin.farmers.reasonPlaceholder')}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-charcoal dark:text-off-white focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                                    rows={3}
                                />
                            </div>

                            {/* Warning */}
                            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-4 border border-yellow-200 dark:border-yellow-800">
                                <div className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-yellow-600">warning</span>
                                    <div className="text-sm">
                                        <p className="font-semibold text-yellow-700 dark:text-yellow-400">{t('admin.farmers.warning')}</p>
                                        <p className="text-yellow-600 dark:text-yellow-500">
                                            {t('admin.farmers.warningMessage')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Actions - Fixed at bottom */}
                        <div className="flex gap-3 p-6 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-charcoal rounded-b-2xl flex-shrink-0">
                            <button
                                onClick={closeBlacklistModal}
                                className="flex-1 py-3 px-4 bg-gray-100 dark:bg-gray-800 text-charcoal dark:text-off-white rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            >
                                {t('admin.farmers.cancel')}
                            </button>
                            <button
                                onClick={handleBlacklist}
                                disabled={isSubmitting}
                                className="flex-1 py-3 px-4 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        Processing...
                                    </>
                                ) : (
                                    <>
                                        <span className="material-symbols-outlined">block</span>
                                        {t('admin.farmers.confirmBlacklist')}
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Farmer Details Modal */}
            {selectedFarmer && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white dark:bg-charcoal rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                            <h2 className="text-2xl font-bold text-charcoal dark:text-off-white">{t('admin.farmers.farmerDetails')}</h2>
                            <button onClick={() => setSelectedFarmer(null)} className="text-gray-500 hover:text-gray-700">
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>
                        <div className="p-6">
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div>
                                    <div className="text-sm text-gray-500">{t('admin.farmers.name')}</div>
                                    <div className="font-semibold">{selectedFarmer.farmer.name}</div>
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500">{t('admin.farmers.totalOrders')}</div>
                                    <div className="font-semibold">{selectedFarmer.total_orders}</div>
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500">{t('admin.farmers.totalSpent')}</div>
                                    <div className="font-semibold text-trust-blue">PKR {selectedFarmer.total_spent.toLocaleString()}</div>
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500">{t('admin.farmers.creditLimit')}</div>
                                    <div className="font-semibold text-indus-green">PKR {selectedFarmer.farmer.credit_limit.toLocaleString()}</div>
                                </div>
                            </div>

                            {selectedFarmer.risk_profile && (
                                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 mb-4">
                                    <h3 className="font-bold mb-2">{t('admin.farmers.riskProfile')}</h3>
                                    <div className="grid grid-cols-2 gap-2 text-sm">
                                        <div>{t('admin.farmers.riskScore')}: <span className="font-semibold">{selectedFarmer.risk_profile.risk_score}</span></div>
                                        <div>{t('admin.farmers.riskLabel')}: <span className="font-semibold">{selectedFarmer.risk_profile.risk_label}</span></div>
                                    </div>
                                </div>
                            )}

                            {/* Blacklist Status */}
                            {selectedFarmer.farmer.is_blacklisted && (
                                <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 mb-4 border border-red-200 dark:border-red-800">
                                    <h3 className="font-bold mb-3 text-red-700 dark:text-red-400 flex items-center gap-2">
                                        <span className="material-symbols-outlined">block</span>
                                        {t('admin.farmers.blacklistStatus')}
                                    </h3>
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div>
                                            <span className="text-gray-500">{t('admin.farmers.category')}:</span>
                                            <span className="font-semibold ml-2 text-red-700">{selectedFarmer.farmer.blacklist_category || 'N/A'}</span>
                                        </div>
                                        <div>
                                            <span className="text-gray-500">{t('admin.farmers.reason')}:</span>
                                            <span className="font-semibold ml-2">{selectedFarmer.farmer.blacklist_reason || 'N/A'}</span>
                                        </div>
                                        {selectedFarmer.farmer.blacklist_expiry_date && (
                                            <div className="col-span-2">
                                                <span className="text-gray-500">{t('admin.farmers.expires')}:</span>
                                                <span className="font-semibold ml-2">{new Date(selectedFarmer.farmer.blacklist_expiry_date).toLocaleDateString()}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Audit Logs Section */}
                            <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                                <button
                                    onClick={() => setShowAuditLogs(!showAuditLogs)}
                                    className="flex items-center gap-2 text-sm font-semibold text-trust-blue hover:text-trust-blue/80 mb-2"
                                >
                                    <span className="material-symbols-outlined text-lg">
                                        {showAuditLogs ? 'expand_less' : 'expand_more'}
                                    </span>
                                    {t('admin.farmers.blacklistHistory')} ({auditLogs.length})
                                </button>

                                {showAuditLogs && (
                                    <div className="mt-2 max-h-60 overflow-y-auto">
                                        {auditLogs.length === 0 ? (
                                            <p className="text-sm text-gray-500">{t('admin.farmers.noBlacklistHistory')}</p>
                                        ) : (
                                            <div className="space-y-2">
                                                {auditLogs.map((log) => (
                                                    <div key={log.id} className="bg-gray-50 dark:bg-gray-800/50 rounded p-3 text-xs">
                                                        <div className="flex justify-between items-start mb-1">
                                                            <span className={`font-semibold ${log.action === 'BLACKLIST' ? 'text-red-600' : log.action === 'UNBLACKLIST' ? 'text-green-600' : 'text-orange-600'}`}>
                                                                {log.action}
                                                            </span>
                                                            <span className="text-gray-500">
                                                                {new Date(log.created_at).toLocaleString()}
                                                            </span>
                                                        </div>
                                                        {log.category && (
                                                            <div className="text-gray-600 dark:text-gray-400">Category: {log.category}</div>
                                                        )}
                                                        {log.reason && (
                                                            <div className="text-gray-600 dark:text-gray-400">Reason: {log.reason}</div>
                                                        )}
                                                        <div className="text-gray-500 mt-1">
                                                            Status: {log.previous_status ? 'Blacklisted' : 'Active'} → {log.new_status ? 'Blacklisted' : 'Active'}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Credit Limit Modal */}
            {creditLimitModalOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
                    <div className="bg-white dark:bg-charcoal rounded-2xl w-full max-w-md shadow-2xl overflow-hidden shadow-black/20">
                        <div className="p-6 border-b border-gray-100 dark:border-gray-800">
                            <div className="flex justify-between items-center">
                                <h3 className="text-xl font-bold text-charcoal dark:text-off-white">Update Credit Limit</h3>
                                <button 
                                    onClick={() => setCreditLimitModalOpen(false)}
                                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                                >
                                    <span className="material-symbols-outlined">close</span>
                                </button>
                            </div>
                            <p className="text-sm text-gray-500 mt-1">Set a new credit limit for this farmer.</p>
                        </div>
                        
                        <div className="p-6">
                            <label className="block text-sm font-semibold mb-2 text-charcoal dark:text-off-white">
                                New Credit Limit (PKR) <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="text-gray-500 font-medium sm:text-sm">Rs</span>
                                </div>
                                <input
                                    type="number"
                                    min="0"
                                    step="1000"
                                    value={newCreditLimitInput}
                                    onChange={(e) => setNewCreditLimitInput(e.target.value)}
                                    placeholder="Enter new credit limit"
                                    className="w-full pl-9 pr-3 py-3 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 hover:bg-white focus:bg-white dark:bg-charcoal/40 text-charcoal dark:text-off-white focus:ring-2 focus:ring-trust-blue/50 focus:border-trust-blue outline-none transition-all"
                                    autoFocus
                                />
                            </div>
                        </div>
                        
                        <div className="p-6 bg-gray-50 dark:bg-gray-800/50 flex gap-3 border-t border-gray-100 dark:border-gray-800">
                            <button
                                onClick={() => setCreditLimitModalOpen(false)}
                                disabled={isSubmitting}
                                className="flex-1 py-2.5 rounded-xl font-semibold text-gray-600 dark:text-gray-300 bg-white dark:bg-charcoal border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors disabled:opacity-50"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={confirmUpdateCreditLimit}
                                disabled={!newCreditLimitInput.trim() || isSubmitting}
                                className="flex-1 py-2.5 bg-trust-blue text-white rounded-xl hover:bg-trust-blue/90 font-bold shadow-md shadow-trust-blue/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <><div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div><span>Updating...</span></>
                                ) : (
                                    <><span>Update Limit</span><span className="material-symbols-outlined text-sm">save</span></>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Unblacklist Modal */}
            {unblacklistModalOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
                    <div className="bg-white dark:bg-charcoal rounded-2xl w-full max-w-sm shadow-2xl overflow-hidden">
                        <div className="p-6 text-center">
                            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="material-symbols-outlined text-3xl">how_to_reg</span>
                            </div>
                            <h3 className="text-xl font-bold text-charcoal dark:text-off-white mb-2">Remove from Blacklist</h3>
                            <p className="text-sm text-gray-500">Are you sure you want to remove this farmer from the blacklist? They will regain access to their account and services.</p>
                        </div>
                        <div className="p-4 bg-gray-50 dark:bg-gray-800/50 flex gap-3">
                            <button
                                onClick={() => setUnblacklistModalOpen(false)}
                                disabled={isSubmitting}
                                className="flex-1 py-2 rounded-xl font-semibold text-gray-600 dark:text-gray-300 bg-white dark:bg-charcoal border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors disabled:opacity-50"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={confirmUnblacklist}
                                disabled={isSubmitting}
                                className="flex-1 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 font-bold shadow-md shadow-green-600/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                            >
                                {isSubmitting ? 'Unblocking...' : 'Yes, Unblock'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
