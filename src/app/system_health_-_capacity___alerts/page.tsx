
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="relative flex min-h-screen w-full">
{/* SideNavBar */}
<aside className="flex flex-col w-64 bg-[#172211] text-white p-4">
<div className="flex flex-col gap-4">
<div className="flex items-center gap-3 p-2">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="Admin avatar"></div>
<div className="flex flex-col">
<h1 className="text-white text-base font-medium leading-normal">Admin Name</h1>
<p className="text-[#a4c992] text-sm font-normal leading-normal">System Administrator</p>
</div>
</div>
<nav className="flex flex-col gap-2 mt-4">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-white hover:bg-[#2f4823]" href="#">
<span className="material-symbols-outlined">dashboard</span>
<p className="text-sm font-medium leading-normal">Dashboard</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#2f4823] text-white" href="#">
<span className="material-symbols-outlined">monitoring</span>
<p className="text-sm font-medium leading-normal">System Health</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-white hover:bg-[#2f4823]" href="#">
<span className="material-symbols-outlined">group</span>
<p className="text-sm font-medium leading-normal">Users</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-white hover:bg-[#2f4823]" href="#">
<span className="material-symbols-outlined">swap_horiz</span>
<p className="text-sm font-medium leading-normal">Transactions</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-white hover:bg-[#2f4823]" href="#">
<span className="material-symbols-outlined">settings</span>
<p className="text-sm font-medium leading-normal">Settings</p>
</a>
</nav>
</div>
<div className="mt-auto flex flex-col gap-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-white hover:bg-[#2f4823]" href="#">
<span className="material-symbols-outlined">logout</span>
<p className="text-sm font-medium leading-normal">Logout</p>
</a>
</div>
</aside>
{/* Main Content */}
<main className="flex-1 p-8 overflow-y-auto">
<div className="max-w-7xl mx-auto">
{/* PageHeading */}
<div className="flex flex-wrap justify-between items-center gap-3 mb-6">
<div className="flex flex-col gap-2">
<p className="text-gray-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">System Health Monitoring</p>
<p className="text-gray-600 dark:text-[#a4c992] text-base font-normal leading-normal">Capacity Planning &amp; Alerting Configuration</p>
</div>
<div className="flex items-center gap-2 text-sm text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/30 p-2 rounded-lg">
<span className="material-symbols-outlined">signal_wifi_off</span>
<span>Offline. Last sync: 5 minutes ago</span>
</div>
</div>
{/* Tabs */}
<div className="border-b border-gray-200 dark:border-[#446732]">
<div className="flex gap-8">
<a className="flex flex-col items-center justify-center border-b-[3px] border-b-primary pb-3 pt-2" href="#">
<p className="text-gray-900 dark:text-white text-sm font-bold leading-normal tracking-[0.015em]">Capacity Planning</p>
</a>
<a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-gray-500 dark:text-[#a4c992] pb-3 pt-2" href="#">
<p className="text-sm font-bold leading-normal tracking-[0.015em]">Alerting Configuration</p>
</a>
<a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-gray-500 dark:text-[#a4c992] pb-3 pt-2" href="#">
<p className="text-sm font-bold leading-normal tracking-[0.015em]">External Dependencies</p>
</a>
<a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-gray-500 dark:text-[#a4c992] pb-3 pt-2" href="#">
<p className="text-sm font-bold leading-normal tracking-[0.015em]">User Impact</p>
</a>
</div>
</div>
{/* Content Area */}
<div className="py-6">
{/* SectionHeader */}
<h2 className="text-gray-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">Capacity Planning</h2>
{/* Charts & Cards */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
{/* User Growth Projection Chart */}
<div className="flex flex-col gap-2 rounded-xl border border-gray-200 dark:border-[#446732] p-6 bg-white dark:bg-black/10">
<p className="text-gray-800 dark:text-white text-base font-medium leading-normal">User Growth Projection</p>
<p className="text-gray-900 dark:text-white tracking-light text-[32px] font-bold leading-tight truncate">1.2M Users</p>
<div className="flex gap-1 items-center">
<p className="text-gray-600 dark:text-[#a4c992] text-sm font-normal leading-normal">Last 30 Days</p>
<p className="text-green-600 dark:text-[#0bda31] text-sm font-medium leading-normal flex items-center gap-1"><span className="material-symbols-outlined text-base">arrow_upward</span>+5.2%</p>
</div>
<div className="flex min-h-[180px] flex-1 flex-col gap-8 py-4">
<svg fill="none" height="148" preserveaspectratio="none" viewBox="-3 0 478 150" width="100%" xmlns="http://www.w3.org/2000/svg">
<path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H326.769H0V109Z" fill="url(#paint0_linear_1131_5935)"></path>
<path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25" stroke="#a4c992" strokeLinecap="round" strokeWidth="3"></path>
<defs>
<lineargradient gradientunits="userSpaceOnUse" id="paint0_linear_1131_5935" x1="236" x2="236" y1="1" y2="149">
<stop stop-color="#2f4823"></stop>
<stop offset="1" stop-color="#2f4823" stop-opacity="0"></stop>
</lineargradient>
</defs>
</svg>
<div className="flex justify-around">
<p className="text-gray-500 dark:text-[#a4c992] text-[13px] font-bold leading-normal tracking-[0.015em]">Week 1</p>
<p className="text-gray-500 dark:text-[#a4c992] text-[13px] font-bold leading-normal tracking-[0.015em]">Week 2</p>
<p className="text-gray-500 dark:text-[#a4c992] text-[13px] font-bold leading-normal tracking-[0.015em]">Week 3</p>
<p className="text-gray-500 dark:text-[#a4c992] text-[13px] font-bold leading-normal tracking-[0.015em]">Week 4</p>
</div>
</div>
</div>
{/* Database Size Trends Chart */}
<div className="flex flex-col gap-2 rounded-xl border border-gray-200 dark:border-[#446732] p-6 bg-white dark:bg-black/10">
<p className="text-gray-800 dark:text-white text-base font-medium leading-normal">Database Size Trends</p>
<p className="text-gray-900 dark:text-white tracking-light text-[32px] font-bold leading-tight truncate">750 GB / 1 TB</p>
<div className="flex gap-1 items-center">
<p className="text-gray-600 dark:text-[#a4c992] text-sm font-normal leading-normal">Capacity reached in ~45 days</p>
<p className="text-green-600 dark:text-[#0bda31] text-sm font-medium leading-normal flex items-center gap-1"><span className="material-symbols-outlined text-base">arrow_upward</span>+8.1%</p>
</div>
<div className="flex min-h-[180px] flex-1 flex-col gap-8 py-4">
<svg fill="none" height="148" preserveaspectratio="none" viewBox="-3 0 478 150" width="100%" xmlns="http://www.w3.org/2000/svg">
<path d="M0 133C18.1538 133 18.1538 85 36.3077 85C54.4615 85 54.4615 97 72.6154 97C90.7692 97 90.7692 65 108.923 65C127.077 65 127.077 101 145.231 101C163.385 101 163.385 41 181.538 41C199.692 41 199.692 25 217.846 25C236 25 236 57 254.154 57C272.308 57 272.308 1 290.462 1C308.615 1 308.615 21 326.769 21C344.923 21 344.923 41 363.077 41C381.231 41 381.231 17 399.385 17C417.538 17 417.538 53 435.692 53C453.846 53 453.846 93 472 93V149H0V133Z" fill="url(#paint1_linear_1131_5935)"></path>
<path d="M0 133C18.1538 133 18.1538 85 36.3077 85C54.4615 85 54.4615 97 72.6154 97C90.7692 97 90.7692 65 108.923 65C127.077 65 127.077 101 145.231 101C163.385 101 163.385 41 181.538 41C199.692 41 199.692 25 217.846 25C236 25 236 57 254.154 57C272.308 57 272.308 1 290.462 1C308.615 1 308.615 21 326.769 21C344.923 21 344.923 41 363.077 41C381.231 41 381.231 17 399.385 17C417.538 17 417.538 53 435.692 53C453.846 53 453.846 93 472 93" stroke="#a4c992" strokeLinecap="round" strokeWidth="3"></path>
<defs>
<lineargradient gradientunits="userSpaceOnUse" id="paint1_linear_1131_5935" x1="236" x2="236" y1="1" y2="149">
<stop stop-color="#2f4823"></stop>
<stop offset="1" stop-color="#2f4823" stop-opacity="0"></stop>
</lineargradient>
</defs>
</svg>
<div className="flex justify-around">
<p className="text-gray-500 dark:text-[#a4c992] text-[13px] font-bold leading-normal tracking-[0.015em]">Week 1</p>
<p className="text-gray-500 dark:text-[#a4c992] text-[13px] font-bold leading-normal tracking-[0.015em]">Week 2</p>
<p className="text-gray-500 dark:text-[#a4c992] text-[13px] font-bold leading-normal tracking-[0.015em]">Week 3</p>
<p className="text-gray-500 dark:text-[#a4c992] text-[13px] font-bold leading-normal tracking-[0.015em]">Week 4</p>
</div>
</div>
</div>
{/* Infrastructure Scaling Recommendation */}
<div className="flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-[#446732] p-6 bg-white dark:bg-black/10">
<h3 className="text-gray-800 dark:text-white text-base font-medium leading-normal">Infrastructure Scaling Recommendations</h3>
<div className="space-y-4">
<div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800/20 rounded-lg">
<div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-full">
<span className="material-symbols-outlined text-amber-600 dark:text-amber-400">database</span>
</div>
<div>
<p className="font-semibold text-gray-800 dark:text-gray-200">Upgrade Database Tier</p>
<p className="text-sm text-gray-600 dark:text-gray-400">Projected to reach 90% capacity in 45 days. Recommend upgrading from Tier 2 to Tier 3.</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800/20 rounded-lg">
<div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
<span className="material-symbols-outlined text-blue-600 dark:text-blue-400">dns</span>
</div>
<div>
<p className="font-semibold text-gray-800 dark:text-gray-200">Add 2 Web Servers</p>
<p className="text-sm text-gray-600 dark:text-gray-400">User growth projections indicate potential for request latency increase during peak hours next month.</p>
</div>
</div>
</div>
</div>
{/* Cost Analysis */}
<div className="flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-[#446732] p-6 bg-white dark:bg-black/10">
<h3 className="text-gray-800 dark:text-white text-base font-medium leading-normal">Cost Analysis</h3>
<p className="text-gray-900 dark:text-white tracking-light text-[32px] font-bold leading-tight truncate">$2,450 / month</p>
<p className="text-gray-600 dark:text-[#a4c992] text-sm font-normal leading-normal">Projected cost next month: $2,800</p>
<div className="flex-1 flex items-end gap-4 pt-4">
<div className="flex flex-col items-center gap-2 flex-1">
<div className="w-full bg-gray-200 dark:bg-gray-700 rounded-lg h-32 flex items-end">
<div className="w-full bg-primary/40"></div>
</div>
<p className="text-xs text-gray-500 dark:text-gray-400">Compute</p>
</div>
<div className="flex flex-col items-center gap-2 flex-1">
<div className="w-full bg-gray-200 dark:bg-gray-700 rounded-lg h-32 flex items-end">
<div className="w-full bg-primary/60"></div>
</div>
<p className="text-xs text-gray-500 dark:text-gray-400">Database</p>
</div>
<div className="flex flex-col items-center gap-2 flex-1">
<div className="w-full bg-gray-200 dark:bg-gray-700 rounded-lg h-32 flex items-end">
<div className="w-full bg-primary/80"></div>
</div>
<p className="text-xs text-gray-500 dark:text-gray-400">Storage</p>
</div>
<div className="flex flex-col items-center gap-2 flex-1">
<div className="w-full bg-gray-200 dark:bg-gray-700 rounded-lg h-32 flex items-end">
<div className="w-full bg-primary"></div>
</div>
<p className="text-xs text-gray-500 dark:text-gray-400">Networking</p>
</div>
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
