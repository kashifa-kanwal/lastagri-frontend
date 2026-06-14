
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="relative flex min-h-screen w-full">
{/* SideNavBar */}
<aside className="flex h-screen w-64 flex-col border-r border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-4 sticky top-0">
<div className="flex items-center gap-3 mb-8">
<div className="bg-primary/20 p-2 rounded-lg">
<span className="material-symbols-outlined text-primary text-3xl">agriculture</span>
</div>
<h1 className="text-text-light dark:text-text-dark text-xl font-bold">AgriConnect</h1>
</div>
<div className="flex flex-col gap-4 flex-1">
<div className="flex gap-3 items-center">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="Admin user avatar"></div>
<div className="flex flex-col">
<h1 className="text-text-light dark:text-text-dark text-base font-medium leading-normal">Admin User</h1>
<p className="text-muted-light dark:text-muted-dark text-sm font-normal leading-normal">Administrator</p>
</div>
</div>
<div className="flex flex-col gap-2">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent-light dark:hover:bg-accent-dark" href="#">
<span className="material-symbols-outlined text-text-light dark:text-text-dark">dashboard</span>
<p className="text-text-light dark:text-text-dark text-sm font-medium leading-normal">Dashboard</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-accent-light dark:bg-accent-dark" href="#">
<span className="material-symbols-outlined text-text-light dark:text-text-dark">list</span>
<p className="text-text-light dark:text-text-dark text-sm font-medium leading-normal">Supplier List</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent-light dark:hover:bg-accent-dark" href="#">
<span className="material-symbols-outlined text-text-light dark:text-text-dark">shopping_cart</span>
<p className="text-text-light dark:text-text-dark text-sm font-medium leading-normal">Orders</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent-light dark:hover:bg-accent-dark" href="#">
<span className="material-symbols-outlined text-text-light dark:text-text-dark">bar_chart</span>
<p className="text-text-light dark:text-text-dark text-sm font-medium leading-normal">Analytics</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent-light dark:hover:bg-accent-dark" href="#">
<span className="material-symbols-outlined text-text-light dark:text-text-dark">settings</span>
<p className="text-text-light dark:text-text-dark text-sm font-medium leading-normal">Settings</p>
</a>
</div>
</div>
<button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-text-light text-sm font-bold leading-normal tracking-[0.015em]">
<span className="truncate">New Report</span>
</button>
</aside>
{/* Main Content */}
<main className="flex-1 p-8 overflow-y-auto">
<div className="max-w-7xl mx-auto">
{/* Breadcrumbs */}
<div className="flex flex-wrap gap-2 mb-4">
<a className="text-muted-light dark:text-muted-dark text-sm font-medium leading-normal" href="#">Dashboard</a>
<span className="text-muted-light dark:text-muted-dark text-sm font-medium leading-normal">/</span>
<a className="text-muted-light dark:text-muted-dark text-sm font-medium leading-normal" href="#">Supplier List</a>
<span className="text-muted-light dark:text-muted-dark text-sm font-medium leading-normal">/</span>
<a className="text-muted-light dark:text-muted-dark text-sm font-medium leading-normal" href="#">Al-Falah Agro Supplies</a>
<span className="text-muted-light dark:text-muted-dark text-sm font-medium leading-normal">/</span>
<span className="text-text-light dark:text-text-dark text-sm font-medium leading-normal">Detailed Metrics</span>
</div>
{/* PageHeading */}
<div className="flex flex-wrap justify-between gap-4 items-center mb-6">
<div className="flex min-w-72 flex-col gap-2">
<p className="text-text-light dark:text-text-dark text-4xl font-black leading-tight tracking-[-0.033em]">Al-Falah Agro Supplies</p>
<p className="text-muted-light dark:text-muted-dark text-base font-normal leading-normal">Supplier ID: AFS-00123</p>
</div>
<button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 bg-accent-light dark:bg-accent-dark text-text-light dark:text-text-dark text-sm font-bold leading-normal tracking-[0.015em]">
<span className="material-symbols-outlined !text-xl">download</span>
<span className="truncate">Export Report</span>
</button>
</div>
{/* Tabs */}
<div className="pb-3 border-b border-border-light dark:border-border-dark mb-6">
<div className="flex gap-8">
<a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-muted-light dark:text-muted-dark pb-[13px] pt-4" href="#">
<p className="text-sm font-bold leading-normal tracking-[0.015em]">Overview</p>
</a>
<a className="flex flex-col items-center justify-center border-b-[3px] border-b-primary text-text-light dark:text-text-dark pb-[13px] pt-4" href="#">
<p className="text-sm font-bold leading-normal tracking-[0.015em]">Detailed Metrics</p>
</a>
<a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-muted-light dark:text-muted-dark pb-[13px] pt-4" href="#">
<p className="text-sm font-bold leading-normal tracking-[0.015em]">Compliance Documents</p>
</a>
</div>
</div>
{/* Controls/Chips */}
<div className="flex gap-3 mb-6">
<button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-accent-light dark:bg-accent-dark pl-4 pr-3">
<p className="text-text-light dark:text-text-dark text-sm font-medium leading-normal">Last 6 Months</p>
<span className="material-symbols-outlined !text-xl text-text-light dark:text-text-dark">expand_more</span>
</button>
<button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark pl-4 pr-3">
<p className="text-text-light dark:text-text-dark text-sm font-medium leading-normal">Last 12 Months</p>
</button>
<button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark pl-4 pr-3">
<p className="text-text-light dark:text-text-dark text-sm font-medium leading-normal">Custom Range</p>
</button>
</div>
{/* Main Dashboard Grid */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
{/* Spider Chart */}
<div className="lg:col-span-1 bg-card-light dark:bg-card-dark rounded-xl p-6 border border-border-light dark:border-border-dark">
<h3 className="text-lg font-bold text-text-light dark:text-text-dark mb-4">Overall Performance</h3>
<div className="flex items-center justify-center">
<img alt="Spider chart showing KPIs like stock accuracy, settlement adherence, delivery success, and sales growth against benchmarks." className="w-full h-auto" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvTj9EMgHD8BPgHYSQlt9LegxRUk42gtJEVxESS5hHk8wmZC3a_i6ClxMO1RmMJ5iZLnS8jbABCEUd3B74g2zrmviTWOWKkFuWr6mjzQb4Du83vtBC6HWCkUFIH92T_sDK4YltF7y5bhggpiOyURCyLNG0qKpwUV-eyr5YYSbqdCKFM-et5Tc0u7nMG2aaA307bplBHgstV276qmWEodUuF6mGoU0vDAoQsJ6RrQE9zZU5zPwTrHexkpDP8nIjAg3mxAoMGcuTY6k"/>
</div>
</div>
{/* Metrics Cards Container */}
<div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
{/* Inventory Management Card */}
<div className="bg-card-light dark:bg-card-dark rounded-xl p-6 border border-border-light dark:border-border-dark flex flex-col gap-4">
<h3 className="text-lg font-bold text-text-light dark:text-text-dark">Inventory Management</h3>
<div className="flex justify-between items-center">
<p className="text-muted-light dark:text-muted-dark text-sm">Stock Accuracy</p>
<div className="flex items-center gap-1">
<p className="text-2xl font-bold text-positive">98.5%</p>
<span className="material-symbols-outlined text-positive !text-lg">arrow_upward</span>
</div>
</div>
<div className="flex justify-between items-center">
<p className="text-muted-light dark:text-muted-dark text-sm">Out-of-Stock Incidents</p>
<div className="flex items-center gap-1">
<p className="text-2xl font-bold text-warning">12</p>
<span className="material-symbols-outlined text-warning !text-lg">arrow_downward</span>
</div>
</div>
<div className="flex justify-between items-center">
<p className="text-muted-light dark:text-muted-dark text-sm">Catalog Completeness</p>
<p className="text-2xl font-bold text-positive">95%</p>
</div>
</div>
{/* Financial Compliance Card */}
<div className="bg-card-light dark:bg-card-dark rounded-xl p-6 border border-border-light dark:border-border-dark flex flex-col gap-4">
<h3 className="text-lg font-bold text-text-light dark:text-text-dark">Financial Compliance</h3>
<div className="flex justify-between items-center">
<p className="text-muted-light dark:text-muted-dark text-sm">Settlement Adherence</p>
<p className="text-2xl font-bold text-positive">100%</p>
</div>
<div className="flex justify-between items-center">
<p className="text-muted-light dark:text-muted-dark text-sm">Payment Disputes</p>
<div className="flex items-center gap-1">
<p className="text-2xl font-bold text-negative">2</p>
<span className="material-symbols-outlined text-negative !text-lg">arrow_upward</span>
</div>
</div>
<div className="flex justify-between items-center">
<p className="text-muted-light dark:text-muted-dark text-sm">Tax Compliance</p>
<span className="text-sm font-semibold text-positive bg-positive/10 px-3 py-1 rounded-full">Compliant</span>
</div>
</div>
{/* Operational Efficiency Card */}
<div className="bg-card-light dark:bg-card-dark rounded-xl p-6 border border-border-light dark:border-border-dark flex flex-col gap-4">
<h3 className="text-lg font-bold text-text-light dark:text-text-dark">Operational Efficiency</h3>
<div className="flex justify-between items-center">
<p className="text-muted-light dark:text-muted-dark text-sm">Avg. Order Processing</p>
<p className="text-2xl font-bold text-positive">2.1 hrs</p>
</div>
<div className="flex justify-between items-center">
<p className="text-muted-light dark:text-muted-dark text-sm">Delivery Success Rate</p>
<p className="text-2xl font-bold text-positive">99.2%</p>
</div>
<div className="flex justify-between items-center">
<p className="text-muted-light dark:text-muted-dark text-sm">Packaging Quality</p>
<p className="text-2xl font-bold text-warning">4.2/5</p>
</div>
</div>
{/* Growth Metrics Card */}
<div className="bg-card-light dark:bg-card-dark rounded-xl p-6 border border-border-light dark:border-border-dark flex flex-col gap-4">
<h3 className="text-lg font-bold text-text-light dark:text-text-dark">Growth Metrics</h3>
<div className="flex justify-between items-center">
<p className="text-muted-light dark:text-muted-dark text-sm">MoM Sales Growth</p>
<p className="text-2xl font-bold text-positive">+15%</p>
</div>
<div className="flex justify-between items-center">
<p className="text-muted-light dark:text-muted-dark text-sm">New Customers</p>
<p className="text-2xl font-bold text-positive">128</p>
</div>
<div className="flex justify-between items-center">
<p className="text-muted-light dark:text-muted-dark text-sm">Repeat Business Rate</p>
<p className="text-2xl font-bold text-positive">78%</p>
</div>
</div>
</div>
{/* Performance Trend Chart */}
<div className="lg:col-span-3 bg-card-light dark:bg-card-dark rounded-xl p-6 border border-border-light dark:border-border-dark">
<h3 className="text-lg font-bold text-text-light dark:text-text-dark mb-4">Performance Trend: Sales &amp; Delivery</h3>
<div className="flex items-center justify-center">
<img alt="A line chart showing performance trends over the last 6 months for sales growth and delivery success rate." className="w-full h-auto object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCC1RvQQTTlQMGgQH0qa8PCk53ELv_xXNOCL-cXJNXXxJbxWtRNmhjS1CVHdTo8F-_3dl_byjf6MW04yH5eogTo0sWH9IfIY_NfBD9bab-p7YiFFvNswg-_a3KfzWSf_nnOUfnU9w-GUzbWO9cTTrpL7mj30nrXWglY-8AiV_RPbX6aNz7aNNskX-SNECydxsjwactWg_KN4Afx-0momTiDlH8MHcKUoV-TmZyt71CAqpCAI-giP1VZ1n0DLCZ1nAlBLUIEs4xsg-E"/>
</div>
</div>
{/* Benchmark Comparison Chart */}
<div className="lg:col-span-3 bg-card-light dark:bg-card-dark rounded-xl p-6 border border-border-light dark:border-border-dark">
<h3 className="text-lg font-bold text-text-light dark:text-text-dark mb-4">Benchmark Comparison</h3>
<div className="flex items-center justify-center">
<img alt="Bar chart comparing the supplier's metrics like stock accuracy and order processing time against the category average." className="w-full h-auto object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIJNkXX84jz7NJmxR5TWXROhH8fX7jOoSZy_q3BLE4zfqE-6xi6N6p-UyD9c_VhW9bqO6meOXC4Kmxyr6zRPT8-ObvM7HkTXFVQhc1ew6BoRMCxA6BITidpklC1ZuwsNQ_c_Z0FU7A8MSjw86qrQSj8CFB9JzhGc1wgEDHEUQZaZ-7immBWflIShMQaxuuKORmoC_DzhEX27lxX7QU3D4M5U8AdarZVavkd07n5zQrT3qdIOT7iKzOM9smX3lnNhzAZeNrmasT30s"/>
</div>
</div>
</div>
</div>
</main>
</div>

    </>
  );
}
