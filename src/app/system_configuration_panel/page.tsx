
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="flex h-screen w-full">
{/* SideNavBar */}
<aside className="flex flex-col w-64 bg-surface-light dark:bg-surface-dark border-r border-border-light dark:border-border-dark">
<div className="flex items-center gap-3 p-4 border-b border-border-light dark:border-border-dark h-16">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="AgriConnect logo placeholder"></div>
<div className="flex flex-col">
<h1 className="text-text-light dark:text-text-dark text-base font-bold leading-normal">AgriConnect</h1>
<p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">Admin Panel</p>
</div>
</div>
<nav className="flex-1 p-2 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary dark:bg-primary/20" href="#">
<span className="material-symbols-outlined text-primary">settings</span>
<p className="text-sm font-semibold leading-normal">General</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50" href="#">
<span className="material-symbols-outlined">payments</span>
<p className="text-sm font-medium leading-normal">Financial</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50" href="#">
<span className="material-symbols-outlined">shield</span>
<p className="text-sm font-medium leading-normal">Security</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50" href="#">
<span className="material-symbols-outlined">notifications</span>
<p className="text-sm font-medium leading-normal">Notifications</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50" href="#">
<span className="material-symbols-outlined">integration_instructions</span>
<p className="text-sm font-medium leading-normal">Integrations</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50" href="#">
<span className="material-symbols-outlined">build</span>
<p className="text-sm font-medium leading-normal">Maintenance</p>
</a>
</nav>
<div className="p-4 border-t border-border-light dark:border-border-dark">
<div className="flex items-center gap-3">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="Admin user avatar"></div>
<div className="flex flex-col">
<h2 className="text-text-light dark:text-text-dark text-sm font-semibold">Admin User</h2>
<a className="text-secondary text-xs font-medium hover:underline" href="#">Log out</a>
</div>
</div>
</div>
</aside>
{/* Main Content */}
<main className="flex-1 flex flex-col h-screen">
<div className="flex-1 overflow-y-auto">
<div className="container mx-auto px-6 py-8">
{/* PageHeading */}
<div className="mb-6">
<p className="text-text-light dark:text-text-dark text-3xl font-bold leading-tight tracking-tight">System Configuration</p>
<p className="text-gray-500 dark:text-gray-400 mt-1">Manage platform-wide settings and integrations.</p>
</div>
{/* Tabs */}
<div className="mb-8">
<div className="flex border-b border-border-light dark:border-border-dark gap-8">
<a className="flex flex-col items-center justify-center border-b-[3px] border-b-primary text-primary pb-3 pt-1" href="#">
<p className="text-sm font-semibold leading-normal">General</p>
</a>
<a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-gray-500 dark:text-gray-400 hover:text-text-light dark:hover:text-text-dark pb-3 pt-1" href="#">
<p className="text-sm font-medium leading-normal">Financial</p>
</a>
<a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-gray-500 dark:text-gray-400 hover:text-text-light dark:hover:text-text-dark pb-3 pt-1" href="#">
<p className="text-sm font-medium leading-normal">Security</p>
</a>
<a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-gray-500 dark:text-gray-400 hover:text-text-light dark:hover:text-text-dark pb-3 pt-1" href="#">
<p className="text-sm font-medium leading-normal">Notifications</p>
</a>
<a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-gray-500 dark:text-gray-400 hover:text-text-light dark:hover:text-text-dark pb-3 pt-1" href="#">
<p className="text-sm font-medium leading-normal">Integrations</p>
</a>
<a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-gray-500 dark:text-gray-400 hover:text-text-light dark:hover:text-text-dark pb-3 pt-1" href="#">
<p className="text-sm font-medium leading-normal">Maintenance</p>
</a>
</div>
</div>
{/* Form Content */}
<div className="space-y-10">
{/* Section: General Settings */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="md:col-span-1">
<h2 className="text-text-light dark:text-text-dark text-lg font-semibold leading-tight">General Settings</h2>
<p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Update your platform's identity and regional settings.</p>
</div>
<div className="md:col-span-2 bg-surface-light dark:bg-surface-dark p-6 rounded-lg border border-border-light dark:border-border-dark">
<div className="space-y-6">
<div>
<label className="block text-sm font-medium text-text-light dark:text-text-dark" htmlFor="platform-name">Platform Name</label>
<input className="mt-1 block w-full rounded border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark focus:ring-primary focus:border-primary" id="platform-name" type="text" defaultValue="AgriConnect"/>
</div>
<div>
<label className="block text-sm font-medium text-text-light dark:text-text-dark">Platform Logo</label>
<div className="mt-1 flex items-center gap-4">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-16" data-alt="Current AgriConnect logo"></div>
<div className="flex-1">
<div className="flex justify-center items-center w-full px-6 py-4 border-2 border-border-light dark:border-border-dark border-dashed rounded">
<div className="text-center">
<span className="material-symbols-outlined text-gray-400 text-4xl">upload_file</span>
<p className="text-sm text-gray-500 dark:text-gray-400 mt-1"><span className="font-semibold text-primary">Click to upload</span> or drag and drop</p>
<p className="text-xs text-gray-400 dark:text-gray-500">SVG, PNG, JPG (max. 800x400px)</p>
</div>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-text-light dark:text-text-dark" htmlFor="default-language">Default Language</label>
<select className="mt-1 block w-full rounded border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark focus:ring-primary focus:border-primary" id="default-language">
<option>English (US)</option>
<option selected="">Urdu (اردو)</option>
<option>Punjabi (ਪੰਜਾਬੀ)</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-text-light dark:text-text-dark" htmlFor="timezone">Timezone</label>
<select className="mt-1 block w-full rounded border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark focus:ring-primary focus:border-primary" id="timezone">
<option>GMT-5:00 Eastern Time</option>
<option selected="">GMT+5:00 Pakistan Standard Time</option>
<option>GMT+1:00 Central European Time</option>
</select>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-text-light dark:text-text-dark" htmlFor="currency">Currency</label>
<input className="mt-1 block w-full rounded border-border-light dark:border-border-dark bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 cursor-not-allowed" disabled="" id="currency" type="text" defaultValue="Pakistani Rupee (PKR)"/>
</div>
<div>
<label className="block text-sm font-medium text-text-light dark:text-text-dark" htmlFor="operational-hours">Operational Hours</label>
<input className="mt-1 block w-full rounded border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark focus:ring-primary focus:border-primary" id="operational-hours" type="text" defaultValue="9:00 AM - 5:00 PM"/>
</div>
</div>
</div>
</div>
</div>
{/* Spacer */}
<div className="border-t border-border-light dark:border-border-dark"></div>
{/* Section: Financial Settings */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="md:col-span-1">
<h2 className="text-text-light dark:text-text-dark text-lg font-semibold leading-tight">Financial Settings</h2>
<p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Configure BNPL rules, limits, and banking details.</p>
</div>
<div className="md:col-span-2 bg-surface-light dark:bg-surface-dark p-6 rounded-lg border border-border-light dark:border-border-dark">
<div className="space-y-6">
<h3 className="text-base font-semibold text-text-light dark:text-text-dark border-b border-border-light dark:border-border-dark pb-2">BNPL Configuration</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-text-light dark:text-text-dark" htmlFor="markup-rate">Base Markup Rate (%)</label>
<input className="mt-1 block w-full rounded border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark focus:ring-primary focus:border-primary" id="markup-rate" type="number" defaultValue="1.5"/>
</div>
<div>
<label className="block text-sm font-medium text-text-light dark:text-text-dark" htmlFor="late-penalty">Late Payment Penalty</label>
<select className="mt-1 block w-full rounded border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark focus:ring-primary focus:border-primary" id="late-penalty">
<option>Fixed Fee</option>
<option selected="">Percentage of Overdue</option>
<option>No Penalty</option>
</select>
</div>
</div>
<div>
<label className="block text-sm font-medium text-text-light dark:text-text-dark">Installment Tenure (Months)</label>
<div className="flex items-center gap-4 mt-1">
<input className="block w-full rounded border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark focus:ring-primary focus:border-primary" placeholder="Min" type="number" defaultValue="3"/>
<span className="text-gray-400">-</span>
<input className="block w-full rounded border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark focus:ring-primary focus:border-primary" placeholder="Max" type="number" defaultValue="12"/>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
{/* Footer / Action Bar */}
<footer className="flex items-center justify-between bg-surface-light dark:bg-surface-dark border-t border-border-light dark:border-border-dark px-6 py-3 shrink-0">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-base">warning</span>
<p className="text-sm text-text-light dark:text-text-dark">Some changes may require a server restart to take effect.</p>
</div>
<div className="flex items-center gap-3">
<button className="px-4 py-2 text-sm font-semibold text-text-light dark:text-text-dark bg-white dark:bg-gray-700 border border-border-light dark:border-border-dark rounded hover:bg-gray-50 dark:hover:bg-gray-600" type="button">Cancel</button>
<button className="px-4 py-2 text-sm font-semibold text-white bg-primary rounded hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-background-dark" type="button">Save Changes</button>
</div>
</footer>
</main>
</div>

    </>
  );
}
