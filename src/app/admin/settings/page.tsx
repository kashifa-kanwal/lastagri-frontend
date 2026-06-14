'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function AdminSettingsPage() {
    const { t } = useLanguage();
    return (
        <div className="p-6 max-w-4xl mx-auto pb-24 lg:pb-6">
            <h1 className="text-3xl font-bold mb-8 text-charcoal dark:text-off-white">{t('admin.settings.title')}</h1>

            <div className="space-y-6">
                {/* General Settings */}
                <div className="bg-white dark:bg-charcoal/20 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">tune</span>
                        {t('admin.settings.generalConfig')}
                    </h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">{t('admin.settings.platformName')}</label>
                            <input type="text" defaultValue="AgriConnect" className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">{t('admin.settings.supportEmail')}</label>
                            <input type="email" defaultValue="support@agriconnect.pk" className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800" />
                        </div>
                    </div>
                </div>

                {/* Feature Flags */}
                <div className="bg-white dark:bg-charcoal/20 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">toggle_on</span>
                        {t('admin.settings.featureFlags')}
                    </h2>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="font-medium text-charcoal dark:text-off-white">{t('admin.settings.maintenanceMode')}</div>
                                <div className="text-sm text-gray-500">{t('admin.settings.disableAccess')}</div>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                            </label>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="font-medium text-charcoal dark:text-off-white">{t('admin.settings.newRegistration')}</div>
                                <div className="text-sm text-gray-500">{t('admin.settings.allowSignup')}</div>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" defaultChecked className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
