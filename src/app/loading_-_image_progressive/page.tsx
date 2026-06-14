
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="relative flex min-h-screen w-full flex-col">
{/* TopNavBar Component */}
<header className="sticky top-0 z-10 flex w-full items-center justify-center border-b border-solid border-primary/20 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
<div className="flex w-full max-w-7xl items-center justify-between whitespace-nowrap px-4 py-3 lg:px-8">
<div className="flex items-center gap-8">
<div className="flex items-center gap-2 text-text-main">
<span className="material-symbols-outlined text-primary text-3xl">grass</span>
<h2 className="text-xl font-bold tracking-tight">AgriConnect</h2>
</div>
</div>
<div className="hidden flex-1 justify-center gap-8 md:flex">
<a className="text-sm font-medium text-text-main transition-colors hover:text-primary" href="#">Marketplace</a>
<a className="text-sm font-medium text-text-subtle transition-colors hover:text-primary" href="#">Financing</a>
<a className="text-sm font-medium text-text-subtle transition-colors hover:text-primary" href="#">Community</a>
<a className="text-sm font-medium text-text-subtle transition-colors hover:text-primary" href="#">My Farm</a>
</div>
<div className="flex items-center gap-4">
<button className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-primary/20 text-text-main transition-colors hover:bg-primary/30">
<span className="material-symbols-outlined text-xl">notifications</span>
</button>
<div className="h-10 w-10 rounded-full bg-cover bg-center" data-alt="User profile picture"></div>
</div>
</div>
</header>
{/* Main Content */}
<main className="flex w-full flex-1 justify-center">
<div className="flex w-full max-w-7xl flex-col px-4 py-8 lg:px-8">
{/* Breadcrumbs & Page Heading */}
<div className="flex flex-col gap-4">
<div className="flex flex-wrap gap-2">
<a className="text-base font-medium text-text-subtle" href="#">Marketplace</a>
<span className="text-base font-medium text-text-subtle">/</span>
<span className="text-base font-medium text-text-main">Fertilizers</span>
</div>
<div className="flex min-w-72 flex-col gap-2">
<p className="text-4xl font-black leading-tight tracking-tighter">Organic Fertilizers</p>
<p className="text-base font-normal text-text-subtle">Boost your crop yield with our range of high-quality organic fertilizers.</p>
</div>
</div>
{/* Product Grid with Image Loading Experience */}
<div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
{/* Product Card 1: Initial Placeholder State */}
<div className="flex flex-col gap-3 rounded-xl bg-neutral-background p-4 shadow-sm">
<div className="relative aspect-square w-full overflow-hidden rounded-lg">
<div className="flex h-full w-full items-center justify-center bg-placeholder-bg">
<span className="material-symbols-outlined text-5xl text-placeholder-icon">image</span>
</div>
</div>
<div className="flex flex-col">
<h3 className="font-bold text-text-main">Loading Product...</h3>
<p className="text-sm text-text-subtle">Fetching details</p>
</div>
</div>
{/* Product Card 2: Low-Quality Image Preview (LQIP) State */}
<div className="flex flex-col gap-3 rounded-xl bg-neutral-background p-4 shadow-sm">
<div className="relative aspect-square w-full overflow-hidden rounded-lg bg-placeholder-bg">
<img className="h-full w-full object-cover" data-alt="A blurred preview of a bag of compost" src="https://lh3.googleusercontent.com/aida-public/AB6AXuChGBJvNaz2V5AUNTxKVvXSOw-H9mnyYppoI5t_LisGEvipwK91IcimU5D5rLr_d0mlRlYKUEFFcD5cbSu4z3W20HSBPoowUSycaPF8DQ8BWYVesLdla544h-hcX1sD3EwbZDQyI11tfhV1JJoWdb6tEeXQST_ofg_CHemp3OhVTUIWj0eeI-1F20g5fP_tlKUnZr7CfGgapFU2Oj2ID9MXtkLk2KbspqnErkeRlIzFLlaBUh0qdYwTRwgkPL6JOQH0cuWg4sgkffw"/>
</div>
<div className="flex flex-col">
<h3 className="font-bold text-text-main">Bio-Compost Mix</h3>
<p className="text-sm text-text-subtle">Rich in nutrients</p>
</div>
</div>
{/* Product Card 3: High-Quality Image Loaded State (with crossfade effect) */}
<div className="flex flex-col gap-3 rounded-xl bg-neutral-background p-4 shadow-sm">
<div className="group relative aspect-square w-full overflow-hidden rounded-lg bg-placeholder-bg">
{/* LQIP */}
<img className="absolute inset-0 h-full w-full object-cover opacity-100 transition-opacity duration-500 group-hover:opacity-0" data-alt="A blurred preview of premium vermicompost" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDc0Uk_skq_QKgFZc53Yc_DpjRtZ0nXEyWzYcHjj9yUFSHIZ9DWJaX-bO5hichI2AWIRf9yo9I7XMkIM_sgtSkr7o-yIYxBAjCLrw6MvDI7zCMnWQBwYTjttQf0oSt_xfljC6HZ2N21oHXzOCth4dlTJ0-TY3WvMVWkxrcRMQBMH7XAEAzol7nd9zoUgM8pN3sD1mUKX3lCxmHk_oeD-T-cFZuS24qu6xNAlDgvXm-syBOqfbaqEE4PtkHOXYRM-_NhTA_5CaSRtPw"/>
{/* High-Quality Image */}
<img className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100" data-alt="A clear, high-quality image of premium vermicompost" onload="this.style.opacity=1; this.previousElementSibling.style.opacity=0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuALqVDABWhEL0J4cg-ZCd44uoGgT_dwXvOIu3HbADrQEO6Q2FI01wezITsmeuub0sU-NAgNServQkaoYC5_txnpWs8x9djawF9I1hGthOpNPrcIhFbRWUaUTEZXgw9ExHGnHHJsySy6iLQrMQdsxILXLUAPVXOnFC9aK0SOlqhGDeyrbr73ePjWIoWB2UwrNbWDSfRpQtufRTlRilUMdin4Zw9nZBZEpGQseISBzYAyaJ31vaFOLZXoIH3AXCRtNp-snIcTB1rDcmY"/>
</div>
<div className="flex flex-col">
<h3 className="font-bold text-text-main">Premium Vermicompost</h3>
<p className="text-sm text-text-subtle">10kg Bag</p>
</div>
</div>
{/* Product Card 4: Standard High-Quality Loaded State */}
<div className="flex flex-col gap-3 rounded-xl bg-neutral-background p-4 shadow-sm">
<div className="relative aspect-square w-full overflow-hidden rounded-lg bg-placeholder-bg">
<img className="h-full w-full object-cover" data-alt="Bottles of liquid seaweed fertilizer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8Z1uZn2CBy-yNlNG5eL2Arw6z2e9b7K6KZ7Ug9gahDke9MW_akXOmjMgzRdLBBTJXHw55qbZaQ_cY3ScVFuiciCIRMoZnIxapW3_BOy9UZpV30j9-AefkP1RgVPqBC7ARw9c4ZZcc8NNsa2W8e8cJ__4NqxzzkroT_r-x2jrnPEes3XMIYFPG-J1ekgHXRS5rvd0vSKwiv5uqjJMzyisKM-Xnha0NeMeNrTJYIgXYtevu59WQsTgkZhPFb0uIrC77pgNG4jxT_bk"/>
</div>
<div className="flex flex-col">
<h3 className="font-bold text-text-main">Liquid Seaweed Extract</h3>
<p className="text-sm text-text-subtle">Concentrated Growth Booster</p>
</div>
</div>
{/* Product Card 5 (Example) */}
<div className="flex flex-col gap-3 rounded-xl bg-neutral-background p-4 shadow-sm">
<div className="relative aspect-square w-full overflow-hidden rounded-lg bg-placeholder-bg">
<img className="h-full w-full object-cover" data-alt="Bags of organic pellet fertilizer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAojO430hCsfzixRVK57mdRz3RPpRMmuFcZ-kAHyk2AlpdkfkNUGcrRxiLnWYS-16rWdzrUt6sFPiFgFnLG6NaqzHDwhOkXb9yh2-Tyn-gqFHS6vinM6icQIdZptxWAxVhfSiMOlOwbHk9Vt9HRsBVne5kswA-Gk8mfHAZy_sKVL7EBLzv-LuAqSWsOHM2Whp548rmlewp-Fygi8SGZRlvtb59j8eJTnnkrQCjwowalucNLjiZZ6L7eLx2IWyAv_kPypMXziKuvhTA"/>
</div>
<div className="flex flex-col">
<h3 className="font-bold text-text-main">Poultry Manure Pellets</h3>
<p className="text-sm text-text-subtle">Slow-release formula</p>
</div>
</div>
{/* Product Card 6 (Example) */}
<div className="flex flex-col gap-3 rounded-xl bg-neutral-background p-4 shadow-sm">
<div className="relative aspect-square w-full overflow-hidden rounded-lg bg-placeholder-bg">
<img className="h-full w-full object-cover" data-alt="Hands holding rich, dark soil" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnFW37iM847UQp6mJ1EvkMMkj5IAfClFxmY9z5tsRoMmgk1M8AuKSlQZhGkpHFK02bhh4qWOx9Ja9kA3bu_vXeudOnaeJuAnsNlC_Ycs5kBF5yHPFoGL8ukVDXddmv9cKTHDdN9mRqOnSC0swucZHthCkDfRxUKe7wHT-MArVo8Wshpx7F7656QdWiVIrNtFAM9gJ2mbW7R56wfFe3DEDurXdWoeQpQdJ6xsZHCpM88gV7LF6GR4DHw7IW9tPD2YoRUaNMhp17U9o"/>
</div>
<div className="flex flex-col">
<h3 className="font-bold text-text-main">Enriched Planting Soil</h3>
<p className="text-sm text-text-subtle">Ready to use</p>
</div>
</div>
</div>
</div>
</main>
</div>

    </>
  );
}
