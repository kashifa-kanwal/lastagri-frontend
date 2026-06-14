
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="relative min-h-screen w-full overflow-hidden">
{/* Background App UI (Blurred and inactive) */}
<div className="absolute inset-0 filter blur-sm">
<div className="flex h-full w-full flex-col p-4">
<header className="flex h-16 shrink-0 items-center justify-between rounded-xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/20 p-4">
<div className="text-xl font-bold">AgriConnect</div>
<div className="flex items-center gap-4">
<div className="h-10 w-40 rounded bg-gray-200 dark:bg-gray-700"></div>
<div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700"></div>
</div>
</header>
<main className="mt-4 flex flex-1 gap-4">
<aside className="flex w-64 flex-col gap-2 rounded-xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/20 p-4">
<div className="h-8 rounded bg-gray-200 dark:bg-gray-700"></div>
<div className="h-8 rounded bg-gray-300 dark:bg-gray-600"></div>
<div className="h-8 rounded bg-gray-200 dark:bg-gray-700"></div>
<div className="h-8 rounded bg-gray-200 dark:bg-gray-700"></div>
</aside>
<div className="flex-1 rounded-xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/20 p-6">
<div className="h-40 w-40 rounded-full bg-gray-300 dark:bg-gray-600"></div>
<div className="mt-6 h-8 w-3/4 rounded bg-gray-200 dark:bg-gray-700"></div>
<div className="mt-4 h-6 w-1/2 rounded bg-gray-200 dark:bg-gray-700"></div>
</div>
</main>
</div>
</div>
{/* Tutorial Overlay */}
<div className="absolute inset-0 z-10 bg-background-dark/80">
<div className="relative h-full w-full">
{/* Step 1: Credit Gauge Spotlight */}
<div className="absolute left-[calc(50%-8rem)] top-64 h-48 w-48 rounded-full bg-background-light dark:bg-background-dark ring-4 ring-primary ring-offset-4 ring-offset-background-dark/80">
<div className="flex h-full w-full items-center justify-center p-6 text-center">
<div>
<p className="font-bold text-3xl text-text-light dark:text-text-dark">PKR 50,000</p>
<p className="text-text-muted-light dark:text-text-muted-dark">Available Sahulat</p>
</div>
</div>
</div>
{/* Hand Pointer Animation */}
<div className="absolute left-[calc(50%+1rem)] top-80 text-primary">
<span className="material-symbols-outlined text-6xl -rotate-45">pan_tool</span>
</div>

{/* Tooltip Card Container */}
<div className="absolute left-1/2 top-[calc(50%+10rem)] -translate-x-1/2 flex max-w-xl w-full flex-col items-center p-4 @container">
{/* Card Component */}
<div className="flex w-full flex-col items-stretch justify-start rounded-xl shadow-2xl bg-background-light dark:bg-background-dark border border-black/10 dark:border-white/10">
<div className="flex w-full grow flex-col items-stretch justify-center gap-4 p-6">
<h2 className="font-urdu text-center text-3xl font-bold leading-tight tracking-[-0.015em] text-text-light dark:text-text-dark">یہ آپ کی دستیاب سہولت ہے</h2>
<p className="text-center text-lg text-text-muted-light dark:text-text-muted-dark">This shows your credit limit for making purchases.</p>
{/* ProgressBar Component */}
<div className="flex flex-col gap-2 pt-2">
<div className="flex items-center justify-between">
<p className="text-sm font-medium text-text-muted-light dark:text-text-muted-dark">Step 1 of 6</p>
<div className="flex items-center gap-2">
<button className="flex h-8 w-8 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-primary/20 text-text-light dark:text-text-dark hover:bg-primary/30 disabled:opacity-50 disabled:cursor-not-allowed" disabled="">
<span className="material-symbols-outlined text-xl">arrow_back</span>
</button>
<button className="flex h-10 w-10 min-w-[2.5rem] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-primary text-text-light dark:text-text-dark font-medium shadow-lg hover:bg-primary/90">
<span className="material-symbols-outlined text-2xl">arrow_forward</span>
</button>
</div>
</div>
<div className="w-full rounded-full bg-primary/20"><div className="h-2 rounded-full bg-primary"></div></div>
</div>
</div>
</div>
{/* MetaText Component */}
<p className="text-text-muted-light dark:text-text-muted-dark text-sm font-normal leading-normal cursor-pointer pb-3 pt-4 text-center underline hover:text-text-light dark:hover:text-text-dark">Skip Tour</p>
</div>
</div>
</div>
</div>

    </>
  );
}
