
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
<div className="layout-container flex h-full grow flex-col">
{/* TopNavBar */}
<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-border-light dark:border-border-dark px-6 md:px-10 py-3 bg-white dark:bg-[#1a2b15]">
<div className="flex items-center gap-4">
<div className="size-6 text-primary">
<svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor"></path>
</svg>
</div>
<h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">AgriConnect Help Center</h2>
</div>
<div className="flex flex-1 justify-end items-center gap-4">
<div className="flex gap-2">
<button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 w-10 bg-primary/10 dark:bg-primary/20 text-text-light dark:text-text-dark hover:bg-primary/20 dark:hover:bg-primary/30">
<span className="material-symbols-outlined text-xl">notifications</span>
</button>
<button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 w-10 bg-primary/10 dark:bg-primary/20 text-text-light dark:text-text-dark hover:bg-primary/20 dark:hover:bg-primary/30">
<span className="material-symbols-outlined text-xl">settings</span>
</button>
</div>
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="User profile picture"></div>
</div>
</header>
<main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
<div className="flex flex-col lg:flex-row gap-8">
{/* Main Content */}
<div className="w-full lg:w-2/3 flex flex-col gap-4">
{/* Breadcrumbs */}
<div className="flex flex-wrap gap-2">
<a className="text-primary text-sm font-medium leading-normal hover:underline" href="#">Help Center</a>
<span className="text-text-light/50 dark:text-text-dark/50 text-sm font-medium leading-normal">/</span>
<span className="text-text-light dark:text-text-dark text-sm font-medium leading-normal">Search Results</span>
</div>
{/* SearchBar */}
<div className="">
<label className="flex flex-col min-w-40 h-14 w-full">
<div className="flex w-full flex-1 items-stretch rounded-lg h-full">
<div className="text-primary flex border border-r-0 border-border-light dark:border-border-dark bg-white dark:bg-[#1a2b15] items-center justify-center pl-4 rounded-l-lg">
<span className="material-symbols-outlined text-2xl">search</span>
</div>
<input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-none text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border-y border-x-0 border-border-light dark:border-border-dark bg-white dark:bg-[#1a2b15] h-full placeholder:text-text-light/60 dark:placeholder:text-text-dark/60 pl-2 text-base font-normal leading-normal" placeholder="Search for answers..." defaultValue="loan"/>
<div className="flex items-center justify-center rounded-r-lg border border-l-0 border-border-light dark:border-border-dark bg-white dark:bg-[#1a2b15] pr-4">
<button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-transparent text-text-light dark:text-text-dark">
<span className="material-symbols-outlined text-2xl text-text-light/50 dark:text-text-dark/50">cancel</span>
</button>
</div>
</div>
</label>
</div>
{/* Filters & Results Count */}
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
{/* Chips/Filters */}
<div className="flex gap-2 overflow-x-auto pb-2">
<button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary/10 dark:bg-primary/20 px-4">
<p className="text-text-light dark:text-text-dark text-sm font-medium leading-normal">Filter by Category</p>
<span className="material-symbols-outlined text-lg">expand_more</span>
</button>
<button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary/10 dark:bg-primary/20 px-4">
<p className="text-text-light dark:text-text-dark text-sm font-medium leading-normal">Payments</p>
</button>
<button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary/10 dark:bg-primary/20 px-4">
<p className="text-text-light dark:text-text-dark text-sm font-medium leading-normal">Account</p>
</button>
<button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary/10 dark:bg-primary/20 px-4">
<p className="text-text-light dark:text-text-dark text-sm font-medium leading-normal">Orders</p>
</button>
</div>
<p className="text-text-light/80 dark:text-text-dark/80 text-sm font-normal leading-normal shrink-0">Showing 12 results for 'loan'</p>
</div>
{/* Search Results List */}
<div className="flex flex-col gap-4 pt-4">
{/* Article Result Card */}
<div className="bg-white dark:bg-[#1a2b15] p-6 rounded-lg border border-border-light dark:border-border-dark">
<div className="flex items-center justify-between mb-2">
<span className="inline-block bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary/90 text-xs font-semibold px-2.5 py-1 rounded-full">Payments</span>
</div>
<h3 className="text-lg font-semibold text-text-light dark:text-text-dark mb-2 hover:text-primary hover:underline cursor-pointer">How to Apply for a Shariah-Compliant Loan</h3>
<p className="text-sm text-text-light/80 dark:text-text-dark/80 leading-relaxed">...our platform simplifies the process of applying for a <mark className="bg-primary/20 rounded px-1">loan</mark> that adheres to Shariah principles. This guide will walk you through the necessary steps for a successful application...</p>
</div>
{/* Article Result Card with Admin Tag */}
<div className="bg-white dark:bg-[#1a2b15] p-6 rounded-lg border border-border-light dark:border-border-dark">
<div className="flex items-center justify-between mb-2">
<span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-2.5 py-1 rounded-full">API Reference</span>
<span className="inline-flex items-center gap-1.5 bg-gray-200 dark:bg-gray-700 text-text-light dark:text-text-dark text-xs font-medium px-2.5 py-1 rounded-full">
<span className="material-symbols-outlined text-sm">admin_panel_settings</span>
                    Admin
                  </span>
</div>
<h3 className="text-lg font-semibold text-text-light dark:text-text-dark mb-2 hover:text-primary hover:underline cursor-pointer">Loan Disbursement API Endpoint Guide</h3>
<p className="text-sm text-text-light/80 dark:text-text-dark/80 leading-relaxed">...use this endpoint to programmatically manage <mark className="bg-primary/20 rounded px-1">loan</mark> disbursements. Ensure you have the correct authentication tokens before making a request...</p>
</div>
{/* Article Result Card */}
<div className="bg-white dark:bg-[#1a2b15] p-6 rounded-lg border border-border-light dark:border-border-dark">
<div className="flex items-center justify-between mb-2">
<span className="inline-block bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary/90 text-xs font-semibold px-2.5 py-1 rounded-full">Account</span>
</div>
<h3 className="text-lg font-semibold text-text-light dark:text-text-dark mb-2 hover:text-primary hover:underline cursor-pointer">Checking Your Current Loan Status</h3>
<p className="text-sm text-text-light/80 dark:text-text-dark/80 leading-relaxed">...to view the status of your current <mark className="bg-primary/20 rounded px-1">loan</mark>, navigate to your dashboard. The 'My Loans' section will provide detailed information on your active and past applications...</p>
</div>
{/* No Results State (Example - can be toggled) */}
{/*
              <div className="bg-white dark:bg-[#1a2b15] text-center p-10 rounded-lg border border-border-light dark:border-border-dark">
                <span className="material-symbols-outlined text-5xl text-text-light/40 dark:text-text-dark/40 mb-4">search_off</span>
                <h3 className="text-xl font-semibold text-text-light dark:text-text-dark">No results found</h3>
                <p className="text-text-light/70 dark:text-text-dark/70 mt-2">Try searching for a different keyword or check your spelling.</p>
              </div>
              */}
</div>
</div>
{/* Right Sidebar - Contact Support */}
<aside className="w-full lg:w-1/3">
<div className="sticky top-8 bg-white dark:bg-[#1a2b15] p-6 rounded-lg border border-border-light dark:border-border-dark shadow-sm">
<h3 className="text-xl font-bold text-text-light dark:text-text-dark">Still need help?</h3>
<p className="text-lg text-text-light/70 dark:text-text-dark/70 mb-6">जवाब नहीं मिला?</p>
<div className="flex flex-col gap-4">
<a className="flex items-center gap-4 p-4 rounded-lg bg-background-light dark:bg-background-dark hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors" href="#">
<div className="flex items-center justify-center size-10 rounded-full bg-accent/10 text-accent">
<span className="material-symbols-outlined">smart_toy</span>
</div>
<span className="font-semibold">Chat with Bot</span>
</a>
<a className="flex items-center gap-4 p-4 rounded-lg bg-background-light dark:bg-background-dark hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors" href="#">
<div className="flex items-center justify-center size-10 rounded-full bg-primary/10 text-primary">
<span className="material-symbols-outlined">call</span>
</div>
<span className="font-semibold">Call Support</span>
</a>
<a className="flex items-center gap-4 p-4 rounded-lg bg-background-light dark:bg-background-dark hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors" href="#">
<div className="flex items-center justify-center size-10 rounded-full bg-primary/10 text-primary">
<span className="material-symbols-outlined">mail</span>
</div>
<span className="font-semibold">Email Support</span>
</a>
<a className="flex items-center gap-4 p-4 rounded-lg bg-background-light dark:bg-background-dark hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors" href="#">
<div className="flex items-center justify-center size-10 rounded-full bg-primary/10 text-primary">
<span className="material-symbols-outlined">chat</span>
</div>
<span className="font-semibold">WhatsApp Support</span>
</a>
</div>
</div>
</aside>
</div>
</main>
</div>
</div>

    </>
  );
}
