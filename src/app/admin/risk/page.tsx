'use client';

import { useState, useEffect } from 'react';
import { apiRequest } from '@/lib/api';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { useToast } from '@/lib/contexts/ToastContext';

interface PortfolioRisk {
    total_farmers: number;
    scored_farmers: number;
    unscored_farmers: number;
    risk_distribution: {
        low_risk: number;
        medium_risk: number;
        high_risk: number;
    };
    average_risk_score: number;
    average_credit_limit: number;
    total_credit_extended: number;
    total_outstanding: number;
    portfolio_at_risk: number;
    portfolio_at_risk_percentage: number;
}

interface FarmerRisk {
    id: number;
    name: string;
    phone_number: string;
    cnic: string;
    district: string;
    tehsil: string;
    village: string;
    land_holding: number;
    credit_limit: number;
    original_credit_limit: number;
    risk_score: number | null;
    risk_label: string | null;
    is_risk_scored: boolean;
    kyc_status: string;
    is_blacklisted: boolean;
}

interface RiskProfile {
    id: number | null;
    land_title_verified: boolean;
    irrigation_type: string | null;
    location_risk: string | null;
    distance_to_market: number | null;
    crop_history: number | null;
    estimated_land_value: number | null;
    risk_score: number | null;
    risk_label: string | null;
    is_risk_scored: boolean;
}

interface ScoreBreakdown {
    [key: string]: {
        weight: number;
        score: number;
        value: any;
    };
}

interface AuditLog {
    id: number;
    action: string;
    previous_risk_score?: number;
    new_risk_score?: number;
    previous_credit_limit?: number;
    new_credit_limit?: number;
    trigger_reason?: string;
    reason?: string;
    created_at: string;
}

export default function AdminRiskManagementPage() {
    const { t } = useLanguage();
    const { showToast } = useToast();
    const [portfolioData, setPortfolioData] = useState<PortfolioRisk | null>(null);
    const [farmers, setFarmers] = useState<FarmerRisk[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [riskFilter, setRiskFilter] = useState<string>('');

    // Assessment Modal State
    const [showAssessmentModal, setShowAssessmentModal] = useState(false);
    const [selectedFarmer, setSelectedFarmer] = useState<FarmerRisk | null>(null);
    const [riskProfile, setRiskProfile] = useState<RiskProfile | null>(null);

    // Form fields
    const [landTitleVerified, setLandTitleVerified] = useState(false);
    const [irrigationType, setIrrigationType] = useState('');
    const [locationRisk, setLocationRisk] = useState('');
    const [distanceToMarket, setDistanceToMarket] = useState<number>(0.5);
    const [cropHistory, setCropHistory] = useState<number>(0.5);
    const [estimatedLandValue, setEstimatedLandValue] = useState<number>(0);
    const [creditOverride, setCreditOverride] = useState<string>('');
    const [assessmentNotes, setAssessmentNotes] = useState('');

    // Preview state
    const [scorePreview, setScorePreview] = useState<{
        risk_score: number;
        risk_label: string;
        suggested_credit_limit: number;
        breakdown: ScoreBreakdown;
    } | null>(null);

    // Audit logs
    const [showAuditModal, setShowAuditModal] = useState(false);
    const [auditLogs, setAuditLogs] = useState<AuditLog[]>([]);
    const [creditAuditLogs, setCreditAuditLogs] = useState<AuditLog[]>([]);

    // Credit Limit Modal
    const [showCreditModal, setShowCreditModal] = useState(false);
    const [newCreditLimit, setNewCreditLimit] = useState('');
    const [creditReason, setCreditReason] = useState('');
    const [updateBaseline, setUpdateBaseline] = useState(false);

    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        fetchData();
    }, [riskFilter]);

    const fetchData = async () => {
        try {
            const [portfolio, farmersList] = await Promise.all([
                apiRequest<PortfolioRisk>('/admin/risk/portfolio-detailed'),
                apiRequest<FarmerRisk[]>(`/admin/risk/farmers${riskFilter ? `?risk_filter=${riskFilter}` : ''}`)
            ]);
            setPortfolioData(portfolio);
            setFarmers(farmersList);
        } catch (error) {
            console.error('Failed to fetch data:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const openAssessmentModal = async (farmer: FarmerRisk) => {
        setSelectedFarmer(farmer);
        setScorePreview(null);

        try {
            const data = await apiRequest<{ farmer: any; risk_profile: RiskProfile | null }>(
                `/admin/risk/farmer/${farmer.id}/profile`
            );
            setRiskProfile(data.risk_profile);

            // Populate form with existing values
            if (data.risk_profile) {
                setLandTitleVerified(data.risk_profile.land_title_verified || false);
                setIrrigationType(data.risk_profile.irrigation_type || '');
                setLocationRisk(data.risk_profile.location_risk || '');
                setDistanceToMarket(data.risk_profile.distance_to_market || 0.5);
                setCropHistory(data.risk_profile.crop_history || 0.5);
                setEstimatedLandValue(data.risk_profile.estimated_land_value || 0);
            } else {
                resetFormFields();
            }
            setCreditOverride('');
            setAssessmentNotes('');
        } catch (error) {
            console.error('Failed to fetch risk profile:', error);
            resetFormFields();
        }

        setShowAssessmentModal(true);
    };

    const resetFormFields = () => {
        setLandTitleVerified(false);
        setIrrigationType('');
        setLocationRisk('');
        setDistanceToMarket(0.5);
        setCropHistory(0.5);
        setEstimatedLandValue(0);
        setCreditOverride('');
        setAssessmentNotes('');
    };

    const previewScore = async () => {
        if (!selectedFarmer) return;

        try {
            const params = new URLSearchParams();
            params.append('land_title_verified', landTitleVerified.toString());
            if (irrigationType) params.append('irrigation_type', irrigationType);
            if (locationRisk) params.append('location_risk', locationRisk);
            params.append('distance_to_market', distanceToMarket.toString());
            params.append('crop_history', cropHistory.toString());
            if (estimatedLandValue > 0) params.append('estimated_land_value', estimatedLandValue.toString());

            const preview = await apiRequest<typeof scorePreview>(
                `/admin/risk/farmer/${selectedFarmer.id}/preview?${params.toString()}`,
                { method: 'POST' }
            );
            setScorePreview(preview);
        } catch (error) {
            console.error('Failed to preview score:', error);
        }
    };

    const submitAssessment = async () => {
        if (!selectedFarmer) return;

        setIsSubmitting(true);
        try {
            const params = new URLSearchParams();
            params.append('land_title_verified', landTitleVerified.toString());
            if (irrigationType) params.append('irrigation_type', irrigationType);
            if (locationRisk) params.append('location_risk', locationRisk);
            params.append('distance_to_market', distanceToMarket.toString());
            params.append('crop_history', cropHistory.toString());
            if (estimatedLandValue > 0) params.append('estimated_land_value', estimatedLandValue.toString());
            if (creditOverride) params.append('credit_limit_override', creditOverride);
            if (assessmentNotes) params.append('assessment_notes', assessmentNotes);

            await apiRequest(`/admin/risk/farmer/${selectedFarmer.id}/assess?${params.toString()}`, {
                method: 'PUT'
            });

            setShowAssessmentModal(false);
            fetchData();
        } catch (error: any) {
            showToast(`Failed to submit assessment: ${error.message}`, 'error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const openAuditLogs = async (farmer: FarmerRisk) => {
        setSelectedFarmer(farmer);
        try {
            const [riskLogs, creditLogs] = await Promise.all([
                apiRequest<AuditLog[]>(`/admin/risk/farmer/${farmer.id}/audit-logs`),
                apiRequest<AuditLog[]>(`/admin/risk/farmer/${farmer.id}/credit-audit-logs`)
            ]);
            setAuditLogs(riskLogs);
            setCreditAuditLogs(creditLogs);
            setShowAuditModal(true);
        } catch (error) {
            console.error('Failed to fetch audit logs:', error);
        }
    };

    const openCreditModal = (farmer: FarmerRisk) => {
        setSelectedFarmer(farmer);
        setNewCreditLimit(farmer.credit_limit.toString());
        setCreditReason('');
        setUpdateBaseline(false);
        setShowCreditModal(true);
    };

    const submitCreditUpdate = async () => {
        if (!selectedFarmer || !newCreditLimit || !creditReason) return;

        setIsSubmitting(true);
        try {
            const params = new URLSearchParams();
            params.append('new_credit_limit', newCreditLimit);
            params.append('update_original_baseline', updateBaseline.toString());
            params.append('reason', creditReason);

            await apiRequest(`/admin/risk/farmer/${selectedFarmer.id}/credit-limit?${params.toString()}`, {
                method: 'PUT'
            });

            setShowCreditModal(false);
            fetchData();
        } catch (error: any) {
            showToast(`Failed to update credit limit: ${error.message}`, 'error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const bulkRecalculate = async () => {
        if (!confirm('This will recalculate risk scores for all farmers. Continue?')) return;

        setIsSubmitting(true);
        try {
            const result = await apiRequest<{ updated: number }>('/admin/risk/bulk-recalculate', {
                method: 'POST'
            });
            showToast(`Successfully recalculated ${result.updated} profiles`, 'success');
            fetchData();
        } catch (error: any) {
            showToast(`Failed: ${error.message}`, 'error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const getRiskBadgeColor = (label: string | null) => {
        if (!label) return 'bg-gray-100 text-gray-600';
        switch (label.toLowerCase()) {
            case 'low': return 'bg-green-100 text-green-700';
            case 'medium': return 'bg-yellow-100 text-yellow-700';
            case 'high': return 'bg-red-100 text-red-700';
            default: return 'bg-gray-100 text-gray-600';
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
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-3xl font-bold text-charcoal dark:text-off-white mb-2">{t('admin.risk.title')}</h1>
                    <p className="text-gray-600 dark:text-gray-400">Manage farmer risk profiles and credit limits</p>
                </div>
                <button
                    onClick={bulkRecalculate}
                    disabled={isSubmitting}
                    className="px-4 py-2 bg-trust-blue text-white rounded-lg hover:bg-trust-blue/90 flex items-center gap-2 disabled:opacity-50"
                >
                    <span className="material-symbols-outlined text-sm">refresh</span>
                    Recalculate All
                </button>
            </div>

            {/* Portfolio Overview */}
            {portfolioData && (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                        <div className="relative overflow-hidden bg-gradient-to-br from-rose-500 to-red-600 rounded-2xl p-6 text-white shadow-lg shadow-red-500/20 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-500/30 transition-all duration-300 group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl group-hover:bg-white/20 transition-all"></div>
                            <div className="relative">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                                        <span className="material-symbols-outlined text-white text-2xl">warning</span>
                                    </div>
                                    <span className="text-xs font-semibold bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">{t('admin.risk.portfolioOverview')}</span>
                                </div>
                                <div className="text-3xl font-extrabold tracking-tight">PKR {portfolioData.portfolio_at_risk.toLocaleString()}</div>
                                <div className="text-sm font-medium text-white/80 mt-1">{portfolioData.portfolio_at_risk_percentage}% of outstanding</div>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-charcoal/40 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                            <div className="flex items-center gap-4 mb-3">
                                <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-indigo-200 dark:from-indigo-900/30 dark:to-blue-900/30 rounded-xl flex items-center justify-center shadow-inner">
                                    <span className="material-symbols-outlined text-indigo-600 dark:text-indigo-400 text-2xl">account_balance_wallet</span>
                                </div>
                                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Outstanding</div>
                            </div>
                            <div className="text-3xl font-extrabold text-charcoal dark:text-off-white tracking-tight">PKR {portfolioData.total_outstanding.toLocaleString()}</div>
                            <div className="text-sm text-gray-500 mt-2 font-medium">Credit Extended: <span className="text-gray-700 dark:text-gray-300">PKR {portfolioData.total_credit_extended.toLocaleString()}</span></div>
                        </div>

                        <div className="bg-white dark:bg-charcoal/40 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                            <div className="flex items-center gap-4 mb-3">
                                <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-teal-200 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-xl flex items-center justify-center shadow-inner">
                                    <span className="material-symbols-outlined text-emerald-600 dark:text-emerald-400 text-2xl">speed</span>
                                </div>
                                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Average Risk Score</div>
                            </div>
                            <div className="text-3xl font-extrabold text-charcoal dark:text-off-white tracking-tight">{portfolioData.average_risk_score}/100</div>
                            <div className="text-sm text-gray-500 mt-2 font-medium">Avg Credit: <span className="text-gray-700 dark:text-gray-300">PKR {portfolioData.average_credit_limit.toLocaleString()}</span></div>
                        </div>

                        <div className="bg-white dark:bg-charcoal/40 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                            <div className="flex items-center gap-4 mb-3">
                                <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-orange-200 dark:from-amber-900/30 dark:to-orange-900/30 rounded-xl flex items-center justify-center shadow-inner">
                                    <span className="material-symbols-outlined text-amber-600 dark:text-amber-400 text-2xl">group_add</span>
                                </div>
                                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Farmers Scored</div>
                            </div>
                            <div className="text-3xl font-extrabold text-charcoal dark:text-off-white tracking-tight">{portfolioData.scored_farmers} / {portfolioData.total_farmers}</div>
                            <div className="text-sm text-gray-500 mt-2 font-medium"><span className="text-amber-600 font-bold">{portfolioData.unscored_farmers}</span> unscored profiles</div>
                        </div>
                    </div>

                    {/* Risk Distribution */}
                    <div className="bg-white dark:bg-charcoal/40 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm mb-6">
                        <h3 className="font-bold text-lg text-charcoal dark:text-off-white mb-4">Risk Distribution</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="bg-emerald-50/50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/30 rounded-xl p-4 text-center transition-all hover:bg-emerald-50 dark:hover:bg-emerald-900/20">
                                <div className="text-3xl font-black text-emerald-600 dark:text-emerald-400 mb-1">{portfolioData.risk_distribution.low_risk}</div>
                                <div className="text-sm font-semibold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider">Low Risk</div>
                            </div>
                            <div className="bg-amber-50/50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-900/30 rounded-xl p-4 text-center transition-all hover:bg-amber-50 dark:hover:bg-amber-900/20">
                                <div className="text-3xl font-black text-amber-500 dark:text-amber-400 mb-1">{portfolioData.risk_distribution.medium_risk}</div>
                                <div className="text-sm font-semibold text-amber-800 dark:text-amber-300 uppercase tracking-wider">Medium Risk</div>
                            </div>
                            <div className="bg-rose-50/50 dark:bg-rose-900/10 border border-rose-100 dark:border-rose-900/30 rounded-xl p-4 text-center transition-all hover:bg-rose-50 dark:hover:bg-rose-900/20">
                                <div className="text-3xl font-black text-rose-600 dark:text-rose-400 mb-1">{portfolioData.risk_distribution.high_risk}</div>
                                <div className="text-sm font-semibold text-rose-800 dark:text-rose-300 uppercase tracking-wider">High Risk</div>
                            </div>
                            <div className="bg-gray-50/80 dark:bg-gray-800/30 border border-gray-200 dark:border-gray-700/50 rounded-xl p-4 text-center transition-all hover:bg-gray-100 dark:hover:bg-gray-800/80">
                                <div className="text-3xl font-black text-gray-500 dark:text-gray-400 mb-1">{portfolioData.unscored_farmers}</div>
                                <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Unscored</div>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {/* Filter Tabs */}
            <div className="flex gap-2 mb-4 flex-wrap">
                {['', 'LOW', 'MEDIUM', 'HIGH', 'UNSCORED'].map((filter) => (
                    <button
                        key={filter}
                        onClick={() => setRiskFilter(filter)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                            riskFilter === filter
                                ? 'bg-trust-blue text-white'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200'
                        }`}
                    >
                        {filter || 'All Farmers'}
                    </button>
                ))}
            </div>

            {/* Farmers Table */}
            <div className="bg-white dark:bg-charcoal/20 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700">
                            <tr>
                                <th className="text-left py-3 px-4 font-semibold text-sm">{t('admin.risk.farmerProfiles')}</th>
                                <th className="text-left py-3 px-4 font-semibold text-sm">{t('admin.risk.farmersDetails')}</th>
                                <th className="text-center py-3 px-4 font-semibold text-sm">Land</th>
                                <th className="text-center py-3 px-4 font-semibold text-sm">Risk Score</th>
                                <th className="text-right py-3 px-4 font-semibold text-sm">Credit Limit</th>
                                <th className="text-right py-3 px-4 font-semibold text-sm">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {farmers.map((farmer) => (
                                <tr key={farmer.id} className={`border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 ${farmer.is_blacklisted ? 'bg-red-50/50 dark:bg-red-900/10' : ''}`}>
                                    <td className="py-3 px-4">
                                        <div className="font-semibold text-charcoal dark:text-off-white">{farmer.name}</div>
                                        <div className="text-xs text-gray-500">{farmer.phone_number}</div>
                                        {farmer.is_blacklisted && (
                                            <span className="text-xs text-red-600 font-medium">Blacklisted</span>
                                        )}
                                    </td>
                                    <td className="py-3 px-4">
                                        <div className="text-sm">{farmer.district}</div>
                                        <div className="text-xs text-gray-500">{farmer.tehsil}, {farmer.village}</div>
                                    </td>
                                    <td className="py-3 px-4 text-center">
                                        <span className="text-sm">{farmer.land_holding} acres</span>
                                    </td>
                                    <td className="py-3 px-4 text-center">
                                        {farmer.is_risk_scored ? (
                                            <div className="flex flex-col items-center gap-1">
                                                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getRiskBadgeColor(farmer.risk_label)}`}>
                                                    {farmer.risk_label}
                                                </span>
                                                <span className="text-xs text-gray-500">{farmer.risk_score}/100</span>
                                            </div>
                                        ) : (
                                            <span className="px-2 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-600">
                                                Not Scored
                                            </span>
                                        )}
                                    </td>
                                    <td className="py-3 px-4 text-right">
                                        <div className="font-semibold">PKR {farmer.credit_limit.toLocaleString()}</div>
                                        <div className="text-xs text-gray-500">Base: PKR {farmer.original_credit_limit.toLocaleString()}</div>
                                    </td>
                                    <td className="py-3 px-4 text-right">
                                        <div className="flex items-center justify-end gap-1">
                                            <button
                                                onClick={() => openAssessmentModal(farmer)}
                                                className="p-2 text-trust-blue hover:bg-trust-blue/10 rounded-lg"
                                                title="Assess Risk"
                                            >
                                                <span className="material-symbols-outlined text-lg">assessment</span>
                                            </button>
                                            <button
                                                onClick={() => openCreditModal(farmer)}
                                                className="p-2 text-indus-green hover:bg-indus-green/10 rounded-lg"
                                                title="Adjust Credit"
                                            >
                                                <span className="material-symbols-outlined text-lg">credit_card</span>
                                            </button>
                                            <button
                                                onClick={() => openAuditLogs(farmer)}
                                                className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                                                title="View History"
                                            >
                                                <span className="material-symbols-outlined text-lg">history</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Risk Assessment Modal */}
            {showAssessmentModal && selectedFarmer && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
                    <div className="bg-white dark:bg-charcoal rounded-2xl max-w-2xl w-full shadow-2xl my-8 max-h-[90vh] flex flex-col">
                        {/* Header */}
                        <div className="bg-gradient-to-r from-trust-blue to-blue-600 p-6 rounded-t-2xl flex-shrink-0">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                        <span className="material-symbols-outlined text-white text-2xl">assessment</span>
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold text-white">Risk Assessment</h2>
                                        <p className="text-blue-100 text-sm">{selectedFarmer.name}</p>
                                    </div>
                                </div>
                                <button onClick={() => setShowAssessmentModal(false)} className="text-white/80 hover:text-white">
                                    <span className="material-symbols-outlined">close</span>
                                </button>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 space-y-4 overflow-y-auto flex-1">
                            {/* Farmer Info */}
                            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4">
                                <div className="grid grid-cols-3 gap-4 text-sm">
                                    <div>
                                        <span className="text-gray-500">Land:</span>
                                        <span className="font-semibold ml-1">{selectedFarmer.land_holding} acres</span>
                                    </div>
                                    <div>
                                        <span className="text-gray-500">Credit:</span>
                                        <span className="font-semibold ml-1">PKR {selectedFarmer.credit_limit.toLocaleString()}</span>
                                    </div>
                                    <div>
                                        <span className="text-gray-500">Current Risk:</span>
                                        <span className={`font-semibold ml-1 ${getRiskBadgeColor(selectedFarmer.risk_label)?.split(' ')[1]}`}>
                                            {selectedFarmer.risk_label || 'Unscored'}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Risk Factors Form */}
                            <div className="space-y-4">
                                <h3 className="font-semibold text-charcoal dark:text-off-white">Risk Factors</h3>

                                {/* Land Title Verified */}
                                <label className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={landTitleVerified}
                                        onChange={(e) => setLandTitleVerified(e.target.checked)}
                                        className="w-5 h-5 rounded border-gray-300"
                                    />
                                    <div>
                                        <span className="font-medium">Land Title Verified</span>
                                        <span className="text-sm text-gray-500 ml-2">(+20 points)</span>
                                    </div>
                                </label>

                                {/* Irrigation Type */}
                                <div>
                                    <label className="block text-sm font-medium mb-2">Irrigation Type (+20 max)</label>
                                    <select
                                        value={irrigationType}
                                        onChange={(e) => setIrrigationType(e.target.value)}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
                                    >
                                        <option value="">Select...</option>
                                        <option value="canal">Canal (+20)</option>
                                        <option value="tubewell">Tubewell (+20)</option>
                                        <option value="rainfed">Rainfed (+10)</option>
                                    </select>
                                </div>

                                {/* Location Risk */}
                                <div>
                                    <label className="block text-sm font-medium mb-2">Location Risk (+10 max)</label>
                                    <select
                                        value={locationRisk}
                                        onChange={(e) => setLocationRisk(e.target.value)}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
                                    >
                                        <option value="">Select...</option>
                                        <option value="low">Low Risk (+10)</option>
                                        <option value="medium">Medium Risk (+6)</option>
                                        <option value="high">High Risk (+2)</option>
                                    </select>
                                </div>

                                {/* Distance to Market */}
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Distance to Market (+10 max): {(distanceToMarket * 100).toFixed(0)}%
                                    </label>
                                    <input
                                        type="range"
                                        min="0"
                                        max="1"
                                        step="0.1"
                                        value={distanceToMarket}
                                        onChange={(e) => setDistanceToMarket(parseFloat(e.target.value))}
                                        className="w-full"
                                    />
                                    <div className="flex justify-between text-xs text-gray-500">
                                        <span>Far (0%)</span>
                                        <span>Close (100%)</span>
                                    </div>
                                </div>

                                {/* Crop History */}
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Crop History (+20 max): {(cropHistory * 100).toFixed(0)}%
                                    </label>
                                    <input
                                        type="range"
                                        min="0"
                                        max="1"
                                        step="0.1"
                                        value={cropHistory}
                                        onChange={(e) => setCropHistory(parseFloat(e.target.value))}
                                        className="w-full"
                                    />
                                    <div className="flex justify-between text-xs text-gray-500">
                                        <span>Poor (0%)</span>
                                        <span>Excellent (100%)</span>
                                    </div>
                                </div>

                                {/* Estimated Land Value */}
                                <div>
                                    <label className="block text-sm font-medium mb-2">Estimated Land Value (PKR) (+20 max)</label>
                                    <input
                                        type="number"
                                        value={estimatedLandValue}
                                        onChange={(e) => setEstimatedLandValue(parseFloat(e.target.value) || 0)}
                                        placeholder="e.g., 500000"
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
                                    />
                                    <div className="text-xs text-gray-500 mt-1">Max: PKR 1,000,000 for full points</div>
                                </div>

                                {/* Preview Button */}
                                <button
                                    onClick={previewScore}
                                    className="w-full py-2 bg-gray-100 dark:bg-gray-800 text-charcoal dark:text-off-white rounded-lg hover:bg-gray-200 flex items-center justify-center gap-2"
                                >
                                    <span className="material-symbols-outlined text-sm">preview</span>
                                    Preview Score
                                </button>

                                {/* Score Preview */}
                                {scorePreview && (
                                    <div className={`rounded-xl p-4 border-2 ${
                                        scorePreview.risk_label === 'Low' ? 'bg-green-50 border-green-300' :
                                        scorePreview.risk_label === 'Medium' ? 'bg-yellow-50 border-yellow-300' :
                                        'bg-red-50 border-red-300'
                                    }`}>
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="font-semibold">Calculated Score</span>
                                            <div className="text-right">
                                                <span className="text-2xl font-bold">{scorePreview.risk_score}</span>
                                                <span className={`ml-2 px-2 py-1 rounded-full text-xs font-semibold ${getRiskBadgeColor(scorePreview.risk_label)}`}>
                                                    {scorePreview.risk_label}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="text-sm">
                                            Suggested Credit: <span className="font-semibold">PKR {scorePreview.suggested_credit_limit.toLocaleString()}</span>
                                        </div>
                                    </div>
                                )}

                                {/* Credit Override */}
                                <div>
                                    <label className="block text-sm font-medium mb-2">Credit Limit Override (Optional)</label>
                                    <input
                                        type="number"
                                        value={creditOverride}
                                        onChange={(e) => setCreditOverride(e.target.value)}
                                        placeholder="Leave empty for auto-calculation"
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
                                    />
                                </div>

                                {/* Notes */}
                                <div>
                                    <label className="block text-sm font-medium mb-2">Assessment Notes</label>
                                    <textarea
                                        value={assessmentNotes}
                                        onChange={(e) => setAssessmentNotes(e.target.value)}
                                        placeholder="Optional notes for audit trail..."
                                        rows={2}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 resize-none"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-3 p-6 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-charcoal rounded-b-2xl flex-shrink-0">
                            <button
                                onClick={() => setShowAssessmentModal(false)}
                                className="flex-1 py-3 px-4 bg-gray-100 dark:bg-gray-800 text-charcoal dark:text-off-white rounded-xl font-semibold hover:bg-gray-200"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={submitAssessment}
                                disabled={isSubmitting}
                                className="flex-1 py-3 px-4 bg-trust-blue text-white rounded-xl font-semibold hover:bg-trust-blue/90 disabled:opacity-50 flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        Saving...
                                    </>
                                ) : (
                                    <>
                                        <span className="material-symbols-outlined">save</span>
                                        Save Assessment
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Credit Limit Modal */}
            {showCreditModal && selectedFarmer && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white dark:bg-charcoal rounded-2xl max-w-md w-full shadow-2xl">
                        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                            <h2 className="text-xl font-bold text-charcoal dark:text-off-white">Update Credit Limit</h2>
                            <p className="text-gray-500 text-sm">{selectedFarmer.name}</p>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3">
                                <div className="text-sm text-gray-500">Current Limit</div>
                                <div className="font-bold text-lg">PKR {selectedFarmer.credit_limit.toLocaleString()}</div>
                                <div className="text-xs text-gray-500">Base: PKR {selectedFarmer.original_credit_limit.toLocaleString()}</div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">New Credit Limit (PKR) *</label>
                                <input
                                    type="number"
                                    value={newCreditLimit}
                                    onChange={(e) => setNewCreditLimit(e.target.value)}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Reason for Change *</label>
                                <textarea
                                    value={creditReason}
                                    onChange={(e) => setCreditReason(e.target.value)}
                                    placeholder="Enter reason for audit trail..."
                                    rows={2}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 resize-none"
                                />
                            </div>

                            <label className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    checked={updateBaseline}
                                    onChange={(e) => setUpdateBaseline(e.target.checked)}
                                    className="rounded border-gray-300"
                                />
                                <span className="text-sm">Also update baseline (original credit limit)</span>
                            </label>
                        </div>
                        <div className="flex gap-3 p-6 border-t border-gray-200 dark:border-gray-700">
                            <button
                                onClick={() => setShowCreditModal(false)}
                                className="flex-1 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg font-medium"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={submitCreditUpdate}
                                disabled={isSubmitting || !newCreditLimit || !creditReason}
                                className="flex-1 py-2 bg-indus-green text-white rounded-lg font-medium disabled:opacity-50"
                            >
                                {isSubmitting ? 'Updating...' : 'Update'}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Audit Logs Modal */}
            {showAuditModal && selectedFarmer && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white dark:bg-charcoal rounded-2xl max-w-2xl w-full shadow-2xl max-h-[80vh] overflow-hidden flex flex-col">
                        <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center flex-shrink-0">
                            <div>
                                <h2 className="text-xl font-bold text-charcoal dark:text-off-white">{t('admin.risk.auditLogs')}</h2>
                                <p className="text-gray-500 text-sm">{selectedFarmer.name}</p>
                            </div>
                            <button onClick={() => setShowAuditModal(false)} className="text-gray-500 hover:text-gray-700">
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>
                        <div className="p-6 overflow-y-auto flex-1">
                            {/* Risk Profile Changes */}
                            <h3 className="font-semibold text-charcoal dark:text-off-white mb-3">Risk Profile Changes</h3>
                            {auditLogs.length === 0 ? (
                                <p className="text-sm text-gray-500 mb-6">No risk profile changes recorded</p>
                            ) : (
                                <div className="space-y-2 mb-6">
                                    {auditLogs.map((log) => (
                                        <div key={log.id} className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3 text-sm">
                                            <div className="flex justify-between items-start mb-1">
                                                <span className="font-semibold text-trust-blue">{log.action}</span>
                                                <span className="text-xs text-gray-500">
                                                    {new Date(log.created_at).toLocaleString()}
                                                </span>
                                            </div>
                                            <div className="text-gray-600 dark:text-gray-400">
                                                Score: {log.previous_risk_score ?? 'N/A'} &rarr; {log.new_risk_score ?? 'N/A'}
                                            </div>
                                            <div className="text-gray-600 dark:text-gray-400">
                                                Credit: PKR {log.previous_credit_limit?.toLocaleString() ?? 'N/A'} &rarr; PKR {log.new_credit_limit?.toLocaleString() ?? 'N/A'}
                                            </div>
                                            {log.reason && <div className="text-gray-500 text-xs mt-1">Note: {log.reason}</div>}
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Credit Limit Changes */}
                            <h3 className="font-semibold text-charcoal dark:text-off-white mb-3">Credit Limit Changes</h3>
                            {creditAuditLogs.length === 0 ? (
                                <p className="text-sm text-gray-500">No credit limit changes recorded</p>
                            ) : (
                                <div className="space-y-2">
                                    {creditAuditLogs.map((log) => (
                                        <div key={log.id} className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3 text-sm">
                                            <div className="flex justify-between items-start mb-1">
                                                <span className="font-semibold text-indus-green">{log.action}</span>
                                                <span className="text-xs text-gray-500">
                                                    {new Date(log.created_at).toLocaleString()}
                                                </span>
                                            </div>
                                            <div className="text-gray-600 dark:text-gray-400">
                                                PKR {log.previous_credit_limit?.toLocaleString() ?? 'N/A'} &rarr; PKR {log.new_credit_limit?.toLocaleString() ?? 'N/A'}
                                            </div>
                                            {log.trigger_reason && <div className="text-gray-500 text-xs mt-1">Reason: {log.trigger_reason}</div>}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
