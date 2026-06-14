
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="flex min-h-screen">
{/* SideNavBar */}
<aside className="flex flex-col w-64 bg-card-light dark:bg-card-dark border-r border-border-light dark:border-border-dark p-4">
<div className="flex items-center gap-2 mb-8">
<span className="material-symbols-outlined text-primary text-4xl">grass</span>
<h1 className="text-2xl font-bold text-primary">AgriConnect</h1>
</div>
<div className="flex flex-col gap-4">
<div className="flex gap-3 items-center">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12" data-alt="Profile picture of Mehmood Khan"></div>
<div className="flex flex-col">
<h1 className="text-text-light dark:text-text-dark text-base font-semibold leading-normal">Mehmood Khan</h1>
<p className="text-success text-sm font-normal leading-normal">AgriConnect Member</p>
</div>
</div>
<div className="flex flex-col gap-1 mt-4">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary-light dark:bg-primary/20" href="#">
<span className="material-symbols-outlined text-primary text-2xl">dashboard</span>
<p className="text-primary text-sm font-semibold leading-normal">Dashboard</p>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-primary-light dark:hover:bg-primary/20" href="#">
<span className="material-symbols-outlined text-text-muted-light dark:text-text-muted-dark text-2xl">receipt_long</span>
<p className="text-text-light dark:text-text-dark text-sm font-medium leading-normal">My Loans</p>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-primary-light dark:hover:bg-primary/20" href="#">
<span className="material-symbols-outlined text-text-muted-light dark:text-text-muted-dark text-2xl">storefront</span>
<p className="text-text-light dark:text-text-dark text-sm font-medium leading-normal">Marketplace</p>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-primary-light dark:hover:bg-primary/20" href="#">
<span className="material-symbols-outlined text-text-muted-light dark:text-text-muted-dark text-2xl">groups</span>
<p className="text-text-light dark:text-text-dark text-sm font-medium leading-normal">Community</p>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-primary-light dark:hover:bg-primary/20" href="#">
<span className="material-symbols-outlined text-text-muted-light dark:text-text-muted-dark text-2xl">account_circle</span>
<p className="text-text-light dark:text-text-dark text-sm font-medium leading-normal">Profile</p>
</a>
</div>
</div>
<div className="mt-auto flex flex-col gap-4">
<button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-wide shadow-md hover:opacity-90">
<span className="truncate">New Loan Application</span>
</button>
<div className="flex flex-col gap-1 border-t border-border-light dark:border-border-dark pt-4">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary-light dark:hover:bg-primary/20" href="#">
<span className="material-symbols-outlined text-text-muted-light dark:text-text-muted-dark text-2xl">settings</span>
<p className="text-text-light dark:text-text-dark text-sm font-medium leading-normal">Settings</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary-light dark:hover:bg-primary/20" href="#">
<span className="material-symbols-outlined text-text-muted-light dark:text-text-muted-dark text-2xl">help_outline</span>
<p className="text-text-light dark:text-text-dark text-sm font-medium leading-normal">Help &amp; Support</p>
</a>
</div>
</div>
</aside>
{/* Main Content */}
<main className="flex-1 p-8 overflow-y-auto">
{/* Page Heading */}
<div className="flex flex-wrap justify-between items-center gap-4 mb-6">
<div className="flex flex-col gap-1">
<p className="text-text-light dark:text-text-dark text-3xl font-bold leading-tight tracking-tight">Your Financial Wellness Dashboard</p>
<p className="text-text-muted-light dark:text-text-muted-dark text-base font-normal leading-normal">Here’s a complete overview of your AgriConnect account, Mehmood.</p>
</div>
<div className="flex items-center gap-2">
<button className="flex min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark text-text-light dark:text-text-dark text-sm font-semibold leading-normal hover:bg-gray-100 dark:hover:bg-gray-700">
<span className="material-symbols-outlined text-base">download</span>
<span className="truncate">Export Report</span>
</button>
</div>
</div>
{/* Alerts & Warnings */}
<div className="flex items-center p-4 mb-6 rounded-xl bg-danger/10 text-danger border border-danger/30">
<span className="material-symbols-outlined mr-3 text-2xl">warning</span>
<p className="font-medium text-sm">Low credit available: Only ₨5,000 credit remaining. Your next installment is due in 3 days.</p>
<button className="ml-auto material-symbols-outlined">close</button>
</div>
{/* Grid Layout */}
<div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6">
{/* Financial Snapshot */}
<div className="lg:col-span-2 xl:col-span-2 bg-card-light dark:bg-card-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
<h2 className="text-lg font-bold mb-4">Financial Snapshot</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="flex flex-col items-center justify-center text-center">
<div className="relative size-32">
<svg className="size-full" height="36" viewBox="0 0 36 36" width="36">
<circle className="stroke-current text-gray-200 dark:text-gray-700" cx="18" cy="18" fill="none" r="16" strokeWidth="3"></circle>
<circle className="stroke-current text-success" cx="18" cy="18" fill="none" r="16" stroke-dasharray="100" stroke-dashoffset="55" strokeWidth="3"></circle>
</svg>
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-2xl font-bold">45%</span>
</div>
</div>
<p className="font-semibold mt-2">Credit Utilization</p>
<p className="text-xs text-text-muted-light dark:text-text-muted-dark">Good Standing</p>
</div>
<div className="flex flex-col justify-center">
<p className="font-semibold">Payment Performance</p>
<p className="text-3xl font-bold text-success my-1">95%</p>
<p className="text-xs text-text-muted-light dark:text-text-muted-dark">On-Time Payment Rate</p>
<p className="text-sm mt-2 font-medium">7 consecutive on-time payments! 🔥</p>
</div>
<div className="flex flex-col justify-center">
<p className="font-semibold">Credit Score</p>
<div className="flex items-center gap-2 my-1">
<p className="text-3xl font-bold">680</p>
<span className="material-symbols-outlined text-success">arrow_upward</span>
</div>
<p className="text-xs text-text-muted-light dark:text-text-muted-dark">Tier: <span className="text-warning font-semibold">Medium Risk</span></p>
</div>
</div>
</div>
{/* Repayment Health */}
<div className="lg:col-span-1 xl:col-span-2 bg-card-light dark:bg-card-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
<h2 className="text-lg font-bold mb-4">Repayment Health</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="flex flex-col justify-center">
<p className="font-semibold text-text-muted-light dark:text-text-muted-dark">Total Outstanding</p>
<p className="text-3xl font-bold">₨45,000</p>
<a className="text-xs text-info hover:underline" href="#">View Breakdown</a>
</div>
<div className="flex flex-col justify-center">
<p className="font-semibold text-text-muted-light dark:text-text-muted-dark">Next Due Date</p>
<p className="text-3xl font-bold">5 <span className="text-xl">days</span></p>
<p className="text-xs text-text-muted-light dark:text-text-muted-dark">Remaining</p>
</div>
</div>
<div className="mt-4 p-3 rounded-lg bg-success/10 text-success">
<p className="text-sm font-semibold">You've saved ₨2,000 by paying on time!</p>
</div>
</div>
{/* Spending Analysis */}
<div className="lg:col-span-2 xl:col-span-2 bg-card-light dark:bg-card-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
<h2 className="text-lg font-bold mb-4">Spending Analysis</h2>
<div className="h-64 flex items-end gap-3">
{/* Bar Chart placeholder */}
<div className="flex-1 h-[60%] bg-primary/20 rounded-t-md"></div>
<div className="flex-1 h-[80%] bg-primary/20 rounded-t-md"></div>
<div className="flex-1 h-[40%] bg-primary/20 rounded-t-md"></div>
<div className="flex-1 h-[90%] bg-primary rounded-t-md"></div>
<div className="flex-1 h-[70%] bg-primary/20 rounded-t-md"></div>
<div className="flex-1 h-[50%] bg-primary/20 rounded-t-md"></div>
</div>
<div className="flex justify-around text-xs text-text-muted-light dark:text-text-muted-dark mt-2">
<span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
</div>
<p className="text-center mt-4 text-sm font-medium">You're spending 20% less than last year - Great job!</p>
</div>
{/* Category Breakdown */}
<div className="lg:col-span-1 xl:col-span-1 bg-card-light dark:bg-card-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
<h2 className="text-lg font-bold mb-4">Category Breakdown</h2>
<div className="flex justify-center my-4">
<img className="w-40 h-40" data-alt="Pie chart showing spending categories" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDA-7YRnVPJrJwLcDwRQxsWeo-nEA4jcDPco4WCtmduQkM9JXCGbLx9QqJwi9FJVIQqWPkoaH68ZRWFvqyBPhhFxryUAXaySb_k8W2Y7Bf5OYROHM4ppcYmpD23xKc27PLcBHGz_-O5Ew7OmEe5kkgem2FiRXOps0hJK6e0br_kRe_Uy6sfw4wk0h-SMtrGAQu8XXEnMFRA1ORoJqdd_l0t8pgjE4Kj2blYr2CRU7MQqNpWUxkAwW_pr0JtVAnijWHU2swKQQ9yM6g"/>
</div>
<div className="flex flex-col gap-2 text-sm">
<div className="flex justify-between items-center"><span className="flex items-center gap-2"><span className="size-2 rounded-full bg-primary"></span>Seeds</span><strong>40%</strong></div>
<div className="flex justify-between items-center"><span className="flex items-center gap-2"><span className="size-2 rounded-full bg-success"></span>Fertilizer</span><strong>30%</strong></div>
<div className="flex justify-between items-center"><span className="flex items-center gap-2"><span className="size-2 rounded-full bg-warning"></span>Tools</span><strong>20%</strong></div>
<div className="flex justify-between items-center"><span className="flex items-center gap-2"><span className="size-2 rounded-full bg-danger"></span>Other</span><strong>10%</strong></div>
</div>
</div>
{/* Financial Goals */}
<div className="lg:col-span-1 xl:col-span-1 bg-card-light dark:bg-card-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
<h2 className="text-lg font-bold mb-4">Financial Goals</h2>
<div className="flex flex-col gap-4">
<div>
<div className="flex justify-between mb-1">
<p className="text-sm font-medium">Save by harvest season</p>
<p className="text-sm text-text-muted-light dark:text-text-muted-dark">₨6,000 / ₨10,000</p>
</div>
<div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
<div className="bg-primary h-2.5 rounded-full"></div>
</div>
</div>
<div>
<div className="flex justify-between mb-1">
<p className="text-sm font-medium">Increase credit limit</p>
<p className="text-sm text-text-muted-light dark:text-text-muted-dark">₨75K / ₨100K</p>
</div>
<div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
<div className="bg-info h-2.5 rounded-full"></div>
</div>
</div>
<button className="w-full mt-2 flex cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 bg-primary-light dark:bg-primary/20 text-primary text-sm font-bold leading-normal hover:bg-primary/20">
<span className="material-symbols-outlined text-base">add_circle</span>
<span className="truncate">Set a New Goal</span>
</button>
</div>
</div>
{/* Rewards & Achievements */}
<div className="lg:col-span-1 xl:col-span-2 bg-card-light dark:bg-card-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
<h2 className="text-lg font-bold mb-4">Rewards &amp; Achievements</h2>
<div className="flex items-center justify-between gap-4">
<div className="flex flex-col items-center text-center">
<div className="p-4 bg-success/10 rounded-full mb-2">
<span className="material-symbols-outlined text-success text-4xl">military_tech</span>
</div>
<p className="font-semibold text-sm">Perfect Payment Partner</p>
<p className="text-xs text-text-muted-light dark:text-text-muted-dark">Badge Earned</p>
</div>
<div className="flex flex-col items-center text-center">
<p className="text-4xl font-bold text-info">1,250</p>
<p className="font-semibold text-sm">Points Balance</p>
<a className="text-xs text-info hover:underline" href="#">Redeem Now</a>
</div>
<div className="flex flex-col items-center text-center">
<p className="text-4xl font-bold text-primary">Top 10%</p>
<p className="font-semibold text-sm">Leaderboard Rank</p>
<p className="text-xs text-text-muted-light dark:text-text-muted-dark">Among farmers</p>
</div>
</div>
</div>
{/* Financial Literacy */}
<div className="lg:col-span-2 xl:col-span-2 bg-card-light dark:bg-card-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
<h2 className="text-lg font-bold mb-4">Financial Literacy</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="flex flex-col justify-between p-4 rounded-lg bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark">
<h3 className="font-semibold">Understanding Credit Scores</h3>
<p className="text-xs text-text-muted-light dark:text-text-muted-dark my-2">Learn what affects your score and how to improve it.</p>
<a className="flex items-center text-sm font-semibold text-info" href="#">
                Watch Video (Urdu) <span className="material-symbols-outlined text-base ml-1">play_circle</span>
</a>
</div>
<div className="flex flex-col justify-between p-4 rounded-lg bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark">
<h3 className="font-semibold">Smart Spending Habits</h3>
<p className="text-xs text-text-muted-light dark:text-text-muted-dark my-2">Take our quick quiz to test your financial knowledge.</p>
<a className="flex items-center text-sm font-semibold text-info" href="#">
                Start Quiz <span className="material-symbols-outlined text-base ml-1">quiz</span>
</a>
</div>
</div>
</div>
{/* Referral Program */}
<div className="lg:col-span-1 xl:col-span-2 bg-primary text-white p-6 rounded-xl">
<h2 className="text-lg font-bold mb-2">Refer a Farmer Friend</h2>
<p className="text-sm mb-4">You both get a <span className="font-bold">₨500 credit bonus</span> when they sign up and get approved!</p>
<div className="flex">
<input className="w-full bg-white/20 border-0 rounded-l-md text-sm placeholder-white/70 focus:ring-0" readonly="" type="text" defaultValue="agri.connect/ref/MKHAN123"/>
<button className="bg-white text-primary px-4 rounded-r-md text-sm font-bold">Copy</button>
</div>
</div>
</div>
</main>
</div>

    </>
  );
}
