
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="flex min-h-screen w-full">
{/* SideNavBar */}
<aside className="flex flex-col w-64 bg-[#172211] text-white shrink-0">
<div className="flex flex-col gap-4 p-4 flex-grow">
<div className="flex gap-3 items-center">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="Admin User Avatar"></div>
<div className="flex flex-col">
<h1 className="text-white text-base font-medium leading-normal">Admin User</h1>
<p className="text-[#a4c992] text-sm font-normal leading-normal">AgriConnect BNPL</p>
</div>
</div>
<nav className="flex flex-col gap-2 mt-4">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#2f4823] transition-colors" href="#">
<span className="material-symbols-outlined">dashboard</span>
<p className="text-white text-sm font-medium leading-normal">Dashboard</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#2f4823] transition-colors" href="#">
<span className="material-symbols-outlined">groups</span>
<p className="text-white text-sm font-medium leading-normal">Farmers</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#2f4823]" href="#">
<span className="material-symbols-outlined fill">credit_card</span>
<p className="text-white text-sm font-medium leading-normal">Credit Management</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#2f4823] transition-colors" href="#">
<span className="material-symbols-outlined">gavel</span>
<p className="text-white text-sm font-medium leading-normal">Risk Scoring</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#2f4823] transition-colors" href="#">
<span className="material-symbols-outlined">bar_chart</span>
<p className="text-white text-sm font-medium leading-normal">Reports</p>
</a>
</nav>
</div>
<div className="flex flex-col gap-1 p-4 border-t border-white/10">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#2f4823] transition-colors" href="#">
<span className="material-symbols-outlined">settings</span>
<p className="text-white text-sm font-medium leading-normal">Settings</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#2f4823] transition-colors" href="#">
<span className="material-symbols-outlined">help</span>
<p className="text-white text-sm font-medium leading-normal">Help</p>
</a>
</div>
</aside>
{/* Main Content */}
<main className="flex-1 p-6 lg:p-8 overflow-y-auto">
<div className="max-w-7xl mx-auto">
{/* PageHeading */}
<div className="flex flex-wrap justify-between gap-4 items-start mb-6">
<div className="flex flex-col gap-1">
<p className="text-4xl font-black leading-tight tracking-[-0.033em] text-deep-green">Credit Limit Recalculation</p>
<p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-normal">Last run: 24 August 2024, 10:00 AM</p>
</div>
</div>
{/* Primary Action and Configuration */}
<div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
{/* Left Column: Actions and Simulation */}
<div className="xl:col-span-1 flex flex-col gap-6">
{/* Recalculate Button */}
<div className="bg-white dark:bg-gray-800/50 p-6 rounded-xl shadow-sm">
<button className="w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-deep-green text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-colors">
<span className="material-symbols-outlined">refresh</span>
<span className="truncate">Recalculate All Limits</span>
</button>
<p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal mt-3 text-center">Note: This process is also triggered automatically after each risk scoring cycle.</p>
</div>
{/* Impact Simulation */}
<div className="bg-white dark:bg-gray-800/50 p-6 rounded-xl shadow-sm">
<h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">Impact Simulation</h3>
<div className="space-y-3">
<div className="flex justify-between items-center text-sm">
<span className="text-gray-600 dark:text-gray-300">Farmers with limit increase</span>
<span className="font-semibold text-success-green">2,104 farmers</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-gray-600 dark:text-gray-300">Farmers with limit decrease</span>
<span className="font-semibold text-warning-red">451 farmers</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-gray-600 dark:text-gray-300">Average new limit</span>
<span className="font-semibold text-gray-800 dark:text-white">$550.75</span>
</div>
</div>
</div>
</div>
{/* Right Column: Configuration Panel */}
<div className="xl:col-span-2 bg-white dark:bg-gray-800/50 p-6 rounded-xl shadow-sm">
<h2 className="text-xl font-bold text-gray-800 dark:text-white mb-5">Recalculation Rules Configuration</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
<div>
<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="base-limit">Base Limit</label>
<input className="w-full rounded-md border-gray-300 dark:border-gray-600 bg-background-light dark:bg-gray-700 focus:ring-deep-green focus:border-deep-green" id="base-limit" type="number" defaultValue="250"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="max-limit">Maximum Limit Cap</label>
<input className="w-full rounded-md border-gray-300 dark:border-gray-600 bg-background-light dark:bg-gray-700 focus:ring-deep-green focus:border-deep-green" id="max-limit" type="number" defaultValue="5000"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="good-payment-bonus">Good Payment Bonus (%)</label>
<input className="w-full rounded-md border-gray-300 dark:border-gray-600 bg-background-light dark:bg-gray-700 focus:ring-deep-green focus:border-deep-green" id="good-payment-bonus" type="number" defaultValue="10"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="default-penalty">Default Penalty (%)</label>
<input className="w-full rounded-md border-gray-300 dark:border-gray-600 bg-background-light dark:bg-gray-700 focus:ring-deep-green focus:border-deep-green" id="default-penalty" type="number" defaultValue="25"/>
</div>
<div className="md:col-span-2">
<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Risk Multiplier</label>
<div className="grid grid-cols-3 gap-4">
<div>
<label className="block text-xs text-gray-500 dark:text-gray-400 mb-1" htmlFor="risk-low">Low</label>
<input className="w-full rounded-md border-gray-300 dark:border-gray-600 bg-background-light dark:bg-gray-700 focus:ring-deep-green focus:border-deep-green" id="risk-low" type="text" defaultValue="2x"/>
</div>
<div>
<label className="block text-xs text-gray-500 dark:text-gray-400 mb-1" htmlFor="risk-medium">Medium</label>
<input className="w-full rounded-md border-gray-300 dark:border-gray-600 bg-background-light dark:bg-gray-700 focus:ring-deep-green focus:border-deep-green" id="risk-medium" type="text" defaultValue="1x"/>
</div>
<div>
<label className="block text-xs text-gray-500 dark:text-gray-400 mb-1" htmlFor="risk-high">High</label>
<input className="w-full rounded-md border-gray-300 dark:border-gray-600 bg-background-light dark:bg-gray-700 focus:ring-deep-green focus:border-deep-green" id="risk-high" type="text" defaultValue="0.5x"/>
</div>
</div>
</div>
</div>
</div>
</div>
{/* Farmer Limit Table Section */}
<div className="bg-white dark:bg-gray-800/50 rounded-xl shadow-sm overflow-hidden">
<div className="p-6 border-b border-gray-200 dark:border-gray-700">
<div className="flex flex-wrap items-center justify-between gap-4">
<h2 className="text-xl font-bold text-gray-800 dark:text-white">Farmer Limit Details</h2>
<div className="flex items-center gap-2">
<select className="rounded-md border-gray-300 dark:border-gray-600 bg-background-light dark:bg-gray-700 text-sm focus:ring-deep-green focus:border-deep-green">
<option>Show all changes</option>
<option>Show only increases</option>
<option>Show only decreases</option>
<option>High-value changes (&gt;20%)</option>
</select>
<button className="flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-md border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700">
<span className="material-symbols-outlined !text-base">filter_list</span>
                                    Filter
                                </button>
</div>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
<thead className="text-xs text-gray-700 dark:text-gray-300 uppercase bg-gray-50 dark:bg-gray-700">
<tr>
<th className="p-4" scope="col"><input className="rounded border-gray-300 dark:border-gray-600 bg-transparent text-deep-green focus:ring-deep-green" type="checkbox"/></th>
<th className="px-6 py-3" scope="col">Farmer ID</th>
<th className="px-6 py-3" scope="col">Name</th>
<th className="px-6 py-3" scope="col">Current Limit</th>
<th className="px-6 py-3" scope="col">New Calculated Limit</th>
<th className="px-6 py-3" scope="col">Change</th>
<th className="px-6 py-3" scope="col">Risk Score</th>
<th className="px-6 py-3" scope="col">Approval Status</th>
</tr>
</thead>
<tbody>
<tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
<td className="w-4 p-4"><input className="rounded border-gray-300 dark:border-gray-600 bg-transparent text-deep-green focus:ring-deep-green" type="checkbox"/></td>
<td className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">FARM-001</td>
<td className="px-6 py-4">John Doe</td>
<td className="px-6 py-4">$400.00</td>
<td className="px-6 py-4">$500.00</td>
<td className="px-6 py-4 text-success-green font-semibold">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined !text-base">arrow_upward</span>
<span>$100.00 (25%)</span>
</div>
</td>
<td className="px-6 py-4">Low</td>
<td className="px-6 py-4"><span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 text-xs font-medium px-2.5 py-0.5 rounded-full">Auto</span></td>
</tr>
<tr className="bg-gray-50 dark:bg-gray-900 border-b dark:border-gray-700">
<td className="w-4 p-4"><input className="rounded border-gray-300 dark:border-gray-600 bg-transparent text-deep-green focus:ring-deep-green" type="checkbox"/></td>
<td className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">FARM-002</td>
<td className="px-6 py-4">Jane Smith</td>
<td className="px-6 py-4">$750.00</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<span>$600.00</span>
<button className="text-neutral-blue hover:text-opacity-80"><span className="material-symbols-outlined !text-base">edit</span></button>
</div>
</td>
<td className="px-6 py-4 text-warning-red font-semibold">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined !text-base">arrow_downward</span>
<span>$150.00 (20%)</span>
</div>
</td>
<td className="px-6 py-4">High</td>
<td className="px-6 py-4"><span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-300 text-xs font-medium px-2.5 py-0.5 rounded-full">Pending Review</span></td>
</tr>
<tr className="bg-white dark:bg-gray-800">
<td className="w-4 p-4"><input className="rounded border-gray-300 dark:border-gray-600 bg-transparent text-deep-green focus:ring-deep-green" type="checkbox"/></td>
<td className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">FARM-003</td>
<td className="px-6 py-4">Samuel Green</td>
<td className="px-6 py-4">$300.00</td>
<td className="px-6 py-4">$300.00</td>
<td className="px-6 py-4 text-gray-500">
<span>$0.00 (0%)</span>
</td>
<td className="px-6 py-4">Medium</td>
<td className="px-6 py-4"><span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs font-medium px-2.5 py-0.5 rounded-full">No Change</span></td>
</tr>
</tbody>
</table>
</div>
</div>
{/* Action Bar & History */}
<div className="mt-8 flex flex-wrap items-center justify-between gap-4">
<div className="flex items-center gap-4 text-sm">
<a className="text-neutral-blue font-medium hover:underline" href="#">View Recalculation History</a>
<span className="text-gray-300 dark:text-gray-600">|</span>
<a className="text-neutral-blue font-medium hover:underline" href="#">Go to Dispute Management</a>
</div>
<button className="flex items-center justify-center rounded-lg h-12 px-6 bg-deep-green text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-colors">
<span className="material-symbols-outlined">task_alt</span>
<span className="truncate">Confirm &amp; Apply 3 Changes</span>
</button>
</div>
</div>
</main>
</div>

    </>
  );
}
