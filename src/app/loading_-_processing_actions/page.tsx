
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="relative flex min-h-screen w-full flex-col">
<div className="flex-1">
<div className="p-8 md:p-12 lg:p-16">
<div className="mx-auto max-w-4xl space-y-12">
{/* Section for Inline Button Loaders */}
<div>
<h1 className="text-2xl font-bold text-[#333333] dark:text-white mb-2">Inline Button Loading States</h1>
<p className="text-gray-600 dark:text-gray-400 mb-6">For quick, non-critical actions. The button's width is maintained to prevent layout shifts.</p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-white dark:bg-gray-800/50 rounded-lg shadow-sm">
{/* English Examples */}
<div className="space-y-4">
<h3 className="font-semibold text-[#333333] dark:text-white">English</h3>
{/* Default Button */}
<button className="flex w-48 cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-wide shadow-sm transition-colors hover:bg-primary/90">
<span>Approve Loan</span>
</button>
{/* Loading Button */}
<button className="flex w-48 cursor-not-allowed items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#BDBDBD] text-[#757575] gap-2 text-sm font-bold leading-normal tracking-wide" disabled="">
<span className="material-symbols-outlined animate-spin text-base text-[#757575]">progress_activity</span>
<span className="truncate">Processing...</span>
</button>
<button className="flex w-48 cursor-not-allowed items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#BDBDBD] text-[#757575] gap-2 text-sm font-bold leading-normal tracking-wide" disabled="">
<span className="material-symbols-outlined animate-spin text-base text-[#757575]">progress_activity</span>
<span className="truncate">Saving...</span>
</button>
</div>
{/* Urdu Examples */}
<div className="space-y-4" dir="rtl">
<h3 className="font-semibold text-[#333333] dark:text-white">Urdu</h3>
{/* Default Button */}
<button className="flex w-48 cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-wide shadow-sm transition-colors hover:bg-primary/90">
<span>قرض منظور کریں</span>
</button>
{/* Loading Button */}
<button className="flex w-48 cursor-not-allowed items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#BDBDBD] text-[#757575] gap-2 text-sm font-bold leading-normal tracking-wide" disabled="">
<span className="truncate">پروسیسنگ...</span>
<span className="material-symbols-outlined animate-spin text-base text-[#757575]">progress_activity</span>
</button>
<button className="flex w-48 cursor-not-allowed items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#BDBDBD] text-[#757575] gap-2 text-sm font-bold leading-normal tracking-wide" disabled="">
<span className="truncate">محفوظ ہو رہا ہے...</span>
<span className="material-symbols-outlined animate-spin text-base text-[#757575]">progress_activity</span>
</button>
</div>
</div>
</div>
{/* Section for Modal Overlay Loader */}
<div>
<h1 className="text-2xl font-bold text-[#333333] dark:text-white mb-2">Full-Screen Modal Loader</h1>
<p className="text-gray-600 dark:text-gray-400 mb-6">For critical, long-running processes that require user focus. The background is non-interactive.</p>
<div className="relative h-96 w-full overflow-hidden rounded-lg bg-white dark:bg-gray-800/50 shadow-sm">
{/* Background UI mockup */}
<div className="p-6 space-y-4 opacity-50">
<div className="h-8 w-3/4 rounded bg-gray-200 dark:bg-gray-700"></div>
<div className="space-y-2">
<div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-700"></div>
<div className="h-4 w-5/6 rounded bg-gray-200 dark:bg-gray-700"></div>
</div>
<div className="h-10 w-40 rounded-lg bg-gray-300 dark:bg-gray-600 mt-4"></div>
</div>
{/* Modal Overlay */}
<div className="absolute inset-0 flex items-center justify-center bg-black/60 p-4">
<div className="flex w-full max-w-sm flex-col items-center gap-6 rounded-xl bg-white dark:bg-gray-900 px-8 py-10 shadow-2xl text-center">
<span className="material-symbols-outlined animate-spin text-5xl text-primary">progress_activity</span>
<div className="flex flex-col gap-3 w-full">
<div className="flex items-baseline justify-between gap-4">
<p className="text-[#333333] dark:text-white text-base font-medium leading-normal">Uploading documents...</p>
<p className="text-[#333333] dark:text-gray-300 text-sm font-normal leading-normal">45%</p>
</div>
<div className="w-full rounded-full bg-gray-200 dark:bg-gray-700">
<div className="h-2 rounded-full bg-primary"></div>
</div>
<p className="text-primary text-sm font-medium leading-normal self-end" dir="rtl">45% مکمل</p>
</div>
<button className="mt-2 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-gray-200 dark:bg-gray-700 text-[#757575] dark:text-gray-400 gap-2 text-sm font-bold leading-normal tracking-wide transition-colors hover:bg-gray-300 dark:hover:bg-gray-600">
<span>Cancel</span>
</button>
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
