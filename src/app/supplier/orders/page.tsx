'use client';

import { useState, useEffect } from 'react';
import { apiRequest } from '@/lib/api';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { useToast } from '@/lib/contexts/ToastContext';

interface Order {
    id: number;
    farmer_id: number;
    supplier_id: number;
    total_amount: number;
    status: string;
    delivery_address: string;
    payment_method: string;
    payment_status: string;
    notes: string;
    created_at: string;
}

export default function SupplierOrdersPage() {
    const [orders, setOrders] = useState<Order[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [filterStatus, setFilterStatus] = useState<string>('all');
    const { t } = useLanguage();
    const { showToast } = useToast();

    useEffect(() => {
        fetchOrders();
    }, [filterStatus]);

    const fetchOrders = async () => {
        setIsLoading(true);
        try {
            const url = filterStatus === 'all'
                ? '/suppliers/orders'
                : `/suppliers/orders?status=${filterStatus}`;
            const data = await apiRequest<Order[]>(url);
            setOrders(data);
        } catch (error) {
            console.error('Failed to fetch orders:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleUpdateStatus = async (orderId: number, newStatus: string) => {
        try {
            await apiRequest(`/suppliers/orders/${orderId}/status?status=${newStatus}`, {
                method: 'PUT'
            });
            showToast(`${t('supplier.orders.statusUpdated')} ${newStatus}!`, 'success');
            fetchOrders();
        } catch (error: any) {
            showToast(`${t('supplier.orders.updateFailed')}: ${error.message}`, 'error');
        }
    };

    const statusFilters = [
        { value: 'all', label: t('supplier.orders.allOrders') },
        { value: 'PENDING', label: t('supplier.orders.pending') },
        { value: 'CONFIRMED', label: t('supplier.orders.confirmed') },
        { value: 'PROCESSING', label: t('supplier.orders.processing') },
        { value: 'SHIPPED', label: t('supplier.orders.shipped') },
        { value: 'DELIVERED', label: t('supplier.orders.delivered') },
        { value: 'CANCELLED', label: t('supplier.orders.cancelled') },
    ];

    const statusColors: Record<string, string> = {
        PENDING: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300',
        CONFIRMED: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
        PROCESSING: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300',
        SHIPPED: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
        DELIVERED: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
        CANCELLED: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
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
                <h1 className="text-3xl font-bold text-charcoal dark:text-off-white mb-2">{t('supplier.orders.title')}</h1>
                <p className="text-gray-600 dark:text-gray-400">{t('supplier.orders.subtitle')} ({orders.length} {t('supplier.orders.total')})</p>
            </div>

            {/* Status Filter */}
            <div className="flex gap-2 overflow-x-auto pb-4 mb-6">
                {statusFilters.map((filter) => (
                    <button
                        key={filter.value}
                        onClick={() => setFilterStatus(filter.value)}
                        className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${filterStatus === filter.value
                                ? 'bg-trust-blue text-white'
                                : 'bg-white dark:bg-charcoal/20 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                            }`}
                    >
                        {filter.label}
                    </button>
                ))}
            </div>

            {/* Orders List */}
            <div className="space-y-4">
                {orders.map((order) => (
                    <div key={order.id} className="bg-white dark:bg-charcoal/20 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <h3 className="font-bold text-xl text-charcoal dark:text-off-white">{t('supplier.dashboard.orderId')}{order.id}</h3>
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[order.status] || 'bg-gray-100 text-gray-700'}`}>
                                        {order.status}
                                    </span>
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${order.payment_status === 'PAID'
                                            ? 'bg-green-100 text-green-700'
                                            : 'bg-yellow-100 text-yellow-700'
                                        }`}>
                                        {order.payment_method} - {order.payment_status}
                                    </span>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600 dark:text-gray-400">
                                    <div>
                                        <span className="font-medium">{t('supplier.orders.farmerId')}:</span> {order.farmer_id}
                                    </div>
                                    <div>
                                        <span className="font-medium">{t('supplier.orders.date')}:</span> {new Date(order.created_at).toLocaleString()}
                                    </div>
                                    <div>
                                        <span className="font-medium">{t('supplier.orders.delivery')}:</span> {order.delivery_address}
                                    </div>
                                    <div>
                                        <span className="font-medium">{t('supplier.orders.amount')}:</span> <span className="font-bold text-trust-blue">PKR {order.total_amount.toLocaleString()}</span>
                                    </div>
                                </div>
                                {order.notes && (
                                    <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                        <span className="font-medium">{t('supplier.orders.notes')}:</span> {order.notes}
                                    </div>
                                )}
                            </div>

                            {/* Status Update Dropdown */}
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">{t('supplier.orders.updateStatus')}:</label>
                                <select
                                    value={order.status}
                                    onChange={(e) => handleUpdateStatus(order.id, e.target.value)}
                                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-charcoal text-charcoal dark:text-off-white"
                                >
                                    <option value="PENDING">{t('supplier.orders.pending')}</option>
                                    <option value="CONFIRMED">{t('supplier.orders.confirmed')}</option>
                                    <option value="PROCESSING">{t('supplier.orders.processing')}</option>
                                    <option value="SHIPPED">{t('supplier.orders.shipped')}</option>
                                    <option value="DELIVERED">{t('supplier.orders.delivered')}</option>
                                    <option value="CANCELLED">{t('supplier.orders.cancelled')}</option>
                                </select>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {orders.length === 0 && (
                <div className="bg-white dark:bg-charcoal/20 rounded-xl p-12 text-center">
                    <span className="material-symbols-outlined text-6xl text-gray-300 dark:text-gray-600 mb-4 block">shopping_bag</span>
                    <h2 className="text-2xl font-semibold mb-2 text-charcoal dark:text-off-white">{t('supplier.orders.noOrders')}</h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        {filterStatus === 'all' ? t('supplier.orders.noOrdersYet') : `No ${filterStatus.toLowerCase()} orders`}
                    </p>
                </div>
            )}
        </div>
    );
}
