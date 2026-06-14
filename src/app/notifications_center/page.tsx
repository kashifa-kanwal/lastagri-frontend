
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
<div className="layout-container flex h-full grow flex-col">
<div className="flex flex-1 justify-center py-5 sm:px-6 md:px-10 lg:px-20 xl:px-40">
<div className="layout-content-container flex flex-col w-full max-w-[960px] flex-1">
{/* Page Heading */}
<div className="flex flex-wrap justify-between items-center gap-4 p-4">
<h1 className="font-urdu text-4xl font-bold text-text-primary-light dark:text-text-primary-dark">اطلاعات</h1>
<button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/20 text-primary text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/30 transition-colors">
<span className="truncate font-urdu">سب کو پڑھا ہوا نشان زد کریں</span>
</button>
</div>
{/* Tabs */}
<div className="pb-3 px-4">
<div className="flex border-b border-border-light dark:border-border-dark gap-8">
<a className="flex flex-col items-center justify-center border-b-[3px] border-b-primary pb-[13px] pt-4" href="#">
<p className="font-urdu text-base font-bold text-text-primary-light dark:text-text-primary-dark">تمام</p>
</a>
<a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent pb-[13px] pt-4" href="#">
<p className="font-urdu text-base font-bold text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark transition-colors">ادائیگی</p>
</a>
<a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent pb-[13px] pt-4" href="#">
<p className="font-urdu text-base font-bold text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark transition-colors">آرڈر</p>
</a>
<a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent pb-[13px] pt-4" href="#">
<p className="font-urdu text-base font-bold text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark transition-colors">پیغامات</p>
</a>
</div>
</div>
{/* Notifications List */}
<div className="flex flex-col gap-2 p-4">
{/* Unread Notification: Payment Reminder */}
<div className="flex gap-4 bg-card-light dark:bg-card-dark px-4 py-3 justify-between rounded-lg shadow-sm border border-transparent hover:border-border-light dark:hover:border-border-dark group">
<div className="flex items-start gap-4 w-full">
<div className="flex items-center justify-center rounded-full bg-warning/20 shrink-0 size-12 text-warning">
<span className="material-symbols-outlined">notifications_active</span>
</div>
<div className="flex flex-1 flex-col justify-center">
<p className="font-urdu text-lg font-bold text-text-primary-light dark:text-text-primary-dark">قسط کی ادائیگی</p>
<p className="font-urdu text-sm text-text-secondary-light dark:text-text-secondary-dark">آپ کی قسط کل واجب الادا ہے</p>
<p className="text-xs font-medium text-text-secondary-light dark:text-text-secondary-dark pt-1">5 منٹ پہلے</p>
</div>
</div>
<div className="shrink-0 flex items-center gap-2">
<button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-primary text-white text-sm font-bold leading-normal w-fit hover:bg-primary/90 transition-colors">
<span className="truncate font-urdu">ابھی ادا کریں</span>
</button>
<div className="hidden group-hover:flex items-center gap-1">
<button className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-text-secondary-light dark:text-text-secondary-dark transition-colors">
<span className="material-symbols-outlined text-xl">archive</span>
</button>
<button className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-text-secondary-light dark:text-text-secondary-dark transition-colors">
<span className="material-symbols-outlined text-xl">delete</span>
</button>
</div>
</div>
</div>
{/* Unread Notification: Order Update */}
<div className="flex gap-4 bg-card-light dark:bg-card-dark px-4 py-3 justify-between rounded-lg shadow-sm border border-transparent hover:border-border-light dark:hover:border-border-dark group">
<div className="flex items-start gap-4 w-full">
<div className="flex items-center justify-center rounded-full bg-info/20 shrink-0 size-12 text-info">
<span className="material-symbols-outlined">local_shipping</span>
</div>
<div className="flex flex-1 flex-col justify-center">
<p className="font-urdu text-lg font-bold text-text-primary-light dark:text-text-primary-dark">آرڈر ڈسپیچ</p>
<p className="font-urdu text-sm text-text-secondary-light dark:text-text-secondary-dark">آپ کا آرڈر ڈسپیچ ہو گیا ہے</p>
<p className="text-xs font-medium text-text-secondary-light dark:text-text-secondary-dark pt-1">2 گھنٹے پہلے</p>
</div>
</div>
<div className="shrink-0 flex items-center gap-2">
<button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-info text-white text-sm font-bold leading-normal w-fit hover:bg-info/90 transition-colors">
<span className="truncate font-urdu">ٹریک کریں</span>
</button>
<div className="hidden group-hover:flex items-center gap-1">
<button className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-text-secondary-light dark:text-text-secondary-dark transition-colors">
<span className="material-symbols-outlined text-xl">archive</span>
</button>
<button className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-text-secondary-light dark:text-text-secondary-dark transition-colors">
<span className="material-symbols-outlined text-xl">delete</span>
</button>
</div>
</div>
</div>
{/* Read Notification: System Alert */}
<div className="flex gap-4 bg-card-read-light dark:bg-card-read-dark px-4 py-3 justify-between rounded-lg shadow-sm opacity-70 group border border-transparent hover:border-border-light dark:hover:border-border-dark">
<div className="flex items-start gap-4 w-full">
<div className="flex items-center justify-center rounded-full bg-danger/20 shrink-0 size-12 text-danger">
<span className="material-symbols-outlined">verified_user</span>
</div>
<div className="flex flex-1 flex-col justify-center">
<p className="font-urdu text-lg font-bold text-text-primary-light dark:text-text-primary-dark">کریڈٹ لمٹ میں اضافہ</p>
<p className="font-urdu text-sm text-text-secondary-light dark:text-text-secondary-dark">مبارک ہو! آپ کی کریڈٹ لمٹ بڑھا دی گئی ہے</p>
<p className="text-xs font-medium text-text-secondary-light dark:text-text-secondary-dark pt-1">1 دن پہلے</p>
</div>
</div>
<div className="shrink-0 flex items-center gap-2">
<div className="w-[84px] h-9 px-4"></div> {/* Placeholder for alignment */}
<div className="hidden group-hover:flex items-center gap-1">
<button className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-text-secondary-light dark:text-text-secondary-dark transition-colors">
<span className="material-symbols-outlined text-xl">archive</span>
</button>
<button className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-text-secondary-light dark:text-text-secondary-dark transition-colors">
<span className="material-symbols-outlined text-xl">delete</span>
</button>
</div>
</div>
</div>
{/* Read Notification: Promotional */}
<div className="flex gap-4 bg-card-read-light dark:bg-card-read-dark px-4 py-3 justify-between rounded-lg shadow-sm opacity-70 group border border-transparent hover:border-border-light dark:hover:border-border-dark">
<div className="flex items-start gap-4 w-full">
<div className="flex items-center justify-center rounded-full bg-primary/20 shrink-0 size-12 text-primary">
<span className="material-symbols-outlined">shopping_bag</span>
</div>
<div className="flex flex-1 flex-col justify-center">
<p className="font-urdu text-lg font-bold text-text-primary-light dark:text-text-primary-dark">نئی کھاد دستیاب</p>
<p className="font-urdu text-sm text-text-secondary-light dark:text-text-secondary-dark">بہترین معیار کی نئی کھاد اب دستیاب ہے!</p>
<p className="text-xs font-medium text-text-secondary-light dark:text-text-secondary-dark pt-1">3 دن پہلے</p>
</div>
</div>
<div className="shrink-0 flex items-center gap-2">
<button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-primary/20 text-primary text-sm font-bold leading-normal w-fit hover:bg-primary/30 transition-colors">
<span className="truncate font-urdu">ابھی خریدیں</span>
</button>
<div className="hidden group-hover:flex items-center gap-1">
<button className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-text-secondary-light dark:text-text-secondary-dark transition-colors">
<span className="material-symbols-outlined text-xl">archive</span>
</button>
<button className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-text-secondary-light dark:text-text-secondary-dark transition-colors">
<span className="material-symbols-outlined text-xl">delete</span>
</button>
</div>
</div>
</div>
{/* Empty State */}
<div className="flex flex-col items-center justify-center text-center py-20">
<div className="text-text-secondary-light dark:text-text-secondary-dark mb-4">
<svg className="opacity-50" fill="none" height="80" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24" width="80" xmlns="http://www.w3.org/2000/svg"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path></svg>
</div>
<p className="font-urdu text-2xl font-bold text-text-primary-light dark:text-text-primary-dark">کوئی اطلاع نہیں</p>
<p className="font-urdu text-base text-text-secondary-light dark:text-text-secondary-dark mt-2">نئی اطلاعات آنے پر آپ کو یہاں مطلع کیا جائے گا</p>
</div>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
