
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
<div className="layout-container flex h-full grow flex-col">
<div className="flex flex-1 justify-center py-5">
<div className="layout-content-container flex flex-col max-w-[960px] flex-1 px-4 md:px-0">
<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#d7e7cf] dark:border-b-gray-700 px-6 py-4 rounded-xl bg-white/50 dark:bg-black/20 backdrop-blur-sm">
<div className="flex items-center gap-4 text-[#121b0d] dark:text-white">
<div className="size-6 text-green-brand">
<svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
</svg>
</div>
<h2 className="text-[#121b0d] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">AgriConnect</h2>
</div>
<div className="flex flex-1 justify-end items-center gap-4">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="User profile picture"></div>
</div>
</header>
<main className="mt-8 flex flex-col gap-8">
<div className="flex flex-wrap justify-between items-start gap-4 p-4">
<div className="flex min-w-72 flex-col gap-3">
<p className="text-[#121b0d] dark:text-white text-5xl font-black leading-tight tracking-[-0.033em] font-urdu text-right w-full">شرائط و احکام</p>
<p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-normal">Last updated: 15 October 2023</p>
</div>
</div>
<div className="sticky top-4 z-10 flex justify-between gap-2 px-4 py-3 rounded-xl bg-white/80 dark:bg-black/30 backdrop-blur-md border border-[#d7e7cf] dark:border-gray-700">
<div className="flex gap-2 items-center">
<button className="p-2 text-[#121b0d] dark:text-gray-200 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700" title="Text-to-Speech">
<span className="material-symbols-outlined">volume_up</span>
</button>
<button className="p-2 text-[#121b0d] dark:text-gray-200 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700" title="Decrease text size">
<span className="material-symbols-outlined">text_decrease</span>
</button>
<button className="p-2 text-[#121b0d] dark:text-gray-200 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700" title="Increase text size">
<span className="material-symbols-outlined">text_increase</span>
</button>
<button className="p-2 text-[#121b0d] dark:text-gray-200 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700" title="Download as PDF">
<span className="material-symbols-outlined">download</span>
</button>
</div>
<button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-green-brand/20 text-green-brand dark:text-white dark:bg-green-brand/30 gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-4">
<span className="material-symbols-outlined text-base">translate</span>
<span className="truncate">English</span>
</button>
</div>
<div className="pb-3">
<div className="flex border-b border-[#d7e7cf] dark:border-gray-700 px-4 gap-8 overflow-x-auto">
<a className="flex flex-col items-center justify-center border-b-[3px] border-b-green-brand text-[#121b0d] dark:text-white pb-[13px] pt-4 whitespace-nowrap" href="#">
<p className="text-sm font-bold leading-normal tracking-[0.015em] font-urdu">تعارف</p>
</a>
<a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-gray-500 dark:text-gray-400 pb-[13px] pt-4 whitespace-nowrap" href="#">
<p className="text-sm font-bold leading-normal tracking-[0.015em] font-urdu">سروس فیس</p>
</a>
<a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-gray-500 dark:text-gray-400 pb-[13px] pt-4 whitespace-nowrap" href="#">
<p className="text-sm font-bold leading-normal tracking-[0.015em] font-urdu">ادائیگی کا منصوبہ</p>
</a>
<a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-gray-500 dark:text-gray-400 pb-[13px] pt-4 whitespace-nowrap" href="#">
<p className="text-sm font-bold leading-normal tracking-[0.015em] font-urdu">ڈیفالٹ پالیسی</p>
</a>
<a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-gray-500 dark:text-gray-400 pb-[13px] pt-4 whitespace-nowrap" href="#">
<p className="text-sm font-bold leading-normal tracking-[0.015em] font-urdu">تنازعات کا حل</p>
</a>
<a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-gray-500 dark:text-gray-400 pb-[13px] pt-4 whitespace-nowrap" href="#">
<p className="text-sm font-bold leading-normal tracking-[0.015em] font-urdu">شرعی تعمیل</p>
</a>
</div>
</div>
<div className="flex flex-col p-4 gap-4">
<div className="p-6 rounded-xl bg-yellow-info/20 border border-yellow-info/50 text-yellow-900 dark:text-yellow-100 dark:bg-yellow-info/10">
<div className="flex items-center gap-4 mb-3">
<span className="material-symbols-outlined text-3xl">calculate</span>
<h3 className="text-lg font-bold font-urdu">مارک اپ/سروس فیس</h3>
</div>
<p className="font-urdu leading-[1.8] text-right">سروس سے وابستہ تمام چارجز اور فیسوں کی تفصیلی تفصیل۔ 'قرض' جیسی پیچیدہ اصطلاحات کو نمایاں کیا گیا ہے اور ہوور پر وضاحتیں فراہم کی جاتی ہیں۔</p>
</div>
<div className="p-6 rounded-xl bg-green-brand/20 border border-green-brand/50 text-green-900 dark:text-green-100 dark:bg-green-brand/10">
<div className="flex items-center gap-4 mb-3">
<span className="material-symbols-outlined text-3xl">event_available</span>
<h3 className="text-lg font-bold font-urdu">ادائیگی کا شیڈول</h3>
</div>
<p className="font-urdu leading-[1.8] text-right">مقررہ تاریخوں اور ادائیگی کے طریقوں کی وضاحت۔</p>
</div>
<div className="p-6 rounded-xl bg-orange-warning/20 border border-orange-warning/50 text-orange-900 dark:text-orange-100 dark:bg-orange-warning/10">
<div className="flex items-center gap-4 mb-3">
<span className="material-symbols-outlined text-3xl">warning</span>
<h3 className="text-lg font-bold font-urdu">ڈیفالٹ کے نتائج</h3>
</div>
<p className="font-urdu leading-[1.8] text-right">جرمانوں اور طریقہ کار کا واضح خاکہ۔</p>
</div>
<div className="p-6 rounded-xl bg-green-brand/20 border border-green-brand/50 text-green-900 dark:text-green-100 dark:bg-green-brand/10">
<div className="flex items-center gap-4 mb-3">
<span className="material-symbols-outlined text-3xl">verified</span>
<h3 className="text-lg font-bold font-urdu">شرعی تعمیل کا بیان</h3>
</div>
<p className="font-urdu leading-[1.8] text-right">شرعی اصولوں کی تعمیل کا واضح بیان۔</p>
</div>
<div className="flex flex-col mt-6">
<details className="flex flex-col border-t border-t-[#d7e7cf] dark:border-t-gray-700 py-2 group" open="">
<summary className="flex cursor-pointer items-center justify-between gap-6 py-2 list-none">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-blue-accent">balance</span>
<p className="text-[#121b0d] dark:text-white text-lg font-medium leading-normal font-urdu">تنازعات کا حل</p>
</div>
<span className="material-symbols-outlined text-[#121b0d] dark:text-white group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<p className="text-gray-600 dark:text-gray-400 text-base font-normal leading-loose pb-2 font-urdu text-right">
                                        اختلافات کی صورت میں عمل کرنے کا طریقہ کار یہاں بیان کیا گیا ہے۔ اس میں ثالثی اور قانونی کارروائی کی تفصیلات شامل ہیں۔
                                    </p>
</details>
<details className="flex flex-col border-t border-t-[#d7e7cf] dark:border-t-gray-700 py-2 group">
<summary className="flex cursor-pointer items-center justify-between gap-6 py-2 list-none">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-blue-accent">privacy_tip</span>
<p className="text-[#121b0d] dark:text-white text-lg font-medium leading-normal font-urdu">رازداری کی پالیسی</p>
</div>
<span className="material-symbols-outlined text-[#121b0d] dark:text-white group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<p className="text-gray-600 dark:text-gray-400 text-base font-normal leading-loose pb-2 font-urdu text-right">
                                        آپ کی ذاتی معلومات کو کیسے محفوظ رکھا جاتا ہے اور استعمال کیا جاتا ہے، اس کی تفصیلات یہاں موجود ہیں۔
                                    </p>
</details>
</div>
</div>
<div className="flex flex-col gap-6 p-4 mt-8 border-t border-[#d7e7cf] dark:border-gray-700">
<div className="flex flex-col">
<details className="flex flex-col py-2 group">
<summary className="flex cursor-pointer items-center justify-between gap-6 py-2 list-none">
<p className="text-[#121b0d] dark:text-white text-md font-medium leading-normal">Version Control &amp; Change Log</p>
<span className="material-symbols-outlined text-[#121b0d] dark:text-white group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<div className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-normal pb-2 space-y-2 mt-2">
<p><strong>Version 2.1 (15 October 2023):</strong> Updated privacy policy and service fee structure.</p>
<p><strong>Version 2.0 (01 June 2023):</strong> Introduced Shariah compliance statement.</p>
</div>
</details>
</div>
<div className="flex items-center space-x-3 space-x-reverse">
<input className="h-5 w-5 rounded border-gray-300 text-green-brand focus:ring-green-brand dark:bg-gray-800 dark:border-gray-600" id="terms-checkbox" type="checkbox"/>
<label className="text-lg font-urdu text-right text-[#121b0d] dark:text-white" htmlFor="terms-checkbox">میں نے تمام شرائط پڑھی اور سمجھی ہیں</label>
</div>
<button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 bg-green-brand text-white text-lg font-bold leading-normal tracking-[0.015em] font-urdu disabled:bg-gray-300 disabled:cursor-not-allowed dark:disabled:bg-gray-600" disabled="">آگے بڑھیں</button>
</div>
</main>
<footer className="mt-16 border-t border-[#d7e7cf] dark:border-gray-700 py-8 px-4 text-center text-gray-500 dark:text-gray-400">
<p className="mb-2">For any legal queries, please contact us at <a className="text-blue-accent hover:underline" href="mailto:legal@agriconnect.com">legal@agriconnect.com</a>.</p>
<p><a className="text-blue-accent hover:underline" href="#">Customer Support</a></p>
</footer>
</div>
</div>
</div>
</div>


    </>
  );
}
