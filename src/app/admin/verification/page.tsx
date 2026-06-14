'use client';

import { useState, useEffect } from 'react';
import { apiRequest, API_URL } from '@/lib/api';
import Image from 'next/image';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { useToast } from '@/lib/contexts/ToastContext';

interface KYCStats {
    farmers: {
        pending: number;
        documents_submitted: number;
        under_review: number;
        approved: number;
        rejected: number;
        requires_resubmission: number;
        total_pending_review: number;
    };
    suppliers: {
        pending: number;
        documents_submitted: number;
        under_review: number;
        approved: number;
        rejected: number;
        requires_resubmission: number;
        total_pending_review: number;
    };
    total_pending_review: number;
}

interface KYCApplication {
    id: number;
    name?: string;
    business_name?: string;
    owner_name?: string;
    phone_number: string;
    cnic: string;
    district?: string;
    tehsil?: string;
    village?: string;
    land_holding?: number;
    location?: string;
    business_type?: string;
    kyc_status: string;
    documents_count: number;
    required_documents: number;
    auto_credit_limit?: number;
    created_at: string;
}

interface KYCDocument {
    id: number;
    document_type: string;
    file_name: string;
    file_path: string;
    file_size: number;
    mime_type: string;
    status: string;
    verification_notes: string | null;
    created_at: string;
}

interface ApplicationDetail {
    user_type: string;
    farmer?: any;
    supplier?: any;
    documents: KYCDocument[];
    required_documents: string[];
    optional_documents: string[];
    missing_required: string[];
    verification: any;
    status_history: any[];
    checks: {
        has_duplicate_cnic: boolean;
        was_blacklisted_before?: boolean;
        all_required_docs_uploaded: boolean;
    };
    credit_assessment?: {
        auto_calculated_limit: number;
        land_holding_acres: number;
        current_credit_limit: number;
    };
    // Auto-KYC fields
    ocr_results?: any[];
    auto_verified?: boolean;
    ocr_comparison?: {
        ocr_cnic: string | null;
        signup_cnic: string;
        ocr_name: string | null;
        signup_name: string;
        name_similarity_score: number | null;
        face_similarity_score: number | null;
        ocr_expiry: string | null;
    };
    failed_checks?: string[];
}

interface VerificationChecklist {
    cnic_name_matches: boolean;
    cnic_number_matches: boolean;
    cnic_photo_matches_selfie: boolean;
    cnic_not_expired: boolean;
    address_verified: boolean;
    land_document_verified: boolean;
    land_area_matches: boolean;
    business_registration_verified: boolean;
    no_duplicate_cnic: boolean;
    no_blacklist_history: boolean;
}

const formatPKR = (amount: number) => {
    return new Intl.NumberFormat('en-PK', {
        style: 'currency',
        currency: 'PKR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
};

const DOC_TYPE_KEYS: { [key: string]: string } = {
    CNIC_FRONT: 'admin.verification.cnicFront',
    CNIC_BACK: 'admin.verification.cnicBack',
    SELFIE_WITH_CNIC: 'admin.verification.selfieWithCnic',
    LAND_DOCUMENT: 'admin.verification.landDocument',
    UTILITY_BILL: 'admin.verification.utilityBill',
    BANK_STATEMENT: 'admin.verification.bankStatement',
    BUSINESS_REGISTRATION: 'admin.verification.businessRegistration',
    SHOP_OWNERSHIP: 'admin.verification.shopOwnership',
    BANK_ACCOUNT_PROOF: 'admin.verification.bankAccountProof'
};

export default function AdminKYCVerificationPage() {
    const { t } = useLanguage();
    const { showToast } = useToast();
    const [stats, setStats] = useState<KYCStats | null>(null);
    const [applications, setApplications] = useState<{ farmers: KYCApplication[], suppliers: KYCApplication[] }>({ farmers: [], suppliers: [] });
    const [selectedApp, setSelectedApp] = useState<{ type: 'farmer' | 'supplier', id: number } | null>(null);
    const [appDetail, setAppDetail] = useState<ApplicationDetail | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoadingDetail, setIsLoadingDetail] = useState(false);
    const [activeTab, setActiveTab] = useState<'pending' | 'approved' | 'rejected'>('pending');
    const [viewingDoc, setViewingDoc] = useState<KYCDocument | null>(null);

    // Verification Form State
    const [checklist, setChecklist] = useState<VerificationChecklist>({
        cnic_name_matches: false,
        cnic_number_matches: false,
        cnic_photo_matches_selfie: false,
        cnic_not_expired: false,
        address_verified: false,
        land_document_verified: false,
        land_area_matches: false,
        business_registration_verified: false,
        no_duplicate_cnic: false,
        no_blacklist_history: false
    });
    const [creditLimit, setCreditLimit] = useState<number>(0);
    const [creditLimitOverride, setCreditLimitOverride] = useState<string>('');
    const [riskCategory, setRiskCategory] = useState<string>('MEDIUM');
    const [internalNotes, setInternalNotes] = useState<string>('');
    const [rejectionReason, setRejectionReason] = useState<string>('');
    const [resubmissionReqs, setResubmissionReqs] = useState<string>('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        fetchStats();
        fetchApplications();
    }, [activeTab]);

    const fetchStats = async () => {
        try {
            const data = await apiRequest<KYCStats>('/kyc/admin/dashboard-stats');
            setStats(data);
        } catch (error) {
            console.error('Failed to fetch stats:', error);
        }
    };

    const fetchApplications = async () => {
        setIsLoading(true);
        try {
            let statusFilter = '';
            if (activeTab === 'pending') {
                statusFilter = '?status=PENDING,DOCUMENTS_SUBMITTED,UNDER_REVIEW,OCR_PROCESSING,REQUIRES_MANUAL_REVIEW';
            } else if (activeTab === 'approved') {
                statusFilter = '?status=APPROVED,AUTO_APPROVED,AUTO_APPROVED_FLAGGED';
            } else {
                statusFilter = '?status=REJECTED,REQUIRES_RESUBMISSION';
            }

            const data = await apiRequest<{ farmers: KYCApplication[], suppliers: KYCApplication[] }>(`/kyc/admin/applications${statusFilter}`);
            setApplications(data);
        } catch (error) {
            console.error('Failed to fetch applications:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const fetchApplicationDetail = async (type: 'farmer' | 'supplier', id: number) => {
        setIsLoadingDetail(true);
        setSelectedApp({ type, id });
        try {
            const data = await apiRequest<ApplicationDetail>(`/kyc/admin/${type}/${id}/detail`);
            setAppDetail(data);

            // Pre-fill credit limit if farmer
            if (type === 'farmer' && data.credit_assessment) {
                setCreditLimit(data.credit_assessment.auto_calculated_limit);
            }
            // Pre-fill risk category from verification if auto-verified
            if (data.verification?.risk_category) {
                setRiskCategory(data.verification.risk_category);
            }
            // Pre-fill credit from auto-KYC if available
            if (data.verification?.admin_assigned_credit_limit) {
                setCreditLimit(data.verification.admin_assigned_credit_limit);
            }

            // Pre-fill checklist from existing verification if exists
            if (data.verification) {
                setChecklist({
                    cnic_name_matches: data.verification.cnic_name_matches || false,
                    cnic_number_matches: data.verification.cnic_number_matches || false,
                    cnic_photo_matches_selfie: data.verification.cnic_photo_matches_selfie || false,
                    cnic_not_expired: data.verification.cnic_not_expired || false,
                    address_verified: data.verification.address_verified || false,
                    land_document_verified: data.verification.land_document_verified || false,
                    land_area_matches: data.verification.land_area_matches || false,
                    business_registration_verified: data.verification.business_registration_verified || false,
                    no_duplicate_cnic: data.verification.no_duplicate_cnic || false,
                    no_blacklist_history: data.verification.no_blacklist_history || false
                });
            } else {
                // Reset checklist
                setChecklist({
                    cnic_name_matches: false,
                    cnic_number_matches: false,
                    cnic_photo_matches_selfie: false,
                    cnic_not_expired: false,
                    address_verified: false,
                    land_document_verified: false,
                    land_area_matches: false,
                    business_registration_verified: false,
                    no_duplicate_cnic: !data.checks.has_duplicate_cnic,
                    no_blacklist_history: !data.checks.was_blacklisted_before
                });
            }
        } catch (error) {
            console.error('Failed to fetch detail:', error);
        } finally {
            setIsLoadingDetail(false);
        }
    };

    const startReview = async () => {
        if (!selectedApp || !appDetail) return;
        try {
            await apiRequest(`/kyc/admin/${selectedApp.type}/${selectedApp.id}/start-review`, { method: 'PUT' });
            fetchApplicationDetail(selectedApp.type, selectedApp.id);
            fetchStats();
        } catch (error: any) {
            showToast(`Failed to start review: ${error.message}`, 'error');
        }
    };

    const submitVerification = async (decision: 'APPROVED' | 'REJECTED' | 'REQUIRES_RESUBMISSION') => {
        if (!selectedApp) return;

        // Validation
        if (decision === 'REJECTED' && !rejectionReason.trim()) {
            showToast('Please provide a rejection reason', 'warning');
            return;
        }
        if (decision === 'REQUIRES_RESUBMISSION' && !resubmissionReqs.trim()) {
            showToast('Please specify what needs to be resubmitted', 'warning');
            return;
        }

        setIsSubmitting(true);
        try {
            const payload = {
                decision,
                checklist,
                credit_limit: selectedApp.type === 'farmer' ? creditLimit : null,
                credit_limit_override_reason: creditLimitOverride || null,
                risk_category: riskCategory,
                internal_notes: internalNotes || null,
                rejection_reason: rejectionReason || null,
                resubmission_requirements: resubmissionReqs || null
            };

            await apiRequest(`/kyc/admin/${selectedApp.type}/${selectedApp.id}/verify`, {
                method: 'PUT',
                body: JSON.stringify(payload)
            });

            showToast(`KYC ${decision.toLowerCase()} successfully!`, 'success');

            // Reset form
            setSelectedApp(null);
            setAppDetail(null);
            setRejectionReason('');
            setResubmissionReqs('');
            setInternalNotes('');

            // Refresh data
            fetchStats();
            fetchApplications();

        } catch (error: any) {
            showToast(`Failed to submit: ${error.message}`, 'error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'APPROVED':
                return <span className="px-2 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full text-xs font-semibold">Approved</span>;
            case 'AUTO_APPROVED':
                return <span className="px-2 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full text-xs font-semibold">Auto-Approved (AI)</span>;
            case 'AUTO_APPROVED_FLAGGED':
                return <span className="px-2 py-1 bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 rounded-full text-xs font-semibold">Auto-Approved (Flagged)</span>;
            case 'REJECTED':
                return <span className="px-2 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-xs font-semibold">Rejected</span>;
            case 'REQUIRES_RESUBMISSION':
                return <span className="px-2 py-1 bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 rounded-full text-xs font-semibold">Resubmission Required</span>;
            case 'UNDER_REVIEW':
                return <span className="px-2 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 rounded-full text-xs font-semibold">Under Review</span>;
            case 'OCR_PROCESSING':
                return <span className="px-2 py-1 bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400 rounded-full text-xs font-semibold">AI Processing</span>;
            case 'REQUIRES_MANUAL_REVIEW':
                return <span className="px-2 py-1 bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 rounded-full text-xs font-semibold">Needs Manual Review</span>;
            case 'DOCUMENTS_SUBMITTED':
                return <span className="px-2 py-1 bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 rounded-full text-xs font-semibold">Ready for Review</span>;
            case 'PENDING':
                return <span className="px-2 py-1 bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 rounded-full text-xs font-semibold">Awaiting Documents</span>;
            default:
                return <span className="px-2 py-1 bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400 rounded-full text-xs font-semibold">{status?.replace(/_/g, ' ')}</span>;
        }
    };

    const allFarmers = applications.farmers;
    const allSuppliers = applications.suppliers;

    return (
        <div className="p-6 max-w-7xl mx-auto pb-24 lg:pb-6">
            {/* Header */}
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-charcoal dark:text-off-white mb-2">{t('admin.verification.title')}</h1>
                <p className="text-gray-600 dark:text-gray-400">Professional identity verification and credit assessment</p>
            </div>

            {/* Stats Cards */}
            {stats && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-white dark:bg-charcoal/20 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                                <span className="material-symbols-outlined text-purple-600">pending_actions</span>
                            </div>
                            <div className="text-2xl font-bold text-charcoal dark:text-off-white">{stats.total_pending_review}</div>
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{t('admin.verification.pending')}</div>
                    </div>

                    <div className="bg-white dark:bg-charcoal/20 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                                <span className="material-symbols-outlined text-green-600">verified</span>
                            </div>
                            <div className="text-2xl font-bold text-charcoal dark:text-off-white">
                                {stats.farmers.approved + stats.suppliers.approved}
                            </div>
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{t('admin.verification.approved')}</div>
                    </div>

                    <div className="bg-white dark:bg-charcoal/20 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                                <span className="material-symbols-outlined text-red-600">cancel</span>
                            </div>
                            <div className="text-2xl font-bold text-charcoal dark:text-off-white">
                                {stats.farmers.rejected + stats.suppliers.rejected}
                            </div>
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{t('admin.verification.rejected')}</div>
                    </div>

                    <div className="bg-white dark:bg-charcoal/20 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center">
                                <span className="material-symbols-outlined text-yellow-600">hourglass_empty</span>
                            </div>
                            <div className="text-2xl font-bold text-charcoal dark:text-off-white">
                                {stats.farmers.pending + stats.suppliers.pending}
                            </div>
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Awaiting Documents</div>
                    </div>
                </div>
            )}

            {/* Main Content */}
            <div className="flex gap-6">
                {/* Applications List */}
                <div className={`${selectedApp ? 'hidden lg:block lg:w-1/3' : 'w-full'} space-y-4`}>
                    {/* Tabs */}
                    <div className="flex gap-2 bg-white dark:bg-charcoal/20 rounded-lg p-1 border border-gray-200 dark:border-gray-700">
                        {(['pending', 'approved', 'rejected'] as const).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => { setActiveTab(tab); setSelectedApp(null); setAppDetail(null); }}
                                className={`flex-1 px-4 py-2 rounded-lg font-medium text-sm transition-all ${activeTab === tab
                                        ? 'bg-primary text-white'
                                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                                    }`}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>

                    {/* Loading */}
                    {isLoading ? (
                        <div className="flex justify-center py-8">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                        </div>
                    ) : (
                        <>
                            {/* Farmers Section */}
                            {allFarmers.length > 0 && (
                                <div>
                                    <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Farmers ({allFarmers.length})</h3>
                                    <div className="space-y-2">
                                        {allFarmers.map((app) => (
                                            <div
                                                key={`farmer-${app.id}`}
                                                onClick={() => fetchApplicationDetail('farmer', app.id)}
                                                className={`bg-white dark:bg-charcoal/20 rounded-xl p-4 border cursor-pointer transition-all ${selectedApp?.type === 'farmer' && selectedApp?.id === app.id
                                                        ? 'border-primary ring-2 ring-primary/20'
                                                        : 'border-gray-200 dark:border-gray-700 hover:border-primary/50'
                                                    }`}
                                            >
                                                <div className="flex items-start justify-between mb-2">
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                                                            <span className="material-symbols-outlined text-green-600 text-sm">agriculture</span>
                                                        </div>
                                                        <div>
                                                            <div className="font-semibold text-charcoal dark:text-off-white">{app.name}</div>
                                                            <div className="text-xs text-gray-500">{app.district}</div>
                                                        </div>
                                                    </div>
                                                    {getStatusBadge(app.kyc_status)}
                                                </div>
                                                <div className="flex items-center justify-between text-sm">
                                                    <span className="text-gray-500">CNIC: {app.cnic}</span>
                                                    <span className="text-gray-500">{app.documents_count}/{app.required_documents} docs</span>
                                                </div>
                                                {app.auto_credit_limit && (
                                                    <div className="mt-2 text-sm text-primary font-medium">
                                                        Auto Credit: {formatPKR(app.auto_credit_limit)}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Suppliers Section */}
                            {allSuppliers.length > 0 && (
                                <div className="mt-4">
                                    <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Suppliers ({allSuppliers.length})</h3>
                                    <div className="space-y-2">
                                        {allSuppliers.map((app) => (
                                            <div
                                                key={`supplier-${app.id}`}
                                                onClick={() => fetchApplicationDetail('supplier', app.id)}
                                                className={`bg-white dark:bg-charcoal/20 rounded-xl p-4 border cursor-pointer transition-all ${selectedApp?.type === 'supplier' && selectedApp?.id === app.id
                                                        ? 'border-primary ring-2 ring-primary/20'
                                                        : 'border-gray-200 dark:border-gray-700 hover:border-primary/50'
                                                    }`}
                                            >
                                                <div className="flex items-start justify-between mb-2">
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                                                            <span className="material-symbols-outlined text-blue-600 text-sm">store</span>
                                                        </div>
                                                        <div>
                                                            <div className="font-semibold text-charcoal dark:text-off-white">{app.business_name}</div>
                                                            <div className="text-xs text-gray-500">{app.location}</div>
                                                        </div>
                                                    </div>
                                                    {getStatusBadge(app.kyc_status)}
                                                </div>
                                                <div className="flex items-center justify-between text-sm">
                                                    <span className="text-gray-500">CNIC: {app.cnic}</span>
                                                    <span className="text-gray-500">{app.documents_count}/{app.required_documents} docs</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {allFarmers.length === 0 && allSuppliers.length === 0 && (
                                <div className="bg-white dark:bg-charcoal/20 rounded-xl p-8 text-center border border-gray-200 dark:border-gray-700">
                                    <span className="material-symbols-outlined text-5xl text-gray-300 mb-3 block">inbox</span>
                                    <p className="text-gray-500">No {activeTab} applications</p>
                                </div>
                            )}
                        </>
                    )}
                </div>

                {/* Detail Panel */}
                {selectedApp && (
                    <div className="flex-1 lg:w-2/3">
                        {isLoadingDetail ? (
                            <div className="bg-white dark:bg-charcoal/20 rounded-xl p-8 border border-gray-200 dark:border-gray-700 flex justify-center">
                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                            </div>
                        ) : appDetail ? (
                            <div className="bg-white dark:bg-charcoal/20 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                                {/* Detail Header */}
                                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <button
                                                onClick={() => { setSelectedApp(null); setAppDetail(null); }}
                                                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                                            >
                                                <span className="material-symbols-outlined">arrow_back</span>
                                            </button>
                                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${selectedApp.type === 'farmer'
                                                    ? 'bg-green-100 dark:bg-green-900/30'
                                                    : 'bg-blue-100 dark:bg-blue-900/30'
                                                }`}>
                                                <span className={`material-symbols-outlined text-2xl ${selectedApp.type === 'farmer' ? 'text-green-600' : 'text-blue-600'
                                                    }`}>
                                                    {selectedApp.type === 'farmer' ? 'agriculture' : 'store'}
                                                </span>
                                            </div>
                                            <div>
                                                <h2 className="text-xl font-bold text-charcoal dark:text-off-white">
                                                    {selectedApp.type === 'farmer' ? appDetail.farmer?.name : appDetail.supplier?.business_name}
                                                </h2>
                                                <p className="text-sm text-gray-500 capitalize">{selectedApp.type} KYC Application</p>
                                            </div>
                                        </div>
                                        {getStatusBadge(selectedApp.type === 'farmer' ? appDetail.farmer?.kyc_status : appDetail.supplier?.kyc_status)}
                                    </div>

                                    {/* User Info Grid */}
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                                        <div>
                                            <span className="text-gray-500">CNIC</span>
                                            <div className="font-semibold text-charcoal dark:text-off-white">
                                                {selectedApp.type === 'farmer' ? appDetail.farmer?.cnic : appDetail.supplier?.cnic}
                                            </div>
                                        </div>
                                        <div>
                                            <span className="text-gray-500">Phone</span>
                                            <div className="font-semibold text-charcoal dark:text-off-white">
                                                {selectedApp.type === 'farmer' ? appDetail.farmer?.phone_number : appDetail.supplier?.phone_number}
                                            </div>
                                        </div>
                                        {selectedApp.type === 'farmer' && (
                                            <>
                                                <div>
                                                    <span className="text-gray-500">District</span>
                                                    <div className="font-semibold text-charcoal dark:text-off-white">{appDetail.farmer?.district}</div>
                                                </div>
                                                <div>
                                                    <span className="text-gray-500">Land Holding</span>
                                                    <div className="font-semibold text-charcoal dark:text-off-white">{appDetail.farmer?.land_holding} acres</div>
                                                </div>
                                            </>
                                        )}
                                        {selectedApp.type === 'supplier' && (
                                            <>
                                                <div>
                                                    <span className="text-gray-500">Location</span>
                                                    <div className="font-semibold text-charcoal dark:text-off-white">{appDetail.supplier?.location}</div>
                                                </div>
                                                <div>
                                                    <span className="text-gray-500">Business Type</span>
                                                    <div className="font-semibold text-charcoal dark:text-off-white">{appDetail.supplier?.business_type}</div>
                                                </div>
                                            </>
                                        )}
                                    </div>

                                    {/* Alerts */}
                                    {appDetail.checks.has_duplicate_cnic && (
                                        <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-center gap-2">
                                            <span className="material-symbols-outlined text-red-600">warning</span>
                                            <span className="text-red-700 dark:text-red-400 font-medium">DUPLICATE CNIC DETECTED!</span>
                                        </div>
                                    )}
                                    {appDetail.checks.was_blacklisted_before && (
                                        <div className="mt-4 p-3 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg flex items-center gap-2">
                                            <span className="material-symbols-outlined text-orange-600">history</span>
                                            <span className="text-orange-700 dark:text-orange-400 font-medium">User was previously blacklisted</span>
                                        </div>
                                    )}
                                </div>

                                {/* Documents Section */}
                                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                                    <h3 className="font-semibold text-charcoal dark:text-off-white mb-4 flex items-center gap-2">
                                        <span className="material-symbols-outlined">folder</span>
                                        Uploaded Documents ({appDetail.documents.length})
                                    </h3>

                                    {appDetail.missing_required.length > 0 && (
                                        <div className="mb-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                                            <span className="text-yellow-700 dark:text-yellow-400 text-sm">
                                                Missing required: {appDetail.missing_required.map(docType => t(DOC_TYPE_KEYS[docType] || docType)).join(', ')}
                                            </span>
                                        </div>
                                    )}

                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                        {appDetail.documents.map((doc) => (
                                            <div
                                                key={doc.id}
                                                onClick={() => setViewingDoc(doc)}
                                                className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
                                            >
                                                <div className="flex items-center gap-2 mb-2">
                                                    <span className="material-symbols-outlined text-gray-500">
                                                        {doc.mime_type.includes('pdf') ? 'picture_as_pdf' : 'image'}
                                                    </span>
                                                    <span className="text-xs font-medium text-charcoal dark:text-off-white truncate">
                                                        {t(DOC_TYPE_KEYS[doc.document_type] || doc.document_type)}
                                                    </span>
                                                </div>
                                                <div className={`text-xs px-2 py-0.5 rounded-full inline-block ${doc.status === 'VERIFIED' ? 'bg-green-100 text-green-700' :
                                                        doc.status === 'REJECTED' ? 'bg-red-100 text-red-700' :
                                                            'bg-yellow-100 text-yellow-700'
                                                    }`}>
                                                    {doc.status}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* AI Verification Results */}
                                {appDetail.verification?.is_auto_verified && (
                                    <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                                        <h3 className="font-semibold text-charcoal dark:text-off-white mb-4 flex items-center gap-2">
                                            <span className="material-symbols-outlined text-indigo-600">smart_toy</span>
                                            AI Verification Results
                                            <span className="ml-2 px-2 py-0.5 bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400 rounded-full text-xs font-semibold">
                                                Automated
                                            </span>
                                        </h3>

                                        {/* Decision Banner */}
                                        {(() => {
                                            const status = selectedApp.type === 'farmer' ? appDetail.farmer?.kyc_status : appDetail.supplier?.kyc_status;
                                            if (status === 'AUTO_APPROVED') return (
                                                <div className="mb-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                                                    <div className="flex items-center gap-2 text-green-700 dark:text-green-400 font-semibold">
                                                        <span className="material-symbols-outlined">verified</span>
                                                        AUTO-APPROVED by AI (High Confidence)
                                                    </div>
                                                    <p className="text-sm text-green-600 dark:text-green-500 mt-1">All verification checks passed. Credit limit assigned automatically.</p>
                                                </div>
                                            );
                                            if (status === 'AUTO_APPROVED_FLAGGED') return (
                                                <div className="mb-4 p-4 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg">
                                                    <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-semibold">
                                                        <span className="material-symbols-outlined">flag</span>
                                                        AUTO-APPROVED (Flagged - Medium Confidence)
                                                    </div>
                                                    <p className="text-sm text-emerald-600 dark:text-emerald-500 mt-1">Minor issues detected but approved. Review flagged items below.</p>
                                                </div>
                                            );
                                            if (status === 'REQUIRES_MANUAL_REVIEW') return (
                                                <div className="mb-4 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg">
                                                    <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-semibold">
                                                        <span className="material-symbols-outlined">error</span>
                                                        REQUIRES YOUR REVIEW (Low Confidence)
                                                    </div>
                                                    <p className="text-sm text-amber-600 dark:text-amber-500 mt-1">
                                                        AI detected issues: {appDetail.failed_checks?.join(', ') || appDetail.verification?.failed_checks?.split(',').join(', ')}
                                                    </p>
                                                </div>
                                            );
                                            return null;
                                        })()}

                                        {/* OCR Comparison Table */}
                                        {appDetail.ocr_comparison && (
                                            <div className="mb-4">
                                                <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">OCR Extraction vs Signup Data</h4>
                                                <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
                                                    <table className="w-full text-sm">
                                                        <thead className="bg-gray-50 dark:bg-gray-800">
                                                            <tr>
                                                                <th className="px-4 py-2 text-left text-gray-600 dark:text-gray-400">Field</th>
                                                                <th className="px-4 py-2 text-left text-gray-600 dark:text-gray-400">Signup Value</th>
                                                                <th className="px-4 py-2 text-left text-gray-600 dark:text-gray-400">OCR Extracted</th>
                                                                <th className="px-4 py-2 text-left text-gray-600 dark:text-gray-400">Match</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                                                            <tr>
                                                                <td className="px-4 py-2 font-medium">CNIC Number</td>
                                                                <td className="px-4 py-2 font-mono">{appDetail.ocr_comparison.signup_cnic}</td>
                                                                <td className="px-4 py-2 font-mono">{appDetail.ocr_comparison.ocr_cnic || '—'}</td>
                                                                <td className="px-4 py-2">
                                                                    {appDetail.verification?.cnic_number_matches
                                                                        ? <span className="text-green-600 flex items-center gap-1"><span className="material-symbols-outlined text-sm">check_circle</span> Match</span>
                                                                        : <span className="text-red-600 flex items-center gap-1"><span className="material-symbols-outlined text-sm">cancel</span> Mismatch</span>}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="px-4 py-2 font-medium">Name</td>
                                                                <td className="px-4 py-2">{appDetail.ocr_comparison.signup_name}</td>
                                                                <td className="px-4 py-2">{appDetail.ocr_comparison.ocr_name || '—'}</td>
                                                                <td className="px-4 py-2">
                                                                    {appDetail.ocr_comparison.name_similarity != null ? (
                                                                        <span className={appDetail.ocr_comparison.name_similarity >= 70 ? 'text-green-600' : 'text-red-600'}>
                                                                            {Math.round(appDetail.ocr_comparison.name_similarity)}% match
                                                                        </span>
                                                                    ) : '—'}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="px-4 py-2 font-medium">CNIC Expiry</td>
                                                                <td className="px-4 py-2 text-gray-400">N/A</td>
                                                                <td className="px-4 py-2">{appDetail.ocr_comparison.ocr_expiry || '—'}</td>
                                                                <td className="px-4 py-2">
                                                                    {appDetail.verification?.cnic_not_expired
                                                                        ? <span className="text-green-600 flex items-center gap-1"><span className="material-symbols-outlined text-sm">check_circle</span> Valid</span>
                                                                        : <span className="text-red-600 flex items-center gap-1"><span className="material-symbols-outlined text-sm">cancel</span> Expired</span>}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="px-4 py-2 font-medium">Face Match</td>
                                                                <td className="px-4 py-2 text-gray-400" colSpan={3}>
                                                                    <span className="text-gray-400 italic">Disabled — face comparison not required</span>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        )}

                                        {/* Failed Checks */}
                                        {appDetail.failed_checks && appDetail.failed_checks.length > 0 && (
                                            <div className="mb-4">
                                                <h4 className="text-sm font-semibold text-red-600 dark:text-red-400 mb-2">Failed Checks</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {appDetail.failed_checks.map((check: string, i: number) => (
                                                        <span key={i} className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-xs font-medium">
                                                            {check.replace(/_/g, ' ')}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* Verification Checklist */}
                                {activeTab === 'pending' && (
                                    <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                                        <h3 className="font-semibold text-charcoal dark:text-off-white mb-4 flex items-center gap-2">
                                            <span className="material-symbols-outlined">checklist</span>
                                            Verification Checklist
                                            {appDetail.verification?.is_auto_verified && (
                                                <span className="text-xs text-indigo-600 dark:text-indigo-400 font-normal ml-2">
                                                    (Pre-filled by AI — review and adjust as needed)
                                                </span>
                                            )}
                                        </h3>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            <label className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700">
                                                <input
                                                    type="checkbox"
                                                    checked={checklist.cnic_name_matches}
                                                    onChange={(e) => setChecklist({ ...checklist, cnic_name_matches: e.target.checked })}
                                                    className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary"
                                                />
                                                <span className="text-sm text-charcoal dark:text-off-white">Name on CNIC matches submitted name</span>
                                            </label>

                                            <label className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700">
                                                <input
                                                    type="checkbox"
                                                    checked={checklist.cnic_number_matches}
                                                    onChange={(e) => setChecklist({ ...checklist, cnic_number_matches: e.target.checked })}
                                                    className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary"
                                                />
                                                <span className="text-sm text-charcoal dark:text-off-white">CNIC number matches</span>
                                            </label>

                                            <label className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg opacity-50">
                                                <input
                                                    type="checkbox"
                                                    checked={true}
                                                    disabled
                                                    className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary"
                                                />
                                                <span className="text-sm text-gray-400">Face match (disabled — not required)</span>
                                            </label>

                                            <label className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700">
                                                <input
                                                    type="checkbox"
                                                    checked={checklist.cnic_not_expired}
                                                    onChange={(e) => setChecklist({ ...checklist, cnic_not_expired: e.target.checked })}
                                                    className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary"
                                                />
                                                <span className="text-sm text-charcoal dark:text-off-white">CNIC is not expired</span>
                                            </label>

                                            <label className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700">
                                                <input
                                                    type="checkbox"
                                                    checked={checklist.address_verified}
                                                    onChange={(e) => setChecklist({ ...checklist, address_verified: e.target.checked })}
                                                    className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary"
                                                />
                                                <span className="text-sm text-charcoal dark:text-off-white">Address is verifiable</span>
                                            </label>

                                            {selectedApp.type === 'farmer' && (
                                                <>
                                                    <label className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700">
                                                        <input
                                                            type="checkbox"
                                                            checked={checklist.land_document_verified}
                                                            onChange={(e) => setChecklist({ ...checklist, land_document_verified: e.target.checked })}
                                                            className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary"
                                                        />
                                                        <span className="text-sm text-charcoal dark:text-off-white">Land document is valid</span>
                                                    </label>

                                                    <label className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700">
                                                        <input
                                                            type="checkbox"
                                                            checked={checklist.land_area_matches}
                                                            onChange={(e) => setChecklist({ ...checklist, land_area_matches: e.target.checked })}
                                                            className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary"
                                                        />
                                                        <span className="text-sm text-charcoal dark:text-off-white">Land area matches claimed holding</span>
                                                    </label>
                                                </>
                                            )}

                                            {selectedApp.type === 'supplier' && (
                                                <label className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700">
                                                    <input
                                                        type="checkbox"
                                                        checked={checklist.business_registration_verified}
                                                        onChange={(e) => setChecklist({ ...checklist, business_registration_verified: e.target.checked })}
                                                        className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary"
                                                    />
                                                    <span className="text-sm text-charcoal dark:text-off-white">Business registration is valid</span>
                                                </label>
                                            )}

                                            <label className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer ${checklist.no_duplicate_cnic ? 'bg-green-50 dark:bg-green-900/20' : 'bg-red-50 dark:bg-red-900/20'}`}>
                                                <input
                                                    type="checkbox"
                                                    checked={checklist.no_duplicate_cnic}
                                                    onChange={(e) => setChecklist({ ...checklist, no_duplicate_cnic: e.target.checked })}
                                                    className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary"
                                                />
                                                <span className={`text-sm ${checklist.no_duplicate_cnic ? 'text-green-700' : 'text-red-700'}`}>No duplicate CNIC</span>
                                            </label>

                                            <label className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer ${checklist.no_blacklist_history ? 'bg-green-50 dark:bg-green-900/20' : 'bg-orange-50 dark:bg-orange-900/20'}`}>
                                                <input
                                                    type="checkbox"
                                                    checked={checklist.no_blacklist_history}
                                                    onChange={(e) => setChecklist({ ...checklist, no_blacklist_history: e.target.checked })}
                                                    className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary"
                                                />
                                                <span className={`text-sm ${checklist.no_blacklist_history ? 'text-green-700' : 'text-orange-700'}`}>No blacklist history</span>
                                            </label>
                                        </div>
                                    </div>
                                )}

                                {/* Credit Limit Section (Farmers Only) */}
                                {activeTab === 'pending' && selectedApp.type === 'farmer' && appDetail.credit_assessment && (
                                    <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                                        <h3 className="font-semibold text-charcoal dark:text-off-white mb-4 flex items-center gap-2">
                                            <span className="material-symbols-outlined">payments</span>
                                            Credit Limit Assessment
                                        </h3>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                                <div className="text-sm text-blue-600 dark:text-blue-400 mb-1">Auto-Calculated Limit</div>
                                                <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">
                                                    {formatPKR(appDetail.credit_assessment.auto_calculated_limit)}
                                                </div>
                                                <div className="text-xs text-blue-600 mt-1">
                                                    Based on {appDetail.credit_assessment.land_holding_acres} acres
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                    Assign Credit Limit (PKR)
                                                </label>
                                                <input
                                                    type="number"
                                                    value={creditLimit}
                                                    onChange={(e) => setCreditLimit(Number(e.target.value))}
                                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-charcoal dark:text-off-white"
                                                />
                                                {creditLimit !== appDetail.credit_assessment.auto_calculated_limit && (
                                                    <div className="mt-2">
                                                        <label className="block text-xs text-gray-500 mb-1">Reason for override</label>
                                                        <input
                                                            type="text"
                                                            value={creditLimitOverride}
                                                            onChange={(e) => setCreditLimitOverride(e.target.value)}
                                                            placeholder="Why different from auto-calculated?"
                                                            className="w-full px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-sm"
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <div className="mt-4">
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                Risk Category
                                            </label>
                                            <select
                                                value={riskCategory}
                                                onChange={(e) => setRiskCategory(e.target.value)}
                                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-charcoal dark:text-off-white"
                                            >
                                                <option value="LOW">{t('admin.verification.lowRisk')}</option>
                                                <option value="MEDIUM">{t('admin.verification.mediumRisk')}</option>
                                                <option value="HIGH">{t('admin.verification.highRisk')}</option>
                                            </select>
                                        </div>
                                    </div>
                                )}

                                {/* Notes Section */}
                                {activeTab === 'pending' && (
                                    <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                                        <h3 className="font-semibold text-charcoal dark:text-off-white mb-4">Notes</h3>

                                        <div className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                    Internal Notes (Not shown to user)
                                                </label>
                                                <textarea
                                                    value={internalNotes}
                                                    onChange={(e) => setInternalNotes(e.target.value)}
                                                    rows={2}
                                                    placeholder="Any internal observations..."
                                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-charcoal dark:text-off-white"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                    Rejection Reason (Required if rejecting)
                                                </label>
                                                <textarea
                                                    value={rejectionReason}
                                                    onChange={(e) => setRejectionReason(e.target.value)}
                                                    rows={2}
                                                    placeholder="Reason for rejection..."
                                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-charcoal dark:text-off-white"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                    Resubmission Requirements (Required if requesting resubmission)
                                                </label>
                                                <textarea
                                                    value={resubmissionReqs}
                                                    onChange={(e) => setResubmissionReqs(e.target.value)}
                                                    rows={2}
                                                    placeholder="What documents need to be resubmitted..."
                                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-charcoal dark:text-off-white"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Action Buttons */}
                                {activeTab === 'pending' && (
                                    <div className="p-6">
                                        <div className="flex flex-wrap gap-3">
                                            <button
                                                onClick={() => submitVerification('APPROVED')}
                                                disabled={isSubmitting || !appDetail.checks.all_required_docs_uploaded}
                                                className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                            >
                                                <span className="material-symbols-outlined">check_circle</span>
                                                Approve KYC
                                            </button>

                                            <button
                                                onClick={() => submitVerification('REQUIRES_RESUBMISSION')}
                                                disabled={isSubmitting}
                                                className="flex-1 px-6 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                            >
                                                <span className="material-symbols-outlined">refresh</span>
                                                Request Resubmission
                                            </button>

                                            <button
                                                onClick={() => submitVerification('REJECTED')}
                                                disabled={isSubmitting}
                                                className="flex-1 px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                            >
                                                <span className="material-symbols-outlined">cancel</span>
                                                Reject KYC
                                            </button>
                                        </div>

                                        {!appDetail.checks.all_required_docs_uploaded && (
                                            <p className="text-sm text-red-500 mt-2 text-center">
                                                Cannot approve - missing required documents
                                            </p>
                                        )}
                                    </div>
                                )}

                                {/* Status History */}
                                {appDetail.status_history.length > 0 && (
                                    <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                                        <h3 className="font-semibold text-charcoal dark:text-off-white mb-4 flex items-center gap-2">
                                            <span className="material-symbols-outlined">history</span>
                                            Status History
                                        </h3>
                                        <div className="space-y-2">
                                            {appDetail.status_history.map((h, i) => (
                                                <div key={i} className="flex items-center gap-3 text-sm">
                                                    <span className="text-gray-400">{new Date(h.created_at).toLocaleString()}</span>
                                                    <span className="text-gray-500">{h.previous_status || 'New'}</span>
                                                    <span className="material-symbols-outlined text-gray-400 text-sm">arrow_forward</span>
                                                    <span className="font-medium text-charcoal dark:text-off-white">{h.new_status}</span>
                                                    {h.change_reason && <span className="text-gray-500">- {h.change_reason}</span>}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : null}
                    </div>
                )}
            </div>

            {/* Document Viewer Modal */}
            {viewingDoc && (
                <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={() => setViewingDoc(null)}>
                    <div className="bg-white dark:bg-charcoal rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
                        <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                            <div>
                                <h3 className="font-semibold text-charcoal dark:text-off-white">
                                    {t(DOC_TYPE_KEYS[viewingDoc.document_type] || viewingDoc.document_type)}
                                </h3>
                                <p className="text-sm text-gray-500">{viewingDoc.file_name}</p>
                            </div>
                            <button
                                onClick={() => setViewingDoc(null)}
                                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                            >
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>
                        <div className="p-4 flex items-center justify-center min-h-[400px] bg-gray-100 dark:bg-gray-900">
                            {viewingDoc.mime_type.includes('pdf') ? (
                                <div className="text-center">
                                    <span className="material-symbols-outlined text-6xl text-gray-400 mb-4 block">picture_as_pdf</span>
                                    <a
                                        href={`${API_URL}/${viewingDoc.file_path}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
                                    >
                                        Open PDF in New Tab
                                    </a>
                                </div>
                            ) : (
                                <img
                                    src={`${API_URL}/${viewingDoc.file_path}`}
                                    alt={viewingDoc.document_type}
                                    className="max-w-full max-h-[70vh] object-contain rounded-lg"
                                />
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
