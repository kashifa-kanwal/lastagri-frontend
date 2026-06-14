
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="relative flex min-h-screen w-full">
{/* SideNavBar */}
<aside className="flex h-screen w-64 flex-col justify-between border-r border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-4 sticky top-0">
<div className="flex flex-col gap-4">
<div className="flex items-center gap-3 p-2">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="AgriConnect Logo"></div>
<div className="flex flex-col">
<h1 className="text-base font-bold">AgriSupply Co.</h1>
<p className="text-sm text-gray-500 dark:text-gray-400">supplier@agrisupply.com</p>
</div>
</div>
<nav className="flex flex-col gap-2 mt-4">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10" href="#">
<span className="material-symbols-outlined text-lg">dashboard</span>
<p className="text-sm font-medium">Dashboard</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/20 text-primary" href="#">
<span className="material-symbols-outlined text-lg">package_2</span>
<p className="text-sm font-medium">Orders</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10" href="#">
<span className="material-symbols-outlined text-lg">inventory_2</span>
<p className="text-sm font-medium">Products</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10" href="#">
<span className="material-symbols-outlined text-lg">credit_card</span>
<p className="text-sm font-medium">Settlements</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10" href="#">
<span className="material-symbols-outlined text-lg">person</span>
<p className="text-sm font-medium">Profile</p>
</a>
</nav>
</div>
<div className="flex flex-col gap-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10" href="#">
<span className="material-symbols-outlined text-lg">settings</span>
<p className="text-sm font-medium">Settings</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10" href="#">
<span className="material-symbols-outlined text-lg">logout</span>
<p className="text-sm font-medium">Log out</p>
</a>
</div>
</aside>
{/* Main Content */}
<main className="flex-1 p-6 lg:p-8">
<div className="mx-auto max-w-7xl">
{/* PageHeading */}
<div className="flex flex-wrap items-start justify-between gap-4">
<div className="flex min-w-72 flex-col gap-2">
<p className="text-4xl font-black leading-tight tracking-tight">Order ID: #AG-18364</p>
<p className="text-base text-gray-500 dark:text-gray-400">Order Date: 12 August 2024</p>
</div>
{/* Chips */}
<div className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-accent/20 px-4">
<p className="text-sm font-medium text-accent">Status: Packed</p>
</div>
</div>
{/* ProgressBar */}
<div className="mt-6 flex flex-col gap-3 rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark p-6 shadow-sm">
<div className="flex gap-6 justify-between">
<p className="text-base font-medium">Placed → Packed → Dispatched → Delivered</p>
</div>
<div className="w-full rounded-full bg-primary/20 h-2">
<div className="h-2 rounded-full bg-primary"></div>
</div>
</div>
<div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
<div className="flex flex-col gap-8 lg:col-span-2">
{/* Customer Information Card */}
<div className="flex flex-col rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark p-6 shadow-sm">
<h3 className="text-lg font-bold">Customer Information</h3>
<div className="mt-4 grid grid-cols-1 gap-y-4 gap-x-6 sm:grid-cols-2">
<div>
<p className="text-sm font-medium text-gray-500 dark:text-gray-400">Farmer Name</p>
<p className="mt-1">Aurangzeb Khan</p>
</div>
<div>
<p className="text-sm font-medium text-gray-500 dark:text-gray-400">CNIC</p>
<p className="mt-1">37405-1234567-8</p>
</div>
<div>
<p className="text-sm font-medium text-gray-500 dark:text-gray-400">Phone</p>
<div className="flex items-center gap-2 mt-1">
<p>+92 300 1234567</p>
<button className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-primary/20 text-primary hover:bg-primary/30">
<span className="material-symbols-outlined text-base">call</span>
</button>
</div>
</div>
<div>
<p className="text-sm font-medium text-gray-500 dark:text-gray-400">Primary Crop</p>
<p className="mt-1">Cotton</p>
</div>
<div className="sm:col-span-2">
<p className="text-sm font-medium text-gray-500 dark:text-gray-400">Delivery Address</p>
<div className="flex items-start justify-between gap-2 mt-1">
<p>Chak 52/DB, Yazman, Bahawalpur, Punjab</p>
<button className="flex shrink-0 items-center justify-center gap-2 overflow-hidden rounded-lg h-9 px-4 bg-primary text-white text-sm font-medium leading-normal hover:bg-primary/90">
<span className="material-symbols-outlined text-base">map</span>
<span className="truncate">View on map</span>
</button>
</div>
</div>
</div>
</div>
{/* Order Items Card */}
<div className="flex flex-col rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark p-6 shadow-sm">
<h3 className="text-lg font-bold">Order Items</h3>
<div className="mt-4 -mx-6 flow-root">
<div className="overflow-x-auto">
<table className="min-w-full divide-y divide-border-light dark:divide-border-dark">
<thead className="bg-gray-50 dark:bg-white/5">
<tr>
<th className="py-3.5 pl-6 pr-3 text-left text-sm font-semibold" scope="col">Product</th>
<th className="px-3 py-3.5 text-left text-sm font-semibold" scope="col">Quantity</th>
<th className="px-3 py-3.5 text-left text-sm font-semibold" scope="col">Unit Price</th>
<th className="px-3 py-3.5 text-right text-sm font-semibold pr-6" scope="col">Subtotal</th>
</tr>
</thead>
<tbody className="divide-y divide-border-light dark:divide-border-dark">
<tr>
<td className="whitespace-nowrap py-4 pl-6 pr-3 text-sm">
<div className="flex items-center gap-3">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-md size-10" data-alt="Fertilizer bag"></div>
<span className="font-medium">Urea Fertilizer (50kg Bag)</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-4 text-sm">10</td>
<td className="whitespace-nowrap px-3 py-4 text-sm">Rs 1,500.00</td>
<td className="whitespace-nowrap px-3 py-4 text-sm text-right pr-6">Rs 15,000.00</td>
</tr>
<tr>
<td className="whitespace-nowrap py-4 pl-6 pr-3 text-sm">
<div className="flex items-center gap-3">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-md size-10" data-alt="Pesticide bottle"></div>
<span className="font-medium">High-Grade Pesticide (1L)</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-4 text-sm">5</td>
<td className="whitespace-nowrap px-3 py-4 text-sm">Rs 2,000.00</td>
<td className="whitespace-nowrap px-3 py-4 text-sm text-right pr-6">Rs 10,000.00</td>
</tr>
</tbody>
<tfoot>
<tr>
<th className="pl-6 pr-3 pt-4 text-right text-sm font-semibold sm:table-cell" colspan="3" scope="row">Total</th>
<td className="pl-3 pr-6 pt-4 text-right text-sm font-bold">Rs 25,000.00</td>
</tr>
</tfoot>
</table>
</div>
</div>
</div>
{/* Payment Information Card */}
<div className="flex flex-col rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark p-6 shadow-sm">
<h3 className="text-lg font-bold">Payment Information</h3>
<div className="mt-4 grid grid-cols-1 gap-y-4 gap-x-6 sm:grid-cols-2">
<div>
<p className="text-sm font-medium text-gray-500 dark:text-gray-400">Payment Method</p>
<p className="mt-1 font-semibold">BNPL - AgriConnect Guaranteed</p>
</div>
<div>
<p className="text-sm font-medium text-gray-500 dark:text-gray-400">Installment Plan</p>
<p className="mt-1">3 Monthly Installments</p>
</div>
<div className="sm:col-span-2">
<p className="text-sm font-medium text-gray-500 dark:text-gray-400">Settlement Status</p>
<div className="flex items-center gap-2 mt-1">
<span className="material-symbols-outlined text-primary">check_circle</span>
<p className="font-medium text-primary">Paid to Supplier on 14 August 2024</p>
</div>
<p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Transaction ID: SET-XYZ-987654321</p>
</div>
</div>
</div>
</div>
<div className="flex flex-col gap-8 lg:col-span-1">
{/* Action Panel Card */}
<div className="rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark p-6 shadow-sm sticky top-8">
<h3 className="text-lg font-bold">Action Panel</h3>
<div className="mt-4 flex flex-col gap-4">
<div>
<label className="block text-sm font-medium" htmlFor="status">Update Status</label>
<select className="mt-1 block w-full rounded-md border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark py-2 pl-3 pr-10 text-base focus:border-primary focus:outline-none focus:ring-primary sm:text-sm" id="status" name="status">
<option>Placed</option>
<option selected="">Packed</option>
<option>Dispatched</option>
<option>Delivered</option>
</select>
</div>
<div>
<label className="block text-sm font-medium" htmlFor="tracking-number">Tracking Number</label>
<input className="mt-1 block w-full rounded-md border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark shadow-sm focus:border-primary focus:ring-primary sm:text-sm" id="tracking-number" name="tracking-number" placeholder="Enter tracking number" type="text"/>
</div>
<div>
<label className="block text-sm font-medium">Delivery Proof</label>
<button className="mt-1 flex w-full justify-center rounded-md border-2 border-dashed border-border-light dark:border-border-dark px-6 py-4 text-sm font-semibold text-gray-500 dark:text-gray-400 hover:border-primary hover:text-primary" type="button">
<div className="text-center">
<span className="material-symbols-outlined mx-auto text-3xl">upload_file</span>
<p className="mt-1">Upload delivery proof</p>
</div>
</button>
</div>
<button className="w-full flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-medium leading-normal hover:bg-primary/90">
<span className="truncate">Save Status</span>
</button>
<div className="mt-2 flex items-center gap-4">
<button className="flex-1 text-sm font-medium text-destructive hover:underline">Cancel order</button>
<button className="flex-1 text-sm font-medium text-primary hover:underline">Print invoice</button>
</div>
</div>
</div>
{/* Order Timeline Card */}
<div className="rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark p-6 shadow-sm">
<h3 className="text-lg font-bold">Order Timeline</h3>
<ol className="mt-4 relative border-l border-border-light dark:border-border-dark ml-2">
<li className="mb-6 ml-6">
<span className="absolute -left-[13px] flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
<span className="material-symbols-outlined text-sm">check</span>
</span>
<h4 className="flex items-center mb-1 text-base font-semibold">Packed</h4>
<time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">August 12, 2024, 02:30 PM</time>
</li>
<li className="mb-6 ml-6">
<span className="absolute -left-[13px] flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
<span className="material-symbols-outlined text-sm">check</span>
</span>
<h4 className="flex items-center mb-1 text-base font-semibold">Payment Confirmed</h4>
<time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">August 12, 2024, 11:05 AM</time>
</li>
<li className="ml-6">
<span className="absolute -left-[13px] flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
<span className="material-symbols-outlined text-sm">check</span>
</span>
<h4 className="flex items-center mb-1 text-base font-semibold">Order Placed</h4>
<time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">August 12, 2024, 11:00 AM</time>
</li>
</ol>
</div>
</div>
</div>
</div>
</main>
</div>

    </>
  );
}
