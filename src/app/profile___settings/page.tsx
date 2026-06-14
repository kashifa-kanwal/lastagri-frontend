
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
<div className="layout-container flex h-full grow flex-col">
<div className="px-4 sm:px-8 md:px-16 lg:px-40 flex flex-1 justify-center py-5">
<div className="layout-content-container flex flex-col w-full max-w-[960px] flex-1">
<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/20 px-10 py-3">
<div className="flex items-center gap-4 text-slate-800 dark:text-slate-200">
<div className="size-6 text-primary">
<svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
</svg>
</div>
<h2 className="text-slate-800 dark:text-slate-200 text-lg font-bold leading-tight tracking-[-0.015em]">AgriConnect</h2>
</div>
<div className="flex flex-1 justify-end gap-4 md:gap-8">
<nav className="hidden md:flex items-center gap-9">
<a className="text-slate-600 dark:text-slate-400 text-sm font-medium leading-normal" href="#">Dashboard</a>
<a className="text-slate-600 dark:text-slate-400 text-sm font-medium leading-normal" href="#">Loans</a>
<a className="text-slate-600 dark:text-slate-400 text-sm font-medium leading-normal" href="#">Marketplace</a>
<a className="text-primary dark:text-primary font-bold text-sm leading-normal" href="#">Profile</a>
</nav>
<button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 w-10 bg-primary/10 text-slate-800 dark:text-slate-200 gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0">
<span className="material-symbols-outlined text-xl">notifications</span>
</button>
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="User avatar image"></div>
</div>
</header>
<main className="flex flex-col gap-8 py-8 px-4 sm:px-10">
{/* Profile Header */}
<div className="flex p-4 @container">
<div className="flex w-full flex-col gap-4 @[520px]:flex-row @[520px]:justify-between @[520px]:items-center">
<div className="flex items-center gap-6">
<div className="relative shrink-0">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32" data-alt="Profile picture of Ahmad Khan"></div>
<button className="absolute bottom-1 right-1 flex items-center justify-center size-8 rounded-full bg-slate-900/60 text-white hover:bg-slate-900/80">
<span className="material-symbols-outlined text-lg">photo_camera</span>
</button>
</div>
<div className="flex flex-col justify-center gap-1">
<p className="text-slate-800 dark:text-slate-100 text-[22px] font-bold leading-tight tracking-[-0.015em]">Ahmad Khan</p>
<p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-normal">CNIC: XXXXX-XXX****-X</p>
<div className="flex items-center gap-1.5 text-primary text-base font-medium leading-normal">
<span className="material-symbols-outlined text-lg">verified</span>
<span>Verified</span>
</div>
</div>
</div>
</div>
</div>
{/* Accordions */}
<div className="flex flex-col gap-3">
<details className="flex flex-col rounded-xl border border-primary/20 bg-background-light dark:bg-background-dark/50 px-5 group" open="">
<summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-4">
<p className="text-slate-800 dark:text-slate-200 text-base font-medium leading-normal">Apni Tafseelaat (Your Details)</p>
<span className="material-symbols-outlined text-slate-500 dark:text-slate-400 group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<div className="flex flex-col divide-y divide-primary/10 pb-2">
<div className="flex items-center gap-4 py-3 justify-between">
<div className="flex items-center gap-4">
<div className="text-slate-800 dark:text-slate-200 flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-10"><span className="material-symbols-outlined">person</span></div>
<p className="text-slate-600 dark:text-slate-300 text-base font-normal leading-normal flex-1 truncate">Name: Ahmad Khan</p>
</div>
<button className="shrink-0 text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary"><span className="material-symbols-outlined">edit</span></button>
</div>
<div className="flex items-center gap-4 py-3 justify-between">
<div className="flex items-center gap-4">
<div className="text-slate-800 dark:text-slate-200 flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-10"><span className="material-symbols-outlined">call</span></div>
<p className="text-slate-600 dark:text-slate-300 text-base font-normal leading-normal flex-1 truncate">Phone: +92 300 1234567</p>
</div>
<button className="shrink-0 text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary"><span className="material-symbols-outlined">edit</span></button>
</div>
<div className="flex items-center gap-4 py-3 justify-between">
<div className="flex items-center gap-4">
<div className="text-slate-800 dark:text-slate-200 flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-10"><span className="material-symbols-outlined">mail</span></div>
<p className="text-slate-600 dark:text-slate-300 text-base font-normal leading-normal flex-1 truncate">Email: a.khan@email.com</p>
</div>
<button className="shrink-0 text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary"><span className="material-symbols-outlined">edit</span></button>
</div>
<div className="flex items-center gap-4 py-3 justify-between">
<div className="flex items-center gap-4">
<div className="text-slate-800 dark:text-slate-200 flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-10"><span className="material-symbols-outlined">home</span></div>
<p className="text-slate-600 dark:text-slate-300 text-base font-normal leading-normal flex-1 truncate">Address: Chak 72/GB, Punjab</p>
</div>
<button className="shrink-0 text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary"><span className="material-symbols-outlined">edit</span></button>
</div>
</div>
</details>
<details className="flex flex-col rounded-xl border border-primary/20 bg-background-light dark:bg-background-dark/50 px-5 group">
<summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-4">
<p className="text-slate-800 dark:text-slate-200 text-base font-medium leading-normal">Zameen ki Maloomat (Land Information)</p>
<span className="material-symbols-outlined text-slate-500 dark:text-slate-400 group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<div className="flex flex-col divide-y divide-primary/10 pb-2">
<div className="flex items-center gap-4 py-3"><div className="text-slate-800 dark:text-slate-200 flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-10"><span className="material-symbols-outlined">straighten</span></div><p className="text-slate-600 dark:text-slate-300">Size: 12.5 Acres</p></div>
<div className="flex items-center gap-4 py-3"><div className="text-slate-800 dark:text-slate-200 flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-10"><span className="material-symbols-outlined">grass</span></div><p className="text-slate-600 dark:text-slate-300">Crop: Wheat</p></div>
<div className="flex items-center gap-4 py-3"><div className="text-slate-800 dark:text-slate-200 flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-10"><span className="material-symbols-outlined">location_on</span></div><p className="text-slate-600 dark:text-slate-300">District: Faisalabad</p></div>
</div>
</details>
<details className="flex flex-col rounded-xl border border-primary/20 bg-background-light dark:bg-background-dark/50 px-5 group">
<summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-4">
<p className="text-slate-800 dark:text-slate-200 text-base font-medium leading-normal">Tasdeeq (Verification)</p>
<span className="material-symbols-outlined text-slate-500 dark:text-slate-400 group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pb-4 pt-2">
<div className="flex items-center gap-4 text-primary">
<div className="flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-10"><span className="material-symbols-outlined">shield</span></div>
<p className="font-medium">KYC Status: Verified</p>
</div>
<div className="ml-14 sm:ml-0 flex flex-col gap-2 items-start">
<p className="text-sm text-slate-500 dark:text-slate-400">CNIC Preview</p>
<img className="h-16 rounded-md border border-primary/20" data-alt="CNIC card preview thumbnail" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNguRVdrh-mJR9RNlb1O8XOQMG0nH-c3T7vNjqn42C8Iz9fYgKczqqtrWurfaNdZ5ZS5ttFcPi2LSkyVFE-l3S6rAEtDWNy_-ICObYNjkDAnkj9wAZ8cAYIkngqnHcnP5ftUXAJmlo34tLpx7IE3z4T0q6ap1wfx3ZcK-WgWSo_YFYYCrIt2UVqtqy0Y0yGTESM_sGMJy2tZrbOCYq_tzLuitxXJMkNmuQnk85OgBQB3lsXe4kM9XOcP4d8HvC1Ddi0iqdsDjXMJs"/>
</div>
</div>
</details>
<details className="flex flex-col rounded-xl border border-primary/20 bg-background-light dark:bg-background-dark/50 px-5 group">
<summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-4">
<p className="text-slate-800 dark:text-slate-200 text-base font-medium leading-normal">Bank Account</p>
<span className="material-symbols-outlined text-slate-500 dark:text-slate-400 group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 pt-2">
<div className="flex items-center gap-4">
<img className="h-10 w-10 bg-white p-1 rounded-full border border-primary/20 object-contain" data-alt="HBL bank logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBwsiiTelwu-HNqGbNsPz6OKJujmb6yZcHqwKsf0JPfBKL2EqqkHWIFTK29qwxH-A64p_OnZq0zcQaZytrmAKJSe1gX8vC3Y-F3fWD0E-bNqILSl3wcTCwEBsn7HxgjhC6tkkIAqJGEaxBw8Zmnr7KsY9LlZsTeQpNB83N8YmeU5k2bKxG62jTNwcbIgZHFdgxQ9fkBxWMcGtGbd-kIhEBe8qBp3PbueEhlD0jn7wSOSKv00b4pyE1h-T8xi6UKXl_L9bW13Oky_o"/>
<div className="flex flex-col">
<p className="text-slate-800 dark:text-slate-200 font-medium">Habib Bank Ltd.</p>
<p className="text-slate-500 dark:text-slate-400 text-sm">**** **** **** 5832</p>
</div>
</div>
<button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-5 bg-primary/10 text-slate-800 dark:text-slate-200 text-sm font-bold leading-normal tracking-[0.015em] w-full max-w-xs sm:w-auto">Change Account</button>
</div>
</details>
<details className="flex flex-col rounded-xl border border-primary/20 bg-background-light dark:bg-background-dark/50 px-5 group">
<summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-4">
<p className="text-slate-800 dark:text-slate-200 text-base font-medium leading-normal">Settings</p>
<span className="material-symbols-outlined text-slate-500 dark:text-slate-400 group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<div className="flex flex-col divide-y divide-primary/10 pb-2">
<div className="flex items-center justify-between py-3.5"><p className="text-slate-600 dark:text-slate-300">Language</p><div className="flex items-center gap-2 rounded-full bg-primary/10 p-1 text-sm font-bold"><button className="px-3 py-1 rounded-full bg-white dark:bg-slate-700 text-primary">English</button><button className="px-3 py-1 rounded-full text-slate-600 dark:text-slate-400">اردو</button></div></div>
<div className="flex items-center justify-between py-3.5"><p className="text-slate-600 dark:text-slate-300">Push Notifications</p><input defaultChecked="" className="toggle-switch relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 dark:bg-gray-700 transition-colors duration-200 ease-in-out focus:outline-none before:inline-block before:h-5 before:w-5 before:translate-y-0 before:transform before:rounded-full before:bg-white before:shadow before:ring-0 before:transition before:duration-200 before:ease-in-out" type="checkbox"/></div>
<div className="flex items-center justify-between py-3.5"><p className="text-slate-600 dark:text-slate-300">SMS Notifications</p><input className="toggle-switch relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 dark:bg-gray-700 transition-colors duration-200 ease-in-out focus:outline-none before:inline-block before:h-5 before:w-5 before:translate-y-0 before:transform before:rounded-full before:bg-white before:shadow before:ring-0 before:transition before:duration-200 before:ease-in-out" type="checkbox"/></div>
<div className="flex items-center justify-between py-3.5"><p className="text-slate-600 dark:text-slate-300">Theme</p><div className="flex items-center gap-1 rounded-full bg-primary/10 p-1 text-sm font-bold"><button className="px-3 py-1 rounded-full bg-white dark:bg-slate-700 text-primary"><span className="material-symbols-outlined text-base">light_mode</span></button><button className="px-3 py-1 rounded-full text-slate-600 dark:text-slate-400"><span className="material-symbols-outlined text-base">dark_mode</span></button><button className="px-3 py-1 rounded-full text-slate-600 dark:text-slate-400"><span className="material-symbols-outlined text-base">brightness_auto</span></button></div></div>
<div className="flex items-center justify-between py-3.5"><p className="text-slate-600 dark:text-slate-300">Voice Assistance</p><input defaultChecked="" className="toggle-switch relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 dark:bg-gray-700 transition-colors duration-200 ease-in-out focus:outline-none before:inline-block before:h-5 before:w-5 before:translate-y-0 before:transform before:rounded-full before:bg-white before:shadow before:ring-0 before:transition before:duration-200 before:ease-in-out" type="checkbox"/></div>
</div>
</details>
<details className="flex flex-col rounded-xl border border-primary/20 bg-background-light dark:bg-background-dark/50 px-5 group">
<summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-4">
<p className="text-slate-800 dark:text-slate-200 text-base font-medium leading-normal">Security</p>
<span className="material-symbols-outlined text-slate-500 dark:text-slate-400 group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<div className="flex flex-col divide-y divide-primary/10 pb-2">
<a className="flex items-center justify-between py-3.5 text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors" href="#"><p>Change PIN</p><span className="material-symbols-outlined">arrow_forward_ios</span></a>
<a className="flex items-center justify-between py-3.5 text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors" href="#"><p>Enable Biometric Verification</p><span className="material-symbols-outlined">arrow_forward_ios</span></a>
</div>
</details>
<details className="flex flex-col rounded-xl border border-primary/20 bg-background-light dark:bg-background-dark/50 px-5 group">
<summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-4">
<p className="text-slate-800 dark:text-slate-200 text-base font-medium leading-normal">Help &amp; Support</p>
<span className="material-symbols-outlined text-slate-500 dark:text-slate-400 group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<div className="flex flex-col divide-y divide-primary/10 pb-2">
<a className="flex items-center justify-between py-3.5 text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors" href="#"><p>FAQs</p><span className="material-symbols-outlined">arrow_forward_ios</span></a>
<a className="flex items-center justify-between py-3.5 text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors" href="#"><p>Contact Us</p><span className="material-symbols-outlined">arrow_forward_ios</span></a>
<a className="flex items-center justify-between py-3.5 text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors" href="#"><p>Rate App</p><span className="material-symbols-outlined">arrow_forward_ios</span></a>
</div>
</details>
<details className="flex flex-col rounded-xl border border-primary/20 bg-background-light dark:bg-background-dark/50 px-5 group">
<summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-4">
<p className="text-slate-800 dark:text-slate-200 text-base font-medium leading-normal">Legal</p>
<span className="material-symbols-outlined text-slate-500 dark:text-slate-400 group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<div className="flex flex-col divide-y divide-primary/10 pb-2">
<a className="flex items-center justify-between py-3.5 text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors" href="#"><p>Terms &amp; Conditions</p><span className="material-symbols-outlined">arrow_forward_ios</span></a>
<a className="flex items-center justify-between py-3.5 text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors" href="#"><p>Privacy Policy</p><span className="material-symbols-outlined">arrow_forward_ios</span></a>
</div>
</details>
</div>
{/* Logout Button */}
<div className="pt-6">
<button className="flex w-full min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-[#dc3545] text-white text-base font-bold leading-normal tracking-[0.015em] gap-2">
<span className="material-symbols-outlined">logout</span>
<span>Logout</span>
</button>
</div>
</main>
{/* Footer */}
<footer className="text-center py-6">
<p className="text-xs text-slate-400 dark:text-slate-500">Version 1.0.2</p>
</footer>
</div>
</div>
</div>
</div>

    </>
  );
}
