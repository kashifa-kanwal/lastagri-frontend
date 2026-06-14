
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden text-text-light dark:text-text-dark">
<div className="layout-container flex h-full grow flex-col">
<div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 flex flex-1 justify-center py-5">
<div className="layout-content-container flex flex-col max-w-[960px] flex-1">
{/* TopNavBar */}
<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-border-light dark:border-border-dark px-4 sm:px-6 lg:px-10 py-3">
<div className="flex items-center gap-4 text-text-light dark:text-text-dark">
<div className="size-6 text-primary">
<svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
</svg>
</div>
<h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">AgriConnect</h2>
</div>
<div className="hidden md:flex flex-1 justify-end gap-8">
<div className="flex items-center gap-9">
<a className="text-sm font-medium leading-normal" href="#">Dashboard</a>
<a className="text-sm font-medium leading-normal" href="#">Orders</a>
<a className="text-primary text-sm font-bold leading-normal border-b-2 border-primary pb-1" href="#">Insurance</a>
<a className="text-sm font-medium leading-normal" href="#">Wallet</a>
<a className="text-sm font-medium leading-normal" href="#">Support</a>
</div>
<button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]">
<span className="truncate">New Order</span>
</button>
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="User profile picture"></div>
</div>
<div className="md:hidden">
<button className="p-2">
<span className="material-symbols-outlined text-3xl">menu</span>
</button>
</div>
</header>
<main className="flex flex-col gap-8 mt-6 px-4">
{/* Overview Card */}
<div className="@container">
<div className="bg-cover bg-center flex flex-col justify-end overflow-hidden rounded-xl min-h-[260px] relative" data-alt="A lush green field under a clear sky">
<div className="absolute top-6 left-6 bg-primary/20 p-3 rounded-full">
<span className="material-symbols-outlined text-primary text-4xl">shield</span>
</div>
<div className="flex flex-col p-6 text-white">
<h1 className="font-urdu text-4xl font-bold tracking-light leading-tight">فصل بیمہ</h1>
<p className="font-urdu text-lg mt-1">اپنی فصل کو قدرتی آفت سے محفوظ رکھیں</p>
</div>
</div>
<div className="flex gap-3 p-3 flex-wrap mt-2">
<div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-primary/20 px-3 py-1">
<span className="material-symbols-outlined text-primary">flood</span>
<p className="text-sm font-medium leading-normal">Flood</p>
</div>
<div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-primary/20 px-3 py-1">
<span className="material-symbols-outlined text-primary">wb_sunny</span>
<p className="text-sm font-medium leading-normal">Drought</p>
</div>
<div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-primary/20 px-3 py-1">
<span className="material-symbols-outlined text-primary">ac_unit</span>
<p className="text-sm font-medium leading-normal">Hail</p>
</div>
<div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-primary/20 px-3 py-1">
<span className="material-symbols-outlined text-primary">bug_report</span>
<p className="text-sm font-medium leading-normal">Pest Infestation</p>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
<div className="lg:col-span-2 flex flex-col gap-8">
{/* How It Works */}
<div className="bg-card-light dark:bg-card-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
<h2 className="text-2xl font-bold tracking-[-0.015em] mb-6">How It Works</h2>
<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex flex-col items-center text-center max-w-32">
<div className="flex items-center justify-center size-12 bg-primary/20 rounded-full text-primary mb-2">
<span className="material-symbols-outlined">shopping_cart</span>
</div>
<p className="text-sm font-medium">1. Order on BNPL</p>
</div>
<div className="flex-1 h-px sm:h-auto sm:w-px bg-border-light dark:bg-border-dark sm:bg-transparent relative before:hidden sm:before:block before:absolute before:border-t-2 before:border-dashed before:border-border-light before:dark:border-border-dark before:w-full before:top-1/2 before:-translate-y-1/2"></div>
<div className="flex flex-col items-center text-center max-w-32">
<div className="flex items-center justify-center size-12 bg-primary/20 rounded-full text-primary mb-2">
<span className="material-symbols-outlined">add_task</span>
</div>
<p className="text-sm font-medium">2. Select Insurance</p>
</div>
<div className="flex-1 h-px sm:h-auto sm:w-px bg-border-light dark:bg-border-dark sm:bg-transparent relative before:hidden sm:before:block before:absolute before:border-t-2 before:border-dashed before:border-border-light before:dark:border-border-dark before:w-full before:top-1/2 before:-translate-y-1/2"></div>
<div className="flex flex-col items-center text-center max-w-32">
<div className="flex items-center justify-center size-12 bg-primary/20 rounded-full text-primary mb-2">
<span className="material-symbols-outlined">payments</span>
</div>
<p className="text-sm font-medium">3. Pay Small Premium</p>
</div>
<div className="flex-1 h-px sm:h-auto sm:w-px bg-border-light dark:bg-border-dark sm:bg-transparent relative before:hidden sm:before:block before:absolute before:border-t-2 before:border-dashed before:border-border-light before:dark:border-border-dark before:w-full before:top-1/2 before:-translate-y-1/2"></div>
<div className="flex flex-col items-center text-center max-w-32">
<div className="flex items-center justify-center size-12 bg-primary/20 rounded-full text-primary mb-2">
<span className="material-symbols-outlined">assignment_late</span>
</div>
<p className="text-sm font-medium">4. Submit Claim</p>
</div>
<div className="flex-1 h-px sm:h-auto sm:w-px bg-border-light dark:bg-border-dark sm:bg-transparent relative before:hidden sm:before:block before:absolute before:border-t-2 before:border-dashed before:border-border-light before:dark:border-border-dark before:w-full before:top-1/2 before:-translate-y-1/2"></div>
<div className="flex flex-col items-center text-center max-w-32">
<div className="flex items-center justify-center size-12 bg-primary/20 rounded-full text-primary mb-2">
<span className="material-symbols-outlined">credit_score</span>
</div>
<p className="text-sm font-medium">5. Get Coverage</p>
</div>
</div>
</div>
{/* Active Policy */}
<div className="bg-card-light dark:bg-card-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
<div className="flex justify-between items-start">
<div>
<h2 className="text-2xl font-bold tracking-[-0.015em] mb-1">Active Policy</h2>
<p className="text-sm text-text-light/70 dark:text-text-dark/70">Manage your current insurance plan</p>
</div>
<div className="flex items-center gap-2 bg-primary/10 text-primary rounded-full px-3 py-1 text-sm font-medium">
<div className="size-2 bg-primary rounded-full"></div>
<span>Active</span>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
<div>
<p className="text-sm text-text-light/70 dark:text-text-dark/70">Policy Number</p>
<p className="font-semibold mt-1">AGI-2024-CROP-108</p>
</div>
<div>
<p className="text-sm text-text-light/70 dark:text-text-dark/70">Coverage Amount</p>
<p className="font-semibold mt-1">₨ 150,000</p>
</div>
<div>
<p className="text-sm text-text-light/70 dark:text-text-dark/70">Premium</p>
<p className="font-semibold mt-1">₨ 500 / month</p>
</div>
<div>
<p className="text-sm text-text-light/70 dark:text-text-dark/70">Covered Period</p>
<p className="font-semibold mt-1">May '24 - Oct '24</p>
</div>
</div>
<div className="mt-6 pt-6 border-t border-border-light dark:border-border-dark flex justify-end">
<button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl h-10 px-4 bg-error-red text-white text-sm font-bold leading-normal tracking-[0.015em]">
<span className="material-symbols-outlined text-base">report</span>
<span className="truncate">Report Disaster &amp; Claim</span>
</button>
</div>
</div>
</div>
{/* Premium Calculator */}
<div className="lg:col-span-1 bg-primary/5 dark:bg-primary/10 p-6 rounded-xl border border-primary/20">
<h2 className="text-2xl font-bold tracking-[-0.015em] mb-4">Premium Calculator</h2>
<div className="space-y-4">
<div>
<label className="block text-sm font-medium mb-1" htmlFor="crop-type">Crop Type</label>
<select className="w-full rounded-lg border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark focus:border-primary focus:ring-primary" id="crop-type">
<option>Wheat</option>
<option>Rice</option>
<option>Cotton</option>
</select>
</div>
<div>
<label className="block text-sm font-medium mb-1" htmlFor="land-size">Land Size (in acres)</label>
<input className="w-full rounded-lg border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark focus:border-primary focus:ring-primary" id="land-size" type="number" defaultValue="5"/>
</div>
</div>
<div className="mt-6 bg-card-light dark:bg-card-dark rounded-lg p-4 text-center">
<p className="text-sm text-text-light/70 dark:text-text-dark/70">Estimated Premium</p>
<p className="font-urdu text-3xl font-bold text-primary mt-1">صرف ₨500/مہینہ</p>
<p className="text-xs text-text-light/70 dark:text-text-dark/70 mt-2">Coverage: ~₨150,000</p>
</div>
<button className="w-full mt-4 flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-11 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]">
<span className="truncate">Enroll in Fasal Bima</span>
</button>
</div>
</div>
{/* Claim Tracking */}
<div className="bg-card-light dark:bg-card-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
<h2 className="text-2xl font-bold tracking-[-0.015em] mb-6">Claim Status</h2>
<div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
<div className="relative flex-1 flex items-center">
<div className="absolute w-full h-1 bg-border-light dark:bg-border-dark top-1/2 -translate-y-1/2">
<div className="h-1 bg-primary w-1/2"></div>
</div>
<div className="relative flex items-center justify-between w-full">
<div className="flex flex-col items-center z-10">
<div className="flex items-center justify-center size-8 rounded-full bg-primary text-white"><span className="material-symbols-outlined text-lg">check</span></div>
<p className="text-xs mt-2 font-medium">Submitted</p>
</div>
<div className="flex flex-col items-center z-10">
<div className="flex items-center justify-center size-8 rounded-full bg-primary text-white"><span className="material-symbols-outlined text-lg">hourglass_top</span></div>
<p className="text-xs mt-2 font-medium">Under Review</p>
</div>
<div className="flex flex-col items-center z-10">
<div className="flex items-center justify-center size-8 rounded-full bg-border-light dark:bg-border-dark text-text-light/50 dark:text-text-dark/50"><span className="material-symbols-outlined text-lg">verified</span></div>
<p className="text-xs mt-2 text-text-light/50 dark:text-text-dark/50">Approved</p>
</div>
</div>
</div>
<div className="md:ml-12 md:pl-12 md:border-l border-border-light dark:border-border-dark text-center md:text-left">
<p className="text-sm text-text-light/70 dark:text-text-dark/70">Expected Decision In</p>
<p className="text-lg font-bold">7-10 Days</p>
</div>
</div>
</div>
{/* Educational Content */}
<div>
<h2 className="text-2xl font-bold tracking-[-0.015em] px-4 pb-3 pt-5">Learn More</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="bg-card-light dark:bg-card-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
<div className="relative aspect-video rounded-lg overflow-hidden mb-4">
<img alt="A farmer explaining something in a field" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9g_GcwCV0T36cOJKJr8glfqEnlCpveWVijzmb7Yalyf6RHKEWNvxLVBJUsWpvbSs-Xrlez8FNvBx-ocRUeGP-HJ7EZUYUB0FDOi6cHeowLYsUbq1-H6Mhd9H6JRjCAMh7TZ-Ai3fjCPyGCy5Tdh-9HJhGZxW4sI1pSxmHP159N-nVFVq5EwIcBKFMMjbd83ERhNpYckVcSSGwzNOitu3iFywcZr-uUhGAy-B6C1HmZZACKN5fSAtlWACg5vQIgrumlkqlR13y3dY"/>
<div className="absolute inset-0 bg-black/40 flex items-center justify-center">
<button className="size-16 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm">
<span className="material-symbols-outlined text-white text-5xl">play_arrow</span>
</button>
</div>
</div>
<h3 className="font-urdu text-xl font-bold">فصل بیمہ کیا ہے؟</h3>
<p className="text-sm text-text-light/70 dark:text-text-dark/70 mt-1">Watch this short video to understand the benefits of crop insurance.</p>
</div>
<div className="bg-card-light dark:bg-card-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
<h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
<div className="space-y-3">
<details className="group">
<summary className="flex items-center justify-between cursor-pointer font-medium list-none">
<span>How is the premium calculated?</span>
<span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
</summary>
<p className="text-sm mt-2 text-text-light/70 dark:text-text-dark/70">The premium is calculated based on your crop type, land size, and historical weather data for your region to assess risk.</p>
</details>
<hr className="border-border-light dark:border-border-dark"/>
<details className="group">
<summary className="flex items-center justify-between cursor-pointer font-medium list-none">
<span>What disasters are covered?</span>
<span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
</summary>
<p className="text-sm mt-2 text-text-light/70 dark:text-text-dark/70">We cover natural disasters like floods, droughts, hailstorms, and major pest infestations. Specific details are in the policy document.</p>
</details>
<hr className="border-border-light dark:border-border-dark"/>
<details className="group">
<summary className="flex items-center justify-between cursor-pointer font-medium list-none">
<span>How do I file a claim?</span>
<span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
</summary>
<p className="text-sm mt-2 text-text-light/70 dark:text-text-dark/70">You can file a claim directly from your dashboard by clicking the 'Report Disaster' button on your active policy card and uploading the required evidence.</p>
</details>
</div>
</div>
</div>
</div>
</main>
</div>
</div>
</div>
</div>

    </>
  );
}
