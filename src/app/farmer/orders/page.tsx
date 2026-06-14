'use client';

import { useAuth } from '@/lib/contexts/AuthContext';
import { apiRequest } from '@/lib/api';
import { useSearchParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

type OrderStatus = 'PENDING' | 'CONFIRMED' | 'PACKED' | 'SHIPPED' | 'OUT_FOR_DELIVERY' | 'DELIVERED' | 'CANCELLED';

interface BackendOrder {
    id: number;
    farmer_id: number;
    supplier_id: number;
    total_amount: number;
    status: string;
    payment_method: string;
    payment_status: string;
    delivery_address: string;
    notes: string | null;
    created_at: string;
    updated_at: string | null;
}

const STATUS_CONFIG: Record<string, { color: string; bg: string; icon: string; label: string }> = {
    PENDING:          { color: 'text-amber-700 dark:text-amber-300',  bg: 'bg-amber-100 dark:bg-amber-900/30',   icon: 'schedule',         label: 'Pending' },
    CONFIRMED:        { color: 'text-blue-700 dark:text-blue-300',    bg: 'bg-blue-100 dark:bg-blue-900/30',     icon: 'check_circle',     label: 'Confirmed' },
    PACKED:           { color: 'text-indigo-700 dark:text-indigo-300',bg: 'bg-indigo-100 dark:bg-indigo-900/30', icon: 'inventory_2',      label: 'Packed' },
    SHIPPED:          { color: 'text-purple-700 dark:text-purple-300',bg: 'bg-purple-100 dark:bg-purple-900/30', icon: 'local_shipping',   label: 'Shipped' },
    OUT_FOR_DELIVERY: { color: 'text-orange-700 dark:text-orange-300',bg: 'bg-orange-100 dark:bg-orange-900/30', icon: 'delivery_dining',  label: 'Out for Delivery' },
    DELIVERED:        { color: 'text-green-700 dark:text-green-300',  bg: 'bg-green-100 dark:bg-green-900/30',   icon: 'done_all',         label: 'Delivered' },
    CANCELLED:        { color: 'text-red-700 dark:text-red-300',      bg: 'bg-red-100 dark:bg-red-900/30',       icon: 'cancel',           label: 'Cancelled' },
};

const TRACKING_STEPS = ['PENDING', 'CONFIRMED', 'PACKED', 'SHIPPED', 'OUT_FOR_DELIVERY', 'DELIVERED'];

export default function OrdersPage() {
    const { user } = useAuth();
    const router = useRouter();
    const searchParams = useSearchParams();
    const [showSuccess, setShowSuccess] = useState(false);
    const [filter, setFilter] = useState<string>('all');
    const [orders, setOrders] = useState<BackendOrder[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const { t } = useLanguage();

    useEffect(() => {
        if (searchParams.get('success') === 'true') {
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 8000);
        }
    }, [searchParams]);

    const fetchOrders = async () => {
        setIsLoading(true);
        try {
            const data = await apiRequest<BackendOrder[]>('/orders/');
            setOrders(data);
        } catch (error) {
            console.error('Failed to fetch orders', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (user) fetchOrders();
    }, [user]);

const getStepIndex = (status: string) => TRACKING_STEPS.indexOf(status);

    const filteredOrders = filter === 'all'
        ? orders
        : orders.filter(o => o.status === filter);

    const activeOrders = orders.filter(o => !['DELIVERED', 'CANCELLED'].includes(o.status));
    const completedOrders = orders.filter(o => o.status === 'DELIVERED');
    const cancelledOrders = orders.filter(o => o.status === 'CANCELLED');

    if (isLoading) {
        return (
            <div className="p-6 max-w-7xl mx-auto pb-24 lg:pb-6">
                <div className="animate-pulse space-y-4">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="h-40 bg-gray-200 dark:bg-gray-700 rounded-xl" />
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="p-6 max-w-7xl mx-auto pb-24 lg:pb-6">
            {/* Success Banner */}
            {showSuccess && (
                <div className="mb-6 p-5 bg-green-50 dark:bg-green-900/20 border-2 border-green-500 rounded-xl flex items-center gap-4 animate-pulse">
                    <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-white text-2xl">check</span>
                    </div>
                    <div>
                        <div className="font-bold text-lg text-green-800 dark:text-green-200">Order Placed Successfully!</div>
                        <div className="text-green-700 dark:text-green-300 text-sm">Your order has been confirmed and will be processed shortly.</div>
                    </div>
                </div>
            )}

            {/* Header */}
            <div className="mb-6 flex flex-wrap justify-between items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-charcoal dark:text-off-white">My Orders</h1>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">{orders.length} total orders</p>
                </div>
                <button
                    onClick={fetchOrders}
                    className="px-4 py-2 bg-indus-green text-white rounded-lg hover:bg-indus-green/90 flex items-center gap-2 text-sm"
                >
                    <span className="material-symbols-outlined text-lg">refresh</span>
                    Refresh
                </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                    <div className="text-2xl font-bold text-charcoal dark:text-white">{orders.length}</div>
                    <div className="text-xs text-gray-500">Total Orders</div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                    <div className="text-2xl font-bold text-amber-600">{activeOrders.length}</div>
                    <div className="text-xs text-gray-500">Active</div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                    <div className="text-2xl font-bold text-green-600">{completedOrders.length}</div>
                    <div className="text-xs text-gray-500">Delivered</div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                    <div className="text-2xl font-bold text-indus-green">
                        PKR {orders.reduce((s, o) => s + o.total_amount, 0).toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-500">Total Value</div>
                </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-2 overflow-x-auto pb-4 mb-4">
                {[
                    { key: 'all', label: `All (${orders.length})` },
                    { key: 'active', label: `Active (${activeOrders.length})` },
                    { key: 'DELIVERED', label: `Delivered (${completedOrders.length})` },
                    { key: 'CANCELLED', label: `Cancelled (${cancelledOrders.length})` },
                ].map(tab => (
                    <button
                        key={tab.key}
                        onClick={() => setFilter(tab.key)}
                        className={`px-4 py-2 rounded-lg whitespace-nowrap text-sm font-medium transition-colors ${
                            filter === tab.key
                                ? 'bg-indus-green text-white'
                                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
                        }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Orders List */}
            {(filter === 'active' ? activeOrders : filter === 'all' ? orders : filteredOrders).length === 0 ? (
                <div className="bg-white dark:bg-gray-800 rounded-xl p-12 text-center border border-gray-200 dark:border-gray-700">
                    <span className="material-symbols-outlined text-6xl text-gray-300 dark:text-gray-600 mb-4 block">shopping_bag</span>
                    <h2 className="text-xl font-semibold mb-2 text-charcoal dark:text-off-white">No orders found</h2>
                    <p className="text-gray-500 mb-4">Start shopping from the marketplace</p>
                    <button
                        onClick={() => router.push('/farmer/marketplace')}
                        className="px-6 py-2 bg-indus-green text-white rounded-lg hover:bg-indus-green/90"
                    >
                        Browse Marketplace
                    </button>
                </div>
            ) : (
                <div className="space-y-4">
                    {(filter === 'active' ? activeOrders : filter === 'all' ? orders : filteredOrders).map(order => {
                        const cfg = STATUS_CONFIG[order.status] || STATUS_CONFIG.PENDING;
                        const stepIdx = getStepIndex(order.status);
                        const isCancelled = order.status === 'CANCELLED';

                        return (
                            <div key={order.id} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                                {/* Order Header */}
                                <div className="p-5 flex flex-wrap justify-between items-start gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-10 h-10 rounded-full ${cfg.bg} flex items-center justify-center`}>
                                            <span className={`material-symbols-outlined ${cfg.color}`}>{cfg.icon}</span>
                                        </div>
                                        <div>
                                            <div className="font-bold text-charcoal dark:text-white">Order #{order.id}</div>
                                            <div className="text-xs text-gray-500">
                                                {new Date(order.created_at).toLocaleDateString('en-PK', { day: 'numeric', month: 'short', year: 'numeric' })}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-end">
                                        <div className="text-xl font-bold text-indus-green">PKR {order.total_amount.toLocaleString()}</div>
                                        <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold ${cfg.bg} ${cfg.color}`}>
                                            {cfg.label}
                                        </span>
                                    </div>
                                </div>

                                {/* Tracking Progress Bar (only for active non-cancelled orders) */}
                                {!isCancelled && order.status !== 'DELIVERED' && (
                                    <div className="px-5 pb-4">
                                        <div className="flex items-center gap-1">
                                            {TRACKING_STEPS.map((step, i) => {
                                                const isComplete = i <= stepIdx;
                                                const isCurrent = i === stepIdx;
                                                return (
                                                    <div key={step} className="flex-1 flex items-center gap-1">
                                                        <div className={`h-1.5 flex-1 rounded-full transition-colors ${
                                                            isComplete ? 'bg-indus-green' : 'bg-gray-200 dark:bg-gray-700'
                                                        }`} />
                                                        {isCurrent && (
                                                            <div className="w-2 h-2 rounded-full bg-indus-green animate-pulse" />
                                                        )}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        <div className="flex justify-between mt-1.5 text-[10px] text-gray-400">
                                            <span>Ordered</span>
                                            <span>Shipped</span>
                                            <span>Delivered</span>
                                        </div>
                                    </div>
                                )}

                                {/* Info Row */}
                                <div className="px-5 pb-3 flex flex-wrap gap-4 text-xs text-gray-500">
                                    <div className="flex items-center gap-1">
                                        <span className="material-symbols-outlined text-sm">payments</span>
                                        {order.payment_method}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span className="material-symbols-outlined text-sm">
                                            {order.payment_status === 'PAID' ? 'check_circle' : 'pending'}
                                        </span>
                                        Payment: {order.payment_status}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span className="material-symbols-outlined text-sm">location_on</span>
                                        <span className="truncate max-w-[200px]">{order.delivery_address}</span>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="px-5 py-3 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-100 dark:border-gray-700 flex flex-wrap gap-2">
                                    <button
                                        onClick={() => router.push(`/farmer/orders/${order.id}`)}
                                        className="px-4 py-2 bg-indus-green text-white rounded-lg text-sm font-medium hover:bg-indus-green/90 flex items-center gap-1.5"
                                    >
                                        <span className="material-symbols-outlined text-base">visibility</span>
                                        View Details
                                    </button>

                                    {order.payment_method === 'BNPL' && order.payment_status !== 'PAID' && (
                                        <button
                                            onClick={() => router.push(`/farmer/pay/${order.id}`)}
                                            className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 flex items-center gap-1.5"
                                        >
                                            <span className="material-symbols-outlined text-base">credit_card</span>
                                            Pay Installment
                                        </button>
                                    )}

                                    {/* Simulate Next removed — status is updated by supplier only */}
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}