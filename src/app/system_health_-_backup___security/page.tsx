
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="relative flex min-h-screen w-full">
{/* SideNavBar */}
<aside className="flex flex-col w-64 bg-[#f9fcf8] dark:bg-background-dark/50 border-r border-gray-200 dark:border-gray-700 p-4">
<div className="flex items-center gap-3 mb-8">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="AgriConnect Logo"></div>
<div className="flex flex-col">
<h1 className="text-[#121b0d] dark:text-gray-100 text-base font-medium leading-normal">Admin</h1>
<p className="text-[#669a4c] dark:text-primary/80 text-sm font-normal leading-normal">AgriConnect</p>
</div>
</div>
<nav className="flex flex-col gap-2 flex-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-light-green dark:hover:bg-primary/10" href="#">
<span className="material-symbols-outlined text-[#121b0d] dark:text-gray-300">dashboard</span>
<p className="text-[#121b0d] dark:text-gray-200 text-sm font-medium leading-normal">Dashboard</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-deep-green/10 dark:bg-primary/20" href="#">
<span className="material-symbols-outlined text-[#121b0d] dark:text-primary">health_and_safety</span>
<p className="text-[#121b0d] dark:text-primary text-sm font-medium leading-normal">System Health</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-light-green dark:hover:bg-primary/10" href="#">
<span className="material-symbols-outlined text-[#121b0d] dark:text-gray-300">group</span>
<p className="text-[#121b0d] dark:text-gray-200 text-sm font-medium leading-normal">User Management</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-light-green dark:hover:bg-primary/10" href="#">
<span className="material-symbols-outlined text-[#121b0d] dark:text-gray-300">payments</span>
<p className="text-[#121b0d] dark:text-gray-200 text-sm font-medium leading-normal">Financials</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-light-green dark:hover:bg-primary/10" href="#">
<span className="material-symbols-outlined text-[#121b0d] dark:text-gray-300">settings</span>
<p className="text-[#121b0d] dark:text-gray-200 text-sm font-medium leading-normal">Settings</p>
</a>
</nav>
<div className="flex flex-col gap-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-light-green dark:hover:bg-primary/10" href="#">
<span className="material-symbols-outlined text-[#121b0d] dark:text-gray-300">help_center</span>
<p className="text-[#121b0d] dark:text-gray-200 text-sm font-medium leading-normal">Help Center</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-light-green dark:hover:bg-primary/10" href="#">
<span className="material-symbols-outlined text-[#121b0d] dark:text-gray-300">logout</span>
<p className="text-[#121b0d] dark:text-gray-200 text-sm font-medium leading-normal">Logout</p>
</a>
</div>
</aside>
{/* Main Content */}
<main className="flex-1 p-8">
<div className="w-full max-w-7xl mx-auto">
{/* Breadcrumbs */}
<div className="flex flex-wrap gap-2 mb-4">
<a className="text-deep-green dark:text-primary/90 text-sm font-medium leading-normal" href="#">System Health</a>
<span className="text-gray-400 dark:text-gray-500 text-sm font-medium leading-normal">/</span>
<span className="text-neutral-gray dark:text-gray-200 text-sm font-medium leading-normal">Backup &amp; Security</span>
</div>
{/* PageHeading */}
<div className="flex flex-wrap justify-between items-center gap-3 mb-8">
<div className="flex flex-col gap-2">
<p className="text-[#121b0d] dark:text-gray-50 text-4xl font-black leading-tight tracking-[-0.033em]">Backup &amp; Security</p>
<p className="text-deep-green dark:text-primary/80 text-base font-normal leading-normal">Real-time system integrity and security posture.</p>
</div>
</div>
{/* Main Grid */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
{/* Column 1: Backup & Recovery */}
<div className="flex flex-col gap-6">
<h2 className="text-[#121b0d] dark:text-gray-100 text-[22px] font-bold leading-tight tracking-[-0.015em]">Backup &amp; Recovery</h2>
{/* Card: Backup Status */}
<div className="bg-white dark:bg-background-dark/60 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
<div className="flex justify-between items-start mb-4">
<h3 className="text-lg font-semibold text-neutral-gray dark:text-gray-200">Backup Status</h3>
<div className="flex items-center gap-2 px-3 py-1 rounded-full bg-success-green/10 text-success-green">
<span className="size-2 bg-success-green rounded-full"></span>
<p className="text-sm font-medium">Healthy</p>
</div>
</div>
<div className="space-y-3">
<div className="flex justify-between gap-x-6 py-2 border-b border-gray-100 dark:border-gray-700">
<p className="text-deep-green/80 dark:text-primary/70 text-sm font-normal">Last backup</p>
<p className="text-neutral-gray dark:text-gray-300 text-sm font-medium">Today at 2:00 AM</p>
</div>
<div className="flex justify-between gap-x-6 py-2 border-b border-gray-100 dark:border-gray-700">
<p className="text-deep-green/80 dark:text-primary/70 text-sm font-normal">Next scheduled</p>
<p className="text-neutral-gray dark:text-gray-300 text-sm font-medium">Tomorrow at 2:00 AM</p>
</div>
<div className="flex justify-between gap-x-6 py-2">
<p className="text-deep-green/80 dark:text-primary/70 text-sm font-normal">Backup size</p>
<p className="text-neutral-gray dark:text-gray-300 text-sm font-medium">75 GB</p>
</div>
</div>
<div className="mt-4">
<label className="text-sm text-deep-green/80 dark:text-primary/70 mb-1 block">Storage Used</label>
<div className="w-full bg-light-green dark:bg-primary/10 rounded-full h-2.5">
<div className="bg-deep-green dark:bg-primary h-2.5 rounded-full"></div>
</div>
<p className="text-xs text-right mt-1 text-neutral-gray/70 dark:text-gray-400">75 GB / 100 GB</p>
</div>
</div>
{/* Card: Recovery Objectives */}
<div className="bg-white dark:bg-background-dark/60 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
<h3 className="text-lg font-semibold text-neutral-gray dark:text-gray-200 mb-4">Recovery Objectives</h3>
<div className="grid grid-cols-2 gap-4">
<div>
<p className="text-deep-green/80 dark:text-primary/70 text-sm mb-1">Recovery Point (RPO)</p>
<p className="text-3xl font-bold text-[#121b0d] dark:text-gray-100">15 Min</p>
</div>
<div>
<p className="text-deep-green/80 dark:text-primary/70 text-sm mb-1">Recovery Time (RTO)</p>
<p className="text-3xl font-bold text-[#121b0d] dark:text-gray-100">2 Hours</p>
</div>
</div>
</div>
{/* Card: Actions */}
<div className="bg-white dark:bg-background-dark/60 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
<h3 className="text-lg font-semibold text-neutral-gray dark:text-gray-200 mb-2">Actions</h3>
<p className="text-sm text-deep-green/80 dark:text-primary/70 mb-4">Verify the integrity of your backups by initiating a test restore process.</p>
<button className="w-full bg-deep-green text-white dark:bg-primary dark:text-background-dark font-semibold py-3 px-4 rounded-lg hover:bg-deep-green/90 dark:hover:bg-primary/90 transition-colors">
                                Initiate Test Restore
                            </button>
</div>
</div>
{/* Column 2: Security Monitoring */}
<div className="flex flex-col gap-6">
<h2 className="text-[#121b0d] dark:text-gray-100 text-[22px] font-bold leading-tight tracking-[-0.015em]">Security Monitoring</h2>
{/* Card: Security Alerts */}
<div className="grid grid-cols-2 gap-4">
<div className="bg-white dark:bg-background-dark/60 p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
<p className="text-deep-green/80 dark:text-primary/70 text-sm mb-1">Failed Logins (24h)</p>
<p className="text-3xl font-bold text-danger-red">12</p>
</div>
<div className="bg-white dark:bg-background-dark/60 p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
<p className="text-deep-green/80 dark:text-primary/70 text-sm mb-1">API Throttling</p>
<div className="flex items-center gap-2">
<p className="text-3xl font-bold text-warning-amber">High</p>
</div>
</div>
</div>
{/* Card: Suspicious Activities */}
<div className="bg-white dark:bg-background-dark/60 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
<div className="flex justify-between items-center mb-4">
<h3 className="text-lg font-semibold text-neutral-gray dark:text-gray-200">Suspicious Activities</h3>
<a className="text-sm text-deep-green dark:text-primary font-medium hover:underline" href="#">View All</a>
</div>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-danger-red mt-0.5">error</span>
<div>
<p className="text-sm font-medium text-neutral-gray dark:text-gray-300">Unusual transaction size from User #8432</p>
<p className="text-xs text-gray-400 dark:text-gray-500">2 minutes ago</p>
</div>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-warning-amber mt-0.5">warning</span>
<div>
<p className="text-sm font-medium text-neutral-gray dark:text-gray-300">Multiple login attempts from new IP</p>
<p className="text-xs text-gray-400 dark:text-gray-500">15 minutes ago</p>
</div>
</li>
</ul>
</div>
{/* Card: Firewall Logs */}
<div className="bg-white dark:bg-background-dark/60 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
<div className="flex justify-between items-center mb-4">
<h3 className="text-lg font-semibold text-neutral-gray dark:text-gray-200">Firewall Blocks</h3>
<a className="text-sm text-deep-green dark:text-primary font-medium hover:underline" href="#">View Logs</a>
</div>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-neutral-gray/50 dark:text-gray-400 mt-0.5">block</span>
<div>
<p className="text-sm font-medium text-neutral-gray dark:text-gray-300">IP: 203.0.113.45 <span className="text-xs text-gray-400 dark:text-gray-500">- (Geo-block)</span></p>
<p className="text-xs text-gray-400 dark:text-gray-500">1 minute ago</p>
</div>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-neutral-gray/50 dark:text-gray-400 mt-0.5">block</span>
<div>
<p className="text-sm font-medium text-neutral-gray dark:text-gray-300">IP: 198.51.100.22 <span className="text-xs text-gray-400 dark:text-gray-500">- (Repeated auth failure)</span></p>
<p className="text-xs text-gray-400 dark:text-gray-500">8 minutes ago</p>
</div>
</li>
</ul>
</div>
</div>
</div>
</div>
</main>
</div>

    </>
  );
}
