'use client';

import { useCart } from '@/lib/contexts/CartContext';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function CartPage() {
    const { cart, updateQuantity, removeFromCart, clearCart } = useCart();
    const { t } = useLanguage();

    if (cart.items.length === 0) {
        return (
            <div className="p-6 max-w-4xl mx-auto pb-24 lg:pb-6">
                <h1 className="text-3xl font-bold mb-8 text-charcoal dark:text-off-white">{t('farmer.cart.title')}</h1>
                <div className="bg-white dark:bg-charcoal/20 rounded-xl p-12 text-center">
                    <span className="material-symbols-outlined text-6xl text-gray-300 dark:text-gray-600 mb-4 block">shopping_cart</span>
                    <h2 className="text-2xl font-semibold mb-2 text-charcoal dark:text-off-white">{t('farmer.cart.empty')}</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">{t('farmer.cart.addProducts')}</p>
                    <Link
                        href="/farmer/marketplace"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-indus-green text-white rounded-lg hover:bg-indus-green/90"
                    >
                        <span className="material-symbols-outlined">store</span>
                        {t('farmer.cart.browseMarketplace')}
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="p-6 max-w-6xl mx-auto pb-24 lg:pb-6">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-charcoal dark:text-off-white">{t('farmer.cart.title')}</h1>
                <button
                    onClick={clearCart}
                    className="text-alert-red hover:underline flex items-center gap-1"
                >
                    <span className="material-symbols-outlined text-sm">delete</span>
                    {t('farmer.cart.clearCart')}
                </button>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-4">
                    {cart.items.map((item) => (
                        <div key={item.product.id} className="bg-white dark:bg-charcoal/20 rounded-xl p-4 border border-gray-200 dark:border-gray-700 flex gap-4">
                            <img
                                src={item.product.images[0]}
                                alt={item.product.name}
                                className="w-24 h-24 object-cover rounded-lg"
                            />
                            <div className="flex-1">
                                <h3 className="font-semibold text-lg text-charcoal dark:text-off-white">{item.product.name}</h3>
                                {item.product.nameUrdu && (
                                    <p className="text-sm text-gray-500 font-urdu">{item.product.nameUrdu}</p>
                                )}
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                    {item.product.supplierName}
                                </p>
                                <div className="flex items-center gap-4 mt-3">
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                            className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700"
                                        >
                                            <span className="material-symbols-outlined text-sm">remove</span>
                                        </button>
                                        <span className="w-12 text-center font-semibold">{item.quantity}</span>
                                        <button
                                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                            className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700"
                                        >
                                            <span className="material-symbols-outlined text-sm">add</span>
                                        </button>
                                    </div>
                                    <div className="text-sm text-gray-500">× PKR {item.product.price.toLocaleString()}</div>
                                    <div className="font-semibold text-indus-green ml-auto">
                                        PKR {(item.product.price * item.quantity).toLocaleString()}
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => removeFromCart(item.product.id)}
                                className="text-gray-400 hover:text-alert-red"
                            >
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>
                    ))}
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                    <div className="bg-white dark:bg-charcoal/20 rounded-xl p-6 border border-gray-200 dark:border-gray-700 sticky top-24">
                        <h2 className="text-xl font-bold mb-4 text-charcoal dark:text-off-white">{t('farmer.cart.orderSummary')}</h2>
                        <div className="space-y-3 mb-6">
                            <div className="flex justify-between">
                                <span className="text-gray-600 dark:text-gray-400">{t('farmer.cart.subtotal')}</span>
                                <span className="font-semibold">PKR {cart.subtotal.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600 dark:text-gray-400">{t('farmer.cart.gst')}</span>
                                <span className="font-semibold">PKR {cart.tax.toLocaleString()}</span>
                            </div>
                            <div className="border-t border-gray-200 dark:border-gray-700 pt-3 flex justify-between text-lg">
                                <span className="font-bold text-charcoal dark:text-off-white">{t('farmer.cart.total')}</span>
                                <span className="font-bold text-indus-green">PKR {cart.total.toLocaleString()}</span>
                            </div>
                        </div>

                        <Link
                            href="/farmer/checkout"
                            className="w-full py-3 bg-indus-green text-white rounded-lg hover:bg-indus-green/90 font-semibold flex items-center justify-center gap-2"
                        >
                            <span className="material-symbols-outlined">payments</span>
                            {t('farmer.cart.proceedCheckout')}
                        </Link>

                        <Link
                            href="/farmer/marketplace"
                            className="w-full py-3 mt-3 bg-white dark:bg-gray-800 text-indus-green border-2 border-indus-green rounded-lg hover:bg-indus-green/10 font-semibold flex items-center justify-center gap-2"
                        >
                            <span className="material-symbols-outlined">store</span>
                            {t('farmer.cart.continueShopping')}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
