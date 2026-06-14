'use client';

import { useState, useEffect, useRef } from 'react';
import { apiRequest, apiUpload, API_URL } from '@/lib/api';
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

interface DocumentConfig {
    type: string;
    label: string;
    description: string;
    icon: string;
    required: boolean;
}

const DOCUMENT_CONFIGS: DocumentConfig[] = [
    {
        type: 'CNIC_FRONT',
        label: 'supplier.kyc.cnicFront',
        description: 'supplier.kyc.cnicFrontDesc',
        icon: 'badge',
        required: true
    },
    {
        type: 'CNIC_BACK',
        label: 'supplier.kyc.cnicBack',
        description: 'supplier.kyc.cnicBackDesc',
        icon: 'badge',
        required: true
    },
    {
        type: 'SELFIE_WITH_CNIC',
        label: 'supplier.kyc.selfieWithCnic',
        description: 'supplier.kyc.selfieDesc',
        icon: 'photo_camera',
        required: true
    },
    {
        type: 'BUSINESS_REGISTRATION',
        label: 'supplier.kyc.businessRegistration',
        description: 'supplier.kyc.businessRegistrationDesc',
        icon: 'storefront',
        required: true
    },
    {
        type: 'SHOP_OWNERSHIP',
        label: 'supplier.kyc.shopOwnership',
        description: 'supplier.kyc.shopOwnershipDesc',
        icon: 'home_work',
        required: false
    },
    {
        type: 'BANK_ACCOUNT_PROOF',
        label: 'supplier.kyc.bankAccountProof',
        description: 'supplier.kyc.bankAccountProofDesc',
        icon: 'account_balance',
        required: false
    }
];

export default function SupplierKYCPage() {
    const { user } = useAuth();
    const { t } = useLanguage();
    const { showToast } = useToast();
    const [documents, setDocuments] = useState<KYCDocument[]>([]);
    const [kycStatus, setKycStatus] = useState<string>('PENDING');
    const [isLoading, setIsLoading] = useState(true);
    const [uploadingType, setUploadingType] = useState<string | null>(null);
    const [missingRequired, setMissingRequired] = useState<string[]>([]);
    const fileInputRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});

    useEffect(() => {
        fetchDocuments();
    }, []);

    const fetchDocuments = async () => {
        setIsLoading(true);
        try {
            const data = await apiRequest<{
                documents: KYCDocument[];
                kyc_status: string;
                missing_required: string[];
                all_required_uploaded: boolean;
            }>('/kyc/supplier/my-documents');

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

        // Validate file type
        const validTypes = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf'];
        if (!validTypes.includes(file.type)) {
            showToast(t('supplier.kyc.invalidFileType'), 'warning');
            return;
        }

        // Validate file size (5MB max)
        if (file.size > 5 * 1024 * 1024) {
            showToast(t('supplier.kyc.fileTooLarge'), 'warning');
            return;
        }

        setUploadingType(docType);

        try {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('document_type', docType);

            const result = await apiUpload<any>('/kyc/supplier/upload-document', formData);
            showToast(t('supplier.kyc.uploadSuccess'), 'success');

            // Refresh documents list
            fetchDocuments();

        } catch (error: any) {
            showToast(`${t('supplier.kyc.uploadFailed')}: ${error.message}`, 'error');
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
                return (
                    <div className="flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg">
                        <span className="material-symbols-outlined">verified</span>
                        <span className="font-semibold">{t('supplier.kyc.approved')}</span>
                    </div>
                );
            case 'REJECTED':
                return (
                    <div className="flex items-center gap-2 px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-lg">
                        <span className="material-symbols-outlined">cancel</span>
                        <span className="font-semibold">{t('supplier.kyc.rejected')}</span>
                    </div>
                );
            case 'UNDER_REVIEW':
                return (
                    <div className="flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-lg">
                        <span className="material-symbols-outlined">hourglass_top</span>
                        <span className="font-semibold">{t('supplier.kyc.underReview')}</span>
                    </div>
                );
            case 'DOCUMENTS_SUBMITTED':
                return (
                    <div className="flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-lg">
                        <span className="material-symbols-outlined">task_alt</span>
                        <span className="font-semibold">{t('supplier.kyc.documentsSubmitted')}</span>
                    </div>
                );
            case 'REQUIRES_RESUBMISSION':
                return (
                    <div className="flex items-center gap-2 px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 rounded-lg">
                        <span className="material-symbols-outlined">refresh</span>
                        <span className="font-semibold">{t('supplier.kyc.resubmissionRequired')}</span>
                    </div>
                );
            default:
                return (
                    <div className="flex items-center gap-2 px-4 py-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 rounded-lg">
                        <span className="material-symbols-outlined">pending</span>
                        <span className="font-semibold">{t('supplier.kyc.pendingUpload')}</span>
                    </div>
                );
        }
    };

    const requiredCount = DOCUMENT_CONFIGS.filter(c => c.required).length;
    const requiredUploaded = missingRequired.length === 0;
    const progress = Math.round(((requiredCount - missingRequired.length) / requiredCount) * 100);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-[60vh]">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-trust-blue"></div>
            </div>
        );
    }

    return (
        <div className="p-6 max-w-4xl mx-auto pb-24 lg:pb-6">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-charcoal dark:text-off-white mb-2">
                    {t('supplier.kyc.title')}
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                    {t('supplier.kyc.subtitle')}
                </p>
            </div>

            {/* Status Banner */}
            <div className="mb-6">
                {getKYCStatusBadge()}
            </div>

            {/* Progress Bar */}
            <div className="bg-white dark:bg-charcoal/20 rounded-xl p-6 mb-6 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold text-charcoal dark:text-off-white">{t('supplier.kyc.uploadProgress')}</span>
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        {requiredCount - missingRequired.length}/{requiredCount} {t('supplier.kyc.requiredDocuments')}
                    </span>
                </div>
                <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                        className={`h-full transition-all duration-500 ${requiredUploaded ? 'bg-green-500' : 'bg-trust-blue'
                            }`}
                        style={{ width: `${progress}%` }}
                    />
                </div>
                {!requiredUploaded && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                        {t('supplier.kyc.missing')}: {missingRequired.map(mType => { const cfg = DOCUMENT_CONFIGS.find(c => c.type === mType); return cfg ? t(cfg.label) : mType; }).join(', ')}
                    </p>
                )}
            </div>

            {/* Instructions */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 mb-6">
                <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-blue-600 dark:text-blue-400">info</span>
                    <div>
                        <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-1">{t('supplier.kyc.documentRequirements')}</h3>
                        <ul className="text-sm text-blue-700 dark:text-blue-400 space-y-1">
                            <li>- {t('supplier.kyc.clearPhotos')}</li>
                            <li>- {t('supplier.kyc.allCorners')}</li>
                            <li>- {t('supplier.kyc.fileFormats')}</li>
                            <li>- {t('supplier.kyc.maxFileSize')}</li>
                            <li>- {t('supplier.kyc.businessDocsName')}</li>
                            <li>- {t('supplier.kyc.selfieFace')}</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Document Upload Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {DOCUMENT_CONFIGS.map((config) => {
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
                                    : 'border-gray-200 dark:border-gray-700 hover:border-trust-blue'
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
                                            {t(config.label)}
                                            {config.required && <span className="text-red-500 ml-1">*</span>}
                                        </h3>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">{t(config.description)}</p>
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
                                            {existingDoc.status.replace('_', ' ')}
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
                                disabled={isUploading || kycStatus === 'APPROVED'}
                                className={`w-full py-2 px-4 rounded-lg font-medium text-sm flex items-center justify-center gap-2 transition-all ${kycStatus === 'APPROVED'
                                        ? 'bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed'
                                        : existingDoc
                                            ? 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                            : 'bg-trust-blue text-white hover:bg-trust-blue/90'
                                    }`}
                            >
                                {isUploading ? (
                                    <>
                                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        {t('supplier.kyc.uploading')}...
                                    </>
                                ) : existingDoc ? (
                                    <>
                                        <span className="material-symbols-outlined text-sm">refresh</span>
                                        {t('supplier.kyc.replaceDocument')}
                                    </>
                                ) : (
                                    <>
                                        <span className="material-symbols-outlined text-sm">upload</span>
                                        {t('supplier.kyc.uploadDocument')}
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
                            <h3 className="font-semibold text-green-800 dark:text-green-300">{t('supplier.kyc.allSubmitted')}</h3>
                            <p className="text-sm text-green-700 dark:text-green-400">
                                {t('supplier.kyc.documentsReviewMsg')}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {kycStatus === 'APPROVED' && (
                <div className="mt-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4">
                    <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-green-600 text-3xl">verified_user</span>
                        <div>
                            <h3 className="font-semibold text-green-800 dark:text-green-300">{t('supplier.kyc.verificationComplete')}</h3>
                            <p className="text-sm text-green-700 dark:text-green-400">
                                {t('supplier.kyc.approvedMsg')}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
