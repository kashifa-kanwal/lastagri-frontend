
import React from 'react';

export default function Page() {
  return (
    <>
      



{/* Mock Application Background */}
<div className="w-full h-screen absolute inset-0">
<div className="p-8">
<h1 className="text-3xl font-bold mb-4">Dashboard</h1>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{/* Credit Limit Card */}
<div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg" id="credit-limit-element">
<h2 className="text-lg font-semibold mb-2">Credit Limit</h2>
<p className="text-4xl font-bold">PKR 50,000</p>
<p className="text-sm mt-1 text-gray-500 dark:text-gray-400">Available: PKR 35,000</p>
</div>
{/* Other dashboard cards */}
<div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg">
<h2 className="text-lg font-semibold mb-2">Recent Transactions</h2>
<p className="text-sm text-gray-500 dark:text-gray-400">No recent transactions.</p>
</div>
<div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg">
<h2 className="text-lg font-semibold mb-2">Suppliers</h2>
<p className="text-sm text-gray-500 dark:text-gray-400">View registered suppliers.</p>
</div>
</div>
</div>
</div>
{/* End Mock Application Background */}
{/* Tutorial Overlay System */}
<div className="relative w-full h-screen">
{/* Semi-transparent background overlay */}
<div className="absolute inset-0 bg-black/80 z-10"></div>
{/* Spotlight effect */}
<div className="absolute top-[108px] left-[32px] w-[calc(33.33%-16px)] h-[148px] z-20 rounded-lg ring-4 ring-primary ring-offset-4 ring-offset-black/80"></div>
{/* Tooltip Card */}
<div className="absolute top-[120px] left-[calc(33.33%+48px)] z-30 flex items-start">
{/* Arrow */}
<div className="w-6 h-6 bg-white dark:bg-gray-800 transform rotate-45 -mr-3 mt-8"></div>
{/* Card Content */}
<div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-sm overflow-hidden">
<div className="p-6">
<h1 className="text-gray-900 dark:text-white tracking-light text-[32px] font-bold leading-tight pb-3 pt-2 text-left">Yahan aap apni credit limit dekh saktay hain</h1>
<p className="text-gray-600 dark:text-gray-300 text-base font-normal leading-normal pb-3 pt-1">
                        This section shows your available credit and current balance. Keep an eye on this to manage your purchases effectively.
                    </p>
<div className="flex flex-col gap-3 py-4">
<div className="flex gap-6 justify-between items-center">
<p className="text-gray-700 dark:text-gray-400 text-base font-medium leading-normal">Step 1 of 6</p>
{/* Progress Dots */}
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
<div className="w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-gray-600"></div>
<div className="w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-gray-600"></div>
<div className="w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-gray-600"></div>
<div className="w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-gray-600"></div>
<div className="w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-gray-600"></div>
</div>
</div>
</div>
<div className="flex flex-1 gap-3 flex-wrap pt-3 justify-between items-center">
<button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-transparent text-gray-500 dark:text-gray-400 border border-gray-300 dark:border-gray-600 text-sm font-bold leading-normal tracking-[0.015em]">
<span className="truncate">Pichlay</span>
</button>
<button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-primary text-background-dark text-sm font-bold leading-normal tracking-[0.015em]">
<span className="truncate">Aagay</span>
</button>
</div>
</div>
<div className="bg-gray-50 dark:bg-gray-900/50 py-3">
<p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal text-center underline cursor-pointer">Skip Tour</p>
</div>
</div>
</div>
</div>

    </>
  );
}
