'use client';

import { useAuth } from '@/lib/contexts/AuthContext';
import { apiRequest } from '@/lib/api';
import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

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
    total_amount: number;
    status: string;
    payment_method: string;
    payment_status: string;
    supplier_name: string;
    installments: Installment[];
}

interface PaymentResult {
    success: boolean;
    transaction_id: string;
    message: string;
    payment_method: string;
    amount: number;
    account_masked: string;
    remaining_installments: number;
    order_fully_paid: boolean;
}

const PAYMENT_METHODS = [
    {
        id: 'JAZZCASH',
        name: 'JazzCash',
        icon: '📱',
        color: 'from-red-500 to-red-600',
        bg: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800',
        desc: 'Pay with your JazzCash mobile wallet',
    },
    {
        id: 'EASYPAISA',
        name: 'Easypaisa',
        icon: '💚',
        color: 'from-green-500 to-green-600',
        bg: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800',
        desc: 'Pay with your Easypaisa account',
    },
    {
        id: 'BANK_TRANSFER',
        name: 'Bank Transfer',
        icon: '🏦',
        color: 'from-blue-500 to-blue-600',
        bg: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
        desc: 'Direct bank transfer',
    },
    {
        id: 'DEBIT_CARD',
        name: 'Debit Card',
        icon: '💳',
        color: 'from-purple-500 to-purple-600',
        bg: 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800',
        desc: 'Pay with Visa/Mastercard debit card',
    },
];

export default function PaymentPage() {
    const { user } = useAuth();
    const { id: orderId } = useParams();
    const router = useRouter();

    const [order, setOrder] = useState<OrderDetail | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedMethod, setSelectedMethod] = useState('JAZZCASH');
    const [accountNumber, setAccountNumber] = useState('');
    const [pin, setPin] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const [result, setResult] = useState<PaymentResult | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [step, setStep] = useState<'select' | 'confirm' | 'processing' | 'success' | 'error'>('select');

    const fetchOrder = async () => {
        try {
            const data = await apiRequest<OrderDetail>(`/orders/${orderId}/detail`);
            setOrder(data);
        } catch (err) {
            console.error('Failed to fetch order:', err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (user && orderId) fetchOrder();
    }, [user, orderId]);

    // Find next unpaid installment
    const nextInstallment = order?.installments.find(i => i.status !== 'PAID');
    const paidCount = order?.installments.filter(i => i.status === 'PAID').length || 0;
    const totalCount = order?.installments.length || 0;

    const handleProceed = () => {
        if (!accountNumber.trim()) {
            setError('Please enter your account/phone number');
            return;
        }
        setError(null);
        setStep('confirm');
    };

    const handlePay = async () => {
        if (!pin || pin.length !== 4) {
            setError('Please enter a 4-digit PIN');
            return;
        }
        if (!nextInstallment) return;

        setError(null);
        setStep('processing');
        setIsProcessing(true);

        // Simulate processing delay for realism
        await new Promise(resolve => setTimeout(resolve, 2500));

        try {
            const data = await apiRequest<PaymentResult>('/finance/simulate-payment', {
                method: 'POST',
                body: JSON.stringify({
                    installment_id: nextInstallment.id,
                    payment_method: selectedMethod,
                    account_number: accountNumber,
                    pin: pin,
                }),
            });
            setResult(data);
            setStep('success');
        } catch (err: any) {
            setError(err.message || 'Payment failed');
            setStep('error');
        } finally {
            setIsProcessing(false);
        }
    };

    if (isLoading) {
        return (
            <div className="p-6 max-w-2xl mx-auto pb-24 lg:pb-6">
                <div className="animate-pulse space-y-4">
                    <div className="h-8 w-48 bg-gray-200 dark:bg-gray-700 rounded" />
                    <div className="h-60 bg-gray-200 dark:bg-gray-700 rounded-xl" />
                </div>
            </div>
        );
    }

    if (!order || !nextInstallment) {
        return (
            <div className="p-6 max-w-2xl mx-auto text-center pb-24 lg:pb-6">
                <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-8 border border-green-200 dark:border-green-800">
                    <span className="material-symbols-outlined text-green-500 text-5xl mb-3 block">check_circle</span>
                    <h2 className="text-xl font-bold text-green-700 dark:text-green-300 mb-2">All Paid!</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">All installments for this order are paid.</p>
                    <button onClick={() => router.push('/farmer/orders')} className="px-6 py-2 bg-indus-green text-white rounded-lg">
                        Back to Orders
                    </button>
                </div>
            </div>
        );
    }

    const methodInfo = PAYMENT_METHODS.find(m => m.id === selectedMethod)!;

    return (
        <div className="p-6 max-w-2xl mx-auto pb-24 lg:pb-6 space-y-6">
            {/* Back */}
            <div className="flex items-center gap-3">
                <button onClick={() => router.back()} className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700">
                    <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <div>
                    <h1 className="text-2xl font-bold text-charcoal dark:text-white">Pay Installment</h1>
                    <p className="text-sm text-gray-500">Order #{orderId} — {order.supplier_name}</p>
                </div>
            </div>

            {/* Payment Summary Card */}
            <div className="bg-gradient-to-r from-indus-green to-green-700 rounded-xl p-6 text-white">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <div className="text-green-200 text-sm">Installment {paidCount + 1} of {totalCount}</div>
                        <div className="text-3xl font-bold mt-1">PKR {nextInstallment.amount_due.toLocaleString()}</div>
                    </div>
                    <div className="text-end">
                        <div className="text-green-200 text-sm">Due Date</div>
                        <div className="font-semibold">
                            {new Date(nextInstallment.due_date).toLocaleDateString('en-PK', { day: 'numeric', month: 'short', year: 'numeric' })}
                        </div>
                    </div>
                </div>
                {/* Mini progress */}
                <div className="flex gap-1.5">
                    {order.installments.map((inst, i) => (
                        <div key={inst.id} className={`h-1.5 flex-1 rounded-full ${
                            inst.status === 'PAID' ? 'bg-white' : inst.id === nextInstallment.id ? 'bg-white/60 animate-pulse' : 'bg-white/20'
                        }`} />
                    ))}
                </div>
                <div className="flex justify-between text-xs text-green-200 mt-1">
                    <span>{paidCount} paid</span>
                    <span>{totalCount - paidCount} remaining</span>
                </div>
            </div>

            {/* Success Screen */}
            {step === 'success' && result && (
                <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                    <div className="bg-green-500 p-8 text-center text-white">
                        <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-3">
                            <span className="material-symbols-outlined text-4xl">check_circle</span>
                        </div>
                        <h2 className="text-2xl font-bold">Payment Successful!</h2>
                        <p className="text-green-100 mt-1">{result.message}</p>
                    </div>
                    <div className="p-6 space-y-3">
                        <div className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                            <span className="text-gray-500">Transaction ID</span>
                            <span className="font-mono font-bold text-sm">{result.transaction_id}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                            <span className="text-gray-500">Method</span>
                            <span className="font-medium">{result.payment_method}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                            <span className="text-gray-500">Account</span>
                            <span className="font-medium">{result.account_masked}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                            <span className="text-gray-500">Amount</span>
                            <span className="font-bold text-indus-green">PKR {result.amount.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between py-2">
                            <span className="text-gray-500">Remaining</span>
                            <span className="font-medium">
                                {result.order_fully_paid ? (
                                    <span className="text-green-600 font-bold">Fully Paid!</span>
                                ) : (
                                    `${result.remaining_installments} installment(s)`
                                )}
                            </span>
                        </div>
                    </div>
                    <div className="p-6 pt-0 flex gap-3">
                        {result.remaining_installments > 0 ? (
                            <button
                                onClick={() => { setStep('select'); setPin(''); setResult(null); fetchOrder(); }}
                                className="flex-1 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
                            >
                                Pay Next Installment
                            </button>
                        ) : null}
                        <button
                            onClick={() => router.push(`/farmer/orders/${orderId}`)}
                            className="flex-1 py-3 bg-indus-green text-white rounded-lg font-medium hover:bg-indus-green/90"
                        >
                            View Order
                        </button>
                    </div>
                </div>
            )}

            {/* Processing Screen */}
            {step === 'processing' && (
                <div className="bg-white dark:bg-gray-800 rounded-xl p-12 text-center border border-gray-200 dark:border-gray-700">
                    <div className="w-16 h-16 rounded-full bg-indus-green/10 flex items-center justify-center mx-auto mb-4 animate-pulse">
                        <span className="material-symbols-outlined text-indus-green text-3xl animate-spin">sync</span>
                    </div>
                    <h2 className="text-xl font-bold text-charcoal dark:text-white mb-2">Processing Payment...</h2>
                    <p className="text-gray-500">Connecting to {methodInfo.name}. Please wait.</p>
                    <div className="mt-6 text-xs text-gray-400">Simulated payment — no real money deducted</div>
                </div>
            )}

            {/* Error Screen */}
            {step === 'error' && (
                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center border border-red-200 dark:border-red-800">
                    <span className="material-symbols-outlined text-red-500 text-5xl mb-3 block">error</span>
                    <h2 className="text-xl font-bold text-red-700 dark:text-red-300 mb-2">Payment Failed</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{error}</p>
                    <button
                        onClick={() => { setStep('select'); setError(null); }}
                        className="px-6 py-2 bg-indus-green text-white rounded-lg"
                    >
                        Try Again
                    </button>
                </div>
            )}

            {/* Confirmation Screen */}
            {step === 'confirm' && (
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 space-y-5">
                    <h2 className="text-lg font-bold text-charcoal dark:text-white">Confirm Payment</h2>

                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 space-y-2">
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Method</span>
                            <span className="font-medium">{methodInfo.name}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Account</span>
                            <span className="font-medium">**** {accountNumber.slice(-4)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Amount</span>
                            <span className="font-bold text-lg text-indus-green">PKR {nextInstallment.amount_due.toLocaleString()}</span>
                        </div>
                    </div>

                    {/* PIN Input */}
                    <div>
                        <label className="block text-sm font-medium mb-2 text-charcoal dark:text-white">Enter 4-Digit PIN</label>
                        <input
                            type="tel"
                            inputMode="numeric"
                            maxLength={4}
                            value={pin}
                            onChange={e => setPin(e.target.value.replace(/\D/g, '').slice(0, 4))}
                            placeholder="••••"
                            autoComplete="one-time-code"
                            name="payment-pin"
                            id="payment-pin"
                            className="w-full h-14 text-center text-2xl tracking-[0.5em] font-bold rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-indus-green focus:outline-none"
                        />
                        <p className="text-xs text-gray-400 mt-2 text-center">Simulation mode — any 4 digits will work</p>
                    </div>

                    {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                    <div className="flex gap-3">
                        <button
                            onClick={() => { setStep('select'); setError(null); }}
                            className="flex-1 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg font-medium"
                        >
                            Back
                        </button>
                        <button
                            onClick={handlePay}
                            className="flex-1 py-3 bg-indus-green text-white rounded-lg font-bold hover:bg-indus-green/90 flex items-center justify-center gap-2"
                        >
                            <span className="material-symbols-outlined">lock</span>
                            Pay PKR {nextInstallment.amount_due.toLocaleString()}
                        </button>
                    </div>
                </div>
            )}

            {/* Select Payment Method */}
            {step === 'select' && (
                <>
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                        <h2 className="text-lg font-bold mb-4 text-charcoal dark:text-white flex items-center gap-2">
                            <span className="material-symbols-outlined text-indus-green">account_balance_wallet</span>
                            Choose Payment Method
                        </h2>
                        <div className="grid grid-cols-2 gap-3">
                            {PAYMENT_METHODS.map(method => (
                                <button
                                    key={method.id}
                                    onClick={() => setSelectedMethod(method.id)}
                                    className={`p-4 rounded-xl border-2 text-start transition-all ${
                                        selectedMethod === method.id
                                            ? `${method.bg} border-indus-green`
                                            : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                                    }`}
                                >
                                    <div className="text-2xl mb-1">{method.icon}</div>
                                    <div className="font-bold text-sm text-charcoal dark:text-white">{method.name}</div>
                                    <div className="text-xs text-gray-500 mt-0.5">{method.desc}</div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Account Number */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                        <label className="block text-sm font-medium mb-2 text-charcoal dark:text-white">
                            {selectedMethod === 'BANK_TRANSFER' ? 'Account Number' :
                             selectedMethod === 'DEBIT_CARD' ? 'Card Number' :
                             'Mobile Number'}
                        </label>
                        <input
                            type="text"
                            value={accountNumber}
                            onChange={e => setAccountNumber(e.target.value)}
                            placeholder={
                                selectedMethod === 'BANK_TRANSFER' ? '1234567890123'
                                : selectedMethod === 'DEBIT_CARD' ? '4111 1111 1111 1234'
                                : '03001234567'
                            }
                            autoComplete="off"
                            name="payment-account"
                            id="payment-account"
                            className="w-full h-12 px-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-indus-green focus:outline-none text-lg"
                        />
                        <p className="text-xs text-gray-400 mt-2">Simulation — enter any number</p>

                        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                    </div>

                    <button
                        onClick={handleProceed}
                        className="w-full py-3.5 bg-indus-green text-white rounded-xl font-bold text-lg hover:bg-indus-green/90 flex items-center justify-center gap-2 shadow-lg"
                    >
                        <span className="material-symbols-outlined">arrow_forward</span>
                        Proceed to Pay PKR {nextInstallment.amount_due.toLocaleString()}
                    </button>

                    <p className="text-center text-xs text-gray-400">
                        This is a simulated payment system for demonstration purposes. No real money will be deducted.
                    </p>
                </>
            )}
        </div>
    );
}
