
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
<div className="layout-container flex h-full grow flex-col">
{/* TopNavBar */}
<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 dark:border-gray-700 px-6 sm:px-10 lg:px-20 py-3 bg-white dark:bg-gray-800/50 sticky top-0 z-10 backdrop-blur-sm">
<div className="flex items-center gap-4">
<svg className="text-primary" fill="currentColor" height="24" viewBox="0 0 48 48" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z"></path></svg>
<h2 className="text-xl font-bold tracking-tight">AgriConnect</h2>
</div>
<div className="flex items-center gap-4">
<div className="flex gap-2">
<button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-primary/20 dark:bg-primary/30 text-primary text-sm font-bold leading-normal tracking-[0.015em]"><span className="truncate">English</span></button>
<button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]"><span className="truncate">اردو</span></button>
</div>
</div>
</header>
<main className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
{/* Update Notification Banner */}
<div className="bg-yellow-100 dark:bg-yellow-900/50 border-l-4 border-yellow-500 text-yellow-800 dark:text-yellow-200 p-4 rounded-r-lg mb-8" role="alert">
<p className="font-bold">پالیسی اپ ڈیٹ</p>
<p>ہماری پرائیویسی پالیسی آپ کے آخری دورے کے بعد سے اپ ڈیٹ ہو گئی ہے۔ براہ کرم تبدیلیوں کا جائزہ لیں۔ <a className="underline font-medium" href="#version-history">ورژن کی سرگزشت دیکھیں</a></p>
</div>
{/* PageHeading */}
<div className="flex flex-wrap justify-between gap-3 p-4 rtl">
<div className="flex min-w-72 flex-col gap-3">
<h1 className="text-4xl font-black leading-tight tracking-[-0.033em] font-urdu">پرائیویسی پالیسی</h1>
<p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-normal">آخری بار اپ ڈیٹ کیا گیا: 15 اکتوبر 2023</p>
</div>
</div>
{/* Accessibility Toolbar */}
<div className="flex justify-between items-center gap-4 px-4 py-3 border-y border-gray-200 dark:border-gray-700 my-8 sticky top-[65px] bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm z-10 rtl">
<div className="flex items-center gap-2">
<button aria-label="Listen to text" className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
<span className="material-symbols-outlined">volume_up</span>
</button>
<button aria-label="Decrease text size" className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
<span className="material-symbols-outlined">text_decrease</span>
</button>
<button aria-label="Increase text size" className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
<span className="material-symbols-outlined">text_increase</span>
</button>
</div>
<button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-primary text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-4">
<span className="material-symbols-outlined text-base">download</span>
<span className="truncate font-urdu">پی ڈی ایف ڈاؤن لوڈ کریں</span>
</button>
</div>
<div className="flex flex-col lg:flex-row gap-12">
{/* Table of Contents */}
<aside className="w-full lg:w-1/4 lg:sticky top-40 h-fit rtl">
<h3 className="text-lg font-bold font-urdu mb-4">فہرست</h3>
<ul className="space-y-3 text-gray-600 dark:text-gray-300">
<li><a className="hover:text-primary hover:underline" href="#key-highlights">اہم جھلکیاں</a></li>
<li><a className="hover:text-primary hover:underline" href="#introduction">تعارف</a></li>
<li><a className="hover:text-primary hover:underline" href="#data-collection">ہم کونسی معلومات جمع کرتے ہیں</a></li>
<li><a className="hover:text-primary hover:underline" href="#data-usage">آپ کا ڈیٹا کیسے استعمال ہوتا ہے</a></li>
<li><a className="hover:text-primary hover:underline" href="#data-sharing">معلومات کا اشتراک اور انکشاف</a></li>
</ul>
</aside>
<div className="w-full lg:w-3/4 rtl">
{/* Key Highlights Section */}
<section id="key-highlights">
<h2 className="text-2xl font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 font-urdu">اہم جھلکیاں</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
<div className="flex flex-1 gap-4 rounded-xl p-4 flex-col bg-[#E0F2FE] dark:bg-blue-900/40">
<span className="material-symbols-outlined text-blue-800 dark:text-blue-300">database</span>
<div className="flex flex-col gap-1">
<h3 className="text-base font-bold text-blue-900 dark:text-blue-200 font-urdu">ڈیٹا اکٹھا کرنا</h3>
<p className="text-sm font-normal leading-relaxed text-blue-700 dark:text-blue-300">آپ سے کونسا ذاتی اور مالی ڈیٹا اکٹھا کیا جاتا ہے اس کا خلاصہ۔</p>
</div>
</div>
<div className="flex flex-1 gap-4 rounded-xl p-4 flex-col bg-[#D1FAE5] dark:bg-green-900/40">
<span className="material-symbols-outlined text-green-800 dark:text-green-300">shield_person</span>
<div className="flex flex-col gap-1">
<h3 className="text-base font-bold text-green-900 dark:text-green-200 font-urdu">ڈیٹا کا استعمال</h3>
<p className="text-sm font-normal leading-relaxed text-green-700 dark:text-green-300">قرض کی کارروائی اور مواصلات کے لیے آپ کا ڈیٹا کیسے استعمال ہوتا ہے۔</p>
</div>
</div>
<div className="flex flex-1 gap-4 rounded-xl p-4 flex-col bg-[#FEF9C3] dark:bg-yellow-900/40">
<span className="material-symbols-outlined text-yellow-800 dark:text-yellow-300">share</span>
<div className="flex flex-col gap-1">
<h3 className="text-base font-bold text-yellow-900 dark:text-yellow-200 font-urdu">ڈیٹا کا اشتراک</h3>
<p className="text-sm font-normal leading-relaxed text-yellow-700 dark:text-yellow-300">جب ڈیٹا شراکت داروں کے ساتھ یا قانونی وجوہات کی بناء پر شیئر کیا جا سکتا ہے۔</p>
</div>
</div>
<div className="flex flex-1 gap-4 rounded-xl p-4 flex-col bg-[#F3E8FF] dark:bg-purple-900/40">
<span className="material-symbols-outlined text-purple-800 dark:text-purple-300">gpp_good</span>
<div className="flex flex-col gap-1">
<h3 className="text-base font-bold text-purple-900 dark:text-purple-200 font-urdu">صارف کے حقوق</h3>
<p className="text-sm font-normal leading-relaxed text-purple-700 dark:text-purple-300">آپ کے ڈیٹا تک رسائی، اسے درست کرنے، اور حذف کرنے کے آپ کے حقوق کا خلاصہ۔</p>
</div>
</div>
</div>
</section>
{/* Policy Body with Accordions */}
<div className="space-y-4 mt-8 px-4">
<details className="group border-b border-gray-200 dark:border-gray-700 pb-4" id="introduction">
<summary className="flex justify-between items-center cursor-pointer list-none">
<h3 className="text-xl font-bold font-urdu">تعارف</h3>
<span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">expand_more</span>
</summary>
<div className="mt-4 text-gray-700 dark:text-gray-300 font-urdu leading-[1.8]">
<p>ایگری کنیکٹ میں، ہم آپ کی پرائیویسی کا احترام کرتے ہیں۔ یہ پرائیویسی پالیسی وضاحت کرتی ہے کہ جب آپ ہماری خدمات استعمال کرتے ہیں تو ہم آپ کی ذاتی معلومات کو کیسے جمع، استعمال، اور محفوظ کرتے ہیں۔ ہماری خدمات استعمال کرکے، آپ اس پالیسی میں بیان کردہ طریقوں سے اتفاق کرتے ہیں۔</p>
</div>
</details>
<details className="group border-b border-gray-200 dark:border-gray-700 pb-4" id="data-collection">
<summary className="flex justify-between items-center cursor-pointer list-none">
<h3 className="text-xl font-bold font-urdu">ہم کونسی معلومات جمع کرتے ہیں</h3>
<span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">expand_more</span>
</summary>
<div className="mt-4 text-gray-700 dark:text-gray-300 font-urdu leading-[1.8]">
<p>ہم آپ سے براہ راست معلومات جمع کرتے ہیں، جیسے کہ آپ کا نام، پتہ، اور مالی تفصیلات جب آپ قرض کے لیے درخواست دیتے ہیں۔ ہم آپ کے آلے اور استعمال کے بارے میں بھی معلومات جمع کر سکتے ہیں۔</p>
</div>
</details>
<details className="group border-b border-gray-200 dark:border-gray-700 pb-4" id="data-usage">
<summary className="flex justify-between items-center cursor-pointer list-none">
<h3 className="text-xl font-bold font-urdu">آپ کا ڈیٹا کیسے استعمال ہوتا ہے</h3>
<span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">expand_more</span>
</summary>
<div className="mt-4 text-gray-700 dark:text-gray-300 font-urdu leading-[1.8]">
<p>آپ کے ڈیٹا کا استعمال آپ کو ہماری خدمات فراہم کرنے، آپ کی قرض کی درخواستوں پر کارروائی کرنے، اور آپ کے ساتھ بات چیت کرنے کے لیے کیا جاتا ہے۔ ہم اسے اپنی خدمات کو بہتر بنانے کے لیے بھی استعمال کر سکتے ہیں۔</p>
</div>
</details>
<details className="group border-b border-gray-200 dark:border-gray-700 pb-4" id="data-sharing">
<summary className="flex justify-between items-center cursor-pointer list-none">
<h3 className="text-xl font-bold font-urdu">معلومات کا اشتراک اور انکشاف</h3>
<span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">expand_more</span>
</summary>
<div className="mt-4 text-gray-700 dark:text-gray-300 font-urdu leading-[1.8]">
<p>ہم آپ کی معلومات کو تیسرے فریق کے شراکت داروں کے ساتھ شیئر کر سکتے ہیں جو ہمیں خدمات فراہم کرنے میں مدد کرتے ہیں، یا جب قانون کے ذریعہ ضروری ہو۔ ہم آپ کی رضامندی کے بغیر آپ کی ذاتی معلومات فروخت نہیں کرتے۔</p>
</div>
</details>
</div>
{/* Acceptance Block */}
<div className="mt-12 p-6 rounded-lg bg-gray-100 dark:bg-gray-800">
<div className="flex items-start rtl">
<div className="flex items-center h-5">
<input className="focus:ring-primary h-4 w-4 text-primary border-gray-300 rounded" id="acceptance-checkbox" name="acceptance" type="checkbox"/>
</div>
<div className="ml-3 text-sm mr-3">
<label className="font-medium font-urdu" htmlFor="acceptance-checkbox">میں نے تمام شرائط و ضوابط پڑھ اور سمجھ لی ہیں</label>
</div>
</div>
<button className="mt-6 w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-primary disabled:bg-gray-400 dark:disabled:bg-gray-600 disabled:cursor-not-allowed" disabled="" id="proceed-button" type="button">
                                 آگے بڑھیں
                             </button>
</div>

</div>
</div>
{/* Footer and Version Control */}
<footer className="mt-16 border-t border-gray-200 dark:border-gray-700 pt-8 rtl">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div>
<h3 className="font-bold font-urdu text-lg">رابطے کی معلومات</h3>
<p className="mt-2 text-gray-600 dark:text-gray-400">قانونی سوالات کے لیے، براہ کرم ہم سے <a className="text-primary underline" href="mailto:legal@agriconnect.com">legal@agriconnect.com</a> پر رابطہ کریں۔</p>
<p className="mt-1 text-gray-600 dark:text-gray-400">عمومی مدد کے لیے، ہمارے <a className="text-primary underline" href="#">کسٹمر سپورٹ</a> پیج پر جائیں۔</p>
</div>
<div id="version-history">
<details className="group">
<summary className="flex justify-between items-center cursor-pointer list-none">
<h3 className="font-bold font-urdu text-lg">ورژن کنٹرول اور تبدیلی لاگ</h3>
<span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">expand_more</span>
</summary>
<div className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
<p><strong>ورژن 2.1 (15 اکتوبر 2023):</strong> صارف کے حقوق کے سیکشن میں وضاحتیں شامل کی گئیں۔</p>
<p><strong>ورژن 2.0 (1 جنوری 2023):</strong> پالیسی کی مکمل نظرثانی اور آسان زبان کا استعمال۔</p>
</div>
</details>
</div>
</div>
</footer>
</main>
</div>
</div>

    </>
  );
}
