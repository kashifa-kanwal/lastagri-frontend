
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="relative flex min-h-screen">
{/* SideNavBar */}
<nav className="w-64 flex-shrink-0 bg-card-light dark:bg-card-dark p-4 border-r border-border-light dark:border-border-dark hidden lg:flex flex-col">
<div className="flex flex-col gap-4">
<div className="flex gap-3 items-center">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="Faisalabad Farms logo"></div>
<div className="flex flex-col">
<h1 className="text-text-light dark:text-text-dark text-base font-semibold leading-normal">Faisalabad Farms</h1>
<p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">Supplier ID: 12345</p>
</div>
</div>
<div className="flex flex-col gap-2 mt-4">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800" href="#">
<span className="material-symbols-outlined text-text-light dark:text-text-dark">dashboard</span>
<p className="text-sm font-medium leading-normal">Dashboard</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/20 text-primary dark:text-secondary font-semibold" href="#">
<span className="material-symbols-outlined">payment</span>
<p className="text-sm font-medium leading-normal">Settlements</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800" href="#">
<span className="material-symbols-outlined text-text-light dark:text-text-dark">receipt_long</span>
<p className="text-sm font-medium leading-normal">Orders</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800" href="#">
<span className="material-symbols-outlined text-text-light dark:text-text-dark">inventory_2</span>
<p className="text-sm font-medium leading-normal">Inventory</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800" href="#">
<span className="material-symbols-outlined text-text-light dark:text-text-dark">analytics</span>
<p className="text-sm font-medium leading-normal">Reports</p>
</a>
</div>
</div>
<div className="mt-auto flex flex-col gap-4">
<button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
<span className="truncate">Add New Product</span>
</button>
<div className="flex flex-col gap-1 border-t border-border-light dark:border-border-dark pt-4">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800" href="#">
<span className="material-symbols-outlined text-text-light dark:text-text-dark">settings</span>
<p className="text-sm font-medium leading-normal">Settings</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800" href="#">
<span className="material-symbols-outlined text-text-light dark:text-text-dark">help</span>
<p className="text-sm font-medium leading-normal">Help &amp; Support</p>
</a>
</div>
</div>
</nav>
{/* Main Content */}
<main className="flex-1 p-6 lg:p-10">
<div className="mx-auto max-w-7xl">
{/* PageHeading */}
<div className="flex flex-wrap justify-between items-start gap-4 mb-8">
<div className="flex min-w-72 flex-col gap-2">
<h1 className="text-text-light dark:text-text-dark text-4xl font-black leading-tight tracking-[-0.033em]">Settlement Account</h1>
<p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-normal">Bank Account: •••• •••• •••• 1234</p>
</div>
</div>
{/* Stats */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
<div className="flex flex-col gap-2 rounded-xl p-6 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark">
<p className="text-text-light dark:text-text-dark text-base font-medium leading-normal">Total Earnings (All time)</p>
<p className="text-primary dark:text-white tracking-tight text-3xl font-bold leading-tight">PKR 1,250,000</p>
</div>
<div className="flex flex-col gap-2 rounded-xl p-6 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark">
<p className="text-text-light dark:text-text-dark text-base font-medium leading-normal">Settled Amount</p>
<p className="text-success dark:text-success tracking-tight text-3xl font-bold leading-tight">PKR 1,150,000</p>
</div>
<div className="flex flex-col gap-2 rounded-xl p-6 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark">
<p className="text-text-light dark:text-text-dark text-base font-medium leading-normal">Pending Settlement</p>
<p className="text-secondary dark:text-secondary tracking-tight text-3xl font-bold leading-tight">PKR 100,000</p>
</div>
<div className="flex flex-col gap-2 rounded-xl p-6 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark">
<p className="text-text-light dark:text-text-dark text-base font-medium leading-normal">Next Settlement Date</p>
<p className="text-text-light dark:text-text-dark tracking-tight text-3xl font-bold leading-tight">June 24, 2024</p>
</div>
</div>
<div className="flex flex-col lg:flex-row gap-8">
{/* Left Column: Ledger */}
<div className="w-full lg:w-2/3">
{/* SectionHeader and ToolBar */}
<div className="flex flex-wrap items-center justify-between gap-4 mb-4">
<h2 className="text-text-light dark:text-text-dark text-2xl font-bold leading-tight tracking-[-0.015em]">Settlement Ledger</h2>
<div className="flex items-center gap-2">
<button className="flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark hover:bg-gray-50 dark:hover:bg-gray-700">
<span className="material-symbols-outlined text-base">calendar_month</span> Date Range
                                </button>
<button className="flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark hover:bg-gray-50 dark:hover:bg-gray-700">
<span className="material-symbols-outlined text-base">filter_list</span> Status
                                </button>
<button className="flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark hover:bg-gray-50 dark:hover:bg-gray-700 text-success">
<span className="material-symbols-outlined text-base">file_download</span> Export
                                </button>
</div>
</div>
{/* Data Table */}
<div className="overflow-x-auto bg-card-light dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark">
<table className="min-w-full text-sm text-left">
<thead className="border-b border-border-light dark:border-border-dark text-gray-500 dark:text-gray-400">
<tr>
<th className="px-6 py-3 font-medium" scope="col">Date</th>
<th className="px-6 py-3 font-medium" scope="col">Order ID</th>
<th className="px-6 py-3 font-medium" scope="col">Farmer Name</th>
<th className="px-6 py-3 font-medium text-right" scope="col">Order Amount</th>
<th className="px-6 py-3 font-medium text-right" scope="col">Net Settlement</th>
<th className="px-6 py-3 font-medium text-center" scope="col">Status</th>
<th className="px-1 py-3 font-medium" scope="col"></th>
</tr>
</thead>
<tbody>
<tr className="border-b border-border-light dark:border-border-dark hover:bg-gray-50 dark:hover:bg-gray-800/50">
<td className="px-6 py-4">June 20, 2024</td>
<td className="px-6 py-4 font-mono text-xs">AGR-98765</td>
<td className="px-6 py-4">Ali Hassan</td>
<td className="px-6 py-4 text-right">PKR 15,000</td>
<td className="px-6 py-4 text-right font-semibold">PKR 14,250</td>
<td className="px-6 py-4 text-center">
<span className="inline-flex items-center gap-1.5 rounded-full bg-success/10 px-2 py-1 text-xs font-medium text-success">
<span className="material-symbols-outlined text-sm">check_circle</span> Settled
                                            </span>
</td>
<td className="px-1 py-4 text-center"> <span className="material-symbols-outlined text-gray-400">expand_more</span> </td>
</tr>
<tr className="bg-gray-50 dark:bg-gray-800/50">
<td className="p-0" colspan="7">
<div className="p-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div>
<h4 className="font-semibold mb-2">Order Breakdown</h4>
<ul className="text-sm space-y-1 text-gray-600 dark:text-gray-300">
<li>Urea Fertilizer (x2): PKR 10,000</li>
<li>Pesticide Spray (x1): PKR 5,000</li>
<li className="border-t border-border-light dark:border-border-dark pt-1 mt-1">AgriConnect Fee (5%): -PKR 750</li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-2">Settlement Timeline</h4>
<ol className="relative border-l border-gray-200 dark:border-gray-700 ml-2">
<li className="mb-4 ml-4">
<div className="absolute w-3 h-3 bg-success rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900"></div>
<time className="mb-1 text-xs font-normal leading-none text-gray-400 dark:text-gray-500">June 18, 2024</time>
<h3 className="text-sm font-semibold text-gray-900 dark:text-white">Order Delivered</h3>
</li>
<li className="mb-4 ml-4">
<div className="absolute w-3 h-3 bg-success rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900"></div>
<time className="mb-1 text-xs font-normal leading-none text-gray-400 dark:text-gray-500">June 20, 2024</time>
<h3 className="text-sm font-semibold text-gray-900 dark:text-white">Bank Transfer Completed</h3>
</li>
</ol>
</div>
<div className="flex flex-col gap-2 justify-start">
<h4 className="font-semibold mb-1">Documents</h4>
<p className="text-xs mb-2">Transaction ID: <span className="font-mono">SET-1234-ABCD</span></p>
<button className="flex w-full max-w-xs items-center justify-center gap-2 rounded-lg h-9 px-3 bg-primary/10 text-primary dark:text-secondary dark:bg-secondary/10 text-sm font-bold hover:bg-primary/20 dark:hover:bg-secondary/20 transition-colors">
<span className="material-symbols-outlined text-base">download</span>
                                                            Download Invoice
                                                        </button>
</div>
</div>
</div>
</td>
</tr>
<tr className="border-b border-border-light dark:border-border-dark hover:bg-gray-50 dark:hover:bg-gray-800/50">
<td className="px-6 py-4">June 21, 2024</td>
<td className="px-6 py-4 font-mono text-xs">AGR-98799</td>
<td className="px-6 py-4">Fatima Bibi</td>
<td className="px-6 py-4 text-right">PKR 100,000</td>
<td className="px-6 py-4 text-right font-semibold">PKR 95,000</td>
<td className="px-6 py-4 text-center">
<span className="inline-flex items-center gap-1.5 rounded-full bg-secondary/10 px-2 py-1 text-xs font-medium text-secondary">
<span className="material-symbols-outlined text-sm">hourglass_top</span> Pending
                                            </span>
</td>
<td className="px-1 py-4 text-center"> <span className="material-symbols-outlined text-gray-400">expand_more</span> </td>
</tr>
<tr className="border-b border-border-light dark:border-border-dark hover:bg-gray-50 dark:hover:bg-gray-800/50">
<td className="px-6 py-4">June 17, 2024</td>
<td className="px-6 py-4 font-mono text-xs">AGR-98712</td>
<td className="px-6 py-4">Rehan Ahmed</td>
<td className="px-6 py-4 text-right">PKR 22,000</td>
<td className="px-6 py-4 text-right font-semibold">PKR 20,900</td>
<td className="px-6 py-4 text-center">
<span className="inline-flex items-center gap-1.5 rounded-full bg-success/10 px-2 py-1 text-xs font-medium text-success">
<span className="material-symbols-outlined text-sm">check_circle</span> Settled
                                            </span>
</td>
<td className="px-1 py-4 text-center"> <span className="material-symbols-outlined text-gray-400">expand_more</span> </td>
</tr>
</tbody>
</table>
</div>
</div>
{/* Right Column: Info & Actions */}
<div className="w-full lg:w-1/3 space-y-8">
{/* Settlement Schedule */}
<div className="rounded-xl border border-border-light dark:border-border-dark p-6 bg-card-light dark:bg-card-dark">
<h3 className="font-bold text-lg mb-4">Settlement Schedule</h3>
<div className="flex items-center justify-between p-4 rounded-lg bg-primary/10 dark:bg-primary/20">
<div>
<p className="text-sm font-medium text-primary dark:text-text-dark">Next settlement in</p>
<p className="text-xl font-bold text-primary dark:text-white">2 days, 4 hours</p>
</div>
<span className="material-symbols-outlined text-4xl text-primary dark:text-white">update</span>
</div>
<p className="text-sm text-gray-500 dark:text-gray-400 mt-4">Settlements are processed automatically every Monday &amp; Thursday.</p>
</div>
{/* Early Settlement */}
<div className="rounded-xl border border-border-light dark:border-border-dark p-6 bg-card-light dark:bg-card-dark">
<h3 className="font-bold text-lg mb-2">Withdrawal</h3>
<p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Need your funds sooner? Request an early settlement.</p>
<button className="w-full flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-secondary text-primary font-bold hover:bg-secondary/90 transition-colors">
<span className="material-symbols-outlined text-xl">bolt</span>
                                Request Early Settlement
                           </button>
<p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-3">A 1.5% processing fee will be applied.</p>
</div>
</div>
</div>
</div>
</main>
</div>

    </>
  );
}
