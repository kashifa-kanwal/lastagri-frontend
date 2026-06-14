'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';

export function LayoutShell({
    children,
    interVariable,
    urduVariable,
}: {
    children: React.ReactNode;
    interVariable: string;
    urduVariable: string;
}) {
    const { locale, dir } = useLanguage();

    return (
        <html lang={locale} dir={dir} suppressHydrationWarning>
            <head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,0..200"
                    rel="stylesheet"
                />
            </head>
            <body
                suppressHydrationWarning={true}
                className={`${interVariable} ${urduVariable} antialiased ${
                    locale === 'ur' ? 'font-urdu' : 'font-display'
                } bg-off-white dark:bg-background-dark text-charcoal dark:text-off-white`}
            >
                {children}
            </body>
        </html>
    );
}
