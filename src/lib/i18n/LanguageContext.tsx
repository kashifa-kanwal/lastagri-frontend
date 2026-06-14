'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import en from './translations/en.json';
import ur from './translations/ur.json';

type Locale = 'en' | 'ur';
type TranslationDictionary = Record<string, string>;

interface LanguageContextType {
    locale: Locale;
    dir: 'ltr' | 'rtl';
    setLocale: (locale: Locale) => void;
    t: (key: string, params?: Record<string, string | number>) => string;
}

const translations: Record<Locale, TranslationDictionary> = { en, ur };

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [locale, setLocaleState] = useState<Locale>('en');

    useEffect(() => {
        const stored = localStorage.getItem('agriconnect_lang') as Locale | null;
        if (stored === 'en' || stored === 'ur') {
            setLocaleState(stored);
        }
    }, []);

    const setLocale = (newLocale: Locale) => {
        setLocaleState(newLocale);
        localStorage.setItem('agriconnect_lang', newLocale);
    };

    const dir = locale === 'ur' ? 'rtl' : 'ltr';

    const t = (key: string, params?: Record<string, string | number>): string => {
        let value = translations[locale][key] || translations['en'][key] || key;
        if (params) {
            Object.entries(params).forEach(([paramKey, paramValue]) => {
                value = value.replace(`{{${paramKey}}}`, String(paramValue));
            });
        }
        return value;
    };

    return (
        <LanguageContext.Provider value={{ locale, dir, setLocale, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
