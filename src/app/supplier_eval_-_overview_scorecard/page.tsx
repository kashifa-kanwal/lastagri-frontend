
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="relative flex min-h-screen w-full">
{/* SideNavBar */}
<aside className="flex flex-col w-64 p-4 bg-card-light dark:bg-card-dark border-r border-border-light dark:border-border-dark shrink-0">
<div className="flex items-center gap-2 mb-8">
<span className="material-symbols-outlined text-green-600 text-3xl">grass</span>
<h1 className="text-xl font-bold text-text-light dark:text-text-dark">AgriConnect</h1>
</div>
<div className="flex flex-col justify-between flex-1">
<div className="flex flex-col gap-2">
<div className="flex items-center gap-3 px-3 py-2 rounded-lg text-text-light dark:text-text-dark">
<span className="material-symbols-outlined text-2xl">dashboard</span>
<p className="text-sm font-medium">Dashboard</p>
</div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/20 text-text-light dark:text-text-dark">
<span className="material-symbols-outlined text-2xl">storefront</span>
<p className="text-sm font-medium">Suppliers</p>
</div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg text-text-light dark:text-text-dark">
<span className="material-symbols-outlined text-2xl">groups</span>
<p className="text-sm font-medium">Farmers</p>
</div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg text-text-light dark:text-text-dark">
<span className="material-symbols-outlined text-2xl">receipt_long</span>
<p className="text-sm font-medium">Orders</p>
</div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg text-text-light dark:text-text-dark">
<span className="material-symbols-outlined text-2xl">assessment</span>
<p className="text-sm font-medium">Reports</p>
</div>
</div>
<div className="flex flex-col gap-4">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-3 px-3 py-2 rounded-lg text-text-light dark:text-text-dark">
<span className="material-symbols-outlined text-2xl">settings</span>
<p className="text-sm font-medium">Settings</p>
</div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg text-text-light dark:text-text-dark">
<span className="material-symbols-outlined text-2xl">help</span>
<p className="text-sm font-medium">Help</p>
</div>
</div>
<div className="border-t border-border-light dark:border-border-dark pt-4">
<div className="flex gap-3 items-center">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="Admin profile picture"></div>
<div className="flex flex-col">
<h1 className="text-text-light dark:text-text-dark text-sm font-medium">Admin Name</h1>
<p className="text-gray-500 dark:text-gray-400 text-xs">Administrator</p>
</div>
<button className="ml-auto text-text-light dark:text-text-dark">
<span className="material-symbols-outlined">logout</span>
</button>
</div>
</div>
</div>
</div>
</aside>
{/* Main Content */}
<main className="flex-1 p-8 overflow-y-auto">
<div className="max-w-7xl mx-auto">
{/* PageHeading */}
<div className="flex flex-wrap justify-between gap-4 items-start mb-6">
<div className="flex flex-col gap-1">
<p className="text-text-light dark:text-text-dark text-3xl font-bold tracking-tight">Supplier Evaluation Dashboard</p>
<p className="text-gray-500 dark:text-gray-400 text-base font-normal">Agro Supplies Inc.</p>
</div>
</div>
{/* Filters: SearchBar and Chips */}
<div className="flex flex-wrap items-center justify-between gap-4 mb-6">
{/* SearchBar */}
<div className="flex-grow min-w-[300px] max-w-md">
<label className="flex flex-col w-full">
<div className="relative flex w-full flex-1 items-stretch rounded-lg h-12">
<div className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500 dark:text-gray-400">
<span className="material-symbols-outlined">search</span>
</div>
<input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark h-full placeholder:text-gray-500 dark:placeholder:text-gray-400 px-4 pl-12 text-sm font-normal" placeholder="Search or select a supplier" defaultValue="Agro Supplies Inc."/>
</div>
</label>
</div>
{/* Chips */}
<div className="flex gap-2">
<button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-primary/20 pl-4 pr-3 text-text-light dark:text-text-dark">
<p className="text-sm font-medium">Last 30 Days</p>
<span className="material-symbols-outlined text-xl">expand_more</span>
</button>
<button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark pl-4 pr-3 text-text-light dark:text-text-dark">
<p className="text-sm font-medium">Last Quarter</p>
<span className="material-symbols-outlined text-xl">expand_more</span>
</button>
<button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark pl-4 pr-3 text-text-light dark:text-text-dark">
<p className="text-sm font-medium">Year-to-Date</p>
<span className="material-symbols-outlined text-xl">expand_more</span>
</button>
</div>
</div>
{/* SectionHeader */}
<h2 className="text-text-light dark:text-text-dark text-xl font-bold tracking-tight px-0 pb-4 pt-2">Scorecard Overview</h2>
{/* Main Scorecard */}
<div className="mb-8 p-6 bg-card-light dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark flex items-center justify-between gap-8">
<div className="flex items-center gap-6">
<div className="relative size-32">
<svg className="size-full" height="36" viewBox="0 0 36 36" width="36" xmlns="http://www.w3.org/2000/svg">
<circle className="stroke-current text-gray-200 dark:text-gray-700" cx="18" cy="18" fill="none" r="16" strokeWidth="3"></circle>
<circle className="stroke-current text-excellent" cx="18" cy="18" fill="none" r="16" stroke-dasharray="100" stroke-dashoffset="15" strokeWidth="3" transform="rotate(-90 18 18)"></circle>
</svg>
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-4xl font-bold text-excellent">85</span>
</div>
</div>
<div>
<p className="text-sm text-gray-500 dark:text-gray-400">Overall Performance Score</p>
<p className="text-lg font-semibold text-excellent">Excellent</p>
</div>
</div>
<div className="text-right">
<p className="text-4xl font-bold text-text-light dark:text-text-dark">2 <span className="text-lg font-normal text-gray-500 dark:text-gray-400">/ 50</span></p>
<p className="text-sm text-gray-500 dark:text-gray-400">Supplier Rank</p>
</div>
</div>
{/* KPI Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{/* KPI Card: Order Fulfillment Rate */}
<div className="bg-card-light dark:bg-card-dark p-5 rounded-xl border border-border-light dark:border-border-dark">
<h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Order Fulfillment Rate</h3>
<p className="text-4xl font-bold text-text-light dark:text-text-dark mb-1">98.2%</p>
<div className="flex justify-between items-center text-xs">
<span className="text-gray-500 dark:text-gray-400">Target: 95%</span>
<div className="flex items-center text-excellent">
<span className="material-symbols-outlined text-base">arrow_upward</span>
<span className="font-medium">1.5%</span>
</div>
</div>
</div>
{/* KPI Card: On-Time Dispatch Rate */}
<div className="bg-card-light dark:bg-card-dark p-5 rounded-xl border border-border-light dark:border-border-dark">
<h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">On-Time Dispatch Rate</h3>
<p className="text-4xl font-bold text-text-light dark:text-text-dark mb-1">96.5%</p>
<div className="flex justify-between items-center text-xs">
<span className="text-gray-500 dark:text-gray-400">Target: 98%</span>
<div className="flex items-center text-bad">
<span className="material-symbols-outlined text-base">arrow_downward</span>
<span className="font-medium">0.8%</span>
</div>
</div>
</div>
{/* KPI Card: Product Quality Score */}
<div className="bg-card-light dark:bg-card-dark p-5 rounded-xl border border-border-light dark:border-border-dark">
<h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Product Quality Score</h3>
<p className="text-4xl font-bold text-text-light dark:text-text-dark mb-1">4.8<span className="text-2xl text-gray-400">/5</span></p>
<div className="flex justify-between items-center text-xs">
<span className="text-gray-500 dark:text-gray-400">Target: 4.5/5</span>
<div className="flex items-center text-excellent">
<span className="material-symbols-outlined text-base">arrow_upward</span>
<span className="font-medium">0.2</span>
</div>
</div>
</div>
{/* KPI Card: Return/Complaint Rate */}
<div className="bg-card-light dark:bg-card-dark p-5 rounded-xl border border-border-light dark:border-border-dark">
<h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Return/Complaint Rate</h3>
<p className="text-4xl font-bold text-text-light dark:text-text-dark mb-1">1.1%</p>
<div className="flex justify-between items-center text-xs">
<span className="text-gray-500 dark:text-gray-400">Target: &lt; 2%</span>
<div className="flex items-center text-excellent">
<span className="material-symbols-outlined text-base">arrow_downward</span>
<span className="font-medium">0.3%</span>
</div>
</div>
</div>
{/* KPI Card: Customer Satisfaction */}
<div className="bg-card-light dark:bg-card-dark p-5 rounded-xl border border-border-light dark:border-border-dark">
<h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Customer Satisfaction (NPS)</h3>
<p className="text-4xl font-bold text-text-light dark:text-text-dark mb-1">+75</p>
<div className="flex justify-between items-center text-xs">
<span className="text-gray-500 dark:text-gray-400">Target: +70</span>
<div className="flex items-center text-good">
<span className="material-symbols-outlined text-base">horizontal_rule</span>
<span className="font-medium">0 pts</span>
</div>
</div>
</div>
{/* KPI Card: Average Response Time */}
<div className="bg-card-light dark:bg-card-dark p-5 rounded-xl border border-border-light dark:border-border-dark">
<h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Average Response Time</h3>
<p className="text-4xl font-bold text-text-light dark:text-text-dark mb-1">2.3<span className="text-2xl text-gray-400">hrs</span></p>
<div className="flex justify-between items-center text-xs">
<span className="text-gray-500 dark:text-gray-400">Target: &lt; 4hrs</span>
<div className="flex items-center text-excellent">
<span className="material-symbols-outlined text-base">arrow_downward</span>
<span className="font-medium">0.5hrs</span>
</div>
</div>
</div>
</div>
</div>
</main>
</div>

    </>
  );
}
