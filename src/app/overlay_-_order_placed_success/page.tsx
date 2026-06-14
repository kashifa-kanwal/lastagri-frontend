
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden">
{/* Dimmed Background */}
<div className="absolute inset-0 bg-black/40 z-10"></div>
{/* Main page content (for context) */}
<div className="layout-container flex h-full grow flex-col opacity-20">
<div className="px-40 flex flex-1 justify-center py-5">
<div className="layout-content-container flex flex-col max-w-[960px] flex-1">
<h1 className="text-[#0d1b0d] tracking-light text-[32px] font-bold leading-tight px-4 text-center pb-3 pt-6">Dummy Background Content</h1>
<div className="flex w-full grow bg-background-light dark:bg-background-dark @container p-4">
<div className="w-full gap-1 overflow-hidden bg-background-light dark:bg-background-dark @[480px]:gap-2 aspect-[2/3] rounded-xl flex">
<div className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none flex-1" data-alt="Abstract placeholder image"></div>
</div>
</div>
</div>
</div>
</div>
{/* Modal Overlay */}
<div className="absolute inset-0 z-20 flex items-center justify-center p-4">
<div className="relative flex w-full max-w-lg flex-col items-center rounded-xl bg-background-light dark:bg-background-dark font-display shadow-2xl p-6 md:p-8">
{/* Close Button */}
<button className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
<span className="material-symbols-outlined">close</span>
</button>
{/* Icon Badge */}
<div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary mb-5">
<span className="material-symbols-outlined text-white text-5xl">check</span>
</div>
{/* Headline Text */}
<h1 className="text-gray-800 dark:text-gray-100 tracking-light text-[32px] font-bold leading-tight text-center pb-4">Aap ka Order register ho gaya!</h1>
{/* Order Summary Section */}
<div className="w-full rounded-lg bg-gray-100 dark:bg-gray-800/50 p-4 mb-6">
<h3 className="text-gray-800 dark:text-gray-100 text-lg font-bold leading-tight tracking-[-0.015em] pb-3">Order summary</h3>
<div className="flex items-center gap-4 bg-transparent justify-between">
<div className="flex items-center gap-4">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14" data-alt="Sack of fertilizer"></div>
<div className="flex flex-col justify-center">
<p className="text-gray-800 dark:text-gray-100 text-base font-medium leading-normal line-clamp-1">Urea Fertilizer Bag</p>
<p className="text-primary dark:text-primary/90 text-sm font-normal leading-normal line-clamp-2">Quantity: 1</p>
</div>
</div>
<div className="shrink-0">
<p className="text-gray-800 dark:text-gray-100 text-base font-normal leading-normal">3 din mein</p>
</div>
</div>
</div>
{/* Next Steps Section */}
<div className="w-full mb-8">
<h3 className="text-gray-800 dark:text-gray-100 text-lg font-bold leading-tight tracking-[-0.015em] px-0 pb-2 pt-0">Next steps</h3>
<div className="flex items-center gap-3 rounded-lg p-3">
<span className="material-symbols-outlined text-primary text-2xl">sms</span>
<p className="text-gray-600 dark:text-gray-300">Hum aap ko message karenge</p>
</div>
</div>
{/* Action Buttons */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
<button className="w-full flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white transition-opacity hover:opacity-90">Track Order</button>
<button className="w-full flex items-center justify-center gap-2 rounded-lg border border-primary px-6 py-3 text-base font-semibold text-primary transition-colors hover:bg-primary/10">Continue Shopping</button>
</div>
{/* Progress Bar */}
<div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1 mt-8 overflow-hidden">
<div className="bg-primary h-1 rounded-full"></div>
</div>
</div>
</div>
</div>

    </>
  );
}
