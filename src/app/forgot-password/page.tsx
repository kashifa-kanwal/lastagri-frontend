'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { apiRequest } from '@/lib/api';
import { useLanguage } from '@/lib/i18n/LanguageContext';

type Step = 'enter_info' | 'enter_otp' | 'success';
type UserType = 'farmer' | 'supplier';
type Channel = 'email' | 'sms';

export default function ForgotPasswordPage() {
    const { t } = useLanguage();

    const [step, setStep] = useState<Step>('enter_info');
    const [userType, setUserType] = useState<UserType>('farmer');
    const [channel, setChannel] = useState<Channel>('sms');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [countdown, setCountdown] = useState(0);

    const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

    // Countdown timer
    useEffect(() => {
        if (countdown <= 0) return;
        const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
        return () => clearTimeout(timer);
    }, [countdown]);

    const maskEmail = (email: string): string => {
        const [local, domain] = email.split('@');
        if (!domain) return email;
        const masked = local.length <= 2
            ? local[0] + '***'
            : local.slice(0, 2) + '***' + local.slice(-1);
        return `${masked}@${domain}`;
    };

    const maskPhone = (phone: string): string => {
        if (phone.length < 6) return phone;
        return phone.slice(0, 4) + '****' + phone.slice(-3);
    };

    const formatCountdown = (seconds: number): string => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s.toString().padStart(2, '0')}`;
    };

    // Validate phone format (Pakistani)
    const isValidPhone = (phone: string): boolean => {
        const cleaned = phone.replace(/[-\s]/g, '');
        return /^(03\d{9}|3\d{9}|\+923\d{9})$/.test(cleaned);
    };

    // ─── Step 1: Request OTP ──────────────────────────────────────
    const handleRequestOTP = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (channel === 'email' && !email.trim()) {
            setError(t('forgotPassword.error.requestFailed'));
            return;
        }

        if (channel === 'sms') {
            if (!phoneNumber.trim()) {
                setError(t('forgotPassword.error.phoneRequired'));
                return;
            }
            if (!isValidPhone(phoneNumber.trim())) {
                setError(t('forgotPassword.error.invalidPhone'));
                return;
            }
        }

        setIsLoading(true);
        try {
            const endpoint = userType === 'farmer'
                ? '/farmers/request-password-reset'
                : '/suppliers/request-password-reset';

            const body: Record<string, string> = {
                channel,
                user_type: userType,
            };

            if (channel === 'email') {
                body.email = email.trim().toLowerCase();
            } else {
                body.phone_number = phoneNumber.trim();
            }

            await apiRequest(endpoint, {
                method: 'POST',
                body: JSON.stringify(body),
            });

            setCountdown(120);
            setStep('enter_otp');
        } catch (err: unknown) {
            const message = err instanceof Error ? err.message : t('forgotPassword.error.requestFailed');
            setError(message);
        } finally {
            setIsLoading(false);
        }
    };

    // ─── Step 2: Verify OTP + Reset Password ─────────────────────
    const handleVerifyOTP = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        const otpCode = otp.join('');
        if (otpCode.length !== 6) {
            setError(t('forgotPassword.error.incompleteOtp'));
            return;
        }

        if (newPassword.length < 8) {
            setError(t('forgotPassword.error.passwordTooShort'));
            return;
        }

        if (newPassword !== confirmPassword) {
            setError(t('forgotPassword.error.passwordMismatch'));
            return;
        }

        setIsLoading(true);
        try {
            const endpoint = userType === 'farmer'
                ? '/farmers/verify-reset-otp'
                : '/suppliers/verify-reset-otp';

            const body: Record<string, string> = {
                channel,
                otp_code: otpCode,
                new_password: newPassword,
                user_type: userType,
            };

            if (channel === 'email') {
                body.email = email.trim().toLowerCase();
            } else {
                body.phone_number = phoneNumber.trim();
            }

            await apiRequest(endpoint, {
                method: 'POST',
                body: JSON.stringify(body),
            });

            setStep('success');
        } catch (err: unknown) {
            const message = err instanceof Error ? err.message : t('forgotPassword.error.invalidOtp');
            setError(message);
        } finally {
            setIsLoading(false);
        }
    };

    // ─── Resend OTP ──────────────────────────────────────────────
    const handleResendOTP = async () => {
        setError('');
        setOtp(['', '', '', '', '', '']);
        setIsLoading(true);
        try {
            const endpoint = userType === 'farmer'
                ? '/farmers/request-password-reset'
                : '/suppliers/request-password-reset';

            const body: Record<string, string> = {
                channel,
                user_type: userType,
            };

            if (channel === 'email') {
                body.email = email.trim().toLowerCase();
            } else {
                body.phone_number = phoneNumber.trim();
            }

            await apiRequest(endpoint, {
                method: 'POST',
                body: JSON.stringify(body),
            });

            setCountdown(120);
        } catch (err: unknown) {
            const message = err instanceof Error ? err.message : t('forgotPassword.error.requestFailed');
            setError(message);
        } finally {
            setIsLoading(false);
        }
    };

    // ─── OTP Input Handlers ──────────────────────────────────────
    const handleOtpChange = (index: number, value: string) => {
        if (!/^\d*$/.test(value)) return;
        const newOtp = [...otp];
        newOtp[index] = value.slice(-1);
        setOtp(newOtp);

        if (value && index < 5) {
            otpRefs.current[index + 1]?.focus();
        }
    };

    const handleOtpKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            otpRefs.current[index - 1]?.focus();
        }
    };

    const handleOtpPaste = (e: React.ClipboardEvent) => {
        e.preventDefault();
        const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
        if (pasted.length === 6) {
            setOtp(pasted.split(''));
            otpRefs.current[5]?.focus();
        }
    };

    // ─── Step Indicator ──────────────────────────────────────────
    const steps: Step[] = ['enter_info', 'enter_otp', 'success'];
    const currentStepIndex = steps.indexOf(step);

    return (
        <div className="min-h-screen flex items-center justify-center bg-off-white dark:bg-background-dark px-4">
            <div className="max-w-md w-full bg-white dark:bg-charcoal/20 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">

                {/* Step Progress Indicator */}
                <div className="flex justify-center gap-2 mb-8">
                    {steps.map((s, i) => (
                        <div
                            key={s}
                            className={`h-2 rounded-full transition-all duration-300 ${
                                i === currentStepIndex ? 'w-10 bg-indus-green' :
                                i < currentStepIndex ? 'w-6 bg-indus-green/50' :
                                'w-6 bg-gray-200 dark:bg-gray-600'
                            }`}
                        />
                    ))}
                </div>

                {/* ─── Step 1: Enter Info ─────────────────────────── */}
                {step === 'enter_info' && (
                    <>
                        <div className="text-center mb-8">
                            <div className="w-16 h-16 bg-indus-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="material-symbols-outlined text-3xl text-indus-green">lock_reset</span>
                            </div>
                            <h1 className="text-2xl font-bold text-charcoal dark:text-off-white mb-2">
                                {t('forgotPassword.title')}
                            </h1>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                {t('forgotPassword.description')}
                            </p>
                        </div>

                        {error && (
                            <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 text-red-700 dark:text-red-400 text-sm rounded">
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleRequestOTP} className="space-y-5">
                            {/* Account Type Selector */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    {t('forgotPassword.step1.userType.label')}
                                </label>
                                <div className="grid grid-cols-2 gap-3">
                                    {(['farmer', 'supplier'] as UserType[]).map(type => (
                                        <button
                                            key={type}
                                            type="button"
                                            onClick={() => setUserType(type)}
                                            className={`py-2.5 px-4 rounded-lg border-2 font-medium text-sm transition-all flex items-center justify-center gap-2 ${
                                                userType === type
                                                    ? 'border-indus-green bg-indus-green/10 text-indus-green'
                                                    : 'border-gray-200 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:border-gray-300'
                                            }`}
                                        >
                                            <span className="material-symbols-outlined text-lg">
                                                {type === 'farmer' ? 'agriculture' : 'store'}
                                            </span>
                                            {t(`forgotPassword.step1.userType.${type}`)}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Channel Selector: SMS or Email */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    {t('forgotPassword.step1.channel.label')}
                                </label>
                                <div className="grid grid-cols-2 gap-3">
                                    <button
                                        type="button"
                                        onClick={() => { setChannel('sms'); setError(''); }}
                                        className={`py-2.5 px-4 rounded-lg border-2 font-medium text-sm transition-all flex items-center justify-center gap-2 ${
                                            channel === 'sms'
                                                ? 'border-trust-blue bg-trust-blue/10 text-trust-blue'
                                                : 'border-gray-200 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:border-gray-300'
                                        }`}
                                    >
                                        <span className="material-symbols-outlined text-lg">sms</span>
                                        {t('forgotPassword.step1.channel.sms')}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => { setChannel('email'); setError(''); }}
                                        className={`py-2.5 px-4 rounded-lg border-2 font-medium text-sm transition-all flex items-center justify-center gap-2 ${
                                            channel === 'email'
                                                ? 'border-trust-blue bg-trust-blue/10 text-trust-blue'
                                                : 'border-gray-200 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:border-gray-300'
                                        }`}
                                    >
                                        <span className="material-symbols-outlined text-lg">email</span>
                                        {t('forgotPassword.step1.channel.email')}
                                    </button>
                                </div>
                            </div>

                            {/* Email Input (when channel = email) */}
                            {channel === 'email' && (
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        {t('forgotPassword.step1.email.label')}
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => { setEmail(e.target.value); setError(''); }}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indus-green focus:border-transparent outline-none transition-all"
                                        placeholder={t('forgotPassword.step1.email.placeholder')}
                                        autoComplete="email"
                                    />
                                </div>
                            )}

                            {/* Phone Input (when channel = sms) */}
                            {channel === 'sms' && (
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        {t('forgotPassword.step1.phone.label')}
                                    </label>
                                    <input
                                        type="tel"
                                        required
                                        value={phoneNumber}
                                        onChange={(e) => { setPhoneNumber(e.target.value); setError(''); }}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indus-green focus:border-transparent outline-none transition-all"
                                        placeholder={t('forgotPassword.step1.phone.placeholder')}
                                        autoComplete="tel"
                                    />
                                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                                        {t('forgotPassword.step1.phone.format')}
                                    </p>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full py-3 px-4 bg-indus-green hover:bg-indus-green/90 text-white font-bold rounded-lg transition-colors shadow-lg shadow-indus-green/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {isLoading ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        {t('forgotPassword.step1.submitting')}
                                    </>
                                ) : (
                                    <>
                                        <span className="material-symbols-outlined text-lg">send</span>
                                        {t('forgotPassword.step1.submit')}
                                    </>
                                )}
                            </button>
                        </form>
                    </>
                )}

                {/* ─── Step 2: Enter OTP + New Password ───────────── */}
                {step === 'enter_otp' && (
                    <>
                        <div className="text-center mb-6">
                            <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="material-symbols-outlined text-3xl text-trust-blue">
                                    {channel === 'sms' ? 'sms' : 'mark_email_read'}
                                </span>
                            </div>
                            <h1 className="text-2xl font-bold text-charcoal dark:text-off-white mb-2">
                                {t('forgotPassword.step2.title')}
                            </h1>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                {channel === 'sms'
                                    ? t('forgotPassword.step2.descriptionSms')
                                    : t('forgotPassword.step2.description')}
                                <strong>
                                    {channel === 'sms' ? maskPhone(phoneNumber) : maskEmail(email)}
                                </strong>
                            </p>
                        </div>

                        {error && (
                            <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 text-red-700 dark:text-red-400 text-sm rounded">
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleVerifyOTP} className="space-y-5">
                            {/* OTP Input */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                                    {t('forgotPassword.step2.otpLabel')}
                                </label>
                                <div className="flex gap-2 justify-center" onPaste={handleOtpPaste}>
                                    {otp.map((digit, index) => (
                                        <input
                                            key={index}
                                            ref={(el) => { otpRefs.current[index] = el; }}
                                            type="text"
                                            inputMode="numeric"
                                            maxLength={1}
                                            value={digit}
                                            onChange={(e) => handleOtpChange(index, e.target.value)}
                                            onKeyDown={(e) => handleOtpKeyDown(e, index)}
                                            className="w-12 h-14 text-center text-2xl font-bold border-2 rounded-lg
                                                       bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                                                       border-gray-300 dark:border-gray-600
                                                       focus:border-indus-green focus:ring-2 focus:ring-indus-green/30
                                                       outline-none transition-all"
                                        />
                                    ))}
                                </div>
                                <div className="text-center mt-3">
                                    {countdown > 0 ? (
                                        <p className="text-xs text-gray-500">
                                            {t('forgotPassword.step2.resendIn')} {formatCountdown(countdown)}
                                        </p>
                                    ) : (
                                        <button
                                            type="button"
                                            onClick={handleResendOTP}
                                            disabled={isLoading}
                                            className="text-xs text-indus-green hover:underline font-semibold disabled:opacity-50"
                                        >
                                            {t('forgotPassword.step2.resend')}
                                        </button>
                                    )}
                                </div>
                            </div>

                            <hr className="border-gray-200 dark:border-gray-700" />

                            {/* New Password */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    {t('forgotPassword.step2.newPassword.label')}
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        required
                                        value={newPassword}
                                        onChange={(e) => { setNewPassword(e.target.value); setError(''); }}
                                        className="w-full px-4 py-3 pe-12 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indus-green focus:border-transparent outline-none transition-all"
                                        placeholder={t('forgotPassword.step2.newPassword.placeholder')}
                                        minLength={8}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute end-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                    >
                                        <span className="material-symbols-outlined text-xl">
                                            {showPassword ? 'visibility_off' : 'visibility'}
                                        </span>
                                    </button>
                                </div>
                            </div>

                            {/* Confirm Password */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    {t('forgotPassword.step2.confirmPassword.label')}
                                </label>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    required
                                    value={confirmPassword}
                                    onChange={(e) => { setConfirmPassword(e.target.value); setError(''); }}
                                    className={`w-full px-4 py-3 rounded-lg border bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indus-green focus:border-transparent outline-none transition-all ${
                                        confirmPassword && confirmPassword !== newPassword
                                            ? 'border-red-400 dark:border-red-500'
                                            : confirmPassword && confirmPassword === newPassword
                                            ? 'border-green-400 dark:border-green-500'
                                            : 'border-gray-300 dark:border-gray-600'
                                    }`}
                                    placeholder={t('forgotPassword.step2.confirmPassword.placeholder')}
                                    minLength={8}
                                />
                                {confirmPassword && confirmPassword === newPassword && (
                                    <p className="mt-1 text-xs text-green-600 flex items-center gap-1">
                                        <span className="material-symbols-outlined text-sm">check_circle</span>
                                        {t('forgotPassword.step2.passwordsMatch')}
                                    </p>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full py-3 px-4 bg-indus-green hover:bg-indus-green/90 text-white font-bold rounded-lg transition-colors shadow-lg shadow-indus-green/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {isLoading ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        {t('forgotPassword.step2.submitting')}
                                    </>
                                ) : (
                                    <>
                                        <span className="material-symbols-outlined text-lg">lock_reset</span>
                                        {t('forgotPassword.step2.submit')}
                                    </>
                                )}
                            </button>

                            {/* Back to Step 1 */}
                            <button
                                type="button"
                                onClick={() => { setStep('enter_info'); setError(''); setOtp(['', '', '', '', '', '']); setNewPassword(''); setConfirmPassword(''); }}
                                className="w-full text-sm text-gray-500 dark:text-gray-400 hover:text-indus-green transition-colors"
                            >
                                {t('forgotPassword.step2.goBack')}
                            </button>
                        </form>
                    </>
                )}

                {/* ─── Step 3: Success ─────────────────────────────── */}
                {step === 'success' && (
                    <div className="text-center py-4">
                        <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                            <span className="material-symbols-outlined text-4xl text-green-600 dark:text-green-400">check_circle</span>
                        </div>
                        <h1 className="text-2xl font-bold text-charcoal dark:text-off-white mb-3">
                            {t('forgotPassword.step3.title')}
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400 mb-8">
                            {t('forgotPassword.step3.description')}
                        </p>
                        <Link
                            href="/login"
                            className="inline-flex items-center gap-2 px-8 py-3 bg-indus-green hover:bg-indus-green/90 text-white font-bold rounded-lg transition-colors shadow-lg shadow-indus-green/20"
                        >
                            <span className="material-symbols-outlined">login</span>
                            {t('forgotPassword.step3.loginButton')}
                        </Link>
                    </div>
                )}

                {/* Back to Login (always visible on steps 1 & 2) */}
                {step !== 'success' && (
                    <div className="mt-8 text-center">
                        <Link href="/login" className="text-gray-600 dark:text-gray-400 hover:text-indus-green dark:hover:text-indus-green font-medium flex items-center justify-center gap-2 text-sm">
                            <span className="material-symbols-outlined text-sm">arrow_back</span>
                            {t('forgotPassword.backToLogin')}
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
