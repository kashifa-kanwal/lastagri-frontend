'use client';

import { useState, useEffect, useCallback } from 'react';
import { apiRequest } from '@/lib/api';
import { useLanguage } from '@/lib/i18n/LanguageContext';

// ==================== INTERFACES ====================

interface PortfolioStats {
    portfolio: {
        total_disbursed: number;
        total_collected: number;
        outstanding_balance: number;
        collection_efficiency: number;
    };
    installments: {
        total: number;
        paid: number;
        pending: number;
        late: number;
        overdue: number;
        on_time_rate: number;
    };
    aging_analysis: {
        current: number;
        days_1_30: number;
        days_31_60: number;
        days_61_90: number;
        days_90_plus: number;
    };
    transactions: {
        total_count: number;
        purchases: { count: number; volume: number };
        payments: { count: number; volume: number };
        refunds: { count: number; volume: number };
        penalties: { count: number; volume: number };
    };
    fees: {
        late_fees_collected: number;
        penalty_fees_collected: number;
        total_fees: number;
    };
    risk: {
        farmers_with_overdue: number;
        total_active_farmers: number;
        default_rate: number;
    };
}

interface FarmerLedger {
    farmer_id: number;
    name: string;
    phone: string;
    cnic: string;
    district: string;
    tehsil: string;
    village: string;
    land_holding: number;
    credit_limit: number;
    total_credit_used: number;
    total_repaid: number;
    outstanding_balance: number;
    available_credit: number;
    utilization_rate: number;
    total_orders: number;
    installments: {
        total: number;
        paid: number;
        overdue: number;
        on_time_rate: number;
    };
    overdue_amount: number;
    days_overdue: number;
    total_fees_charged: number;
    payment_status: string;
    is_blacklisted: boolean;
    blacklist_reason: string | null;
    blacklist_expiry: string | null;
    risk_score: number | null;
    risk_label: string;
    kyc_status: string;
    created_at: string | null;
}

interface SupplierLedger {
    supplier_id: number;
    business_name: string;
    owner_name: string | null;
    phone: string;
    email: string;
    cnic: string | null;
    location: string | null;
    business_type: string | null;
    rating: number;
    orders: {
        total: number;
        pending: number;
        confirmed: number;
        delivered: number;
        cancelled: number;
    };
    revenue: {
        total_sales: number;
        confirmed_revenue: number;
        pending_revenue: number;
        avg_order_value: number;
    };
    payment_breakdown: {
        bnpl_orders: number;
        bnpl_volume: number;
        cash_orders: number;
        cash_volume: number;
    };
    products: {
        total: number;
        active: number;
    };
    metrics: {
        fulfillment_rate: number;
        cancellation_rate: number;
        transaction_count: number;
    };
    kyc_status: string;
    created_at: string | null;
}

interface AgingReport {
    summary: {
        current: number;
        days_1_30: number;
        days_31_60: number;
        days_61_90: number;
        days_90_plus: number;
        total: number;
        accounts_count: number;
        critical_accounts: number;
        high_risk_accounts: number;
    };
    details: AgingDetail[];
}

interface AgingDetail {
    farmer_id: number;
    farmer_name: string;
    phone: string;
    district: string;
    is_blacklisted: boolean;
    current: number;
    days_1_30: number;
    days_31_60: number;
    days_61_90: number;
    days_90_plus: number;
    total_outstanding: number;
    risk_category: string;
}

interface DetailedTransaction {
    id: number;
    type: string;
    amount: number;
    timestamp: string;
    notes: string | null;
    reference_number: string;
    farmer: {
        id: number;
        name: string;
        phone: string;
        cnic: string;
        district: string;
        is_blacklisted: boolean;
    } | null;
    supplier: {
        id: number;
        business_name: string;
        location: string | null;
        phone: string;
    } | null;
    installment: {
        id: number;
        amount_due: number;
        due_date: string;
        paid_date: string | null;
        status: string;
        late_fee: number;
        penalty_fee: number;
    } | null;
    order: {
        id: number;
        total_amount: number;
        status: string;
        payment_method: string;
        created_at: string;
    } | null;
}

interface FarmerStatement {
    farmer: {
        id: number;
        name: string;
        phone: string;
        cnic: string;
        district: string;
        credit_limit: number;
        is_blacklisted: boolean;
    };
    summary: {
        total_credit_used: number;
        total_repaid: number;
        current_balance: number;
        credit_available: number;
        total_orders: number;
        total_installments: number;
        pending_installments: number;
        overdue_installments: number;
    };
    statement: {
        date: string;
        reference: string;
        description: string;
        entry_type: string;
        debit: number;
        credit: number;
        balance: number;
        notes: string | null;
        supplier: string | null;
    }[];
    installment_schedule: {
        installment_id: number;
        order_id: number | null;
        amount_due: number;
        due_date: string;
        paid_date: string | null;
        status: string;
        late_fee: number;
        penalty_fee: number;
        total_due: number;
    }[];
}

interface SupplierStatement {
    supplier: {
        id: number;
        business_name: string;
        owner_name: string | null;
        phone: string;
        email: string;
        location: string | null;
        rating: number;
    };
    summary: {
        total_orders: number;
        delivered_orders: number;
        pending_orders: number;
        cancelled_orders: number;
        total_revenue: number;
        delivered_revenue: number;
        pending_revenue: number;
        total_transactions: number;
    };
    orders: {
        order_id: number;
        date: string;
        farmer_name: string;
        farmer_district: string | null;
        total_amount: number;
        status: string;
        payment_method: string;
        payment_status: string;
        items: { product_name: string; quantity: number; price: number; total: number }[];
    }[];
    transactions: {
        id: number;
        type: string;
        amount: number;
        date: string;
        reference: string;
        notes: string | null;
    }[];
}

// ==================== MAIN COMPONENT ====================

export default function TransactionsPage() {
    const { t } = useLanguage();
    // State
    const [activeTab, setActiveTab] = useState<'overview' | 'farmers' | 'suppliers' | 'aging' | 'transactions'>('overview');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Data states
    const [portfolioStats, setPortfolioStats] = useState<PortfolioStats | null>(null);
    const [farmerLedger, setFarmerLedger] = useState<FarmerLedger[]>([]);
    const [supplierLedger, setSupplierLedger] = useState<SupplierLedger[]>([]);
    const [agingReport, setAgingReport] = useState<AgingReport | null>(null);
    const [transactions, setTransactions] = useState<DetailedTransaction[]>([]);

    // Modal states
    const [selectedFarmer, setSelectedFarmer] = useState<FarmerStatement | null>(null);
    const [selectedSupplier, setSelectedSupplier] = useState<SupplierStatement | null>(null);
    const [selectedTransaction, setSelectedTransaction] = useState<DetailedTransaction | null>(null);
    const [showStatementModal, setShowStatementModal] = useState(false);
    const [showTransactionModal, setShowTransactionModal] = useState(false);
    const [statementLoading, setStatementLoading] = useState(false);

    // Filter states
    const [farmerFilter, setFarmerFilter] = useState('');
    const [farmerStatusFilter, setFarmerStatusFilter] = useState<string>('all');
    const [supplierFilter, setSupplierFilter] = useState('');
    const [txFarmerFilter, setTxFarmerFilter] = useState<string>('');
    const [txSupplierFilter, setTxSupplierFilter] = useState<string>('');
    const [txTypeFilter, setTxTypeFilter] = useState<string>('all');
    const [txDateFrom, setTxDateFrom] = useState<string>('');
    const [txDateTo, setTxDateTo] = useState<string>('');

    // Pagination
    const [farmerPage, setFarmerPage] = useState(1);
    const [supplierPage, setSupplierPage] = useState(1);
    const [txPage, setTxPage] = useState(1);
    const itemsPerPage = 10;

    // Fetch data
    const fetchData = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const [stats, farmers, suppliers, aging, txs] = await Promise.all([
                apiRequest<PortfolioStats>('/admin/finance/comprehensive-stats'),
                apiRequest<FarmerLedger[]>('/admin/finance/farmer-ledger'),
                apiRequest<SupplierLedger[]>('/admin/finance/supplier-ledger'),
                apiRequest<AgingReport>('/admin/finance/aging-report'),
                apiRequest<DetailedTransaction[]>('/admin/finance/transactions-detailed')
            ]);
            setPortfolioStats(stats);
            setFarmerLedger(farmers);
            setSupplierLedger(suppliers);
            setAgingReport(aging);
            setTransactions(txs);
        } catch (err: any) {
            console.error('Failed to fetch data:', err);
            setError(err.message || 'Failed to load financial data');
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    // Fetch farmer statement
    const fetchFarmerStatement = async (farmerId: number) => {
        setStatementLoading(true);
        try {
            const statement = await apiRequest<FarmerStatement>(`/admin/finance/farmer/${farmerId}/statement`);
            setSelectedFarmer(statement);
            setSelectedSupplier(null);
            setShowStatementModal(true);
        } catch (err) {
            console.error('Failed to fetch farmer statement:', err);
        } finally {
            setStatementLoading(false);
        }
    };

    // Fetch supplier statement
    const fetchSupplierStatement = async (supplierId: number) => {
        setStatementLoading(true);
        try {
            const statement = await apiRequest<SupplierStatement>(`/admin/finance/supplier/${supplierId}/statement`);
            setSelectedSupplier(statement);
            setSelectedFarmer(null);
            setShowStatementModal(true);
        } catch (err) {
            console.error('Failed to fetch supplier statement:', err);
        } finally {
            setStatementLoading(false);
        }
    };

    // Formatting helpers
    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-PK', {
            style: 'currency',
            currency: 'PKR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(amount);
    };

    const formatDate = (dateString: string | null) => {
        if (!dateString) return '-';
        return new Date(dateString).toLocaleDateString('en-PK', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
    };

    const formatDateTime = (dateString: string | null) => {
        if (!dateString) return '-';
        return new Date(dateString).toLocaleDateString('en-PK', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    // Status badges
    const getPaymentStatusBadge = (status: string) => {
        const styles: Record<string, string> = {
            'CLEAR': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
            'ACTIVE': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
            'DELINQUENT': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
            'BLACKLISTED': 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
        };
        return styles[status] || 'bg-gray-100 text-gray-800';
    };

    const getRiskBadge = (category: string) => {
        const styles: Record<string, string> = {
            'Current': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
            'Low': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
            'Medium': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
            'High': 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
            'Critical': 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
        };
        return styles[category] || 'bg-gray-100 text-gray-800';
    };

    const getTypeBadge = (type: string) => {
        const styles: Record<string, string> = {
            'PURCHASE': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
            'INSTALLMENT_PAYMENT': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
            'REFUND': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
            'PENALTY': 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
        };
        return styles[type] || 'bg-gray-100 text-gray-800';
    };

    // Filter farmers
    const filteredFarmers = farmerLedger.filter(f => {
        const matchesSearch = farmerFilter === '' ||
            f.name.toLowerCase().includes(farmerFilter.toLowerCase()) ||
            f.cnic.includes(farmerFilter) ||
            f.phone.includes(farmerFilter) ||
            f.district.toLowerCase().includes(farmerFilter.toLowerCase());

        const matchesStatus = farmerStatusFilter === 'all' || f.payment_status === farmerStatusFilter;

        return matchesSearch && matchesStatus;
    });

    // Filter suppliers
    const filteredSuppliers = supplierLedger.filter(s => {
        return supplierFilter === '' ||
            s.business_name.toLowerCase().includes(supplierFilter.toLowerCase()) ||
            (s.owner_name && s.owner_name.toLowerCase().includes(supplierFilter.toLowerCase())) ||
            s.phone.includes(supplierFilter) ||
            (s.location && s.location.toLowerCase().includes(supplierFilter.toLowerCase()));
    });

    // Filter transactions
    const filteredTransactions = transactions.filter(tx => {
        const matchesFarmer = txFarmerFilter === '' ||
            (tx.farmer && tx.farmer.name.toLowerCase().includes(txFarmerFilter.toLowerCase()));
        const matchesSupplier = txSupplierFilter === '' ||
            (tx.supplier && tx.supplier.business_name.toLowerCase().includes(txSupplierFilter.toLowerCase()));
        const matchesType = txTypeFilter === 'all' || tx.type === txTypeFilter;

        let matchesDate = true;
        if (txDateFrom) {
            matchesDate = matchesDate && new Date(tx.timestamp) >= new Date(txDateFrom);
        }
        if (txDateTo) {
            matchesDate = matchesDate && new Date(tx.timestamp) <= new Date(txDateTo + 'T23:59:59');
        }

        return matchesFarmer && matchesSupplier && matchesType && matchesDate;
    });

    // Pagination helpers
    const paginateFarmers = filteredFarmers.slice((farmerPage - 1) * itemsPerPage, farmerPage * itemsPerPage);
    const paginateSuppliers = filteredSuppliers.slice((supplierPage - 1) * itemsPerPage, supplierPage * itemsPerPage);
    const paginateTransactions = filteredTransactions.slice((txPage - 1) * itemsPerPage, txPage * itemsPerPage);

    const farmerTotalPages = Math.ceil(filteredFarmers.length / itemsPerPage);
    const supplierTotalPages = Math.ceil(filteredSuppliers.length / itemsPerPage);
    const txTotalPages = Math.ceil(filteredTransactions.length / itemsPerPage);

    // Export to CSV
    const exportFarmerLedger = () => {
        const headers = ['Name', 'CNIC', 'Phone', 'District', 'Credit Limit', 'Credit Used', 'Repaid', 'Outstanding', 'Available', 'Utilization %', 'Status', 'Risk Label', 'Days Overdue'];
        const data = filteredFarmers.map(f => [
            f.name, f.cnic, f.phone, f.district, f.credit_limit, f.total_credit_used, f.total_repaid,
            f.outstanding_balance, f.available_credit, f.utilization_rate, f.payment_status, f.risk_label, f.days_overdue
        ]);
        downloadCSV([headers, ...data], 'farmer_ledger');
    };

    const exportSupplierLedger = () => {
        const headers = ['Business Name', 'Owner', 'Phone', 'Location', 'Total Orders', 'Total Sales', 'Confirmed Revenue', 'Pending Revenue', 'Fulfillment Rate', 'Rating'];
        const data = filteredSuppliers.map(s => [
            s.business_name, s.owner_name || '', s.phone, s.location || '', s.orders.total, s.revenue.total_sales,
            s.revenue.confirmed_revenue, s.revenue.pending_revenue, s.metrics.fulfillment_rate, s.rating
        ]);
        downloadCSV([headers, ...data], 'supplier_ledger');
    };

    const exportTransactions = () => {
        const headers = ['Reference', 'Date', 'Type', 'Amount', 'Farmer', 'Supplier', 'Notes'];
        const data = filteredTransactions.map(tx => [
            tx.reference_number, formatDateTime(tx.timestamp), tx.type, tx.amount,
            tx.farmer?.name || '-', tx.supplier?.business_name || '-', tx.notes || ''
        ]);
        downloadCSV([headers, ...data], 'transactions');
    };

    const downloadCSV = (data: any[][], filename: string) => {
        const csvContent = data.map(row => row.map(cell => `"${cell}"`).join(',')).join('\n');
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `${filename}_${new Date().toISOString().split('T')[0]}.csv`;
        link.click();
    };

    // Loading state
    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-trust-blue mx-auto mb-4"></div>
                    <p className="text-gray-600 dark:text-gray-400">{t('admin.transactions.loading')}</p>
                </div>
            </div>
        );
    }

    // Error state
    if (error) {
        return (
            <div className="flex flex-col justify-center items-center min-h-screen p-4">
                <div className="text-red-500 text-center mb-4">
                    <span className="material-symbols-outlined text-6xl mb-4 block">error</span>
                    <p className="text-2xl font-bold">{t('admin.transactions.failed')}</p>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">{error}</p>
                </div>
                <button onClick={fetchData} className="px-6 py-3 bg-trust-blue text-white rounded-lg hover:bg-blue-700 transition flex items-center gap-2">
                    <span className="material-symbols-outlined">refresh</span>
                    {t('admin.transactions.retry')}
                </button>
            </div>
        );
    }

    return (
        <div className="p-6 max-w-7xl mx-auto pb-24 lg:pb-6">
            {/* Header */}
            <div className="mb-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-charcoal dark:text-off-white mb-1">
                            {t('admin.transactions.title')}
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400">
                            {t('admin.transactions.subtitle')}
                        </p>
                    </div>
                    <button onClick={fetchData} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition" title={t('admin.transactions.refresh')}>
                        <span className="material-symbols-outlined">refresh</span>
                    </button>
                </div>
            </div>

            {/* Tabs */}
            <div className="bg-gray-100/80 dark:bg-charcoal/40 p-1.5 rounded-2xl mb-8 flex overflow-x-auto shadow-inner border border-gray-200/50 dark:border-gray-800/50 w-max max-w-full hide-scrollbar">
                {[
                    { id: 'overview', label: t('admin.transactions.portfolioOverview'), icon: 'dashboard' },
                    { id: 'farmers', label: t('admin.transactions.farmerLedger'), icon: 'agriculture' },
                    { id: 'suppliers', label: t('admin.transactions.supplierLedger'), icon: 'store' },
                    { id: 'aging', label: t('admin.transactions.agingAnalysis'), icon: 'schedule' },
                    { id: 'transactions', label: t('admin.transactions.allTransactions'), icon: 'receipt_long' },
                ].map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as any)}
                        className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap ${
                            activeTab === tab.id
                                ? 'bg-white dark:bg-charcoal shadow-sm text-trust-blue'
                                : 'text-gray-600 dark:text-gray-400 hover:text-charcoal dark:hover:text-off-white hover:bg-black/5 dark:hover:bg-white/5'
                        }`}
                    >
                        <span className="material-symbols-outlined text-xl">{tab.icon}</span>
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* ==================== PORTFOLIO OVERVIEW TAB ==================== */}
            {activeTab === 'overview' && portfolioStats && (
                <div className="space-y-6">
                    {/* Key Metrics */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 to-violet-700 rounded-2xl p-6 text-white shadow-lg shadow-indigo-500/20 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300 group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl group-hover:bg-white/20 transition-all"></div>
                            <div className="relative">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                                        <span className="material-symbols-outlined text-white text-2xl">account_balance</span>
                                    </div>
                                    <span className="text-xs font-semibold bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">Total Disbursed</span>
                                </div>
                                <div className="text-3xl font-extrabold tracking-tight">{formatCurrency(portfolioStats.portfolio.total_disbursed)}</div>
                                <div className="text-sm font-medium text-white/80 mt-1">BNPL Credit Extended</div>
                            </div>
                        </div>

                        <div className="relative overflow-hidden bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-6 text-white shadow-lg shadow-emerald-500/20 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl group-hover:bg-white/20 transition-all"></div>
                            <div className="relative">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                                        <span className="material-symbols-outlined text-white text-2xl">payments</span>
                                    </div>
                                    <span className="text-xs font-semibold bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">Collected</span>
                                </div>
                                <div className="text-3xl font-extrabold tracking-tight">{formatCurrency(portfolioStats.portfolio.total_collected)}</div>
                                <div className="text-sm font-medium text-white/80 mt-1">{portfolioStats.portfolio.collection_efficiency.toFixed(1)}% Collection Rate</div>
                            </div>
                        </div>

                        <div className="relative overflow-hidden bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl p-6 text-white shadow-lg shadow-amber-500/20 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/30 transition-all duration-300 group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl group-hover:bg-white/20 transition-all"></div>
                            <div className="relative">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                                        <span className="material-symbols-outlined text-white text-2xl">pending</span>
                                    </div>
                                    <span className="text-xs font-semibold bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">Outstanding</span>
                                </div>
                                <div className="text-3xl font-extrabold tracking-tight">{formatCurrency(portfolioStats.portfolio.outstanding_balance)}</div>
                                <div className="text-sm font-medium text-white/80 mt-1">Pending Collection</div>
                            </div>
                        </div>

                        <div className="relative overflow-hidden bg-gradient-to-br from-rose-500 to-red-600 rounded-2xl p-6 text-white shadow-lg shadow-rose-500/20 hover:-translate-y-1 hover:shadow-xl hover:shadow-rose-500/30 transition-all duration-300 group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl group-hover:bg-white/20 transition-all"></div>
                            <div className="relative">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                                        <span className="material-symbols-outlined text-white text-2xl">warning</span>
                                    </div>
                                    <span className="text-xs font-semibold bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">Default Rate</span>
                                </div>
                                <div className="text-3xl font-extrabold tracking-tight">{portfolioStats.risk.default_rate.toFixed(1)}%</div>
                                <div className="text-sm font-medium text-white/80 mt-1">{portfolioStats.risk.farmers_with_overdue} of {portfolioStats.risk.total_active_farmers} farmers</div>
                            </div>
                        </div>
                    </div>

                    {/* Installment Stats & Transaction Summary */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Installment Performance */}
                        <div className="bg-white dark:bg-charcoal/40 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm">
                            <h3 className="text-lg font-bold text-charcoal dark:text-off-white mb-6 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-trust-blue">event_repeat</span>
                                </div>
                                Installment Performance
                            </h3>
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="text-center p-5 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-charcoal/30 dark:to-charcoal/60 rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-md transition-shadow">
                                    <div className="text-3xl font-extrabold text-charcoal dark:text-off-white">{portfolioStats.installments.total}</div>
                                    <div className="text-sm font-medium text-gray-500 mt-1">Total Installments</div>
                                </div>
                                <div className="text-center p-5 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl border border-emerald-100 dark:border-emerald-800/30 hover:shadow-md transition-shadow">
                                    <div className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">{portfolioStats.installments.on_time_rate.toFixed(1)}%</div>
                                    <div className="text-sm font-medium text-gray-500 mt-1">On-Time Rate</div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center group">
                                    <span className="flex items-center gap-3 text-sm font-medium text-gray-600 dark:text-gray-300">
                                        <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full shadow-sm shadow-emerald-500/50"></span>
                                        Paid
                                    </span>
                                    <span className="font-bold text-charcoal dark:text-off-white group-hover:text-emerald-600 transition-colors">{portfolioStats.installments.paid}</span>
                                </div>
                                <div className="flex justify-between items-center group">
                                    <span className="flex items-center gap-3 text-sm font-medium text-gray-600 dark:text-gray-300">
                                        <span className="w-2.5 h-2.5 bg-blue-500 rounded-full shadow-sm shadow-blue-500/50"></span>
                                        Pending
                                    </span>
                                    <span className="font-bold text-charcoal dark:text-off-white group-hover:text-blue-600 transition-colors">{portfolioStats.installments.pending}</span>
                                </div>
                                <div className="flex justify-between items-center group">
                                    <span className="flex items-center gap-3 text-sm font-medium text-gray-600 dark:text-gray-300">
                                        <span className="w-2.5 h-2.5 bg-amber-500 rounded-full shadow-sm shadow-amber-500/50"></span>
                                        Late
                                    </span>
                                    <span className="font-bold text-charcoal dark:text-off-white group-hover:text-amber-600 transition-colors">{portfolioStats.installments.late}</span>
                                </div>
                                <div className="flex justify-between items-center group">
                                    <span className="flex items-center gap-3 text-sm font-medium text-gray-600 dark:text-gray-300">
                                        <span className="w-2.5 h-2.5 bg-rose-500 rounded-full shadow-sm shadow-rose-500/50"></span>
                                        Overdue
                                    </span>
                                    <span className="font-bold text-charcoal dark:text-off-white group-hover:text-rose-600 transition-colors">{portfolioStats.installments.overdue}</span>
                                </div>
                            </div>
                        </div>

                        {/* Transaction Summary */}
                        <div className="bg-white dark:bg-charcoal/40 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm">
                            <h3 className="text-lg font-bold text-charcoal dark:text-off-white mb-6 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-indus-green/10 dark:bg-indus-green/20 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-indus-green">receipt_long</span>
                                </div>
                                Transaction Summary
                            </h3>
                            <div className="text-center p-5 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-charcoal/30 dark:to-charcoal/60 rounded-xl border border-gray-200/50 dark:border-gray-700/50 mb-6 hover:shadow-md transition-shadow">
                                <div className="text-3xl font-extrabold text-charcoal dark:text-off-white">{portfolioStats.transactions.total_count}</div>
                                <div className="text-sm font-medium text-gray-500 mt-1">Total Transactions</div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center p-3.5 bg-blue-50/80 dark:bg-blue-900/10 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-xl transition-colors border border-blue-100 dark:border-blue-900/30">
                                    <span className="text-sm font-semibold text-blue-800 dark:text-blue-300">Purchases</span>
                                    <div className="text-right">
                                        <span className="font-extrabold text-blue-600 dark:text-blue-400">{formatCurrency(portfolioStats.transactions.purchases.volume)}</span>
                                        <span className="text-xs font-medium text-blue-400 dark:text-blue-500 ml-2">({portfolioStats.transactions.purchases.count})</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center p-3.5 bg-emerald-50/80 dark:bg-emerald-900/10 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 rounded-xl transition-colors border border-emerald-100 dark:border-emerald-900/30">
                                    <span className="text-sm font-semibold text-emerald-800 dark:text-emerald-300">Payments</span>
                                    <div className="text-right">
                                        <span className="font-extrabold text-emerald-600 dark:text-emerald-400">{formatCurrency(portfolioStats.transactions.payments.volume)}</span>
                                        <span className="text-xs font-medium text-emerald-400 dark:text-emerald-500 ml-2">({portfolioStats.transactions.payments.count})</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center p-3.5 bg-amber-50/80 dark:bg-amber-900/10 hover:bg-amber-100 dark:hover:bg-amber-900/30 rounded-xl transition-colors border border-amber-100 dark:border-amber-900/30">
                                    <span className="text-sm font-semibold text-amber-800 dark:text-amber-300">Refunds</span>
                                    <div className="text-right">
                                        <span className="font-extrabold text-amber-600 dark:text-amber-400">{formatCurrency(portfolioStats.transactions.refunds.volume)}</span>
                                        <span className="text-xs font-medium text-amber-400 dark:text-amber-500 ml-2">({portfolioStats.transactions.refunds.count})</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center p-3.5 bg-rose-50/80 dark:bg-rose-900/10 hover:bg-rose-100 dark:hover:bg-rose-900/30 rounded-xl transition-colors border border-rose-100 dark:border-rose-900/30">
                                    <span className="text-sm font-semibold text-rose-800 dark:text-rose-300">Penalties</span>
                                    <div className="text-right">
                                        <span className="font-extrabold text-rose-600 dark:text-rose-400">{formatCurrency(portfolioStats.transactions.penalties.volume)}</span>
                                        <span className="text-xs font-medium text-rose-400 dark:text-rose-500 ml-2">({portfolioStats.transactions.penalties.count})</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Aging Analysis Visual */}
                    <div className="bg-white dark:bg-charcoal/40 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm">
                        <h3 className="text-lg font-bold text-charcoal dark:text-off-white mb-6 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-orange-900/30 flex items-center justify-center">
                                <span className="material-symbols-outlined text-orange-500">schedule</span>
                            </div>
                            Portfolio Aging Analysis
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                            <div className="text-center p-4 rounded-xl bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-800/30 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                                <div className="text-xl font-extrabold text-emerald-600 dark:text-emerald-400">{formatCurrency(portfolioStats.aging_analysis.current)}</div>
                                <div className="text-xs font-semibold text-emerald-800 dark:text-emerald-300 mt-2 uppercase tracking-wider">Current</div>
                            </div>
                            <div className="text-center p-4 rounded-xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800/30 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                                <div className="text-xl font-extrabold text-blue-600 dark:text-blue-400">{formatCurrency(portfolioStats.aging_analysis.days_1_30)}</div>
                                <div className="text-xs font-semibold text-blue-800 dark:text-blue-300 mt-2 uppercase tracking-wider">1-30 Days</div>
                            </div>
                            <div className="text-center p-4 rounded-xl bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-800/30 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                                <div className="text-xl font-extrabold text-amber-600 dark:text-amber-400">{formatCurrency(portfolioStats.aging_analysis.days_31_60)}</div>
                                <div className="text-xs font-semibold text-amber-800 dark:text-amber-300 mt-2 uppercase tracking-wider">31-60 Days</div>
                            </div>
                            <div className="text-center p-4 rounded-xl bg-orange-50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-800/30 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                                <div className="text-xl font-extrabold text-orange-600 dark:text-orange-400">{formatCurrency(portfolioStats.aging_analysis.days_61_90)}</div>
                                <div className="text-xs font-semibold text-orange-800 dark:text-orange-300 mt-2 uppercase tracking-wider">61-90 Days</div>
                            </div>
                            <div className="text-center p-4 rounded-xl bg-rose-50 dark:bg-rose-900/10 border border-rose-100 dark:border-rose-800/30 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                                <div className="text-xl font-extrabold text-rose-600 dark:text-rose-400">{formatCurrency(portfolioStats.aging_analysis.days_90_plus)}</div>
                                <div className="text-xs font-semibold text-rose-800 dark:text-rose-300 mt-2 uppercase tracking-wider">90+ Days</div>
                            </div>
                        </div>
                        {/* Progress bar visualization */}
                        <div className="mt-6">
                            <div className="h-6 flex rounded-full overflow-hidden border border-gray-100 dark:border-gray-700/50 shadow-inner">
                                {(() => {
                                    const total = portfolioStats.portfolio.outstanding_balance || 1;
                                    const segments = [
                                        { value: portfolioStats.aging_analysis.current, color: 'bg-emerald-500' },
                                        { value: portfolioStats.aging_analysis.days_1_30, color: 'bg-blue-500' },
                                        { value: portfolioStats.aging_analysis.days_31_60, color: 'bg-amber-500' },
                                        { value: portfolioStats.aging_analysis.days_61_90, color: 'bg-orange-500' },
                                        { value: portfolioStats.aging_analysis.days_90_plus, color: 'bg-rose-500' },
                                    ];
                                    return segments.map((seg, idx) => (
                                        <div key={idx} className={`${seg.color} flex items-center justify-center text-white text-[10px] sm:text-xs font-bold transition-all hover:brightness-110`} style={{ width: `${Math.max((seg.value / total) * 100, seg.value > 0 ? 5 : 0)}%` }}>
                                            {seg.value > 0 && ((seg.value / total) * 100).toFixed(0) + '%'}
                                        </div>
                                    ));
                                })()}
                            </div>
                        </div>
                    </div>

                    {/* Fees Collected */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white dark:bg-charcoal/40 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-900/30 dark:to-orange-900/30 rounded-xl flex items-center justify-center shadow-inner">
                                    <span className="material-symbols-outlined text-amber-600 dark:text-amber-400 text-3xl">timer</span>
                                </div>
                                <div>
                                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Late Fees Collected</div>
                                    <div className="text-2xl font-extrabold text-charcoal dark:text-off-white tracking-tight">{formatCurrency(portfolioStats.fees.late_fees_collected)}</div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-charcoal/40 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-gradient-to-br from-rose-100 to-rose-200 dark:from-rose-900/30 dark:to-red-900/30 rounded-xl flex items-center justify-center shadow-inner">
                                    <span className="material-symbols-outlined text-rose-600 dark:text-rose-400 text-3xl">gavel</span>
                                </div>
                                <div>
                                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Penalty Fees Collected</div>
                                    <div className="text-2xl font-extrabold text-charcoal dark:text-off-white tracking-tight">{formatCurrency(portfolioStats.fees.penalty_fees_collected)}</div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-charcoal/40 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-xl flex items-center justify-center shadow-inner">
                                    <span className="material-symbols-outlined text-purple-600 dark:text-purple-400 text-3xl">monetization_on</span>
                                </div>
                                <div>
                                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Total Fees Revenue</div>
                                    <div className="text-2xl font-extrabold text-charcoal dark:text-off-white tracking-tight">{formatCurrency(portfolioStats.fees.total_fees)}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* ==================== FARMER LEDGER TAB ==================== */}
            {activeTab === 'farmers' && (
                <div className="space-y-4">
                    {/* Filters */}
                    <div className="bg-white dark:bg-charcoal/20 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                        <div className="flex flex-wrap gap-4 items-center">
                            <div className="flex-1 min-w-[200px]">
                                <div className="relative">
                                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
                                    <input
                                        type="text"
                                        placeholder="Search by name, CNIC, phone, district..."
                                        value={farmerFilter}
                                        onChange={(e) => { setFarmerFilter(e.target.value); setFarmerPage(1); }}
                                        className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-charcoal/30 text-charcoal dark:text-off-white focus:ring-2 focus:ring-trust-blue"
                                    />
                                </div>
                            </div>
                            <select
                                value={farmerStatusFilter}
                                onChange={(e) => { setFarmerStatusFilter(e.target.value); setFarmerPage(1); }}
                                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-charcoal/30"
                            >
                                <option value="all">All Statuses</option>
                                <option value="CLEAR">Clear</option>
                                <option value="ACTIVE">Active Loan</option>
                                <option value="DELINQUENT">Delinquent</option>
                                <option value="BLACKLISTED">Blacklisted</option>
                            </select>
                            <button onClick={exportFarmerLedger} className="px-4 py-2 bg-indus-green text-white rounded-lg hover:bg-green-700 transition flex items-center gap-2">
                                <span className="material-symbols-outlined text-sm">download</span>
                                Export CSV
                            </button>
                        </div>
                        <div className="mt-3 text-sm text-gray-500">
                            Showing {paginateFarmers.length} of {filteredFarmers.length} farmers
                        </div>
                    </div>

                    {/* Table */}
                    <div className="bg-white dark:bg-charcoal/20 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50 dark:bg-charcoal/40">
                                    <tr>
                                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">Farmer</th>
                                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">Credit Limit</th>
                                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">Used</th>
                                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">Repaid</th>
                                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">Outstanding</th>
                                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">Utilization</th>
                                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">Status</th>
                                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">Risk</th>
                                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                    {paginateFarmers.length === 0 ? (
                                        <tr>
                                            <td colSpan={9} className="px-6 py-12 text-center">
                                                <span className="material-symbols-outlined text-4xl text-gray-300 mb-2 block">person_off</span>
                                                <p className="text-gray-500">No farmers found</p>
                                            </td>
                                        </tr>
                                    ) : (
                                        paginateFarmers.map(farmer => (
                                            <tr key={farmer.farmer_id} className="hover:bg-gray-50 dark:hover:bg-charcoal/30">
                                                <td className="px-4 py-3">
                                                    <div className="flex items-center gap-3">
                                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${farmer.is_blacklisted ? 'bg-red-100 dark:bg-red-900/30' : 'bg-indus-green/10'}`}>
                                                            <span className={`material-symbols-outlined ${farmer.is_blacklisted ? 'text-red-600' : 'text-indus-green'}`}>person</span>
                                                        </div>
                                                        <div>
                                                            <div className="font-medium text-charcoal dark:text-off-white">{farmer.name}</div>
                                                            <div className="text-xs text-gray-500">{farmer.district} | {farmer.cnic}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-3 font-medium">{formatCurrency(farmer.credit_limit)}</td>
                                                <td className="px-4 py-3 text-blue-600 font-medium">{formatCurrency(farmer.total_credit_used)}</td>
                                                <td className="px-4 py-3 text-green-600 font-medium">{formatCurrency(farmer.total_repaid)}</td>
                                                <td className="px-4 py-3">
                                                    <span className={`font-bold ${farmer.outstanding_balance > 0 ? 'text-orange-600' : 'text-green-600'}`}>
                                                        {formatCurrency(farmer.outstanding_balance)}
                                                    </span>
                                                    {farmer.overdue_amount > 0 && (
                                                        <div className="text-xs text-red-500">{formatCurrency(farmer.overdue_amount)} overdue</div>
                                                    )}
                                                </td>
                                                <td className="px-4 py-3">
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                                            <div className={`h-2 rounded-full ${farmer.utilization_rate > 80 ? 'bg-red-500' : farmer.utilization_rate > 50 ? 'bg-yellow-500' : 'bg-green-500'}`} style={{ width: `${Math.min(farmer.utilization_rate, 100)}%` }}></div>
                                                        </div>
                                                        <span className="text-xs">{farmer.utilization_rate.toFixed(0)}%</span>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-3">
                                                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getPaymentStatusBadge(farmer.payment_status)}`}>
                                                        {farmer.payment_status}
                                                    </span>
                                                    {farmer.days_overdue > 0 && (
                                                        <div className="text-xs text-red-500 mt-1">{farmer.days_overdue} days overdue</div>
                                                    )}
                                                </td>
                                                <td className="px-4 py-3">
                                                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getRiskBadge(farmer.risk_label)}`}>
                                                        {farmer.risk_label}
                                                    </span>
                                                    {farmer.risk_score !== null && (
                                                        <div className="text-xs text-gray-500 mt-1">Score: {farmer.risk_score}</div>
                                                    )}
                                                </td>
                                                <td className="px-4 py-3">
                                                    <button
                                                        onClick={() => fetchFarmerStatement(farmer.farmer_id)}
                                                        className="p-2 hover:bg-trust-blue/10 rounded-lg text-trust-blue transition"
                                                        title="View Statement"
                                                    >
                                                        <span className="material-symbols-outlined">receipt_long</span>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                        {/* Pagination */}
                        {farmerTotalPages > 1 && (
                            <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
                                <span className="text-sm text-gray-500">Page {farmerPage} of {farmerTotalPages}</span>
                                <div className="flex gap-2">
                                    <button onClick={() => setFarmerPage(p => Math.max(1, p - 1))} disabled={farmerPage === 1} className="px-3 py-1 border rounded-lg disabled:opacity-50">
                                        <span className="material-symbols-outlined text-sm">chevron_left</span>
                                    </button>
                                    <button onClick={() => setFarmerPage(p => Math.min(farmerTotalPages, p + 1))} disabled={farmerPage === farmerTotalPages} className="px-3 py-1 border rounded-lg disabled:opacity-50">
                                        <span className="material-symbols-outlined text-sm">chevron_right</span>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* ==================== SUPPLIER LEDGER TAB ==================== */}
            {activeTab === 'suppliers' && (
                <div className="space-y-4">
                    {/* Filters */}
                    <div className="bg-white dark:bg-charcoal/20 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                        <div className="flex flex-wrap gap-4 items-center">
                            <div className="flex-1 min-w-[200px]">
                                <div className="relative">
                                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
                                    <input
                                        type="text"
                                        placeholder="Search by business name, owner, phone, location..."
                                        value={supplierFilter}
                                        onChange={(e) => { setSupplierFilter(e.target.value); setSupplierPage(1); }}
                                        className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-charcoal/30"
                                    />
                                </div>
                            </div>
                            <button onClick={exportSupplierLedger} className="px-4 py-2 bg-indus-green text-white rounded-lg hover:bg-green-700 transition flex items-center gap-2">
                                <span className="material-symbols-outlined text-sm">download</span>
                                Export CSV
                            </button>
                        </div>
                        <div className="mt-3 text-sm text-gray-500">
                            Showing {paginateSuppliers.length} of {filteredSuppliers.length} suppliers
                        </div>
                    </div>

                    {/* Table */}
                    <div className="bg-white dark:bg-charcoal/20 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50 dark:bg-charcoal/40">
                                    <tr>
                                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">Supplier</th>
                                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">Total Orders</th>
                                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">Total Sales</th>
                                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">Confirmed Revenue</th>
                                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">Pending Revenue</th>
                                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">BNPL / Cash</th>
                                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">Fulfillment</th>
                                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">Rating</th>
                                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                    {paginateSuppliers.length === 0 ? (
                                        <tr>
                                            <td colSpan={9} className="px-6 py-12 text-center">
                                                <span className="material-symbols-outlined text-4xl text-gray-300 mb-2 block">store</span>
                                                <p className="text-gray-500">No suppliers found</p>
                                            </td>
                                        </tr>
                                    ) : (
                                        paginateSuppliers.map(supplier => (
                                            <tr key={supplier.supplier_id} className="hover:bg-gray-50 dark:hover:bg-charcoal/30">
                                                <td className="px-4 py-3">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-10 h-10 bg-trust-blue/10 rounded-full flex items-center justify-center">
                                                            <span className="material-symbols-outlined text-trust-blue">store</span>
                                                        </div>
                                                        <div>
                                                            <div className="font-medium text-charcoal dark:text-off-white">{supplier.business_name}</div>
                                                            <div className="text-xs text-gray-500">{supplier.location || 'N/A'} | {supplier.business_type || 'General'}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-3">
                                                    <div className="font-medium">{supplier.orders.total}</div>
                                                    <div className="text-xs text-gray-500">
                                                        <span className="text-green-600">{supplier.orders.delivered} delivered</span> |
                                                        <span className="text-red-600 ml-1">{supplier.orders.cancelled} cancelled</span>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-3 font-bold text-charcoal dark:text-off-white">{formatCurrency(supplier.revenue.total_sales)}</td>
                                                <td className="px-4 py-3 text-green-600 font-medium">{formatCurrency(supplier.revenue.confirmed_revenue)}</td>
                                                <td className="px-4 py-3 text-orange-600 font-medium">{formatCurrency(supplier.revenue.pending_revenue)}</td>
                                                <td className="px-4 py-3">
                                                    <div className="text-xs">
                                                        <span className="text-blue-600">{formatCurrency(supplier.payment_breakdown.bnpl_volume)}</span> BNPL
                                                    </div>
                                                    <div className="text-xs">
                                                        <span className="text-green-600">{formatCurrency(supplier.payment_breakdown.cash_volume)}</span> Cash
                                                    </div>
                                                </td>
                                                <td className="px-4 py-3">
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-12 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                                            <div className="h-2 rounded-full bg-green-500" style={{ width: `${supplier.metrics.fulfillment_rate}%` }}></div>
                                                        </div>
                                                        <span className="text-xs">{supplier.metrics.fulfillment_rate.toFixed(0)}%</span>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-3">
                                                    <div className="flex items-center gap-1">
                                                        <span className="material-symbols-outlined text-yellow-500 text-sm">star</span>
                                                        <span className="font-medium">{supplier.rating.toFixed(1)}</span>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-3">
                                                    <button
                                                        onClick={() => fetchSupplierStatement(supplier.supplier_id)}
                                                        className="p-2 hover:bg-trust-blue/10 rounded-lg text-trust-blue transition"
                                                        title="View Statement"
                                                    >
                                                        <span className="material-symbols-outlined">receipt_long</span>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                        {/* Pagination */}
                        {supplierTotalPages > 1 && (
                            <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
                                <span className="text-sm text-gray-500">Page {supplierPage} of {supplierTotalPages}</span>
                                <div className="flex gap-2">
                                    <button onClick={() => setSupplierPage(p => Math.max(1, p - 1))} disabled={supplierPage === 1} className="px-3 py-1 border rounded-lg disabled:opacity-50">
                                        <span className="material-symbols-outlined text-sm">chevron_left</span>
                                    </button>
                                    <button onClick={() => setSupplierPage(p => Math.min(supplierTotalPages, p + 1))} disabled={supplierPage === supplierTotalPages} className="px-3 py-1 border rounded-lg disabled:opacity-50">
                                        <span className="material-symbols-outlined text-sm">chevron_right</span>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* ==================== AGING ANALYSIS TAB ==================== */}
            {activeTab === 'aging' && agingReport && (
                <div className="space-y-6">
                    {/* Summary Cards */}
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4 border-2 border-green-200 dark:border-green-800">
                            <div className="text-2xl font-bold text-green-600">{formatCurrency(agingReport.summary.current)}</div>
                            <div className="text-sm text-gray-600">Current (Not Due)</div>
                        </div>
                        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 border-2 border-blue-200 dark:border-blue-800">
                            <div className="text-2xl font-bold text-blue-600">{formatCurrency(agingReport.summary.days_1_30)}</div>
                            <div className="text-sm text-gray-600">1-30 Days Overdue</div>
                        </div>
                        <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-4 border-2 border-yellow-200 dark:border-yellow-800">
                            <div className="text-2xl font-bold text-yellow-600">{formatCurrency(agingReport.summary.days_31_60)}</div>
                            <div className="text-sm text-gray-600">31-60 Days Overdue</div>
                        </div>
                        <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-4 border-2 border-orange-200 dark:border-orange-800">
                            <div className="text-2xl font-bold text-orange-600">{formatCurrency(agingReport.summary.days_61_90)}</div>
                            <div className="text-sm text-gray-600">61-90 Days Overdue</div>
                        </div>
                        <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-4 border-2 border-red-200 dark:border-red-800">
                            <div className="text-2xl font-bold text-red-600">{formatCurrency(agingReport.summary.days_90_plus)}</div>
                            <div className="text-sm text-gray-600">90+ Days Overdue</div>
                        </div>
                    </div>

                    {/* Risk Summary */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white dark:bg-charcoal/20 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                            <div className="text-3xl font-bold text-charcoal dark:text-off-white">{agingReport.summary.accounts_count}</div>
                            <div className="text-sm text-gray-500">Accounts with Outstanding</div>
                        </div>
                        <div className="bg-white dark:bg-charcoal/20 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                            <div className="text-3xl font-bold text-red-600">{agingReport.summary.critical_accounts}</div>
                            <div className="text-sm text-gray-500">Critical Risk Accounts</div>
                        </div>
                        <div className="bg-white dark:bg-charcoal/20 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                            <div className="text-3xl font-bold text-orange-600">{agingReport.summary.high_risk_accounts}</div>
                            <div className="text-sm text-gray-500">High Risk Accounts</div>
                        </div>
                    </div>

                    {/* Aging Details Table */}
                    <div className="bg-white dark:bg-charcoal/20 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                            <h3 className="text-lg font-bold flex items-center gap-2">
                                <span className="material-symbols-outlined text-orange-500">schedule</span>
                                Aging Report Details
                            </h3>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50 dark:bg-charcoal/40">
                                    <tr>
                                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Farmer</th>
                                        <th className="px-4 py-3 text-right text-xs font-semibold text-gray-600 uppercase">Current</th>
                                        <th className="px-4 py-3 text-right text-xs font-semibold text-gray-600 uppercase">1-30 Days</th>
                                        <th className="px-4 py-3 text-right text-xs font-semibold text-gray-600 uppercase">31-60 Days</th>
                                        <th className="px-4 py-3 text-right text-xs font-semibold text-gray-600 uppercase">61-90 Days</th>
                                        <th className="px-4 py-3 text-right text-xs font-semibold text-gray-600 uppercase">90+ Days</th>
                                        <th className="px-4 py-3 text-right text-xs font-semibold text-gray-600 uppercase">Total</th>
                                        <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase">Risk</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                    {agingReport.details.map(item => (
                                        <tr key={item.farmer_id} className="hover:bg-gray-50 dark:hover:bg-charcoal/30">
                                            <td className="px-4 py-3">
                                                <div className="font-medium">{item.farmer_name}</div>
                                                <div className="text-xs text-gray-500">{item.district} | {item.phone}</div>
                                            </td>
                                            <td className="px-4 py-3 text-right text-green-600">{formatCurrency(item.current)}</td>
                                            <td className="px-4 py-3 text-right text-blue-600">{formatCurrency(item.days_1_30)}</td>
                                            <td className="px-4 py-3 text-right text-yellow-600">{formatCurrency(item.days_31_60)}</td>
                                            <td className="px-4 py-3 text-right text-orange-600">{formatCurrency(item.days_61_90)}</td>
                                            <td className="px-4 py-3 text-right text-red-600">{formatCurrency(item.days_90_plus)}</td>
                                            <td className="px-4 py-3 text-right font-bold">{formatCurrency(item.total_outstanding)}</td>
                                            <td className="px-4 py-3 text-center">
                                                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getRiskBadge(item.risk_category)}`}>
                                                    {item.risk_category}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                                <tfoot className="bg-gray-100 dark:bg-charcoal/50 font-bold">
                                    <tr>
                                        <td className="px-4 py-3">TOTAL</td>
                                        <td className="px-4 py-3 text-right text-green-600">{formatCurrency(agingReport.summary.current)}</td>
                                        <td className="px-4 py-3 text-right text-blue-600">{formatCurrency(agingReport.summary.days_1_30)}</td>
                                        <td className="px-4 py-3 text-right text-yellow-600">{formatCurrency(agingReport.summary.days_31_60)}</td>
                                        <td className="px-4 py-3 text-right text-orange-600">{formatCurrency(agingReport.summary.days_61_90)}</td>
                                        <td className="px-4 py-3 text-right text-red-600">{formatCurrency(agingReport.summary.days_90_plus)}</td>
                                        <td className="px-4 py-3 text-right">{formatCurrency(agingReport.summary.total)}</td>
                                        <td className="px-4 py-3"></td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            )}

            {/* ==================== TRANSACTIONS TAB ==================== */}
            {activeTab === 'transactions' && (
                <div className="space-y-4">
                    {/* Filters */}
                    <div className="bg-white dark:bg-charcoal/20 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                            <input
                                type="text"
                                placeholder="Filter by farmer..."
                                value={txFarmerFilter}
                                onChange={(e) => { setTxFarmerFilter(e.target.value); setTxPage(1); }}
                                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-charcoal/30"
                            />
                            <input
                                type="text"
                                placeholder="Filter by supplier..."
                                value={txSupplierFilter}
                                onChange={(e) => { setTxSupplierFilter(e.target.value); setTxPage(1); }}
                                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-charcoal/30"
                            />
                            <select
                                value={txTypeFilter}
                                onChange={(e) => { setTxTypeFilter(e.target.value); setTxPage(1); }}
                                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-charcoal/30"
                            >
                                <option value="all">All Types</option>
                                <option value="PURCHASE">Purchase</option>
                                <option value="INSTALLMENT_PAYMENT">Payment</option>
                                <option value="REFUND">Refund</option>
                                <option value="PENALTY">Penalty</option>
                            </select>
                            <input
                                type="date"
                                value={txDateFrom}
                                onChange={(e) => { setTxDateFrom(e.target.value); setTxPage(1); }}
                                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-charcoal/30"
                                placeholder="From date"
                            />
                            <input
                                type="date"
                                value={txDateTo}
                                onChange={(e) => { setTxDateTo(e.target.value); setTxPage(1); }}
                                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-charcoal/30"
                                placeholder="To date"
                            />
                        </div>
                        <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                            <span className="text-sm text-gray-500">Showing {paginateTransactions.length} of {filteredTransactions.length} transactions</span>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => { setTxFarmerFilter(''); setTxSupplierFilter(''); setTxTypeFilter('all'); setTxDateFrom(''); setTxDateTo(''); setTxPage(1); }}
                                    className="px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                                >
                                    Clear Filters
                                </button>
                                <button onClick={exportTransactions} className="px-4 py-2 text-sm bg-indus-green text-white rounded-lg hover:bg-green-700 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-sm">download</span>
                                    Export CSV
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="bg-white dark:bg-charcoal/20 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50 dark:bg-charcoal/40">
                                    <tr>
                                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Reference</th>
                                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Date</th>
                                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Farmer</th>
                                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Supplier</th>
                                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Type</th>
                                        <th className="px-4 py-3 text-right text-xs font-semibold text-gray-600 uppercase">Amount</th>
                                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                    {paginateTransactions.length === 0 ? (
                                        <tr>
                                            <td colSpan={7} className="px-6 py-12 text-center">
                                                <span className="material-symbols-outlined text-4xl text-gray-300 mb-2 block">receipt_long</span>
                                                <p className="text-gray-500">No transactions found</p>
                                            </td>
                                        </tr>
                                    ) : (
                                        paginateTransactions.map(tx => (
                                            <tr key={tx.id} className="hover:bg-gray-50 dark:hover:bg-charcoal/30">
                                                <td className="px-4 py-3 font-mono text-sm">{tx.reference_number}</td>
                                                <td className="px-4 py-3 text-sm text-gray-600">{formatDateTime(tx.timestamp)}</td>
                                                <td className="px-4 py-3">
                                                    {tx.farmer ? (
                                                        <div>
                                                            <div className="font-medium text-sm">{tx.farmer.name}</div>
                                                            <div className="text-xs text-gray-500">{tx.farmer.district}</div>
                                                        </div>
                                                    ) : '-'}
                                                </td>
                                                <td className="px-4 py-3">
                                                    {tx.supplier ? (
                                                        <div>
                                                            <div className="font-medium text-sm">{tx.supplier.business_name}</div>
                                                            <div className="text-xs text-gray-500">{tx.supplier.location || 'N/A'}</div>
                                                        </div>
                                                    ) : '-'}
                                                </td>
                                                <td className="px-4 py-3">
                                                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getTypeBadge(tx.type)}`}>
                                                        {tx.type.replace('_', ' ')}
                                                    </span>
                                                </td>
                                                <td className="px-4 py-3 text-right">
                                                    <span className={`font-bold ${tx.type === 'INSTALLMENT_PAYMENT' || tx.type === 'REFUND' ? 'text-green-600' : 'text-charcoal dark:text-off-white'}`}>
                                                        {tx.type === 'INSTALLMENT_PAYMENT' || tx.type === 'REFUND' ? '+' : ''}{formatCurrency(tx.amount)}
                                                    </span>
                                                </td>
                                                <td className="px-4 py-3">
                                                    <button
                                                        onClick={() => { setSelectedTransaction(tx); setShowTransactionModal(true); }}
                                                        className="p-2 hover:bg-trust-blue/10 rounded-lg text-trust-blue transition"
                                                        title="View Details"
                                                    >
                                                        <span className="material-symbols-outlined">visibility</span>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                        {/* Pagination */}
                        {txTotalPages > 1 && (
                            <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
                                <span className="text-sm text-gray-500">Page {txPage} of {txTotalPages}</span>
                                <div className="flex gap-2">
                                    <button onClick={() => setTxPage(p => Math.max(1, p - 1))} disabled={txPage === 1} className="px-3 py-1 border rounded-lg disabled:opacity-50">
                                        <span className="material-symbols-outlined text-sm">chevron_left</span>
                                    </button>
                                    <button onClick={() => setTxPage(p => Math.min(txTotalPages, p + 1))} disabled={txPage === txTotalPages} className="px-3 py-1 border rounded-lg disabled:opacity-50">
                                        <span className="material-symbols-outlined text-sm">chevron_right</span>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* ==================== STATEMENT MODAL ==================== */}
            {showStatementModal && (selectedFarmer || selectedSupplier) && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white dark:bg-charcoal rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
                        <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                            <h2 className="text-xl font-bold flex items-center gap-2">
                                <span className="material-symbols-outlined text-trust-blue">receipt_long</span>
                                Account Statement
                            </h2>
                            <button onClick={() => setShowStatementModal(false)} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>
                        <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
                            {statementLoading ? (
                                <div className="text-center py-12">
                                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-trust-blue mx-auto"></div>
                                    <p className="text-gray-500 mt-4">Loading statement...</p>
                                </div>
                            ) : selectedFarmer ? (
                                <div className="space-y-6">
                                    {/* Farmer Info */}
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-gray-50 dark:bg-charcoal/30 rounded-lg">
                                        <div><span className="text-xs text-gray-500">Name</span><div className="font-medium">{selectedFarmer.farmer.name}</div></div>
                                        <div><span className="text-xs text-gray-500">CNIC</span><div className="font-medium">{selectedFarmer.farmer.cnic}</div></div>
                                        <div><span className="text-xs text-gray-500">Phone</span><div className="font-medium">{selectedFarmer.farmer.phone}</div></div>
                                        <div><span className="text-xs text-gray-500">Credit Limit</span><div className="font-medium">{formatCurrency(selectedFarmer.farmer.credit_limit)}</div></div>
                                    </div>
                                    {/* Summary */}
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-center">
                                            <div className="text-xl font-bold text-blue-600">{formatCurrency(selectedFarmer.summary.total_credit_used)}</div>
                                            <div className="text-xs text-gray-500">Total Credit Used</div>
                                        </div>
                                        <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg text-center">
                                            <div className="text-xl font-bold text-green-600">{formatCurrency(selectedFarmer.summary.total_repaid)}</div>
                                            <div className="text-xs text-gray-500">Total Repaid</div>
                                        </div>
                                        <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg text-center">
                                            <div className="text-xl font-bold text-orange-600">{formatCurrency(selectedFarmer.summary.current_balance)}</div>
                                            <div className="text-xs text-gray-500">Current Balance</div>
                                        </div>
                                        <div className="p-4 bg-gray-50 dark:bg-gray-900/20 rounded-lg text-center">
                                            <div className="text-xl font-bold">{formatCurrency(selectedFarmer.summary.credit_available)}</div>
                                            <div className="text-xs text-gray-500">Credit Available</div>
                                        </div>
                                    </div>
                                    {/* Statement Table */}
                                    <div className="border rounded-lg overflow-hidden">
                                        <table className="w-full text-sm">
                                            <thead className="bg-gray-50 dark:bg-charcoal/40">
                                                <tr>
                                                    <th className="px-4 py-2 text-left text-xs font-semibold">Date</th>
                                                    <th className="px-4 py-2 text-left text-xs font-semibold">Reference</th>
                                                    <th className="px-4 py-2 text-left text-xs font-semibold">Description</th>
                                                    <th className="px-4 py-2 text-right text-xs font-semibold">Debit</th>
                                                    <th className="px-4 py-2 text-right text-xs font-semibold">Credit</th>
                                                    <th className="px-4 py-2 text-right text-xs font-semibold">Balance</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y">
                                                {selectedFarmer.statement.map((entry, idx) => (
                                                    <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-charcoal/30">
                                                        <td className="px-4 py-2">{formatDate(entry.date)}</td>
                                                        <td className="px-4 py-2 font-mono text-xs">{entry.reference}</td>
                                                        <td className="px-4 py-2">{entry.description}{entry.supplier && <span className="text-xs text-gray-500 ml-1">({entry.supplier})</span>}</td>
                                                        <td className="px-4 py-2 text-right text-red-600">{entry.debit > 0 ? formatCurrency(entry.debit) : '-'}</td>
                                                        <td className="px-4 py-2 text-right text-green-600">{entry.credit > 0 ? formatCurrency(entry.credit) : '-'}</td>
                                                        <td className="px-4 py-2 text-right font-medium">{formatCurrency(entry.balance)}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    {/* Installment Schedule */}
                                    {selectedFarmer.installment_schedule.length > 0 && (
                                        <div>
                                            <h3 className="font-bold mb-3">Installment Schedule</h3>
                                            <div className="border rounded-lg overflow-hidden">
                                                <table className="w-full text-sm">
                                                    <thead className="bg-gray-50 dark:bg-charcoal/40">
                                                        <tr>
                                                            <th className="px-4 py-2 text-left text-xs font-semibold">Due Date</th>
                                                            <th className="px-4 py-2 text-right text-xs font-semibold">Amount</th>
                                                            <th className="px-4 py-2 text-right text-xs font-semibold">Fees</th>
                                                            <th className="px-4 py-2 text-right text-xs font-semibold">Total Due</th>
                                                            <th className="px-4 py-2 text-center text-xs font-semibold">Status</th>
                                                            <th className="px-4 py-2 text-left text-xs font-semibold">Paid Date</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y">
                                                        {selectedFarmer.installment_schedule.map(inst => (
                                                            <tr key={inst.installment_id} className="hover:bg-gray-50">
                                                                <td className="px-4 py-2">{formatDate(inst.due_date)}</td>
                                                                <td className="px-4 py-2 text-right">{formatCurrency(inst.amount_due)}</td>
                                                                <td className="px-4 py-2 text-right text-red-500">{formatCurrency(inst.late_fee + inst.penalty_fee)}</td>
                                                                <td className="px-4 py-2 text-right font-medium">{formatCurrency(inst.total_due)}</td>
                                                                <td className="px-4 py-2 text-center">
                                                                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${inst.status === 'PAID' ? 'bg-green-100 text-green-800' : inst.status === 'PENDING' ? 'bg-blue-100 text-blue-800' : 'bg-red-100 text-red-800'}`}>
                                                                        {inst.status}
                                                                    </span>
                                                                </td>
                                                                <td className="px-4 py-2">{formatDate(inst.paid_date)}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ) : selectedSupplier ? (
                                <div className="space-y-6">
                                    {/* Supplier Info */}
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-gray-50 dark:bg-charcoal/30 rounded-lg">
                                        <div><span className="text-xs text-gray-500">Business Name</span><div className="font-medium">{selectedSupplier.supplier.business_name}</div></div>
                                        <div><span className="text-xs text-gray-500">Owner</span><div className="font-medium">{selectedSupplier.supplier.owner_name || 'N/A'}</div></div>
                                        <div><span className="text-xs text-gray-500">Phone</span><div className="font-medium">{selectedSupplier.supplier.phone}</div></div>
                                        <div><span className="text-xs text-gray-500">Location</span><div className="font-medium">{selectedSupplier.supplier.location || 'N/A'}</div></div>
                                    </div>
                                    {/* Summary */}
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-center">
                                            <div className="text-xl font-bold text-blue-600">{selectedSupplier.summary.total_orders}</div>
                                            <div className="text-xs text-gray-500">Total Orders</div>
                                        </div>
                                        <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg text-center">
                                            <div className="text-xl font-bold text-green-600">{formatCurrency(selectedSupplier.summary.total_revenue)}</div>
                                            <div className="text-xs text-gray-500">Total Revenue</div>
                                        </div>
                                        <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg text-center">
                                            <div className="text-xl font-bold text-emerald-600">{formatCurrency(selectedSupplier.summary.delivered_revenue)}</div>
                                            <div className="text-xs text-gray-500">Confirmed Revenue</div>
                                        </div>
                                        <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg text-center">
                                            <div className="text-xl font-bold text-orange-600">{formatCurrency(selectedSupplier.summary.pending_revenue)}</div>
                                            <div className="text-xs text-gray-500">Pending Revenue</div>
                                        </div>
                                    </div>
                                    {/* Orders Table */}
                                    <div className="border rounded-lg overflow-hidden">
                                        <table className="w-full text-sm">
                                            <thead className="bg-gray-50 dark:bg-charcoal/40">
                                                <tr>
                                                    <th className="px-4 py-2 text-left text-xs font-semibold">Order ID</th>
                                                    <th className="px-4 py-2 text-left text-xs font-semibold">Date</th>
                                                    <th className="px-4 py-2 text-left text-xs font-semibold">Farmer</th>
                                                    <th className="px-4 py-2 text-right text-xs font-semibold">Amount</th>
                                                    <th className="px-4 py-2 text-center text-xs font-semibold">Payment</th>
                                                    <th className="px-4 py-2 text-center text-xs font-semibold">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y">
                                                {selectedSupplier.orders.map(order => (
                                                    <tr key={order.order_id} className="hover:bg-gray-50">
                                                        <td className="px-4 py-2 font-mono">#{order.order_id}</td>
                                                        <td className="px-4 py-2">{formatDate(order.date)}</td>
                                                        <td className="px-4 py-2">{order.farmer_name}</td>
                                                        <td className="px-4 py-2 text-right font-medium">{formatCurrency(order.total_amount)}</td>
                                                        <td className="px-4 py-2 text-center">
                                                            <span className={`px-2 py-1 rounded-full text-xs ${order.payment_method === 'BNPL' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
                                                                {order.payment_method}
                                                            </span>
                                                        </td>
                                                        <td className="px-4 py-2 text-center">
                                                            <span className={`px-2 py-1 rounded-full text-xs ${order.status === 'DELIVERED' ? 'bg-green-100 text-green-800' : order.status === 'CANCELLED' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                                                {order.status}
                                                            </span>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            )}

            {/* ==================== TRANSACTION DETAIL MODAL ==================== */}
            {showTransactionModal && selectedTransaction && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white dark:bg-charcoal rounded-xl max-w-lg w-full">
                        <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                            <h2 className="text-xl font-bold">Transaction Details</h2>
                            <button onClick={() => setShowTransactionModal(false)} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="text-center">
                                <span className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-3 ${selectedTransaction.type === 'INSTALLMENT_PAYMENT' ? 'bg-green-100' : selectedTransaction.type === 'PURCHASE' ? 'bg-blue-100' : 'bg-red-100'}`}>
                                    <span className={`material-symbols-outlined text-3xl ${selectedTransaction.type === 'INSTALLMENT_PAYMENT' ? 'text-green-600' : selectedTransaction.type === 'PURCHASE' ? 'text-blue-600' : 'text-red-600'}`}>
                                        {selectedTransaction.type === 'INSTALLMENT_PAYMENT' ? 'payments' : selectedTransaction.type === 'PURCHASE' ? 'shopping_cart' : 'receipt'}
                                    </span>
                                </span>
                                <div className="text-3xl font-bold">{formatCurrency(selectedTransaction.amount)}</div>
                                <span className={`inline-block mt-2 px-3 py-1 rounded-full text-sm font-semibold ${getTypeBadge(selectedTransaction.type)}`}>
                                    {selectedTransaction.type.replace('_', ' ')}
                                </span>
                            </div>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b">
                                    <span className="text-gray-500">Reference</span>
                                    <span className="font-mono font-medium">{selectedTransaction.reference_number}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b">
                                    <span className="text-gray-500">Date & Time</span>
                                    <span>{formatDateTime(selectedTransaction.timestamp)}</span>
                                </div>
                                {selectedTransaction.farmer && (
                                    <div className="flex justify-between py-2 border-b">
                                        <span className="text-gray-500">Farmer</span>
                                        <span>{selectedTransaction.farmer.name} ({selectedTransaction.farmer.district})</span>
                                    </div>
                                )}
                                {selectedTransaction.supplier && (
                                    <div className="flex justify-between py-2 border-b">
                                        <span className="text-gray-500">Supplier</span>
                                        <span>{selectedTransaction.supplier.business_name}</span>
                                    </div>
                                )}
                                {selectedTransaction.order && (
                                    <div className="flex justify-between py-2 border-b">
                                        <span className="text-gray-500">Order</span>
                                        <span>#{selectedTransaction.order.id} ({formatCurrency(selectedTransaction.order.total_amount)})</span>
                                    </div>
                                )}
                                {selectedTransaction.installment && (
                                    <div className="flex justify-between py-2 border-b">
                                        <span className="text-gray-500">Installment</span>
                                        <span>Due: {formatDate(selectedTransaction.installment.due_date)} | Status: {selectedTransaction.installment.status}</span>
                                    </div>
                                )}
                                {selectedTransaction.notes && (
                                    <div className="py-2">
                                        <span className="text-gray-500 block mb-1">Notes</span>
                                        <span className="text-gray-700 dark:text-gray-300">{selectedTransaction.notes}</span>
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
