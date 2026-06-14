
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
<div className="flex min-h-screen">
{/* SideNavBar */}
<aside className="w-64 flex-shrink-0 bg-white dark:bg-charcoal/10 border-r border-gray-200 dark:border-charcoal/40 flex flex-col">
<div className="flex h-full min-h-[700px] flex-col justify-between p-4">
<div className="flex flex-col gap-4">
<div className="flex items-center gap-3 p-2">
<div className="size-8 text-primary">
<svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path></svg>
</div>
<div className="flex flex-col">
<h1 className="text-charcoal dark:text-white text-base font-bold leading-normal">AgriConnect</h1>
<p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">Admin Panel</p>
</div>
</div>
<div className="flex flex-col gap-1 mt-4">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 dark:bg-primary/20" href="#">
<span className="material-symbols-outlined text-primary text-2xl">dashboard</span>
<p className="text-primary text-sm font-bold leading-normal">Dashboard</p>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-100 dark:hover:bg-charcoal/20" href="#">
<span className="material-symbols-outlined text-gray-600 dark:text-gray-300 text-2xl">group</span>
<p className="text-charcoal dark:text-white text-sm font-medium leading-normal">Users</p>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-100 dark:hover:bg-charcoal/20" href="#">
<span className="material-symbols-outlined text-gray-600 dark:text-gray-300 text-2xl">receipt_long</span>
<p className="text-charcoal dark:text-white text-sm font-medium leading-normal">Transactions</p>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-100 dark:hover:bg-charcoal/20" href="#">
<span className="material-symbols-outlined text-gray-600 dark:text-gray-300 text-2xl">security</span>
<p className="text-charcoal dark:text-white text-sm font-medium leading-normal">Risk Scoring</p>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-100 dark:hover:bg-charcoal/20" href="#">
<span className="material-symbols-outlined text-gray-600 dark:text-gray-300 text-2xl">analytics</span>
<p className="text-charcoal dark:text-white text-sm font-medium leading-normal">Reports</p>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-100 dark:hover:bg-charcoal/20" href="#">
<span className="material-symbols-outlined text-gray-600 dark:text-gray-300 text-2xl">gpp_bad</span>
<p className="text-charcoal dark:text-white text-sm font-medium leading-normal">Blacklist Management</p>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-100 dark:hover:bg-charcoal/20" href="#">
<span className="material-symbols-outlined text-gray-600 dark:text-gray-300 text-2xl">settings</span>
<p className="text-charcoal dark:text-white text-sm font-medium leading-normal">Settings</p>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-100 dark:hover:bg-charcoal/20" href="#">
<span className="material-symbols-outlined text-gray-600 dark:text-gray-300 text-2xl">history</span>
<p className="text-charcoal dark:text-white text-sm font-medium leading-normal">Audit Logs</p>
</a>
</div>
</div>
</div>
</aside>
<main className="flex-1 flex flex-col">
{/* TopNavBar */}
<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 dark:border-charcoal/40 px-8 py-3 bg-white dark:bg-background-dark/80 backdrop-blur-sm sticky top-0 z-10">
<div className="flex items-center gap-8 flex-1">
<label className="flex flex-col min-w-40 !h-10 w-full max-w-lg">
<div className="flex w-full flex-1 items-stretch rounded-lg h-full">
<div className="text-gray-400 dark:text-gray-500 flex bg-gray-100 dark:bg-charcoal/20 items-center justify-center pl-4 rounded-l-lg border-r-0">
<span className="material-symbols-outlined text-2xl">search</span>
</div>
<input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-charcoal dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border-none bg-gray-100 dark:bg-charcoal/20 focus:border-none h-full placeholder:text-gray-400 dark:placeholder:text-gray-500 px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal" placeholder="Search farmers, suppliers, orders..." defaultValue=""/>
</div>
</label>
</div>
<div className="flex items-center justify-end gap-4">
<button className="relative flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg size-10 bg-gray-100 dark:bg-charcoal/20 text-charcoal dark:text-white hover:bg-gray-200 dark:hover:bg-charcoal/30">
<span className="material-symbols-outlined text-2xl">notifications</span>
<div className="absolute top-1.5 right-1.5 size-2.5 rounded-full bg-accent-red border-2 border-white dark:border-background-dark"></div>
</button>
<div className="flex items-center gap-3">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="Admin user avatar"></div>
<div className="flex flex-col text-right">
<p className="text-sm font-semibold text-charcoal dark:text-white">Admin Name</p>
<p className="text-xs text-gray-500 dark:text-gray-400">Administrator</p>
</div>
</div>
</div>
</header>
{/* Main Content */}
<div className="flex-1 p-8 overflow-y-auto">
<div className="max-w-7xl mx-auto space-y-6">
{/* System Health Status */}
<div className="bg-primary/10 border border-primary/30 rounded-lg p-4 flex items-center gap-4">
<span className="material-symbols-outlined text-primary text-2xl">verified_user</span>
<h2 className="text-primary text-base font-bold leading-tight">System Health Status: All Systems Operational</h2>
</div>
{/* KPI Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
<div className="flex flex-col gap-2 rounded-xl p-4 border border-gray-200 dark:border-charcoal/40 bg-white dark:bg-charcoal/10 hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer">
<p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal">Total Active Farmers</p>
<p className="text-charcoal dark:text-white tracking-light text-3xl font-bold leading-tight">1,450</p>
</div>
<div className="flex flex-col gap-2 rounded-xl p-4 border border-gray-200 dark:border-charcoal/40 bg-white dark:bg-charcoal/10 hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer">
<p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal">Total Active Suppliers</p>
<p className="text-charcoal dark:text-white tracking-light text-3xl font-bold leading-tight">210</p>
</div>
<div className="flex flex-col gap-2 rounded-xl p-4 border border-gray-200 dark:border-charcoal/40 bg-white dark:bg-charcoal/10 hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer">
<p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal">Today's Orders</p>
<p className="text-charcoal dark:text-white tracking-light text-3xl font-bold leading-tight">78</p>
</div>
<div className="flex flex-col gap-2 rounded-xl p-4 border border-gray-200 dark:border-charcoal/40 bg-white dark:bg-charcoal/10 hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer">
<p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal">Transaction Volume (PKR)</p>
<p className="text-charcoal dark:text-white tracking-light text-3xl font-bold leading-tight">1.25M</p>
</div>
<div className="flex flex-col gap-2 rounded-xl p-4 border border-accent-yellow/50 bg-accent-yellow/10 hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer">
<p className="text-accent-yellow/80 dark:text-accent-yellow/90 text-sm font-medium leading-normal">Pending Approvals</p>
<p className="text-accent-yellow dark:text-accent-yellow tracking-light text-3xl font-bold leading-tight">15</p>
</div>
<div className="flex flex-col gap-2 rounded-xl p-4 border border-accent-red/50 bg-accent-red/10 hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer">
<p className="text-accent-red/80 dark:text-accent-red/90 text-sm font-medium leading-normal">Blacklisted Users</p>
<p className="text-accent-red dark:text-accent-red tracking-light text-3xl font-bold leading-tight">4</p>
</div>
</div>
{/* Live Activity and Analytics */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
{/* Live Activity Feed */}
<div className="lg:col-span-1 bg-white dark:bg-charcoal/10 rounded-xl border border-gray-200 dark:border-charcoal/40 p-5 flex flex-col">
<h2 className="text-charcoal dark:text-white text-lg font-bold leading-tight tracking-[-0.01em] mb-4">Live Activity Feed</h2>
<div className="flex-1 space-y-4 overflow-y-auto pr-2 -mr-2">
<div className="flex items-start gap-3">
<div className="bg-primary/10 rounded-full size-9 flex items-center justify-center flex-shrink-0"><span className="material-symbols-outlined text-primary text-xl">person_add</span></div>
<div>
<p className="text-sm text-charcoal dark:text-gray-200">New farmer <span className="font-semibold text-accent-blue">FMR-8372</span> registered.</p>
<p className="text-xs text-gray-400 dark:text-gray-500">2m ago</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="bg-accent-blue/10 rounded-full size-9 flex items-center justify-center flex-shrink-0"><span className="material-symbols-outlined text-accent-blue text-xl">shopping_cart</span></div>
<div>
<p className="text-sm text-charcoal dark:text-gray-200">Order <span className="font-semibold text-accent-blue">ORD-4819</span> placed by <span className="font-semibold text-accent-blue">FMR-1023</span>.</p>
<p className="text-xs text-gray-400 dark:text-gray-500">5m ago</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="bg-primary/10 rounded-full size-9 flex items-center justify-center flex-shrink-0"><span className="material-symbols-outlined text-primary text-xl">paid</span></div>
<div>
<p className="text-sm text-charcoal dark:text-gray-200">Payment of PKR 15,000 received for <span className="font-semibold text-accent-blue">ORD-4122</span>.</p>
<p className="text-xs text-gray-400 dark:text-gray-500">12m ago</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="bg-accent-yellow/10 rounded-full size-9 flex items-center justify-center flex-shrink-0"><span className="material-symbols-outlined text-accent-yellow text-xl">hourglass_top</span></div>
<div>
<p className="text-sm text-charcoal dark:text-gray-200">Installment for <span className="font-semibold text-accent-blue">FMR-0451</span> is overdue.</p>
<p className="text-xs text-gray-400 dark:text-gray-500">30m ago</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="bg-primary/10 rounded-full size-9 flex items-center justify-center flex-shrink-0"><span className="material-symbols-outlined text-primary text-xl">how_to_reg</span></div>
<div>
<p className="text-sm text-charcoal dark:text-gray-200">KYC approved for supplier <span className="font-semibold text-accent-blue">SUP-0089</span>.</p>
<p className="text-xs text-gray-400 dark:text-gray-500">1h ago</p>
</div>
</div>
</div>
</div>
{/* Analytics Section */}
<div className="lg:col-span-2 bg-white dark:bg-charcoal/10 rounded-xl border border-gray-200 dark:border-charcoal/40 p-5 flex flex-col">
<h2 className="text-charcoal dark:text-white text-lg font-bold leading-tight tracking-[-0.01em] mb-4">Analytics</h2>
<div className="grid grid-cols-1 xl:grid-cols-2 gap-6 flex-1">
<div className="bg-gray-50 dark:bg-charcoal/20 p-4 rounded-lg flex flex-col justify-between">
<p className="text-sm font-semibold text-charcoal dark:text-gray-200">Transaction Volume (30 Days)</p>
<img alt="Line chart showing transaction volume trends over the last 30 days" className="w-full h-auto mt-2" data-alt="Line chart showing transaction volume trends over the last 30 days" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjMTojjvAMindespWBiwHxf0Ue1gUvBaTtnmOFyY-mHhFpBBzrIGEwTOe7_cbB-xrkeE4EZQWOnZVKu5mYB9_WYuJBTVWsyMXzXJ1ho6A0Cy9wTzCzaFu3iUqwPKqiRr57ukbudRE9tO7EjqHgq5FbNbefC2a6-FWmskrgGSGUb9kPMTcYm_3oyvFHuV3hZsAk_p01b-i3YnKw_kRNk2eYjV5LuhHpkwtjI0LJz2hebHr_MbK6mpytE9vl9Wzgyo4JRDR_xMqv-1Y"/>
</div>
<div className="grid grid-rows-2 gap-6">
<div className="bg-gray-50 dark:bg-charcoal/20 p-4 rounded-lg">
<p className="text-sm font-semibold text-charcoal dark:text-gray-200">Top Performing Districts</p>
<img alt="Bar chart showing top performing districts" className="w-full h-auto mt-2" data-alt="Bar chart showing top performing districts" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmlkpQJk3gPYKTthG6Bq5uZiQPWqsXFiTLXg6On0hrYqtRkOw_kEXtkXzThx8PwWM7QKSY7uE8M0YeMFj-u5aqLLKE2HfOVbVapPeZnJ2rOL60SRQYjE1RSA5KzHvkgTLLKxbStPZ297EEfUHuE90iYEtKztVKDotwg3qOaNZ2dgvw6ZeMrymf0AH7P364yXmF4Y9C3XYsu62OGsu7TzS1lPPdhlTVjXRj1L77Z4I-7EEcEvXXuypLPUrwnK0YzbaiVDTyQopYBE8"/>
</div>
<div className="bg-gray-50 dark:bg-charcoal/20 p-4 rounded-lg flex items-center justify-center">
<img alt="Pie chart showing 75% credit utilization rate" className="w-auto h-full" data-alt="Pie chart showing 75% credit utilization rate" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBM_KBmHxOj_Ep7b_tv1FwKZKJKsGuDlyrC1VC598LLSzZ1lEG0aKlujvYqhU9pDH1tsdSCu68aIm3clmdBJ0KzPxE9HJOsSaGzDoJkhnOsYHHYBboVh3NsZlgEAjd14STuW-bMmjnFFsw9jekk1ThC8Q1dK-gjcCIYXfX_4Ns1ssdH_wP3eSMQ5vyM8kyHbOQbMusY8Ev8hYLuFAXueU3pAHleZ6oNsFVbYyA30wU5hrgFRU8cXI4v548hvDKXYoOB-fmFN7qZ5_0"/>
</div>
</div>
</div>
</div>
</div>
{/* Quick Actions and System Alerts */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
{/* Quick Actions */}
<div className="bg-white dark:bg-charcoal/10 rounded-xl border border-gray-200 dark:border-charcoal/40 p-5">
<h2 className="text-charcoal dark:text-white text-lg font-bold leading-tight tracking-[-0.01em] mb-4">Quick Actions</h2>
<div className="grid grid-cols-2 gap-4">
<button className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-2.5 px-4 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 transition-colors">
<span className="material-symbols-outlined">person_add</span>Approve Pending Users
                                    </button>
<button className="flex w-full items-center justify-center gap-2 rounded-lg bg-gray-200 dark:bg-charcoal/30 py-2.5 px-4 text-sm font-semibold text-charcoal dark:text-white shadow-sm hover:bg-gray-300 dark:hover:bg-charcoal/40 transition-colors">
<span className="material-symbols-outlined">security</span>Run Risk Scoring
                                    </button>
<button className="flex w-full items-center justify-center gap-2 rounded-lg bg-gray-200 dark:bg-charcoal/30 py-2.5 px-4 text-sm font-semibold text-charcoal dark:text-white shadow-sm hover:bg-gray-300 dark:hover:bg-charcoal/40 transition-colors">
<span className="material-symbols-outlined">assessment</span>Generate Report
                                    </button>
<button className="flex w-full items-center justify-center gap-2 rounded-lg bg-gray-200 dark:bg-charcoal/30 py-2.5 px-4 text-sm font-semibold text-charcoal dark:text-white shadow-sm hover:bg-gray-300 dark:hover:bg-charcoal/40 transition-colors">
<span className="material-symbols-outlined">forum</span>View Disputes
                                    </button>
</div>
</div>
{/* System Alerts */}
<div className="bg-white dark:bg-charcoal/10 rounded-xl border border-gray-200 dark:border-charcoal/40 p-5">
<h2 className="text-charcoal dark:text-white text-lg font-bold leading-tight tracking-[-0.01em] mb-4">System Alerts</h2>
<div className="space-y-3">
<div className="flex items-start gap-3 bg-accent-red/10 border-l-4 border-accent-red p-3 rounded-r-md">
<span className="material-symbols-outlined text-accent-red text-xl mt-0.5">error</span>
<div>
<p className="text-sm font-semibold text-accent-red">Critical: Potential Fraud Detected</p>
<p className="text-xs text-accent-red/80">Unusual activity on account FMR-9102. Immediate review required.</p>
</div>
</div>
<div className="flex items-start gap-3 bg-accent-yellow/10 border-l-4 border-accent-yellow p-3 rounded-r-md">
<span className="material-symbols-outlined text-accent-yellow text-xl mt-0.5">warning</span>
<div>
<p className="text-sm font-semibold text-accent-yellow">Warning: Database CPU High</p>
<p className="text-xs text-accent-yellow/80">Database CPU utilization has exceeded 85% for the last 15 minutes.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
</div>
</div>

    </>
  );
}
