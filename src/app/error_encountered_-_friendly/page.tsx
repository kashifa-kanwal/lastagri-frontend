
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden text-text-light dark:text-text-dark">
<div className="layout-container flex h-full grow flex-col">
<header className="flex w-full items-center justify-start p-6 lg:p-8">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-3xl">agriculture</span>
<p className="font-bold text-lg text-text-light dark:text-text-dark">AgriConnect</p>
</div>
</header>
<main className="flex flex-1 items-center justify-center py-5">
<div className="layout-content-container flex flex-col items-center max-w-[960px] flex-1 px-4">
<div className="flex flex-col items-center gap-6 w-full">
<div className="bg-center bg-no-repeat aspect-video bg-contain rounded-xl w-full max-w-[360px]" data-alt="Friendly illustration of a farmer tending to a sapling, symbolizing care and fixing the issue."></div>
<div className="flex max-w-[480px] flex-col items-center gap-2 text-center">
<h1 className="text-text-light dark:text-text-dark text-3xl font-bold leading-tight tracking-[-0.015em]">Kuch ghalat ho gaya</h1>
<p className="text-text-light dark:text-text-dark text-base font-normal leading-normal">Hum is maslay ko hal kar rahay hain. Apkay taawun ka shukriya.</p>
</div>
<p className="text-primary/80 dark:text-primary/70 text-sm font-normal leading-normal text-center">Reference #ERR-40X</p>
<div className="flex w-full max-w-[480px] flex-col items-stretch gap-3 px-4 py-3">
<button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] w-full hover:bg-primary/90 transition-colors">
<span className="truncate">Try Again</span>
</button>
<button className="flex min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-4 bg-primary/20 text-text-light dark:bg-primary/30 dark:text-text-dark text-base font-bold leading-normal tracking-[0.015em] w-full hover:bg-primary/30 dark:hover:bg-primary/40 transition-colors">
<span className="material-symbols-outlined text-xl">support_agent</span>
<span className="truncate">Contact Support</span>
</button>
<button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 bg-transparent text-text-light dark:text-text-dark text-base font-bold leading-normal tracking-[0.015em] w-full hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors">
<span className="truncate">Go to Home</span>
</button>
</div>
</div>
</div>
</main>
</div>
</div>

    </>
  );
}
