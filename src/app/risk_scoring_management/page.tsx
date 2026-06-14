
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="relative flex min-h-screen w-full">
{/* SideNavBar */}
<aside className="flex flex-col w-64 bg-surface-light dark:bg-surface-dark border-r border-border-light dark:border-border-dark p-4">
<div className="flex flex-col gap-4">
<div className="flex items-center gap-3">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="Admin user avatar"></div>
<div className="flex flex-col">
<h1 className="text-text-light dark:text-text-dark text-base font-medium leading-normal">Admin User</h1>
<p className="text-subtle-light dark:text-subtle-dark text-sm font-normal leading-normal">AgriConnect BNPL</p>
</div>
</div>
<nav className="flex flex-col gap-2 mt-4">
<a className="flex items-center gap-3 px-3 py-2 text-subtle-light dark:text-subtle-dark hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg" href="#">
<span className="material-symbols-outlined text-xl">dashboard</span>
<p className="text-sm font-medium leading-normal">Dashboard</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/20 text-primary" href="#">
<span className="material-symbols-outlined text-xl">model_training</span>
<p className="text-sm font-bold leading-normal">Risk Engine</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-subtle-light dark:text-subtle-dark hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg" href="#">
<span className="material-symbols-outlined text-xl">groups</span>
<p className="text-sm font-medium leading-normal">Farmers</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-subtle-light dark:text-subtle-dark hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg" href="#">
<span className="material-symbols-outlined text-xl">receipt_long</span>
<p className="text-sm font-medium leading-normal">Loan Management</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-subtle-light dark:text-subtle-dark hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg" href="#">
<span className="material-symbols-outlined text-xl">settings</span>
<p className="text-sm font-medium leading-normal">Settings</p>
</a>
</nav>
</div>
<div className="mt-auto flex flex-col gap-1">
<a className="flex items-center gap-3 px-3 py-2 text-subtle-light dark:text-subtle-dark hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg" href="#">
<span className="material-symbols-outlined text-xl">help</span>
<p className="text-sm font-medium leading-normal">Help</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-subtle-light dark:text-subtle-dark hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg" href="#">
<span className="material-symbols-outlined text-xl">logout</span>
<p className="text-sm font-medium leading-normal">Logout</p>
</a>
</div>
</aside>
{/* Main Content */}
<main className="flex-1 p-8 overflow-y-auto">
<div className="max-w-7xl mx-auto">
{/* PageHeading */}
<div className="flex flex-wrap justify-between items-center gap-4 mb-8">
<div className="flex flex-col gap-1">
<p className="text-text-light dark:text-text-dark text-4xl font-black leading-tight tracking-[-0.033em]">Credit Risk Engine</p>
<p className="text-subtle-light dark:text-subtle-dark text-base font-normal leading-normal">Model Version 2.3 | Last trained: 2023-10-26 | Accuracy: 94.2%</p>
</div>
</div>
{/* Control Panel & Parameters Grid */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
{/* Control Panel Card */}
<div className="lg:col-span-1 bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-border-light dark:border-border-dark flex flex-col gap-6">
<div className="flex items-center justify-between">
<p className="text-text-light dark:text-text-dark text-lg font-bold leading-tight">Control Panel</p>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300">Idle</span>
</div>
<div className="flex flex-col gap-4">
<button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary hover:bg-primary/90 text-white gap-2 text-base font-medium leading-normal">
<span className="material-symbols-outlined text-xl">play_circle</span>
<span className="truncate">Run Risk Scoring</span>
</button>
<label className="flex flex-col w-full">
<p className="text-text-light dark:text-text-dark text-sm font-medium leading-normal pb-2">Schedule</p>
<select className="form-select flex w-full min-w-0 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark h-12 placeholder:text-subtle-light dark:placeholder:text-subtle-dark px-3 text-base font-normal leading-normal">
<option>On-demand</option>
<option>Daily</option>
<option>Weekly</option>
<option>Monthly</option>
</select>
</label>
</div>
</div>
{/* Scoring Parameters Card */}
<div className="lg:col-span-2 bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
<h2 className="text-text-light dark:text-text-dark text-lg font-bold leading-tight mb-6">Scoring Parameters</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
{/* Slider Item */}
<div className="flex flex-col gap-2">
<div className="flex justify-between items-center">
<label className="text-sm font-medium text-subtle-light dark:text-subtle-dark">Repayment history weight</label>
<span className="text-sm font-semibold text-text-light dark:text-text-dark">30%</span>
</div>
<input className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary" max="100" min="0" type="range" defaultValue="30"/>
</div>
{/* Slider Item */}
<div className="flex flex-col gap-2">
<div className="flex justify-between items-center">
<label className="text-sm font-medium text-subtle-light dark:text-subtle-dark">Land size weight</label>
<span className="text-sm font-semibold text-text-light dark:text-text-dark">20%</span>
</div>
<input className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary" max="100" min="0" type="range" defaultValue="20"/>
</div>
{/* Slider Item */}
<div className="flex flex-col gap-2">
<div className="flex justify-between items-center">
<label className="text-sm font-medium text-subtle-light dark:text-subtle-dark">Crop type risk</label>
<span className="text-sm font-semibold text-text-light dark:text-text-dark">15%</span>
</div>
<input className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary" max="100" min="0" type="range" defaultValue="15"/>
</div>
{/* Slider Item */}
<div className="flex flex-col gap-2">
<div className="flex justify-between items-center">
<label className="text-sm font-medium text-subtle-light dark:text-subtle-dark">Previous default weight</label>
<span className="text-sm font-semibold text-text-light dark:text-text-dark">25%</span>
</div>
<input className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary" max="100" min="0" type="range" defaultValue="25"/>
</div>
{/* Slider Item */}
<div className="flex flex-col gap-2">
<div className="flex justify-between items-center">
<label className="text-sm font-medium text-subtle-light dark:text-subtle-dark">External factors</label>
<span className="text-sm font-semibold text-text-light dark:text-text-dark">10%</span>
</div>
<input className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary" max="100" min="0" type="range" defaultValue="10"/>
</div>
</div>
</div>
</div>
{/* Farmer Risk Dashboard Table */}
<div className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
<h2 className="text-text-light dark:text-text-dark text-lg font-bold leading-tight mb-4">Farmer Risk Dashboard</h2>
<div className="overflow-x-auto">
<table className="w-full text-sm text-left">
<thead className="text-xs text-subtle-light dark:text-subtle-dark uppercase bg-background-light dark:bg-background-dark">
<tr>
<th className="px-4 py-3" scope="col">Farmer ID</th>
<th className="px-4 py-3" scope="col">Name</th>
<th className="px-4 py-3" scope="col">Risk Score</th>
<th className="px-4 py-3" scope="col">Credit Limit</th>
<th className="px-4 py-3" scope="col">Outstanding</th>
<th className="px-4 py-3" scope="col">Payment Streak</th>
<th className="px-4 py-3" scope="col">Risk Trend</th>
<th className="px-4 py-3" scope="col">Last Scored</th>
<th className="px-4 py-3 text-right" scope="col">Actions</th>
</tr>
</thead>
<tbody>
<tr className="border-b border-border-light dark:border-border-dark">
<td className="px-4 py-4 font-mono text-xs">FARM-001</td>
<td className="px-4 py-4 font-medium">John Doe</td>
<td className="px-4 py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-low-risk/10 text-low-risk">820 (Low)</span>
</td>
<td className="px-4 py-4">$5,000</td>
<td className="px-4 py-4">$1,200</td>
<td className="px-4 py-4">12</td>
<td className="px-4 py-4 text-green-500"><span className="material-symbols-outlined text-base align-middle">arrow_downward</span></td>
<td className="px-4 py-4">2023-10-26</td>
<td className="px-4 py-4 text-right flex gap-2 justify-end">
<button className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline">View Details</button>
<button className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline">Override</button>
</td>
</tr>
<tr className="border-b border-border-light dark:border-border-dark">
<td className="px-4 py-4 font-mono text-xs">FARM-002</td>
<td className="px-4 py-4 font-medium">Jane Smith</td>
<td className="px-4 py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-medium-risk/10 text-medium-risk">650 (Medium)</span>
</td>
<td className="px-4 py-4">$2,500</td>
<td className="px-4 py-4">$2,000</td>
<td className="px-4 py-4">3</td>
<td className="px-4 py-4 text-red-500"><span className="material-symbols-outlined text-base align-middle">arrow_upward</span></td>
<td className="px-4 py-4">2023-10-26</td>
<td className="px-4 py-4 text-right flex gap-2 justify-end">
<button className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline">View Details</button>
<button className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline">Override</button>
</td>
</tr>
<tr className="border-b border-border-light dark:border-border-dark">
<td className="px-4 py-4 font-mono text-xs">FARM-003</td>
<td className="px-4 py-4 font-medium">Samuel Green</td>
<td className="px-4 py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-high-risk/10 text-high-risk">410 (High)</span>
</td>
<td className="px-4 py-4">$1,000</td>
<td className="px-4 py-4">$950</td>
<td className="px-4 py-4">0</td>
<td className="px-4 py-4 text-red-500"><span className="material-symbols-outlined text-base align-middle">arrow_upward</span></td>
<td className="px-4 py-4">2023-10-26</td>
<td className="px-4 py-4 text-right flex gap-2 justify-end">
<button className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline">View Details</button>
<button className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline">Override</button>
</td>
</tr>
<tr className="border-b border-border-light dark:border-border-dark">
<td className="px-4 py-4 font-mono text-xs">FARM-004</td>
<td className="px-4 py-4 font-medium">Aisha Khan</td>
<td className="px-4 py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-low-risk/10 text-low-risk">910 (Low)</span>
</td>
<td className="px-4 py-4">$8,000</td>
<td className="px-4 py-4">$500</td>
<td className="px-4 py-4">24</td>
<td className="px-4 py-4 text-green-500"><span className="material-symbols-outlined text-base align-middle">arrow_downward</span></td>
<td className="px-4 py-4">2023-10-25</td>
<td className="px-4 py-4 text-right flex gap-2 justify-end">
<button className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline">View Details</button>
<button className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline">Override</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</main>
</div>

    </>
  );
}
