
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="flex h-screen w-full">
{/* Side Navigation */}
<aside className="flex w-64 flex-col gap-8 border-r border-black/10 dark:border-white/10 bg-background-light dark:bg-background-dark p-6">
<div className="flex items-center gap-3">
<div className="flex size-10 items-center justify-center rounded-full bg-primary/20">
<span className="material-symbols-outlined text-primary text-2xl">eco</span>
</div>
<div className="flex flex-col">
<h1 className="font-display text-base font-bold text-text-light dark:text-text-dark">AgriConnect</h1>
<p className="font-display text-xs text-text-light/70 dark:text-text-dark/70">Shariah Compliant BNPL</p>
</div>
</div>
<nav className="flex flex-col gap-2">
<a className="flex items-center gap-3 rounded-full px-4 py-2 text-sm font-medium hover:bg-primary/10 dark:hover:bg-primary/20" href="#">
<span className="material-symbols-outlined text-text-light dark:text-text-dark">dashboard</span>
<span>Dashboard</span>
</a>
<a className="flex items-center gap-3 rounded-full px-4 py-2 text-sm font-medium hover:bg-primary/10 dark:hover:bg-primary/20" href="#">
<span className="material-symbols-outlined text-text-light dark:text-text-dark">account_balance</span>
<span>Loans</span>
</a>
<a className="flex items-center gap-3 rounded-full bg-primary/20 px-4 py-2 text-sm font-bold text-text-light dark:text-text-dark" href="#">
<span className="material-symbols-outlined fill text-text-light dark:text-text-dark">notifications</span>
<span>Notifications</span>
</a>
<a className="flex items-center gap-3 rounded-full px-4 py-2 text-sm font-medium hover:bg-primary/10 dark:hover:bg-primary/20" href="#">
<span className="material-symbols-outlined text-text-light dark:text-text-dark">person</span>
<span>Profile</span>
</a>
</nav>
<div className="mt-auto flex flex-col gap-4 rounded-lg bg-primary/10 dark:bg-primary/20 p-4 text-center">
<h3 className="text-sm font-bold">Need Help?</h3>
<p className="text-xs">Our support team is here to assist you with any questions.</p>
<button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-primary text-background-dark text-sm font-bold tracking-[0.015em]">
<span className="truncate">Contact Support</span>
</button>
</div>
</aside>
{/* Main Content */}
<main className="flex-1 overflow-y-auto">
<div className="flex h-full w-full items-center justify-center p-8">
<div className="flex w-full max-w-lg flex-col items-center justify-center gap-6 text-center">
<img className="w-full max-w-xs rounded-xl" data-alt="Stylized vector illustration of a farmer resting peacefully under a tree in a green field, with a light blue sky." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1AlzTZTqCSsNLt1PCAPyr5F28CnMOd8jKGOV9fkn3YqkljKsb6SrOlAOpd-5XKxciAel93OSs2PXs6ZFtsUqbrubu9XD67Y6K6JposJaSFIkONsH9WMmu4kwzCP-9i5GGqZd1Pdfr-zhYABhqemF1rHM02tbv5TS9Q1UgV1x_RekOF6n9UA8uhcNvUmrboDZakH331_4PDj7e8iCBvZj1z71KBEFKipsqWKGSpeOUWI9oqxvDLo8IU4IB95KGLjuzDje-gRoP_N0"/>
<div className="flex flex-col items-center gap-2">
<h2 className="text-3xl font-bold leading-tight tracking-[-0.015em] text-text-light dark:text-text-dark">کوئی نئی اطلاع نہیں</h2>
<p className="max-w-md text-base font-normal leading-normal text-text-light/80 dark:text-text-dark/80">سب ٹھیک ہے! جب کچھ نیا ہوگا، ہم آپ کو بتائیں گے</p>
</div>
<button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary/20 text-text-light dark:text-text-dark text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/30">
<span className="truncate">Refresh</span>
</button>
</div>
</div>
</main>
</div>

    </>
  );
}
