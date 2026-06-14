
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden">
<div className="layout-container flex h-full grow flex-col">
<div className="flex flex-1 justify-center items-center p-4 sm:p-6 md:p-8">
{/* Background content to show the overlay effect */}
<div className="absolute inset-0 z-0">
<div className="w-full h-full bg-center bg-no-repeat bg-cover aspect-auto" data-alt="Faded view of an agricultural dashboard showing charts and data."></div>
</div>
{/* Full-Screen Overlay Container */}
<div className="absolute inset-0 z-10 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
<div className="layout-content-container flex flex-col max-w-[480px] flex-1 bg-[#f8fcf8] dark:bg-[#0d1b0d] rounded-xl shadow-2xl overflow-hidden">
<div className="relative p-6 sm:p-8 text-center">
{/* Animated Icon */}
<div className="flex justify-center mb-4">
<div className="w-20 h-20 bg-[#28a745] rounded-full flex items-center justify-center text-white">
<span className="material-symbols-outlined !text-6xl">check</span>
</div>
</div>
{/* Headline Text */}
<h1 className="text-[#0d1b0d] dark:text-white tracking-tight text-4xl font-bold leading-tight">کامیابی!</h1>
{/* Body Text */}
<p className="text-[#4c9a4c] dark:text-gray-300 text-base font-normal leading-normal pt-2">Your payment was successful.</p>
{/* Divider */}
<hr className="border-t border-gray-200 dark:border-gray-700 my-6"/>
{/* Description List */}
<div className="text-left">
<div className="flex justify-between gap-x-6 py-2.5">
<p className="text-[#4c9a4c] dark:text-gray-400 text-sm font-normal leading-normal">Payment Amount</p>
<p className="text-[#0d1b0d] dark:text-white text-sm font-medium leading-normal text-right">Rs. 5,000</p>
</div>
<div className="flex justify-between gap-x-6 py-2.5">
<p className="text-[#4c9a4c] dark:text-gray-400 text-sm font-normal leading-normal">Order Reference</p>
<p className="text-[#0d1b0d] dark:text-white text-sm font-medium leading-normal text-right">#AGRI-12345</p>
</div>
<div className="flex justify-between gap-x-6 py-2.5">
<p className="text-[#4c9a4c] dark:text-gray-400 text-sm font-normal leading-normal">New Wallet Balance</p>
<p className="text-[#0d1b0d] dark:text-white text-sm font-medium leading-normal text-right">Rs. 15,000</p>
</div>
<div className="flex justify-between gap-x-6 py-2.5">
<p className="text-[#4c9a4c] dark:text-gray-400 text-sm font-normal leading-normal">Transaction ID</p>
<p className="text-[#0d1b0d] dark:text-white text-sm font-medium leading-normal text-right">TXN987654321</p>
</div>
</div>
</div>
{/* Button Group */}
<div className="bg-gray-50 dark:bg-black/20 p-4 sm:p-6">
<div className="flex flex-col items-stretch gap-3">
<button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-[#0d1b0d] text-base font-bold leading-normal tracking-[0.015em] w-full transition-opacity hover:opacity-90">
<span className="truncate">Done</span>
</button>
<button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary/20 dark:bg-primary/10 text-[#0d1b0d] dark:text-white text-base font-bold leading-normal tracking-[0.015em] w-full transition-colors hover:bg-primary/30 dark:hover:bg-primary/20">
<span className="truncate">Share Receipt</span>
</button>
<button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-transparent text-[#0d1b0d] dark:text-white text-base font-bold leading-normal tracking-[0.015em] w-full transition-colors hover:bg-gray-200 dark:hover:bg-white/10">
<span className="truncate">View Wallet</span>
</button>
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
