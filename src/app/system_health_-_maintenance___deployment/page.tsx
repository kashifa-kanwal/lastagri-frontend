
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="flex min-h-screen w-full">
{/* SideNavBar */}
<aside className="flex w-64 flex-col justify-between border-r border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-background-dark">
<div className="flex flex-col gap-4">
<div className="flex items-center gap-3">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="AgriConnect BNPL Logo"></div>
<div className="flex flex-col">
<h1 className="text-base font-medium leading-normal text-neutral-text-dark dark:text-gray-200">Admin Panel</h1>
<p className="text-sm font-normal leading-normal text-brand-primary">AgriConnect BNPL</p>
</div>
</div>
<nav className="flex flex-col gap-2">
<a className="flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-text-dark dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800" href="#">
<span className="material-symbols-outlined">dashboard</span>
<p className="text-sm font-medium leading-normal">Dashboard</p>
</a>
<a className="flex items-center gap-3 rounded-lg bg-primary/20 px-3 py-2 text-brand-primary dark:text-primary" href="#">
<span className="material-symbols-outlined">favorite</span>
<p className="text-sm font-medium leading-normal">System Health</p>
</a>
<a className="flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-text-dark dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800" href="#">
<span className="material-symbols-outlined">group</span>
<p className="text-sm font-medium leading-normal">User Management</p>
</a>
<a className="flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-text-dark dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800" href="#">
<span className="material-symbols-outlined">payments</span>
<p className="text-sm font-medium leading-normal">Finance</p>
</a>
<a className="flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-text-dark dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800" href="#">
<span className="material-symbols-outlined">settings</span>
<p className="text-sm font-medium leading-normal">Settings</p>
</a>
</nav>
</div>
<div className="flex flex-col gap-1">
<a className="flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-text-dark dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800" href="#">
<span className="material-symbols-outlined">logout</span>
<p className="text-sm font-medium leading-normal">Logout</p>
</a>
</div>
</aside>
{/* Main Content */}
<main className="flex-1 overflow-y-auto p-8">
{/* PageHeading */}
<header className="mb-8">
<p className="text-4xl font-black leading-tight tracking-[-0.033em] text-neutral-text-dark dark:text-gray-100">Scheduled Maintenance &amp; Deployment</p>
</header>
<div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
{/* Left Panel: Scheduled Maintenance */}
<div className="flex flex-col gap-6">
<h2 className="text-[22px] font-bold leading-tight tracking-[-0.015em] text-neutral-text-dark dark:text-gray-200">Scheduled Maintenance</h2>
{/* Upcoming Maintenance Section */}
<div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-neutral-background/5">
<h3 className="text-lg font-bold leading-tight tracking-[-0.015em] text-neutral-text-dark dark:text-gray-200">Upcoming Maintenance</h3>
{/* CalendarPicker */}
<div className="mt-4">
<div className="flex w-full flex-col gap-0.5">
<div className="flex items-center justify-between p-1">
<button className="flex size-10 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"><span className="material-symbols-outlined text-lg">chevron_left</span></button>
<p className="flex-1 text-center text-base font-bold leading-tight text-neutral-text-dark dark:text-gray-200">October 2024</p>
<button className="flex size-10 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"><span className="material-symbols-outlined text-lg">chevron_right</span></button>
</div>
<div className="grid grid-cols-7">
<p className="flex h-12 w-full items-center justify-center pb-0.5 text-[13px] font-bold leading-normal tracking-[0.015em] text-neutral-text-dark dark:text-gray-400">S</p>
<p className="flex h-12 w-full items-center justify-center pb-0.5 text-[13px] font-bold leading-normal tracking-[0.015em] text-neutral-text-dark dark:text-gray-400">M</p>
<p className="flex h-12 w-full items-center justify-center pb-0.5 text-[13px] font-bold leading-normal tracking-[0.015em] text-neutral-text-dark dark:text-gray-400">T</p>
<p className="flex h-12 w-full items-center justify-center pb-0.5 text-[13px] font-bold leading-normal tracking-[0.015em] text-neutral-text-dark dark:text-gray-400">W</p>
<p className="flex h-12 w-full items-center justify-center pb-0.5 text-[13px] font-bold leading-normal tracking-[0.015em] text-neutral-text-dark dark:text-gray-400">T</p>
<p className="flex h-12 w-full items-center justify-center pb-0.5 text-[13px] font-bold leading-normal tracking-[0.015em] text-neutral-text-dark dark:text-gray-400">F</p>
<p className="flex h-12 w-full items-center justify-center pb-0.5 text-[13px] font-bold leading-normal tracking-[0.015em] text-neutral-text-dark dark:text-gray-400">S</p>
<button className="col-start-4 h-12 w-full text-sm font-medium leading-normal text-neutral-text-dark dark:text-gray-300"><div className="flex size-full items-center justify-center rounded-full">1</div></button>
<button className="h-12 w-full text-sm font-medium leading-normal text-neutral-text-dark dark:text-gray-300"><div className="flex size-full items-center justify-center rounded-full">2</div></button>
<button className="h-12 w-full text-sm font-medium leading-normal text-neutral-text-dark dark:text-gray-300"><div className="flex size-full items-center justify-center rounded-full">3</div></button>
<button className="h-12 w-full text-sm font-medium leading-normal text-neutral-text-dark dark:text-gray-300"><div className="flex size-full items-center justify-center rounded-full">4</div></button>
<button className="h-12 w-full text-sm font-medium leading-normal text-neutral-text-dark dark:text-gray-300"><div className="flex size-full items-center justify-center rounded-full bg-brand-secondary text-white">5</div></button>
<button className="h-12 w-full text-sm font-medium leading-normal text-neutral-text-dark dark:text-gray-300"><div className="flex size-full items-center justify-center rounded-full">6</div></button>
<button className="h-12 w-full text-sm font-medium leading-normal text-neutral-text-dark dark:text-gray-300"><div className="flex size-full items-center justify-center rounded-full">7</div></button>
<button className="h-12 w-full text-sm font-medium leading-normal text-neutral-text-dark dark:text-gray-300"><div className="flex size-full items-center justify-center rounded-full">...</div></button>
</div>
</div>
</div>
</div>
{/* Maintenance Window Section */}
<div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-neutral-background/5">
<div className="flex items-center justify-between">
<h3 className="text-lg font-bold leading-tight tracking-[-0.015em] text-neutral-text-dark dark:text-gray-200">Maintenance Window</h3>
<span className="inline-flex items-center gap-2 rounded-full bg-brand-secondary/20 px-3 py-1 text-sm font-medium text-brand-secondary">
<span className="material-symbols-outlined text-base">event_upcoming</span>
                                Oct 5, 2:00 AM
                            </span>
</div>
<div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
<div>
<label className="block text-sm font-medium text-neutral-text-light dark:text-gray-400" htmlFor="date">Date</label>
<input className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-brand-primary focus:ring-brand-primary dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200" id="date" readonly="" type="text" defaultValue="October 5, 2024"/>
</div>
<div>
<label className="block text-sm font-medium text-neutral-text-light dark:text-gray-400" htmlFor="time">Start Time</label>
<input className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-brand-primary focus:ring-brand-primary dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200" id="time" readonly="" type="text" defaultValue="02:00 AM (UTC)"/>
</div>
<div>
<label className="block text-sm font-medium text-neutral-text-light dark:text-gray-400" htmlFor="duration">Duration</label>
<input className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-brand-primary focus:ring-brand-primary dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200" id="duration" readonly="" type="text" defaultValue="2 hours"/>
</div>
<div>
<label className="block text-sm font-medium text-neutral-text-light dark:text-gray-400" htmlFor="services">Affected Services</label>
<input className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-brand-primary focus:ring-brand-primary dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200" id="services" readonly="" type="text" defaultValue="API, Farmer Portal"/>
</div>
</div>
</div>
{/* Notification Plan */}
<div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-neutral-background/5">
<h3 className="text-lg font-bold leading-tight tracking-[-0.015em] text-neutral-text-dark dark:text-gray-200">Notification Plan</h3>
<div className="mt-4 space-y-3">
<div className="flex items-center justify-between">
<p className="text-sm text-neutral-text-dark dark:text-gray-300">Inform users 48h before</p>
<span className="inline-flex items-center gap-1.5 rounded-full bg-brand-primary/20 px-3 py-1 text-sm font-medium text-brand-primary"><span className="material-symbols-outlined text-base">check_circle</span>Sent</span>
</div>
<div className="flex items-center justify-between">
<p className="text-sm text-neutral-text-dark dark:text-gray-300">Inform users 24h before</p>
<span className="inline-flex items-center gap-1.5 rounded-full bg-brand-secondary/20 px-3 py-1 text-sm font-medium text-brand-secondary"><span className="material-symbols-outlined text-base">schedule</span>Scheduled</span>
</div>
<div className="flex items-center justify-between">
<p className="text-sm text-neutral-text-dark dark:text-gray-300">Inform users 1h before</p>
<span className="inline-flex items-center gap-1.5 rounded-full bg-gray-200 px-3 py-1 text-sm font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-300"><span className="material-symbols-outlined text-base">pending</span>Pending</span>
</div>
</div>
</div>
{/* Execution Checklist */}
<div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-neutral-background/5">
<h3 className="text-lg font-bold leading-tight tracking-[-0.015em] text-neutral-text-dark dark:text-gray-200">Execute Maintenance Checklist</h3>
<div className="mt-4 space-y-3">
<label className="flex items-center gap-3"><input defaultChecked="" className="h-4 w-4 rounded border-gray-300 text-brand-primary focus:ring-brand-primary" type="checkbox"/> <span className="text-sm text-neutral-text-dark dark:text-gray-300">Enable maintenance mode page</span></label>
<label className="flex items-center gap-3"><input defaultChecked="" className="h-4 w-4 rounded border-gray-300 text-brand-primary focus:ring-brand-primary" type="checkbox"/> <span className="text-sm text-neutral-text-dark dark:text-gray-300">Backup database</span></label>
<label className="flex items-center gap-3"><input className="h-4 w-4 rounded border-gray-300 text-brand-primary focus:ring-brand-primary" type="checkbox"/> <span className="text-sm text-neutral-text-dark dark:text-gray-300">Deploy updates</span></label>
<label className="flex items-center gap-3"><input className="h-4 w-4 rounded border-gray-300 text-brand-primary focus:ring-brand-primary" type="checkbox"/> <span className="text-sm text-neutral-text-dark dark:text-gray-300">Run database migrations</span></label>
</div>
<h3 className="mt-6 text-lg font-bold leading-tight tracking-[-0.015em] text-neutral-text-dark dark:text-gray-200">Post-Maintenance Verification</h3>
<div className="mt-4 space-y-3">
<label className="flex items-center gap-3"><input className="h-4 w-4 rounded border-gray-300 text-brand-primary focus:ring-brand-primary" type="checkbox"/> <span className="text-sm text-neutral-text-dark dark:text-gray-300">Verify API endpoints</span></label>
<label className="flex items-center gap-3"><input className="h-4 w-4 rounded border-gray-300 text-brand-primary focus:ring-brand-primary" type="checkbox"/> <span className="text-sm text-neutral-text-dark dark:text-gray-300">Check critical user flows</span></label>
<label className="flex items-center gap-3"><input className="h-4 w-4 rounded border-gray-300 text-brand-primary focus:ring-brand-primary" type="checkbox"/> <span className="text-sm text-neutral-text-dark dark:text-gray-300">Disable maintenance mode</span></label>
</div>
<button className="mt-6 w-full rounded bg-brand-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-primary/90">Schedule New Maintenance</button>
</div>
</div>
{/* Right Panel: Deployment Dashboard */}
<div className="flex flex-col gap-6">
<h2 className="text-[22px] font-bold leading-tight tracking-[-0.015em] text-neutral-text-dark dark:text-gray-200">Deployment Dashboard</h2>
{/* Current Version Section */}
<div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-neutral-background/5">
<h3 className="text-lg font-bold leading-tight tracking-[-0.015em] text-neutral-text-dark dark:text-gray-200">Current Version</h3>
<div className="mt-4 flex items-baseline gap-4">
<p className="text-4xl font-bold text-brand-primary">v2.5.1</p>
<p className="text-sm text-neutral-text-light dark:text-gray-400">Deployed on Sep 28, 2024</p>
</div>
</div>
{/* Deployment History */}
<div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-neutral-background/5">
<h3 className="text-lg font-bold leading-tight tracking-[-0.015em] text-neutral-text-dark dark:text-gray-200">Deployment History</h3>
<div className="mt-4 flow-root">
<div className="-mx-6 -my-2 overflow-x-auto">
<div className="inline-block min-w-full py-2 align-middle sm:px-6">
<table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
<thead>
<tr>
<th className="py-3.5 pl-6 pr-3 text-left text-sm font-semibold text-neutral-text-dark dark:text-gray-200" scope="col">Version</th>
<th className="px-3 py-3.5 text-left text-sm font-semibold text-neutral-text-dark dark:text-gray-200" scope="col">Date</th>
<th className="px-3 py-3.5 text-left text-sm font-semibold text-neutral-text-dark dark:text-gray-200" scope="col">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-200 dark:divide-gray-700">
<tr>
<td className="whitespace-nowrap py-4 pl-6 pr-3 text-sm font-medium text-neutral-text-dark dark:text-gray-300">v2.5.0</td>
<td className="whitespace-nowrap px-3 py-4 text-sm text-neutral-text-light dark:text-gray-400">Sep 20, 2024</td>
<td className="whitespace-nowrap px-3 py-4 text-sm"><span className="inline-flex items-center rounded-full bg-brand-primary/20 px-2 py-1 text-xs font-medium text-brand-primary">Success</span></td>
</tr>
<tr>
<td className="whitespace-nowrap py-4 pl-6 pr-3 text-sm font-medium text-neutral-text-dark dark:text-gray-300">v2.4.2</td>
<td className="whitespace-nowrap px-3 py-4 text-sm text-neutral-text-light dark:text-gray-400">Sep 15, 2024</td>
<td className="whitespace-nowrap px-3 py-4 text-sm"><span className="inline-flex items-center rounded-full bg-brand-primary/20 px-2 py-1 text-xs font-medium text-brand-primary">Success</span></td>
</tr>
<tr>
<td className="whitespace-nowrap py-4 pl-6 pr-3 text-sm font-medium text-neutral-text-dark dark:text-gray-300">v2.4.1</td>
<td className="whitespace-nowrap px-3 py-4 text-sm text-neutral-text-light dark:text-gray-400">Sep 14, 2024</td>
<td className="whitespace-nowrap px-3 py-4 text-sm"><span className="inline-flex items-center rounded-full bg-brand-danger/20 px-2 py-1 text-xs font-medium text-brand-danger">Rolled Back</span></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
{/* Rollback Option */}
<div className="rounded-lg border border-brand-danger bg-brand-danger/5 p-6 dark:border-brand-danger/50">
<h3 className="text-lg font-bold leading-tight tracking-[-0.015em] text-neutral-text-dark dark:text-gray-200">Rollback Option</h3>
<p className="mt-2 text-sm text-brand-danger/80 dark:text-brand-danger/90">Revert to the previous stable version (v2.5.0) if a critical bug is found. This action is immediate and will cause a brief service interruption.</p>
<button className="mt-4 flex w-full items-center justify-center gap-2 rounded bg-brand-danger px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-danger/90">
<span className="material-symbols-outlined text-lg">history</span> Execute Rollback
                        </button>
</div>
{/* Feature Flags */}
<div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-neutral-background/5">
<h3 className="text-lg font-bold leading-tight tracking-[-0.015em] text-neutral-text-dark dark:text-gray-200">Feature Flags</h3>
<div className="mt-4 space-y-4">
<div className="flex items-center justify-between">
<label className="text-sm font-medium text-neutral-text-dark dark:text-gray-300" htmlFor="flag1">New Loan Application UI</label>
<button aria-checked="true" className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-brand-primary transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2" role="switch" type="button">
<span className="pointer-events-none inline-block h-5 w-5 translate-x-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
</button>
</div>
<div className="flex items-center justify-between">
<label className="text-sm font-medium text-neutral-text-dark dark:text-gray-300" htmlFor="flag2">Vernacular Chat Support</label>
<button aria-checked="false" className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 dark:bg-gray-700" role="switch" type="button">
<span className="pointer-events-none inline-block h-5 w-5 translate-x-0 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
</button>
</div>
<div className="flex items-center justify-between">
<label className="text-sm font-medium text-neutral-text-dark dark:text-gray-300" htmlFor="flag3">Offline Data Sync V2</label>
<button aria-checked="true" className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-brand-primary transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2" role="switch" type="button">
<span className="pointer-events-none inline-block h-5 w-5 translate-x-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
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
