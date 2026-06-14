'use client';

import { useState, useEffect } from 'react';
import { useCart } from '@/lib/contexts/CartContext';
import { useAuth } from '@/lib/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { Farmer } from '@/types';
import { apiRequest } from '@/lib/api';
import { useToast } from '@/lib/contexts/ToastContext';

export default function CheckoutPage() {
    const { cart, clearCart } = useCart();
    const { user } = useAuth();
    const router = useRouter();
    const farmer = user as Farmer;
    const { showToast } = useToast();

    const [paymentMethod, setPaymentMethod] = useState<'bnpl' | 'cash'>('bnpl');
    const [installments, setInstallments] = useState(4);
    const [isProcessing, setIsProcessing] = useState(false);

    // Editable delivery information
    const [fullName, setFullName] = useState(farmer?.name || '');
    const [phoneNumber, setPhoneNumber] = useState(farmer?.phone || '');
    const [deliveryAddress, setDeliveryAddress] = useState(
        farmer?.location
            ? `${farmer.location.village}, ${farmer.location.tehsil}, ${farmer.location.district}`
            : ''
    );

    // Don't use useEffect to redirect - it causes race condition with clearCart
    // Just return null if cart is empty
    if (cart.items.length === 0) {
        return (
            <div className="p-6 max-w-4xl mx-auto pb-24 lg:pb-6">
                <h1 className="text-3xl font-bold mb-8 text-charcoal dark:text-off-white">Checkout</h1>
                <div className="bg-white dark:bg-charcoal/20 rounded-xl p-12 text-center">
                    <span className="material-symbols-outlined text-6xl text-gray-300 dark:text-gray-600 mb-4 block">shopping_cart</span>
                    <h2 className="text-2xl font-semibold mb-2 text-charcoal dark:text-off-white">Your cart is empty</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">Add some products to checkout</p>
                    <a
                        href="/farmer/marketplace"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-indus-green text-white rounded-lg hover:bg-indus-green/90"
                    >
                        <span className="material-symbols-outlined">store</span>
                        Browse Marketplace
                    </a>
                </div>
            </div>
        );
    }

    const installmentPlans = [
        { months: 4, rate: 0, label: '4 Months' },
    ];

    const selectedPlan = installmentPlans.find(p => p.months === installments)!;
    const interestAmount = Math.round(cart.total * (selectedPlan.rate / 100));
    const totalWithInterest = cart.total + interestAmount;
    const monthlyPayment = Math.round(totalWithInterest / installments);

    const handlePlaceOrder = async () => {
        // Validate inputs
        if (!fullName.trim()) {
            showToast('Please enter your full name', 'warning');
            return;
        }
        if (!phoneNumber.trim()) {
            showToast('Please enter your phone number', 'warning');
            return;
        }
        if (!deliveryAddress.trim()) {
            showToast('Please enter your delivery address', 'warning');
            return;
        }

        setIsProcessing(true);
        try {
            // Group items by supplier
            const supplierOrders = new Map<string, typeof cart.items>();
            cart.items.forEach(item => {
                const supplierId = item.product.supplierId;
                if (!supplierOrders.has(supplierId)) {
                    supplierOrders.set(supplierId, []);
                }
                supplierOrders.get(supplierId)!.push(item);
            });

            // Place order for each supplier
            for (const [supplierId, items] of Array.from(supplierOrders.entries())) {
                const orderPayload = {
                    supplier_id: parseInt(supplierId),
                    items: items.map(item => ({
                        product_id: parseInt(item.product.id),
                        quantity: item.quantity
                    })),
                    payment_method: paymentMethod === 'bnpl' ? 'BNPL' : 'CASH',
                    delivery_address: deliveryAddress,
                    notes: `Installments: ${installments} months`
                };

                const orderResponse = await apiRequest<any>('/orders/', {
                    method: 'POST',
                    body: JSON.stringify(orderPayload)
                });

                if (paymentMethod === 'bnpl' && orderResponse.id) {
                    await apiRequest(`/finance/installments/generate/${orderResponse.id}`, {
                        method: 'POST'
                    });
                }
            }

            clearCart();
            router.push('/farmer/orders?success=true');
        } catch (error) {
            console.error('Order placement failed:', error);
            const errorMessage = error instanceof Error ? error.message : 'An error occurred';

            if (errorMessage.includes('Insufficient credit limit')) {
                showToast(`Order failed: You don't have enough credit limit for this purchase. Current available credit: PKR ${farmer?.availableCredit.toLocaleString() || 0}. Order total: PKR ${cart.total.toLocaleString()}.`, 'error');
            } else if (errorMessage.includes('Insufficient stock')) {
                showToast('Order failed: One or more products are out of stock. Please update your cart.', 'error');
            } else {
                showToast(`Failed to place order: ${errorMessage}`, 'error');
            }
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <div className="p-6 max-w-6xl mx-auto pb-24 lg:pb-6">
            <h1 className="text-3xl font-bold mb-8 text-charcoal dark:text-off-white">Checkout</h1>

            <div className="grid lg:grid-cols-3 gap-6">
                {/* Main Checkout Form */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Delivery Information */}
                    <div className="bg-white dark:bg-charcoal/20 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                        <h2 className="text-xl font-bold mb-4 text-charcoal dark:text-off-white flex items-center gap-2">
                            <span className="material-symbols-outlined text-indus-green">location_on</span>
                            Delivery Information
                        </h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-2">Full Name</label>
                                <input
                                    type="text"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indus-green"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indus-green"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Delivery Address</label>
                                <textarea
                                    value={deliveryAddress}
                                    onChange={(e) => setDeliveryAddress(e.target.value)}
                                    rows={3}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indus-green"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Payment Method */}
                    <div className="bg-white dark:bg-charcoal/20 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                        <h2 className="text-xl font-bold mb-4 text-charcoal dark:text-off-white flex items-center gap-2">
                            <span className="material-symbols-outlined text-indus-green">payments</span>
                            Payment Method
                        </h2>
                        <div className="space-y-3">
                            <label className={`flex items-start gap-4 p-4 rounded-lg border-2 cursor-pointer transition-colors ${paymentMethod === 'bnpl'
                                ? 'border-indus-green bg-indus-green/5'
                                : 'border-gray-200 dark:border-gray-700'
                                }`}>
                                <input
                                    type="radio"
                                    name="payment"
                                    value="bnpl"
                                    checked={paymentMethod === 'bnpl'}
                                    onChange={(e) => setPaymentMethod(e.target.value as 'bnpl')}
                                    className="mt-1"
                                />
                                <div className="flex-1">
                                    <div className="font-semibold text-lg mb-1">Buy Now, Pay Later</div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Pay in easy installments. Available credit: PKR {farmer.availableCredit.toLocaleString()}
                                    </p>
                                </div>
                                <span className="material-symbols-outlined text-indus-green text-3xl">schedule</span>
                            </label>

                            <label className={`flex items-start gap-4 p-4 rounded-lg border-2 cursor-pointer transition-colors ${paymentMethod === 'cash'
                                ? 'border-indus-green bg-indus-green/5'
                                : 'border-gray-200 dark:border-gray-700'
                                }`}>
                                <input
                                    type="radio"
                                    name="payment"
                                    value="cash"
                                    checked={paymentMethod === 'cash'}
                                    onChange={(e) => setPaymentMethod(e.target.value as 'cash')}
                                    className="mt-1"
                                />
                                <div className="flex-1">
                                    <div className="font-semibold text-lg mb-1">Cash on Delivery</div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Pay when you receive your order
                                    </p>
                                </div>
                                <span className="material-symbols-outlined text-indus-green text-3xl">local_atm</span>
                            </label>
                        </div>
                    </div>

                    {/* BNPL Options */}
                    {paymentMethod === 'bnpl' && (
                        <div className="bg-white dark:bg-charcoal/20 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                            <h2 className="text-xl font-bold mb-4 text-charcoal dark:text-off-white flex items-center gap-2">
                                <span className="material-symbols-outlined text-indus-green">calendar_month</span>
                                Installment Plan
                            </h2>
                            <div className="grid gap-3">
                                {installmentPlans.map((plan) => (
                                    <label
                                        key={plan.months}
                                        className="flex items-center justify-between p-4 rounded-lg border-2 border-indus-green bg-indus-green/5"
                                    >
                                        <div className="flex items-center gap-3">
                                            <input
                                                type="radio"
                                                name="installments"
                                                value={plan.months}
                                                checked={true}
                                                readOnly
                                            />
                                            <div>
                                                <div className="font-semibold">{plan.label}</div>
                                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                                    PKR {Math.round((cart.total * (1 + plan.rate / 100)) / plan.months).toLocaleString()} / month
                                                </div>
                                            </div>
                                        </div>
                                        <span className="px-3 py-1 bg-indus-green text-white text-xs rounded-full font-semibold">
                                            Recommended
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                    <div className="bg-white dark:bg-charcoal/20 rounded-xl p-6 border border-gray-200 dark:border-gray-700 sticky top-24">
                        <h2 className="text-xl font-bold mb-4 text-charcoal dark:text-off-white">Order Summary</h2>

                        {/* Items */}
                        <div className="space-y-3 mb-4 max-h-48 overflow-y-auto">
                            {cart.items.map((item) => (
                                <div key={item.product.id} className="flex gap-3 text-sm">
                                    <img src={item.product.images[0]} alt={item.product.name} className="w-12 h-12 rounded object-cover" />
                                    <div className="flex-1">
                                        <div className="font-medium line-clamp-1">{item.product.name}</div>
                                        <div className="text-gray-500">Qty: {item.quantity}</div>
                                    </div>
                                    <div className="font-semibold">
                                        PKR {(item.product.price * item.quantity).toLocaleString()}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="border-t border-gray-200 dark:border-gray-700 pt-4 space-y-2 mb-4">
                            <div className="flex justify-between text-sm">
                                <span>Subtotal</span>
                                <span>PKR {cart.subtotal.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span>Tax</span>
                                <span>PKR {cart.tax.toLocaleString()}</span>
                            </div>
                            {paymentMethod === 'bnpl' && interestAmount > 0 && (
                                <div className="flex justify-between text-sm">
                                    <span>Service Fee ({selectedPlan.rate}%)</span>
                                    <span>PKR {interestAmount.toLocaleString()}</span>
                                </div>
                            )}
                            <div className="flex justify-between text-lg font-bold pt-2 border-t border-gray-200 dark:border-gray-700">
                                <span>Total</span>
                                <span className="text-indus-green">
                                    PKR {(paymentMethod === 'bnpl' ? totalWithInterest : cart.total).toLocaleString()}
                                </span>
                            </div>
                            {paymentMethod === 'bnpl' && (
                                <div className="bg-indus-green/10 p-3 rounded-lg">
                                    <div className="text-sm font-semibold text-indus-green mb-1">
                                        {installments} Monthly Payments
                                    </div>
                                    <div className="text-2xl font-bold text-indus-green">
                                        PKR {monthlyPayment.toLocaleString()}
                                    </div>
                                    <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                                        per month
                                    </div>
                                </div>
                            )}
                        </div>

                        <button
                            onClick={handlePlaceOrder}
                            disabled={isProcessing}
                            className="w-full py-3 bg-indus-green text-white rounded-lg hover:bg-indus-green/90 font-semibold flex items-center justify-center gap-2 disabled:opacity-50"
                        >
                            {isProcessing ? (
                                <>Processing...</>
                            ) : (
                                <>
                                    <span className="material-symbols-outlined">check_circle</span>
                                    Place Order
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
