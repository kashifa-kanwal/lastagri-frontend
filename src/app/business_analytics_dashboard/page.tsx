
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="relative flex min-h-screen w-full">
{/* SideNavBar */}
<aside className="sticky top-0 h-screen flex flex-col bg-card-light dark:bg-card-dark border-r border-border-light dark:border-border-dark w-64 shrink-0">
<div className="flex h-full min-h-0 flex-col justify-between p-4">
<div className="flex flex-col gap-4">
<div className="flex gap-3 items-center">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="AgriConnect company logo"></div>
<div className="flex flex-col">
<h1 className="text-base font-medium leading-normal text-text-light-primary dark:text-dark-primary">AgriConnect</h1>
<p className="text-sm font-normal leading-normal text-primary">Business Suite</p>
</div>
</div>
<nav className="flex flex-col gap-2 mt-4">
<a className="flex items-center gap-3 px-3 py-2 text-text-light-secondary dark:text-dark-secondary hover:bg-primary/10 hover:text-primary rounded-lg" href="#">
<span className="material-symbols-outlined">dashboard</span>
<p className="text-sm font-medium leading-normal">Dashboard</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-text-light-secondary dark:text-dark-secondary hover:bg-primary/10 hover:text-primary rounded-lg" href="#">
<span className="material-symbols-outlined">shopping_cart</span>
<p className="text-sm font-medium leading-normal">Orders</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-text-light-secondary dark:text-dark-secondary hover:bg-primary/10 hover:text-primary rounded-lg" href="#">
<span className="material-symbols-outlined">inventory_2</span>
<p className="text-sm font-medium leading-normal">Products</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-text-light-secondary dark:text-dark-secondary hover:bg-primary/10 hover:text-primary rounded-lg" href="#">
<span className="material-symbols-outlined">group</span>
<p className="text-sm font-medium leading-normal">Customers</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/20 text-primary" href="#">
<span className="material-symbols-outlined">pie_chart</span>
<p className="text-sm font-medium leading-normal">Analytics</p>
</a>
</nav>
</div>
<div className="flex flex-col gap-1">
<a className="flex items-center gap-3 px-3 py-2 text-text-light-secondary dark:text-dark-secondary hover:bg-primary/10 hover:text-primary rounded-lg" href="#">
<span className="material-symbols-outlined">settings</span>
<p className="text-sm font-medium leading-normal">Settings</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-text-light-secondary dark:text-dark-secondary hover:bg-primary/10 hover:text-primary rounded-lg" href="#">
<span className="material-symbols-outlined">help</span>
<p className="text-sm font-medium leading-normal">Support</p>
</a>
</div>
</div>
</aside>
{/* Main Content */}
<main className="flex-1 p-6 lg:p-8">
<div className="max-w-7xl mx-auto space-y-6">
{/* PageHeading */}
<div className="flex flex-wrap justify-between items-center gap-4">
<h1 className="text-4xl font-black tracking-[-0.033em]">Business Analytics Dashboard</h1>
<button className="flex min-w-[84px] items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
<span className="material-symbols-outlined">download</span>
<span className="truncate">Export Reports</span>
</button>
</div>
{/* Chips/Filters */}
<div className="flex gap-2 py-2 overflow-x-auto">
<button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-primary/20 text-primary px-4 text-sm font-medium">Today</button>
<button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark px-4 hover:bg-primary/10 text-sm font-medium">This Week</button>
<button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark px-4 hover:bg-primary/10 text-sm font-medium">This Month</button>
<button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark px-4 hover:bg-primary/10 text-sm font-medium">Quarter</button>
<button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark px-4 hover:bg-primary/10 text-sm font-medium">Year</button>
<button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark pl-4 pr-2 hover:bg-primary/10 text-sm font-medium">
                        Custom Range
                        <span className="material-symbols-outlined text-base">calendar_month</span>
</button>
</div>
{/* Stats/KPIs */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
<div className="flex flex-col gap-2 rounded-xl p-4 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark">
<p className="text-sm font-medium text-text-light-secondary dark:text-dark-secondary">Sales Revenue</p>
<p className="tracking-tight text-3xl font-bold">PKR 1.25M</p>
<div className="flex items-center gap-1 text-accent-green">
<span className="material-symbols-outlined text-lg">trending_up</span>
<p className="text-sm font-medium">+5.2%</p>
</div>
</div>
<div className="flex flex-col gap-2 rounded-xl p-4 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark">
<p className="text-sm font-medium text-text-light-secondary dark:text-dark-secondary">Order Volume</p>
<p className="tracking-tight text-3xl font-bold">850</p>
<div className="flex items-center gap-1 text-accent-red">
<span className="material-symbols-outlined text-lg">trending_down</span>
<p className="text-sm font-medium">-1.5%</p>
</div>
</div>
<div className="flex flex-col gap-2 rounded-xl p-4 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark">
<p className="text-sm font-medium text-text-light-secondary dark:text-dark-secondary">Avg. Order Value</p>
<p className="tracking-tight text-3xl font-bold">PKR 1,470</p>
<div className="flex items-center gap-1 text-accent-green">
<span className="material-symbols-outlined text-lg">trending_up</span>
<p className="text-sm font-medium">+2.1%</p>
</div>
</div>
<div className="flex flex-col gap-2 rounded-xl p-4 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark">
<p className="text-sm font-medium text-text-light-secondary dark:text-dark-secondary">New Customers</p>
<p className="tracking-tight text-3xl font-bold">120</p>
<div className="flex items-center gap-1 text-accent-green">
<span className="material-symbols-outlined text-lg">trending_up</span>
<p className="text-sm font-medium">+10%</p>
</div>
</div>
<div className="flex flex-col gap-2 rounded-xl p-4 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark">
<p className="text-sm font-medium text-text-light-secondary dark:text-dark-secondary">Repeat Customer Rate</p>
<p className="tracking-tight text-3xl font-bold">45%</p>
<div className="flex items-center gap-1 text-accent-green">
<span className="material-symbols-outlined text-lg">trending_up</span>
<p className="text-sm font-medium">+3%</p>
</div>
</div>
</div>
{/* Charts Grid */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
{/* Sales Performance */}
<div className="lg:col-span-2 flex flex-col gap-4 rounded-xl p-6 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark">
<p className="text-lg font-medium">Sales Performance</p>
<div className="flex min-h-[300px] flex-1 flex-col justify-end">
<svg fill="none" height="100%" preserveaspectratio="none" viewBox="-3 0 478 150" width="100%" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient gradientunits="userSpaceOnUse" id="chartGradient" x1="236" x2="236" y1="1" y2="149">
<stop stop-color="#006400" stop-opacity="0.3"></stop>
<stop offset="1" stop-color="#006400" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H0V109Z" fill="url(#chartGradient)"></path>
<path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25" stroke="#006400" strokeLinecap="round" strokeWidth="3"></path>
</svg>
</div>
<div className="flex justify-around text-xs font-bold text-text-light-secondary dark:text-dark-secondary">
<p>Mon</p><p>Tue</p><p>Wed</p><p>Thu</p><p>Fri</p><p>Sat</p><p>Sun</p>
</div>
</div>
{/* Product Performance */}
<div className="flex flex-col gap-4 rounded-xl p-6 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark">
<p className="text-lg font-medium">Product Category Performance</p>
<div className="grid grid-cols-5 min-h-[300px] items-end gap-3 px-3">
<div className="bg-primary/20 hover:bg-primary/40 w-full"></div>
<div className="bg-primary/20 hover:bg-primary/40 w-full"></div>
<div className="bg-primary/20 hover:bg-primary/40 w-full"></div>
<div className="bg-primary hover:bg-primary/90 w-full"></div>
<div className="bg-primary/20 hover:bg-primary/40 w-full"></div>
</div>
<div className="grid grid-cols-5 text-center text-xs font-bold text-text-light-secondary dark:text-dark-secondary">
<p>Seeds</p><p>Fertilizer</p><p>Pesticides</p><p>Tools</p><p>Other</p>
</div>
</div>
</div>
{/* Geographic and Customer Insights */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
{/* Geographic Insights */}
<div className="flex flex-col gap-4 rounded-xl p-6 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark">
<p className="text-lg font-medium">Geographic Insights</p>
<div className="bg-center bg-no-repeat aspect-video bg-cover rounded-lg" data-alt="A heatmap of Pakistan showing sales concentration in different districts."></div>
<div className="flex flex-col divide-y divide-border-light dark:divide-border-dark">
<div className="py-2 grid grid-cols-3 gap-4 text-sm font-semibold">
<span>District</span><span className="text-right">Orders</span><span className="text-right">Revenue</span>
</div>
<div className="py-2 grid grid-cols-3 gap-4 text-sm text-text-light-secondary dark:text-dark-secondary">
<span>Faisalabad</span><span className="text-right">120</span><span className="text-right">PKR 180K</span>
</div>
<div className="py-2 grid grid-cols-3 gap-4 text-sm text-text-light-secondary dark:text-dark-secondary">
<span>Sahiwal</span><span className="text-right">95</span><span className="text-right">PKR 152K</span>
</div>
<div className="py-2 grid grid-cols-3 gap-4 text-sm text-text-light-secondary dark:text-dark-secondary">
<span>Multan</span><span className="text-right">88</span><span className="text-right">PKR 135K</span>
</div>
</div>
</div>
{/* Customer Insights */}
<div className="flex flex-col gap-4 rounded-xl p-6 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark">
<p className="text-lg font-medium">Customer Insights</p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
<div>
<h3 className="font-semibold mb-2 text-center text-sm">Order Status</h3>
<div className="relative w-40 h-40 mx-auto">
<svg className="w-full h-full" viewBox="0 0 36 36">
<circle cx="18" cy="18" fill="transparent" r="15.9154943092" stroke="#34d399" strokeWidth="3"></circle>
<circle cx="18" cy="18" fill="transparent" r="15.9154943092" stroke="#fbbf24" stroke-dasharray="60 40" stroke-dashoffset="25" strokeWidth="3"></circle>
<circle cx="18" cy="18" fill="transparent" r="15.9154943092" stroke="#f87171" stroke-dasharray="30 70" stroke-dashoffset="65" strokeWidth="3"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-2xl font-bold">850</span>
<span className="text-xs text-text-light-secondary dark:text-dark-secondary">Total Orders</span>
</div>
</div>
<div className="mt-4 space-y-2 text-xs">
<div className="flex items-center justify-between"><span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-400"></span>Delivered</span> <strong>70%</strong></div>
<div className="flex items-center justify-between"><span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-400"></span>Shipped</span> <strong>20%</strong></div>
<div className="flex items-center justify-between"><span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-red-400"></span>Pending</span> <strong>10%</strong></div>
</div>
</div>
<div>
<h3 className="font-semibold mb-2 text-center text-sm">Payment Status</h3>
<div className="space-y-3">
<div>
<div className="flex justify-between text-xs mb-1"><span className="font-medium">Paid on Time</span><span>65%</span></div>
<div className="w-full bg-primary/20 rounded-full h-2"><div className="bg-accent-green h-2 rounded-full"></div></div>
</div>
<div>
<div className="flex justify-between text-xs mb-1"><span className="font-medium">Late</span><span>25%</span></div>
<div className="w-full bg-primary/20 rounded-full h-2"><div className="bg-accent-yellow h-2 rounded-full"></div></div>
</div>
<div>
<div className="flex justify-between text-xs mb-1"><span className="font-medium">Overdue</span><span>10%</span></div>
<div className="w-full bg-primary/20 rounded-full h-2"><div className="bg-accent-red h-2 rounded-full"></div></div>
</div>
</div>
</div>
</div>
</div>
</div>
{/* Feedback & Seasonal Trends */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
{/* Customer Feedback */}
<div className="flex flex-col gap-4 rounded-xl p-6 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark">
<p className="text-lg font-medium">Customer Rating Overview</p>
<div className="flex items-center gap-4 p-4 rounded-lg bg-primary/10">
<span className="text-4xl font-bold text-primary">4.8</span>
<div className="flex text-accent-yellow">
<span className="material-symbols-outlined">star</span>
<span className="material-symbols-outlined">star</span>
<span className="material-symbols-outlined">star</span>
<span className="material-symbols-outlined">star</span>
<span className="material-symbols-outlined">star_half</span>
</div>
<span className="text-sm text-text-light-secondary dark:text-dark-secondary ml-auto">Based on 520 reviews</span>
</div>
<div className="space-y-4">
<div className="flex gap-3">
<img alt="User avatar" className="w-10 h-10 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCItb-smZVIeXfzeHgoR46FJQ9uSuZUsZFUDXsfk2T-IzEP_YW_Pqbh6gP8Yg-DQNpyHDTMR9pKLdseAHdKr2FaTP_XoXWnbpQObZSQjsTjW9A-tiarCCkog7RsLP9JQN5yco2QAv82CZ2oo9voyYQBZ_sWvUHf_G5fjNd7wCG7bYGyXAbSxFZuUzJ6woDrSV3-3WT704ZwwB94EGp2NE3KvHR5QcM44P8IEV92WcauoHd2SJrMMA2o8HsUojT79pPErSYaq3mHyys"/>
<div>
<p className="font-semibold text-sm">Ahmed Khan</p>
<p className="text-sm text-text-light-secondary dark:text-dark-secondary">"Great service! The fertilizers arrived on time for the planting season."</p>
</div>
</div>
<div className="flex gap-3">
<img alt="User avatar" className="w-10 h-10 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABD6AjIjgxITfG5U_b_dXcE3A22Aky6Qop4qjLyah4ClI8l6l8KBhE-PBW1VNxTPBeeV0e-k77OXqE3_UP7Psl2Tmdlk0lBZMqm0POGgjyu3f_my7n94EkQEGFHk1OPrVSPDRI1J1WB56WseNOykZabgLph1eiqdRU5VlgOUXtixt4FXv1mzlce4rxkRkv0VJKvZblUZWbgw9tMREr_RjHMEBcENoy3jtL3Fihps5XQshW0mAonRtnqRotnAco70C6wrpTEqwnSZg"/>
<div>
<p className="font-semibold text-sm">Fatima Bibi</p>
<p className="text-sm text-text-light-secondary dark:text-dark-secondary">"The BNPL option is very helpful for managing my farm's cash flow."</p>
</div>
</div>
</div>
</div>
{/* Seasonal Trends */}
<div className="flex flex-col gap-4 rounded-xl p-6 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark">
<p className="text-lg font-medium">Seasonal Trends &amp; Recommendations</p>
<div className="flex min-h-[150px] flex-1 flex-col justify-end">
<svg fill="none" height="100%" preserveaspectratio="none" viewBox="0 0 500 100" width="100%" xmlns="http://www.w3.org/2000/svg">
<path d="M0 80 C41.6 80, 41.6 20, 83.3 20 C125 20, 125 60, 166.6 60 C208.3 60, 208.3 90, 250 90 C291.6 90, 291.6 30, 333.3 30 C375 30, 375 70, 416.6 70 C458.3 70, 458.3 10, 500 10" stroke="#006400" strokeLinecap="round" strokeWidth="2.5"></path>
</svg>
</div>
<div className="flex justify-between text-xs font-bold text-text-light-secondary dark:text-dark-secondary px-2">
<span>Jan</span><span>Mar</span><span>May</span><span>Jul</span><span>Sep</span><span>Nov</span>
</div>
<div className="flex items-start gap-3 p-3 rounded-lg bg-primary/10">
<span className="material-symbols-outlined text-primary mt-1">lightbulb</span>
<div>
<h4 className="font-semibold text-sm">Recommendation</h4>
<p className="text-sm text-text-light-secondary dark:text-dark-secondary">Peak demand for seeds and fertilizers is forecasted for May-July. Recommend increasing stock by 20% starting April.</p>
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
