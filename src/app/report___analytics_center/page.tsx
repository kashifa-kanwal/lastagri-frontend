
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="flex h-screen w-full">
{/* SideNavBar */}
<aside className="flex h-full w-72 flex-col bg-secondary/10 dark:bg-secondary/20 p-4">
<div className="flex flex-col h-full justify-between">
<div className="flex flex-col gap-4">
<div className="flex gap-3 items-center">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="AgriConnect Logo"></div>
<div className="flex flex-col">
<h1 className="text-secondary dark:text-white text-base font-medium leading-normal">AgriConnect Admin</h1>
<p className="text-neutral-text dark:text-neutral-border text-sm font-normal leading-normal">admin@agriconnect.com</p>
</div>
</div>
<div className="flex flex-col gap-2">
<p className="text-xs font-bold uppercase text-neutral-text dark:text-neutral-border px-3 pt-4">Report Templates</p>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/20 dark:bg-primary/30" href="#">
<span className="material-symbols-outlined text-primary text-xl">monitoring</span>
<p className="text-primary text-sm font-medium leading-normal">Dashboard</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5" href="#">
<span className="material-symbols-outlined text-secondary dark:text-white text-xl">receipt_long</span>
<p className="text-secondary dark:text-white text-sm font-medium leading-normal">Daily Transaction Summary</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5" href="#">
<span className="material-symbols-outlined text-secondary dark:text-white text-xl">calendar_month</span>
<p className="text-secondary dark:text-white text-sm font-medium leading-normal">Monthly Financial Report</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5" href="#">
<span className="material-symbols-outlined text-secondary dark:text-white text-xl">group</span>
<p className="text-secondary dark:text-white text-sm font-medium leading-normal">User Growth Report</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5" href="#">
<span className="material-symbols-outlined text-secondary dark:text-white text-xl">trending_down</span>
<p className="text-secondary dark:text-white text-sm font-medium leading-normal">Default Rate Analysis</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5" href="#">
<span className="material-symbols-outlined text-secondary dark:text-white text-xl">storefront</span>
<p className="text-secondary dark:text-white text-sm font-medium leading-normal">Supplier Performance</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5" href="#">
<span className="material-symbols-outlined text-secondary dark:text-white text-xl">pin_drop</span>
<p className="text-secondary dark:text-white text-sm font-medium leading-normal">District-wise Sales</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5" href="#">
<span className="material-symbols-outlined text-secondary dark:text-white text-xl">credit_card</span>
<p className="text-secondary dark:text-white text-sm font-medium leading-normal">Credit Utilization Report</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5" href="#">
<span className="material-symbols-outlined text-secondary dark:text-white text-xl">person_remove</span>
<p className="text-secondary dark:text-white text-sm font-medium leading-normal">Churn Analysis</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5" href="#">
<span className="material-symbols-outlined text-secondary dark:text-white text-xl">bug_report</span>
<p className="text-secondary dark:text-white text-sm font-medium leading-normal">Fraud Detection Report</p>
</a>
</div>
</div>
<button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]">
<span className="truncate">Custom Report Builder</span>
</button>
</div>
</aside>
{/* Main Content */}
<main className="flex-1 flex overflow-hidden">
<div className="flex-1 flex flex-col p-6 overflow-y-auto">
{/* PageHeading */}
<header className="flex flex-wrap justify-between gap-3 pb-6 border-b border-neutral-border/50 dark:border-neutral-border/20">
<div className="flex min-w-72 flex-col gap-2">
<p className="text-secondary dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Report Generation &amp; Analytics</p>
<p className="text-neutral-text dark:text-neutral-border/80 text-base font-normal leading-normal">Generate, schedule, and analyze reports to gain insights into the platform's performance.</p>
</div>
</header>
{/* Report Parameters Section */}
<section className="mt-6">
<h2 className="text-secondary dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-4">Report Parameters</h2>
<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
<label className="flex flex-col">
<p className="text-secondary dark:text-white text-sm font-medium leading-normal pb-2">Report Type</p>
<select className="form-select flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-secondary dark:text-white focus:outline-none focus:ring-2 focus:ring-primary border-neutral-border dark:border-neutral-border/30 bg-white dark:bg-secondary/10 h-12 px-3 text-base font-normal leading-normal">
<option>Daily Transaction Summary</option>
<option>Monthly Financial Report</option>
<option>User Growth Report</option>
</select>
</label>
<div className="flex flex-col col-span-1 lg:col-span-2">
<p className="text-secondary dark:text-white text-sm font-medium leading-normal pb-2">Date Range</p>
<div className="flex flex-col sm:flex-row gap-4 items-center">
<input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-secondary dark:text-white focus:outline-none focus:ring-2 focus:ring-primary border-neutral-border dark:border-neutral-border/30 bg-white dark:bg-secondary/10 h-12 px-3 text-base font-normal leading-normal" type="date" defaultValue="2024-07-05"/>
<span className="text-neutral-text dark:text-neutral-border">-</span>
<input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-secondary dark:text-white focus:outline-none focus:ring-2 focus:ring-primary border-neutral-border dark:border-neutral-border/30 bg-white dark:bg-secondary/10 h-12 px-3 text-base font-normal leading-normal" type="date" defaultValue="2024-08-07"/>
<div className="flex gap-2">
<button className="px-3 h-10 rounded-md text-sm font-semibold bg-primary/20 text-primary">MTD</button>
<button className="px-3 h-10 rounded-md text-sm font-semibold bg-black/5 dark:bg-white/5 text-secondary dark:text-white">QTD</button>
<button className="px-3 h-10 rounded-md text-sm font-semibold bg-black/5 dark:bg-white/5 text-secondary dark:text-white">YTD</button>
</div>
</div>
</div>
<div className="flex flex-col">
<p className="text-secondary dark:text-white text-sm font-medium leading-normal pb-2">User Segmentation</p>
<div className="flex items-center gap-2">
<button className="flex-1 py-2 px-4 rounded-lg text-sm font-semibold bg-primary/20 text-primary">All</button>
<button className="flex-1 py-2 px-4 rounded-lg text-sm font-semibold bg-black/5 dark:bg-white/5 text-secondary dark:text-white">Farmers</button>
<button className="flex-1 py-2 px-4 rounded-lg text-sm font-semibold bg-black/5 dark:bg-white/5 text-secondary dark:text-white">Suppliers</button>
</div>
</div>
<label className="flex flex-col">
<p className="text-secondary dark:text-white text-sm font-medium leading-normal pb-2">District Filter</p>
<select className="form-multiselect flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-secondary dark:text-white focus:outline-none focus:ring-2 focus:ring-primary border-neutral-border dark:border-neutral-border/30 bg-white dark:bg-secondary/10 h-12 px-3 text-base font-normal leading-normal">
<option selected="">All Districts</option>
<option>District A</option>
<option>District B</option>
</select>
</label>
<label className="flex flex-col">
<p className="text-secondary dark:text-white text-sm font-medium leading-normal pb-2">Status Filter</p>
<select className="form-multiselect flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-secondary dark:text-white focus:outline-none focus:ring-2 focus:ring-primary border-neutral-border dark:border-neutral-border/30 bg-white dark:bg-secondary/10 h-12 px-3 text-base font-normal leading-normal">
<option selected="">All Statuses</option>
<option>Active</option>
<option>Inactive</option>
<option>Blacklisted</option>
</select>
</label>
<div className="flex flex-col">
<p className="text-secondary dark:text-white text-sm font-medium leading-normal pb-2">Report Format</p>
<div className="flex items-center gap-2">
<button className="flex-1 py-2 px-4 rounded-lg text-sm font-semibold bg-primary/20 text-primary">PDF</button>
<button className="flex-1 py-2 px-4 rounded-lg text-sm font-semibold bg-black/5 dark:bg-white/5 text-secondary dark:text-white">Excel</button>
<button className="flex-1 py-2 px-4 rounded-lg text-sm font-semibold bg-black/5 dark:bg-white/5 text-secondary dark:text-white">CSV</button>
<button className="flex-1 py-2 px-4 rounded-lg text-sm font-semibold bg-black/5 dark:bg-white/5 text-secondary dark:text-white">JSON</button>
</div>
</div>
<div className="flex items-end">
<button className="w-full flex min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-4 bg-primary text-white text-base font-bold">
<span className="material-symbols-outlined">summarize</span>
<span>Generate Report</span>
</button>
</div>
</div>
</section>
{/* Generated Reports Section */}
<section className="mt-8">
<h2 className="text-secondary dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-4">Generated Reports</h2>
<div className="overflow-x-auto bg-white dark:bg-secondary/10 rounded-lg border border-neutral-border/50 dark:border-neutral-border/20">
<table className="w-full text-left text-sm text-neutral-text dark:text-neutral-border">
<thead className="bg-black/5 dark:bg-white/5 text-xs uppercase">
<tr>
<th className="px-6 py-3" scope="col">Report Name</th>
<th className="px-6 py-3" scope="col">Generated Date</th>
<th className="px-6 py-3" scope="col">Time Period</th>
<th className="px-6 py-3" scope="col">File Size</th>
<th className="px-6 py-3 text-right" scope="col">Actions</th>
</tr>
</thead>
<tbody>
<tr className="border-b border-neutral-border/50 dark:border-neutral-border/20">
<td className="px-6 py-4 font-medium text-secondary dark:text-white">Monthly Financial Report</td>
<td className="px-6 py-4">2024-08-01 10:30 AM</td>
<td className="px-6 py-4">July 2024</td>
<td className="px-6 py-4">2.5 MB</td>
<td className="px-6 py-4 text-right">
<button className="p-2 rounded-full hover:bg-primary/10 text-primary">
<span className="material-symbols-outlined">download</span>
</button>
</td>
</tr>
<tr className="border-b border-neutral-border/50 dark:border-neutral-border/20">
<td className="px-6 py-4 font-medium text-secondary dark:text-white">User Growth Report</td>
<td className="px-6 py-4">2024-07-28 02:15 PM</td>
<td className="px-6 py-4">Q2 2024</td>
<td className="px-6 py-4">1.1 MB</td>
<td className="px-6 py-4 text-right">
<button className="p-2 rounded-full hover:bg-primary/10 text-primary">
<span className="material-symbols-outlined">download</span>
</button>
</td>
</tr>
<tr className="">
<td className="px-6 py-4 font-medium text-secondary dark:text-white">Default Rate Analysis</td>
<td className="px-6 py-4">2024-07-25 09:00 AM</td>
<td className="px-6 py-4">Jan - June 2024</td>
<td className="px-6 py-4">5.8 MB</td>
<td className="px-6 py-4 text-right">
<button className="p-2 rounded-full hover:bg-primary/10 text-primary">
<span className="material-symbols-outlined">download</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</section>
</div>
{/* Right Panel */}
<aside className="w-[480px] h-full bg-secondary/5 dark:bg-secondary/10 p-6 border-l border-neutral-border/50 dark:border-neutral-border/20 overflow-y-auto">
<h2 className="text-secondary dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-4">Dashboard Snapshots</h2>
<div className="grid grid-cols-1 gap-6">
<div className="p-4 rounded-lg bg-white dark:bg-secondary/10 border border-neutral-border/50 dark:border-neutral-border/20">
<div className="flex justify-between items-center mb-2">
<h3 className="text-base font-bold text-secondary dark:text-white">Total GMV Trend</h3>
<button className="p-2 rounded-full hover:bg-primary/10 text-primary">
<span className="material-symbols-outlined text-xl">download</span>
</button>
</div>
<img className="w-full" data-alt="Line chart showing a positive trend in Gross Merchandise Value over time." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPdJLJ8xCIhvG7vyRIwntGl3FTJsLn3SnIcqea_ICosofCetLxHFHA5NGMpiy6eLt2Tu4LmFabifAe3hjbWy47kOkU_MEl1kxPQjOylJ9uCNrV5ZCksqnBo97bvZNYCvIeeox-gMO3JeYPOgEubfExPe2gei6ztPHhm7m9q429lTi0wvzxObviZkxDKwZTeFA7wuRzI9tMN7ezfUPclE-d8N3UKrsJzAKMqWpDEFi3-csUV6Wr2qReMkJlXP1BT4DLwATIZFd-7NE"/>
</div>
<div className="p-4 rounded-lg bg-white dark:bg-secondary/10 border border-neutral-border/50 dark:border-neutral-border/20">
<div className="flex justify-between items-center mb-2">
<h3 className="text-base font-bold text-secondary dark:text-white">Default Rate Trend</h3>
<button className="p-2 rounded-full hover:bg-primary/10 text-primary">
<span className="material-symbols-outlined text-xl">download</span>
</button>
</div>
<img className="w-full" data-alt="Line chart showing a decreasing trend in the default rate, with a yellow line indicating a predictive downward trend." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbCTueE8OhnN___tCVjmkiqEMmLI7rRFpG5yl6BE8LX3apiyhCQ-sJTJ_MTAzH3xUeQPFI7PxfhD53uLILAIzGRINn86hSqivubIzUl8wI412UXdHjSAgTnDO8rK7QnsNeZ2VgnOpVjo1nPJCcBSzOF3jn_-e31A4fIrqwFatEUO8jVELG3-0GJ2ZCnKu_TG-haIGTju3qm6BK9xrZQPJ5vEUZM74TEo3mAYE1UdSA0TChQJ6Qh_rjCNae-u4jLan-VQXZXtrmQGA"/>
</div>
<div className="p-4 rounded-lg bg-white dark:bg-secondary/10 border border-neutral-border/50 dark:border-neutral-border/20">
<div className="flex justify-between items-center mb-2">
<h3 className="text-base font-bold text-secondary dark:text-white">District Sales Heatmap</h3>
<button className="p-2 rounded-full hover:bg-primary/10 text-primary">
<span className="material-symbols-outlined text-xl">download</span>
</button>
</div>
<div className="aspect-video bg-center bg-contain bg-no-repeat" data-alt="A geographical heat map of a country showing varying sales intensity across different districts. Hotspots are colored in shades of Indus Green."></div>
</div>
<div className="p-4 rounded-lg bg-white dark:bg-secondary/10 border border-neutral-border/50 dark:border-neutral-border/20">
<div className="flex justify-between items-center mb-2">
<h3 className="text-base font-bold text-secondary dark:text-white">Farmer Acquisition Funnel</h3>
<button className="p-2 rounded-full hover:bg-primary/10 text-primary">
<span className="material-symbols-outlined text-xl">download</span>
</button>
</div>
<img className="w-full" data-alt="A bar chart representing a sales funnel for farmer acquisition, showing a decrease at each stage from awareness to conversion." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsR0M0GpHr0XPFRpnP04DGKyhY5TRJz766t_7o-bJ_8RSClAoMK029i8Qrvlik3W-a7A1s0tJsZY_-OMIipb-ttHBbOqJmpLb6nn7UoNppSAT2d2ELaWubreU5bPLygJZdF5npWJEMrzNmio8xIK04GCpfanrlCjmg-KbQfXctZYQ1gUN6qeKLESmI-9j3Zbht0v9nr7Ud0IvRi4J8v4pc2cbxLXgnvV8ZSTiaDnDjIICphsEVYt9uSNzFfn6oNnQm6S8E3Mi4owU"/>
</div>
</div>
</aside>
</main>
</div>

    </>
  );
}
