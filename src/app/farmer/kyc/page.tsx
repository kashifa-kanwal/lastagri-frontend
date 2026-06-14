'use client';

import { useState, useEffect, useRef } from 'react';
import { apiRequest, apiUpload } from '@/lib/api';
import { useAuth } from '@/lib/contexts/AuthContext';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { useToast } from '@/lib/contexts/ToastContext';

interface KYCDocument {
    id: number;
    document_type: string;
    file_name: string;
    file_path: string;
    status: string;
    verification_notes: string | null;
    created_at: string;
}

interface AutoKYCResult {
    decision: string;
    confidence_level: string;
    failed_checks: string[];
    processing_time_ms: number;
    risk_score: number | null;
    credit_limit: number | null;
}

interface UploadResponse {
    message: string;
    document: {
        id: number;
        document_type: string;
        status: string;
        file_name: string;
        quality_score: number | null;
    };
    all_required_uploaded: boolean;
    kyc_status: string;
    ocr_triggered: boolean;
}

interface DocumentConfig {
    type: string;
    label: string;
    description: string;
    icon: string;
    required: boolean;
}

const DOCUMENT_CONFIG_KEYS: { type: string; labelKey: string; descKey: string; icon: string; required: boolean }[] = [
    {
        type: 'CNIC_FRONT',
        labelKey: 'farmer.kyc.cnicFront',
        descKey: 'farmer.kyc.cnicFrontDesc',
        icon: 'badge',
        required: true
    },
    {
        type: 'CNIC_BACK',
        labelKey: 'farmer.kyc.cnicBack',
        descKey: 'farmer.kyc.cnicBackDesc',
        icon: 'badge',
        required: true
    },
    {
        type: 'LAND_DOCUMENT',
        labelKey: 'farmer.kyc.landDocument',
        descKey: 'farmer.kyc.landDocumentDesc',
        icon: 'landscape',
        required: true
    },
    {
        type: 'UTILITY_BILL',
        labelKey: 'farmer.kyc.utilityBill',
        descKey: 'farmer.kyc.utilityBillDesc',
        icon: 'receipt',
        required: false
    },
    {
        type: 'BANK_STATEMENT',
        labelKey: 'farmer.kyc.bankStatement',
        descKey: 'farmer.kyc.bankStatementDesc',
        icon: 'account_balance',
        required: false
    }
];

export default function FarmerKYCPage() {
    const { user } = useAuth();
    const { showToast } = useToast();
    const [documents, setDocuments] = useState<KYCDocument[]>([]);
    const [kycStatus, setKycStatus] = useState<string>('PENDING');
    const [isLoading, setIsLoading] = useState(true);
    const [uploadingType, setUploadingType] = useState<string | null>(null);
    const [missingRequired, setMissingRequired] = useState<string[]>([]);
    const [autoKycResult, setAutoKycResult] = useState<AutoKYCResult | null>(null);
    const [processingMessage, setProcessingMessage] = useState<string>('');
    const fileInputRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});
    const pollIntervalRef = useRef<NodeJS.Timeout | null>(null);
    const { t } = useLanguage();

    useEffect(() => {
        fetchDocuments();
        return () => {
            if (pollIntervalRef.current) clearInterval(pollIntervalRef.current);
        };
    }, []);

    // Poll for status updates when OCR is processing
    useEffect(() => {
        if (kycStatus === 'OCR_PROCESSING') {
            // Poll every 5 seconds using the detailed ocr-status endpoint
            pollIntervalRef.current = setInterval(async () => {
                try {
                    const data = await apiRequest<{
                        farmer_id: number;
                        kyc_status: string;
                        credit_limit: number | null;
                        documents: any[];
                        auto_verified: boolean;
                        verification_decision: string | null;
                        failed_checks: string[];
                        ocr_comparison: any;
                        risk_score: number | null;
                        confidence_level: string | null;
                        processing_time_ms: number | null;
                    }>('/kyc/farmer/ocr-status');

                    if (data.kyc_status !== 'OCR_PROCESSING') {
                        // Pipeline completed! Update everything
                        setKycStatus(data.kyc_status);
                        setProcessingMessage('');

                        if (data.auto_verified) {
                            setAutoKycResult({
                                decision: data.kyc_status,
                                confidence_level: data.confidence_level || 'N/A',
                                failed_checks: data.failed_checks || [],
                                processing_time_ms: data.processing_time_ms || 0,
                                risk_score: data.risk_score,
                                credit_limit: data.credit_limit,
                            });
                        }

                        // Refresh document list
                        fetchDocuments();

                        if (pollIntervalRef.current) clearInterval(pollIntervalRef.current);
                    } else {
                        // Still processing — update progress hints
                        const completedDocs = data.documents.filter((d: any) => d.ocr_status === 'COMPLETED').length;
                        const totalDocs = data.documents.length;
                        if (completedDocs > 0) {
                            setProcessingMessage(`AI verification in progress — ${completedDocs}/${totalDocs} documents processed...`);
                        }
                    }
                } catch { /* ignore poll errors */ }
            }, 5000);
        }
        return () => {
            if (pollIntervalRef.current) clearInterval(pollIntervalRef.current);
        };
    }, [kycStatus]);

    const fetchDocuments = async () => {
        setIsLoading(true);
        try {
            const data = await apiRequest<{
                documents: KYCDocument[];
                kyc_status: string;
                missing_required: string[];
                all_required_uploaded: boolean;
            }>('/kyc/farmer/my-documents');

            setDocuments(data.documents);
            setKycStatus(data.kyc_status);
            setMissingRequired(data.missing_required);
        } catch (error) {
            console.error('Failed to fetch documents:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleFileSelect = async (docType: string, file: File) => {
        if (!file) return;

        const validTypes = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf'];
        if (!validTypes.includes(file.type)) {
            showToast('Invalid file type. Please upload JPG, PNG, or PDF files only.', 'warning');
            return;
        }

        if (file.size > 5 * 1024 * 1024) {
            showToast('File too large. Maximum size is 5MB.', 'warning');
            return;
        }

        if (file.size < 10 * 1024) {
            showToast('File too small. Minimum size is 10KB. Please upload a clear photo.', 'warning');
            return;
        }

        setUploadingType(docType);

        // Check if this might be the last required doc
        const requiredTypes = DOCUMENT_CONFIG_KEYS.filter(c => c.required).map(c => c.type);
        const uploadedTypes = documents.map(d => d.document_type);
        const stillMissing = requiredTypes.filter(t => !uploadedTypes.includes(t) && t !== docType);
        const isLastRequired = stillMissing.length === 0;

        if (isLastRequired) {
            setProcessingMessage('Uploading document and starting AI verification...');
        }

        try {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('document_type', docType);

            const result = await apiUpload<UploadResponse>('/kyc/farmer/upload-document', formData);

            // Update status from response
            setKycStatus(result.kyc_status);

            if (result.ocr_triggered) {
                // Pipeline runs in background — poll for results
                setProcessingMessage('AI verification started — analyzing your documents...');
            } else {
                showToast('Document uploaded successfully!', 'success');
                setProcessingMessage('');
            }

            fetchDocuments();

        } catch (error: any) {
            setProcessingMessage('');
            showToast(`Upload failed: ${error.message}`, 'error');
        } finally {
            setUploadingType(null);
        }
    };

    const getDocumentByType = (type: string) => {
        return documents.find(d => d.document_type === type);
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'VERIFIED': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
            case 'REJECTED': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
            case 'REQUIRES_RESUBMISSION': return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400';
            default: return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400';
        }
    };

    const getKYCStatusBadge = () => {
        switch (kycStatus) {
            case 'APPROVED':
            case 'AUTO_APPROVED':
                return (
                    <div className="flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg">
                        <span className="material-symbols-outlined">verified</span>
                        <span className="font-semibold">
                            {kycStatus === 'AUTO_APPROVED' ? t('farmer.kyc.autoApprovedAI') : t('farmer.kyc.approved')}
                        </span>
                    </div>
                );
            case 'AUTO_APPROVED_FLAGGED':
                return (
                    <div className="flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg">
                        <span className="material-symbols-outlined">verified</span>
                        <span className="font-semibold">{t('farmer.kyc.autoApprovedPending')}</span>
                    </div>
                );
            case 'REJECTED':
                return (
                    <div className="flex items-center gap-2 px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-lg">
                        <span className="material-symbols-outlined">cancel</span>
                        <span className="font-semibold">{t('farmer.kyc.rejected')}</span>
                    </div>
                );
            case 'UNDER_REVIEW':
            case 'REQUIRES_MANUAL_REVIEW':
                return (
                    <div className="flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-lg">
                        <span className="material-symbols-outlined">hourglass_top</span>
                        <span className="font-semibold">
                            {kycStatus === 'REQUIRES_MANUAL_REVIEW' ? t('farmer.kyc.manualRequired') : t('farmer.kyc.underReview')}
                        </span>
                    </div>
                );
            case 'OCR_PROCESSING':
                return (
                    <div className="px-4 py-4 bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-xl">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-6 h-6 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
                            <span className="font-bold text-indigo-800 dark:text-indigo-300 text-lg">{t('farmer.kyc.aiProcessing')}</span>
                        </div>
                        <div className="space-y-2 ml-9">
                            <div className="flex items-center gap-2 text-sm text-indigo-600 dark:text-indigo-400">
                                <span className="material-symbols-outlined text-sm">description</span>
                                {t('farmer.kyc.readingCnic')}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-indigo-600 dark:text-indigo-400">
                                <span className="material-symbols-outlined text-sm">verified_user</span>
                                {t('farmer.kyc.verifyingCnic')}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-indigo-600 dark:text-indigo-400">
                                <span className="material-symbols-outlined text-sm">calculate</span>
                                {t('farmer.kyc.calculatingRisk')}
                            </div>
                        </div>
                        <p className="text-xs text-indigo-500 mt-3 ml-9">{t('farmer.kyc.processingNotice')}</p>
                    </div>
                );
            case 'DOCUMENTS_SUBMITTED':
                return (
                    <div className="flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-lg">
                        <span className="material-symbols-outlined">task_alt</span>
                        <span className="font-semibold">{t('farmer.kyc.documentsSubmitted')}</span>
                    </div>
                );
            case 'REQUIRES_RESUBMISSION':
                return (
                    <div className="flex items-center gap-2 px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 rounded-lg">
                        <span className="material-symbols-outlined">refresh</span>
                        <span className="font-semibold">{t('farmer.kyc.resubmissionRequired')}</span>
                    </div>
                );
            default:
                return (
                    <div className="flex items-center gap-2 px-4 py-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 rounded-lg">
                        <span className="material-symbols-outlined">pending</span>
                        <span className="font-semibold">{t('farmer.kyc.pendingUpload')}</span>
                    </div>
                );
        }
    };

    const requiredUploaded = missingRequired.length === 0;
    const requiredCount = DOCUMENT_CONFIG_KEYS.filter(c => c.required).length;
    const progress = Math.round(((requiredCount - missingRequired.length) / requiredCount) * 100);
    const isApproved = ['APPROVED', 'AUTO_APPROVED', 'AUTO_APPROVED_FLAGGED'].includes(kycStatus);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-[60vh]">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
        );
    }

    return (
        <div className="p-6 max-w-4xl mx-auto pb-24 lg:pb-6">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-charcoal dark:text-off-white mb-2">
                    {t('farmer.kyc.title')}
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                    {t('farmer.kyc.subtitle')}
                </p>
            </div>

            {/* Status Banner */}
            <div className="mb-6">
                {getKYCStatusBadge()}
            </div>

            {/* Processing Message */}
            {processingMessage && (
                <div className="mb-6 bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-xl p-4">
                    <div className="flex items-center gap-3">
                        <div className="w-6 h-6 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
                        <div>
                            <h3 className="font-semibold text-indigo-800 dark:text-indigo-300">{processingMessage}</h3>
                            <p className="text-sm text-indigo-600 dark:text-indigo-400 mt-1">
                                {t('farmer.kyc.processingNotice')}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* Auto-KYC Result Card */}
            {autoKycResult && (
                <div className={`mb-6 rounded-xl p-5 border ${
                    autoKycResult.decision === 'AUTO_APPROVED' || autoKycResult.decision === 'AUTO_APPROVED_FLAGGED'
                        ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
                        : autoKycResult.decision === 'REQUIRES_MANUAL_REVIEW'
                        ? 'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800'
                        : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
                }`}>
                    <h3 className="font-bold text-lg mb-3 text-charcoal dark:text-off-white">
                        {t('farmer.kyc.aiResult')}
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div>
                            <p className="text-xs text-gray-500 uppercase">{t('farmer.kyc.decision')}</p>
                            <p className="font-bold text-sm">
                                {autoKycResult.decision.replace(/_/g, ' ')}
                            </p>
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 uppercase">{t('farmer.kyc.confidence')}</p>
                            <p className="font-bold text-sm">{autoKycResult.confidence_level || 'N/A'}</p>
                        </div>
                        {autoKycResult.risk_score !== null && (
                            <div>
                                <p className="text-xs text-gray-500 uppercase">{t('farmer.kyc.riskScore')}</p>
                                <p className="font-bold text-sm">{autoKycResult.risk_score}/100</p>
                            </div>
                        )}
                        {autoKycResult.credit_limit !== null && (
                            <div>
                                <p className="text-xs text-gray-500 uppercase">{t('farmer.kyc.creditLimit')}</p>
                                <p className="font-bold text-sm text-green-700 dark:text-green-400">
                                    PKR {autoKycResult.credit_limit.toLocaleString()}
                                </p>
                            </div>
                        )}
                    </div>
                    {autoKycResult.failed_checks && autoKycResult.failed_checks.length > 0 && (
                        <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                            <p className="text-xs text-gray-500 uppercase mb-1">{t('farmer.kyc.issuesFound')}</p>
                            <ul className="text-sm text-red-600 dark:text-red-400 space-y-1">
                                {autoKycResult.failed_checks.map((check, i) => (
                                    <li key={i} className="flex items-center gap-1">
                                        <span className="material-symbols-outlined text-sm">warning</span>
                                        {check.replace(/_/g, ' ')}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {autoKycResult.processing_time_ms > 0 && (
                        <p className="text-xs text-gray-400 mt-2">
                            {t('farmer.kyc.processedIn')} {(autoKycResult.processing_time_ms / 1000).toFixed(1)}s
                        </p>
                    )}
                </div>
            )}

            {/* Progress Bar */}
            <div className="bg-white dark:bg-charcoal/20 rounded-xl p-6 mb-6 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold text-charcoal dark:text-off-white">{t('farmer.kyc.uploadProgress')}</span>
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        {requiredCount - missingRequired.length}/{requiredCount} {t('farmer.kyc.requiredDocuments')}
                    </span>
                </div>
                <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                        className={`h-full transition-all duration-500 ${requiredUploaded ? 'bg-green-500' : 'bg-primary'
                            }`}
                        style={{ width: `${progress}%` }}
                    />
                </div>
                {!requiredUploaded && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                        {t('farmer.kyc.missing')} {missingRequired.map(mType => t(DOCUMENT_CONFIG_KEYS.find(c => c.type === mType)?.labelKey || '')).join(', ')}
                    </p>
                )}
            </div>

            {/* Instructions */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 mb-6">
                <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-blue-600 dark:text-blue-400">info</span>
                    <div>
                        <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-1">{t('farmer.kyc.documentRequirements')}</h3>
                        <ul className="text-sm text-blue-700 dark:text-blue-400 space-y-1">
                            <li>- {t('farmer.kyc.clearPhotos')}</li>
                            <li>- {t('farmer.kyc.allCorners')}</li>
                            <li>- {t('farmer.kyc.fileFormats')}</li>
                            <li>- {t('farmer.kyc.aiAutoVerify')}</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Document Upload Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {DOCUMENT_CONFIG_KEYS.map((config) => {
                    const existingDoc = getDocumentByType(config.type);
                    const isUploading = uploadingType === config.type;

                    return (
                        <div
                            key={config.type}
                            className={`bg-white dark:bg-charcoal/20 rounded-xl p-5 border-2 transition-all ${existingDoc
                                    ? existingDoc.status === 'VERIFIED'
                                        ? 'border-green-300 dark:border-green-700'
                                        : existingDoc.status === 'REJECTED'
                                            ? 'border-red-300 dark:border-red-700'
                                            : 'border-yellow-300 dark:border-yellow-700'
                                    : 'border-gray-200 dark:border-gray-700 hover:border-primary'
                                }`}
                        >
                            <div className="flex items-start justify-between mb-3">
                                <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${existingDoc
                                            ? existingDoc.status === 'VERIFIED'
                                                ? 'bg-green-100 dark:bg-green-900/30'
                                                : existingDoc.status === 'REJECTED'
                                                    ? 'bg-red-100 dark:bg-red-900/30'
                                                    : 'bg-yellow-100 dark:bg-yellow-900/30'
                                            : 'bg-gray-100 dark:bg-gray-800'
                                        }`}>
                                        <span className={`material-symbols-outlined ${existingDoc
                                                ? existingDoc.status === 'VERIFIED'
                                                    ? 'text-green-600'
                                                    : existingDoc.status === 'REJECTED'
                                                        ? 'text-red-600'
                                                        : 'text-yellow-600'
                                                : 'text-gray-500'
                                            }`}>
                                            {config.icon}
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-charcoal dark:text-off-white">
                                            {t(config.labelKey)}
                                            {config.required && <span className="text-red-500 ml-1">*</span>}
                                        </h3>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">{t(config.descKey)}</p>
                                    </div>
                                </div>
                            </div>

                            {existingDoc && (
                                <div className="mb-3">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-600 dark:text-gray-400 truncate mr-2">
                                            {existingDoc.file_name}
                                        </span>
                                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getStatusColor(existingDoc.status)}`}>
                                            {existingDoc.status.replace(/_/g, ' ')}
                                        </span>
                                    </div>
                                    {existingDoc.verification_notes && (
                                        <p className="text-xs text-red-600 dark:text-red-400 mt-1">
                                            {existingDoc.verification_notes}
                                        </p>
                                    )}
                                </div>
                            )}

                            <input
                                ref={(el) => { fileInputRefs.current[config.type] = el; }}
                                type="file"
                                accept=".jpg,.jpeg,.png,.pdf"
                                className="hidden"
                                onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) handleFileSelect(config.type, file);
                                    e.target.value = '';
                                }}
                            />

                            <button
                                onClick={() => fileInputRefs.current[config.type]?.click()}
                                disabled={isUploading || !!uploadingType || isApproved}
                                className={`w-full py-2 px-4 rounded-lg font-medium text-sm flex items-center justify-center gap-2 transition-all ${isApproved
                                        ? 'bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed'
                                        : existingDoc
                                            ? 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                            : 'bg-primary text-white hover:bg-primary/90'
                                    }`}
                            >
                                {isUploading ? (
                                    <>
                                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        {processingMessage ? t('farmer.kyc.processingBtn') : t('farmer.kyc.uploadingBtn')}
                                    </>
                                ) : existingDoc ? (
                                    <>
                                        <span className="material-symbols-outlined text-sm">refresh</span>
                                        {t('farmer.kyc.replaceDocument')}
                                    </>
                                ) : (
                                    <>
                                        <span className="material-symbols-outlined text-sm">upload</span>
                                        {t('farmer.kyc.uploadDocument')}
                                    </>
                                )}
                            </button>
                        </div>
                    );
                })}
            </div>

            {/* Submit Info */}
            {requiredUploaded && kycStatus === 'DOCUMENTS_SUBMITTED' && (
                <div className="mt-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4">
                    <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-green-600">check_circle</span>
                        <div>
                            <h3 className="font-semibold text-green-800 dark:text-green-300">{t('farmer.kyc.allSubmitted')}</h3>
                            <p className="text-sm text-green-700 dark:text-green-400">
                                {t('farmer.kyc.documentsReviewMsg')}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {isApproved && (
                <div className="mt-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4">
                    <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-green-600 text-3xl">verified_user</span>
                        <div>
                            <h3 className="font-semibold text-green-800 dark:text-green-300">{t('farmer.kyc.verificationComplete')}</h3>
                            <p className="text-sm text-green-700 dark:text-green-400">
                                {t('farmer.kyc.approvedMsg')}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {kycStatus === 'REQUIRES_MANUAL_REVIEW' && (
                <div className="mt-6 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4">
                    <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-amber-600 text-3xl">assignment_ind</span>
                        <div>
                            <h3 className="font-semibold text-amber-800 dark:text-amber-300">{t('farmer.kyc.manualRequired')}</h3>
                            <p className="text-sm text-amber-700 dark:text-amber-400">
                                {t('farmer.kyc.manualReviewMsg')}
                                {autoKycResult?.failed_checks && autoKycResult.failed_checks.length > 0 &&
                                    ` Issues: ${autoKycResult.failed_checks.map(c => c.replace(/_/g, ' ')).join(', ')}.`
                                }
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
