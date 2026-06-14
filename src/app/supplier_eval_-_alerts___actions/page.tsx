
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="relative flex min-h-screen w-full">
{/* SideNavBar */}
<aside className="flex-shrink-0 w-64 bg-card-light dark:bg-card-dark border-r border-border-light dark:border-border-dark">
<div className="flex flex-col h-full p-4">
<div className="flex flex-col gap-4">
<div className="flex items-center gap-3 p-2">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="Admin profile picture"></div>
<div className="flex flex-col">
<h1 className="text-base font-medium text-text-light dark:text-text-dark">Admin Name</h1>
<p className="text-sm font-normal text-success-green">AgriConnect Admin</p>
</div>
</div>
<div className="flex flex-col gap-2 mt-4">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/20" href="#">
<span className="material-symbols-outlined">dashboard</span>
<p className="text-sm font-medium">Dashboard</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/20 text-success-green" href="#">
<span className="material-symbols-outlined fill-1">group</span>
<p className="text-sm font-medium">Suppliers</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/20" href="#">
<span className="material-symbols-outlined">shopping_cart</span>
<p className="text-sm font-medium">Orders</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/20" href="#">
<span className="material-symbols-outlined">bar_chart</span>
<p className="text-sm font-medium">Analytics</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/20" href="#">
<span className="material-symbols-outlined">settings</span>
<p className="text-sm font-medium">Settings</p>
</a>
</div>
</div>
<div className="mt-auto">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/20" href="#">
<span className="material-symbols-outlined">logout</span>
<p className="text-sm font-medium">Logout</p>
</a>
</div>
</div>
</aside>
{/* Main Content */}
<main className="flex-1 p-8 overflow-y-auto">
<div className="max-w-7xl mx-auto">
{/* Breadcrumbs */}
<div className="flex flex-wrap items-center gap-2 mb-6">
<a className="text-sm font-medium text-success-green hover:underline" href="#">Suppliers</a>
<span className="text-sm font-medium text-success-green">/</span>
<a className="text-sm font-medium text-success-green hover:underline" href="#">Supplier Evaluation</a>
<span className="text-sm font-medium text-success-green">/</span>
<span className="text-sm font-medium text-text-light dark:text-text-dark">Performance</span>
</div>
{/* PageHeading */}
<div className="flex flex-wrap items-center justify-between gap-3 mb-8">
<div className="flex min-w-72 flex-col gap-2">
<p className="text-3xl font-bold tracking-tight text-text-light dark:text-text-dark">Supplier Performance Evaluation</p>
<p className="text-base font-normal text-text-light/70 dark:text-text-dark/70">Monitor performance, track issues, and manage corrective actions for 'GreenLeaf Organics'.</p>
</div>
<button className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary hover:bg-success-green">
<span className="material-symbols-outlined">save</span>
                        Save Changes
                    </button>
</div>
{/* Performance Alerts Section */}
<section>
<h2 className="text-xl font-bold tracking-tight text-text-light dark:text-text-dark mb-4">Performance Alerts</h2>
<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
{/* Red/Critical Alert Card */}
<div className="flex flex-col gap-4 p-5 rounded-xl bg-card-light dark:bg-card-dark border border-alert-red/50 shadow-sm">
<div className="flex items-center gap-3">
<div className="flex items-center justify-center rounded-full size-10 bg-alert-red/10">
<span className="text-alert-red material-symbols-outlined">error</span>
</div>
<p className="text-base font-bold text-alert-red">Critical Alert</p>
</div>
<div className="flex flex-col gap-1">
<p className="font-semibold text-text-light dark:text-text-dark">Fulfillment rate dropped below 90% this month</p>
<p className="text-sm text-text-light/70 dark:text-text-dark/70">Current Rate: 87%. Immediate action required.</p>
</div>
<a className="text-sm font-medium text-info-blue hover:underline" href="#">View Details</a>
</div>
{/* Yellow/Warning Alert Card */}
<div className="flex flex-col gap-4 p-5 rounded-xl bg-card-light dark:bg-card-dark border border-warning-yellow/50 shadow-sm">
<div className="flex items-center gap-3">
<div className="flex items-center justify-center rounded-full size-10 bg-warning-yellow/10">
<span className="text-warning-yellow material-symbols-outlined">warning</span>
</div>
<p className="text-base font-bold text-warning-yellow">Warning</p>
</div>
<div className="flex flex-col gap-1">
<p className="font-semibold text-text-light dark:text-text-dark">5 complaints in last 7 days - trending up</p>
<p className="text-sm text-text-light/70 dark:text-text-dark/70">Monitor closely and investigate root causes.</p>
</div>
<a className="text-sm font-medium text-info-blue hover:underline" href="#">View Details</a>
</div>
{/* Green/Achievement Alert Card */}
<div className="flex flex-col gap-4 p-5 rounded-xl bg-card-light dark:bg-card-dark border border-success-green/50 shadow-sm">
<div className="flex items-center gap-3">
<div className="flex items-center justify-center rounded-full size-10 bg-success-green/10">
<span className="text-success-green material-symbols-outlined">star</span>
</div>
<p className="text-base font-bold text-success-green">Achievement</p>
</div>
<div className="flex flex-col gap-1">
<p className="font-semibold text-text-light dark:text-text-dark">Maintained 5-star rating for 3 consecutive months!</p>
<p className="text-sm text-text-light/70 dark:text-text-dark/70">Excellent performance recognized.</p>
</div>
<a className="text-sm font-medium text-info-blue hover:underline" href="#">View Details</a>
</div>
</div>
</section>
<div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-3">
{/* Left Column: Action Items */}
<div className="lg:col-span-2">
<section className="p-6 rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark">
<h2 className="text-xl font-bold tracking-tight text-text-light dark:text-text-dark mb-5">Action Items</h2>
<div className="space-y-6">
<div>
<label className="block mb-2 text-sm font-medium text-text-light dark:text-text-dark">Admin Recommendations</label>
<p className="p-3 text-sm rounded-lg bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark">Improve product packaging to reduce in-transit damages. Consider offering expedited shipping options for perishable goods to improve fulfillment times.</p>
</div>
<div>
<label className="block mb-2 text-sm font-medium text-text-light dark:text-text-dark" htmlFor="action-plan">Supplier Action Plan</label>
<textarea className="block w-full text-sm rounded-lg bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark focus:ring-primary focus:border-primary placeholder-text-light/50" id="action-plan" placeholder="Document the supplier's commitment to improvement..." rows="4"></textarea>
</div>
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
<div>
<label className="block mb-2 text-sm font-medium text-text-light dark:text-text-dark" htmlFor="review-date">Review Schedule</label>
<input className="block w-full p-2 text-sm rounded-lg bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark focus:ring-primary focus:border-primary" id="review-date" type="date"/>
</div>
<div className="flex flex-col justify-end">
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox" defaultValue=""/>
<div className="w-11 h-6 bg-border-light peer-focus:outline-none rounded-full peer dark:bg-border-dark peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
<span className="text-sm font-medium ms-3 text-text-light dark:text-text-dark">Follow-up Reminders</span>
</label>
</div>
</div>
</div>
</section>
</div>
{/* Right Column: Rewards & Penalties */}
<div className="lg:col-span-1">
<section className="p-6 rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark">
<h2 className="text-xl font-bold tracking-tight text-text-light dark:text-text-dark mb-5">Rewards &amp; Penalties</h2>
<div className="space-y-6">
{/* Rewards */}
<div>
<h3 className="font-semibold text-text-light dark:text-text-dark">Rewards</h3>
<div className="flex items-center gap-3 p-3 mt-2 rounded-lg bg-success-green/10">
<span className="text-2xl text-success-green material-symbols-outlined">workspace_premium</span>
<div>
<p className="font-medium text-success-green">Featured Supplier Status</p>
<p className="text-xs text-success-green/80">Earned for consistent high performance.</p>
</div>
</div>
</div>
{/* Penalties */}
<div>
<h3 className="font-semibold text-text-light dark:text-text-dark">Penalty System</h3>
<ul className="mt-2 space-y-2 text-sm text-text-light/80 dark:text-text-dark/80">
<li className="flex items-start gap-2">
<span className="mt-1 text-base text-warning-yellow material-symbols-outlined">flag</span>
<span><strong className="text-text-light dark:text-text-dark">Warning:</strong> Fulfillment rate below 95% for 1 month.</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-1 text-base text-alert-red material-symbols-outlined">gpp_bad</span>
<span><strong className="text-text-light dark:text-text-dark">Suspension:</strong> Fulfillment rate below 90% for 2 consecutive months.</span>
</li>
</ul>
</div>
</div>
</section>
</div>
</div>
</div>
</main>
</div>

    </>
  );
}
