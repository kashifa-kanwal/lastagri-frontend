'use client';

import React, { useState, useEffect } from 'react';
import { apiRequest } from '@/lib/api';
import { useLanguage } from '@/lib/i18n/LanguageContext';

interface OCRExtraction {
    document_type: string;
    document_status: string;
    ocr_status: string;
    confidence_score: number | null;
    processing_time_ms: number | null;
    extracted_cnic_number: string | null;
    extracted_name_english: string | null;
    extracted_name_urdu: string | null;
    extracted_father_name: string | null;
    extracted_father_name_urdu: string | null;
    extracted_gender: string | null;
    extracted_dob: string | null;
    extracted_country_of_stay: string | null;
    extracted_address: string | null;
    extracted_address_english: string | null;
    extracted_permanent_address: string | null;
    extracted_permanent_address_english: string | null;
    extracted_issue_date: string | null;
    extracted_expiry_date: string | null;
    extracted_serial_number: string | null;
    raw_text: string | null;
    // CNIC Intelligence decoded
    cnic_decoded_province: string | null;
    cnic_decoded_division: string | null;
    cnic_decoded_district: string | null;
    cnic_decoded_tehsil: string | null;
    cnic_decoded_gender: string | null;
}

interface Verification {
    cnic_number_matches: boolean;
    cnic_name_matches: boolean;
    cnic_not_expired: boolean;
    cnic_photo_matches_selfie: boolean;
    no_duplicate_cnic: boolean;
    no_blacklist_history: boolean;
    ocr_extracted_cnic: string | null;
    ocr_extracted_name: string | null;
    ocr_extracted_name_urdu: string | null;
    ocr_extracted_father_name: string | null;
    ocr_extracted_father_name_urdu: string | null;
    ocr_extracted_gender: string | null;
    ocr_extracted_dob: string | null;
    ocr_extracted_country_of_stay: string | null;
    ocr_extracted_expiry: string | null;
    ocr_extracted_issue_date: string | null;
    ocr_extracted_address_current: string | null;
    ocr_extracted_address_permanent: string | null;
    ocr_name_similarity_score: number | null;
    is_auto_verified: boolean;
    auto_calculated_credit_limit: number | null;
    // CNIC Intelligence
    cnic_decoded_province: string | null;
    cnic_decoded_division: string | null;
    cnic_decoded_district: string | null;
    cnic_decoded_tehsil: string | null;
    cnic_decoded_gender: string | null;
    cnic_district_from_urdu_address: string | null;
    cnic_gender_cross_validated: boolean | null;
    cnic_district_cross_validated: boolean | null;
    cnic_card_validity_checked: boolean | null;
    cnic_age_verified: boolean | null;
}

interface CheckResultItem {
    check_name: string;
    passed: boolean;
    source: string;
    detail: string;
    score: number | null;
    is_critical: boolean;
}

interface OCRInsightResult {
    id: number;
    user_type: string;
    user_id: number;
    user_name: string | null;
    user_cnic: string | null;
    user_district: string | null;
    decision: string;
    decision_reason: string | null;
    confidence_level: string | null;
    failed_checks: string[];
    auto_risk_score: number | null;
    auto_credit_limit: number | null;
    risk_adjustment_applied: boolean;
    total_processing_time_ms: number | null;
    error_message: string | null;
    created_at: string | null;
    ocr_extractions: OCRExtraction[];
    verification: Verification | null;
    check_results: CheckResultItem[] | null;
}

interface Summary {
    total_processed: number;
    auto_approved: number;
    manual_review: number;
    ocr_failed: number;
    approval_rate: number;
    avg_processing_time_ms: number;
}

interface OCRInsightsResponse {
    summary: Summary;
    results: OCRInsightResult[];
}

export default function OCRInsightsPage() {
    const { t } = useLanguage();
    const [data, setData] = useState<OCRInsightsResponse | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [expandedRow, setExpandedRow] = useState<number | null>(null);
    const [filterDecision, setFilterDecision] = useState<string>('ALL');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await apiRequest<OCRInsightsResponse>('/admin/ocr-insights');
            setData(response);
        } catch (error) {
            console.error('Failed to fetch OCR insights:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const getDecisionBadge = (decision: string) => {
        switch (decision) {
            case 'AUTO_APPROVED':
                return <span className="px-2 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full text-xs font-bold">AUTO APPROVED</span>;
            case 'AUTO_APPROVED_FLAGGED':
                return <span className="px-2 py-1 bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 rounded-full text-xs font-bold">APPROVED (FLAGGED)</span>;
            case 'REQUIRES_MANUAL_REVIEW':
                return <span className="px-2 py-1 bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 rounded-full text-xs font-bold">MANUAL REVIEW</span>;
            case 'OCR_FAILED':
                return <span className="px-2 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-xs font-bold">OCR FAILED</span>;
            default:
                return <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-bold">{decision}</span>;
        }
    };

    const getConfidenceBadge = (level: string | null) => {
        if (!level) return <span className="text-gray-400 text-xs">N/A</span>;
        const colors = {
            HIGH: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
            MEDIUM: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
            LOW: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
        };
        return <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${colors[level as keyof typeof colors] || 'bg-gray-100 text-gray-700'}`}>{level}</span>;
    };

    const getCheckIcon = (passed: boolean) => {
        return passed
            ? <span className="material-symbols-outlined text-green-600 text-sm">check_circle</span>
            : <span className="material-symbols-outlined text-red-600 text-sm">cancel</span>;
    };

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-[60vh]">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
        );
    }

    if (!data) {
        return (
            <div className="p-6 text-center text-gray-500">
                <span className="material-symbols-outlined text-5xl mb-4">error_outline</span>
                <p className="text-xl">Failed to load OCR insights</p>
            </div>
        );
    }

    const filteredResults = filterDecision === 'ALL'
        ? data.results
        : data.results.filter(r => r.decision === filterDecision);

    return (
        <div className="p-6 max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-charcoal dark:text-off-white mb-2">
                    <span className="material-symbols-outlined text-3xl align-middle mr-2">document_scanner</span>
                    {t('admin.ocrInsights.title')}
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                    Complete view of all OCR extractions, AI verification decisions, and extracted document data
                </p>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
                <div className="bg-white dark:bg-charcoal/20 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                    <div className="text-3xl font-black text-charcoal dark:text-off-white">{data.summary.total_processed}</div>
                    <div className="text-xs text-gray-500 mt-1">Total Processed</div>
                </div>
                <div className="bg-white dark:bg-charcoal/20 rounded-xl p-4 border border-green-200 dark:border-green-800">
                    <div className="text-3xl font-black text-green-600">{data.summary.auto_approved}</div>
                    <div className="text-xs text-gray-500 mt-1">Auto Approved</div>
                </div>
                <div className="bg-white dark:bg-charcoal/20 rounded-xl p-4 border border-amber-200 dark:border-amber-800">
                    <div className="text-3xl font-black text-amber-600">{data.summary.manual_review}</div>
                    <div className="text-xs text-gray-500 mt-1">Manual Review</div>
                </div>
                <div className="bg-white dark:bg-charcoal/20 rounded-xl p-4 border border-red-200 dark:border-red-800">
                    <div className="text-3xl font-black text-red-600">{data.summary.ocr_failed}</div>
                    <div className="text-xs text-gray-500 mt-1">OCR Failed</div>
                </div>
                <div className="bg-white dark:bg-charcoal/20 rounded-xl p-4 border border-blue-200 dark:border-blue-800">
                    <div className="text-3xl font-black text-blue-600">{data.summary.approval_rate}%</div>
                    <div className="text-xs text-gray-500 mt-1">Approval Rate</div>
                </div>
                <div className="bg-white dark:bg-charcoal/20 rounded-xl p-4 border border-purple-200 dark:border-purple-800">
                    <div className="text-3xl font-black text-purple-600">{(data.summary.avg_processing_time_ms / 1000).toFixed(0)}s</div>
                    <div className="text-xs text-gray-500 mt-1">Avg Processing</div>
                </div>
            </div>

            {/* Filter Bar */}
            <div className="flex items-center gap-3 mb-6">
                <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">Filter:</span>
                {['ALL', 'AUTO_APPROVED', 'REQUIRES_MANUAL_REVIEW', 'OCR_FAILED'].map(f => (
                    <button
                        key={f}
                        onClick={() => setFilterDecision(f)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                            filterDecision === f
                                ? 'bg-primary text-white'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                        }`}
                    >
                        {f === 'ALL' ? 'All' : f.replace(/_/g, ' ')}
                    </button>
                ))}
                <span className="text-xs text-gray-400 ml-auto">{filteredResults.length} results</span>
            </div>

            {/* Results Table */}
            <div className="bg-white dark:bg-charcoal/20 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700">
                                <th className="text-left px-4 py-3 font-semibold text-gray-600 dark:text-gray-400">User</th>
                                <th className="text-left px-4 py-3 font-semibold text-gray-600 dark:text-gray-400">CNIC</th>
                                <th className="text-left px-4 py-3 font-semibold text-gray-600 dark:text-gray-400">Decision</th>
                                <th className="text-left px-4 py-3 font-semibold text-gray-600 dark:text-gray-400">Confidence</th>
                                <th className="text-left px-4 py-3 font-semibold text-gray-600 dark:text-gray-400">Risk Score</th>
                                <th className="text-left px-4 py-3 font-semibold text-gray-600 dark:text-gray-400">Credit</th>
                                <th className="text-left px-4 py-3 font-semibold text-gray-600 dark:text-gray-400">Time</th>
                                <th className="text-left px-4 py-3 font-semibold text-gray-600 dark:text-gray-400">Date</th>
                                <th className="px-4 py-3"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredResults.map((result) => (
                                <React.Fragment key={result.id}>
                                    <tr
                                        key={result.id}
                                        className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/30 cursor-pointer transition-colors"
                                        onClick={() => setExpandedRow(expandedRow === result.id ? null : result.id)}
                                    >
                                        <td className="px-4 py-3">
                                            <div className="font-semibold text-charcoal dark:text-off-white">{result.user_name || 'Unknown'}</div>
                                            <div className="text-xs text-gray-500">{result.user_type} #{result.user_id} {result.user_district ? `- ${result.user_district}` : ''}</div>
                                        </td>
                                        <td className="px-4 py-3 font-mono text-xs">{result.user_cnic || '—'}</td>
                                        <td className="px-4 py-3">{getDecisionBadge(result.decision)}</td>
                                        <td className="px-4 py-3">{getConfidenceBadge(result.confidence_level)}</td>
                                        <td className="px-4 py-3">
                                            {result.auto_risk_score != null ? (
                                                <span className={`font-bold ${result.auto_risk_score >= 70 ? 'text-green-600' : result.auto_risk_score >= 40 ? 'text-yellow-600' : 'text-red-600'}`}>
                                                    {result.auto_risk_score}/100
                                                </span>
                                            ) : <span className="text-gray-400">—</span>}
                                        </td>
                                        <td className="px-4 py-3">
                                            {result.auto_credit_limit != null ? (
                                                <span className="font-bold text-green-700 dark:text-green-400">
                                                    PKR {result.auto_credit_limit.toLocaleString()}
                                                </span>
                                            ) : <span className="text-gray-400">—</span>}
                                        </td>
                                        <td className="px-4 py-3 text-xs text-gray-500">
                                            {result.total_processing_time_ms
                                                ? `${(result.total_processing_time_ms / 1000).toFixed(1)}s`
                                                : '—'}
                                        </td>
                                        <td className="px-4 py-3 text-xs text-gray-500">
                                            {result.created_at ? new Date(result.created_at).toLocaleDateString() : '—'}
                                        </td>
                                        <td className="px-4 py-3">
                                            <span className={`material-symbols-outlined text-gray-400 transition-transform ${expandedRow === result.id ? 'rotate-180' : ''}`}>
                                                expand_more
                                            </span>
                                        </td>
                                    </tr>

                                    {/* Expanded Detail Row */}
                                    {expandedRow === result.id && (
                                        <tr key={`${result.id}-detail`}>
                                            <td colSpan={9} className="px-4 py-6 bg-gray-50 dark:bg-gray-900/30">
                                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                                                    {/* OCR Extracted Data */}
                                                    <div>
                                                        <h4 className="font-bold text-charcoal dark:text-off-white mb-3 flex items-center gap-2">
                                                            <span className="material-symbols-outlined text-primary">document_scanner</span>
                                                            OCR Extracted Data
                                                        </h4>
                                                        {result.ocr_extractions.length > 0 ? (
                                                            <div className="space-y-4">
                                                                {result.ocr_extractions.map((ocr, idx) => (
                                                                    <div key={idx} className="bg-white dark:bg-charcoal/30 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                                                                        <div className="flex items-center justify-between mb-3">
                                                                            <span className="font-bold text-sm text-primary">
                                                                                {ocr.document_type.replace(/_/g, ' ')}
                                                                            </span>
                                                                            <div className="flex items-center gap-2">
                                                                                {ocr.confidence_score != null && (
                                                                                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                                                                                        ocr.confidence_score >= 0.7
                                                                                            ? 'bg-green-100 text-green-700'
                                                                                            : ocr.confidence_score >= 0.4
                                                                                                ? 'bg-yellow-100 text-yellow-700'
                                                                                                : 'bg-red-100 text-red-700'
                                                                                    }`}>
                                                                                        {(ocr.confidence_score * 100).toFixed(1)}% confidence
                                                                                    </span>
                                                                                )}
                                                                                <span className={`text-xs px-2 py-0.5 rounded-full ${
                                                                                    ocr.ocr_status === 'COMPLETED' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                                                                }`}>
                                                                                    {ocr.ocr_status}
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="grid grid-cols-2 gap-2 text-xs">
                                                                            {ocr.extracted_cnic_number && (
                                                                                <div>
                                                                                    <span className="text-gray-500">CNIC Number:</span>
                                                                                    <div className="font-mono font-bold text-charcoal dark:text-off-white">{ocr.extracted_cnic_number}</div>
                                                                                </div>
                                                                            )}
                                                                            {ocr.extracted_name_english && (
                                                                                <div>
                                                                                    <span className="text-gray-500">Name (English):</span>
                                                                                    <div className="font-bold text-charcoal dark:text-off-white">{ocr.extracted_name_english}</div>
                                                                                </div>
                                                                            )}
                                                                            {ocr.extracted_name_urdu && (
                                                                                <div>
                                                                                    <span className="text-gray-500">Name (Urdu):</span>
                                                                                    <div className="font-bold text-charcoal dark:text-off-white" dir="rtl">{ocr.extracted_name_urdu}</div>
                                                                                </div>
                                                                            )}
                                                                            {ocr.extracted_father_name && (
                                                                                <div>
                                                                                    <span className="text-gray-500">Father Name:</span>
                                                                                    <div className="font-bold text-charcoal dark:text-off-white">{ocr.extracted_father_name}</div>
                                                                                </div>
                                                                            )}
                                                                            {ocr.extracted_father_name_urdu && (
                                                                                <div>
                                                                                    <span className="text-gray-500">Father Name (Urdu):</span>
                                                                                    <div className="font-bold text-charcoal dark:text-off-white" dir="rtl">{ocr.extracted_father_name_urdu}</div>
                                                                                </div>
                                                                            )}
                                                                            {ocr.extracted_gender && (
                                                                                <div>
                                                                                    <span className="text-gray-500">Gender:</span>
                                                                                    <div className="font-bold text-charcoal dark:text-off-white">{ocr.extracted_gender}</div>
                                                                                </div>
                                                                            )}
                                                                            {ocr.extracted_dob && (
                                                                                <div>
                                                                                    <span className="text-gray-500">Date of Birth:</span>
                                                                                    <div className="font-bold text-charcoal dark:text-off-white">{ocr.extracted_dob}</div>
                                                                                </div>
                                                                            )}
                                                                            {ocr.extracted_country_of_stay && (
                                                                                <div>
                                                                                    <span className="text-gray-500">Country of Stay:</span>
                                                                                    <div className="font-bold text-charcoal dark:text-off-white">{ocr.extracted_country_of_stay}</div>
                                                                                </div>
                                                                            )}
                                                                            {ocr.extracted_issue_date && (
                                                                                <div>
                                                                                    <span className="text-gray-500">Issue Date:</span>
                                                                                    <div className="font-bold text-charcoal dark:text-off-white">{ocr.extracted_issue_date}</div>
                                                                                </div>
                                                                            )}
                                                                            {ocr.extracted_expiry_date && (
                                                                                <div>
                                                                                    <span className="text-gray-500">Expiry Date:</span>
                                                                                    <div className="font-bold text-charcoal dark:text-off-white">{ocr.extracted_expiry_date}</div>
                                                                                </div>
                                                                            )}
                                                                            {ocr.extracted_serial_number && (
                                                                                <div>
                                                                                    <span className="text-gray-500">Serial Number:</span>
                                                                                    <div className="font-mono font-bold text-charcoal dark:text-off-white">{ocr.extracted_serial_number}</div>
                                                                                </div>
                                                                            )}
                                                                            {ocr.extracted_address && (
                                                                                <div className="col-span-2">
                                                                                    <span className="text-gray-500">Current Address (Urdu):</span>
                                                                                    <div className="font-bold text-charcoal dark:text-off-white" dir="rtl">{ocr.extracted_address}</div>
                                                                                </div>
                                                                            )}
                                                                            {ocr.extracted_address_english && (
                                                                                <div className="col-span-2">
                                                                                    <span className="text-gray-500">Current Address (English):</span>
                                                                                    <div className="font-bold text-charcoal dark:text-off-white">{ocr.extracted_address_english}</div>
                                                                                </div>
                                                                            )}
                                                                            {ocr.extracted_permanent_address && (
                                                                                <div className="col-span-2">
                                                                                    <span className="text-gray-500">Permanent Address (Urdu):</span>
                                                                                    <div className="font-bold text-charcoal dark:text-off-white" dir="rtl">{ocr.extracted_permanent_address}</div>
                                                                                </div>
                                                                            )}
                                                                            {ocr.extracted_permanent_address_english && (
                                                                                <div className="col-span-2">
                                                                                    <span className="text-gray-500">Permanent Address (English):</span>
                                                                                    <div className="font-bold text-charcoal dark:text-off-white">{ocr.extracted_permanent_address_english}</div>
                                                                                </div>
                                                                            )}
                                                                        </div>

                                                                        {/* CNIC Intelligence Decoded */}
                                                                        {ocr.cnic_decoded_province && (
                                                                            <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800 rounded-lg">
                                                                                <div className="text-xs font-bold text-blue-700 dark:text-blue-400 mb-2 flex items-center gap-1">
                                                                                    <span className="material-symbols-outlined text-sm">pin_drop</span>
                                                                                    CNIC Intelligence (Decoded from Number)
                                                                                </div>
                                                                                <div className="grid grid-cols-2 gap-2 text-xs">
                                                                                    <div>
                                                                                        <span className="text-blue-500">Province:</span>
                                                                                        <div className="font-bold text-charcoal dark:text-off-white">{ocr.cnic_decoded_province}</div>
                                                                                    </div>
                                                                                    {ocr.cnic_decoded_division && (
                                                                                        <div>
                                                                                            <span className="text-blue-500">Division:</span>
                                                                                            <div className="font-bold text-charcoal dark:text-off-white">{ocr.cnic_decoded_division}</div>
                                                                                        </div>
                                                                                    )}
                                                                                    {ocr.cnic_decoded_district && (
                                                                                        <div>
                                                                                            <span className="text-blue-500">District:</span>
                                                                                            <div className="font-bold text-charcoal dark:text-off-white">{ocr.cnic_decoded_district}</div>
                                                                                        </div>
                                                                                    )}
                                                                                    {ocr.cnic_decoded_tehsil && (
                                                                                        <div>
                                                                                            <span className="text-blue-500">Tehsil:</span>
                                                                                            <div className="font-bold text-charcoal dark:text-off-white">{ocr.cnic_decoded_tehsil}</div>
                                                                                        </div>
                                                                                    )}
                                                                                    {ocr.cnic_decoded_gender && (
                                                                                        <div>
                                                                                            <span className="text-blue-500">Gender (from CNIC):</span>
                                                                                            <div className="font-bold text-charcoal dark:text-off-white">{ocr.cnic_decoded_gender}</div>
                                                                                        </div>
                                                                                    )}
                                                                                </div>
                                                                            </div>
                                                                        )}
                                                                        {ocr.processing_time_ms && (
                                                                            <div className="text-xs text-gray-400 mt-2">
                                                                                Processing: {(ocr.processing_time_ms / 1000).toFixed(1)}s
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        ) : (
                                                            <p className="text-gray-400 text-sm">No OCR data available</p>
                                                        )}
                                                    </div>

                                                    {/* Verification Checks & Comparison */}
                                                    <div>
                                                        {/* Signup vs OCR Comparison — All Extracted Fields */}
                                                        {result.verification && (
                                                            <div className="mb-6">
                                                                <h4 className="font-bold text-charcoal dark:text-off-white mb-3 flex items-center gap-2">
                                                                    <span className="material-symbols-outlined text-primary">compare</span>
                                                                    Complete OCR Extraction & Verification
                                                                </h4>
                                                                <div className="bg-white dark:bg-charcoal/30 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                                                                    <table className="w-full text-xs">
                                                                        <thead>
                                                                            <tr className="bg-gray-50 dark:bg-gray-800/50">
                                                                                <th className="text-left px-3 py-2 text-gray-500">Field</th>
                                                                                <th className="text-left px-3 py-2 text-gray-500">Signup Data</th>
                                                                                <th className="text-left px-3 py-2 text-gray-500">OCR Extracted</th>
                                                                                <th className="px-3 py-2 text-gray-500">Status</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            {/* CNIC Number — CRITICAL */}
                                                                            <tr className="border-t border-gray-100 dark:border-gray-800">
                                                                                <td className="px-3 py-2 font-medium">CNIC Number <span className="text-red-500 text-[10px]">CRITICAL</span></td>
                                                                                <td className="px-3 py-2 font-mono">{result.user_cnic || '—'}</td>
                                                                                <td className="px-3 py-2 font-mono">{result.verification.ocr_extracted_cnic || '—'}</td>
                                                                                <td className="px-3 py-2 text-center">{getCheckIcon(result.verification.cnic_number_matches)}</td>
                                                                            </tr>
                                                                            {/* Name English */}
                                                                            <tr className="border-t border-gray-100 dark:border-gray-800">
                                                                                <td className="px-3 py-2 font-medium">Name (English)</td>
                                                                                <td className="px-3 py-2">{result.user_name || '—'}</td>
                                                                                <td className="px-3 py-2">{result.verification.ocr_extracted_name || '—'}</td>
                                                                                <td className="px-3 py-2 text-center">
                                                                                    {getCheckIcon(result.verification.cnic_name_matches)}
                                                                                    {result.verification.ocr_name_similarity_score != null && (
                                                                                        <span className="ml-1 text-gray-400">({result.verification.ocr_name_similarity_score.toFixed(0)}%)</span>
                                                                                    )}
                                                                                </td>
                                                                            </tr>
                                                                            {/* Name Urdu */}
                                                                            {result.verification.ocr_extracted_name_urdu && (
                                                                                <tr className="border-t border-gray-100 dark:border-gray-800">
                                                                                    <td className="px-3 py-2 font-medium">Name (Urdu)</td>
                                                                                    <td className="px-3 py-2 text-gray-400">—</td>
                                                                                    <td className="px-3 py-2" dir="rtl">{result.verification.ocr_extracted_name_urdu}</td>
                                                                                    <td className="px-3 py-2 text-center text-gray-400 text-[10px]">extracted</td>
                                                                                </tr>
                                                                            )}
                                                                            {/* Father Name English */}
                                                                            {result.verification.ocr_extracted_father_name && (
                                                                                <tr className="border-t border-gray-100 dark:border-gray-800">
                                                                                    <td className="px-3 py-2 font-medium">Father Name (English)</td>
                                                                                    <td className="px-3 py-2 text-gray-400">—</td>
                                                                                    <td className="px-3 py-2">{result.verification.ocr_extracted_father_name}</td>
                                                                                    <td className="px-3 py-2 text-center text-gray-400 text-[10px]">extracted</td>
                                                                                </tr>
                                                                            )}
                                                                            {/* Father Name Urdu */}
                                                                            {result.verification.ocr_extracted_father_name_urdu && (
                                                                                <tr className="border-t border-gray-100 dark:border-gray-800">
                                                                                    <td className="px-3 py-2 font-medium">Father Name (Urdu)</td>
                                                                                    <td className="px-3 py-2 text-gray-400">—</td>
                                                                                    <td className="px-3 py-2" dir="rtl">{result.verification.ocr_extracted_father_name_urdu}</td>
                                                                                    <td className="px-3 py-2 text-center text-gray-400 text-[10px]">extracted</td>
                                                                                </tr>
                                                                            )}
                                                                            {/* Gender */}
                                                                            {result.verification.ocr_extracted_gender && (
                                                                                <tr className="border-t border-gray-100 dark:border-gray-800">
                                                                                    <td className="px-3 py-2 font-medium">Gender</td>
                                                                                    <td className="px-3 py-2 text-gray-400">—</td>
                                                                                    <td className="px-3 py-2">{result.verification.ocr_extracted_gender}</td>
                                                                                    <td className="px-3 py-2 text-center">
                                                                                        {result.verification.cnic_gender_cross_validated != null
                                                                                            ? getCheckIcon(result.verification.cnic_gender_cross_validated)
                                                                                            : <span className="text-gray-400 text-[10px]">extracted</span>
                                                                                        }
                                                                                    </td>
                                                                                </tr>
                                                                            )}
                                                                            {/* Date of Birth */}
                                                                            {result.verification.ocr_extracted_dob && (
                                                                                <tr className="border-t border-gray-100 dark:border-gray-800">
                                                                                    <td className="px-3 py-2 font-medium">Date of Birth</td>
                                                                                    <td className="px-3 py-2 text-gray-400">—</td>
                                                                                    <td className="px-3 py-2">{result.verification.ocr_extracted_dob}</td>
                                                                                    <td className="px-3 py-2 text-center">
                                                                                        {result.verification.cnic_age_verified != null
                                                                                            ? getCheckIcon(result.verification.cnic_age_verified)
                                                                                            : <span className="text-gray-400 text-[10px]">extracted</span>
                                                                                        }
                                                                                    </td>
                                                                                </tr>
                                                                            )}
                                                                            {/* Country of Stay */}
                                                                            {result.verification.ocr_extracted_country_of_stay && (
                                                                                <tr className="border-t border-gray-100 dark:border-gray-800">
                                                                                    <td className="px-3 py-2 font-medium">Country of Stay</td>
                                                                                    <td className="px-3 py-2 text-gray-400">—</td>
                                                                                    <td className="px-3 py-2">{result.verification.ocr_extracted_country_of_stay}</td>
                                                                                    <td className="px-3 py-2 text-center text-gray-400 text-[10px]">extracted</td>
                                                                                </tr>
                                                                            )}
                                                                            {/* Issue Date */}
                                                                            {result.verification.ocr_extracted_issue_date && (
                                                                                <tr className="border-t border-gray-100 dark:border-gray-800">
                                                                                    <td className="px-3 py-2 font-medium">Issue Date</td>
                                                                                    <td className="px-3 py-2 text-gray-400">—</td>
                                                                                    <td className="px-3 py-2">{result.verification.ocr_extracted_issue_date}</td>
                                                                                    <td className="px-3 py-2 text-center">
                                                                                        {result.verification.cnic_card_validity_checked != null
                                                                                            ? getCheckIcon(result.verification.cnic_card_validity_checked)
                                                                                            : <span className="text-gray-400 text-[10px]">extracted</span>
                                                                                        }
                                                                                    </td>
                                                                                </tr>
                                                                            )}
                                                                            {/* Expiry Date — CRITICAL */}
                                                                            <tr className="border-t border-gray-100 dark:border-gray-800">
                                                                                <td className="px-3 py-2 font-medium">Expiry Date <span className="text-red-500 text-[10px]">CRITICAL</span></td>
                                                                                <td className="px-3 py-2 text-gray-400">N/A</td>
                                                                                <td className="px-3 py-2">{result.verification.ocr_extracted_expiry || '—'}</td>
                                                                                <td className="px-3 py-2 text-center">{getCheckIcon(result.verification.cnic_not_expired)}</td>
                                                                            </tr>
                                                                            {/* Current Address */}
                                                                            {result.verification.ocr_extracted_address_current && (
                                                                                <tr className="border-t border-gray-100 dark:border-gray-800">
                                                                                    <td className="px-3 py-2 font-medium">Current Address (Urdu)</td>
                                                                                    <td className="px-3 py-2 text-gray-400">—</td>
                                                                                    <td className="px-3 py-2" dir="rtl">{result.verification.ocr_extracted_address_current}</td>
                                                                                    <td className="px-3 py-2 text-center text-gray-400 text-[10px]">extracted</td>
                                                                                </tr>
                                                                            )}
                                                                            {/* Permanent Address */}
                                                                            {result.verification.ocr_extracted_address_permanent && (
                                                                                <tr className="border-t border-gray-100 dark:border-gray-800">
                                                                                    <td className="px-3 py-2 font-medium">Permanent Address (Urdu)</td>
                                                                                    <td className="px-3 py-2 text-gray-400">—</td>
                                                                                    <td className="px-3 py-2" dir="rtl">{result.verification.ocr_extracted_address_permanent}</td>
                                                                                    <td className="px-3 py-2 text-center text-gray-400 text-[10px]">extracted</td>
                                                                                </tr>
                                                                            )}
                                                                            {/* District — Signup vs CNIC Decoded */}
                                                                            {(result.user_district || result.verification.cnic_decoded_district) && (
                                                                                <tr className="border-t border-gray-100 dark:border-gray-800 bg-blue-50/50 dark:bg-blue-900/5">
                                                                                    <td className="px-3 py-2 font-medium">District</td>
                                                                                    <td className="px-3 py-2">{result.user_district || '—'}</td>
                                                                                    <td className="px-3 py-2">{result.verification.cnic_decoded_district || '—'}</td>
                                                                                    <td className="px-3 py-2 text-center">
                                                                                        {result.verification.cnic_district_cross_validated != null
                                                                                            ? getCheckIcon(result.verification.cnic_district_cross_validated)
                                                                                            : <span className="text-gray-400 text-[10px]">—</span>
                                                                                        }
                                                                                    </td>
                                                                                </tr>
                                                                            )}
                                                                            {/* Duplicate CNIC — CRITICAL */}
                                                                            <tr className="border-t border-gray-100 dark:border-gray-800">
                                                                                <td className="px-3 py-2 font-medium">No Duplicate CNIC <span className="text-red-500 text-[10px]">CRITICAL</span></td>
                                                                                <td className="px-3 py-2 text-gray-400" colSpan={2}>Cross-checked against all farmers & suppliers</td>
                                                                                <td className="px-3 py-2 text-center">{getCheckIcon(result.verification.no_duplicate_cnic)}</td>
                                                                            </tr>
                                                                            {/* Blacklist — CRITICAL */}
                                                                            <tr className="border-t border-gray-100 dark:border-gray-800">
                                                                                <td className="px-3 py-2 font-medium">No Blacklist History <span className="text-red-500 text-[10px]">CRITICAL</span></td>
                                                                                <td className="px-3 py-2 text-gray-400" colSpan={2}>Checked against blacklist audit log</td>
                                                                                <td className="px-3 py-2 text-center">{getCheckIcon(result.verification.no_blacklist_history)}</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* CNIC Intelligence Cross-Validation */}
                                                        {result.verification && result.verification.cnic_decoded_province && (
                                                            <div className="mb-6">
                                                                <h4 className="font-bold text-charcoal dark:text-off-white mb-3 flex items-center gap-2">
                                                                    <span className="material-symbols-outlined text-blue-600">psychology</span>
                                                                    CNIC Intelligence
                                                                </h4>
                                                                <div className="bg-blue-50 dark:bg-blue-900/10 rounded-lg border border-blue-200 dark:border-blue-800 p-4">
                                                                    <div className="grid grid-cols-2 gap-3 text-xs mb-3">
                                                                        <div>
                                                                            <span className="text-blue-500">Province:</span>
                                                                            <div className="font-bold">{result.verification.cnic_decoded_province}</div>
                                                                        </div>
                                                                        {result.verification.cnic_decoded_district && (
                                                                            <div>
                                                                                <span className="text-blue-500">District:</span>
                                                                                <div className="font-bold">{result.verification.cnic_decoded_district}</div>
                                                                            </div>
                                                                        )}
                                                                        {result.verification.cnic_decoded_tehsil && (
                                                                            <div>
                                                                                <span className="text-blue-500">Tehsil:</span>
                                                                                <div className="font-bold">{result.verification.cnic_decoded_tehsil}</div>
                                                                            </div>
                                                                        )}
                                                                        {result.verification.cnic_decoded_gender && (
                                                                            <div>
                                                                                <span className="text-blue-500">Gender (CNIC):</span>
                                                                                <div className="font-bold">{result.verification.cnic_decoded_gender}</div>
                                                                            </div>
                                                                        )}
                                                                        {result.verification.cnic_district_from_urdu_address && (
                                                                            <div className="col-span-2">
                                                                                <span className="text-blue-500">District (from Urdu Address):</span>
                                                                                <div className="font-bold">{result.verification.cnic_district_from_urdu_address}</div>
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                    <div className="grid grid-cols-2 gap-2 text-xs border-t border-blue-200 dark:border-blue-700 pt-3">
                                                                        <div className="flex items-center gap-1">
                                                                            {getCheckIcon(result.verification.cnic_gender_cross_validated ?? true)}
                                                                            <span>Gender Cross-Check</span>
                                                                        </div>
                                                                        <div className="flex items-center gap-1">
                                                                            {getCheckIcon(result.verification.cnic_district_cross_validated ?? true)}
                                                                            <span>District Cross-Check</span>
                                                                        </div>
                                                                        <div className="flex items-center gap-1">
                                                                            {getCheckIcon(result.verification.cnic_card_validity_checked ?? true)}
                                                                            <span>Card Validity Period</span>
                                                                        </div>
                                                                        <div className="flex items-center gap-1">
                                                                            {getCheckIcon(result.verification.cnic_age_verified ?? true)}
                                                                            <span>Age Verification</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* Verification Checks */}
                                                        <h4 className="font-bold text-charcoal dark:text-off-white mb-3 flex items-center gap-2">
                                                            <span className="material-symbols-outlined text-primary">checklist</span>
                                                            AI Verification Checks
                                                        </h4>
                                                        {result.check_results && result.check_results.length > 0 ? (
                                                            <div className="space-y-2">
                                                                {result.check_results.map((check, idx) => (
                                                                    <div key={idx} className={`flex items-center justify-between p-3 rounded-lg border ${
                                                                        check.passed
                                                                            ? 'bg-green-50 dark:bg-green-900/10 border-green-200 dark:border-green-800'
                                                                            : 'bg-red-50 dark:bg-red-900/10 border-red-200 dark:border-red-800'
                                                                    }`}>
                                                                        <div className="flex items-center gap-2">
                                                                            {getCheckIcon(check.passed)}
                                                                            <div>
                                                                                <div className="text-xs font-bold text-charcoal dark:text-off-white">
                                                                                    {check.check_name.replace(/_/g, ' ')}
                                                                                    {check.is_critical && (
                                                                                        <span className="ml-1 text-red-500 text-[10px]">CRITICAL</span>
                                                                                    )}
                                                                                </div>
                                                                                <div className="text-[10px] text-gray-500 mt-0.5">{check.detail}</div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="text-xs text-gray-400">
                                                                            {check.source}
                                                                            {check.score != null && ` (${check.score.toFixed(1)})`}
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        ) : result.verification ? (
                                                            <div className="space-y-2">
                                                                {[
                                                                    { name: 'CNIC Number Match', passed: result.verification.cnic_number_matches, critical: true },
                                                                    { name: 'Name Match', passed: result.verification.cnic_name_matches, critical: false },
                                                                    { name: 'CNIC Not Expired', passed: result.verification.cnic_not_expired, critical: true },
                                                                    { name: 'No Duplicate CNIC', passed: result.verification.no_duplicate_cnic, critical: true },
                                                                    { name: 'No Blacklist History', passed: result.verification.no_blacklist_history, critical: true },
                                                                ].map((check, idx) => (
                                                                    <div key={idx} className={`flex items-center gap-2 p-2 rounded-lg ${check.passed ? 'bg-green-50 dark:bg-green-900/10' : 'bg-red-50 dark:bg-red-900/10'}`}>
                                                                        {getCheckIcon(check.passed)}
                                                                        <span className="text-xs font-medium">{check.name}</span>
                                                                        {check.critical && <span className="text-[10px] text-red-500">CRITICAL</span>}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        ) : (
                                                            <p className="text-gray-400 text-sm">No verification data</p>
                                                        )}

                                                        {/* Error Message */}
                                                        {result.error_message && (
                                                            <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                                                                <div className="text-xs font-bold text-red-700 dark:text-red-400">Error</div>
                                                                <div className="text-xs text-red-600 dark:text-red-300 mt-1">{result.error_message}</div>
                                                            </div>
                                                        )}

                                                        {/* Decision Reason */}
                                                        {result.decision_reason && (
                                                            <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                                                                <div className="text-xs font-bold text-gray-600 dark:text-gray-400">Decision Reason</div>
                                                                <div className="text-xs text-charcoal dark:text-off-white mt-1">{result.decision_reason}</div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>

                {filteredResults.length === 0 && (
                    <div className="p-12 text-center text-gray-400">
                        <span className="material-symbols-outlined text-5xl mb-3">search_off</span>
                        <p className="text-lg">No OCR results found</p>
                        <p className="text-sm mt-1">No documents have been processed through the AI pipeline yet.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
