
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="relative flex min-h-screen w-full">
{/* SideNavBar */}
<aside className="flex w-64 flex-col bg-white/50 dark:bg-black/10 p-4 border-r border-black/5 dark:border-white/5">
<div className="flex flex-col gap-4">
<div className="flex items-center gap-3 px-3">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="AgriConnect company logo"></div>
<div className="flex flex-col">
<h1 className="text-gray-900 dark:text-white text-base font-medium leading-normal">AgriConnect Admin</h1>
<p className="text-green-700 dark:text-green-400 text-sm font-normal leading-normal">Administrator</p>
</div>
</div>
<nav className="flex flex-col gap-2 mt-4">
<a className="flex items-center gap-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/5 rounded" href="#">
<span className="material-symbols-outlined text-gray-800 dark:text-gray-200">dashboard</span>
<p className="text-sm font-medium leading-normal">Dashboard</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/5 rounded" href="#">
<span className="material-symbols-outlined text-gray-800 dark:text-gray-200">account_balance</span>
<p className="text-sm font-medium leading-normal">Loans</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/5 rounded" href="#">
<span className="material-symbols-outlined text-gray-800 dark:text-gray-200">groups</span>
<p className="text-sm font-medium leading-normal">Farmers</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/20 dark:bg-primary/30" href="#">
<span className="material-symbols-outlined text-gray-900 dark:text-white">thumb_up</span>
<p className="text-gray-900 dark:text-white text-sm font-medium leading-normal">Feedback</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/5 rounded" href="#">
<span className="material-symbols-outlined text-gray-800 dark:text-gray-200">settings</span>
<p className="text-sm font-medium leading-normal">Settings</p>
</a>
</nav>
</div>
<div className="mt-auto flex flex-col gap-2">
<a className="flex items-center gap-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/5 rounded" href="#">
<span className="material-symbols-outlined text-gray-800 dark:text-gray-200">logout</span>
<p className="text-sm font-medium leading-normal">Log Out</p>
</a>
</div>
</aside>
{/* Main Content */}
<main className="flex-1 overflow-y-auto">
<div className="p-8 lg:p-10 max-w-7xl mx-auto">
{/* PageHeading */}
<div className="flex flex-wrap justify-between gap-3 mb-8">
<p className="text-gray-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">Farmer Feedback Dashboard</p>
</div>
{/* Stats */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
<div className="flex flex-col gap-2 rounded-xl p-6 border bg-white dark:bg-black/20 border-black/10 dark:border-white/10">
<p className="text-gray-800 dark:text-gray-200 text-base font-medium leading-normal">Total Submissions</p>
<p className="text-gray-900 dark:text-white tracking-light text-3xl font-bold leading-tight">1,482</p>
<p className="text-green-600 dark:text-green-400 text-base font-medium leading-normal">+12% this month</p>
</div>
<div className="flex flex-col gap-2 rounded-xl p-6 border bg-white dark:bg-black/20 border-black/10 dark:border-white/10">
<p className="text-gray-800 dark:text-gray-200 text-base font-medium leading-normal">Average Rating</p>
<p className="text-gray-900 dark:text-white tracking-light text-3xl font-bold leading-tight">4.2 / 5</p>
<p className="text-green-600 dark:text-green-400 text-base font-medium leading-normal">+0.1 from last week</p>
</div>
<div className="flex flex-col gap-2 rounded-xl p-6 border bg-white dark:bg-black/20 border-black/10 dark:border-white/10">
<p className="text-gray-800 dark:text-gray-200 text-base font-medium leading-normal">Overall Sentiment</p>
<p className="text-gray-900 dark:text-white tracking-light text-3xl font-bold leading-tight">85% Positive</p>
<p className="text-green-600 dark:text-green-400 text-base font-medium leading-normal">+3% from last week</p>
</div>
</div>
{/* Analysis and Incentives Row */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
{/* Sentiment and Rating Section */}
<div className="lg:col-span-2 flex flex-col gap-6">
{/* SectionHeader */}
<h2 className="text-gray-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">Sentiment Analysis</h2>
<div className="rounded-xl p-6 border bg-white dark:bg-black/20 border-black/10 dark:border-white/10">
{/* RatingSummary */}
<div className="flex flex-wrap gap-x-12 gap-y-6">
<div className="flex flex-col gap-2">
<p className="text-gray-900 dark:text-white text-5xl font-black leading-tight tracking-[-0.033em]">4.2</p>
<div className="flex gap-0.5">
<span className="material-symbols-outlined text-primary">star</span>
<span className="material-symbols-outlined text-primary">star</span>
<span className="material-symbols-outlined text-primary">star</span>
<span className="material-symbols-outlined text-primary">star</span>
<span className="material-symbols-outlined text-primary">star</span>
</div>
<p className="text-gray-700 dark:text-gray-300 text-base font-normal leading-normal">Based on 1,482 reviews</p>
</div>
<div className="grid min-w-[200px] max-w-[400px] flex-1 grid-cols-[20px_1fr_40px] items-center gap-x-4 gap-y-3">
<p className="text-gray-700 dark:text-gray-300 text-sm font-normal leading-normal">5</p>
<div className="flex h-2 flex-1 overflow-hidden rounded-full bg-black/10 dark:bg-white/10"><div className="rounded-full bg-primary"></div></div>
<p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal text-right">55%</p>
<p className="text-gray-700 dark:text-gray-300 text-sm font-normal leading-normal">4</p>
<div className="flex h-2 flex-1 overflow-hidden rounded-full bg-black/10 dark:bg-white/10"><div className="rounded-full bg-primary"></div></div>
<p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal text-right">25%</p>
<p className="text-gray-700 dark:text-gray-300 text-sm font-normal leading-normal">3</p>
<div className="flex h-2 flex-1 overflow-hidden rounded-full bg-black/10 dark:bg-white/10"><div className="rounded-full bg-primary"></div></div>
<p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal text-right">10%</p>
<p className="text-gray-700 dark:text-gray-300 text-sm font-normal leading-normal">2</p>
<div className="flex h-2 flex-1 overflow-hidden rounded-full bg-black/10 dark:bg-white/10"><div className="rounded-full bg-yellow-500"></div></div>
<p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal text-right">5%</p>
<p className="text-gray-700 dark:text-gray-300 text-sm font-normal leading-normal">1</p>
<div className="flex h-2 flex-1 overflow-hidden rounded-full bg-black/10 dark:bg-white/10"><div className="rounded-full bg-red-500"></div></div>
<p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal text-right">5%</p>
</div>
</div>
</div>
</div>
{/* Incentive Tracking */}
<div className="flex flex-col gap-6">
<h2 className="text-gray-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">Feedback Incentives</h2>
<div className="flex flex-col gap-4 rounded-xl p-6 border bg-white dark:bg-black/20 border-black/10 dark:border-white/10 h-full">
<div className="flex items-start gap-4">
<div className="p-2 bg-primary/20 rounded-lg">
<span className="material-symbols-outlined text-primary">paid</span>
</div>
<div>
<p className="text-gray-800 dark:text-gray-200 font-medium">Credit Bonuses Awarded</p>
<p className="text-gray-900 dark:text-white text-2xl font-bold">215</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-2 bg-primary/20 rounded-lg">
<span className="material-symbols-outlined text-primary">verified</span>
</div>
<div>
<p className="text-gray-800 dark:text-gray-200 font-medium">'Helpful Reviewer' Badges</p>
<p className="text-gray-900 dark:text-white text-2xl font-bold">48</p>
</div>
</div>
</div>
</div>
</div>
{/* Feedback Management Table */}
<div className="flex flex-col gap-6">
<h2 className="text-gray-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">Manage Feedback</h2>
<div className="rounded-xl border bg-white dark:bg-black/20 border-black/10 dark:border-white/10 overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-sm text-left">
<thead className="text-xs text-gray-700 dark:text-gray-300 uppercase bg-gray-50 dark:bg-white/5">
<tr>
<th className="px-6 py-3" scope="col">Farmer ID</th>
<th className="px-6 py-3" scope="col">Rating</th>
<th className="px-6 py-3" scope="col">Sentiment</th>
<th className="px-6 py-3" scope="col">Summary</th>
<th className="px-6 py-3" scope="col">Date</th>
<th className="px-6 py-3" scope="col">Status</th>
<th className="px-6 py-3" scope="col"><span className="sr-only">Actions</span></th>
</tr>
</thead>
<tbody>
<tr className="border-b dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5">
<td className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">FMR-83721</td>
<td className="px-6 py-4 flex items-center gap-1">4 <span className="material-symbols-outlined text-primary text-base">star</span></td>
<td className="px-6 py-4"><span className="material-symbols-outlined text-green-500" title="Positive">sentiment_very_satisfied</span></td>
<td className="px-6 py-4 text-gray-700 dark:text-gray-300">The loan process was much simpler this time...</td>
<td className="px-6 py-4 text-gray-700 dark:text-gray-300">2023-10-26</td>
<td className="px-6 py-4"><span className="px-2 py-1 text-xs font-medium text-green-800 bg-green-200 dark:bg-green-900 dark:text-green-300 rounded-full">Addressed</span></td>
<td className="px-6 py-4 text-right"><button className="font-medium text-primary/80 hover:text-primary">View</button></td>
</tr>
<tr className="border-b dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5">
<td className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">Anonymous</td>
<td className="px-6 py-4 flex items-center gap-1">2 <span className="material-symbols-outlined text-primary text-base">star</span></td>
<td className="px-6 py-4"><span className="material-symbols-outlined text-red-500" title="Negative">sentiment_dissatisfied</span></td>
<td className="px-6 py-4 text-gray-700 dark:text-gray-300">Delivery of fertilizer was delayed by a week.</td>
<td className="px-6 py-4 text-gray-700 dark:text-gray-300">2023-10-25</td>
<td className="px-6 py-4"><span className="px-2 py-1 text-xs font-medium text-yellow-800 bg-yellow-200 dark:bg-yellow-900 dark:text-yellow-300 rounded-full">In Progress</span></td>
<td className="px-6 py-4 text-right"><button className="font-medium text-primary/80 hover:text-primary">View</button></td>
</tr>
<tr className="border-b dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5">
<td className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">FMR-29450</td>
<td className="px-6 py-4 flex items-center gap-1">5 <span className="material-symbols-outlined text-primary text-base">star</span></td>
<td className="px-6 py-4"><span className="material-symbols-outlined text-green-500" title="Positive">sentiment_very_satisfied</span></td>
<td className="px-6 py-4 text-gray-700 dark:text-gray-300">App is very easy to use, even in my language.</td>
<td className="px-6 py-4 text-gray-700 dark:text-gray-300">2023-10-24</td>
<td className="px-6 py-4"><span className="px-2 py-1 text-xs font-medium text-blue-800 bg-blue-200 dark:bg-blue-900 dark:text-blue-300 rounded-full">New</span></td>
<td className="px-6 py-4 text-right"><button className="font-medium text-primary/80 hover:text-primary">View</button></td>
</tr>
<tr className="border-b dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5">
<td className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">FMR-55102</td>
<td className="px-6 py-4 flex items-center gap-1">3 <span className="material-symbols-outlined text-primary text-base">star</span></td>
<td className="px-6 py-4"><span className="material-symbols-outlined text-yellow-500" title="Neutral">sentiment_neutral</span></td>
<td className="px-6 py-4 text-gray-700 dark:text-gray-300">It's okay, but customer support is slow to respond.</td>
<td className="px-6 py-4 text-gray-700 dark:text-gray-300">2023-10-23</td>
<td className="px-6 py-4"><span className="px-2 py-1 text-xs font-medium text-blue-800 bg-blue-200 dark:bg-blue-900 dark:text-blue-300 rounded-full">New</span></td>
<td className="px-6 py-4 text-right"><button className="font-medium text-primary/80 hover:text-primary">View</button></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</main>
</div>

    </>
  );
}
