
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden">
<div className="layout-container flex h-full grow flex-col">
<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/20 dark:border-primary/40 px-6 md:px-10 py-3 bg-white/50 dark:bg-background-dark/50 backdrop-blur-sm sticky top-0 z-10">
<div className="flex items-center gap-8">
<div className="flex items-center gap-3 text-primary">
<span className="material-symbols-outlined text-3xl">agriculture</span>
<h2 className="text-text-light dark:text-text-dark text-xl font-bold leading-tight tracking-[-0.015em]">AgriConnect</h2>
</div>
</div>
<nav className="hidden md:flex flex-1 justify-center items-center gap-8">
<a className="text-text-light dark:text-text-dark text-sm font-medium leading-normal hover:text-primary dark:hover:text-accent" href="#">Dashboard</a>
<a className="text-text-light dark:text-text-dark text-sm font-medium leading-normal hover:text-primary dark:hover:text-accent" href="#">Orders</a>
<a className="text-primary dark:text-accent text-sm font-bold leading-normal border-b-2 border-primary dark:border-accent pb-1" href="#">Product Catalog</a>
<a className="text-text-light dark:text-text-dark text-sm font-medium leading-normal hover:text-primary dark:hover:text-accent" href="#">Payments</a>
<a className="text-text-light dark:text-text-dark text-sm font-medium leading-normal hover:text-primary dark:hover:text-accent" href="#">Analytics</a>
</nav>
<div className="flex items-center gap-4">
<button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 w-10 bg-primary/10 text-text-light dark:bg-white/10 dark:text-text-dark">
<span className="material-symbols-outlined">notifications</span>
</button>
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="User profile picture"></div>
</div>
</header>
<main className="flex flex-1 justify-center py-10 px-4">
<div className="flex flex-col w-full max-w-4xl flex-1 items-center justify-center">
<div className="flex flex-col items-center gap-8 p-8 md:p-12 bg-white/80 dark:bg-background-dark/60 rounded-xl shadow-sm border border-primary/10 dark:border-primary/30">
<div className="bg-center bg-no-repeat bg-contain rounded-xl w-full max-w-xs md:max-w-sm aspect-video" data-alt="Illustration of empty, well-lit store shelves ready to be filled with products"></div>
<div className="flex max-w-md flex-col items-center gap-3 text-center">
<h1 className="font-urdu text-text-light dark:text-text-dark text-3xl md:text-4xl font-bold leading-tight tracking-wide">اپنی پہلی پروڈکٹ شامل کریں</h1>
<div className="mt-4 flex flex-col gap-2 font-urdu text-text-light dark:text-text-dark text-base">
<p className="flex items-center gap-2 justify-center">
<span className="material-symbols-outlined text-accent text-xl">check_circle</span>
<span>ہزاروں کسانوں تک پہنچیں</span>
</p>
<p className="flex items-center gap-2 justify-center">
<span className="material-symbols-outlined text-accent text-xl">check_circle</span>
<span>فوراً پیمنٹ حاصل کریں</span>
</p>
<p className="flex items-center gap-2 justify-center">
<span className="material-symbols-outlined text-accent text-xl">check_circle</span>
<span>اپنا بزنس بڑھائیں</span>
</p>
</div>
</div>
<button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-wide gap-2 shadow-md hover:bg-primary/90 transition-colors">
<span className="material-symbols-outlined">add_circle</span>
<span className="truncate font-urdu text-lg">پروڈکٹ شامل کریں</span>
</button>
</div>
</div>
</main>
</div>
</div>

    </>
  );
}
