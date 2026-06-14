
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="relative flex min-h-screen w-full flex-col">
<div className="flex flex-1">
{/* SideNavBar */}
<aside className="flex w-64 flex-col bg-background-light dark:bg-background-dark p-4 border-r border-gray-200 dark:border-gray-700">
<div className="flex flex-col justify-between h-full">
<div className="flex flex-col gap-4">
<div className="flex gap-3 items-center">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="Profile picture of Ramesh Kumar"></div>
<div className="flex flex-col">
<h1 className="text-[#121b0d] dark:text-gray-100 text-base font-medium leading-normal">Ramesh Kumar</h1>
<p className="text-[#669a4c] dark:text-primary/70 text-sm font-normal leading-normal">Farmer ID: 12345</p>
</div>
</div>
<nav className="flex flex-col gap-2 mt-4">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors" href="#">
<span className="material-symbols-outlined text-[#121b0d] dark:text-gray-300">dashboard</span>
<p className="text-[#121b0d] dark:text-gray-300 text-sm font-medium leading-normal">Dashboard</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors" href="#">
<span className="material-symbols-outlined text-[#121b0d] dark:text-gray-300">account_balance_wallet</span>
<p className="text-[#121b0d] dark:text-gray-300 text-sm font-medium leading-normal">Loans</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors" href="#">
<span className="material-symbols-outlined text-[#121b0d] dark:text-gray-300">storefront</span>
<p className="text-[#121b0d] dark:text-gray-300 text-sm font-medium leading-normal">Marketplace</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors" href="#">
<span className="material-symbols-outlined text-[#121b0d] dark:text-gray-300">groups</span>
<p className="text-[#121b0d] dark:text-gray-300 text-sm font-medium leading-normal">Community</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/20 dark:bg-primary/30" href="#">
<span className="material-symbols-outlined text-[#121b0d] dark:text-gray-100">lightbulb</span>
<p className="text-[#121b0d] dark:text-gray-100 text-sm font-medium leading-normal">Feature Request</p>
</a>
</nav>
</div>
<div className="flex flex-col gap-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors" href="#">
<span className="material-symbols-outlined text-[#121b0d] dark:text-gray-300">settings</span>
<p className="text-[#121b0d] dark:text-gray-300 text-sm font-medium leading-normal">Settings</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors" href="#">
<span className="material-symbols-outlined text-[#121b0d] dark:text-gray-300">help</span>
<p className="text-[#121b0d] dark:text-gray-300 text-sm font-medium leading-normal">Help</p>
</a>
</div>
</div>
</aside>
{/* Main Content */}
<main className="flex-1 p-6 lg:p-10">
<div className="mx-auto max-w-4xl">
{/* PageHeading */}
<div className="flex flex-wrap justify-between gap-3 p-4">
<div className="flex min-w-72 flex-col gap-3">
<p className="text-[#121b0d] dark:text-gray-100 text-4xl font-black leading-tight tracking-[-0.033em]">Koi nayi baat chahiye?</p>
<p className="text-[#669a4c] dark:text-gray-400 text-base font-normal leading-normal">Share your ideas to improve AgriConnect for everyone. Let's build a better platform together.</p>
</div>
</div>
{/* Composer */}
<div className="flex items-start p-4 gap-3 @container">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 shrink-0 mt-3" data-alt="Profile picture of Ramesh Kumar"></div>
<div className="flex-1">
<div className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-background-light dark:bg-background-dark focus-within:border-primary/50 focus-within:ring-2 focus-within:ring-primary/20">
<textarea className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden bg-transparent text-[#121b0d] dark:text-gray-200 focus:outline-0 focus:ring-0 border-0 h-28 placeholder:text-gray-400 dark:placeholder:text-gray-500 text-base font-normal leading-normal p-4" placeholder="Apna suggestion yahan likhein..."></textarea>
<div className="flex justify-end p-3 border-t border-gray-200 dark:border-gray-700">
<button className="min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-[#121b0d] text-sm font-medium leading-normal hover:bg-opacity-90 transition-colors">
<span className="truncate">Submit Suggestion</span>
</button>
</div>
</div>
</div>
</div>
{/* Filters */}
<div className="flex gap-3 p-4 overflow-x-auto">
<button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-gray-200/50 dark:bg-white/10 pl-4 pr-2">
<p className="text-[#121b0d] dark:text-gray-300 text-sm font-medium leading-normal">Most Voted</p>
<span className="material-symbols-outlined text-[#121b0d] dark:text-gray-300 text-base">keyboard_arrow_down</span>
</button>
<button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-gray-200/50 dark:bg-white/10 pl-4 pr-2">
<p className="text-[#121b0d] dark:text-gray-300 text-sm font-medium leading-normal">Most Recent</p>
<span className="material-symbols-outlined text-[#121b0d] dark:text-gray-300 text-base">keyboard_arrow_down</span>
</button>
</div>
{/* List Items */}
<div className="flex flex-col gap-4 p-4">
<div className="flex gap-4 bg-background-light dark:bg-background-dark border border-gray-200 dark:border-gray-700 p-4 rounded-xl">
<div className="flex flex-col items-center">
<button className="flex h-10 w-12 flex-col items-center justify-center gap-0.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-background-light dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
<span className="material-symbols-outlined text-lg text-gray-600 dark:text-gray-400">arrow_drop_up</span>
<span className="text-sm font-bold text-[#121b0d] dark:text-gray-200">128</span>
</button>
</div>
<div className="flex flex-1 flex-col justify-center gap-1">
<p className="text-[#121b0d] dark:text-gray-100 text-base font-medium leading-normal">Add a feature to track fertilizer usage per crop cycle.</p>
<p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">This will help us manage costs better and see the impact on yield.</p>
<div className="flex items-center gap-4 mt-1">
<p className="text-gray-500 dark:text-gray-400 text-xs font-normal">Submitted 3 days ago</p>
<span className="inline-flex items-center rounded-md bg-blue-100 dark:bg-blue-900/50 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-300">Under Consideration</span>
</div>
</div>
</div>
<div className="flex gap-4 bg-background-light dark:bg-background-dark border border-gray-200 dark:border-gray-700 p-4 rounded-xl">
<div className="flex flex-col items-center">
<button className="flex h-10 w-12 flex-col items-center justify-center gap-0.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-background-light dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
<span className="material-symbols-outlined text-lg text-gray-600 dark:text-gray-400">arrow_drop_up</span>
<span className="text-sm font-bold text-[#121b0d] dark:text-gray-200">92</span>
</button>
</div>
<div className="flex flex-1 flex-col justify-center gap-1">
<p className="text-[#121b0d] dark:text-gray-100 text-base font-medium leading-normal">Offline mode for recording sales and expenses.</p>
<p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">Many of us have poor internet in the fields. It needs to sync when we get back online.</p>
<div className="flex items-center gap-4 mt-1">
<p className="text-gray-500 dark:text-gray-400 text-xs font-normal">Submitted 1 week ago</p>
<span className="inline-flex items-center rounded-md bg-gray-100 dark:bg-gray-700 px-2 py-1 text-xs font-medium text-gray-600 dark:text-gray-300">New</span>
</div>
</div>
</div>
<div className="flex gap-4 bg-background-light dark:bg-background-dark border border-gray-200 dark:border-gray-700 p-4 rounded-xl">
<div className="flex flex-col items-center">
<button className="flex h-10 w-12 flex-col items-center justify-center gap-0.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-background-light dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
<span className="material-symbols-outlined text-lg text-gray-600 dark:text-gray-400">arrow_drop_up</span>
<span className="text-sm font-bold text-[#121b0d] dark:text-gray-200">75</span>
</button>
</div>
<div className="flex flex-1 flex-col justify-center gap-1">
<p className="text-[#121b0d] dark:text-gray-100 text-base font-medium leading-normal">Integrate with local weather forecasts.</p>
<p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">It would be very helpful to see the weather forecast directly in the app to plan activities.</p>
<div className="flex items-center gap-4 mt-1">
<p className="text-gray-500 dark:text-gray-400 text-xs font-normal">Submitted 2 weeks ago</p>
<span className="inline-flex items-center rounded-md bg-green-100 dark:bg-green-900/50 px-2 py-1 text-xs font-medium text-green-700 dark:text-green-300">Completed</span>
</div>
</div>
</div>
</div>
</div>
</main>
</div>
</div>

    </>
  );
}
