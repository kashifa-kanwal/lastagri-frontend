
import React from 'react';

export default function Page() {
  return (
    <>
      



{/* This is a mock background to showcase the overlay */}
<div className="h-screen w-full p-8 blur-sm">
<div className="mx-auto max-w-5xl">
<h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">AgriConnect Dashboard</h1>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="h-40 rounded-xl bg-white dark:bg-gray-800/50 shadow"></div>
<div className="h-40 rounded-xl bg-white dark:bg-gray-800/50 shadow"></div>
<div className="h-40 rounded-xl bg-white dark:bg-gray-800/50 shadow"></div>
<div className="h-40 rounded-xl bg-white dark:bg-gray-800/50 shadow col-span-1 md:col-span-2"></div>
<div className="h-40 rounded-xl bg-white dark:bg-gray-800/50 shadow"></div>
</div>
</div>
</div>
{/* End of mock background */}
{/* Modal Overlay */}
<div className="fixed inset-0 z-50 flex items-center justify-center p-4">
{/* Scrim */}
<div className="absolute inset-0 bg-black/50"></div>
{/* Card */}
<div className="relative flex w-full max-w-md flex-col overflow-hidden rounded-xl bg-white dark:bg-background-dark shadow-2xl">
<div className="flex flex-col items-center p-8 text-center">
{/* Close Icon Button */}
<button className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/10">
<span className="material-symbols-outlined text-xl">close</span>
</button>
{/* Primary Icon */}
<div className="relative mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#1E8449]/20">
<span className="material-symbols-outlined text-5xl text-[#1E8449]">shield</span>
<div className="absolute flex h-8 w-8 items-center justify-center rounded-full bg-[#2ECC71] -bottom-1 -right-1 border-4 border-white dark:border-background-dark">
<span className="material-symbols-outlined text-lg text-white">check</span>
</div>
</div>
{/* HeadlineText */}
<h1 className="font-display text-[#34495E] dark:text-background-light tracking-tight text-[32px] font-bold leading-tight pb-2 pt-2">Tasdeeq mukammal!</h1>
{/* BodyText */}
<p className="font-display text-[#34495E] dark:text-gray-300 text-base font-normal leading-normal pb-6">Aap ab products khareed saktay hain</p>
{/* MetaText */}
<p className="font-display text-[#34495E] dark:text-gray-400 text-sm font-normal leading-normal pb-1">Aap ki limit:</p>
{/* HeadlineText for Limit */}
<h1 className="font-display text-[#1E8449] tracking-tight text-[40px] font-bold leading-tight pb-8">₨50,000</h1>
{/* SingleButton */}
<div className="flex w-full justify-center">
<button className="flex min-w-[84px] w-full max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 bg-[#1E8449] text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#196F3D] transition-colors">
<span className="truncate">Start Shopping</span>
</button>
</div>
</div>
{/* Progress Bar for auto-dismiss */}
<div className="h-1 w-full bg-[#1E8449]/20">
<div className="h-1 bg-[#1E8449]"></div> {/* Example width, can be animated */}
</div>
</div>
</div>

    </>
  );
}
