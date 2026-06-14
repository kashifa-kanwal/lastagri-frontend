
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden">
<div className="flex h-full min-h-screen w-full">
{/* SideNavBar */}
<aside className="flex w-64 flex-col border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 p-4">
<div className="flex flex-col gap-4">
<div className="flex items-center gap-3">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="Profile picture of Ahmad Khan"></div>
<div className="flex flex-col">
<h1 className="text-[#333333] dark:text-gray-200 text-base font-medium leading-normal">Ahmad Khan</h1>
<p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">Farmer ID: AG12345</p>
</div>
</div>
<nav className="flex flex-col gap-2 mt-4">
<a className="flex items-center gap-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg" href="#">
<span className="material-symbols-outlined">dashboard</span>
<p className="text-sm font-medium leading-normal">Dashboard</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg" href="#">
<span className="material-symbols-outlined">receipt_long</span>
<p className="text-sm font-medium leading-normal">My Loans</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/20 dark:bg-primary/30 text-primary dark:text-white" href="#">
<span className="material-symbols-outlined">account_balance_wallet</span>
<p className="text-sm font-bold leading-normal">Wallet</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg" href="#">
<span className="material-symbols-outlined">storefront</span>
<p className="text-sm font-medium leading-normal">Marketplace</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg" href="#">
<span className="material-symbols-outlined">help_outline</span>
<p className="text-sm font-medium leading-normal">Support</p>
</a>
</nav>
</div>
<div className="mt-auto flex flex-col gap-1">
<a className="flex items-center gap-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg" href="#">
<span className="material-symbols-outlined">settings</span>
<p className="text-sm font-medium leading-normal">Settings</p>
</a>
</div>
</aside>
{/* Main Content Area */}
<main className="flex flex-1 flex-col items-center justify-center p-6">
<div className="flex flex-col w-full max-w-lg items-center text-center">
{/* EmptyState */}
<div className="flex flex-col items-center gap-6">
<img className="w-full max-w-[280px] h-auto" data-alt="An illustration of a friendly, empty piggy bank with a small sapling growing beside it." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxrFlbVPzPmS9OATq9qgtP6FiPCj648SZLjA5nzWPDw6qCfHWOjyhCUS5C7YP4O5Jan4B9trqzqOrfVvyJl6MIGgSZbugkKQrjPp20s7rzQRoz7dNtbmwcfe1OBObqMM-vpTOE4fiKaeZu_x9PZRADuoy-KWj0Zyvk9H1cDa1L9YQJyoJaipjekYHwLIh-t2OIbDSUSeajbPl911kguF-fNv_EQorbuS-dB2w1MlX2TtFSIHyNE1KhPk_T1RDPWJg12EOv4xNvgp8"/>
<div className="flex max-w-[480px] flex-col items-center gap-2">
<p className="text-[#333333] dark:text-gray-100 text-2xl font-bold leading-tight" dir="rtl">Koi transaction nahi</p>
<p className="text-gray-600 dark:text-gray-300 text-base font-normal leading-normal max-w-[480px] text-center" dir="rtl">Jab aap pehli qist ada karein ge, yahan record hoga.</p>
</div>
<button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
<span className="truncate" dir="rtl">Qiston ke bare mein janein</span>
</button>
</div>
</div>
</main>
</div>
</div>

    </>
  );
}
