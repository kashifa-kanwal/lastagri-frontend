
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="relative flex min-h-screen w-full">
{/* SideNavBar */}
<aside className="sticky top-0 h-screen w-64 flex-col bg-surface-light dark:bg-surface-dark border-r border-border-light dark:border-border-dark p-4 hidden lg:flex">
<div className="flex flex-col gap-4">
<div className="flex items-center gap-3">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="AgriConnect logo"></div>
<div className="flex flex-col">
<h1 className="text-text-light-primary dark:text-text-dark-primary text-base font-medium leading-normal">AgriConnect</h1>
<p className="text-text-light-secondary dark:text-text-dark-secondary text-sm font-normal leading-normal">Supplier Dashboard</p>
</div>
</div>
<nav className="flex flex-col gap-2 mt-4">
<a className="flex items-center gap-3 px-3 py-2 rounded-DEFAULT bg-primary/20 text-text-light-primary dark:text-text-dark-primary" href="#">
<span className="material-symbols-outlined text-text-light-primary dark:text-text-dark-primary">dashboard</span>
<p className="text-sm font-medium leading-normal">Dashboard</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-DEFAULT hover:bg-primary/10" href="#">
<span className="material-symbols-outlined text-text-light-primary dark:text-text-dark-primary">trending_up</span>
<p className="text-text-light-primary dark:text-text-dark-primary text-sm font-medium leading-normal">Sales</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-DEFAULT hover:bg-primary/10" href="#">
<span className="material-symbols-outlined text-text-light-primary dark:text-text-dark-primary">inventory_2</span>
<p className="text-text-light-primary dark:text-text-dark-primary text-sm font-medium leading-normal">Products</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-DEFAULT hover:bg-primary/10" href="#">
<span className="material-symbols-outlined text-text-light-primary dark:text-text-dark-primary">group</span>
<p className="text-text-light-primary dark:text-text-dark-primary text-sm font-medium leading-normal">Customers</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-DEFAULT hover:bg-primary/10" href="#">
<span className="material-symbols-outlined text-text-light-primary dark:text-text-dark-primary">lab_profile</span>
<p className="text-text-light-primary dark:text-text-dark-primary text-sm font-medium leading-normal">Reports</p>
</a>
</nav>
</div>
<div className="mt-auto flex flex-col gap-4">
<button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-text-light-primary text-sm font-bold leading-normal tracking-[0.015em]">
<span className="truncate">New Order</span>
</button>
<div className="flex flex-col gap-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-DEFAULT hover:bg-primary/10" href="#">
<span className="material-symbols-outlined text-text-light-primary dark:text-text-dark-primary">settings</span>
<p className="text-text-light-primary dark:text-text-dark-primary text-sm font-medium leading-normal">Settings</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-DEFAULT hover:bg-primary/10" href="#">
<span className="material-symbols-outlined text-text-light-primary dark:text-text-dark-primary">help</span>
<p className="text-text-light-primary dark:text-text-dark-primary text-sm font-medium leading-normal">Help</p>
</a>
</div>
</div>
</aside>
{/* Main Content */}
<main className="flex-1 p-6 md:p-8 lg:p-10">
<div className="flex flex-col gap-6">
{/* PageHeading & Chips */}
<div className="flex flex-wrap justify-between items-start gap-4">
<div className="flex flex-col gap-2">
<h1 className="text-text-light-primary dark:text-text-dark-primary text-3xl font-black tracking-tight">Business Intelligence Dashboard</h1>
<p className="text-text-light-secondary dark:text-text-dark-secondary text-base font-normal">Here is your business performance summary.</p>
</div>
<div className="flex flex-wrap items-center gap-3">
<div className="flex gap-2">
<div className="flex h-10 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-lg bg-primary/20 pl-4 pr-4">
<p className="text-text-light-primary dark:text-text-dark-primary text-sm font-medium">MTD</p>
</div>
<div className="flex h-10 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-lg bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark pl-4 pr-4 hover:bg-primary/10">
<p className="text-text-light-primary dark:text-text-dark-primary text-sm font-medium">QTD</p>
</div>
<div className="flex h-10 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-lg bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark pl-4 pr-4 hover:bg-primary/10">
<p className="text-text-light-primary dark:text-text-dark-primary text-sm font-medium">YTD</p>
</div>
<div className="flex h-10 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-lg bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark pl-4 pr-4 hover:bg-primary/10">
<p className="text-text-light-primary dark:text-text-dark-primary text-sm font-medium">Custom</p>
</div>
</div>
<button className="flex min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 bg-primary text-text-light-primary text-sm font-bold leading-normal tracking-[0.015em]">
<span className="material-symbols-outlined text-lg">download</span>
<span className="truncate">Export Data</span>
</button>
</div>
</div>
{/* Stats Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="flex flex-col gap-2 rounded-lg p-6 border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark">
<p className="text-text-light-primary dark:text-text-dark-primary text-base font-medium">Total Revenue</p>
<p className="text-text-light-primary dark:text-text-dark-primary tracking-tight text-3xl font-bold">PKR 1.25M</p>
<p className="text-positive text-base font-medium">+5.2%</p>
</div>
<div className="flex flex-col gap-2 rounded-lg p-6 border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark">
<p className="text-text-light-primary dark:text-text-dark-primary text-base font-medium">Avg Order Value</p>
<p className="text-text-light-primary dark:text-text-dark-primary tracking-tight text-3xl font-bold">PKR 8.5K</p>
<p className="text-negative text-base font-medium">-1.8%</p>
</div>
<div className="flex flex-col gap-2 rounded-lg p-6 border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark">
<p className="text-text-light-primary dark:text-text-dark-primary text-base font-medium">Revenue/Farmer</p>
<p className="text-text-light-primary dark:text-text-dark-primary tracking-tight text-3xl font-bold">PKR 12K</p>
<p className="text-positive text-base font-medium">+3.1%</p>
</div>
<div className="flex flex-col gap-2 rounded-lg p-6 border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark">
<p className="text-text-light-primary dark:text-text-dark-primary text-base font-medium">New Farmers</p>
<p className="text-text-light-primary dark:text-text-dark-primary tracking-tight text-3xl font-bold">78</p>
<p className="text-positive text-base font-medium">+12%</p>
</div>
</div>
{/* Charts Grid */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="flex lg:col-span-2 flex-col gap-2 rounded-lg border border-border-light dark:border-border-dark p-6 bg-surface-light dark:bg-surface-dark">
<p className="text-text-light-primary dark:text-text-dark-primary text-base font-medium">Revenue Trend</p>
<p className="text-text-light-primary dark:text-text-dark-primary tracking-tight text-3xl font-bold truncate">PKR 450,000</p>
<div className="flex gap-1">
<p className="text-text-light-secondary dark:text-text-dark-secondary text-base font-normal">Last 30 days</p>
<p className="text-positive text-base font-medium">+8.5%</p>
</div>
<div className="flex min-h-[220px] flex-1 flex-col gap-8 py-4">
<svg fill="none" height="100%" preserveaspectratio="none" viewBox="-3 0 478 150" width="100%" xmlns="http://www.w3.org/2000/svg">
<path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H326.769H0V109Z" fill="url(#paint0_linear_chart)"></path>
<path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25" stroke="#669a4c" strokeLinecap="round" strokeWidth="3"></path>
<defs>
<lineargradient gradientunits="userSpaceOnUse" id="paint0_linear_chart" x1="236" x2="236" y1="1" y2="149">
<stop stop-color="#5bec13" stop-opacity="0.3"></stop>
<stop offset="1" stop-color="#5bec13" stop-opacity="0"></stop>
</lineargradient>
</defs>
</svg>
<div className="flex justify-around">
<p className="text-text-light-secondary dark:text-text-dark-secondary text-[13px] font-bold tracking-[0.015em]">Week 1</p>
<p className="text-text-light-secondary dark:text-text-dark-secondary text-[13px] font-bold tracking-[0.015em]">Week 2</p>
<p className="text-text-light-secondary dark:text-text-dark-secondary text-[13px] font-bold tracking-[0.015em]">Week 3</p>
<p className="text-text-light-secondary dark:text-text-dark-secondary text-[13px] font-bold tracking-[0.015em]">Week 4</p>
</div>
</div>
</div>
<div className="flex flex-col gap-2 rounded-lg border border-border-light dark:border-border-dark p-6 bg-surface-light dark:bg-surface-dark">
<p className="text-text-light-primary dark:text-text-dark-primary text-base font-medium">Order Breakdown</p>
<p className="text-text-light-primary dark:text-text-dark-primary tracking-tight text-3xl font-bold truncate">147 Orders</p>
<div className="flex gap-1">
<p className="text-text-light-secondary dark:text-text-dark-secondary text-base font-normal">Last 30 days</p>
<p className="text-positive text-base font-medium">+2.0%</p>
</div>
<div className="flex-1 flex items-center justify-center py-4">
<div className="relative w-48 h-48">
<svg className="w-full h-full" viewBox="0 0 36 36">
<path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#5bec13" stroke-dasharray="70, 30" strokeWidth="4"></path>
<path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#669a4c" stroke-dasharray="0, 70, 30, 0" strokeWidth="4"></path>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-2xl font-bold text-text-light-primary dark:text-text-dark-primary">103</span>
<span className="text-sm text-text-light-secondary dark:text-text-dark-secondary">Repeat</span>
</div>
</div>
</div>
<div className="flex justify-around text-sm">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-[#5bec13]"></div>
<span className="text-text-light-secondary dark:text-text-dark-secondary">Repeat (70%)</span>
</div>
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-[#669a4c]"></div>
<span className="text-text-light-secondary dark:text-text-dark-secondary">New (30%)</span>
</div>
</div>
</div>
</div>
{/* Product and Customer Insights */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
{/* Best Selling Products */}
<div className="rounded-lg border border-border-light dark:border-border-dark p-6 bg-surface-light dark:bg-surface-dark">
<h3 className="text-lg font-bold text-text-light-primary dark:text-text-dark-primary mb-4">Best-Selling Products</h3>
<div className="overflow-x-auto">
<table className="w-full text-sm text-left">
<thead className="text-xs text-text-light-secondary dark:text-text-dark-secondary uppercase">
<tr>
<th className="py-3 pr-3" scope="col">Product</th>
<th className="py-3 px-3 text-center" scope="col">Units Sold</th>
<th className="py-3 pl-3 text-right" scope="col">Revenue</th>
</tr>
</thead>
<tbody>
<tr className="border-t border-border-light dark:border-border-dark">
<td className="py-3 pr-3 font-medium text-text-light-primary dark:text-text-dark-primary">Urea Fertilizer</td>
<td className="py-3 px-3 text-center text-text-light-secondary dark:text-text-dark-secondary">450</td>
<td className="py-3 pl-3 text-right text-text-light-primary dark:text-text-dark-primary">PKR 225,000</td>
</tr>
<tr className="border-t border-border-light dark:border-border-dark">
<td className="py-3 pr-3 font-medium text-text-light-primary dark:text-text-dark-primary">Cotton Seeds (BT)</td>
<td className="py-3 px-3 text-center text-text-light-secondary dark:text-text-dark-secondary">320</td>
<td className="py-3 pl-3 text-right text-text-light-primary dark:text-text-dark-primary">PKR 180,000</td>
</tr>
<tr className="border-t border-border-light dark:border-border-dark">
<td className="py-3 pr-3 font-medium text-text-light-primary dark:text-text-dark-primary">DAP Fertilizer</td>
<td className="py-3 px-3 text-center text-text-light-secondary dark:text-text-dark-secondary">210</td>
<td className="py-3 pl-3 text-right text-text-light-primary dark:text-text-dark-primary">PKR 150,500</td>
</tr>
</tbody>
</table>
</div>
</div>
{/* Top Customers */}
<div className="rounded-lg border border-border-light dark:border-border-dark p-6 bg-surface-light dark:bg-surface-dark">
<h3 className="text-lg font-bold text-text-light-primary dark:text-text-dark-primary mb-4">Top Customers</h3>
<div className="flex flex-col gap-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="farmer avatar"></div>
<div>
<p className="font-medium text-text-light-primary dark:text-text-dark-primary">Ali Khan</p>
<p className="text-sm text-text-light-secondary dark:text-text-dark-secondary">5 orders</p>
</div>
</div>
<p className="font-bold text-text-light-primary dark:text-text-dark-primary">PKR 45,200</p>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="farmer avatar"></div>
<div>
<p className="font-medium text-text-light-primary dark:text-text-dark-primary">Bashir Ahmed</p>
<p className="text-sm text-text-light-secondary dark:text-text-dark-secondary">4 orders</p>
</div>
</div>
<p className="font-bold text-text-light-primary dark:text-text-dark-primary">PKR 38,700</p>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="farmer avatar"></div>
<div>
<p className="font-medium text-text-light-primary dark:text-text-dark-primary">Chaudhry Riaz</p>
<p className="text-sm text-text-light-secondary dark:text-text-dark-secondary">6 orders</p>
</div>
</div>
<p className="font-bold text-text-light-primary dark:text-text-dark-primary">PKR 35,100</p>
</div>
</div>
</div>
</div>
{/* Geographic Sales */}
<div className="rounded-lg border border-border-light dark:border-border-dark p-6 bg-surface-light dark:bg-surface-dark">
<h3 className="text-lg font-bold text-text-light-primary dark:text-text-dark-primary mb-4">Geographic Sales</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<p className="text-sm text-text-light-secondary dark:text-text-dark-secondary mb-2">Sales Heatmap by District</p>
<div className="aspect-video w-full rounded-lg bg-cover bg-center" data-alt="Map of Pakistan with sales heatmap"></div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-sm text-left">
<thead className="text-xs text-text-light-secondary dark:text-text-dark-secondary uppercase">
<tr>
<th className="py-3 pr-3" scope="col">District</th>
<th className="py-3 px-3 text-center" scope="col">Orders</th>
<th className="py-3 pl-3 text-right" scope="col">Revenue</th>
</tr>
</thead>
<tbody>
<tr className="border-t border-border-light dark:border-border-dark">
<td className="py-3 pr-3 font-medium text-text-light-primary dark:text-text-dark-primary">Rahim Yar Khan</td>
<td className="py-3 px-3 text-center text-text-light-secondary dark:text-text-dark-secondary">28</td>
<td className="py-3 pl-3 text-right text-text-light-primary dark:text-text-dark-primary">PKR 210,000</td>
</tr>
<tr className="border-t border-border-light dark:border-border-dark">
<td className="py-3 pr-3 font-medium text-text-light-primary dark:text-text-dark-primary">Bahawalpur</td>
<td className="py-3 px-3 text-center text-text-light-secondary dark:text-text-dark-secondary">22</td>
<td className="py-3 pl-3 text-right text-text-light-primary dark:text-text-dark-primary">PKR 185,500</td>
</tr>
<tr className="border-t border-border-light dark:border-border-dark">
<td className="py-3 pr-3 font-medium text-text-light-primary dark:text-text-dark-primary">Multan</td>
<td className="py-3 px-3 text-center text-text-light-secondary dark:text-text-dark-secondary">19</td>
<td className="py-3 pl-3 text-right text-text-light-primary dark:text-text-dark-primary">PKR 152,000</td>
</tr>
<tr className="border-t border-border-light dark:border-border-dark">
<td className="py-3 pr-3 font-medium text-text-light-primary dark:text-text-dark-primary">Lodhran</td>
<td className="py-3 px-3 text-center text-text-light-secondary dark:text-text-dark-secondary">15</td>
<td className="py-3 pl-3 text-right text-text-light-primary dark:text-text-dark-primary">PKR 110,300</td>
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
