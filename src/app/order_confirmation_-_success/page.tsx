
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
<div className="layout-container flex h-full grow flex-col">
<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/20 px-4 sm:px-10 py-3">
<div className="flex items-center gap-4 text-zinc-900 dark:text-white">
<div className="size-6 text-primary">
<svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z"></path>
</svg>
</div>
<h2 className="text-zinc-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">AgriConnect</h2>
</div>
<div className="hidden md:flex flex-1 justify-end items-center gap-8">
<div className="flex items-center gap-9">
<a className="text-zinc-900 dark:text-zinc-300 text-sm font-medium leading-normal" href="#">Home</a>
<a className="text-zinc-900 dark:text-zinc-300 text-sm font-medium leading-normal" href="#">Products</a>
<a className="text-zinc-900 dark:text-zinc-300 text-sm font-medium leading-normal" href="#">My Orders</a>
<a className="text-zinc-900 dark:text-zinc-300 text-sm font-medium leading-normal" href="#">Wallet</a>
</div>
<div className="flex gap-2">
<button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-primary/20 text-zinc-900 dark:text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-primary/20 text-zinc-900 dark:text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
<span className="material-symbols-outlined">help</span>
</button>
</div>
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="User profile picture"></div>
</div>
</header>
<main className="flex flex-1 justify-center py-5 px-4 sm:px-10 lg:px-20">
<div className="layout-content-container flex flex-col w-full max-w-4xl flex-1">
<div className="flex flex-col items-center justify-center text-center mt-8">
<div className="relative mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-success/10">
<div className="absolute inset-0 animate-ping rounded-full bg-success/30"></div>
<span className="material-symbols-outlined text-5xl text-success">
                                check_circle
                            </span>
</div>
<h1 className="text-zinc-900 dark:text-white tracking-tight text-3xl sm:text-4xl font-bold leading-tight">Kaamyabi! Aap ka Order Darj ho gaya</h1>
</div>
<div className="mt-8 p-4">
<div className="flex flex-col md:flex-row items-stretch justify-between gap-6 rounded-lg bg-white dark:bg-zinc-800/50 p-6 shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
<div className="flex flex-col gap-3 flex-[2_2_0px]">
<div>
<p className="text-neutral-grey dark:text-zinc-400 text-sm font-normal leading-normal">Order ID:</p>
<p className="text-zinc-900 dark:text-white text-2xl font-bold leading-tight">#AC-145789</p>
</div>
<div className="border-t border-zinc-200 dark:border-zinc-700 my-2"></div>
<p className="text-zinc-900 dark:text-white text-lg font-bold leading-tight">Urea Fertilizer Bag</p>
<p className="text-neutral-grey dark:text-zinc-400 text-sm font-normal leading-normal">Quantity: 1</p>
<p className="text-zinc-900 dark:text-white text-base font-medium leading-tight mt-1">Total Installment Amount: <span className="font-bold text-lg">Rs. 5,000</span></p>
</div>
<div className="w-full md:w-48 bg-center bg-no-repeat bg-cover rounded-lg flex-shrink-0 aspect-square" data-alt="A white bag of Urea Fertilizer with green and black text."></div>
</div>
</div>
<div className="grid grid-cols-[auto_1fr] gap-x-4 px-4 mt-8">
<div className="flex flex-col items-center gap-1 pt-1">
<div className="text-success material-symbols-outlined text-2xl">check_circle</div>
<div className="w-[2px] bg-primary h-full"></div>
</div>
<div className="flex flex-1 flex-col pb-8">
<p className="text-zinc-900 dark:text-white text-base font-bold leading-normal">Darj</p>
<p className="text-neutral-grey dark:text-zinc-400 text-sm font-normal leading-normal">Placed</p>
</div>
<div className="flex flex-col items-center gap-1">
<div className="w-[2px] bg-primary h-1"></div>
<div className="relative flex items-center justify-center">
<div className="absolute h-6 w-6 rounded-full bg-brand-blue/20 animate-pulse"></div>
<div className="text-brand-blue material-symbols-outlined text-2xl">sync</div>
</div>
<div className="w-[2px] bg-zinc-200 dark:bg-zinc-700 h-full grow"></div>
</div>
<div className="flex flex-1 flex-col pb-8">
<p className="text-zinc-900 dark:text-white text-base font-bold leading-normal">Tayyari mein</p>
<p className="text-neutral-grey dark:text-zinc-400 text-sm font-normal leading-normal">Preparing</p>
</div>
<div className="flex flex-col items-center gap-1">
<div className="w-[2px] bg-zinc-200 dark:bg-zinc-700 h-1"></div>
<div className="text-neutral-grey dark:text-zinc-500 material-symbols-outlined text-2xl">local_shipping</div>
<div className="w-[2px] bg-zinc-200 dark:bg-zinc-700 h-full grow"></div>
</div>
<div className="flex flex-1 flex-col pb-8">
<p className="text-neutral-grey dark:text-zinc-500 text-base font-medium leading-normal">Bhejaa jayega</p>
<p className="text-neutral-grey dark:text-zinc-500 text-sm font-normal leading-normal">Dispatching</p>
</div>
<div className="flex flex-col items-center gap-1 pb-1">
<div className="w-[2px] bg-zinc-200 dark:bg-zinc-700 h-1"></div>
<div className="text-neutral-grey dark:text-zinc-500 material-symbols-outlined text-2xl">inventory_2</div>
</div>
<div className="flex flex-1 flex-col">
<p className="text-neutral-grey dark:text-zinc-500 text-base font-medium leading-normal">Pahuncha diya</p>
<p className="text-neutral-grey dark:text-zinc-500 text-sm font-normal leading-normal">Delivered</p>
</div>
</div>
<div className="text-center bg-primary/10 dark:bg-primary/20 p-4 rounded-lg mt-10">
<p className="text-zinc-900 dark:text-white font-medium">Aapka order <span className="font-bold">25 December, 2023</span> tak pohnchay ga</p>
</div>
<div className="mt-10 p-4">
<div className="border border-zinc-200 dark:border-zinc-700 rounded-lg p-6">
<h3 className="text-zinc-900 dark:text-white text-lg font-bold mb-1">Agla Marhala (Next Steps)</h3>
<p className="text-neutral-grey dark:text-zinc-400 text-base mb-4">Pehli Qist ki Tasdeed: <span className="font-semibold text-zinc-800 dark:text-zinc-200">30 December, 2023</span></p>
<p className="text-neutral-grey dark:text-zinc-400 text-sm">Please visit the Wallet section to confirm your first installment payment.</p>
</div>
</div>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 px-4">
<button className="flex w-full sm:w-auto max-w-xs cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 bg-brand-blue text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] px-8">Apne Orders Dekhein</button>
<button className="flex w-full sm:w-auto max-w-xs cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 bg-transparent text-brand-blue border-2 border-brand-blue gap-2 text-base font-bold leading-normal tracking-[0.015em] px-8">Mazeed Khareedaari</button>
</div>
<div className="mt-12 mb-8 text-center">
<a className="inline-flex items-center gap-3 text-neutral-grey dark:text-zinc-400 hover:text-brand-blue dark:hover:text-brand-blue transition-colors" href="#">
<svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.6 15.31 3.44 16.74L2.01 21.49L7 19.98C8.35 20.76 9.92 21.19 11.53 21.19H12.03C17.49 21.19 21.94 16.74 21.94 11.28C21.94 5.82 17.5 2 12.04 2ZM17.11 14.5C16.86 14.62 15.7 15.17 15.45 15.29C15.2 15.41 15.01 15.47 14.82 15.72C14.63 15.97 14.02 16.63 13.71 16.94C13.4 17.25 13.09 17.28 12.78 17.16C12.47 17.04 11.23 16.59 9.77 15.29C8.62 14.28 7.91 13.04 7.73 12.73C7.55 12.42 7.71 12.27 7.86 12.12C8 11.97 8.18 11.75 8.36 11.54C8.54 11.33 8.6 11.18 8.72 10.93C8.84 10.68 8.78 10.47 8.69 10.28C8.6 10.09 8.12 8.85 7.91 8.35C7.7 7.85 7.48 7.92 7.31 7.91H6.78C6.59 7.91 6.28 7.97 5.97 8.28C5.66 8.59 4.96 9.25 4.96 10.55C4.96 11.85 5.99 13.1 6.14 13.28C6.29 13.46 8.12 16.21 10.8 17.39C13.48 18.57 13.48 18.06 13.99 18.00C14.5 17.94 15.7 17.32 15.92 16.69C16.14 16.06 16.14 15.55 16.08 15.47C16.02 15.39 15.83 15.33 15.58 15.21C15.33 15.09 17.36 14.04 17.11 14.5Z"></path></svg>
<span className="font-medium">Apne Doston ke saath share karein</span>
</a>
</div>
</div>
</main>
</div>
</div>

    </>
  );
}
