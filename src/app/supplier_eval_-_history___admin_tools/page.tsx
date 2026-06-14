
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="flex min-h-screen w-full">
{/* SideNavBar */}
<aside className="flex flex-col w-64 border-r border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark p-4 shrink-0">
<div className="flex flex-col justify-between h-full">
<div className="flex flex-col gap-4">
<div className="flex items-center gap-3 px-2">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="AgriConnect logo placeholder"></div>
<div className="flex flex-col">
<h1 className="text-text-light-primary dark:text-text-dark-primary text-base font-bold leading-normal">AgriConnect Admin</h1>
<p className="text-text-light-secondary dark:text-text-dark-secondary text-sm font-normal leading-normal">admin@agriconnect.com</p>
</div>
</div>
<nav className="flex flex-col gap-2 mt-4">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-surface-hover-light dark:hover:bg-surface-hover-dark" href="#">
<span className="material-symbols-outlined text-text-light-primary dark:text-text-dark-primary">dashboard</span>
<p className="text-text-light-primary dark:text-text-dark-primary text-sm font-medium leading-normal">Dashboard</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-surface-hover-light dark:hover:bg-surface-hover-dark" href="#">
<span className="material-symbols-outlined text-text-light-primary dark:text-text-dark-primary">groups</span>
<p className="text-text-light-primary dark:text-text-dark-primary text-sm font-medium leading-normal">Suppliers</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/20 dark:bg-primary/30" href="#">
<span className="material-symbols-outlined text-text-light-primary dark:text-text-dark-primary">grading</span>
<p className="text-text-light-primary dark:text-text-dark-primary text-sm font-bold leading-normal">Evaluation</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-surface-hover-light dark:hover:bg-surface-hover-dark" href="#">
<span className="material-symbols-outlined text-text-light-primary dark:text-text-dark-primary">shopping_cart</span>
<p className="text-text-light-primary dark:text-text-dark-primary text-sm font-medium leading-normal">Orders</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-surface-hover-light dark:hover:bg-surface-hover-dark" href="#">
<span className="material-symbols-outlined text-text-light-primary dark:text-text-dark-primary">settings</span>
<p className="text-text-light-primary dark:text-text-dark-primary text-sm font-medium leading-normal">Settings</p>
</a>
</nav>
</div>
<div className="flex flex-col gap-2">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-surface-hover-light dark:hover:bg-surface-hover-dark" href="#">
<span className="material-symbols-outlined text-text-light-primary dark:text-text-dark-primary">help</span>
<p className="text-text-light-primary dark:text-text-dark-primary text-sm font-medium leading-normal">Help &amp; Support</p>
</a>
<button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-text-light-primary text-sm font-bold leading-normal tracking-[0.015em]">
<span className="truncate">Log Out</span>
</button>
</div>
</div>
</aside>
{/* Main Content */}
<main className="flex-1 overflow-y-auto">
<div className="p-6 md:p-8 lg:p-10">
{/* PageHeading */}
<div className="flex flex-wrap justify-between items-center gap-4">
<div className="flex flex-col gap-2">
<h1 className="text-text-light-primary dark:text-text-dark-primary text-4xl font-black leading-tight tracking-[-0.033em]">Supplier Evaluation</h1>
<p className="text-text-light-secondary dark:text-text-dark-secondary text-base font-normal leading-normal max-w-2xl">Manage and analyze supplier performance, reports, and administrative settings.</p>
</div>
<button className="flex items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 bg-primary text-text-light-primary text-sm font-bold leading-normal tracking-[0.015em]">
<span className="material-symbols-outlined text-base">add_circle</span>
<span className="truncate">New Evaluation</span>
</button>
</div>
{/* Tabs */}
<div className="mt-8">
<div className="flex border-b border-border-light dark:border-border-dark gap-8">
<a className="flex flex-col items-center justify-center border-b-[3px] border-b-primary pb-3" href="#">
<p className="text-text-light-primary dark:text-text-dark-primary text-sm font-bold leading-normal tracking-[0.015em]">Historical Performance</p>
</a>
<a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-text-light-secondary dark:text-text-dark-secondary pb-3 hover:text-text-light-primary dark:hover:text-text-dark-primary" href="#">
<p className="text-sm font-bold leading-normal tracking-[0.015em]">Admin Tools</p>
</a>
<a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-text-light-secondary dark:text-text-dark-secondary pb-3 hover:text-text-light-primary dark:hover:text-text-dark-primary" href="#">
<p className="text-sm font-bold leading-normal tracking-[0.015em]">Gamification</p>
</a>
</div>
</div>
{/* Tab Content: Historical Performance */}
<div className="mt-6">
{/* SectionHeader & BodyText */}
<div className="mb-6">
<h2 className="text-text-light-primary dark:text-text-dark-primary text-[22px] font-bold leading-tight tracking-[-0.015em]">Historical Performance</h2>
<p className="text-text-light-secondary dark:text-text-dark-secondary text-base font-normal leading-normal mt-1">Analyze trends, compare performance over different periods, and export detailed reports for your records.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
{/* Left Column */}
<div className="lg:col-span-2 flex flex-col gap-6">
{/* Comparison Card */}
<div className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg border border-border-light dark:border-border-dark">
<h3 className="text-lg font-bold text-text-light-primary dark:text-text-dark-primary">Compare Periods</h3>
<div className="flex flex-col sm:flex-row gap-4 mt-4">
<div className="flex-1">
<label className="block text-sm font-medium text-text-light-secondary dark:text-text-dark-secondary mb-1" htmlFor="period1">Period 1</label>
<select className="w-full rounded-md border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:ring-primary focus:border-primary" id="period1">
<option>Q1 2025</option>
<option selected="">Q4 2024</option>
<option>Q3 2024</option>
</select>
</div>
<div className="flex items-end pb-2">
<p className="text-text-light-secondary dark:text-text-dark-secondary font-bold">vs.</p>
</div>
<div className="flex-1">
<label className="block text-sm font-medium text-text-light-secondary dark:text-text-dark-secondary mb-1" htmlFor="period2">Period 2</label>
<select className="w-full rounded-md border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:ring-primary focus:border-primary" id="period2">
<option selected="">Q1 2025</option>
<option>Q4 2024</option>
<option>Q3 2024</option>
</select>
</div>
<div className="flex items-end">
<button className="flex w-full sm:w-auto items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 bg-primary text-text-light-primary text-sm font-bold">Compare</button>
</div>
</div>
<div className="mt-6">
<div className="w-full h-64 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center">
<p className="text-text-light-secondary dark:text-text-dark-secondary">Performance Comparison Chart</p>
</div>
</div>
</div>
{/* Performance Archive Card */}
<div className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg border border-border-light dark:border-border-dark">
<h3 className="text-lg font-bold text-text-light-primary dark:text-text-dark-primary">Performance Archive</h3>
<p className="text-sm text-text-light-secondary dark:text-text-dark-secondary mt-1">View scorecards from the past 12 months.</p>
<div className="mt-4 flow-root">
<ul className="divide-y divide-border-light dark:divide-border-dark" role="list">
<li className="py-3 sm:py-4">
<div className="flex items-center space-x-4">
<div className="flex-shrink-0"><span className="material-symbols-outlined text-text-light-secondary dark:text-text-dark-secondary">calendar_month</span></div>
<div className="flex-1 min-w-0"><p className="text-sm font-medium text-text-light-primary dark:text-text-dark-primary truncate">December 2024 Scorecard</p></div>
<div className="inline-flex items-center text-base font-semibold text-text-light-primary dark:text-text-dark-primary">92/100</div>
<button className="text-sm font-bold text-primary/80 hover:text-primary">View</button>
</div>
</li>
<li className="py-3 sm:py-4">
<div className="flex items-center space-x-4">
<div className="flex-shrink-0"><span className="material-symbols-outlined text-text-light-secondary dark:text-text-dark-secondary">calendar_month</span></div>
<div className="flex-1 min-w-0"><p className="text-sm font-medium text-text-light-primary dark:text-text-dark-primary truncate">November 2024 Scorecard</p></div>
<div className="inline-flex items-center text-base font-semibold text-text-light-primary dark:text-text-dark-primary">88/100</div>
<button className="text-sm font-bold text-primary/80 hover:text-primary">View</button>
</div>
</li>
<li className="py-3 sm:py-4">
<div className="flex items-center space-x-4">
<div className="flex-shrink-0"><span className="material-symbols-outlined text-text-light-secondary dark:text-text-dark-secondary">calendar_month</span></div>
<div className="flex-1 min-w-0"><p className="text-sm font-medium text-text-light-primary dark:text-text-dark-primary truncate">October 2024 Scorecard</p></div>
<div className="inline-flex items-center text-base font-semibold text-text-light-primary dark:text-text-dark-primary">95/100</div>
<button className="text-sm font-bold text-primary/80 hover:text-primary">View</button>
</div>
</li>
</ul>
</div>
</div>
</div>
{/* Right Column */}
<div className="lg:col-span-1 flex flex-col gap-6">
{/* Export Reports Card */}
<div className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg border border-border-light dark:border-border-dark">
<h3 className="text-lg font-bold text-text-light-primary dark:text-text-dark-primary">Export Reports</h3>
<p className="text-sm text-text-light-secondary dark:text-text-dark-secondary mt-1">Download detailed supplier scorecards for your records.</p>
<button className="mt-4 flex w-full items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 bg-primary/20 dark:bg-primary/30 text-text-light-primary dark:text-text-dark-primary text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/30 dark:hover:bg-primary/40">
<span className="material-symbols-outlined text-base">download</span>
<span className="truncate">Export Scorecard (PDF)</span>
</button>
</div>
{/* Supplier Access Card */}
<div className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg border border-border-light dark:border-border-dark">
<div className="flex items-center gap-2">
<h3 className="text-lg font-bold text-text-light-primary dark:text-text-dark-primary">Supplier Access</h3>
<span className="material-symbols-outlined text-base text-text-light-secondary dark:text-text-dark-secondary cursor-help">info</span>
</div>
<p className="text-sm text-text-light-secondary dark:text-text-dark-secondary mt-2">
                                    Suppliers can view their own scorecards in their dashboards. This transparency helps motivate them to reach higher performance tiers by clearly showing all evaluation metrics.
                                </p>
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
