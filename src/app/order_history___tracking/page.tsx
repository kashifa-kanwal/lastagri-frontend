
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
<div className="layout-container flex h-full grow flex-col">
<div className="px-4 sm:px-10 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
<div className="layout-content-container flex flex-col max-w-[960px] flex-1">
{/* Page Heading */}
<div className="flex flex-wrap justify-between gap-3 p-4">
<div className="flex min-w-72 flex-col gap-3">
<p className="text-[#0d1c12] dark:text-gray-100 text-4xl font-black leading-tight tracking-[-0.033em] font-urdu">آرڈر کی تفصیل</p>
<p className="text-neutral-gray dark:text-gray-400 text-base font-normal leading-normal font-urdu">اپنے تمام فعال، مکمل اور منسوخ شدہ آرڈرز دیکھیں</p>
</div>
</div>
{/* Tabs */}
<div className="pb-3">
<div className="flex border-b border-gray-300 dark:border-gray-700 px-4 gap-8">
<a className="flex flex-col items-center justify-center border-b-[3px] border-b-primary text-primary pb-[13px] pt-4" href="#">
<p className="text-sm font-bold leading-normal tracking-[0.015em] font-urdu">جاری</p>
</a>
<a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-neutral-gray dark:text-gray-400 pb-[13px] pt-4" href="#">
<p className="text-sm font-bold leading-normal tracking-[0.015em] font-urdu">مکمل</p>
</a>
<a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-neutral-gray dark:text-gray-400 pb-[13px] pt-4" href="#">
<p className="text-sm font-bold leading-normal tracking-[0.015em] font-urdu">منسوخ</p>
</a>
</div>
</div>
{/* Accordions / Order List */}
<div className="flex flex-col p-4 gap-4">
{/* Order Card 1 (Expanded) */}
<details className="flex flex-col rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm group" open="">
<summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-t-xl">
<div className="flex items-center gap-4">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14 shrink-0" data-alt="Tractor part thumbnail"></div>
<div className="flex flex-col justify-center">
<p className="text-[#0d1c12] dark:text-gray-100 text-base font-bold leading-normal">Order ID: AGRI-2024-12345</p>
<p className="text-neutral-gray dark:text-gray-400 text-sm font-normal leading-normal">15 July 2024 - Rs. 8,500</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="hidden sm:inline-flex items-center justify-center gap-2 rounded-full bg-status-shipped/20 px-3 py-1 text-sm font-medium text-status-shipped">
<div className="size-2 rounded-full bg-status-shipped"></div>
<span className="font-urdu">بھیج دیا گیا</span>
</div>
<div className="text-neutral-gray dark:text-gray-400 group-open:rotate-180 transition-transform duration-300">
<span className="material-symbols-outlined">expand_more</span>
</div>
</div>
</summary>
<div className="border-t border-gray-200 dark:border-gray-700 p-4 space-y-6">
<h3 className="text-[#0d1c12] dark:text-gray-200 text-lg font-bold leading-tight tracking-[-0.015em] font-urdu">آرڈر کی تفصیل / ٹریکنگ</h3>
{/* Visual Tracking Stepper */}
<div className="flex items-center justify-between space-x-2">
<div className="flex-1 text-center">
<div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
<span className="material-symbols-outlined">check</span>
</div>
<p className="mt-2 text-xs font-medium text-primary dark:text-green-300 font-urdu">آرڈر دیا</p>
</div>
<div className="h-1 flex-1 bg-primary rounded-full"></div>
<div className="flex-1 text-center">
<div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
<span className="material-symbols-outlined">inventory_2</span>
</div>
<p className="mt-2 text-xs font-medium text-primary dark:text-green-300 font-urdu">پیک ہوا</p>
</div>
<div className="h-1 flex-1 bg-primary rounded-full"></div>
<div className="flex-1 text-center">
<div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white ring-4 ring-primary/30">
<span className="material-symbols-outlined">local_shipping</span>
</div>
<p className="mt-2 text-xs font-bold text-primary dark:text-green-300 font-urdu">بھیج دیا</p>
</div>
<div className="h-1 flex-1 bg-gray-200 dark:bg-gray-600 rounded-full"></div>
<div className="flex-1 text-center">
<div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 text-gray-500 dark:bg-gray-700 dark:text-gray-400">
<span className="material-symbols-outlined">delivery_dining</span>
</div>
<p className="mt-2 text-xs font-medium text-neutral-gray dark:text-gray-500 font-urdu">ڈلیوری کے لئے</p>
</div>
<div className="h-1 flex-1 bg-gray-200 dark:bg-gray-600 rounded-full"></div>
<div className="flex-1 text-center">
<div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 text-gray-500 dark:bg-gray-700 dark:text-gray-400">
<span className="material-symbols-outlined">home</span>
</div>
<p className="mt-2 text-xs font-medium text-neutral-gray dark:text-gray-500 font-urdu">پہنچ گیا</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
{/* Left Column: Items and Supplier */}
<div className="space-y-4">
<div>
<h4 className="text-sm font-bold text-[#0d1c12] dark:text-gray-300 mb-2 font-urdu">اشیاء</h4>
<ul className="space-y-2 text-sm text-neutral-gray dark:text-gray-400">
<li>1 x ٹریکٹر سیٹ کور</li>
<li>2 x ہیڈلائٹ بلب (12V)</li>
</ul>
</div>
<div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-background-light dark:bg-gray-900/50 p-3">
<h5 className="text-sm font-bold text-[#0d1c12] dark:text-gray-300 font-urdu">مہیا کنندہ</h5>
<div className="flex items-center justify-between mt-1">
<div>
<p className="text-sm text-[#0d1c12] dark:text-gray-200">علی ٹریکٹر پارٹس</p>
<p className="text-xs text-neutral-gray dark:text-gray-500">+92 300 1234567</p>
</div>
<button className="flex items-center gap-2 rounded-full bg-primary/20 px-3 py-1.5 text-xs font-bold text-primary hover:bg-primary/30">
<span className="material-symbols-outlined text-base">call</span>
<span className="font-urdu">کال کریں</span>
</button>
</div>
</div>
</div>
{/* Right Column: Delivery and Actions */}
<div className="space-y-4">
<div className="rounded-lg bg-yellow-50 dark:bg-yellow-900/30 p-3 text-center">
<p className="text-sm font-bold text-yellow-800 dark:text-yellow-300 font-urdu">متوقع ترسیل</p>
<p className="text-lg font-bold text-yellow-900 dark:text-yellow-200">2 دن، 8 گھنٹے</p>
</div>
<button className="w-full flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-primary/90">
<span className="material-symbols-outlined text-xl">location_on</span>
<span className="font-urdu">آرڈر ٹریک کریں</span>
</button>
</div>
</div>
{/* Notification Toggle */}
<div className="flex items-center justify-between rounded-lg border border-gray-200 dark:border-gray-700 p-3">
<p className="text-sm text-[#0d1c12] dark:text-gray-300 font-urdu">SMS اپ ڈیٹس</p>
<label className="relative inline-flex cursor-pointer items-center">
<input defaultChecked="" className="peer sr-only" type="checkbox" defaultValue=""/>
<div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700"></div>
</label>
</div>
</div>
</details>
{/* Order Card 2 (Completed) */}
<details className="flex flex-col rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm group">
<summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-xl group-open:rounded-b-none">
<div className="flex items-center gap-4">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14 shrink-0" data-alt="Fertilizer bags thumbnail"></div>
<div className="flex flex-col justify-center">
<p className="text-[#0d1c12] dark:text-gray-100 text-base font-bold leading-normal">Order ID: AGRI-2024-11987</p>
<p className="text-neutral-gray dark:text-gray-400 text-sm font-normal leading-normal">05 July 2024 - Rs. 22,150</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="hidden sm:inline-flex items-center justify-center gap-2 rounded-full bg-status-delivered/20 px-3 py-1 text-sm font-medium text-status-delivered">
<div className="size-2 rounded-full bg-status-delivered"></div>
<span className="font-urdu">پہنچ گیا</span>
</div>
<div className="text-neutral-gray dark:text-gray-400 group-open:rotate-180 transition-transform duration-300">
<span className="material-symbols-outlined">expand_more</span>
</div>
</div>
</summary>
<div className="border-t border-gray-200 dark:border-gray-700 p-4 space-y-4">
<div className="flex flex-col sm:flex-row gap-4">
<button className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-primary/90">
<span className="material-symbols-outlined text-xl">receipt_long</span>
<span className="font-urdu">رسید کی تصدیق</span>
</button>
<button className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-gray-200 dark:bg-gray-700 px-4 py-2.5 text-sm font-bold text-[#0d1c12] dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600">
<span className="material-symbols-outlined text-xl">download</span>
<span className="font-urdu">انوائس ڈاؤن لوڈ کریں</span>
</button>
</div>
<div className="rounded-lg border border-gray-200 dark:border-gray-700 p-3">
<p className="text-sm text-center font-bold text-[#0d1c12] dark:text-gray-300 mb-2 font-urdu">ریٹنگ دیں</p>
<div className="flex items-center justify-center text-3xl text-gray-300 dark:text-gray-600">
<span className="material-symbols-outlined !text-4xl cursor-pointer text-yellow-400">star</span>
<span className="material-symbols-outlined !text-4xl cursor-pointer text-yellow-400">star</span>
<span className="material-symbols-outlined !text-4xl cursor-pointer text-yellow-400">star</span>
<span className="material-symbols-outlined !text-4xl cursor-pointer text-yellow-400">star</span>
<span className="material-symbols-outlined !text-4xl cursor-pointer">star</span>
</div>
</div>
</div>
</details>
{/* Order Card 3 (Cancelled) */}
<div className="flex items-center gap-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-300 dark:border-gray-700 shadow-sm p-4 min-h-[72px] justify-between">
<div className="flex items-center gap-4">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14 shrink-0" data-alt="Pesticide bottle thumbnail"></div>
<div className="flex flex-col justify-center">
<p className="text-[#0d1c12] dark:text-gray-100 text-base font-bold leading-normal">Order ID: AGRI-2024-11542</p>
<p className="text-neutral-gray dark:text-gray-400 text-sm font-normal leading-normal">01 July 2024 - Rs. 3,400</p>
</div>
</div>
<div className="shrink-0">
<div className="flex items-center justify-center gap-2 rounded-full bg-status-cancelled/20 px-3 py-1 text-sm font-medium text-status-cancelled">
<div className="size-2 rounded-full bg-status-cancelled"></div>
<span className="font-urdu">منسوخ</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
