
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="flex min-h-screen">
{/* SideNavBar */}
<aside className="flex flex-col w-64 bg-card-light dark:bg-card-dark border-r border-border-light dark:border-border-dark p-4">
<div className="flex items-center gap-3 mb-8">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="AgriConnect Logo"></div>
<div className="flex flex-col">
<h1 className="text-text-light dark:text-text-dark text-base font-bold leading-normal">AgriConnect</h1>
<p className="text-primary text-sm font-normal leading-normal">Supplier Portal</p>
</div>
</div>
<nav className="flex flex-col gap-2 flex-grow">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-background-light dark:hover:bg-background-dark text-subtext-light dark:text-subtext-dark" href="#">
<span className="material-symbols-outlined">dashboard</span>
<p className="text-sm font-medium leading-normal">Dashboard</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-background-light dark:hover:bg-background-dark text-subtext-light dark:text-subtext-dark" href="#">
<span className="material-symbols-outlined">shopping_cart</span>
<p className="text-sm font-medium leading-normal">Orders</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-background-light dark:hover:bg-background-dark text-subtext-light dark:text-subtext-dark" href="#">
<span className="material-symbols-outlined">inventory_2</span>
<p className="text-sm font-medium leading-normal">Products</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-background-light dark:hover:bg-background-dark text-subtext-light dark:text-subtext-dark" href="#">
<span className="material-symbols-outlined">analytics</span>
<p className="text-sm font-medium leading-normal">Analytics</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary" href="#">
<span className="material-symbols-outlined">account_circle</span>
<p className="text-sm font-medium leading-normal">Profile</p>
</a>
</nav>
<div className="flex flex-col gap-2">
<button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]">
<span className="truncate">Add New Product</span>
</button>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-background-light dark:hover:bg-background-dark text-subtext-light dark:text-subtext-dark" href="#">
<span className="material-symbols-outlined">settings</span>
<p className="text-sm font-medium leading-normal">Settings</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-background-light dark:hover:bg-background-dark text-subtext-light dark:text-subtext-dark" href="#">
<span className="material-symbols-outlined">logout</span>
<p className="text-sm font-medium leading-normal">Log out</p>
</a>
</div>
</aside>
{/* Main Content */}
<main className="flex-1 p-8">
<div className="max-w-7xl mx-auto">
{/* Profile Header */}
<div className="bg-card-light dark:bg-card-dark p-6 rounded-xl shadow-sm mb-8">
<div className="flex flex-col @container md:flex-row md:items-center md:justify-between gap-6">
<div className="flex items-center gap-6">
<div className="relative group">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-24 border-2 border-dashed border-border-light dark:border-border-dark" data-alt="Business Logo Upload Area"></div>
<div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
<span className="material-symbols-outlined text-white">photo_camera</span>
</div>
</div>
<div className="flex flex-col justify-center">
<p className="text-text-light dark:text-text-dark text-2xl font-bold leading-tight">Zameen Fresh Produce</p>
<div className="flex items-center gap-3 mt-1">
<span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-medium bg-accent/20 text-accent-dark">
<span className="material-symbols-outlined text-sm">verified</span>Verified
                                    </span>
<div className="flex items-center">
<span className="material-symbols-outlined text-accent text-lg">star</span>
<span className="material-symbols-outlined text-accent text-lg">star</span>
<span className="material-symbols-outlined text-accent text-lg">star</span>
<span className="material-symbols-outlined text-accent text-lg">star</span>
<span className="material-symbols-outlined text-accent text-lg">star_half</span>
<p className="text-subtext-light dark:text-subtext-dark text-sm ml-1">4.5/5</p>
</div>
</div>
<p className="text-subtext-light dark:text-subtext-dark text-sm mt-1">1,200 orders fulfilled</p>
</div>
</div>
</div>
</div>
{/* Tabs Navigation */}
<div className="border-b border-border-light dark:border-border-dark mb-8">
<nav className="flex gap-8 -mb-px">
<a className="flex items-center justify-center border-b-2 border-primary text-primary py-3 px-1" href="#">
<p className="text-sm font-bold tracking-wide">Business Info</p>
</a>
<a className="flex items-center justify-center border-b-2 border-transparent text-subtext-light dark:text-subtext-dark hover:border-gray-400 hover:text-text-light dark:hover:text-text-dark py-3 px-1" href="#">
<p className="text-sm font-bold tracking-wide">Bank Details</p>
</a>
<a className="flex items-center justify-center border-b-2 border-transparent text-subtext-light dark:text-subtext-dark hover:border-gray-400 hover:text-text-light dark:hover:text-text-dark py-3 px-1" href="#">
<p className="text-sm font-bold tracking-wide">Notification Settings</p>
</a>
<a className="flex items-center justify-center border-b-2 border-transparent text-subtext-light dark:text-subtext-dark hover:border-gray-400 hover:text-text-light dark:hover:text-text-dark py-3 px-1" href="#">
<p className="text-sm font-bold tracking-wide">Security</p>
</a>
<a className="flex items-center justify-center border-b-2 border-transparent text-subtext-light dark:text-subtext-dark hover:border-gray-400 hover:text-text-light dark:hover:text-text-dark py-3 px-1" href="#">
<p className="text-sm font-bold tracking-wide">Support</p>
</a>
</nav>
</div>
{/* Business Info Content */}
<div className="bg-card-light dark:bg-card-dark p-6 rounded-xl shadow-sm">
<h2 className="text-xl font-bold text-text-light dark:text-text-dark">Business Information</h2>
<p className="text-subtext-light dark:text-subtext-dark text-sm mt-1 mb-6">This information will be displayed to farmers on the platform. Please ensure it is accurate and up-to-date.</p>
<form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
<div>
<label className="block text-sm font-medium text-subtext-light dark:text-subtext-dark" htmlFor="business-name-en">Business Name (English)</label>
<input className="mt-1 block w-full rounded-md border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark shadow-sm focus:border-primary focus:ring-primary sm:text-sm" id="business-name-en" type="text" defaultValue="Zameen Fresh Produce"/>
</div>
<div>
<label className="block text-sm font-medium text-subtext-light dark:text-subtext-dark text-right" htmlFor="business-name-ur">کاروبار کا نام (اردو)</label>
<input className="mt-1 block w-full rounded-md border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark shadow-sm focus:border-primary focus:ring-primary sm:text-sm" dir="rtl" id="business-name-ur" type="text" defaultValue="زمین تازہ پیداوار"/>
</div>
<div>
<label className="block text-sm font-medium text-subtext-light dark:text-subtext-dark" htmlFor="contact-person">Owner / Contact Person</label>
<input className="mt-1 block w-full rounded-md border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark shadow-sm focus:border-primary focus:ring-primary sm:text-sm" id="contact-person" type="text" defaultValue="Ahmed Khan"/>
</div>
<div>
<label className="block text-sm font-medium text-subtext-light dark:text-subtext-dark" htmlFor="email">Email</label>
<input className="mt-1 block w-full rounded-md border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark shadow-sm focus:border-primary focus:ring-primary sm:text-sm" id="email" type="email" defaultValue="contact@zameenproduce.com"/>
</div>
<div>
<label className="block text-sm font-medium text-subtext-light dark:text-subtext-dark" htmlFor="phone">Phone</label>
<input className="mt-1 block w-full rounded-md border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark shadow-sm focus:border-primary focus:ring-primary sm:text-sm" id="phone" type="tel" defaultValue="+92 300 1234567"/>
</div>
<div>
<label className="block text-sm font-medium text-subtext-light dark:text-subtext-dark" htmlFor="address">Address</label>
<input className="mt-1 block w-full rounded-md border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark shadow-sm focus:border-primary focus:ring-primary sm:text-sm" id="address" type="text" defaultValue="123-A, Model Town, Lahore, Pakistan"/>
</div>
<div>
<label className="block text-sm font-medium text-subtext-light dark:text-subtext-dark" htmlFor="reg-number">Business Registration Number</label>
<input className="mt-1 block w-full rounded-md border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark shadow-sm focus:border-primary focus:ring-primary sm:text-sm" id="reg-number" type="text" defaultValue="REG-54321-XYZ"/>
</div>
<div>
<label className="block text-sm font-medium text-subtext-light dark:text-subtext-dark" htmlFor="tax-id">Tax ID</label>
<input className="mt-1 block w-full rounded-md border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark shadow-sm focus:border-primary focus:ring-primary sm:text-sm" id="tax-id" type="text" defaultValue="TAXID-98765-ABC"/>
</div>
<div className="md:col-span-2">
<label className="block text-sm font-medium text-subtext-light dark:text-subtext-dark" htmlFor="operating-hours">Operating Hours</label>
<input className="mt-1 block w-full rounded-md border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark shadow-sm focus:border-primary focus:ring-primary sm:text-sm" id="operating-hours" type="text" defaultValue="Mon - Sat, 9:00 AM - 6:00 PM"/>
</div>
<div className="md:col-span-2">
<label className="block text-sm font-medium text-subtext-light dark:text-subtext-dark">Product Categories</label>
<div className="mt-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
<label className="flex items-center gap-2">
<input defaultChecked="" className="h-4 w-4 rounded border-border-light dark:border-border-dark text-primary focus:ring-primary" type="checkbox"/>
<span className="text-sm">Vegetables</span>
</label>
<label className="flex items-center gap-2">
<input defaultChecked="" className="h-4 w-4 rounded border-border-light dark:border-border-dark text-primary focus:ring-primary" type="checkbox"/>
<span className="text-sm">Fruits</span>
</label>
<label className="flex items-center gap-2">
<input className="h-4 w-4 rounded border-border-light dark:border-border-dark text-primary focus:ring-primary" type="checkbox"/>
<span className="text-sm">Grains</span>
</label>
<label className="flex items-center gap-2">
<input className="h-4 w-4 rounded border-border-light dark:border-border-dark text-primary focus:ring-primary" type="checkbox"/>
<span className="text-sm">Dairy</span>
</label>
</div>
</div>
<div className="md:col-span-2">
<label className="block text-sm font-medium text-subtext-light dark:text-subtext-dark" htmlFor="description">Description (Apne business ke baare mein)</label>
<textarea className="mt-1 block w-full rounded-md border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark shadow-sm focus:border-primary focus:ring-primary sm:text-sm" id="description" rows="4">Providing the freshest, locally-sourced vegetables and fruits directly from farms to your business. We believe in quality, fair pricing, and supporting our local farming community.</textarea>
</div>
<div className="md:col-span-2 text-right">
<button className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-bold rounded-lg text-white bg-primary hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary" type="submit">
                                Save Changes
                            </button>
</div>
</form>
</div>
</div>
</main>
</div>

    </>
  );
}
