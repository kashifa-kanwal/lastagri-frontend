'use client';

import { useAuth } from '@/lib/contexts/AuthContext';
import { Supplier } from '@/types';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function SupplierSettingsPage() {
    const { user } = useAuth();
    const supplier = user as Supplier;
    const { t } = useLanguage();

    return (
        <div className="p-6 max-w-4xl mx-auto pb-24 lg:pb-6">
            <h1 className="text-3xl font-bold mb-8 text-charcoal dark:text-off-white">{t('supplier.settings.title')}</h1>

            <div className="space-y-6">
                {/* Profile Settings */}
                <div className="bg-white dark:bg-charcoal/20 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <span className="material-symbols-outlined text-trust-blue">store</span>
                        {t('supplier.settings.businessProfile')}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">{t('supplier.settings.businessName')}</label>
                            <input
                                type="text"
                                defaultValue={supplier.businessName}
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">{t('supplier.settings.emailAddress')}</label>
                            <input
                                type="email"
                                defaultValue={supplier.email}
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">{t('supplier.settings.phoneNumber')}</label>
                            <input
                                type="tel"
                                defaultValue={supplier.phone}
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">{t('supplier.settings.businessType')}</label>
                            <select
                                defaultValue={supplier.businessType}
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800"
                            >
                                <option value="Retailer">{t('supplier.settings.retailer')}</option>
                                <option value="Wholesaler">{t('supplier.settings.wholesaler')}</option>
                                <option value="Distributor">{t('supplier.settings.distributor')}</option>
                                <option value="Manufacturer">{t('supplier.settings.manufacturer')}</option>
                            </select>
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">{t('supplier.settings.address')}</label>
                            <textarea
                                defaultValue={supplier.location}
                                rows={3}
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800"
                            />
                        </div>
                    </div>
                    <div className="mt-6 flex justify-end">
                        <button className="px-6 py-2 bg-trust-blue text-white rounded-lg hover:bg-trust-blue/90 font-semibold">
                            {t('supplier.settings.saveChanges')}
                        </button>
                    </div>
                </div>

                {/* Notification Settings */}
                <div className="bg-white dark:bg-charcoal/20 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <span className="material-symbols-outlined text-trust-blue">notifications</span>
                        {t('supplier.settings.notifications')}
                    </h2>
                    <div className="space-y-4">
                        {[t('supplier.settings.newOrderAlerts'), t('supplier.settings.lowStockWarnings'), t('supplier.settings.payoutConfirmations'), t('supplier.settings.marketingUpdates')].map((item) => (
                            <div key={item} className="flex items-center justify-between">
                                <span className="text-gray-700 dark:text-gray-300">{item}</span>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" defaultChecked className="sr-only peer" />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-trust-blue"></div>
                                </label>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Security */}
                <div className="bg-white dark:bg-charcoal/20 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <span className="material-symbols-outlined text-trust-blue">security</span>
                        {t('supplier.settings.security')}
                    </h2>
                    <button className="text-trust-blue font-semibold hover:underline">{t('supplier.settings.changePassword')}</button>
                </div>
            </div>
        </div>
    );
}
