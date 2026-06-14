
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="flex min-h-screen">
{/* SideNavBar */}
<aside className="flex-shrink-0 w-64 bg-[#172211] flex flex-col">
<div className="flex h-full min-h-[700px] flex-col justify-between p-4">
<div className="flex flex-col gap-4">
<div className="flex items-center gap-3 p-2">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="AgriConnect BNPL logo"></div>
<div className="flex flex-col">
<h1 className="text-white text-base font-medium leading-normal">Admin</h1>
<p className="text-[#a4c992] text-sm font-normal leading-normal">AgriConnect BNPL</p>
</div>
</div>
<nav className="flex flex-col gap-2">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-white/70 hover:bg-[#2f4823]/60 hover:text-white transition-colors duration-200" href="#">
<span className="material-symbols-outlined">dashboard</span>
<p className="text-sm font-medium leading-normal">Dashboard</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#2f4823] text-white" href="#">
<span className="material-symbols-outlined">heart_check</span>
<p className="text-sm font-medium leading-normal">System Health</p>
</a>
</nav>
</div>
<div className="flex flex-col gap-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-white/70 hover:bg-[#2f4823]/60 hover:text-white transition-colors duration-200" href="#">
<span className="material-symbols-outlined">settings</span>
<p className="text-sm font-medium leading-normal">Settings</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-white/70 hover:bg-[#2f4823]/60 hover:text-white transition-colors duration-200" href="#">
<span className="material-symbols-outlined">logout</span>
<p className="text-sm font-medium leading-normal">Logout</p>
</a>
</div>
</div>
</aside>
{/* Main Content */}
<main className="flex-1 p-8 overflow-y-auto">
<div className="max-w-7xl mx-auto">
{/* PageHeading & ToolBar */}
<div className="flex flex-wrap justify-between items-center gap-4 mb-6">
<h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">System Health Monitoring</h1>
<div className="flex items-center gap-2 bg-[#1f2e1a] p-1 rounded-lg">
<span className="material-symbols-outlined text-white/80 pl-2">calendar_today</span>
<select className="bg-transparent text-white text-sm border-0 focus:ring-0">
<option>Last 24 hours</option>
<option>Last 7 days</option>
<option>Last 30 days</option>
</select>
</div>
</div>
{/* Tabs */}
<div className="border-b border-[#446732]">
<div className="flex gap-8">
<a className="flex items-center justify-center border-b-[3px] border-b-primary text-white pb-3 pt-1" href="#">
<p className="text-sm font-bold leading-normal tracking-[0.015em]">Performance Metrics</p>
</a>
<a className="flex items-center justify-center border-b-[3px] border-b-transparent text-[#a4c992] pb-3 pt-1 hover:text-white" href="#">
<p className="text-sm font-bold leading-normal tracking-[0.015em]">Logs &amp; Debugging</p>
</a>
</div>
</div>
{/* Section: Performance Metrics */}
<div className="pt-6">
<h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-4">Key Metrics Overview</h2>
{/* Metric Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-[#1f2e1a] p-5 rounded-xl">
<p className="text-[#a4c992] text-sm mb-2">Avg. Page Load Time</p>
<div className="flex items-baseline gap-2">
<span className="text-white text-3xl font-bold">245ms</span>
<div className="flex items-center text-red-error text-sm">
<span className="material-symbols-outlined text-base">arrow_upward</span>
<span>2.1%</span>
</div>
</div>
</div>
<div className="bg-[#1f2e1a] p-5 rounded-xl">
<p className="text-[#a4c992] text-sm mb-2">API Avg. Latency</p>
<div className="flex items-baseline gap-2">
<span className="text-white text-3xl font-bold">82ms</span>
<div className="flex items-center text-green-ok text-sm">
<span className="material-symbols-outlined text-base">arrow_downward</span>
<span>1.5%</span>
</div>
</div>
</div>
<div className="bg-[#1f2e1a] p-5 rounded-xl">
<p className="text-[#a4c992] text-sm mb-2">Slow DB Queries</p>
<div className="flex items-baseline gap-2">
<span className="text-white text-3xl font-bold">3</span>
<div className="flex items-center gap-1.5 text-amber-warn text-sm">
<span className="w-3 h-3 rounded-full bg-amber-warn"></span>
<span>Warning</span>
</div>
</div>
</div>
<div className="bg-[#1f2e1a] p-5 rounded-xl">
<p className="text-[#a4c992] text-sm mb-2">CDN Hit Rate</p>
<div className="flex items-baseline gap-2">
<span className="text-white text-3xl font-bold">98.7%</span>
<div className="flex items-center text-green-ok text-sm">
<span className="material-symbols-outlined text-base">arrow_upward</span>
<span>0.2%</span>
</div>
</div>
</div>
</div>
{/* Detailed Views */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
{/* API Latency Breakdown */}
<div className="bg-[#1f2e1a] p-5 rounded-xl">
<h3 className="text-white text-lg font-bold mb-4">API Latency Breakdown</h3>
<div className="space-y-3">
<div className="grid grid-cols-3 gap-4 text-[#a4c992] text-xs font-semibold">
<span>ENDPOINT</span>
<span className="text-center">AVG. LATENCY</span>
<span className="text-right">ERROR RATE</span>
</div>
<div className="grid grid-cols-3 gap-4 text-white text-sm items-center">
<span>/api/v1/users/profile</span>
<div className="w-full bg-[#2f4823] rounded-full h-1.5">
<div className="bg-green-ok h-1.5 rounded-full"></div>
</div>
<span className="text-right">0.1%</span>
</div>
<div className="grid grid-cols-3 gap-4 text-white text-sm items-center">
<span>/api/v1/loans/apply</span>
<div className="w-full bg-[#2f4823] rounded-full h-1.5">
<div className="bg-amber-warn h-1.5 rounded-full"></div>
</div>
<span className="text-right">0.5%</span>
</div>
<div className="grid grid-cols-3 gap-4 text-white text-sm items-center">
<span>/api/v1/payments/history</span>
<div className="w-full bg-[#2f4823] rounded-full h-1.5">
<div className="bg-red-error h-1.5 rounded-full"></div>
</div>
<span className="text-right">2.3%</span>
</div>
</div>
</div>
{/* Database Performance */}
<div className="bg-[#1f2e1a] p-5 rounded-xl">
<h3 className="text-white text-lg font-bold mb-4">Database Performance</h3>
<div className="h-40 bg-center bg-no-repeat bg-contain" data-alt="Line chart showing database query execution times over the last 24 hours, with a slight upward trend."></div>
</div>
</div>
{/* Slow DB Queries Table */}
<div className="bg-[#1f2e1a] mt-6 rounded-xl overflow-hidden">
<h3 className="text-white text-lg font-bold p-5">Flagged Slow Queries</h3>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead className="bg-[#2f4823]">
<tr>
<th className="p-3 text-xs font-semibold text-[#a4c992] tracking-wider">QUERY HASH</th>
<th className="p-3 text-xs font-semibold text-[#a4c992] tracking-wider">EXECUTION TIME</th>
<th className="p-3 text-xs font-semibold text-[#a4c992] tracking-wider">OCCURRENCES</th>
<th className="p-3 text-xs font-semibold text-[#a4c992] tracking-wider">LAST SEEN</th>
</tr>
</thead>
<tbody className="divide-y divide-[#2f4823]">
<tr className="text-white text-sm">
<td className="p-3 font-mono text-xs">SELECT ... FROM `transactions` WHERE ...</td>
<td className="p-3 text-amber-warn">1250ms</td>
<td className="p-3">42</td>
<td className="p-3">2 min ago</td>
</tr>
<tr className="text-white text-sm">
<td className="p-3 font-mono text-xs">UPDATE `user_profiles` SET ...</td>
<td className="p-3 text-red-error">2100ms</td>
<td className="p-3">15</td>
<td className="p-3">15 min ago</td>
</tr>
<tr className="text-white text-sm">
<td className="p-3 font-mono text-xs">SELECT ... FROM `loan_applications` JOIN ...</td>
<td className="p-3 text-amber-warn">980ms</td>
<td className="p-3">112</td>
<td className="p-3">5 sec ago</td>
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
