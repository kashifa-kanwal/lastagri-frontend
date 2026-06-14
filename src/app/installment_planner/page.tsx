
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="relative flex min-h-screen w-full flex-col items-center p-4 sm:p-6 md:p-8">
<div className="w-full max-w-2xl">
{/* TopNavBar */}
<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-border-light dark:border-border-dark px-4 py-4">
<div className="flex items-center gap-4">
<div className="text-primary size-7">
<svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 6.75C7.5 5.50736 8.50736 4.5 9.75 4.5H14.25C15.4926 4.5 16.5 5.50736 16.5 6.75V7.5H7.5V6.75ZM6 7.5V6.75C6 4.67893 7.67893 3 9.75 3H14.25C16.3211 3 18 4.67893 18 6.75V7.5H19.5C20.3284 7.5 21 8.17157 21 9V19.5C21 20.3284 20.3284 21 19.5 21H4.5C3.67157 21 3 20.3284 3 19.5V9C3 8.17157 3.67157 7.5 4.5 7.5H6ZM19.5 9H4.5V19.5H19.5V9Z"></path></svg>
</div>
<h1 className="text-text-light dark:text-text-dark text-xl font-bold tracking-tight">قسط کی تفصیل</h1>
</div>
<button className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary/20">
<span className="material-symbols-outlined text-2xl">calculate</span>
</button>
</header>
<main className="flex flex-col gap-6 p-4">
{/* Tenure Selector */}
<div>
<div className="flex h-14 w-full items-center justify-center rounded-full bg-gray-200/50 dark:bg-black/20 p-1.5">
<label className="flex h-full grow cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full px-2 text-gray-500 dark:text-gray-400 has-[:checked]:text-text-light has-[:checked]:dark:text-text-dark text-base font-medium transition-colors">
<span>۳ ماہ</span>
<input className="sr-only" name="tenure" type="radio" defaultValue="3 Maah"/>
</label>
<label className="flex h-full grow cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full px-2 text-gray-500 dark:text-gray-400 has-[:checked]:text-text-light has-[:checked]:dark:text-text-dark text-base font-medium transition-colors">
<span>۶ ماہ</span>
<input className="sr-only" name="tenure" type="radio" defaultValue="6 Maah"/>
</label>
<label className="flex h-full grow cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full bg-white dark:bg-background-dark shadow-md px-2 text-text-light dark:text-text-dark text-base font-bold transition-colors">
<span className="material-symbols-outlined text-xl text-accent">agriculture</span>
<span>فصل پہ</span>
<input defaultChecked="" className="sr-only" name="tenure" type="radio" defaultValue="Fasal pe"/>
</label>
</div>
</div>
{/* The Roshan Khata */}
<section className="rounded-lg border border-border-light dark:border-border-dark bg-white dark:bg-black/10 p-4 sm:p-6">
<h2 className="text-text-light dark:text-text-dark text-lg font-bold tracking-tight mb-4">روشن کھاتہ (شفاف لیجر)</h2>
<div className="space-y-3 text-sm">
<div className="flex justify-between gap-x-6">
<p className="text-gray-600 dark:text-gray-400">اصل قیمت</p>
<p className="font-medium text-right">۱۰٬۰۰۰ ₨</p>
</div>
<div className="flex justify-between gap-x-6">
<p className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400">
<span>خدمت فیس</span>
<span className="material-symbols-outlined text-base cursor-help" title="یہ ایک مقررہ فیس ہے، سود نہیں">info</span>
</p>
<p className="font-medium text-right text-primary">+۵۰۰ ₨</p>
</div>
<div className="my-3 border-t border-dashed border-border-light dark:border-border-dark"></div>
<div className="flex justify-between gap-x-6 text-base">
<p className="text-gray-600 dark:text-gray-400">کل ادا کرنا ہے</p>
<p className="font-bold text-right">۱۰٬۵۰۰ ₨</p>
</div>
</div>
<div className="mt-6 flex flex-col items-stretch justify-start rounded-lg bg-accent/10 dark:bg-accent/20 p-4 @container">
<div className="flex flex-col items-center justify-center gap-1 text-center">
<p className="text-base font-medium text-text-light dark:text-text-dark">ہر قسط</p>
<p className="text-accent text-4xl font-bold">۱٬۷۵۰ ₨</p>
</div>
</div>
</section>
{/* Payment Schedule */}
<section>
<h2 className="text-text-light dark:text-text-dark text-lg font-bold tracking-tight px-2 pb-3 pt-2">ادائیگی کا شیڈول</h2>
<div className="space-y-2">
<div className="flex justify-between gap-4 rounded-lg bg-primary/10 dark:bg-primary/20 p-3 items-center">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-bold text-lg">۱</div>
<div>
<p className="font-bold text-primary">پہلی قسط</p>
<p className="text-sm text-gray-600 dark:text-gray-400">ادائیگی کی تاریخ: ۱۵ جون، ۲۰۲۴</p>
</div>
</div>
<p className="text-base font-bold text-primary">۱٬۷۵۰ ₨</p>
</div>
<div className="flex justify-between gap-4 rounded-lg p-3 items-center">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 dark:bg-black/20 font-bold text-lg">۲</div>
<div>
<p className="font-semibold text-text-light dark:text-text-dark">دوسری قسط</p>
<p className="text-sm text-gray-600 dark:text-gray-400">ادائیگی کی تاریخ: ۱۵ جولائی، ۲۰۲۴</p>
</div>
</div>
<p className="text-base font-medium">۱٬۷۵۰ ₨</p>
</div>
<div className="flex justify-between gap-4 rounded-lg p-3 items-center">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 dark:bg-black/20 font-bold text-lg">۳</div>
<div>
<p className="font-semibold text-text-light dark:text-text-dark">تیسری قسط</p>
<p className="text-sm text-gray-600 dark:text-gray-400">ادائیگی کی تاریخ: ۱۵ اگست، ۲۰۲۴</p>
</div>
</div>
<p className="text-base font-medium">۱٬۷۵۰ ₨</p>
</div>
</div>
</section>
{/* Confirmation & Compliance */}
<section className="flex flex-col items-center gap-6 rounded-lg border border-border-light dark:border-border-dark bg-white dark:bg-black/10 p-4 sm:p-6 mt-4">
<div className="flex items-center gap-3 rounded-full bg-compliance/10 px-4 py-2 text-compliance">
<span className="material-symbols-outlined">verified</span>
<span className="font-bold">حلال - سود سے پاک</span>
</div>
<div className="w-full space-y-4">
<div className="flex items-start space-x-3 space-x-reverse">
<input className="h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary mt-0.5" id="terms" type="checkbox"/>
<div className="flex-1">
<label className="text-sm text-text-light dark:text-text-dark" htmlFor="terms">
                  میں شرائط و ضوابط سے متفق ہوں۔ <a className="font-semibold text-primary underline" href="#">مکمل شرائط پڑھیں</a>
</label>
</div>
</div>
<div className="flex items-center justify-center gap-3 rounded-lg bg-gray-100 dark:bg-black/20 p-4 text-center text-sm text-gray-700 dark:text-gray-300">
<span className="material-symbols-outlined text-2xl">fingerprint</span>
<span>انگلی یا پن سے تصدیق کریں</span>
</div>
</div>
<button className="w-full rounded-lg bg-primary py-3.5 text-lg font-bold text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-50" disabled="">
          تصدیق کریں
        </button>
</section>
</main>
</div>
</div>

    </>
  );
}
