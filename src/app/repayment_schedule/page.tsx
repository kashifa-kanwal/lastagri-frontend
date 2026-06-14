
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
<div className="layout-container flex h-full grow flex-col">
<div className="px-4 sm:px-10 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
<div className="layout-content-container flex flex-col max-w-[960px] flex-1">
{/* Page Heading */}
<div className="flex flex-wrap items-center justify-between gap-4 p-4">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-deep-green dark:text-primary text-4xl">calendar_month</span>
<div className="flex flex-col">
<h1 className="text-deep-green dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Qistonki Jadwal</h1>
<p className="text-neutral-grey dark:text-gray-400 text-base font-normal leading-normal">Order #12345 - Wheat Seeds</p>
</div>
</div>
<div className="relative">
<select className="appearance-none w-full sm:w-auto bg-white dark:bg-background-dark border border-gray-300 dark:border-neutral-grey text-dark-grey dark:text-white py-2 pl-3 pr-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-deep-green">
<option>Order #12345 - Wheat Seeds</option>
<option>Order #67890 - Fertilizer</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-dark-grey dark:text-white">
<span className="material-symbols-outlined">expand_more</span>
</div>
</div>
</div>
{/* Filter Chips */}
<div className="flex flex-wrap gap-3 p-3">
<button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-deep-green/10 dark:bg-primary/20 pl-3 pr-4 ring-2 ring-deep-green dark:ring-primary">
<span className="material-symbols-outlined text-deep-green dark:text-primary text-base">hourglass_top</span>
<p className="text-deep-green dark:text-white text-sm font-medium leading-normal">Aane wali</p>
</button>
<button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-gray-200 dark:bg-neutral-grey/30 pl-3 pr-4">
<span className="material-symbols-outlined text-dark-grey dark:text-gray-300 text-base">task_alt</span>
<p className="text-dark-grey dark:text-gray-300 text-sm font-medium leading-normal">Mukammal</p>
</button>
<button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-gray-200 dark:bg-neutral-grey/30 pl-3 pr-4">
<span className="material-symbols-outlined text-dark-grey dark:text-gray-300 text-base">warning</span>
<p className="text-dark-grey dark:text-gray-300 text-sm font-medium leading-normal">Waqt guzar gaya</p>
</button>
</div>
{/* Accordions */}
<div className="flex flex-col p-4 gap-3">
<details className="flex flex-col rounded-lg border border-gray-200 dark:border-neutral-grey/50 bg-white dark:bg-background-dark px-[15px] py-[7px] group">
<summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-success-green">check_circle</span>
<p className="text-neutral-grey dark:text-gray-400 text-sm font-medium leading-normal">Qist 1/12 | 15 Muharram 1446 / 21 July 2024 | Rs. 5,000</p>
</div>
<div className="flex items-center gap-4">
<span className="inline-flex items-center rounded-full bg-success-green/10 px-3 py-1 text-xs font-medium text-success-green">Mukammal</span>
<span className="material-symbols-outlined text-dark-grey dark:text-white group-open:rotate-180 transition-transform">expand_more</span>
</div>
</summary>
<div className="border-t border-gray-200 dark:border-neutral-grey/50 mt-2 pt-2">
<p className="text-dark-grey dark:text-gray-300 text-sm font-normal leading-normal pb-2">Principal: Rs. 4,800, Fee: Rs. 200.<br/>Payment History: Paid on 20 July 2024 via EasyPaisa.</p>
</div>
</details>
<details className="flex flex-col rounded-lg border-2 border-deep-green dark:border-primary bg-white dark:bg-background-dark px-[15px] py-[7px] group" open="">
<summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-deep-green dark:text-primary">hourglass_empty</span>
<p className="text-dark-grey dark:text-white text-sm font-medium leading-normal">Qist 2/12 | 15 Safar 1446 / 20 August 2024 | Rs. 5,000</p>
</div>
<div className="flex items-center gap-4">
<span className="inline-flex items-center rounded-full bg-deep-green/10 dark:bg-primary/20 px-3 py-1 text-xs font-medium text-deep-green dark:text-primary">Aane wali</span>
<span className="material-symbols-outlined text-dark-grey dark:text-white group-open:rotate-180 transition-transform">expand_more</span>
</div>
</summary>
<div className="border-t border-gray-200 dark:border-neutral-grey/50 mt-2 pt-2">
<p className="text-dark-grey dark:text-gray-300 text-sm font-normal leading-normal pb-3">Principal: Rs. 4,800, Fee: Rs. 200.<br/>Payment History: No payments made yet.</p>
<button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-deep-green hover:bg-deep-green/90 dark:bg-primary dark:hover:bg-primary/90 text-white dark:text-dark-grey text-sm font-bold leading-normal tracking-[0.015em]">
<span className="truncate">Make Payment</span>
</button>
</div>
</details>
<details className="flex flex-col rounded-lg border border-alert-red bg-alert-red/10 dark:bg-alert-red/20 px-[15px] py-[7px] group">
<summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-alert-red">error</span>
<p className="text-dark-grey dark:text-white text-sm font-medium leading-normal">Qist 3/12 | 15 Rabi' al-awwal 1446 / 19 September 2024 | Rs. 5,000</p>
</div>
<div className="flex items-center gap-4">
<span className="inline-flex items-center rounded-full bg-alert-red/20 px-3 py-1 text-xs font-medium text-alert-red">Waqt guzar gaya</span>
<span className="material-symbols-outlined text-dark-grey dark:text-white group-open:rotate-180 transition-transform">expand_more</span>
</div>
</summary>
<div className="border-t border-alert-red/30 mt-2 pt-2">
<p className="text-dark-grey dark:text-gray-300 text-sm font-normal leading-normal pb-3">Principal: Rs. 4,800, Fee: Rs. 200.<br/>Payment History: No payments made yet.</p>
<button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-alert-red hover:bg-alert-red/90 text-white text-sm font-bold leading-normal tracking-[0.015em]">
<span className="truncate">Pay Now</span>
</button>
</div>
</details>
</div>
{/* Summary Footer */}
<div className="mt-8 mb-4 p-4">
<div className="flex flex-wrap gap-4 p-4 border border-gray-200 dark:border-neutral-grey/50 rounded-xl bg-white dark:bg-background-dark/80">
<div className="flex min-w-[158px] flex-1 flex-col gap-2 p-4">
<p className="text-neutral-grey dark:text-gray-400 text-base font-medium leading-normal">Total Installments</p>
<p className="text-deep-green dark:text-white tracking-light text-3xl font-bold leading-tight">12</p>
</div>
<div className="flex min-w-[158px] flex-1 flex-col gap-2 p-4">
<p className="text-neutral-grey dark:text-gray-400 text-base font-medium leading-normal">Completed</p>
<p className="text-deep-green dark:text-white tracking-light text-3xl font-bold leading-tight">1</p>
</div>
<div className="flex min-w-[158px] flex-1 flex-col gap-2 p-4">
<p className="text-neutral-grey dark:text-gray-400 text-base font-medium leading-normal">Remaining Amount</p>
<p className="text-deep-green dark:text-white tracking-light text-3xl font-bold leading-tight">Rs. 55,000</p>
</div>
</div>
{/* Progress Bar */}
<div className="w-full bg-gray-200 dark:bg-neutral-grey/30 rounded-full h-2.5 mt-4">
<div className="bg-success-green h-2.5 rounded-full"></div>
</div>
</div>
{/* Motivational Message & Download */}
<div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-4 mt-4 bg-deep-green/5 dark:bg-primary/10 rounded-xl">
<div className="flex items-center gap-4">
<img alt="Illustration of a happy farmer." className="h-16 w-16 object-cover rounded-full" data-alt="Illustration of a happy farmer." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAY3Zuns1pFph1AT9ktRDWlE09IJK5kkEOMyUTRSvG1Z9oFHgf-mKAbAMx96v9xiNDJ8dpI2gdzGUNGlgk8xhUxajQkJ3CDk1dqOCRUN07X4autpfoa3uiyYdvzBmiYW4TdcnoOMHCNTcfHEColyOyRJvAdem3bmQxPLZe7EXr9iy2DNTCdlrNZBZ-e7ks5bdx6PvYLKWkWL-db00TwPh109nSC3ex390c0WA48xbUmE3wZNKxQ2SMaR4hAM1PNcQINEGf3pfolbgo"/>
<div>
<p className="text-deep-green dark:text-white text-lg font-bold">Tamam Qistain Waqt se Ada karein</p>
<p className="text-neutral-grey dark:text-gray-400 text-sm">Pay all installments on time.</p>
</div>
</div>
<button className="flex items-center justify-center gap-2 cursor-pointer rounded-lg h-10 px-4 text-deep-green dark:text-primary text-sm font-bold leading-normal tracking-[0.015em] border-2 border-deep-green dark:border-primary hover:bg-deep-green/10 dark:hover:bg-primary/20 transition-colors">
<span className="material-symbols-outlined">download</span>
<span className="truncate">Download PDF Schedule</span>
</button>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
