
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden">
{/* Non-blocking Sync Banner */}
<div className="sticky top-0 left-0 right-0 z-50 w-full bg-[#2A6F97] text-white">
<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined animate-pulse">cloud_sync</span>
<div>
<p className="font-bold">Syncing your data...</p>
<p className="text-sm text-gray-200">Synchronizing item 3 of 5</p>
</div>
</div>
</div>
</div>
{/* This is a second, commented out state for the banner to show the "Success" state */}
{/* 
        <div className="sticky top-0 left-0 right-0 z-50 w-full bg-[#4CAF50] text-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
                <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined">check_circle</span>
                    <div>
                        <p className="font-bold">Sync complete. All data is up to date.</p>
                    </div>
                </div>
                <button className="rounded-full p-1 hover:bg-white/20">
                    <span className="material-symbols-outlined">close</span>
                </button>
            </div>
        </div>
        */}
<div className="layout-container flex h-full grow flex-col">
<div className="flex flex-1 justify-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 py-5">
<div className="layout-content-container flex flex-col max-w-[960px] flex-1">
<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 dark:border-gray-700 px-10 py-3">
<div className="flex items-center gap-8">
<div className="flex items-center gap-4 text-gray-900 dark:text-white">
<div className="size-6 text-primary">
<svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
</svg>
</div>
<h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">AgriConnect</h2>
</div>
<label className="hidden md:flex flex-col min-w-40 !h-10 max-w-64">
<div className="flex w-full flex-1 items-stretch rounded-lg h-full">
<div className="text-gray-500 dark:text-gray-400 flex border-none bg-gray-100 dark:bg-gray-800 items-center justify-center pl-4 rounded-l-lg border-r-0">
<span className="material-symbols-outlined text-base">search</span>
</div>
<input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-0 border-none bg-gray-100 dark:bg-gray-800 focus:border-none h-full placeholder:text-gray-500 dark:placeholder:text-gray-400 px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal" placeholder="Search" defaultValue=""/>
</div>
</label>
</div>
<div className="flex flex-1 justify-end gap-4 md:gap-8">
<div className="hidden lg:flex items-center gap-6">
<a className="text-sm font-medium leading-normal text-gray-900 dark:text-gray-300 hover:text-primary dark:hover:text-primary" href="#">Dashboard</a>
<a className="text-sm font-medium leading-normal text-gray-900 dark:text-gray-300 hover:text-primary dark:hover:text-primary" href="#">Loans</a>
<a className="text-sm font-medium leading-normal text-gray-900 dark:text-gray-300 hover:text-primary dark:hover:text-primary" href="#">Marketplace</a>
<a className="text-sm font-medium leading-normal text-gray-900 dark:text-gray-300 hover:text-primary dark:hover:text-primary" href="#">Support</a>
</div>
<div className="flex items-center gap-2">
<button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-300 gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 hover:bg-gray-200 dark:hover:bg-gray-700">
<span className="material-symbols-outlined text-lg">notifications</span>
</button>
<button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-300 gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 hover:bg-gray-200 dark:hover:bg-gray-700">
<span className="material-symbols-outlined text-lg">settings</span>
</button>
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="User profile picture"></div>
</div>
</div>
</header>
<main className="flex-1 space-y-8 p-4 md:p-10">
<div className="flex flex-wrap justify-between gap-3">
<div className="flex min-w-72 flex-col gap-3">
<p className="text-4xl font-black leading-tight tracking-[-0.033em] text-gray-900 dark:text-white">Farmer Dashboard</p>
<p className="text-base font-normal leading-normal text-gray-600 dark:text-gray-400">Welcome back, view your recent activity and loan status.</p>
</div>
</div>
<div className="flex flex-wrap gap-4">
<div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50">
<p className="text-base font-medium leading-normal text-gray-900 dark:text-gray-300">Active Loan</p>
<p className="tracking-light text-2xl font-bold leading-tight text-gray-900 dark:text-white">$1,200</p>
</div>
<div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50">
<p className="text-base font-medium leading-normal text-gray-900 dark:text-gray-300">Next Payment Due</p>
<p className="tracking-light text-2xl font-bold leading-tight text-gray-900 dark:text-white">July 15, 2024</p>
</div>
<div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50">
<p className="text-base font-medium leading-normal text-gray-900 dark:text-gray-300">Credit Limit</p>
<div className="flex items-baseline gap-2">
<p className="tracking-light text-2xl font-bold leading-tight text-gray-900 dark:text-white">$5,000</p>
<p className="text-sm font-medium leading-normal text-green-600 dark:text-green-500">+5%</p>
</div>
</div>
</div>
<div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50">
<h2 className="text-gray-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-6 pb-3 pt-5 border-b border-gray-200 dark:border-gray-700">Recent Transactions</h2>
<div className="flow-root">
<ul className="divide-y divide-gray-200 dark:divide-gray-700" role="list">
<li className="p-6 flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="bg-primary/20 rounded-full p-2 text-primary">
<span className="material-symbols-outlined">payments</span>
</div>
<div>
<p className="font-medium text-gray-900 dark:text-white">Loan Repayment</p>
<p className="text-sm text-gray-500 dark:text-gray-400">June 28, 2024</p>
</div>
</div>
<p className="font-medium text-red-600 dark:text-red-500">-$250.00</p>
</li>
<li className="p-6 flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="bg-primary/20 rounded-full p-2 text-primary">
<span className="material-symbols-outlined">shopping_bag</span>
</div>
<div>
<p className="font-medium text-gray-900 dark:text-white">Seed Purchase</p>
<p className="text-sm text-gray-500 dark:text-gray-400">June 25, 2024</p>
</div>
</div>
<p className="font-medium text-red-600 dark:text-red-500">-$150.75</p>
</li>
<li className="p-6 flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="bg-green-500/20 rounded-full p-2 text-green-600 dark:text-green-500">
<span className="material-symbols-outlined">account_balance_wallet</span>
</div>
<div>
<p className="font-medium text-gray-900 dark:text-white">Loan Disbursement</p>
<p className="text-sm text-gray-500 dark:text-gray-400">June 15, 2024</p>
</div>
</div>
<p className="font-medium text-green-600 dark:text-green-500">+$1,200.00</p>
</li>
</ul>
</div>
</div>
<div className="flex flex-col gap-3 p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50">
<div className="flex gap-6 justify-between">
<p className="text-base font-medium leading-normal text-gray-900 dark:text-gray-300">Loan Repayment Progress</p>
<p className="text-sm font-normal leading-normal text-gray-900 dark:text-gray-300">60%</p>
</div>
<div className="rounded-full bg-gray-200 dark:bg-gray-700"><div className="h-2 rounded-full bg-primary"></div></div>
<p className="text-sm font-normal leading-normal text-gray-600 dark:text-gray-400">Next payment of $250 due on July 15, 2024</p>
</div>
</main>
</div>
</div>
</div>
</div>

    </>
  );
}
