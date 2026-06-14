'use client';

export const dynamic = 'force-dynamic';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@/lib/contexts/AuthContext';
import { UserRole } from '@/types';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function LoginPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { login, isAuthenticated, isLoading: authLoading } = useAuth();
    const { t } = useLanguage();

    const roleParam = searchParams.get('role') as UserRole || 'farmer';
    const justRegistered = searchParams.get('registered') === 'true';
    const [role, setRole] = useState<UserRole>(roleParam);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [showRegistrationSuccess, setShowRegistrationSuccess] = useState(justRegistered);

    // Clear old session for newly registered users
    useEffect(() => {
        if (justRegistered) {
            localStorage.removeItem('agriconnect_token');
            localStorage.removeItem('agriconnect_user');
        }
    }, [justRegistered]);

    useEffect(() => {
        if (isAuthenticated && !authLoading && !justRegistered) {
            // Redirect to dashboard if already logged in (but not if just registered)
            router.push(`/${role}/dashboard`);
        }
    }, [isAuthenticated, authLoading, role, router, justRegistered]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            const success = await login(username, password, role);

            if (success) {
                router.push(`/${role}/dashboard`);
            } else {
                setError(t('login.form.invalidError'));
            }
        } catch (err) {
            setError(t('login.form.generalError'));
        } finally {
            setIsLoading(false);
        }
    };

    const roleColors = {
        farmer: 'indus-green',
        supplier: 'trust-blue',
        admin: 'primary',
    };

    const roleIcons = {
        farmer: 'agriculture',
        supplier: 'store',
        admin: 'admin_panel_settings',
    };

    const roleNames = {
        farmer: 'Farmer',
        supplier: 'Supplier',
        admin: 'Admin',
    };

    const roleNamesUrdu = {
        farmer: 'کسان',
        supplier: 'سپلائر',
        admin: 'ایڈمن',
    };

    return (
        <div className="min-h-screen flex">
            {/* Left Side - Branding */}
            <div className={`hidden lg:flex lg:w-1/2 bg-gradient-to-br from-${roleColors[role]} to-${roleColors[role]}/70 text-white p-12 flex-col justify-between`}>
                <div>
                    <Link href="/" className="flex items-center gap-3 mb-12">
                        <span className="material-symbols-outlined text-4xl">arrow_back</span>
                        <span className="text-xl font-semibold">{t('login.backToHome')}</span>
                    </Link>

                    <h1 className="text-5xl font-black mb-4 font-urdu">{t('login.title')}</h1>
                    <p className="text-2xl mb-8">{roleNames[role]} {t('login.portalSuffix')}</p>
                    <p className="text-xl font-urdu mb-12">{roleNamesUrdu[role]} پورٹل</p>

                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <span className="material-symbols-outlined mt-1">check_circle</span>
                            <div>
                                <h3 className="font-semibold text-lg">{t('login.feature1.title')}</h3>
                                <p className="text-white/80">{t('login.feature1.description')}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="material-symbols-outlined mt-1">check_circle</span>
                            <div>
                                <h3 className="font-semibold text-lg">{t('login.feature2.title')}</h3>
                                <p className="text-white/80">{t('login.feature2.description')}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="material-symbols-outlined mt-1">check_circle</span>
                            <div>
                                <h3 className="font-semibold text-lg">{t('login.feature3.title')}</h3>
                                <p className="text-white/80 font-urdu">ہم ہمیشہ آپ کی مدد کے لیے موجود ہیں</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-sm text-white/70">
                    {t('login.copyright')}
                </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="flex-1 flex items-center justify-center p-8 bg-off-white dark:bg-background-dark">
                <div className="w-full max-w-md">
                    <div className="bg-white dark:bg-charcoal/20 rounded-2xl shadow-xl p-8">
                        {/* Portal Icon */}
                        <div className={`w-20 h-20 bg-${roleColors[role]}/10 rounded-full flex items-center justify-center mb-6 mx-auto`}>
                            <span className={`material-symbols-outlined text-5xl text-${roleColors[role]}`}>
                                {roleIcons[role]}
                            </span>
                        </div>

                        <h2 className="text-3xl font-bold text-center mb-2 text-charcoal dark:text-off-white">
                            {showRegistrationSuccess ? t('login.form.title.success') : t('login.form.title.default')}
                        </h2>
                        <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
                            {showRegistrationSuccess
                                ? t('login.form.description.success')
                                : `Sign in to your ${roleNames[role].toLowerCase()} account`}
                        </p>

                        {/* Registration Success Banner */}
                        {showRegistrationSuccess && (
                            <div className="mb-6 p-4 bg-indus-green/10 border-2 border-indus-green rounded-lg relative">
                                <div className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-indus-green text-2xl flex-shrink-0">celebration</span>
                                    <div className="pr-6">
                                        <p className="text-sm font-bold text-indus-green">{t('login.form.successBanner.title')}</p>
                                        <p className="text-xs text-green-700 dark:text-green-300 mt-1">
                                            {t('login.form.successBanner.message')}
                                        </p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setShowRegistrationSuccess(false)}
                                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                                >
                                    <span className="material-symbols-outlined text-lg">close</span>
                                </button>
                            </div>
                        )}

                        {error && (
                            <div className="mb-6 p-4 bg-alert-red/10 border border-alert-red/30 rounded-lg">
                                <p className="text-sm text-alert-red">{error}</p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Role Selector */}
                            <div>
                                <label className="block text-sm font-medium mb-2 text-charcoal dark:text-off-white">
                                    {t('login.form.roleLabel')}
                                </label>
                                <div className="grid grid-cols-3 gap-2">
                                    {(['farmer', 'supplier', 'admin'] as UserRole[]).map((r) => (
                                        <button
                                            key={r}
                                            type="button"
                                            onClick={() => setRole(r)}
                                            className={`p-3 rounded-lg border-2 transition-all ${role === r
                                                ? `border-${roleColors[r]} bg-${roleColors[r]}/10`
                                                : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'
                                                }`}
                                        >
                                            <span className={`material-symbols-outlined mb-1 ${role === r ? `text-${roleColors[r]}` : 'text-gray-400'}`}>
                                                {roleIcons[r]}
                                            </span>
                                            <div className={`text-xs font-medium ${role === r ? `text-${roleColors[r]}` : 'text-gray-600 dark:text-gray-400'}`}>
                                                {roleNames[r]}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Username */}
                            <div>
                                <label htmlFor="username" className="block text-sm font-medium mb-2 text-charcoal dark:text-off-white">
                                    {t('login.form.username.label')}
                                </label>
                                <input
                                    id="username"
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-charcoal dark:text-off-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                                    placeholder={t('login.form.username.placeholder')}
                                />
                            </div>

                            {/* Password */}
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium mb-2 text-charcoal dark:text-off-white">
                                    {t('login.form.password.label')}
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-charcoal dark:text-off-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                                    placeholder={t('login.form.password.placeholder')}
                                />
                            </div>

                            {/* Remember Me */}
                            <div className="flex items-center">
                                <input
                                    id="remember"
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary/50"
                                />
                                <label htmlFor="remember" className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                                    {t('login.form.rememberMe')}
                                </label>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isLoading}
                                className={`w-full py-3 rounded-lg font-semibold text-white bg-${roleColors[role]} hover:bg-${roleColors[role]}/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
                            >
                                {isLoading ? t('login.form.submitLoading') : t('login.form.submitButton')}
                            </button>
                        </form>

                        <div className="mt-6 text-center space-y-2">
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                {t('login.form.signup.prefix')}{' '}
                                {role === 'farmer' ? (
                                    <Link href="/signup/farmer" className="text-indus-green font-semibold hover:underline">
                                        {t('login.form.signup.farmer')}
                                    </Link>
                                ) : role === 'supplier' ? (
                                    <Link href="/signup/supplier" className="text-trust-blue font-semibold hover:underline">
                                        {t('login.form.signup.supplier')}
                                    </Link>
                                ) : (
                                    <span className="text-gray-400">{t('login.form.signup.admin')}</span>
                                )}
                            </p>
                            <Link href="/forgot-password" className="text-sm text-primary hover:underline block">
                                {t('login.form.forgotPassword')}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
