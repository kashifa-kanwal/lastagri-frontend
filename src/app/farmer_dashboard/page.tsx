'use client';

import React, { useEffect } from 'react';
import { useAuth } from '@/lib/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Farmer } from '@/types';

export default function Page() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isLoading, isAuthenticated, router]);

  if (isLoading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-off-white dark:bg-background-dark">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indus-green"></div>
      </div>
    );
  }

  const farmer = user as Farmer;

  // Calculate percentage for gauge
  const creditLimit = farmer.creditLimit || 100000;
  const availableCredit = farmer.availableCredit || 0;
  // Ensure we don't divide by zero and clamp between 0 and 1
  const percentage = Math.min(Math.max((availableCredit / creditLimit), 0), 1);

  // Calculate stroke-dasharray for gauge (total length is approx 126 for half circle r=40 in viewBox)
  // Standard SVG gauge logic (simple version)
  // Let's stick to the existing visual but update the numbers. 
  // The existing SVG uses path d="M 10 90 A 80 80 0 0 1 190 90" which is a 180 degree arc. radius 80.
  // Arc length = PI * r = 3.14159 * 80 ≈ 251.
  // The green path is the available credit. 
  // We need to calculate the end point for the green arc based on percentage.

  // Easier approach for now: Just update the text values, keeping the static gauge visual as a placeholder or simple logic
  // if we want to be fancy we can calculate the arc. 
  // Let's just update text first to ensure data integration.

  return (
    <>
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          {/* TopNavBar */}
          <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#eaf0ea] dark:border-b-gray-800 px-6 sm:px-10 py-3 bg-white dark:bg-charcoal/20">
            <div className="flex items-center gap-2">
              <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-[#eaf0ea] dark:bg-gray-700/50 text-charcoal dark:text-off-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 relative">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-alert-red"></span>
              </button>
            </div>
            <div className="flex items-center gap-4 text-charcoal dark:text-off-white">
              <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] text-center font-urdu">AgriConnect</h2>
            </div>
            <div className="flex">
              <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-[#eaf0ea] dark:bg-gray-700/50 text-charcoal dark:text-off-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                <span className="material-symbols-outlined">menu</span>
              </button>
            </div>
          </header>
          <div className="px-4 sm:px-10 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-4xl w-full flex-1 gap-8">
              {/* HeadlineText */}
              <h1 className="text-charcoal dark:text-off-white tracking-light text-2xl sm:text-3xl font-bold leading-tight px-4 text-center pb-3 pt-6 font-urdu">
                السلام عليكم، {farmer.name}
              </h1>
              {/* Credit Gauge Section */}
              <div className="bg-white dark:bg-charcoal/20 rounded-xl shadow-sm p-6 sm:p-8 flex flex-col items-center">
                <div className="relative w-full max-w-sm h-48 mb-4">
                  <svg className="w-full h-full" viewBox="0 0 200 100">
                    {/* Background Arc (Red - Used) */}
                    <path d="M 10 90 A 80 80 0 0 1 190 90" fill="none" stroke="#D9534F" strokeLinecap="round" strokeWidth="20"></path>
                    {/* Foreground Arc (Green - Available) - Simple approximation for visual */}
                    <path d="M 10 90 A 80 80 0 0 1 143.2 25.3" fill="none" stroke="#2A7F62" strokeLinecap="round" strokeWidth="20"></path>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-end pb-2">
                    <p className="font-urdu text-lg font-bold text-charcoal dark:text-off-white">دستیاب سہولت</p>
                    <p className="text-4xl font-black text-indus-green">{availableCredit.toLocaleString()}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">PKR</p>
                  </div>
                </div>
                <p className="text-charcoal/80 dark:text-off-white/80 text-base font-medium font-urdu">
                  کل حد: {creditLimit.toLocaleString()} PKR
                </p>
              </div>
              {/* Crop Cycle Timeline */}
              <div className="bg-white dark:bg-charcoal/20 rounded-xl shadow-sm p-6">
                <h3 className="font-urdu text-lg font-bold mb-6 text-center">فصل کا دورانیہ</h3>
                <div className="grid grid-cols-4 gap-2 items-start relative">
                  {/* Timeline line */}
                  <div className="absolute top-5 left-0 w-full h-0.5 bg-gray-300 dark:bg-gray-600"></div>
                  <div className="absolute top-5 left-0 w-1/2 h-0.5 bg-indus-green"></div>
                  <div className="flex flex-col items-center text-center gap-2 relative z-10">
                    <div className="size-10 rounded-full bg-indus-green flex items-center justify-center text-white">
                      <span className="material-symbols-outlined">check</span>
                    </div>
                    <p className="font-urdu text-sm font-medium">زمین کی تیاری</p>
                  </div>
                  <div className="flex flex-col items-center text-center gap-2 relative z-10">
                    <div className="size-10 rounded-full bg-indus-green flex items-center justify-center text-white">
                      <span className="material-symbols-outlined">check</span>
                    </div>
                    <p className="font-urdu text-sm font-medium">بوائی</p>
                  </div>
                  <div className="flex flex-col items-center text-center gap-2 relative z-10">
                    <div className="size-10 rounded-full bg-trust-blue ring-4 ring-trust-blue/20 flex items-center justify-center text-white">
                      <span className="material-symbols-outlined animate-pulse">energy_savings_leaf</span>
                    </div>
                    <p className="font-urdu text-sm font-bold text-trust-blue">نشوونما</p>
                  </div>
                  <div className="flex flex-col items-center text-center gap-2 relative z-10 opacity-50">
                    <div className="size-10 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center text-charcoal dark:text-off-white">
                      <span className="material-symbols-outlined">agriculture</span>
                    </div>
                    <p className="font-urdu text-sm font-medium">کٹائی</p>
                  </div>
                </div>
              </div>
              {/* Quick Actions Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href="/marketplace_browsing" className="flex flex-col gap-3 p-4 bg-white dark:bg-charcoal/20 rounded-xl shadow-sm items-center text-center cursor-pointer hover:bg-gray-50 dark:hover:bg-charcoal/30 transition-colors group">
                  <div className="w-16 h-16 bg-indus-green/10 dark:bg-indus-green/20 rounded-full flex items-center justify-center group-hover:bg-indus-green/20 transition-colors">
                    <span className="material-symbols-outlined text-3xl text-indus-green">store</span>
                  </div>
                  <div>
                    <p className="text-charcoal dark:text-off-white text-base font-bold leading-normal font-urdu">خریداری</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">Marketplace</p>
                  </div>
                </Link>
                <Link href="/wallet_dashboard" className="flex flex-col gap-3 p-4 bg-white dark:bg-charcoal/20 rounded-xl shadow-sm items-center text-center cursor-pointer hover:bg-gray-50 dark:hover:bg-charcoal/30 transition-colors group">
                  <div className="w-16 h-16 bg-trust-blue/10 dark:bg-trust-blue/20 rounded-full flex items-center justify-center group-hover:bg-trust-blue/20 transition-colors">
                    <span className="material-symbols-outlined text-3xl text-trust-blue">account_balance_wallet</span>
                  </div>
                  <div>
                    <p className="text-charcoal dark:text-off-white text-base font-bold leading-normal font-urdu">میرا بٹوا</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">Wallet</p>
                  </div>
                </Link>
                <Link href="/agricultural_weather_dashboard" className="flex flex-col gap-3 p-4 bg-white dark:bg-charcoal/20 rounded-xl shadow-sm items-center text-center cursor-pointer hover:bg-gray-50 dark:hover:bg-charcoal/30 transition-colors group">
                  <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <span className="material-symbols-outlined text-3xl text-primary">partly_cloudy_day</span>
                  </div>
                  <div>
                    <p className="text-charcoal dark:text-off-white text-base font-bold leading-normal font-urdu">موسم</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">Weather</p>
                  </div>
                </Link>
                <Link href="/community_home_feed" className="flex flex-col gap-3 p-4 bg-white dark:bg-charcoal/20 rounded-xl shadow-sm items-center text-center cursor-pointer hover:bg-gray-50 dark:hover:bg-charcoal/30 transition-colors group">
                  <div className="w-16 h-16 bg-indus-green/10 dark:bg-indus-green/20 rounded-full flex items-center justify-center group-hover:bg-indus-green/20 transition-colors">
                    <span className="material-symbols-outlined text-3xl text-indus-green">support_agent</span>
                  </div>
                  <div>
                    <p className="text-charcoal dark:text-off-white text-base font-bold leading-normal font-urdu">معاونت</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">Support</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
