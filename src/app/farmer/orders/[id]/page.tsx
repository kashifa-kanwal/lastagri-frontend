'use client';

import { useAuth } from '@/lib/contexts/AuthContext';
import { apiRequest } from '@/lib/api';
import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

interface TrackingEvent {
    id: number;
    status: string;
    description: string;
    location: string;
    created_at: string;
}

interface OrderItem {
    id: number;
    product_id: number;
    product_name: string;
    product_image: string | null;
    quantity: number;
    price: number;
    unit: string;
}

interface Installment {
    id: number;
    amount_due: number;
    due_date: string;
    paid_date: string | null;
    status: string;
    late_fee: number;
    penalty_fee: number;
}

interface OrderDetail {
    id: number;
    farmer_id: number;
    supplier_id: number;
    supplier_name: string;
    supplier_phone: string | null;
    total_amount: number;
    status: string;
    payment_method: string;
    payment_status: string;
    delivery_address: string;
    notes: string | null;
    created_at: string;
    updated_at: string | null;
    items: OrderItem[];
    tracking: TrackingEvent[];
    installments: Installment[];
}

const TRACKING_STEPS = [
    { key: 'PENDING',           icon: 'receipt_long',    label: 'Order Placed' },
    { key: 'CONFIRMED',         icon: 'check_circle',    label: 'Confirmed' },
    { key: 'PACKED',            icon: 'inventory_2',     label: 'Packed' },
    { key: 'SHIPPED',           icon: 'local_shipping',  label: 'Shipped' },
    { key: 'OUT_FOR_DELIVERY',  icon: 'delivery_dining', label: 'Out for Delivery' },
    { key: 'DELIVERED',         icon: 'home',            label: 'Delivered' },
];

export default function OrderDetailPage() {
    const { user } = useAuth();
    const { id } = useParams();
    const router = useRouter();
    const [order, setOrder] = useState<OrderDetail | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const fetchOrder = async () => {
        try {
            const data = await apiRequest<OrderDetail>(`/orders/${id}/detail`);
            setOrder(data);
        } catch (err) {
            console.error('Failed to fetch order:', err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (user && id) fetchOrder();
    }, [user, id]);

    if (isLoading) {
        return (
            <div className="p-6 max-w-4xl mx-auto pb-24 lg:pb-6">
                <div className="animate-pulse space-y-4">
                    <div className="h-8 w-48 bg-gray-200 dark:bg-gray-700 rounded" />
                    <div className="h-40 bg-gray-200 dark:bg-gray-700 rounded-xl" />
                    <div className="h-60 bg-gray-200 dark:bg-gray-700 rounded-xl" />
                </div>
            </div>
        );
    }

    if (!order) {
        return (
            <div className="p-6 max-w-4xl mx-auto text-center">
                <span className="material-symbols-outlined text-6xl text-gray-300 mb-4 block">error</span>
                <h2 className="text-xl font-bold mb-2">Order not found</h2>
                <button onClick={() => router.push('/farmer/orders')} className="text-indus-green underline">
                    Back to Orders
                </button>
            </div>
        );
    }

    const currentStepIdx = TRACKING_STEPS.findIndex(s => s.key === order.status);
    const isCancelled = order.status === 'CANCELLED';

    return (
        <div className="p-6 max-w-4xl mx-auto pb-24 lg:pb-6 space-y-6">

            {/* Back + Header */}
            <div className="flex items-center gap-3">
                <button
                    onClick={() => router.push('/farmer/orders')}
                    className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                    <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <div>
                    <h1 className="text-2xl font-bold text-charcoal dark:text-white">Order #{order.id}</h1>
                    <p className="text-sm text-gray-500">
                        {new Date(order.created_at).toLocaleDateString('en-PK', {
                            weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
                        })}
                    </p>
                </div>
            </div>

            {/* Order Tracking */}
            {!isCancelled && (
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <h2 className="font-bold text-lg mb-5 text-charcoal dark:text-white flex items-center gap-2">
                        <span className="material-symbols-outlined text-indus-green">location_on</span>
                        Order Tracking
                    </h2>
                    <div className="relative">
                        {TRACKING_STEPS.map((step, i) => {
                            const isComplete = i <= currentStepIdx;
                            const isCurrent = i === currentStepIdx;
                            const trackEvent = order.tracking.find(t => t.status === step.key);
                            return (
                                <div key={step.key} className="flex gap-4">
                                    <div className="flex flex-col items-center">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 z-10 transition-colors ${
                                            isComplete
                                                ? isCurrent
                                                    ? 'bg-indus-green ring-4 ring-indus-green/20 text-white'
                                                    : 'bg-indus-green text-white'
                                                : 'bg-gray-200 dark:bg-gray-700 text-gray-400'
                                        }`}>
                                            <span className="material-symbols-outlined text-lg">
                                                {isComplete && !isCurrent ? 'check' : step.icon}
                                            </span>
                                        </div>
                                        {i < TRACKING_STEPS.length - 1 && (
                                            <div className={`w-0.5 h-12 ${
                                                i < currentStepIdx ? 'bg-indus-green' : 'bg-gray-200 dark:bg-gray-700'
                                            }`} />
                                        )}
                                    </div>
                                    <div className="pb-8 last:pb-0">
                                        <div className={`font-semibold ${isComplete ? 'text-charcoal dark:text-white' : 'text-gray-400'}`}>
                                            {step.label}
                                            {isCurrent && (
                                                <span className="ms-2 inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-indus-green text-white">
                                                    CURRENT
                                                </span>
                                            )}
                                        </div>
                                        {trackEvent && (
                                            <>
                                                <p className="text-sm text-gray-500 mt-0.5">{trackEvent.description}</p>
                                                <div className="flex items-center gap-3 mt-1 text-xs text-gray-400">
                                                    {trackEvent.location && (
                                                        <span className="flex items-center gap-0.5">
                                                            <span className="material-symbols-outlined text-xs">pin_drop</span>
                                                            {trackEvent.location}
                                                        </span>
                                                    )}
                                                    <span>{new Date(trackEvent.created_at).toLocaleString('en-PK')}</span>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}

            {/* Cancelled Notice */}
            {isCancelled && (
                <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-300 dark:border-red-800 rounded-xl p-6 text-center">
                    <span className="material-symbols-outlined text-red-500 text-4xl mb-2 block">cancel</span>
                    <h2 className="text-xl font-bold text-red-700 dark:text-red-300">Order Cancelled</h2>
                </div>
            )}

            {/* Order Items */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h2 className="font-bold text-lg mb-4 text-charcoal dark:text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-indus-green">shopping_bag</span>
                    Items ({order.items.length})
                </h2>
                <div className="divide-y divide-gray-100 dark:divide-gray-700">
                    {order.items.map(item => (
                        <div key={item.id} className="flex items-center gap-4 py-3">
                            <div className="w-14 h-14 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden shrink-0">
                                {item.product_image ? (
                                    <img src={item.product_image} alt={item.product_name} className="w-full h-full object-cover" />
                                ) : (
                                    <span className="material-symbols-outlined text-gray-400">package_2</span>
                                )}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="font-medium text-charcoal dark:text-white truncate">{item.product_name}</div>
                                <div className="text-sm text-gray-500">
                                    {item.quantity} x {item.unit} @ PKR {item.price.toLocaleString()}
                                </div>
                            </div>
                            <div className="font-bold text-charcoal dark:text-white shrink-0">
                                PKR {(item.price * item.quantity).toLocaleString()}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
                    <span className="text-gray-500">Total Amount</span>
                    <span className="text-2xl font-bold text-indus-green">PKR {order.total_amount.toLocaleString()}</span>
                </div>
            </div>

            {/* Installments — Fasal Cycle BNPL */}
            {order.payment_method === 'BNPL' && order.installments.length > 0 && (
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="font-bold text-lg text-charcoal dark:text-white flex items-center gap-2">
                            <span className="material-symbols-outlined text-amber-500">calendar_month</span>
                            🌾 Fasal Cycle Installment Plan
                        </h2>
                        {order.payment_status !== 'PAID' && (
                            <button
                                onClick={() => router.push(`/farmer/pay/${order.id}`)}
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 flex items-center gap-1.5"
                            >
                                <span className="material-symbols-outlined text-base">credit_card</span>
                                Pay Now
                            </button>
                        )}
                    </div>
                    <div className="mb-4">
                        <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-500">Payment Progress</span>
                            <span className="font-medium">
                                {order.installments.filter(i => i.status === 'PAID').length}/{order.installments.length} paid
                            </span>
                        </div>
                        <div className="h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-indus-green rounded-full transition-all"
                                style={{
                                    width: `${(order.installments.filter(i => i.status === 'PAID').length / order.installments.length) * 100}%`
                                }}
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        {order.installments.map((inst, i) => {
                            const isPaid = inst.status === 'PAID';
                            const isOverdue = !isPaid && new Date(inst.due_date) < new Date();
                            const label = i === 0 ? 'Qist 1 — Darmiyan Season (40%)' : 'Qist 2 — Fasal ke Baad (60%)';
                            return (
                                <div key={inst.id} className={`flex items-center justify-between p-3 rounded-lg border ${
                                    isPaid
                                        ? 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/10'
                                        : isOverdue
                                            ? 'border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/10'
                                            : 'border-amber-200 dark:border-amber-700 bg-amber-50 dark:bg-amber-900/10'
                                }`}>
                                    <div className="flex items-center gap-3">
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                            isPaid
                                                ? 'bg-green-500 text-white'
                                                : isOverdue
                                                    ? 'bg-red-500 text-white'
                                                    : 'bg-amber-400 text-white'
                                        }`}>
                                            <span className="material-symbols-outlined text-sm">
                                                {isPaid ? 'check' : isOverdue ? 'warning' : 'schedule'}
                                            </span>
                                        </div>
                                        <div>
                                            <div className="font-medium text-sm">{label}</div>
                                            <div className="text-xs text-gray-500">
                                                Due: {new Date(inst.due_date).toLocaleDateString('en-PK', {
                                                    day: 'numeric', month: 'short', year: 'numeric'
                                                })}
                                                {isPaid && inst.paid_date && (
                                                    <span className="text-green-600 ms-2">
                                                        ✓ Paid: {new Date(inst.paid_date).toLocaleDateString('en-PK')}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-end">
                                        <div className={`font-bold ${
                                            isPaid ? 'text-green-600' : isOverdue ? 'text-red-600' : 'text-amber-700 dark:text-amber-300'
                                        }`}>
                                            PKR {inst.amount_due.toLocaleString()}
                                        </div>
                                        {inst.late_fee > 0 && (
                                            <div className="text-xs text-red-500">
                                                +PKR {inst.late_fee.toLocaleString()} late fee
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}

            {/* Supplier + Delivery Info */}
            <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700">
                    <h3 className="font-bold mb-3 flex items-center gap-2">
                        <span className="material-symbols-outlined text-indus-green text-lg">store</span>
                        Supplier
                    </h3>
                    <div className="text-charcoal dark:text-white font-medium">{order.supplier_name}</div>
                    {order.supplier_phone && (
                        <div className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm">call</span>
                            {order.supplier_phone}
                        </div>
                    )}
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700">
                    <h3 className="font-bold mb-3 flex items-center gap-2">
                        <span className="material-symbols-outlined text-indus-green text-lg">location_on</span>
                        Delivery Address
                    </h3>
                    <div className="text-charcoal dark:text-white text-sm">{order.delivery_address}</div>
                    <div className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">payments</span>
                        {order.payment_method} — {order.payment_status}
                    </div>
                </div>
            </div>

        </div>
    );
}