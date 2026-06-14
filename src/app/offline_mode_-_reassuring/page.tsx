
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
<div className="layout-container flex h-full grow flex-col">
<div className="px-4 sm:px-10 md:px-20 lg:px-40 flex flex-1 justify-center py-10 sm:py-20">
<div className="layout-content-container flex flex-col max-w-[960px] flex-1 items-center">
{/* EmptyState Component Start */}
<div className="flex flex-col items-center gap-6 w-full max-w-xl text-center">
<div className="flex items-center justify-center text-gray-500 dark:text-gray-400">
<span className="material-symbols-outlined text-6xl">
                                cloud_off
                            </span>
</div>
<div className="flex max-w-[480px] flex-col items-center gap-2">
<p className="text-gray-900 dark:text-white text-2xl font-bold leading-tight tracking-[-0.015em]">Internet ka rishta nahi hai</p>
<p className="text-gray-600 dark:text-gray-300 text-base font-normal leading-normal">
                                Koi baat nahi! Aap ab bhi kaam kar saktay hain. Jab internet aa jayega, sab kuch apne aap sync ho jayega.
                            </p>
</div>
<button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-transparent border border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-200 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
<span className="truncate">Retry Connection</span>
</button>
</div>
{/* EmptyState Component End */}
{/* MetaText Component Start */}
<p className="text-[#92c9ad] text-sm font-normal leading-normal pt-8 pb-4 text-center">Aakhri sync: 5 minutes pehle</p>
{/* MetaText Component End */}
<div className="w-full max-w-lg mt-4 space-y-6">
{/* Offline-available actions Section */}
<div>
{/* SectionHeader Component Start */}
<h3 className="text-gray-800 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Offline-available actions</h3>
{/* SectionHeader Component End */}
<div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/20 dark:bg-black/20 overflow-hidden">
{/* ListItem Component */}
<div className="flex items-center gap-4 bg-transparent px-4 min-h-14 justify-between border-b border-gray-200 dark:border-gray-800 last:border-b-0">
<div className="flex items-center gap-4">
<div className="text-success flex items-center justify-center shrink-0 size-10">
<span className="material-symbols-outlined">check_circle</span>
</div>
<p className="text-gray-800 dark:text-white text-base font-normal leading-normal flex-1 truncate">View Credit Limit</p>
</div>
</div>
{/* ListItem Component */}
<div className="flex items-center gap-4 bg-transparent px-4 min-h-14 justify-between border-b border-gray-200 dark:border-gray-800 last:border-b-0">
<div className="flex items-center gap-4">
<div className="text-success flex items-center justify-center shrink-0 size-10">
<span className="material-symbols-outlined">check_circle</span>
</div>
<p className="text-gray-800 dark:text-white text-base font-normal leading-normal flex-1 truncate">Browse Products (cached)</p>
</div>
</div>
{/* ListItem Component */}
<div className="flex items-center gap-4 bg-transparent px-4 min-h-14 justify-between border-b border-gray-200 dark:border-gray-800 last:border-b-0">
<div className="flex items-center gap-4">
<div className="text-success flex items-center justify-center shrink-0 size-10">
<span className="material-symbols-outlined">check_circle</span>
</div>
<p className="text-gray-800 dark:text-white text-base font-normal leading-normal flex-1 truncate">View Installment Schedule</p>
</div>
</div>
</div>
</div>
{/* Greyed out actions Section */}
<div>
{/* SectionHeader Component Start */}
<h3 className="text-gray-800 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Greyed out actions</h3>
{/* SectionHeader Component End */}
<div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/20 dark:bg-black/20 overflow-hidden opacity-60">
{/* ListItem Component */}
<div className="flex items-center gap-4 bg-transparent px-4 min-h-14 justify-between border-b border-gray-200 dark:border-gray-800 last:border-b-0">
<div className="flex items-center gap-4">
<div className="text-muted flex items-center justify-center shrink-0 size-10">
<span className="material-symbols-outlined">cancel</span>
</div>
<p className="text-gray-600 dark:text-gray-400 text-base font-normal leading-normal flex-1 truncate">Place New Order</p>
</div>
</div>
{/* ListItem Component */}
<div className="flex items-center gap-4 bg-transparent px-4 min-h-14 justify-between border-b border-gray-200 dark:border-gray-800 last:border-b-0">
<div className="flex items-center gap-4">
<div className="text-muted flex items-center justify-center shrink-0 size-10">
<span className="material-symbols-outlined">cancel</span>
</div>
<p className="text-gray-600 dark:text-gray-400 text-base font-normal leading-normal flex-1 truncate">Make a Payment</p>
</div>
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
