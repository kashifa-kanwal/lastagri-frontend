'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { apiRequest } from '@/lib/api';
import {
    validateSupplierSignup,
    validatePassword,
    validateCNIC,
    validatePhoneNumber,
    validateUsername,
    validateEmail,
    validateBusinessName,
    FormErrors,
    PasswordStrength
} from '@/lib/validations';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const BUSINESS_TYPES = [
    { value: 'fertilizer', label: 'Fertilizer Supplier', icon: 'science' },
    { value: 'seeds', label: 'Seeds & Plants', icon: 'grass' },
    { value: 'pesticides', label: 'Pesticides & Chemicals', icon: 'pest_control' },
    { value: 'equipment', label: 'Farm Equipment', icon: 'agriculture' },
    { value: 'irrigation', label: 'Irrigation Systems', icon: 'water_drop' },
    { value: 'general', label: 'General Agricultural Supplies', icon: 'store' },
];

export default function SupplierSignup() {
    const router = useRouter();
    const { t } = useLanguage();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [fieldErrors, setFieldErrors] = useState<FormErrors>({});
    const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
    const [passwordStrength, setPasswordStrength] = useState<PasswordStrength | null>(null);
    const [phoneVerified, setPhoneVerified] = useState(false);
    const [otpSent, setOtpSent] = useState(false);
    const [otpCode, setOtpCode] = useState('');
    const [otpLoading, setOtpLoading] = useState(false);
    const [otpError, setOtpError] = useState('');
    const [otpCountdown, setOtpCountdown] = useState(0);
    const [otpMedium, setOtpMedium] = useState<'sms' | 'whatsapp'>('sms');
    const [formData, setFormData] = useState({
        business_name: '',
        owner_name: '',
        email: '',
        phone_number: '',
        cnic: '',
        address: '',
        location: '',
        business_type: '',
        username: '',
        password: '',
        confirm_password: ''
    });

    // Real-time password strength check
    useEffect(() => {
        if (formData.password) {
            setPasswordStrength(validatePassword(formData.password));
        } else {
            setPasswordStrength(null);
        }
    }, [formData.password]);

    // OTP countdown timer
    useEffect(() => {
        if (otpCountdown <= 0) return;
        const timer = setTimeout(() => setOtpCountdown(otpCountdown - 1), 1000);
        return () => clearTimeout(timer);
    }, [otpCountdown]);

    // Reset phone verification when phone number changes
    useEffect(() => {
        if (phoneVerified) {
            setPhoneVerified(false);
            setOtpSent(false);
            setOtpCode('');
            setOtpError('');
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formData.phone_number]);

    const handleSendOTP = async () => {
        setOtpError('');
        const phoneResult = validatePhoneNumber(formData.phone_number);
        if (!phoneResult.isValid) { setOtpError(phoneResult.error); return; }
        setOtpLoading(true);
        try {
            await apiRequest('/suppliers/send-phone-otp', {
                method: 'POST',
                body: JSON.stringify({ phone_number: formData.phone_number, user_type: 'supplier', medium: otpMedium })
            });
            setOtpSent(true);
            setOtpCountdown(60);
        } catch (err: any) { setOtpError(err.message || 'Failed to send OTP'); } finally { setOtpLoading(false); }
    };

    const handleVerifyOTP = async () => {
        setOtpError('');
        if (otpCode.length !== 6) { setOtpError('Enter all 6 digits'); return; }
        setOtpLoading(true);
        try {
            await apiRequest('/suppliers/verify-phone-otp', {
                method: 'POST',
                body: JSON.stringify({ phone_number: formData.phone_number, otp_code: otpCode, user_type: 'supplier' })
            });
            setPhoneVerified(true);
            setOtpSent(false);
            setOtpError('');
        } catch (err: any) { setOtpError(err.message || 'Invalid OTP'); } finally { setOtpLoading(false); }
    };

    // Format CNIC as user types
    const formatCNIC = (value: string) => {
        const digits = value.replace(/\D/g, '').slice(0, 13);
        if (digits.length <= 5) return digits;
        if (digits.length <= 12) return `${digits.slice(0, 5)}-${digits.slice(5)}`;
        return `${digits.slice(0, 5)}-${digits.slice(5, 12)}-${digits.slice(12)}`;
    };

    // Format phone number as user types
    const formatPhone = (value: string) => {
        return value.replace(/\D/g, '').slice(0, 11);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        let formattedValue = value;

        // Apply formatting
        if (name === 'cnic') {
            formattedValue = formatCNIC(value);
        } else if (name === 'phone_number') {
            formattedValue = formatPhone(value);
        } else if (name === 'username') {
            formattedValue = value.toLowerCase().replace(/[^a-z0-9_]/g, '');
        } else if (name === 'email') {
            formattedValue = value.toLowerCase().trim();
        }

        setFormData(prev => ({ ...prev, [name]: formattedValue }));

        // Clear field error when user starts typing
        if (fieldErrors[name]) {
            setFieldErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name } = e.target;
        setTouched(prev => ({ ...prev, [name]: true }));

        // Validate single field on blur
        const errors = validateSupplierSignup(formData);
        if (errors[name]) {
            setFieldErrors(prev => ({ ...prev, [name]: errors[name] }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!phoneVerified) {
            setError(t('signup.supplier.contactInfo.phone.mustVerify'));
            return;
        }

        // Validate all fields
        const errors = validateSupplierSignup(formData);

        if (Object.keys(errors).length > 0) {
            setFieldErrors(errors);
            setTouched(Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {}));
            setError('Please fix the errors below before submitting.');
            return;
        }

        setIsLoading(true);

        try {
            await apiRequest('/suppliers/signup', {
                method: 'POST',
                body: JSON.stringify({
                    business_name: formData.business_name.trim(),
                    owner_name: formData.owner_name.trim() || null,
                    email: formData.email.trim().toLowerCase(),
                    phone_number: formData.phone_number,
                    cnic: formData.cnic || null,
                    address: formData.address.trim() || null,
                    location: formData.location.trim() || null,
                    business_type: formData.business_type || null,
                    username: formData.username,
                    password: formData.password
                })
            });

            router.push('/login?role=supplier&registered=true');
        } catch (err: any) {
            setError(err.message || 'Registration failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const getInputClassName = (fieldName: string) => {
        const baseClass = "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-trust-blue/50 focus:border-trust-blue outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 transition-colors";
        if (touched[fieldName] && fieldErrors[fieldName]) {
            return `${baseClass} border-red-500 dark:border-red-500`;
        }
        if (touched[fieldName] && !fieldErrors[fieldName] && formData[fieldName as keyof typeof formData]) {
            return `${baseClass} border-green-500 dark:border-green-500`;
        }
        return `${baseClass} border-gray-300 dark:border-gray-600`;
    };

    const getStrengthColor = (strength: string) => {
        switch (strength) {
            case 'strong': return 'bg-green-500';
            case 'medium': return 'bg-yellow-500';
            default: return 'bg-red-500';
        }
    };

    return (
        <div className="min-h-screen bg-off-white dark:bg-background-dark py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
            <div className="max-w-4xl w-full bg-white dark:bg-container-dark rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">

                {/* Visual Side */}
                <div className="md:w-5/12 bg-trust-blue p-8 flex flex-col justify-between text-white relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
                        </svg>
                    </div>

                    <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-8">
                            <span className="material-symbols-outlined text-3xl">store</span>
                            <span className="text-2xl font-bold tracking-tight">{t('signup.supplier.visual.title')}</span>
                        </div>
                        <h2 className="text-3xl font-bold mb-4">{t('signup.supplier.visual.heading')}</h2>
                        <p className="text-white/80 mb-6">{t('signup.supplier.visual.description')}</p>
                        <ul className="space-y-4 opacity-90">
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-yellow-300">verified</span>
                                <span>{t('signup.supplier.visual.benefit1')}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-yellow-300">verified</span>
                                <span>{t('signup.supplier.visual.benefit2')}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-yellow-300">verified</span>
                                <span>{t('signup.supplier.visual.benefit3')}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-yellow-300">verified</span>
                                <span>{t('signup.supplier.visual.benefit4')}</span>
                            </li>
                        </ul>
                    </div>

                    <div className="relative z-10 mt-12">
                        <p className="text-sm opacity-75">{t('signup.supplier.visual.accountExists')}</p>
                        <Link href="/login?role=supplier" className="inline-block mt-2 px-6 py-2 border-2 border-white rounded-lg font-semibold hover:bg-white hover:text-trust-blue transition-colors">
                            {t('signup.supplier.visual.signIn')}
                        </Link>
                    </div>
                </div>

                {/* Form Side */}
                <div className="md:w-7/12 p-8 lg:p-12 overflow-y-auto max-h-[90vh]">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">{t('signup.supplier.form.title')}</h2>

                    {error && (
                        <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 text-red-700 dark:text-red-400 flex items-start gap-2 rounded">
                            <span className="material-symbols-outlined text-xl">error</span>
                            <span className="text-sm">{error}</span>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Business Info */}
                        <div>
                            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">{t('signup.supplier.businessInfo.section')}</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Business Name */}
                                <div className="col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        {t('signup.supplier.businessInfo.name.label')} <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        name="business_name"
                                        type="text"
                                        required
                                        value={formData.business_name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={getInputClassName('business_name')}
                                        placeholder={t('signup.supplier.businessInfo.name.placeholder')}
                                    />
                                    {touched.business_name && fieldErrors.business_name && (
                                        <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                                            <span className="material-symbols-outlined text-sm">error</span>
                                            {fieldErrors.business_name}
                                        </p>
                                    )}
                                </div>

                                {/* Business Type */}
                                <div className="col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        {t('signup.supplier.businessInfo.type.label')} <span className="text-red-500">*</span>
                                    </label>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                                        {BUSINESS_TYPES.map((type) => (
                                            <button
                                                key={type.value}
                                                type="button"
                                                onClick={() => {
                                                    setFormData(prev => ({ ...prev, business_type: type.value }));
                                                    setTouched(prev => ({ ...prev, business_type: true }));
                                                    if (fieldErrors.business_type) {
                                                        setFieldErrors(prev => ({ ...prev, business_type: '' }));
                                                    }
                                                }}
                                                className={`p-3 rounded-lg border-2 transition-all flex flex-col items-center gap-1 ${
                                                    formData.business_type === type.value
                                                        ? 'border-trust-blue bg-trust-blue/10 text-trust-blue'
                                                        : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 text-gray-600 dark:text-gray-400'
                                                }`}
                                            >
                                                <span className="material-symbols-outlined">{type.icon}</span>
                                                <span className="text-xs font-medium text-center">{t(`signup.supplier.businessInfo.type.${type.value}`)}</span>
                                            </button>
                                        ))}
                                    </div>
                                    {touched.business_type && fieldErrors.business_type && (
                                        <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                                            <span className="material-symbols-outlined text-sm">error</span>
                                            {fieldErrors.business_type}
                                        </p>
                                    )}
                                </div>

                                {/* Owner Name */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        {t('signup.supplier.businessInfo.owner.label')}
                                    </label>
                                    <input
                                        name="owner_name"
                                        type="text"
                                        value={formData.owner_name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={getInputClassName('owner_name')}
                                        placeholder={t('signup.supplier.businessInfo.owner.placeholder')}
                                    />
                                    {touched.owner_name && fieldErrors.owner_name && (
                                        <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                                            <span className="material-symbols-outlined text-sm">error</span>
                                            {fieldErrors.owner_name}
                                        </p>
                                    )}
                                </div>

                                {/* CNIC */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        {t('signup.supplier.businessInfo.cnic.label')}
                                    </label>
                                    <input
                                        name="cnic"
                                        type="text"
                                        value={formData.cnic}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={getInputClassName('cnic')}
                                        placeholder={t('signup.supplier.businessInfo.cnic.placeholder')}
                                        maxLength={15}
                                    />
                                    {touched.cnic && fieldErrors.cnic && (
                                        <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                                            <span className="material-symbols-outlined text-sm">error</span>
                                            {fieldErrors.cnic}
                                        </p>
                                    )}
                                    <p className="mt-1 text-xs text-gray-400">{t('signup.supplier.businessInfo.cnic.format')}</p>
                                </div>
                            </div>
                        </div>

                        <hr className="border-gray-200 dark:border-gray-700" />

                        {/* Contact Info */}
                        <div>
                            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">{t('signup.supplier.contactInfo.section')}</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Email */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        {t('signup.supplier.contactInfo.email.label')} <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        name="email"
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={getInputClassName('email')}
                                        placeholder={t('signup.supplier.contactInfo.email.placeholder')}
                                    />
                                    {touched.email && fieldErrors.email && (
                                        <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                                            <span className="material-symbols-outlined text-sm">error</span>
                                            {fieldErrors.email}
                                        </p>
                                    )}
                                </div>

                                {/* Phone Number with OTP */}
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        {t('signup.supplier.contactInfo.phone.label')} <span className="text-red-500">*</span>
                                    </label>

                                    {/* SMS / WhatsApp Medium Selector */}
                                    {!phoneVerified && (
                                        <div className="flex gap-2 mb-2">
                                            <button
                                                type="button"
                                                onClick={() => setOtpMedium('sms')}
                                                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full border transition-colors ${
                                                    otpMedium === 'sms'
                                                        ? 'bg-trust-blue text-white border-trust-blue'
                                                        : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-trust-blue'
                                                }`}
                                            >
                                                <span className="material-symbols-outlined text-sm">sms</span>
                                                {t('signup.supplier.contactInfo.phone.viaSms')}
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setOtpMedium('whatsapp')}
                                                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full border transition-colors ${
                                                    otpMedium === 'whatsapp'
                                                        ? 'bg-green-600 text-white border-green-600'
                                                        : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-green-600'
                                                }`}
                                            >
                                                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.616l4.573-1.452A11.949 11.949 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.239 0-4.308-.724-5.993-1.953l-.42-.305-2.715.862.883-2.638-.336-.433A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
                                                {t('signup.supplier.contactInfo.phone.viaWhatsapp')}
                                            </button>
                                        </div>
                                    )}

                                    <div className="flex gap-2">
                                        <input
                                            name="phone_number"
                                            type="tel"
                                            required
                                            value={formData.phone_number}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            disabled={phoneVerified}
                                            className={`flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-trust-blue/50 focus:border-trust-blue outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 transition-colors ${
                                                phoneVerified ? 'border-green-500 bg-green-50 dark:bg-green-900/10' :
                                                touched.phone_number && fieldErrors.phone_number ? 'border-red-500' :
                                                'border-gray-300 dark:border-gray-600'
                                            }`}
                                            placeholder={t('signup.supplier.contactInfo.phone.placeholder')}
                                            maxLength={11}
                                        />
                                        {!phoneVerified && !otpSent && (
                                            <button type="button" onClick={handleSendOTP} disabled={otpLoading || formData.phone_number.length < 11}
                                                className="px-4 py-2 bg-trust-blue text-white text-sm font-semibold rounded-lg hover:bg-trust-blue/90 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap">
                                                {otpLoading ? '...' : t('signup.supplier.contactInfo.phone.sendOtp')}
                                            </button>
                                        )}
                                        {phoneVerified && (
                                            <div className="flex items-center px-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                                                <span className="material-symbols-outlined text-green-600 text-xl">verified</span>
                                            </div>
                                        )}
                                    </div>
                                    {otpSent && !phoneVerified && (
                                        <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/10 rounded-lg border border-blue-200 dark:border-blue-800">
                                            <p className="text-xs text-blue-700 dark:text-blue-300 mb-2">{t('signup.supplier.contactInfo.phone.otpSent')}</p>
                                            <div className="flex gap-2">
                                                <input type="text" inputMode="numeric" maxLength={6} value={otpCode}
                                                    onChange={(e) => setOtpCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                                                    className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-center text-lg font-bold tracking-widest"
                                                    placeholder="000000" />
                                                <button type="button" onClick={handleVerifyOTP} disabled={otpLoading || otpCode.length !== 6}
                                                    className="px-4 py-2 bg-trust-blue text-white text-sm font-semibold rounded-lg hover:bg-trust-blue/90 disabled:opacity-50 disabled:cursor-not-allowed">
                                                    {otpLoading ? '...' : t('signup.supplier.contactInfo.phone.verifyOtp')}
                                                </button>
                                            </div>
                                            <div className="flex justify-between mt-2">
                                                {otpCountdown > 0 ? (
                                                    <p className="text-xs text-gray-500">{t('signup.supplier.contactInfo.phone.resendIn')} {otpCountdown}s</p>
                                                ) : (
                                                    <button type="button" onClick={handleSendOTP} disabled={otpLoading} className="text-xs text-trust-blue font-semibold hover:underline">
                                                        {t('signup.supplier.contactInfo.phone.resend')}
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                    {otpError && (
                                        <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                                            <span className="material-symbols-outlined text-sm">error</span>
                                            {otpError}
                                        </p>
                                    )}
                                    {touched.phone_number && fieldErrors.phone_number && !otpError && (
                                        <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                                            <span className="material-symbols-outlined text-sm">error</span>
                                            {fieldErrors.phone_number}
                                        </p>
                                    )}
                                    {phoneVerified && (
                                        <p className="mt-1 text-xs text-green-600 flex items-center gap-1">
                                            <span className="material-symbols-outlined text-sm">check_circle</span>
                                            {t('signup.supplier.contactInfo.phone.verified')}
                                        </p>
                                    )}
                                    <p className="mt-1 text-xs text-gray-400">{t('signup.supplier.contactInfo.phone.format')}</p>
                                </div>

                                {/* Location */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        {t('signup.supplier.contactInfo.location.label')}
                                    </label>
                                    <input
                                        name="location"
                                        type="text"
                                        value={formData.location}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={getInputClassName('location')}
                                        placeholder={t('signup.supplier.contactInfo.location.placeholder')}
                                    />
                                    {touched.location && fieldErrors.location && (
                                        <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                                            <span className="material-symbols-outlined text-sm">error</span>
                                            {fieldErrors.location}
                                        </p>
                                    )}
                                </div>

                                {/* Address */}
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        {t('signup.supplier.contactInfo.address.label')}
                                    </label>
                                    <textarea
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={getInputClassName('address')}
                                        placeholder={t('signup.supplier.contactInfo.address.placeholder')}
                                        rows={2}
                                    />
                                    {touched.address && fieldErrors.address && (
                                        <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                                            <span className="material-symbols-outlined text-sm">error</span>
                                            {fieldErrors.address}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>

                        <hr className="border-gray-200 dark:border-gray-700" />

                        {/* Account Access */}
                        <div>
                            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">{t('signup.supplier.accountAccess.section')}</h3>
                            <div className="space-y-4">
                                {/* Username */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        {t('signup.supplier.accountAccess.username.label')} <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        name="username"
                                        type="text"
                                        required
                                        value={formData.username}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={getInputClassName('username')}
                                        placeholder={t('signup.supplier.accountAccess.username.placeholder')}
                                        maxLength={20}
                                    />
                                    {touched.username && fieldErrors.username && (
                                        <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                                            <span className="material-symbols-outlined text-sm">error</span>
                                            {fieldErrors.username}
                                        </p>
                                    )}
                                    <p className="mt-1 text-xs text-gray-400">{t('signup.supplier.accountAccess.username.hint')}</p>
                                </div>

                                {/* Passwords */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            {t('signup.supplier.accountAccess.password.label')} <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            name="password"
                                            type="password"
                                            required
                                            value={formData.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={getInputClassName('password')}
                                            placeholder={t('signup.supplier.accountAccess.password.placeholder')}
                                        />
                                        {touched.password && fieldErrors.password && (
                                            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                                                <span className="material-symbols-outlined text-sm">error</span>
                                                {fieldErrors.password}
                                            </p>
                                        )}
                                        {/* Password Strength Indicator */}
                                        {passwordStrength && formData.password && (
                                            <div className="mt-2">
                                                <div className="flex gap-1 mb-1">
                                                    <div className={`h-1 flex-1 rounded ${passwordStrength.score >= 1 ? getStrengthColor(passwordStrength.strength) : 'bg-gray-200'}`}></div>
                                                    <div className={`h-1 flex-1 rounded ${passwordStrength.score >= 3 ? getStrengthColor(passwordStrength.strength) : 'bg-gray-200'}`}></div>
                                                    <div className={`h-1 flex-1 rounded ${passwordStrength.score >= 5 ? getStrengthColor(passwordStrength.strength) : 'bg-gray-200'}`}></div>
                                                </div>
                                                <p className={`text-xs ${passwordStrength.strength === 'strong' ? 'text-green-600' : passwordStrength.strength === 'medium' ? 'text-yellow-600' : 'text-red-600'}`}>
                                                    {t('signup.supplier.accountAccess.passwordStrength')}{passwordStrength.strength}
                                                </p>
                                                {passwordStrength.suggestions.length > 0 && (
                                                    <p className="text-xs text-gray-400 mt-1">
                                                        {t('signup.supplier.accountAccess.passwordTip')}{passwordStrength.suggestions[0]}
                                                    </p>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            {t('signup.supplier.accountAccess.confirmPassword.label')} <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            name="confirm_password"
                                            type="password"
                                            required
                                            value={formData.confirm_password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={getInputClassName('confirm_password')}
                                            placeholder={t('signup.supplier.accountAccess.confirmPassword.placeholder')}
                                        />
                                        {touched.confirm_password && fieldErrors.confirm_password && (
                                            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                                                <span className="material-symbols-outlined text-sm">error</span>
                                                {fieldErrors.confirm_password}
                                            </p>
                                        )}
                                        {formData.confirm_password && formData.password === formData.confirm_password && (
                                            <p className="mt-1 text-xs text-green-600 flex items-center gap-1">
                                                <span className="material-symbols-outlined text-sm">check_circle</span>
                                                {t('signup.supplier.accountAccess.confirmPassword.match')}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Terms Notice */}
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                            {t('signup.supplier.terms')}{' '}
                            <Link href="/terms" className="text-trust-blue hover:underline">{t('signup.supplier.terms.service')}</Link>
                            {' '}{t('signup.supplier.terms.and')}{' '}
                            <Link href="/privacy-policy" className="text-trust-blue hover:underline">{t('signup.supplier.terms.privacy')}</Link>
                        </p>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-trust-blue text-white py-3 rounded-xl font-bold text-lg hover:bg-trust-blue/90 transition-all shadow-lg shadow-trust-blue/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {isLoading ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    {t('signup.supplier.submit.loading')}
                                </>
                            ) : (
                                <>
                                    <span className="material-symbols-outlined">storefront</span>
                                    {t('signup.supplier.submit.button')}
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
