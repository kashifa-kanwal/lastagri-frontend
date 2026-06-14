
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="relative flex min-h-screen w-full flex-col group/design-root">
<div className="layout-container flex h-full grow flex-col">
<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/20 px-6 sm:px-10 md:px-20 py-4">
<div className="flex items-center gap-4 text-primary">
<div className="size-8">
<svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
</svg>
</div>
<h2 className="text-xl font-bold leading-tight tracking-[-0.015em]">AgriConnect</h2>
</div>
<div className="flex items-center gap-6">
<a className="text-sm font-medium leading-normal text-text-light dark:text-text-dark hover:text-primary dark:hover:text-accent" href="#">Dashboard</a>
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="User profile picture"></div>
</div>
</header>
<main className="flex flex-1 justify-center py-5 sm:px-6 md:px-10">
<div className="layout-content-container flex flex-col w-full max-w-4xl flex-1 px-4">
<h1 className="text-text-light dark:text-text-dark tracking-light text-[32px] font-bold leading-tight text-center pb-3 pt-8">Help Center</h1>
<p className="text-text-light dark:text-text-dark/80 text-base font-normal leading-normal pb-6 pt-1 text-center">How can we help you today?</p>
<div className="px-4 py-3">
<label className="flex flex-col min-w-40 h-14 w-full">
<div className="flex w-full flex-1 items-stretch rounded-xl h-full shadow-sm bg-white dark:bg-background-dark/50">
<div className="text-primary flex items-center justify-center pl-4">
<span className="material-symbols-outlined text-2xl">search</span>
</div>
<input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-text-light dark:text-text-dark focus:outline-0 focus:ring-0 border-none bg-transparent h-full placeholder:text-text-light/50 dark:placeholder:text-text-dark/50 px-4 text-base font-normal leading-normal" placeholder="Apna sawal likhen" defaultValue=""/>
<div className="flex items-center pr-4">
<button className="flex items-center justify-center rounded-full text-text-light/70 dark:text-text-dark/70 hover:text-primary dark:hover:text-accent">
<span className="material-symbols-outlined text-2xl">mic</span>
</button>
</div>
</div>
</label>
</div>
<h2 className="text-text-light dark:text-text-dark text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-10">Popular Topics</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
<div className="flex flex-col items-center justify-center gap-3 rounded-xl bg-white dark:bg-background-dark/50 p-6 text-center shadow-sm hover:shadow-md transition-shadow cursor-pointer">
<div className="flex items-center justify-center size-12 rounded-full bg-accent/20 text-accent">
<span className="material-symbols-outlined text-3xl">person</span>
</div>
<h3 className="font-semibold text-text-light dark:text-text-dark">Account &amp; Registration</h3>
</div>
<div className="flex flex-col items-center justify-center gap-3 rounded-xl bg-white dark:bg-background-dark/50 p-6 text-center shadow-sm hover:shadow-md transition-shadow cursor-pointer">
<div className="flex items-center justify-center size-12 rounded-full bg-accent/20 text-accent">
<span className="material-symbols-outlined text-3xl">monitoring</span>
</div>
<h3 className="font-semibold text-text-light dark:text-text-dark">Credit &amp; Limits</h3>
</div>
<div className="flex flex-col items-center justify-center gap-3 rounded-xl bg-white dark:bg-background-dark/50 p-6 text-center shadow-sm hover:shadow-md transition-shadow cursor-pointer">
<div className="flex items-center justify-center size-12 rounded-full bg-accent/20 text-accent">
<span className="material-symbols-outlined text-3xl">inventory_2</span>
</div>
<h3 className="font-semibold text-text-light dark:text-text-dark">Ordering &amp; Delivery</h3>
</div>
<div className="flex flex-col items-center justify-center gap-3 rounded-xl bg-white dark:bg-background-dark/50 p-6 text-center shadow-sm hover:shadow-md transition-shadow cursor-pointer">
<div className="flex items-center justify-center size-12 rounded-full bg-accent/20 text-accent">
<span className="material-symbols-outlined text-3xl">payments</span>
</div>
<h3 className="font-semibold text-text-light dark:text-text-dark">Payments &amp; Installments</h3>
</div>
<div className="flex flex-col items-center justify-center gap-3 rounded-xl bg-white dark:bg-background-dark/50 p-6 text-center shadow-sm hover:shadow-md transition-shadow cursor-pointer">
<div className="flex items-center justify-center size-12 rounded-full bg-accent/20 text-accent">
<span className="material-symbols-outlined text-3xl">build</span>
</div>
<h3 className="font-semibold text-text-light dark:text-text-dark">Technical Issues</h3>
</div>
<div className="flex flex-col items-center justify-center gap-3 rounded-xl bg-white dark:bg-background-dark/50 p-6 text-center shadow-sm hover:shadow-md transition-shadow cursor-pointer">
<div className="flex items-center justify-center size-12 rounded-full bg-accent/20 text-accent">
<span className="material-symbols-outlined text-3xl">verified</span>
</div>
<h3 className="font-semibold text-text-light dark:text-text-dark">Shariah Compliance</h3>
</div>
</div>
<h2 className="text-text-light dark:text-text-dark text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-10">Recent Searches</h2>
<div className="flex flex-wrap gap-3 p-4">
<button className="cursor-pointer rounded-full bg-primary/20 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/30">Payment schedule</button>
<button className="cursor-pointer rounded-full bg-primary/20 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/30">How to increase credit?</button>
<button className="cursor-pointer rounded-full bg-primary/20 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/30">Delivery tracking</button>
</div>
</div>
</main>
<footer className="mt-auto border-t border-solid border-primary/20 px-6 sm:px-10 md:px-20 py-6 text-center text-sm text-text-light/70 dark:text-text-dark/70">
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
<a className="hover:text-primary dark:hover:text-accent" href="#">Contact Us</a>
<a className="hover:text-primary dark:hover:text-accent" href="#">Terms of Service</a>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-lg">language</span>
<select className="form-select bg-transparent border-none text-text-light/70 dark:text-text-dark/70 p-0 pr-6 focus:ring-0 focus:border-none cursor-pointer">
<option>English</option>
<option>Urdu</option>
</select>
</div>
</div>
</footer>
</div>
</div>

    </>
  );
}
