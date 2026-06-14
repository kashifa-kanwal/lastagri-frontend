
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="relative flex min-h-screen w-full">
{/* SideNavBar */}
<aside className="flex h-screen min-h-screen flex-col bg-[#172211] w-64 fixed">
<div className="flex h-full min-h-[700px] flex-col justify-between p-4">
<div className="flex flex-col gap-4">
<div className="flex items-center gap-3 px-2 py-2">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="Admin user avatar"></div>
<div className="flex flex-col">
<h1 className="text-white text-base font-medium leading-normal">Admin Name</h1>
<p className="text-[#a4c992] text-sm font-normal leading-normal">System Administrator</p>
</div>
</div>
<nav className="flex flex-col gap-2 mt-4">
<a className="flex items-center gap-3 px-3 py-2 text-white/70 hover:text-white hover:bg-[#2f4823]/50 rounded-lg" href="#">
<span className="material-symbols-outlined">dashboard</span>
<p className="text-sm font-medium leading-normal">Dashboard</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#2f4823] text-white" href="#">
<span className="material-symbols-outlined">pulse_alert</span>
<p className="text-sm font-medium leading-normal">System Health</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-white/70 hover:text-white hover:bg-[#2f4823]/50 rounded-lg" href="#">
<span className="material-symbols-outlined">group</span>
<p className="text-sm font-medium leading-normal">User Management</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-white/70 hover:text-white hover:bg-[#2f4823]/50 rounded-lg" href="#">
<span className="material-symbols-outlined">receipt_long</span>
<p className="text-sm font-medium leading-normal">Transactions</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-white/70 hover:text-white hover:bg-[#2f4823]/50 rounded-lg" href="#">
<span className="material-symbols-outlined">settings</span>
<p className="text-sm font-medium leading-normal">Settings</p>
</a>
</nav>
</div>
<div className="flex flex-col gap-4">
<button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-primary text-[#172211] text-sm font-bold leading-normal tracking-[0.015em]">
<span className="truncate">Logout</span>
</button>
<div className="flex flex-col gap-1">
<a className="flex items-center gap-3 px-3 py-2 text-white/70 hover:text-white" href="#">
<span className="material-symbols-outlined">help_center</span>
<p className="text-sm font-medium leading-normal">Help Center</p>
</a>
</div>
</div>
</div>
</aside>
{/* Main Content */}
<main className="flex flex-1 flex-col ml-64 p-8">
<div className="flex flex-col gap-8">
{/* PageHeading */}
<div className="flex flex-wrap justify-between gap-3">
<p className="text-neutral-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Alerts &amp; Incident Management</p>
</div>
{/* Main Layout Grid */}
<div className="grid grid-cols-3 gap-8">
{/* Left Column: Alerts */}
<div className="col-span-3 lg:col-span-2 flex flex-col gap-6">
{/* SectionHeader for Active Alerts */}
<h2 className="text-neutral-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">Active Alerts</h2>
{/* Table */}
<div className="@container">
<div className="flex overflow-hidden rounded-xl border border-neutral-200 dark:border-[#446732] bg-background-light dark:bg-[#172211]">
<table className="flex-1 w-full text-left">
<thead className="bg-neutral-100 dark:bg-[#223319]">
<tr>
<th className="px-4 py-3 text-sm font-medium leading-normal text-neutral-600 dark:text-white">Alert Description</th>
<th className="px-4 py-3 text-sm font-medium leading-normal text-neutral-600 dark:text-white">Severity</th>
<th className="px-4 py-3 text-sm font-medium leading-normal text-neutral-600 dark:text-white">Affected Users</th>
<th className="px-4 py-3 text-sm font-medium leading-normal text-neutral-600 dark:text-white">Start Time</th>
<th className="px-4 py-3 text-sm font-medium leading-normal text-neutral-600 dark:text-white">Assigned To</th>
<th className="px-4 py-3 text-sm font-medium leading-normal text-neutral-600 dark:text-white">Status</th>
<th className="px-4 py-3 text-sm font-medium leading-normal text-neutral-600 dark:text-white">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-neutral-200 dark:divide-[#446732]">
<tr className="border-t border-t-neutral-200 dark:border-t-[#446732]">
<td className="h-[72px] px-4 py-2 text-sm font-normal leading-normal text-neutral-900 dark:text-white">Database connection failures</td>
<td className="h-[72px] px-4 py-2 text-sm font-normal leading-normal">
<span className="inline-flex items-center px-2 py-1 text-xs font-medium text-white rounded-full bg-critical">Critical</span>
</td>
<td className="h-[72px] px-4 py-2 text-sm font-normal leading-normal text-neutral-500 dark:text-[#a4c992]">152</td>
<td className="h-[72px] px-4 py-2 text-sm font-normal leading-normal text-neutral-500 dark:text-[#a4c992]">2023-10-27 10:45 AM</td>
<td className="h-[72px] px-4 py-2 text-sm font-normal leading-normal text-neutral-500 dark:text-[#a4c992]">Admin One</td>
<td className="h-[72px] px-4 py-2 text-sm font-normal leading-normal">
<span className="inline-flex items-center px-2 py-1 text-xs font-medium text-white rounded-full bg-warning">Investigating</span>
</td>
<td className="h-[72px] px-4 py-2 text-sm font-bold leading-normal tracking-[0.015em]">
<div className="flex items-center gap-2">
<button className="text-xs text-neutral-600 dark:text-neutral-300 hover:underline">Ack</button>
<button className="text-xs text-neutral-600 dark:text-neutral-300 hover:underline">Escalate</button>
<button className="text-xs text-neutral-600 dark:text-neutral-300 hover:underline">Resolve</button>
</div>
</td>
</tr>
<tr className="border-t border-t-neutral-200 dark:border-t-[#446732]">
<td className="h-[72px] px-4 py-2 text-sm font-normal leading-normal text-neutral-900 dark:text-white">API latency &gt; 500ms</td>
<td className="h-[72px] px-4 py-2 text-sm font-normal leading-normal">
<span className="inline-flex items-center px-2 py-1 text-xs font-medium text-neutral-900 rounded-full bg-warning">Warning</span>
</td>
<td className="h-[72px] px-4 py-2 text-sm font-normal leading-normal text-neutral-500 dark:text-[#a4c992]">78</td>
<td className="h-[72px] px-4 py-2 text-sm font-normal leading-normal text-neutral-500 dark:text-[#a4c992]">2023-10-27 11:02 AM</td>
<td className="h-[72px] px-4 py-2 text-sm font-normal leading-normal text-neutral-500 dark:text-[#a4c992]">Admin Two</td>
<td className="h-[72px] px-4 py-2 text-sm font-normal leading-normal">
<span className="inline-flex items-center px-2 py-1 text-xs font-medium text-white rounded-full bg-info">Acknowledged</span>
</td>
<td className="h-[72px] px-4 py-2 text-sm font-bold leading-normal tracking-[0.015em]">
<div className="flex items-center gap-2">
<button className="text-xs text-neutral-600 dark:text-neutral-300 hover:underline">Ack</button>
<button className="text-xs text-neutral-600 dark:text-neutral-300 hover:underline">Escalate</button>
<button className="text-xs text-neutral-600 dark:text-neutral-300 hover:underline">Resolve</button>
</div>
</td>
</tr>
<tr className="border-t border-t-neutral-200 dark:border-t-[#446732]">
<td className="h-[72px] px-4 py-2 text-sm font-normal leading-normal text-neutral-900 dark:text-white">High memory usage on server-03</td>
<td className="h-[72px] px-4 py-2 text-sm font-normal leading-normal">
<span className="inline-flex items-center px-2 py-1 text-xs font-medium text-white rounded-full bg-info">Info</span>
</td>
<td className="h-[72px] px-4 py-2 text-sm font-normal leading-normal text-neutral-500 dark:text-[#a4c992]">0</td>
<td className="h-[72px] px-4 py-2 text-sm font-normal leading-normal text-neutral-500 dark:text-[#a4c992]">2023-10-27 11:15 AM</td>
<td className="h-[72px] px-4 py-2 text-sm font-normal leading-normal text-neutral-400 dark:text-neutral-500">Unassigned</td>
<td className="h-[72px] px-4 py-2 text-sm font-normal leading-normal">
<span className="inline-flex items-center px-2 py-1 text-xs font-medium text-neutral-700 dark:text-neutral-300 rounded-full bg-neutral-200 dark:bg-neutral-700">New</span>
</td>
<td className="h-[72px] px-4 py-2 text-sm font-bold leading-normal tracking-[0.015em]">
<div className="flex items-center gap-2">
<button className="text-xs text-neutral-600 dark:text-neutral-300 hover:underline">Ack</button>
<button className="text-xs text-neutral-600 dark:text-neutral-300 hover:underline">Escalate</button>
<button className="text-xs text-neutral-600 dark:text-neutral-300 hover:underline">Resolve</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
{/* Right Column: Incident Management */}
<div className="col-span-3 lg:col-span-1 flex flex-col gap-6">
{/* SectionHeader for Incident Management */}
<div className="flex justify-between items-center">
<h2 className="text-neutral-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">Incident Management</h2>
</div>
<div className="p-6 bg-white dark:bg-[#172211] rounded-xl border border-neutral-200 dark:border-[#446732] flex flex-col gap-6">
<button className="w-full text-white bg-success hover:bg-success/90 focus:ring-4 focus:outline-none focus:ring-success/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Create Incident Report</button>
<div className="flex flex-col gap-4">
<h3 className="text-lg font-bold text-neutral-900 dark:text-white">Incident Timeline</h3>
<ol className="relative border-l border-neutral-300 dark:border-neutral-700 ml-2">
<li className="mb-6 ml-6">
<span className="absolute flex items-center justify-center w-6 h-6 bg-success/20 rounded-full -left-3 ring-8 ring-white dark:ring-background-dark">
<span className="w-3 h-3 rounded-full bg-success"></span>
</span>
<h4 className="flex items-center mb-1 text-base font-semibold text-neutral-900 dark:text-white">Detected</h4>
<time className="block mb-2 text-sm font-normal leading-none text-neutral-400 dark:text-neutral-500">Oct 27, 10:45 AM</time>
</li>
<li className="mb-6 ml-6">
<span className="absolute flex items-center justify-center w-6 h-6 bg-info/20 rounded-full -left-3 ring-8 ring-white dark:ring-background-dark">
<span className="w-3 h-3 rounded-full bg-info"></span>
</span>
<h4 className="mb-1 text-base font-semibold text-neutral-900 dark:text-white">Acknowledged</h4>
<time className="block mb-2 text-sm font-normal leading-none text-neutral-400 dark:text-neutral-500">Oct 27, 10:48 AM</time>
</li>
<li className="mb-6 ml-6">
<span className="absolute flex items-center justify-center w-6 h-6 bg-warning/20 rounded-full -left-3 ring-8 ring-white dark:ring-background-dark">
<span className="w-3 h-3 rounded-full bg-warning"></span>
</span>
<h4 className="mb-1 text-base font-semibold text-neutral-900 dark:text-white">Investigating</h4>
<time className="block mb-2 text-sm font-normal leading-none text-neutral-400 dark:text-neutral-500">In Progress</time>
</li>
<li className="ml-6">
<span className="absolute flex items-center justify-center w-6 h-6 bg-neutral-100 dark:bg-neutral-700 rounded-full -left-3 ring-8 ring-white dark:ring-background-dark">
<span className="w-3 h-3 rounded-full bg-neutral-400"></span>
</span>
<h4 className="mb-1 text-base font-semibold text-neutral-500 dark:text-neutral-400">Resolved</h4>
</li>
</ol>
</div>
<div className="flex flex-col gap-2">
<h3 className="text-lg font-bold text-neutral-900 dark:text-white">Post-mortem Analysis</h3>
<textarea className="block p-2.5 w-full text-sm text-neutral-900 bg-neutral-50 rounded-lg border border-neutral-300 focus:ring-primary focus:border-primary dark:bg-background-dark dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-primary/50 dark:focus:border-primary" id="post-mortem" placeholder="Enter root cause analysis..." rows="4"></textarea>
</div>
<div className="flex flex-col gap-4">
<h3 className="text-lg font-bold text-neutral-900 dark:text-white">User Communication</h3>
<div className="flex flex-col gap-3">
<label className="relative inline-flex items-center cursor-pointer">
<input defaultChecked="" className="sr-only peer" type="checkbox" defaultValue=""/>
<div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/30 dark:peer-focus:ring-primary/80 rounded-full peer dark:bg-neutral-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-neutral-600 peer-checked:bg-success"></div>
<span className="ml-3 text-sm font-medium text-neutral-900 dark:text-neutral-300">Update Status Page for Users</span>
</label>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox" defaultValue=""/>
<div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/30 dark:peer-focus:ring-primary/80 rounded-full peer dark:bg-neutral-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-neutral-600 peer-checked:bg-success"></div>
<span className="ml-3 text-sm font-medium text-neutral-900 dark:text-neutral-300">Send automated updates (SMS/Email)</span>
</label>
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
