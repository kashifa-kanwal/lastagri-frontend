'use client';

import { useAuth } from '@/lib/contexts/AuthContext';
import { Farmer } from '@/types';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function FarmerProfilePage() {
    const { user } = useAuth();
    const farmer = user as Farmer;
    const { t } = useLanguage();

    return (
        <div className="p-6 max-w-4xl mx-auto pb-24 lg:pb-6">
            <h1 className="text-3xl font-bold mb-8 text-charcoal dark:text-off-white">{t('farmer.profile.title')}</h1>

            <div className="space-y-6">
                {/* Personal Info */}
                <div className="bg-white dark:bg-charcoal/20 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <span className="material-symbols-outlined text-indus-green">person</span>
                        {t('farmer.profile.personalInfo')}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">{t('farmer.profile.fullName')}</label>
                            <input
                                type="text"
                                defaultValue={farmer.name}
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">{t('farmer.profile.phoneNumber')}</label>
                            <input
                                type="tel"
                                defaultValue={farmer.phone}
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">{t('farmer.profile.emailAddress')}</label>
                            <input
                                type="email"
                                defaultValue={farmer.email}
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800"
                            />
                        </div>
                    </div>
                </div>

                {/* Farm Details */}
                <div className="bg-white dark:bg-charcoal/20 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <span className="material-symbols-outlined text-indus-green">agriculture</span>
                        {t('farmer.profile.farmDetails')}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">{t('farmer.profile.farmName')}</label>
                            <input
                                type="text"
                                defaultValue={farmer.farmName}
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">{t('farmer.profile.farmSize')}</label>
                            <input
                                type="number"
                                defaultValue={farmer.farmSize}
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">{t('farmer.profile.district')}</label>
                            <input
                                type="text"
                                defaultValue={farmer.location.district}
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">{t('farmer.profile.tehsil')}</label>
                            <input
                                type="text"
                                defaultValue={farmer.location.tehsil}
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800"
                            />
                        </div>
                    </div>
                </div>

                {/* Preferences */}
                <div className="bg-white dark:bg-charcoal/20 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <span className="material-symbols-outlined text-indus-green">settings</span>
                        {t('farmer.profile.preferences')}
                    </h2>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="font-medium text-charcoal dark:text-off-white">{t('farmer.profile.language')}</div>
                                <div className="text-sm text-gray-500">{t('farmer.profile.chooseLanguage')}</div>
                            </div>
                            <select className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800">
                                <option value="en">English</option>
                                <option value="ur">Urdu (اردو)</option>
                            </select>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="font-medium text-charcoal dark:text-off-white">{t('farmer.profile.smsNotifications')}</div>
                                <div className="text-sm text-gray-500">{t('farmer.profile.smsUpdates')}</div>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" defaultChecked className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indus-green"></div>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end gap-4">
                    <button className="px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 font-semibold">
                        {t('farmer.profile.cancel')}
                    </button>
                    <button className="px-6 py-3 bg-indus-green text-white rounded-lg hover:bg-indus-green/90 font-semibold">
                        {t('farmer.profile.saveChanges')}
                    </button>
                </div>
            </div>
        </div>
    );
}
