'use client';

import { useState, useEffect } from 'react';
import { apiRequest } from '@/lib/api';
import { useSearchParams } from 'next/navigation';
import { useToast } from '@/lib/contexts/ToastContext';

interface KYCUser {
    id: number;
    name?: string;
    business_name?: string;
    district?: string;
    phone_number: string;
    kyc_status: string;
    kyc_documents?: string;
    kyc_rejection_reason?: string;
    created_at: string;
}

interface KYCData {
    farmers: KYCUser[];
    suppliers: KYCUser[];
}

export default function KYCVerificationPage() {
    const searchParams = useSearchParams();
    const { showToast } = useToast();
    const [activeTab, setActiveTab] = useState<'pending' | 'approved' | 'rejected'>(
        (searchParams.get('tab') as any) || 'pending'
    );
    const [kycData, setKYCData] = useState<KYCData>({ farmers: [], suppliers: [] });
    const [isLoading, setIsLoading] = useState(true);
    
    // Modal State
    const [approveModalOpen, setApproveModalOpen] = useState(false);
    const [rejectModalOpen, setRejectModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState<{ id: number, type: 'farmer' | 'supplier' } | null>(null);
    const [rejectReason, setRejectReason] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        fetchKYCData();
    }, [activeTab]);

    const fetchKYCData = async () => {
        setIsLoading(true);
        try {
            const data = await apiRequest<KYCData>(`/admin/kyc/${activeTab}`);
            setKYCData(data);
        } catch (error) {
            console.error('Failed to fetch KYC data:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleApproveClick = (type: 'farmer' | 'supplier', id: number) => {
        setSelectedUser({ id, type });
        setApproveModalOpen(true);
    };

    const handleRejectClick = (type: 'farmer' | 'supplier', id: number) => {
        setSelectedUser({ id, type });
        setRejectReason('');
        setRejectModalOpen(true);
    };

    const confirmApprove = async () => {
        if (!selectedUser) return;
        setIsSubmitting(true);
        try {
            await apiRequest(`/admin/kyc/${selectedUser.type}/${selectedUser.id}/approve`, {
                method: 'PUT'
            });
            showToast('KYC approved successfully!', 'success');
            setApproveModalOpen(false);
            fetchKYCData();
        } catch (error: any) {
            showToast(`Failed to approve: ${error.message}`, 'error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const confirmReject = async () => {
        if (!selectedUser || !rejectReason.trim()) return;
        setIsSubmitting(true);
        try {
            await apiRequest(`/admin/kyc/${selectedUser.type}/${selectedUser.id}/reject?reason=${encodeURIComponent(rejectReason)}`, {
                method: 'PUT'
            });
            showToast('KYC rejected!', 'success');
            setRejectModalOpen(false);
            fetchKYCData();
        } catch (error: any) {
            showToast(`Failed to reject: ${error.message}`, 'error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const allUsers = [...kycData.farmers, ...kycData.suppliers];

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
                <h1 className="text-3xl font-bold text-charcoal dark:text-off-white mb-2">KYC Verification Queue</h1>
                <p className="text-gray-600 dark:text-gray-400">Review and approve user documents</p>
            </div>

            {/* Tabs */}
            <div className="flex gap-4 mb-8 border-b border-gray-200 dark:border-gray-700">
                {(['pending', 'approved', 'rejected'] as const).map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`pb-4 px-2 font-semibold transition-colors relative ${activeTab === tab
                                ? 'text-trust-blue'
                                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                            }`}
                    >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        {activeTab === tab && (
                            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-trust-blue rounded-t-full"></span>
                        )}
                    </button>
                ))}
            </div>

            {/* KYC List */}
            <div className="space-y-4">
                {allUsers.length === 0 ? (
                    <div className="bg-white dark:bg-charcoal/20 rounded-xl p-12 text-center">
                        <span className="material-symbols-outlined text-6xl text-gray-300 dark:text-gray-600 mb-4 block">verified_user</span>
                        <h2 className="text-2xl font-semibold mb-2 text-charcoal dark:text-off-white">No submissions found</h2>
                        <p className="text-gray-600 dark:text-gray-400">No {activeTab} KYC submissions</p>
                    </div>
                ) : (
                    allUsers.map((user) => {
                        const isFarmer = 'name' in user;
                        return (
                            <div key={`${isFarmer ? 'farmer' : 'supplier'}-${user.id}`} className="bg-white dark:bg-charcoal/20 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${isFarmer ? 'bg-indus-green/20 text-indus-green' : 'bg-trust-blue/20 text-trust-blue'
                                                }`}>
                                                {isFarmer ? 'Farmer' : 'Supplier'}
                                            </span>
                                            <h3 className="font-bold text-xl text-charcoal dark:text-off-white">
                                                {isFarmer ? (user as any).name : (user as any).business_name}
                                            </h3>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600 dark:text-gray-400">
                                            <div>
                                                <span className="font-medium">Phone:</span> {user.phone_number}
                                            </div>
                                            {(user as any).district && (
                                                <div>
                                                    <span className="font-medium">District:</span> {(user as any).district}
                                                </div>
                                            )}
                                            <div>
                                                <span className="font-medium">Submitted:</span>{' '}
                                                {new Date(user.created_at).toLocaleDateString()}
                                            </div>
                                            {user.kyc_rejection_reason && (
                                                <div className="col-span-2 text-red-600 dark:text-red-400">
                                                    <span className="font-medium">Rejection Reason:</span> {user.kyc_rejection_reason}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {activeTab === 'pending' && (
                                        <div className="flex gap-3">
                                            <button
                                                onClick={() => handleApproveClick(isFarmer ? 'farmer' : 'supplier', user.id)}
                                                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium flex items-center gap-2"
                                            >
                                                <span className="material-symbols-outlined text-sm">check_circle</span>
                                                Approve
                                            </button>
                                            <button
                                                onClick={() => handleRejectClick(isFarmer ? 'farmer' : 'supplier', user.id)}
                                                className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium flex items-center gap-2"
                                            >
                                                <span className="material-symbols-outlined text-sm">cancel</span>
                                                Reject
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })
                )}
            </div>

            {/* Approve Modal */}
            {approveModalOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
                    <div className="bg-white dark:bg-charcoal rounded-2xl w-full max-w-sm shadow-2xl overflow-hidden">
                        <div className="p-6 text-center">
                            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="material-symbols-outlined text-3xl">verified_user</span>
                            </div>
                            <h3 className="text-xl font-bold text-charcoal dark:text-off-white mb-2">Approve KYC</h3>
                            <p className="text-sm text-gray-500">Are you sure you want to approve this user's KYC submission? They will gain full access to the platform.</p>
                        </div>
                        <div className="p-4 bg-gray-50 dark:bg-gray-800/50 flex gap-3">
                            <button
                                onClick={() => setApproveModalOpen(false)}
                                disabled={isSubmitting}
                                className="flex-1 py-2 rounded-xl font-semibold text-gray-600 dark:text-gray-300 bg-white dark:bg-charcoal border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors disabled:opacity-50"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={confirmApprove}
                                disabled={isSubmitting}
                                className="flex-1 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 font-bold shadow-md shadow-green-600/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                            >
                                {isSubmitting ? 'Approving...' : 'Yes, Approve'}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Reject Modal */}
            {rejectModalOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
                    <div className="bg-white dark:bg-charcoal rounded-2xl w-full max-w-md shadow-2xl overflow-hidden">
                        <div className="p-6 border-b border-gray-100 dark:border-gray-800">
                            <div className="flex justify-between items-center">
                                <h3 className="text-xl font-bold text-charcoal dark:text-off-white text-red-600 dark:text-red-400">Reject KYC</h3>
                                <button 
                                    onClick={() => setRejectModalOpen(false)}
                                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                                >
                                    <span className="material-symbols-outlined">close</span>
                                </button>
                            </div>
                            <p className="text-sm text-gray-500 mt-1">Please provide a reason for rejecting this KYC application.</p>
                        </div>
                        
                        <div className="p-6">
                            <label className="block text-sm font-semibold mb-2 text-charcoal dark:text-off-white">
                                Rejection Reason <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                value={rejectReason}
                                onChange={(e) => setRejectReason(e.target.value)}
                                placeholder="E.g., Document illegible, CNIC expired, etc."
                                className="w-full p-3 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 hover:bg-white focus:bg-white dark:bg-charcoal/40 text-charcoal dark:text-off-white focus:ring-2 focus:ring-red-500/50 focus:border-red-500 outline-none transition-all resize-none h-24"
                                autoFocus
                            />
                        </div>
                        
                        <div className="p-4 bg-gray-50 dark:bg-gray-800/50 flex gap-3 border-t border-gray-100 dark:border-gray-800">
                            <button
                                onClick={() => setRejectModalOpen(false)}
                                disabled={isSubmitting}
                                className="flex-1 flex-[0.7] py-2.5 rounded-xl font-semibold text-gray-600 dark:text-gray-300 bg-white dark:bg-charcoal border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors disabled:opacity-50"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={confirmReject}
                                disabled={!rejectReason.trim() || isSubmitting}
                                className="flex-1 py-2.5 bg-red-600 text-white rounded-xl hover:bg-red-700 font-bold shadow-md shadow-red-600/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <><div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div><span>Rejecting...</span></>
                                ) : (
                                    <><span>Reject Application</span></>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
