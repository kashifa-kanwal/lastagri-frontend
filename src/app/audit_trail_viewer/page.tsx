
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="flex h-screen w-full">
{/* SideNavBar */}
<aside className="flex h-full w-64 flex-shrink-0 flex-col justify-between bg-[#111a22] p-4 text-white">
<div className="flex flex-col gap-4">
<div className="flex items-center gap-3">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="AgriConnect logo placeholder"></div>
<div className="flex flex-col">
<h1 className="text-base font-medium leading-normal">AgriConnect Admin</h1>
<p className="text-sm font-normal leading-normal text-[#92adc9]">Compliance Portal</p>
</div>
</div>
<nav className="mt-4 flex flex-col gap-2">
<a className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-300 hover:bg-[#233648] hover:text-white" href="#">
<span className="material-symbols-outlined">dashboard</span>
<p className="text-sm font-medium leading-normal">Dashboard</p>
</a>
<a className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-300 hover:bg-[#233648] hover:text-white" href="#">
<span className="material-symbols-outlined">receipt_long</span>
<p className="text-sm font-medium leading-normal">Transactions</p>
</a>
<a className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-300 hover:bg-[#233648] hover:text-white" href="#">
<span className="material-symbols-outlined">group</span>
<p className="text-sm font-medium leading-normal">User Management</p>
</a>
<a className="flex items-center gap-3 rounded-lg bg-[#233648] px-3 py-2 text-white" href="#">
<span className="material-symbols-outlined">history</span>
<p className="text-sm font-medium leading-normal">Audit Trail</p>
</a>
<a className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-300 hover:bg-[#233648] hover:text-white" href="#">
<span className="material-symbols-outlined">settings</span>
<p className="text-sm font-medium leading-normal">Settings</p>
</a>
</nav>
</div>
<div className="flex flex-col gap-1">
<a className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-300 hover:bg-[#233648] hover:text-white" href="#">
<span className="material-symbols-outlined">help_center</span>
<p className="text-sm font-medium leading-normal">Help Center</p>
</a>
<a className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-300 hover:bg-[#233648] hover:text-white" href="#">
<span className="material-symbols-outlined">logout</span>
<p className="text-sm font-medium leading-normal">Logout</p>
</a>
</div>
</aside>
{/* Main Content */}
<main className="flex-1 overflow-y-auto">
<div className="p-6 lg:p-8">
{/* PageHeading */}
<div className="flex flex-wrap items-center justify-between gap-3">
<h1 className="text-3xl font-black leading-tight tracking-tight text-gray-900 dark:text-white">System Audit Logs</h1>
<div className="flex items-center gap-2 rounded-full bg-success/10 px-3 py-1 text-sm font-medium text-success">
<span className="relative flex h-2 w-2">
<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75"></span>
<span className="relative inline-flex h-2 w-2 rounded-full bg-success"></span>
</span>
                        Live
                    </div>
</div>
<div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
{/* Filters Panel (Left) */}
<div className="lg:col-span-3">
<div className="sticky top-6 rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-[#192633]">
<h3 className="text-lg font-bold leading-tight text-gray-900 dark:text-white">Filters Panel</h3>
<div className="mt-4 space-y-4">
{/* CalendarPicker */}
<div className="flex flex-col gap-2">
<label className="text-sm font-medium text-gray-700 dark:text-gray-300">Date Range</label>
<div className="rounded-lg border border-gray-300 bg-gray-50 p-2 dark:border-gray-600 dark:bg-gray-800">
<div className="flex items-center justify-between p-1">
<button className="flex size-8 items-center justify-center rounded-full text-gray-500 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700">
<span className="material-symbols-outlined text-base">chevron_left</span>
</button>
<p className="text-sm font-bold text-gray-900 dark:text-white">July 2024</p>
<button className="flex size-8 items-center justify-center rounded-full text-gray-500 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700">
<span className="material-symbols-outlined text-base">chevron_right</span>
</button>
</div>
<div className="grid grid-cols-7 text-center">
<p className="p-2 text-xs font-bold text-gray-500 dark:text-gray-400">S</p>
<p className="p-2 text-xs font-bold text-gray-500 dark:text-gray-400">M</p>
<p className="p-2 text-xs font-bold text-gray-500 dark:text-gray-400">T</p>
<p className="p-2 text-xs font-bold text-gray-500 dark:text-gray-400">W</p>
<p className="p-2 text-xs font-bold text-gray-500 dark:text-gray-400">T</p>
<p className="p-2 text-xs font-bold text-gray-500 dark:text-gray-400">F</p>
<p className="p-2 text-xs font-bold text-gray-500 dark:text-gray-400">S</p>
<span className="col-start-4"></span>
<button className="p-2 text-sm">1</button>
<button className="p-2 text-sm">2</button>
<button className="rounded-l-full bg-primary/20 p-2 text-primary dark:bg-primary/30">3</button>
<button className="bg-primary/20 p-2 text-primary dark:bg-primary/30">4</button>
<button className="bg-primary/20 p-2 text-primary dark:bg-primary/30">5</button>
<button className="bg-primary/20 p-2 text-primary dark:bg-primary/30">6</button>
<button className="rounded-r-full bg-primary/20 p-2 text-primary dark:bg-primary/30">7</button>
<button className="p-2 text-sm">8</button>
<button className="p-2 text-sm">9</button>
<button className="p-2 text-sm">10</button>
<button className="p-2 text-sm">11</button>
<button className="p-2 text-sm">12</button>
<button className="p-2 text-sm">13</button>
<button className="p-2 text-sm">14</button>
<button className="p-2 text-sm">15</button>
<button className="p-2 text-sm">16</button>
<button className="p-2 text-sm">17</button>
<button className="p-2 text-sm">18</button>
<button className="p-2 text-sm">19</button>
<button className="p-2 text-sm">20</button>
<button className="p-2 text-sm">21</button>
<button className="p-2 text-sm">22</button>
<button className="p-2 text-sm">23</button>
<button className="p-2 text-sm">24</button>
<button className="p-2 text-sm">25</button>
<button className="p-2 text-sm">26</button>
<button className="p-2 text-sm">27</button>
<button className="p-2 text-sm">28</button>
<button className="p-2 text-sm">29</button>
<button className="p-2 text-sm">30</button>
<button className="p-2 text-sm">31</button>
</div>
</div>
</div>
{/* TextField Select */}
<label className="flex flex-col">
<p className="pb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Admin User</p>
<select className="form-select h-11 w-full rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:border-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400">
<option selected="">All Users</option>
<option defaultValue="1">Admin One</option>
<option defaultValue="2">Admin Two</option>
</select>
</label>
<label className="flex flex-col">
<p className="pb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Action Type</p>
<select className="form-select h-11 w-full rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:border-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400">
<option selected="">All Actions</option>
<option defaultValue="login">Logins</option>
<option defaultValue="transaction">Transactions</option>
<option defaultValue="blacklist">Blacklist</option>
</select>
</label>
<div>
<p className="pb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Severity</p>
<div className="grid grid-cols-2 gap-2">
<label className="flex items-center gap-2 rounded-md border border-gray-300 bg-gray-50 px-3 py-1.5 dark:border-gray-600 dark:bg-gray-700">
<input className="form-checkbox h-4 w-4 rounded text-primary focus:ring-primary" type="checkbox"/>
<span className="text-sm">Info</span>
</label>
<label className="flex items-center gap-2 rounded-md border border-gray-300 bg-gray-50 px-3 py-1.5 dark:border-gray-600 dark:bg-gray-700">
<input className="form-checkbox h-4 w-4 rounded text-warning focus:ring-warning" type="checkbox"/>
<span className="text-sm">Warning</span>
</label>
<label className="flex items-center gap-2 rounded-md border border-gray-300 bg-gray-50 px-3 py-1.5 dark:border-gray-600 dark:bg-gray-700">
<input className="form-checkbox h-4 w-4 rounded text-error focus:ring-error" type="checkbox"/>
<span className="text-sm">Error</span>
</label>
<label className="flex items-center gap-2 rounded-md border border-gray-300 bg-gray-50 px-3 py-1.5 dark:border-gray-600 dark:bg-gray-700">
<input className="form-checkbox h-4 w-4 rounded text-red-700 focus:ring-red-700" type="checkbox"/>
<span className="text-sm">Critical</span>
</label>
</div>
</div>
<div className="mt-6 flex flex-col gap-2">
<button className="w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90">Apply Filters</button>
<button className="w-full rounded-lg bg-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">Reset</button>
</div>
</div>
</div>
</div>
{/* Main Log Table (Center) */}
<div className="lg:col-span-6">
<div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-[#192633]">
<div className="relative overflow-x-auto">
<table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
<thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
<tr>
<th className="px-6 py-3" scope="col">Timestamp</th>
<th className="px-6 py-3" scope="col">Admin User</th>
<th className="px-6 py-3" scope="col">IP Address</th>
<th className="px-6 py-3" scope="col">Action Performed</th>
<th className="px-6 py-3" scope="col">Status</th>
</tr>
</thead>
<tbody>
<tr className="group cursor-pointer border-b border-l-4 border-l-success bg-white hover:bg-gray-50 dark:border-b-gray-700 dark:border-l-success dark:bg-[#192633] dark:hover:bg-gray-800">
<td className="px-6 py-4 font-medium text-gray-900 dark:text-white">2024-07-28 14:30:15</td>
<td className="px-6 py-4">Admin One (A001)</td>
<td className="px-6 py-4">192.168.1.101</td>
<td className="px-6 py-4">Approved loan for User#5021</td>
<td className="px-6 py-4"><span className="rounded-full bg-success/10 px-2 py-1 text-xs font-medium text-success">Success</span></td>
</tr>
<tr className="group cursor-pointer border-b border-l-4 border-l-error bg-white hover:bg-gray-50 dark:border-b-gray-700 dark:border-l-error dark:bg-[#192633] dark:hover:bg-gray-800">
<td className="px-6 py-4 font-medium text-gray-900 dark:text-white">2024-07-28 14:29:05</td>
<td className="px-6 py-4">Admin Two (A002)</td>
<td className="px-6 py-4">10.0.0.5</td>
<td className="px-6 py-4">Failed login attempt</td>
<td className="px-6 py-4"><span className="rounded-full bg-error/10 px-2 py-1 text-xs font-medium text-error">Failed</span></td>
</tr>
<tr className="group cursor-pointer border-b border-l-4 border-l-warning bg-white hover:bg-gray-50 dark:border-b-gray-700 dark:border-l-warning dark:bg-[#192633] dark:hover:bg-gray-800">
<td className="px-6 py-4 font-medium text-gray-900 dark:text-white">2024-07-28 14:25:50</td>
<td className="px-6 py-4">System</td>
<td className="px-6 py-4">N/A</td>
<td className="px-6 py-4">Credit limit auto-adjusted for User#3304</td>
<td className="px-6 py-4"><span className="rounded-full bg-warning/10 px-2 py-1 text-xs font-medium text-warning">Warning</span></td>
</tr>
<tr className="group cursor-pointer border-b border-l-4 border-l-success bg-white hover:bg-gray-50 dark:border-b-gray-700 dark:border-l-success dark:bg-[#192633] dark:hover:bg-gray-800">
<td className="px-6 py-4 font-medium text-gray-900 dark:text-white">2024-07-28 14:22:11</td>
<td className="px-6 py-4">Admin One (A001)</td>
<td className="px-6 py-4">192.168.1.101</td>
<td className="px-6 py-4">Exported transaction data</td>
<td className="px-6 py-4"><span className="rounded-full bg-success/10 px-2 py-1 text-xs font-medium text-success">Success</span></td>
</tr>
<tr className="group cursor-pointer border-l-4 border-l-success bg-white hover:bg-gray-50 dark:border-l-success dark:bg-[#192633] dark:hover:bg-gray-800">
<td className="px-6 py-4 font-medium text-gray-900 dark:text-white">2024-07-28 14:20:00</td>
<td className="px-6 py-4">Admin One (A001)</td>
<td className="px-6 py-4">192.168.1.101</td>
<td className="px-6 py-4">User settings updated for User#7890</td>
<td className="px-6 py-4"><span className="rounded-full bg-success/10 px-2 py-1 text-xs font-medium text-success">Success</span></td>
</tr>
</tbody>
</table>
</div>
<nav aria-label="Table navigation" className="flex items-center justify-between border-t border-gray-200 p-4 dark:border-gray-700">
<span className="text-sm font-normal text-gray-500 dark:text-gray-400">Showing <span className="font-semibold text-gray-900 dark:text-white">1-5</span> of <span className="font-semibold text-gray-900 dark:text-white">100</span></span>
<ul className="inline-flex h-8 -space-x-px text-sm">
<li><a className="ml-0 flex items-center justify-center rounded-l-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" href="#">Previous</a></li>
<li><a className="flex items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" href="#">1</a></li>
<li><a className="flex items-center justify-center rounded-r-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" href="#">Next</a></li>
</ul>
</nav>
</div>
</div>
{/* Security Monitoring (Right) */}
<div className="lg:col-span-3">
<div className="sticky top-6 space-y-6">
<div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-[#192633]">
<h4 className="font-semibold text-gray-900 dark:text-white">Security Monitoring</h4>
<div className="mt-4 space-y-4">
<div className="flex items-start gap-3 rounded-lg bg-red-50 p-3 dark:bg-error/10">
<div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-error/20 text-error">
<span className="material-symbols-outlined text-base">lock</span>
</div>
<div>
<p className="text-2xl font-bold text-error">12</p>
<p className="text-sm font-medium text-red-800 dark:text-red-300">Failed Logins (24h)</p>
</div>
</div>
<div className="flex items-start gap-3 rounded-lg bg-yellow-50 p-3 dark:bg-warning/10">
<div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-warning/20 text-warning">
<span className="material-symbols-outlined text-base">report</span>
</div>
<div>
<p className="text-2xl font-bold text-warning">3</p>
<p className="text-sm font-medium text-yellow-800 dark:text-yellow-300">Suspicious Activity Patterns</p>
</div>
</div>
<div className="flex items-start gap-3 rounded-lg bg-blue-50 p-3 dark:bg-primary/10">
<div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
<span className="material-symbols-outlined text-base">public</span>
</div>
<div>
<p className="text-2xl font-bold text-primary">1</p>
<p className="text-sm font-medium text-blue-800 dark:text-blue-300">Geographic Anomaly</p>
</div>
</div>
</div>
</div>
<div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-[#192633]">
<h4 className="font-semibold text-gray-900 dark:text-white">Export Logs</h4>
<div className="mt-4 space-y-3">
<div className="flex gap-4">
<label className="flex items-center gap-2">
<input defaultChecked="" className="form-radio text-primary focus:ring-primary" name="export-format" type="radio"/>
<span className="text-sm">CSV</span>
</label>
<label className="flex items-center gap-2">
<input className="form-radio text-primary focus:ring-primary" name="export-format" type="radio"/>
<span className="text-sm">JSON</span>
</label>
</div>
<button className="flex w-full items-center justify-center gap-2 rounded-lg bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">
<span className="material-symbols-outlined text-base">download</span>
                                        Export
                                    </button>
</div>
</div>
<div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-[#192633]">
<h4 className="font-semibold text-gray-900 dark:text-white">Retention Policy</h4>
<p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Logs retained for <span className="font-semibold text-gray-700 dark:text-gray-300">365 days</span> as per policy.</p>
<button className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
<span className="material-symbols-outlined text-base">archive</span>
                                    Archive Old Logs
                                </button>
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
