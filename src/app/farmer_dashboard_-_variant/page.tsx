
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="relative flex min-h-screen w-full">
{/* SideNavBar */}
<aside className="flex h-screen w-64 flex-col justify-between bg-surface-white dark:bg-background-dark border-r border-light-gray/50 dark:border-charcoal-gray/50 p-4">
<div className="flex flex-col gap-8">
<div className="flex items-center gap-3 px-2">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="AgriConnect logo with green and gray colors"></div>
<div className="flex flex-col">
<h1 className="text-charcoal-gray dark:text-surface-white text-base font-bold leading-normal">AgriConnect</h1>
<p className="text-indus-green dark:text-primary/70 text-sm font-normal leading-normal">BNPL Platform</p>
</div>
</div>
<nav className="flex flex-col gap-2">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/20 dark:bg-primary/30 text-indus-green dark:text-primary" href="#">
<span className="material-symbols-outlined fill text-2xl">home</span>
<p className="text-charcoal-gray dark:text-surface-white text-sm font-medium leading-normal">Home</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5" href="#">
<span className="material-symbols-outlined text-2xl">list_alt</span>
<p className="text-charcoal-gray dark:text-surface-white text-sm font-medium leading-normal">Orders</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5" href="#">
<span className="material-symbols-outlined text-2xl">account_balance_wallet</span>
<p className="text-charcoal-gray dark:text-surface-white text-sm font-medium leading-normal">Wallet</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5" href="#">
<span className="material-symbols-outlined text-2xl">person</span>
<p className="text-charcoal-gray dark:text-surface-white text-sm font-medium leading-normal">Profile</p>
</a>
</nav>
</div>
</aside>
{/* Main Content */}
<div className="flex flex-1 flex-col">
{/* TopNavBar */}
<header className="flex items-center justify-between whitespace-nowrap border-b border-light-gray/50 dark:border-charcoal-gray/50 px-8 py-4 bg-surface-white dark:bg-background-dark">
<div className="flex items-center gap-4">
<button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-charcoal-gray dark:text-surface-white hover:bg-black/5 dark:hover:bg-white/5">
<span className="material-symbols-outlined text-2xl">menu</span>
</button>
</div>
<div className="flex items-center gap-4 text-charcoal-gray dark:text-surface-white">
<h2 className="text-lg font-bold leading-tight tracking-[-0.015em] font-urdu" dir="rtl">،عبدالله اسلام علیکم</h2>
<div className="relative">
<button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-charcoal-gray dark:text-surface-white hover:bg-black/5 dark:hover:bg-white/5">
<span className="material-symbols-outlined text-2xl">notifications</span>
</button>
<div className="absolute top-1 right-1 h-2.5 w-2.5 rounded-full bg-alert-red border-2 border-surface-white dark:border-background-dark"></div>
</div>
</div>
</header>
{/* Page Content */}
<main className="flex-1 overflow-y-auto p-8">
<div className="mx-auto max-w-4xl">
{/* Hero Component: Credit Gauge */}
<div className="relative w-full aspect-[2/1] max-w-lg mx-auto mb-8">
<svg className="w-full h-full" viewBox="0 0 100 50">
<defs>
<lineargradient id="gaugeGradient" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%"></stop>
<stop offset="50%"></stop>
<stop offset="100%"></stop>
</lineargradient>
</defs>
<path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#E5E4E2" strokeLinecap="round" strokeWidth="8"></path>
<path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="url(#gaugeGradient)" stroke-dasharray="125.66" stroke-dashoffset="25.13" strokeLinecap="round" strokeWidth="8"></path>
</svg>
<div className="absolute w-2 h-1/2 bg-charcoal-gray dark:bg-surface-white"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center">
<p className="font-urdu text-charcoal-gray dark:text-surface-white text-5xl font-bold" dir="rtl">۴۰٬۰۰۰ روپے</p>
<p className="font-urdu text-charcoal-gray/70 dark:text-surface-white/70 text-lg" dir="rtl">دستیاب سہولت</p>
<p className="font-urdu text-charcoal-gray/70 dark:text-surface-white/70 text-sm mt-1" dir="rtl">کل حد: ۵۰٬۰۰۰</p>
</div>
</div>
{/* Section: Crop Cycle Timeline */}
<div className="mb-12">
<h3 className="text-charcoal-gray dark:text-surface-white text-xl font-bold leading-tight tracking-[-0.015em] px-4 pb-4 pt-4 font-urdu" dir="rtl">فصلی چکر</h3>
<div className="relative px-4">
<div className="absolute left-9 right-9 top-1/2 -translate-y-1/2 h-0.5 bg-light-gray dark:bg-charcoal-gray"></div>
<div className="relative grid grid-cols-3 gap-4">
<div className="flex flex-col items-center text-center">
<div className="flex items-center justify-center size-12 rounded-full bg-primary/20 dark:bg-primary/30 text-indus-green dark:text-primary border-2 border-primary mb-2">
<span className="material-symbols-outlined text-3xl">agriculture</span>
</div>
<p className="text-charcoal-gray dark:text-surface-white text-base font-medium leading-normal font-urdu" dir="rtl">بوائی</p>
<p className="text-charcoal-gray/70 dark:text-surface-white/70 text-sm font-normal leading-normal">Mar - Apr</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="flex items-center justify-center size-12 rounded-full bg-black/5 dark:bg-white/5 text-charcoal-gray dark:text-surface-white border-2 border-light-gray dark:border-charcoal-gray mb-2">
<span className="material-symbols-outlined text-3xl">local_florist</span>
</div>
<p className="text-charcoal-gray dark:text-surface-white text-base font-medium leading-normal font-urdu" dir="rtl">کاشت</p>
<p className="text-charcoal-gray/70 dark:text-surface-white/70 text-sm font-normal leading-normal">May - Aug</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="flex items-center justify-center size-12 rounded-full bg-black/5 dark:bg-white/5 text-charcoal-gray dark:text-surface-white border-2 border-light-gray dark:border-charcoal-gray mb-2">
<span className="material-symbols-outlined text-3xl">grass</span>
</div>
<p className="text-charcoal-gray dark:text-surface-white text-base font-medium leading-normal font-urdu" dir="rtl">کٹائی</p>
<p className="text-charcoal-gray/70 dark:text-surface-white/70 text-sm font-normal leading-normal">Sep - Oct</p>
</div>
</div>
</div>
</div>
{/* Section: Quick Actions */}
<div>
<h3 className="text-charcoal-gray dark:text-surface-white text-xl font-bold leading-tight tracking-[-0.015em] px-4 pb-4 pt-4 font-urdu" dir="rtl">تیز کام</h3>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-6 px-4">
<a className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl bg-surface-white dark:bg-background-dark shadow-md hover:shadow-lg transition-shadow border border-light-gray/50 dark:border-charcoal-gray/50" href="#">
<span className="material-symbols-outlined text-4xl text-indus-green dark:text-primary">shopping_bag</span>
<p className="text-charcoal-gray dark:text-surface-white text-lg font-medium font-urdu" dir="rtl">دوکان</p>
</a>
<a className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl bg-surface-white dark:bg-background-dark shadow-md hover:shadow-lg transition-shadow border border-light-gray/50 dark:border-charcoal-gray/50" href="#">
<span className="material-symbols-outlined text-4xl text-indus-green dark:text-primary">payments</span>
<p className="text-charcoal-gray dark:text-surface-white text-lg font-medium font-urdu" dir="rtl">والٹ</p>
</a>
<a className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl bg-surface-white dark:bg-background-dark shadow-md hover:shadow-lg transition-shadow border border-light-gray/50 dark:border-charcoal-gray/50" href="#">
<span className="material-symbols-outlined text-4xl text-indus-green dark:text-primary">cloudy</span>
<p className="text-charcoal-gray dark:text-surface-white text-lg font-medium font-urdu" dir="rtl">موسم</p>
</a>
<a className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl bg-surface-white dark:bg-background-dark shadow-md hover:shadow-lg transition-shadow border border-light-gray/50 dark:border-charcoal-gray/50" href="#">
<span className="material-symbols-outlined text-4xl text-indus-green dark:text-primary">headset_mic</span>
<p className="text-charcoal-gray dark:text-surface-white text-lg font-medium font-urdu" dir="rtl">مدد</p>
</a>
</div>
</div>
</div>
</main>
</div>
</div>

    </>
  );
}
