
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden">
<div className="layout-container flex h-full grow flex-col">
<div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
<div className="layout-content-container flex flex-col max-w-[1280px] flex-1">
{/* Page Heading */}
<div className="flex flex-wrap justify-between items-center gap-4 p-4">
<div className="flex flex-col gap-2">
<p className="text-gray-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Financial Ledger</p>
<p className="text-gray-600 dark:text-[#a4c992] text-base font-normal leading-normal">Comprehensive double-entry view for all platform transactions.</p>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center justify-center gap-2 min-w-[84px] max-w-[480px] cursor-pointer overflow-hidden rounded-lg h-10 px-4 bg-gray-200 dark:bg-[#2f4823] text-gray-800 dark:text-white text-sm font-bold leading-normal tracking-[0.015em]">
<span className="material-symbols-outlined text-lg">download</span>
<span className="truncate">Export for accounting software</span>
</button>
<button className="flex items-center justify-center gap-2 min-w-[84px] max-w-[480px] cursor-pointer overflow-hidden rounded-lg h-10 px-4 bg-gray-200 dark:bg-[#2f4823] text-gray-800 dark:text-white text-sm font-bold leading-normal tracking-[0.015em]">
<span className="material-symbols-outlined text-lg">assessment</span>
<span className="truncate">Generate financial reports</span>
</button>
</div>
</div>
{/* Filters and Search */}
<div className="flex flex-col md:flex-row md:items-center gap-4 p-4">
<div className="flex flex-wrap items-center gap-3">
<button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-gray-200 dark:bg-[#2f4823] pl-4 pr-2 text-gray-800 dark:text-white">
<p className="text-sm font-medium leading-normal">Date range: Today</p>
<span className="material-symbols-outlined text-base">expand_more</span>
</button>
<button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-gray-200 dark:bg-[#2f4823] pl-4 pr-2 text-gray-800 dark:text-white">
<p className="text-sm font-medium leading-normal">Type: All</p>
<span className="material-symbols-outlined text-base">expand_more</span>
</button>
<button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-gray-200 dark:bg-[#2f4823] pl-4 pr-2 text-gray-800 dark:text-white">
<p className="text-sm font-medium leading-normal">User: All</p>
<span className="material-symbols-outlined text-base">expand_more</span>
</button>
<button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-gray-200 dark:bg-[#2f4823] pl-4 pr-2 text-gray-800 dark:text-white">
<p className="text-sm font-medium leading-normal">Status: All</p>
<span className="material-symbols-outlined text-base">expand_more</span>
</button>
</div>
<div className="flex-grow min-w-[280px]">
<label className="flex flex-col h-10 w-full">
<div className="flex w-full flex-1 items-stretch rounded-lg h-full">
<div className="text-gray-500 dark:text-[#a4c992] flex bg-gray-200 dark:bg-[#2f4823] items-center justify-center pl-3 rounded-l-lg border-r-0">
<span className="material-symbols-outlined text-xl">search</span>
</div>
<input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-0 border-none bg-gray-200 dark:bg-[#2f4823] focus:border-none h-full placeholder:text-gray-500 placeholder:dark:text-[#a4c992] px-4 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal" placeholder="Search by Order ID or Transaction ID" defaultValue=""/>
</div>
</label>
</div>
</div>
{/* Table */}
<div className="px-4 py-3 @container">
<div className="flex overflow-hidden rounded-lg border border-gray-300 dark:border-[#446732] bg-background-light dark:bg-[#172211]">
<div className="w-full overflow-x-auto">
<table className="w-full">
<thead className="bg-gray-100 dark:bg-[#223319]">
<tr>
<th className="px-4 py-3 text-left text-gray-600 dark:text-white text-sm font-medium leading-normal">Date &amp; Time</th>
<th className="px-4 py-3 text-left text-gray-600 dark:text-white text-sm font-medium leading-normal">Transaction ID</th>
<th className="px-4 py-3 text-left text-gray-600 dark:text-white text-sm font-medium leading-normal">Reference</th>
<th className="px-4 py-3 text-left text-gray-600 dark:text-white text-sm font-medium leading-normal">User Name</th>
<th className="px-4 py-3 text-left text-gray-600 dark:text-white text-sm font-medium leading-normal">Debit Account</th>
<th className="px-4 py-3 text-left text-gray-600 dark:text-white text-sm font-medium leading-normal">Credit Account</th>
<th className="px-4 py-3 text-right text-gray-600 dark:text-white text-sm font-medium leading-normal">Amount (PKR)</th>
<th className="px-4 py-3 text-center text-gray-600 dark:text-white text-sm font-medium leading-normal">Type</th>
<th className="px-4 py-3 text-center text-gray-600 dark:text-white text-sm font-medium leading-normal">Status</th>
</tr>
</thead>
<tbody>
<tr className="border-t border-t-gray-200 dark:border-t-[#446732] bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/30">
<td className="h-[60px] px-4 py-2 text-gray-700 dark:text-[#a4c992] text-sm font-normal leading-normal whitespace-nowrap">2023-10-27 10:05 AM</td>
<td className="h-[60px] px-4 py-2 text-primary-600 dark:text-primary underline cursor-pointer text-sm font-medium leading-normal whitespace-nowrap">TXN-20231027-001</td>
<td className="h-[60px] px-4 py-2 text-gray-700 dark:text-[#a4c992] text-sm font-normal leading-normal whitespace-nowrap">ORD-554433</td>
<td className="h-[60px] px-4 py-2 text-gray-700 dark:text-[#a4c992] text-sm font-normal leading-normal whitespace-nowrap">Ali Khan (Farmer)</td>
<td className="h-[60px] px-4 py-2 text-gray-700 dark:text-[#a4c992] text-sm font-normal leading-normal whitespace-nowrap">Farmer Wallet #123</td>
<td className="h-[60px] px-4 py-2 text-gray-700 dark:text-[#a4c992] text-sm font-normal leading-normal whitespace-nowrap">AgriConnect Escrow</td>
<td className="h-[60px] px-4 py-2 text-gray-700 dark:text-[#a4c992] text-sm font-normal leading-normal text-right whitespace-nowrap">15,000.00</td>
<td className="h-[60px] px-4 py-2 w-40 text-sm font-normal leading-normal text-center">
<span className="inline-flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/50 px-3 py-1 text-xs font-medium text-blue-800 dark:text-blue-200">Payment</span>
</td>
<td className="h-[60px] px-4 py-2 w-40 text-sm font-normal leading-normal text-center">
<span className="inline-flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900/50 px-3 py-1 text-xs font-medium text-green-800 dark:text-green-200">Completed</span>
</td>
</tr>
<tr className="border-t border-t-gray-200 dark:border-t-[#446732] bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30">
<td className="h-[60px] px-4 py-2 text-gray-700 dark:text-[#a4c992] text-sm font-normal leading-normal whitespace-nowrap">2023-10-27 09:30 AM</td>
<td className="h-[60px] px-4 py-2 text-primary-600 dark:text-primary underline cursor-pointer text-sm font-medium leading-normal whitespace-nowrap">TXN-20231027-002</td>
<td className="h-[60px] px-4 py-2 text-gray-700 dark:text-[#a4c992] text-sm font-normal leading-normal whitespace-nowrap">ORD-554432</td>
<td className="h-[60px] px-4 py-2 text-gray-700 dark:text-[#a4c992] text-sm font-normal leading-normal whitespace-nowrap">Fatima Supplies (Supplier)</td>
<td className="h-[60px] px-4 py-2 text-gray-700 dark:text-[#a4c992] text-sm font-normal leading-normal whitespace-nowrap">AgriConnect Escrow</td>
<td className="h-[60px] px-4 py-2 text-gray-700 dark:text-[#a4c992] text-sm font-normal leading-normal whitespace-nowrap">Supplier Settlement</td>
<td className="h-[60px] px-4 py-2 text-gray-700 dark:text-[#a4c992] text-sm font-normal leading-normal text-right whitespace-nowrap">25,500.00</td>
<td className="h-[60px] px-4 py-2 w-40 text-sm font-normal leading-normal text-center">
<span className="inline-flex items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/50 px-3 py-1 text-xs font-medium text-purple-800 dark:text-purple-200">Settlement</span>
</td>
<td className="h-[60px] px-4 py-2 w-40 text-sm font-normal leading-normal text-center">
<span className="inline-flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900/50 px-3 py-1 text-xs font-medium text-green-800 dark:text-green-200">Completed</span>
</td>
</tr>
<tr className="border-t border-t-gray-200 dark:border-t-[#446732] bg-yellow-50 dark:bg-yellow-900/20 hover:bg-yellow-100 dark:hover:bg-yellow-900/30">
<td className="h-[60px] px-4 py-2 text-gray-700 dark:text-[#a4c992] text-sm font-normal leading-normal whitespace-nowrap">2023-10-27 09:15 AM</td>
<td className="h-[60px] px-4 py-2 text-primary-600 dark:text-primary underline cursor-pointer text-sm font-medium leading-normal whitespace-nowrap">TXN-20231027-003</td>
<td className="h-[60px] px-4 py-2 text-gray-700 dark:text-[#a4c992] text-sm font-normal leading-normal whitespace-nowrap">ORD-554431</td>
<td className="h-[60px] px-4 py-2 text-gray-700 dark:text-[#a4c992] text-sm font-normal leading-normal whitespace-nowrap">Rehan Ahmed (Farmer)</td>
<td className="h-[60px] px-4 py-2 text-gray-700 dark:text-[#a4c992] text-sm font-normal leading-normal whitespace-nowrap">Farmer Wallet #124</td>
<td className="h-[60px] px-4 py-2 text-gray-700 dark:text-[#a4c992] text-sm font-normal leading-normal whitespace-nowrap">AgriConnect Escrow</td>
<td className="h-[60px] px-4 py-2 text-gray-700 dark:text-[#a4c992] text-sm font-normal leading-normal text-right whitespace-nowrap">8,200.00</td>
<td className="h-[60px] px-4 py-2 w-40 text-sm font-normal leading-normal text-center">
<span className="inline-flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/50 px-3 py-1 text-xs font-medium text-blue-800 dark:text-blue-200">Payment</span>
</td>
<td className="h-[60px] px-4 py-2 w-40 text-sm font-normal leading-normal text-center">
<span className="inline-flex items-center justify-center rounded-full bg-yellow-100 dark:bg-yellow-900/50 px-3 py-1 text-xs font-medium text-yellow-800 dark:text-yellow-200">Pending</span>
</td>
</tr>
<tr className="border-t border-t-gray-200 dark:border-t-[#446732] bg-red-50 dark:bg-red-900/20 hover:bg-red-100 dark:hover:bg-red-900/30">
<td className="h-[60px] px-4 py-2 text-gray-700 dark:text-[#a4c992] text-sm font-normal leading-normal whitespace-nowrap">2023-10-26 02:10 PM</td>
<td className="h-[60px] px-4 py-2 text-primary-600 dark:text-primary underline cursor-pointer text-sm font-medium leading-normal whitespace-nowrap">TXN-20231026-005</td>
<td className="h-[60px] px-4 py-2 text-gray-700 dark:text-[#a4c992] text-sm font-normal leading-normal whitespace-nowrap">ORD-554429</td>
<td className="h-[60px] px-4 py-2 text-gray-700 dark:text-[#a4c992] text-sm font-normal leading-normal whitespace-nowrap">Bilal Farms (Farmer)</td>
<td className="h-[60px] px-4 py-2 text-gray-700 dark:text-[#a4c992] text-sm font-normal leading-normal whitespace-nowrap">Farmer Wallet #125</td>
<td className="h-[60px] px-4 py-2 text-gray-700 dark:text-[#a4c992] text-sm font-normal leading-normal whitespace-nowrap">AgriConnect Escrow</td>
<td className="h-[60px] px-4 py-2 text-gray-700 dark:text-[#a4c992] text-sm font-normal leading-normal text-right whitespace-nowrap">5,000.00</td>
<td className="h-[60px] px-4 py-2 w-40 text-sm font-normal leading-normal text-center">
<span className="inline-flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/50 px-3 py-1 text-xs font-medium text-blue-800 dark:text-blue-200">Payment</span>
</td>
<td className="h-[60px] px-4 py-2 w-40 text-sm font-normal leading-normal text-center">
<span className="inline-flex items-center justify-center rounded-full bg-red-100 dark:bg-red-900/50 px-3 py-1 text-xs font-medium text-red-800 dark:text-red-200">Failed</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
{/* Table Footer */}
<div className="flex flex-col sm:flex-row justify-between items-center gap-4 p-4 mt-4 bg-gray-100 dark:bg-[#223319] rounded-lg">
<div className="flex items-center gap-2 text-green-700 dark:text-green-400 font-bold text-sm">
<span className="material-symbols-outlined text-xl">verified</span>
<span>Total Debits: PKR 48,700.00 = Total Credits: PKR 48,700.00</span>
</div>
<div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
<button className="flex items-center justify-center h-8 w-8 rounded-md hover:bg-gray-200 dark:hover:bg-[#2f4823]">
<span className="material-symbols-outlined text-xl">chevron_left</span>
</button>
<span className="text-sm">Page 1 of 10</span>
<button className="flex items-center justify-center h-8 w-8 rounded-md hover:bg-gray-200 dark:hover:bg-[#2f4823]">
<span className="material-symbols-outlined text-xl">chevron_right</span>
</button>
</div>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
