
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
<div className="layout-container flex h-full grow flex-col">
<div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
<div className="layout-content-container flex flex-col w-full max-w-[960px] flex-1">
{/* Toolbar / Back Navigation */}
<div className="flex justify-between gap-2 px-4 py-3">
<div className="flex gap-2">
<button className="p-2 text-dark-slate dark:text-gray-200">
<span className="material-symbols-outlined text-2xl">arrow_forward</span>
</button>
</div>
</div>
{/* Carousel */}
<div className="relative w-full">
<div className="flex overflow-x-auto snap-x snap-mandatory [-ms-scrollbar-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden rounded-xl">
<div className="flex items-stretch flex-shrink-0 w-full snap-center">
<div className="w-full bg-center bg-no-repeat aspect-[16/10] bg-cover rounded-xl" data-alt="Urea fertilizer bag in a green field"></div>
</div>
<div className="flex items-stretch flex-shrink-0 w-full snap-center">
<div className="w-full bg-center bg-no-repeat aspect-[16/10] bg-cover rounded-xl" data-alt="Farmer applying fertilizer to crops"></div>
</div>
<div className="flex items-stretch flex-shrink-0 w-full snap-center">
<div className="w-full bg-center bg-no-repeat aspect-[16/10] bg-cover rounded-xl" data-alt="Lush green wheat crops in a field"></div>
</div>
</div>
<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-white opacity-90"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white opacity-50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white opacity-50"></div>
</div>
</div>
{/* Headline and Rating */}
<div className="flex flex-col md:flex-row justify-between items-start mt-6 px-4">
<div className="flex-grow">
<h1 className="font-urdu text-dark-slate dark:text-white tracking-light text-4xl font-bold leading-tight">یوریا کھاد</h1>
<p className="text-light-gray text-xl font-medium">Urea Fertilizer</p>
</div>
<div className="flex items-center gap-4 mt-4 md:mt-0 flex-shrink-0">
<div className="flex flex-col items-end">
<div className="flex items-center gap-1">
<p className="text-dark-slate dark:text-white text-lg font-bold">4.5</p>
<div className="flex text-[#FFC107]">
<span className="material-symbols-outlined !text-xl">star</span>
<span className="material-symbols-outlined !text-xl">star</span>
<span className="material-symbols-outlined !text-xl">star</span>
<span className="material-symbols-outlined !text-xl">star</span>
<span className="material-symbols-outlined !text-xl">star_half</span>
</div>
</div>
<p className="text-light-gray text-sm">123 reviews</p>
</div>
<img className="h-12 w-12 object-contain" data-alt="Brand Logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBi04IKIffyUJUt9GGVlTeEPXfGm7spqQn0uwjXgDAHXgE-bbNs1b8Pxm1Nevz0kMJBqpOU-nulSeTQKGqzFyueapa50JLVDVHO7a_6KjahX9XZoDpBEfmoIS6Wzz25fcu1pNWmgKD3Utas66EtyqGrZtZGT5pwEBIK8bPeAKgHZ5oxW_XERvSroEnVPbm3olkqRCWjGJboXX9DFETwvm5stAjXfNYapLkcBLaGaFKnRLF-LVDnhK6YERuSKZT1qyNshdDLByMlcjU"/>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8 px-4">
{/* Left Column: Details */}
<div className="lg:col-span-2 flex flex-col gap-6">
{/* Specifications Card */}
<div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
<h2 className="font-urdu text-dark-slate dark:text-white text-2xl font-bold leading-tight tracking-[-0.015em] pb-4 border-b border-gray-200 dark:border-gray-700">تفصیلات</h2>
<div className="space-y-4 pt-4 text-lg">
<div className="flex justify-between">
<span className="font-urdu text-light-gray">خالص وزن:</span>
<span className="font-bold text-dark-slate dark:text-white">50 کلوگرام</span>
</div>
<div className="flex justify-between">
<span className="font-urdu text-light-gray">نائٹروجن مواد:</span>
<span className="font-bold text-dark-slate dark:text-white">46%</span>
</div>
<div className="flex justify-between">
<span className="font-urdu text-light-gray">استعمال کی ہدایات:</span>
<span className="font-bold text-dark-slate dark:text-white text-left">بوائی کے وقت یا پہلے پانی پر استعمال کریں</span>
</div>
</div>
</div>
{/* Accordion for Full Details */}
<div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm">
<details className="group p-6">
<summary className="flex justify-between items-center cursor-pointer list-none">
<h2 className="font-urdu text-dark-slate dark:text-white text-2xl font-bold">مکمل تفصیل</h2>
<span className="transition-transform duration-300 group-open:rotate-180">
<span className="material-symbols-outlined">expand_more</span>
</span>
</summary>
<p className="text-light-gray mt-4">
                            یوریا ایک موثر نائٹروجن کھاد ہے جو فصلوں کی نشوونما کو بڑھاتی ہے۔ یہ گندم، مکئی، چاول اور کپاس جیسی فصلوں کے لیے انتہائی موزوں ہے۔ بہترین نتائج کے لیے، اسے مٹی میں اچھی طرح ملائیں اور پانی دیں۔
                        </p>
</details>
</div>
</div>
{/* Right Column: Pricing & Actions */}
<div className="lg:col-span-1">
<div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 sticky top-5">
<div className="text-center">
<p className="font-urdu text-light-gray text-lg line-through">نقدی قیمت</p>
<p className="text-light-gray text-xl line-through">₨۴٬۰۰۰</p>
<p className="font-urdu text-trust-blue text-2xl font-bold mt-2">BNPL قیمت</p>
<p className="text-trust-blue text-4xl font-extrabold">₨۴٬۵۰۰</p>
<a className="font-urdu text-trust-blue text-sm mt-1 inline-block" href="#">تفصیل دیکھیں</a>
</div>
<div className="flex justify-between items-center mt-6 py-3 border-t border-b border-gray-200 dark:border-gray-700">
<span className="font-urdu font-bold text-lg">دستیابی:</span>
<div className="flex items-center gap-2">
<span className="font-urdu font-semibold text-success-green">موجود</span>
<span className="text-sm text-light-gray">(50 بیگ)</span>
</div>
</div>
<div className="mt-6 flex flex-col gap-3">
<button className="w-full bg-indus-green text-white font-urdu text-lg font-bold py-3 px-4 rounded-lg hover:bg-opacity-90 transition-colors">قسط پہ خریدیں</button>
<button className="w-full border-2 border-indus-green text-indus-green font-urdu text-lg font-bold py-3 px-4 rounded-lg hover:bg-indus-green/10 transition-colors">چیٹ بوٹ سے پوچھیں</button>
</div>
</div>
</div>
</div>
{/* Related Products Section */}
<div className="mt-16">
<h2 className="font-urdu text-dark-slate dark:text-white text-3xl font-bold leading-tight px-4 pb-4">متعلقہ مصنوعات</h2>
<div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden">
<div className="flex items-stretch p-4 gap-4">
{/* Product Card 1 */}
<div className="flex flex-col gap-2 rounded-lg bg-white dark:bg-gray-800 shadow-sm p-4 min-w-60">
<div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg" data-alt="DAP Fertilizer bag"></div>
<h3 className="font-urdu text-lg font-bold mt-2">ڈی اے پی کھاد</h3>
<p className="text-trust-blue font-semibold">₨۸٬۰۰۰</p>
</div>
{/* Product Card 2 */}
<div className="flex flex-col gap-2 rounded-lg bg-white dark:bg-gray-800 shadow-sm p-4 min-w-60">
<div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg" data-alt="Potash Fertilizer bag"></div>
<h3 className="font-urdu text-lg font-bold mt-2">پوٹاش کھاد</h3>
<p className="text-trust-blue font-semibold">₨۶٬۵۰۰</p>
</div>
{/* Product Card 3 */}
<div className="flex flex-col gap-2 rounded-lg bg-white dark:bg-gray-800 shadow-sm p-4 min-w-60">
<div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg" data-alt="High quality wheat seeds"></div>
<h3 className="font-urdu text-lg font-bold mt-2">گندم کا بیج</h3>
<p className="text-trust-blue font-semibold">₨۳٬۲۰۰</p>
</div>
{/* Product Card 4 */}
<div className="flex flex-col gap-2 rounded-lg bg-white dark:bg-gray-800 shadow-sm p-4 min-w-60">
<div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg" data-alt="Pesticide spray bottle"></div>
<h3 className="font-urdu text-lg font-bold mt-2">کیڑے مار دوا</h3>
<p className="text-trust-blue font-semibold">₨۱٬۵۰۰</p>
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
