
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="flex h-screen">
{/* SideNavBar */}
<aside className="flex w-64 flex-col border-r border-gray-200 bg-white p-4 font-display dark:border-gray-700 dark:bg-background-dark">
<div className="flex flex-col gap-4">
<div className="flex items-center gap-3">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="AgriConnect logo featuring a green leaf"></div>
<div className="flex flex-col">
<h1 className="text-charcoal-grey dark:text-gray-200 text-base font-medium leading-normal">AgriConnect</h1>
<p className="text-primary/80 dark:text-primary/90 text-sm font-normal leading-normal">Shariah Compliant BNPL</p>
</div>
</div>
<nav className="mt-4 flex flex-col gap-2">
<a className="flex items-center gap-3 rounded-lg px-3 py-2 text-charcoal-grey dark:text-gray-300 hover:bg-background-light dark:hover:bg-gray-800" href="#">
<span className="material-symbols-outlined">dashboard</span>
<p className="text-sm font-medium leading-normal">Dashboard</p>
</a>
<a className="flex items-center gap-3 rounded-lg px-3 py-2 text-charcoal-grey dark:text-gray-300 hover:bg-background-light dark:hover:bg-gray-800" href="#">
<span className="material-symbols-outlined">storefront</span>
<p className="text-sm font-medium leading-normal">Marketplace</p>
</a>
<a className="flex items-center gap-3 rounded-lg bg-primary/20 px-3 py-2 text-primary dark:bg-primary/30 dark:text-primary" href="#">
<span className="material-symbols-outlined">receipt_long</span>
<p className="text-sm font-medium leading-normal">Orders</p>
</a>
<a className="flex items-center gap-3 rounded-lg px-3 py-2 text-charcoal-grey dark:text-gray-300 hover:bg-background-light dark:hover:bg-gray-800" href="#">
<span className="material-symbols-outlined">account_balance_wallet</span>
<p className="text-sm font-medium leading-normal">Payments</p>
</a>
<a className="flex items-center gap-3 rounded-lg px-3 py-2 text-charcoal-grey dark:text-gray-300 hover:bg-background-light dark:hover:bg-gray-800" href="#">
<span className="material-symbols-outlined">account_circle</span>
<p className="text-sm font-medium leading-normal">Profile</p>
</a>
</nav>
</div>
<div className="mt-auto">
<button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary h-10 px-4 text-white text-sm font-bold leading-normal tracking-[0.015em]">
<span className="truncate">New Order</span>
</button>
</div>
</aside>
{/* Main Content Area */}
<main className="flex flex-1 items-center justify-center p-6">
<div className="flex flex-col items-center gap-6 text-center">
{/* Illustration */}
<div className="w-full max-w-sm">
<img alt="Illustration of a farmer looking thoughtfully at an empty basket in a field, with warm, soft tones." className="w-full h-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD300kBnjLYo_uy_yn0Zf-bFfImTzPJCqKgPopH7QapBWm1dA3KBFI4NcZhE2MtCyhm1J-ZoxJQtJzfJruMo07sw6NpTeT9Bw5jyjvGUHueKD0sXu7q_pcbFiidh6O-yUnE9nsKCuSmw0IniIZjLJ4tYBl4JW1WWyECnMeEmcNgC8HVl4kPNZJKMok9yoHKbq-bnWd38O-J89b_Cp0UTBLdLfcOi4az8nA3fC_9bGX9aNIt0yhRJDhSU6I1rU8zzmuvUZDTPkecnXc"/>
</div>
{/* Text Content */}
<div className="flex max-w-md flex-col items-center gap-2">
<h1 className="text-charcoal-grey dark:text-gray-200 text-3xl font-bold leading-tight" dir="rtl" lang="ur">ابھی تک کوئی آرڈر نہیں</h1>
<p className="text-charcoal-grey dark:text-gray-400 text-base font-normal leading-normal" dir="rtl" lang="ur">مارکیٹ پلیس سے ضروری کھاد اور بیج خریدیں</p>
</div>
{/* Action Buttons */}
<div className="flex flex-col items-center gap-4 mt-2">
<button className="flex min-w-[180px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary h-12 px-6 text-white text-base font-bold leading-normal shadow-sm hover:bg-primary/90">
<span className="truncate" dir="rtl" lang="ur">دکان دیکھیں</span>
</button>
<button className="flex min-w-[180px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-transparent text-muted-grey dark:text-gray-500 text-sm font-bold leading-normal hover:bg-gray-200 dark:hover:bg-gray-700">
<span className="truncate" dir="rtl" lang="ur">چیٹ بوٹ سے مدد</span>
</button>
</div>
</div>
</main>
</div>

    </>
  );
}
