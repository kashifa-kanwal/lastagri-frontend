'use client';

import Link from 'next/link';
import { useAuth } from '@/lib/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function Home() {
  const { isAuthenticated, user } = useAuth();
  const router = useRouter();
  const { t } = useLanguage();

  useEffect(() => {
    // Redirect to appropriate dashboard if already logged in
    if (isAuthenticated && user) {
      if (user.role === 'farmer') {
        router.push('/farmer/dashboard');
      } else if (user.role === 'supplier') {
        router.push('/supplier/dashboard');
      } else if (user.role === 'admin') {
        router.push('/admin/dashboard');
      }
    }
  }, [isAuthenticated, user, router]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-indus-green via-primary to-trust-blue text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-black mb-6 font-urdu">
              {t('home.title')}
            </h1>
            <p className="text-xl sm:text-2xl mb-4">
              {t('home.hero.tagline')}
            </p>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
              {t('home.hero.description')}
            </p>
          </div>
        </div>
      </div>

      {/* Role Selection */}
      <div className="flex-1 bg-off-white dark:bg-background-dark py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal dark:text-off-white mb-4">
              {t('home.roleSelection.title')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {t('home.roleSelection.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Farmer Portal */}
            <Link href="/login?role=farmer" className="group">
              <div className="bg-white dark:bg-charcoal/20 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-indus-green">
                <div className="w-20 h-20 bg-indus-green/10 dark:bg-indus-green/20 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-5xl text-indus-green">
                    agriculture
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-center mb-3 text-charcoal dark:text-off-white">
                  {t('home.farmerPortal.title')}
                </h3>
                <p className="text-center text-gray-600 dark:text-gray-400 mb-6 font-urdu">
                  کسان پورٹل
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-indus-green text-sm mt-0.5">check_circle</span>
                    <span>{t('home.farmerPortal.benefit1')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-indus-green text-sm mt-0.5">check_circle</span>
                    <span>{t('home.farmerPortal.benefit2')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-indus-green text-sm mt-0.5">check_circle</span>
                    <span>{t('home.farmerPortal.benefit3')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-indus-green text-sm mt-0.5">check_circle</span>
                    <span>{t('home.farmerPortal.benefit4')}</span>
                  </li>
                </ul>
                <div className="mt-6 text-center">
                  <span className="text-indus-green font-semibold group-hover:underline">
                    {t('home.farmerPortal.cta')} →
                  </span>
                </div>
              </div>
            </Link>

            {/* Supplier Portal */}
            <Link href="/login?role=supplier" className="group">
              <div className="bg-white dark:bg-charcoal/20 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-trust-blue">
                <div className="w-20 h-20 bg-trust-blue/10 dark:bg-trust-blue/20 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-5xl text-trust-blue">
                    store
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-center mb-3 text-charcoal dark:text-off-white">
                  {t('home.supplierPortal.title')}
                </h3>
                <p className="text-center text-gray-600 dark:text-gray-400 mb-6 font-urdu">
                  سپلائر پورٹل
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-trust-blue text-sm mt-0.5">check_circle</span>
                    <span>{t('home.supplierPortal.benefit1')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-trust-blue text-sm mt-0.5">check_circle</span>
                    <span>{t('home.supplierPortal.benefit2')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-trust-blue text-sm mt-0.5">check_circle</span>
                    <span>{t('home.supplierPortal.benefit3')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-trust-blue text-sm mt-0.5">check_circle</span>
                    <span>{t('home.supplierPortal.benefit4')}</span>
                  </li>
                </ul>
                <div className="mt-6 text-center">
                  <span className="text-trust-blue font-semibold group-hover:underline">
                    {t('home.supplierPortal.cta')} →
                  </span>
                </div>
              </div>
            </Link>

            {/* Admin Portal */}
            <Link href="/login?role=admin" className="group">
              <div className="bg-white dark:bg-charcoal/20 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary">
                <div className="w-20 h-20 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-5xl text-primary">
                    admin_panel_settings
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-center mb-3 text-charcoal dark:text-off-white">
                  {t('home.adminPortal.title')}
                </h3>
                <p className="text-center text-gray-600 dark:text-gray-400 mb-6 font-urdu">
                  ایڈمن پورٹل
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                    <span>{t('home.adminPortal.benefit1')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                    <span>{t('home.adminPortal.benefit2')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                    <span>{t('home.adminPortal.benefit3')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                    <span>{t('home.adminPortal.benefit4')}</span>
                  </li>
                </ul>
                <div className="mt-6 text-center">
                  <span className="text-primary font-semibold group-hover:underline">
                    {t('home.adminPortal.cta')} →
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Features */}
          <div className="mt-20 pt-16 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-center mb-12 text-charcoal dark:text-off-white">
              {t('home.features.title')}
            </h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-indus-green/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="material-symbols-outlined text-3xl text-indus-green">payments</span>
                </div>
                <h4 className="font-semibold mb-2">{t('home.features.flexible.title')}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{t('home.features.flexible.description')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-indus-green/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="material-symbols-outlined text-3xl text-indus-green">verified_user</span>
                </div>
                <h4 className="font-semibold mb-2">{t('home.features.trusted.title')}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{t('home.features.trusted.description')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-indus-green/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="material-symbols-outlined text-3xl text-indus-green">support_agent</span>
                </div>
                <h4 className="font-semibold mb-2">{t('home.features.support.title')}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-urdu">اردو میں مدد</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-indus-green/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="material-symbols-outlined text-3xl text-indus-green">trending_up</span>
                </div>
                <h4 className="font-semibold mb-2">{t('home.features.grow.title')}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{t('home.features.grow.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
