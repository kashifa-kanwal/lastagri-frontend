
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
<div className="layout-container flex h-full grow flex-col">
<div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
<div className="layout-content-container flex flex-col w-full max-w-4xl flex-1">
{/* SearchBar */}
<div className="px-4 py-3 mb-8">
<label className="flex flex-col min-w-40 h-14 w-full">
<div className="flex w-full flex-1 items-stretch rounded-xl h-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-agri-background-dark shadow-sm">
<div className="text-agri-text dark:text-agri-text-dark flex items-center justify-center pl-4">
<span className="material-symbols-outlined">search</span>
</div>
<input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden text-agri-text dark:text-agri-text-dark focus:outline-0 focus:ring-0 border-none bg-transparent h-full placeholder:text-gray-400 dark:placeholder:text-gray-500 px-4 text-base font-normal leading-normal" placeholder="یہاں تلاش کریں..." defaultValue="بیج گندم"/>
<div className="flex items-center justify-center pr-4">
<button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-transparent text-agri-text dark:text-agri-text-dark gap-2 text-base font-bold h-auto min-w-0 px-0">
<span className="material-symbols-outlined text-gray-500 dark:text-gray-400">close</span>
</button>
</div>
</div>
</label>
</div>
{/* EmptyState */}
<div className="flex flex-col items-center justify-center text-center flex-grow px-4 py-6">
<div className="flex flex-col items-center gap-6 max-w-lg w-full">
<div className="flex items-center justify-center w-28 h-28 rounded-full bg-agri-green-light dark:bg-opacity-20">
<span className="material-symbols-outlined text-5xl text-agri-accent">search_off</span>
</div>
<div className="flex max-w-md flex-col items-center gap-2">
<h1 className="text-agri-text dark:text-agri-text-dark text-3xl font-bold leading-tight tracking-tight">کوئی نتیجہ نہیں ملا</h1>
<p className="text-agri-text dark:text-agri-text-dark/80 text-base font-normal leading-normal">
                                    'بیج گندم' کے لیے کوئی پروڈکٹ نہیں ملا۔
                                </p>
</div>
<div className="bg-gray-100 dark:bg-gray-800/50 p-4 rounded-lg w-full max-w-sm text-left">
<ul className="space-y-2 text-agri-text dark:text-agri-text-dark/90 text-sm">
<li className="flex items-start gap-2">
<span className="material-symbols-outlined text-base mt-0.5 text-agri-green">check_circle</span>
<span>اسپلنگ چیک کریں</span>
</li>
<li className="flex items-start gap-2">
<span className="material-symbols-outlined text-base mt-0.5 text-agri-green">check_circle</span>
<span>آسان الفاظ استعمال کریں</span>
</li>
<li className="flex items-start gap-2">
<span className="material-symbols-outlined text-base mt-0.5 text-agri-green">check_circle</span>
<span>دوسری کیٹیگری میں تلاش کریں</span>
</li>
</ul>
</div>
<button className="flex w-full max-w-xs cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-agri-green text-white text-base font-bold leading-normal tracking-wide shadow-lg hover:bg-agri-green/90 focus:outline-none focus:ring-2 focus:ring-agri-green focus:ring-offset-2 dark:focus:ring-offset-agri-background-dark transition-colors duration-200">
<span className="truncate">تمام پروڈکٹس دیکھیں</span>
</button>
</div>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
