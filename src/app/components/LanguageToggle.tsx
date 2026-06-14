'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';

export function LanguageToggle() {
    const { locale, setLocale } = useLanguage();

    return (
        <button
            onClick={() => setLocale(locale === 'en' ? 'ur' : 'en')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm font-medium"
            title={locale === 'en' ? 'اردو میں تبدیل کریں' : 'Switch to English'}
        >
            <span className="material-symbols-outlined text-base">translate</span>
            <span className={locale === 'ur' ? 'font-display' : 'font-urdu'}>{locale === 'en' ? 'اردو' : 'English'}</span>
        </button>
    );
}
