
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
<div className="layout-container flex h-full grow flex-col">
<div className="flex flex-1 justify-center py-5">
<div className="layout-content-container flex flex-col w-full max-w-7xl px-4 md:px-8">
{/* TopNavBar */}
<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 dark:border-b-[#233648] px-2 md:px-6 py-3">
<div className="flex items-center gap-4 text-black dark:text-white">
<div className="size-6 text-primary">
<svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
</svg>
</div>
<h2 className="text-black dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">AgriConnect</h2>
</div>
<div className="hidden md:flex flex-1 justify-center gap-8">
<div className="flex items-center gap-9">
<a className="text-gray-800 dark:text-white text-sm font-medium leading-normal" href="#">Dashboard</a>
<a className="text-primary dark:text-primary text-sm font-bold leading-normal border-b-2 border-primary pb-1" href="#">Supplier Management</a>
<a className="text-gray-800 dark:text-white text-sm font-medium leading-normal" href="#">Farmer Accounts</a>
<a className="text-gray-800 dark:text-white text-sm font-medium leading-normal" href="#">Reports</a>
</div>
</div>
<div className="flex items-center gap-2">
<button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-gray-100 dark:bg-[#233648] text-gray-800 dark:text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
<span className="material-symbols-outlined text-gray-600 dark:text-white">notifications</span>
</button>
<button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-gray-100 dark:bg-[#233648] text-gray-800 dark:text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
<span className="material-symbols-outlined text-gray-600 dark:text-white">help</span>
</button>
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="User avatar image"></div>
</div>
</header>
<main className="flex flex-col gap-6 pt-8">
{/* PageHeading */}
<div className="flex flex-wrap justify-between items-center gap-4 px-2 md:px-6">
<div className="flex flex-col gap-2">
<p className="text-gray-900 dark:text-white text-3xl font-bold leading-tight tracking-[-0.03em]">Supplier Management</p>
<p className="text-gray-500 dark:text-[#92adc9] text-base font-normal leading-normal">Oversee and manage all supplier accounts and activities on the platform.</p>
</div>
<button className="flex items-center justify-center gap-2 h-10 px-4 bg-primary text-white rounded-lg text-sm font-medium">
<span className="material-symbols-outlined">add</span>
<span>Add New Supplier</span>
</button>
</div>
{/* Filters */}
<div className="flex flex-wrap gap-3 p-2 md:px-6 overflow-x-auto">
<button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-gray-100 dark:bg-[#233648] pl-3 pr-2 text-gray-800 dark:text-white">
<p className="text-sm font-medium leading-normal">Registration: All</p>
<span className="material-symbols-outlined text-gray-500 dark:text-white">expand_more</span>
</button>
<button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-gray-100 dark:bg-[#233648] pl-3 pr-2 text-gray-800 dark:text-white">
<p className="text-sm font-medium leading-normal">Rating: All</p>
<span className="material-symbols-outlined text-gray-500 dark:text-white">expand_more</span>
</button>
<button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-gray-100 dark:bg-[#233648] pl-3 pr-2 text-gray-800 dark:text-white">
<p className="text-sm font-medium leading-normal">Category: All</p>
<span className="material-symbols-outlined text-gray-500 dark:text-white">expand_more</span>
</button>
<button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-gray-100 dark:bg-[#233648] pl-3 pr-2 text-gray-800 dark:text-white">
<p className="text-sm font-medium leading-normal">Settlement: All</p>
<span className="material-symbols-outlined text-gray-500 dark:text-white">expand_more</span>
</button>
</div>
{/* Table */}
<div className="px-2 md:px-6 @container">
<div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-[#324d67] bg-white dark:bg-[#111a22]">
<table className="min-w-full text-left">
<thead className="bg-gray-50 dark:bg-[#192633]">
<tr>
<th className="px-4 py-3 text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">Supplier ID</th>
<th className="px-4 py-3 text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">Business Name</th>
<th className="px-4 py-3 text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">Owner Name</th>
<th className="px-4 py-3 text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">Phone</th>
<th className="px-4 py-3 text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">District</th>
<th className="px-4 py-3 text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">Products</th>
<th className="px-4 py-3 text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">Total Sales (PKR)</th>
<th className="px-4 py-3 text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">Settlement</th>
<th className="px-4 py-3 text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">Rating</th>
<th className="px-4 py-3 text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">Status</th>
<th className="px-4 py-3 text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-200 dark:divide-[#324d67]">
<tr>
<td className="px-4 py-3 text-sm text-gray-500 dark:text-[#92adc9]">AG-S001</td>
<td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">Punjab Seeds Co.</td>
<td className="px-4 py-3 text-sm text-gray-500 dark:text-[#92adc9]">Ahmed Khan</td>
<td className="px-4 py-3 text-sm text-gray-500 dark:text-[#92adc9]">0300-1234567</td>
<td className="px-4 py-3 text-sm text-gray-500 dark:text-[#92adc9]">Sahiwal</td>
<td className="px-4 py-3 text-sm text-gray-500 dark:text-[#92adc9]">15</td>
<td className="px-4 py-3 text-sm text-gray-500 dark:text-[#92adc9]">540,000</td>
<td className="px-4 py-3"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success/20 text-success">Up-to-date</span></td>
<td className="px-4 py-3 text-sm text-gray-500 dark:text-[#92adc9]">4.5</td>
<td className="px-4 py-3"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success/20 text-success">Active</span></td>
<td className="px-4 py-3 text-sm font-medium"><a className="text-link" href="#">View Details</a></td>
</tr>
<tr>
<td className="px-4 py-3 text-sm text-gray-500 dark:text-[#92adc9]">AG-S002</td>
<td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">Sindh Fertilizers</td>
<td className="px-4 py-3 text-sm text-gray-500 dark:text-[#92adc9]">Fatima Ali</td>
<td className="px-4 py-3 text-sm text-gray-500 dark:text-[#92adc9]">0321-7654321</td>
<td className="px-4 py-3 text-sm text-gray-500 dark:text-[#92adc9]">Hyderabad</td>
<td className="px-4 py-3 text-sm text-gray-500 dark:text-[#92adc9]">8</td>
<td className="px-4 py-3 text-sm text-gray-500 dark:text-[#92adc9]">210,000</td>
<td className="px-4 py-3"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-warning/20 text-warning">Pending</span></td>
<td className="px-4 py-3 text-sm text-gray-500 dark:text-[#92adc9]">4.2</td>
<td className="px-4 py-3"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success/20 text-success">Active</span></td>
<td className="px-4 py-3 text-sm font-medium"><a className="text-link" href="#">View Details</a></td>
</tr>
<tr>
<td className="px-4 py-3 text-sm text-gray-500 dark:text-[#92adc9]">AG-S003</td>
<td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">KPK Agro Tools</td>
<td className="px-4 py-3 text-sm text-gray-500 dark:text-[#92adc9]">Bilal Shah</td>
<td className="px-4 py-3 text-sm text-gray-500 dark:text-[#92adc9]">0333-1122334</td>
<td className="px-4 py-3 text-sm text-gray-500 dark:text-[#92adc9]">Peshawar</td>
<td className="px-4 py-3 text-sm text-gray-500 dark:text-[#92adc9]">25</td>
<td className="px-4 py-3 text-sm text-gray-500 dark:text-[#92adc9]">890,000</td>
<td className="px-4 py-3"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success/20 text-success">Up-to-date</span></td>
<td className="px-4 py-3 text-sm text-gray-500 dark:text-[#92adc9]">4.8</td>
<td className="px-4 py-3"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success/20 text-success">Active</span></td>
<td className="px-4 py-3 text-sm font-medium"><a className="text-link" href="#">View Details</a></td>
</tr>
<tr>
<td className="px-4 py-3 text-sm text-gray-500 dark:text-[#92adc9]">AG-S004</td>
<td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">Balochistan Organics</td>
<td className="px-4 py-3 text-sm text-gray-500 dark:text-[#92adc9]">Zainab Bibi</td>
<td className="px-4 py-3 text-sm text-gray-500 dark:text-[#92adc9]">0345-5566778</td>
<td className="px-4 py-3 text-sm text-gray-500 dark:text-[#92adc9]">Quetta</td>
<td className="px-4 py-3 text-sm text-gray-500 dark:text-[#92adc9]">5</td>
<td className="px-4 py-3 text-sm text-gray-500 dark:text-[#92adc9]">95,000</td>
<td className="px-4 py-3"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-warning/20 text-warning">Pending</span></td>
<td className="px-4 py-3 text-sm text-gray-500 dark:text-[#92adc9]">3.9</td>
<td className="px-4 py-3"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-danger/20 text-danger">Suspended</span></td>
<td className="px-4 py-3 text-sm font-medium"><a className="text-link" href="#">View Details</a></td>
</tr>
<tr>
<td className="px-4 py-3 text-sm text-gray-500 dark:text-[#92adc9]">AG-S005</td>
<td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">Giglit Farm Supply</td>
<td className="px-4 py-3 text-sm text-gray-500 dark:text-[#92adc9]">Imran Baig</td>
<td className="px-4 py-3 text-sm text-gray-500 dark:text-[#92adc9]">0312-9988776</td>
<td className="px-4 py-3 text-sm text-gray-500 dark:text-[#92adc9]">Gilgit</td>
<td className="px-4 py-3 text-sm text-gray-500 dark:text-[#92adc9]">12</td>
<td className="px-4 py-3 text-sm text-gray-500 dark:text-[#92adc9]">0</td>
<td className="px-4 py-3"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-400/20 text-gray-500 dark:text-gray-400">N/A</span></td>
<td className="px-4 py-3 text-sm text-gray-500 dark:text-[#92adc9]">N/A</td>
<td className="px-4 py-3"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-warning/20 text-warning">Pending Approval</span></td>
<td className="px-4 py-3 text-sm font-medium"><a className="text-link" href="#">View Details</a></td>
</tr>
</tbody>
</table>
</div>
</div>
{/* Pagination */}
<div className="flex items-center justify-center p-4">
<a className="flex size-10 items-center justify-center text-gray-600 dark:text-white" href="#">
<span className="material-symbols-outlined">chevron_left</span>
</a>
<a className="text-sm font-bold leading-normal tracking-[0.015em] flex size-10 items-center justify-center text-white rounded-lg bg-primary" href="#">1</a>
<a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-gray-800 dark:text-white rounded-lg" href="#">2</a>
<a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-gray-800 dark:text-white rounded-lg" href="#">3</a>
<span className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-gray-800 dark:text-white rounded-lg">...</span>
<a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-gray-800 dark:text-white rounded-lg" href="#">8</a>
<a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-gray-800 dark:text-white rounded-lg" href="#">9</a>
<a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-gray-800 dark:text-white rounded-lg" href="#">10</a>
<a className="flex size-10 items-center justify-center text-gray-600 dark:text-white" href="#">
<span className="material-symbols-outlined">chevron_right</span>
</a>
</div>
</main>
</div>
</div>
</div>
</div>

    </>
  );
}
