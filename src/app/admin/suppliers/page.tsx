'use client';

import { useState, useEffect } from 'react';
import { apiRequest } from '@/lib/api';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { useToast } from '@/lib/contexts/ToastContext';

interface Supplier {
    id: number;
    business_name: string;
    owner_name?: string;
    email: string;
    phone_number: string;
    cnic?: string;
    location?: string;
    business_type?: string;
    kyc_status: string;
    approved_by_admin: boolean;
    is_blacklisted: boolean;
    blacklist_reason?: string;
    blacklist_category?: string;
    blacklist_expiry_date?: string;
    rating?: number;
}

interface BlacklistAuditLog {
    id: number;
    supplier_id: number;
    action: string;
    previous_status: boolean;
    new_status: boolean;
    reason?: string;
    category?: string;
    created_at: string;
}

const BLACKLIST_CATEGORIES = [
    { value: 'PAYMENT_DEFAULT', labelKey: 'admin.suppliers.paymentDefault', icon: 'credit_card_off', descKey: 'admin.suppliers.settlementIssues' },
    { value: 'FRAUD', labelKey: 'admin.suppliers.fraud', icon: 'gpp_bad', descKey: 'admin.suppliers.fraudulentActivity' },
    { value: 'POLICY_VIOLATION', labelKey: 'admin.suppliers.policyViolation', icon: 'policy', descKey: 'admin.suppliers.violatedGuidelines' },
    { value: 'KYC_FAILURE', labelKey: 'admin.suppliers.kycFailure', icon: 'badge', descKey: 'admin.suppliers.failedVerification' },
    { value: 'MANUAL_REVIEW', labelKey: 'admin.suppliers.manualReview', icon: 'rate_review', descKey: 'admin.suppliers.requiresReview' },
];

export default function AdminSuppliersPage() {
    const { t } = useLanguage();
    const { showToast } = useToast();
    const [suppliers, setSuppliers] = useState<Supplier[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedSupplier, setSelectedSupplier] = useState<any>(null);
    const [showAuditLogs, setShowAuditLogs] = useState(false);
    const [auditLogs, setAuditLogs] = useState<BlacklistAuditLog[]>([]);

    // Blacklist Modal State
    const [showBlacklistModal, setShowBlacklistModal] = useState(false);
    const [blacklistTarget, setBlacklistTarget] = useState<Supplier | null>(null);
    const [blacklistCategory, setBlacklistCategory] = useState('MANUAL_REVIEW');
    const [blacklistReason, setBlacklistReason] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        fetchSuppliers();
    }, []);

    const fetchSuppliers = async () => {
        try {
            const data = await apiRequest<Supplier[]>('/admin/suppliers');
            setSuppliers(data);
        } catch (error) {
            console.error('Failed to fetch suppliers:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const viewSupplierDetails = async (supplierId: number) => {
        try {
            // For now, find the supplier from the list
            const supplier = suppliers.find(s => s.id === supplierId);
            if (supplier) {
                setSelectedSupplier({ supplier });
                setShowAuditLogs(false);

                // Fetch audit logs
                try {
                    const logs = await apiRequest<BlacklistAuditLog[]>(`/admin/blacklist-audit/supplier/${supplierId}`);
                    setAuditLogs(logs);
                } catch (error) {
                    console.error('Failed to fetch audit logs:', error);
                    setAuditLogs([]);
                }
            }
        } catch (error: any) {
            showToast(`Failed to fetch details: ${error.message}`, 'error');
        }
    };

    const openBlacklistModal = (supplier: Supplier) => {
        setBlacklistTarget(supplier);
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
            const url = `/admin/blacklist-supplier/${blacklistTarget.id}?category=${blacklistCategory}${blacklistReason ? `&reason=${encodeURIComponent(blacklistReason)}` : ''}`;
            await apiRequest(url, { method: 'PUT' });
            closeBlacklistModal();
            fetchSuppliers();
        } catch (error: any) {
            showToast(`Failed to blacklist: ${error.message}`, 'error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleUnblacklist = async (supplierId: number) => {
        if (!confirm('Are you sure you want to remove this supplier from the blacklist?')) return;

        try {
            await apiRequest(`/admin/unblacklist-supplier/${supplierId}`, { method: 'PUT' });
            fetchSuppliers();
        } catch (error: any) {
            showToast(`Failed to unblacklist: ${error.message}`, 'error');
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
                <h1 className="text-3xl font-bold text-charcoal dark:text-off-white mb-2">{t('admin.suppliers.title')}</h1>
                <p className="text-gray-600 dark:text-gray-400">{t('admin.suppliers.subtitle')} ({suppliers.length} {t('admin.suppliers.total').toLowerCase()})</p>
            </div>

            {/* Stats Summary */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white dark:bg-charcoal/20 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                    <div className="text-2xl font-bold text-charcoal dark:text-off-white">{suppliers.length}</div>
                    <div className="text-sm text-gray-500">{t('admin.suppliers.total')}</div>
                </div>
                <div className="bg-white dark:bg-charcoal/20 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                    <div className="text-2xl font-bold text-green-600">{suppliers.filter(s => !s.is_blacklisted && s.approved_by_admin).length}</div>
                    <div className="text-sm text-gray-500">{t('admin.suppliers.active')}</div>
                </div>
                <div className="bg-white dark:bg-charcoal/20 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                    <div className="text-2xl font-bold text-red-600">{suppliers.filter(s => s.is_blacklisted).length}</div>
                    <div className="text-sm text-gray-500">{t('admin.suppliers.blacklisted')}</div>
                </div>
                <div className="bg-white dark:bg-charcoal/20 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                    <div className="text-2xl font-bold text-yellow-600">{suppliers.filter(s => s.kyc_status === 'PENDING').length}</div>
                    <div className="text-sm text-gray-500">{t('admin.suppliers.kycPending')}</div>
                </div>
            </div>

            {/* Suppliers Table */}
            <div className="bg-white dark:bg-charcoal/20 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700">
                            <tr>
                                <th className="text-left py-3 px-4 font-semibold text-sm">{t('admin.suppliers.businessName')}</th>
                                <th className="text-left py-3 px-4 font-semibold text-sm">{t('admin.suppliers.contact')}</th>
                                <th className="text-left py-3 px-4 font-semibold text-sm">{t('admin.suppliers.location')}</th>
                                <th className="text-center py-3 px-4 font-semibold text-sm">{t('admin.suppliers.kycStatus')}</th>
                                <th className="text-center py-3 px-4 font-semibold text-sm">{t('admin.suppliers.status')}</th>
                                <th className="text-right py-3 px-4 font-semibold text-sm">{t('admin.suppliers.actions')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {suppliers.map((supplier) => (
                                <tr key={supplier.id} className={`border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 ${supplier.is_blacklisted ? 'bg-red-50/50 dark:bg-red-900/10' : ''}`}>
                                    <td className="py-4 px-4">
                                        <div className="font-semibold text-charcoal dark:text-off-white">{supplier.business_name}</div>
                                        {supplier.owner_name && (
                                            <div className="text-sm text-gray-500">{supplier.owner_name}</div>
                                        )}
                                    </td>
                                    <td className="py-4 px-4">
                                        <div className="text-sm">{supplier.email}</div>
                                        <div className="text-sm text-gray-500">{supplier.phone_number}</div>
                                    </td>
                                    <td className="py-4 px-4 text-sm">{supplier.location || '-'}</td>
                                    <td className="py-4 px-4 text-center">
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${supplier.kyc_status === 'APPROVED' ? 'bg-green-100 text-green-700' :
                                            supplier.kyc_status === 'REJECTED' ? 'bg-red-100 text-red-700' :
                                                'bg-yellow-100 text-yellow-700'
                                            }`}>
                                            {supplier.kyc_status}
                                        </span>
                                    </td>
                                    <td className="py-4 px-4 text-center">
                                        {supplier.is_blacklisted ? (
                                            <div className="flex flex-col items-center gap-1">
                                                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700 flex items-center gap-1">
                                                    <span className="material-symbols-outlined text-sm">block</span>
                                                    Blacklisted
                                                </span>
                                                {supplier.blacklist_category && (
                                                    <span className="text-xs text-gray-500">{supplier.blacklist_category}</span>
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
                                                onClick={() => viewSupplierDetails(supplier.id)}
                                                className="px-3 py-1.5 bg-trust-blue text-white text-xs rounded-lg hover:bg-trust-blue/90 flex items-center gap-1"
                                            >
                                                <span className="material-symbols-outlined text-sm">visibility</span>
                                                {t('admin.suppliers.view')}
                                            </button>
                                            {supplier.is_blacklisted ? (
                                                <button
                                                    onClick={() => handleUnblacklist(supplier.id)}
                                                    className="px-3 py-1.5 bg-green-600 text-white text-xs rounded-lg hover:bg-green-700 flex items-center gap-1"
                                                >
                                                    <span className="material-symbols-outlined text-sm">check_circle</span>
                                                    {t('admin.suppliers.unblock')}
                                                </button>
                                            ) : (
                                                <button
                                                    onClick={() => openBlacklistModal(supplier)}
                                                    className="px-3 py-1.5 bg-red-600 text-white text-xs rounded-lg hover:bg-red-700 flex items-center gap-1"
                                                >
                                                    <span className="material-symbols-outlined text-sm">block</span>
                                                    {t('admin.suppliers.block')}
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
                                        <h2 className="text-xl font-bold text-white">{t('admin.suppliers.blacklistSupplier')}</h2>
                                        <p className="text-red-100 text-sm">{t('admin.suppliers.suspendAccount')}</p>
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
                                    <div className="w-14 h-14 bg-trust-blue/20 rounded-full flex items-center justify-center">
                                        <span className="material-symbols-outlined text-2xl text-trust-blue">store</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-charcoal dark:text-off-white text-lg">{blacklistTarget.business_name}</h3>
                                        {blacklistTarget.owner_name && (
                                            <p className="text-sm text-gray-500">{blacklistTarget.owner_name}</p>
                                        )}
                                        <p className="text-sm text-gray-500">{blacklistTarget.email}</p>
                                        <p className="text-sm text-gray-500">{blacklistTarget.phone_number}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Category Selection */}
                            <div>
                                <label className="block text-sm font-semibold text-charcoal dark:text-off-white mb-3">
                                    {t('admin.suppliers.blacklistCategory')} *
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
                                    {t('admin.suppliers.reason')} ({t('admin.suppliers.optional')})
                                </label>
                                <textarea
                                    value={blacklistReason}
                                    onChange={(e) => setBlacklistReason(e.target.value)}
                                    placeholder={t('admin.suppliers.reasonPlaceholder')}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-charcoal dark:text-off-white focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                                    rows={3}
                                />
                            </div>

                            {/* Warning */}
                            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-4 border border-yellow-200 dark:border-yellow-800">
                                <div className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-yellow-600">warning</span>
                                    <div className="text-sm">
                                        <p className="font-semibold text-yellow-700 dark:text-yellow-400">{t('admin.suppliers.warning')}</p>
                                        <p className="text-yellow-600 dark:text-yellow-500">
                                            {t('admin.suppliers.warningIntro')}
                                        </p>
                                        <ul className="list-disc list-inside mt-1 text-yellow-600 dark:text-yellow-500 space-y-1">
                                            <li>{t('admin.suppliers.hideProducts')}</li>
                                            <li>{t('admin.suppliers.preventOrders')}</li>
                                            <li>{t('admin.suppliers.delaySettlements')}</li>
                                        </ul>
                                        <p className="mt-2 text-yellow-600 dark:text-yellow-500">
                                            {t('admin.suppliers.expiresMonths')}
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
                                {t('admin.suppliers.cancel')}
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
                                        {t('admin.suppliers.confirmBlacklist')}
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Supplier Details Modal */}
            {selectedSupplier && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white dark:bg-charcoal rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                            <h2 className="text-2xl font-bold text-charcoal dark:text-off-white">{t('admin.suppliers.supplierDetails')}</h2>
                            <button onClick={() => setSelectedSupplier(null)} className="text-gray-500 hover:text-gray-700">
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>
                        <div className="p-6">
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div>
                                    <div className="text-sm text-gray-500">{t('admin.suppliers.businessName')}</div>
                                    <div className="font-semibold">{selectedSupplier.supplier.business_name}</div>
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500">{t('admin.suppliers.ownerName')}</div>
                                    <div className="font-semibold">{selectedSupplier.supplier.owner_name || '-'}</div>
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500">Email</div>
                                    <div className="font-semibold">{selectedSupplier.supplier.email}</div>
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500">Phone</div>
                                    <div className="font-semibold">{selectedSupplier.supplier.phone_number}</div>
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500">Location</div>
                                    <div className="font-semibold">{selectedSupplier.supplier.location || '-'}</div>
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500">Business Type</div>
                                    <div className="font-semibold">{selectedSupplier.supplier.business_type || '-'}</div>
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500">CNIC</div>
                                    <div className="font-semibold">{selectedSupplier.supplier.cnic || '-'}</div>
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500">Rating</div>
                                    <div className="font-semibold flex items-center gap-1">
                                        <span className="material-symbols-outlined text-yellow-500 text-sm">star</span>
                                        {selectedSupplier.supplier.rating?.toFixed(1) || '0.0'}
                                    </div>
                                </div>
                            </div>

                            {/* Blacklist Status */}
                            {selectedSupplier.supplier.is_blacklisted && (
                                <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 mb-4 border border-red-200 dark:border-red-800">
                                    <h3 className="font-bold mb-3 text-red-700 dark:text-red-400 flex items-center gap-2">
                                        <span className="material-symbols-outlined">block</span>
                                        {t('admin.suppliers.blacklistStatus')}
                                    </h3>
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div>
                                            <span className="text-gray-500">{t('admin.suppliers.category')}:</span>
                                            <span className="font-semibold ml-2 text-red-700">{selectedSupplier.supplier.blacklist_category || 'N/A'}</span>
                                        </div>
                                        <div>
                                            <span className="text-gray-500">{t('admin.suppliers.reason')}:</span>
                                            <span className="font-semibold ml-2">{selectedSupplier.supplier.blacklist_reason || 'N/A'}</span>
                                        </div>
                                        {selectedSupplier.supplier.blacklist_expiry_date && (
                                            <div className="col-span-2">
                                                <span className="text-gray-500">{t('admin.suppliers.expires')}:</span>
                                                <span className="font-semibold ml-2">{new Date(selectedSupplier.supplier.blacklist_expiry_date).toLocaleDateString()}</span>
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
                                    {t('admin.suppliers.blacklistHistory')} ({auditLogs.length})
                                </button>

                                {showAuditLogs && (
                                    <div className="mt-2 max-h-60 overflow-y-auto">
                                        {auditLogs.length === 0 ? (
                                            <p className="text-sm text-gray-500">{t('admin.suppliers.noBlacklistHistory')}</p>
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
        </div>
    );
}
