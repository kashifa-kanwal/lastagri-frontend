
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
{/* TopNavBar Component */}
<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 dark:border-gray-700 px-10 py-3 bg-white dark:bg-[#1C2C14]">
<div className="flex items-center gap-8">
<div className="flex items-center gap-4 text-text-light dark:text-text-dark">
<div className="size-6 text-brand-green">
<span className="material-symbols-outlined text-4xl">eco</span>
</div>
<h2 className="text-text-light dark:text-text-dark text-lg font-bold leading-tight tracking-[-0.015em]">AgriConnect</h2>
</div>
<label className="hidden md:flex flex-col min-w-40 !h-10 max-w-64">
<div className="flex w-full flex-1 items-stretch rounded-lg h-full">
<div className="text-brand-gray-text flex border-none bg-brand-gray-bg dark:bg-background-dark items-center justify-center pl-4 rounded-l-lg border-r-0">
<span className="material-symbols-outlined">search</span>
</div>
<input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-0 border-none bg-brand-gray-bg dark:bg-background-dark focus:border-none h-full placeholder:text-brand-gray-text px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal" placeholder="Search Community" defaultValue=""/>
</div>
</label>
</div>
<div className="flex flex-1 justify-end gap-8">
<div className="hidden lg:flex items-center gap-9">
<a className="text-text-light dark:text-text-dark text-sm font-medium leading-normal" href="#">Dashboard</a>
<a className="text-text-light dark:text-text-dark text-sm font-medium leading-normal" href="#">Loans</a>
<a className="text-brand-green dark:text-primary text-sm font-bold leading-normal" href="#">Community</a>
<a className="text-text-light dark:text-text-dark text-sm font-medium leading-normal" href="#">Marketplace</a>
</div>
<div className="flex items-center gap-2">
<button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 w-10 bg-brand-gray-bg dark:bg-background-dark text-text-light dark:text-text-dark text-sm font-bold leading-normal tracking-[0.015em]">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 w-10 bg-brand-gray-bg dark:bg-background-dark text-text-light dark:text-text-dark text-sm font-bold leading-normal tracking-[0.015em]">
<span className="material-symbols-outlined">help_outline</span>
</button>
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="User profile picture"></div>
</div>
</div>
</header>
<main className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
{/* PageHeading Component */}
<div className="flex flex-wrap justify-between items-center gap-3 p-4 mb-6">
<div className="flex min-w-72 flex-col gap-3">
<p className="text-text-light dark:text-text-dark text-4xl font-black leading-tight tracking-[-0.033em]">Community Q&amp;A</p>
<p className="text-brand-gray-text dark:text-gray-400 text-base font-normal leading-normal">Ask questions and get answers from fellow farmers and agricultural experts.</p>
</div>
</div>
{/* Main 3-column layout */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
{/* Left Column: Navigation & Filtering */}
<aside className="lg:col-span-3 space-y-8">
<div className="p-4 bg-white dark:bg-[#1C2C14] rounded-lg shadow-sm">
{/* Tabs Component */}
<div className="flex border-b border-gray-200 dark:border-gray-700 gap-6">
<a className="flex flex-col items-center justify-center border-b-[3px] border-b-brand-green text-text-light dark:text-text-dark pb-[13px] pt-2" href="#">
<p className="text-sm font-bold leading-normal tracking-[0.015em]">All Questions</p>
</a>
<a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-brand-gray-text dark:text-gray-400 pb-[13px] pt-2 hover:border-b-gray-300" href="#">
<p className="text-sm font-bold leading-normal tracking-[0.015em]">Unanswered</p>
</a>
<a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-brand-gray-text dark:text-gray-400 pb-[13px] pt-2 hover:border-b-gray-300" href="#">
<p className="text-sm font-bold leading-normal tracking-[0.015em]">My Questions</p>
</a>
</div>
</div>
<div className="p-4 bg-white dark:bg-[#1C2C14] rounded-lg shadow-sm">
{/* SectionHeader Component */}
<h3 className="text-text-light dark:text-text-dark text-lg font-bold leading-tight tracking-[-0.015em] px-1 pb-2 pt-1">Trending Topics</h3>
{/* Chips Component */}
<div className="flex gap-2 p-1 flex-wrap">
<div className="flex h-8 cursor-pointer shrink-0 items-center justify-center gap-x-2 rounded-full bg-brand-gray-bg dark:bg-background-dark px-4">
<p className="text-text-light dark:text-text-dark text-sm font-medium leading-normal">Crop Tips</p>
</div>
<div className="flex h-8 cursor-pointer shrink-0 items-center justify-center gap-x-2 rounded-full bg-brand-gray-bg dark:bg-background-dark px-4">
<p className="text-text-light dark:text-text-dark text-sm font-medium leading-normal">Market Prices</p>
</div>
<div className="flex h-8 cursor-pointer shrink-0 items-center justify-center gap-x-2 rounded-full bg-brand-gray-bg dark:bg-background-dark px-4">
<p className="text-text-light dark:text-text-dark text-sm font-medium leading-normal">Weather</p>
</div>
<div className="flex h-8 cursor-pointer shrink-0 items-center justify-center gap-x-2 rounded-full bg-brand-gray-bg dark:bg-background-dark px-4">
<p className="text-text-light dark:text-text-dark text-sm font-medium leading-normal">Success Stories</p>
</div>
<div className="flex h-8 cursor-pointer shrink-0 items-center justify-center gap-x-2 rounded-full bg-brand-gray-bg dark:bg-background-dark px-4">
<p className="text-text-light dark:text-text-dark text-sm font-medium leading-normal">Equipment Advice</p>
</div>
</div>
</div>
</aside>
{/* Center Column: Main Feed */}
<main className="lg:col-span-6 space-y-6">
{/* Ask a Question Bar */}
<div className="flex items-center gap-4 p-4 bg-white dark:bg-[#1C2C14] rounded-lg shadow-sm">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 shrink-0" data-alt="User profile picture"></div>
<input className="w-full bg-brand-gray-bg dark:bg-background-dark rounded-full h-10 px-4 text-text-light dark:text-text-dark placeholder:text-brand-gray-text border-none focus:ring-2 focus:ring-brand-green" placeholder="What's your question about farming today?" type="text"/>
<button className="flex shrink-0 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-brand-green text-white text-sm font-bold leading-normal tracking-[0.015em]">
<span className="truncate">Ask</span>
</button>
</div>
{/* Question Card */}
<div className="bg-white dark:bg-[#1C2C14] rounded-lg shadow-sm overflow-hidden">
<div className="p-5">
<div className="flex items-start gap-4">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 shrink-0" data-alt="Farmer asking question profile picture"></div>
<div className="w-full">
<div className="flex items-center justify-between">
<div>
<p className="font-bold text-text-light dark:text-text-dark">Arjun Singh</p>
<p className="text-xs text-brand-gray-text dark:text-gray-400">2 hours ago</p>
</div>
<div className="flex gap-1">
<span className="text-xs font-medium bg-brand-gray-bg dark:bg-background-dark text-brand-gray-text dark:text-gray-400 px-2 py-1 rounded-full">#Wheat</span>
<span className="text-xs font-medium bg-brand-gray-bg dark:bg-background-dark text-brand-gray-text dark:text-gray-400 px-2 py-1 rounded-full">#Pest</span>
</div>
</div>
<h3 className="text-lg font-bold mt-2 text-text-light dark:text-text-dark">Gandum mein patti ka yellow hona? (Wheat leaf yellowing?)</h3>
<p className="text-sm text-brand-gray-text dark:text-gray-300 mt-1">My wheat crop leaves are turning yellow. What could be the cause and how can I fix it? It started last week in a small patch but is now spreading.</p>
</div>
</div>
</div>
{/* Best Answer */}
<div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-brand-yellow px-5 py-4">
<div className="flex items-center gap-2 mb-2">
<span className="material-symbols-outlined text-brand-yellow text-xl">workspace_premium</span>
<p className="font-bold text-sm text-yellow-700 dark:text-brand-yellow">BEST ANSWER</p>
</div>
<div className="flex items-start gap-4">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 shrink-0" data-alt="Agronomist profile picture"></div>
<div className="w-full">
<div className="flex items-center gap-2">
<p className="font-bold text-text-light dark:text-text-dark">Dr. Fatima Khan</p>
<div className="flex items-center gap-1 text-brand-green bg-green-100 dark:bg-green-900/30 px-2 py-0.5 rounded-full">
<span className="material-symbols-outlined text-sm">verified</span>
<span className="text-xs font-semibold">Verified Expert</span>
</div>
</div>
<p className="text-sm text-brand-gray-text dark:text-gray-300 mt-1">Yellowing leaves in wheat can be due to nitrogen deficiency. I suggest applying a dose of urea fertilizer. Check soil moisture as well, as water stress can also cause similar symptoms. Please share a closer picture if possible.</p>
<div className="flex items-center gap-4 mt-3">
<button className="flex items-center gap-1.5 text-brand-green font-bold text-sm">
<span className="material-symbols-outlined">thumb_up</span>
<span>12</span>
</button>
</div>
</div>
</div>
</div>
{/* Other Answers */}
<div className="p-5 border-t border-gray-100 dark:border-gray-800">
<div className="flex items-start gap-4">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 shrink-0" data-alt="Another farmer's profile picture"></div>
<div className="w-full">
<p className="font-bold text-text-light dark:text-text-dark">Rajesh Kumar</p>
<p className="text-sm text-brand-gray-text dark:text-gray-300 mt-1">I had the same issue last year. It was a fungus. Try spraying a fungicide.</p>
<div className="flex items-center gap-4 mt-3">
<button className="flex items-center gap-1.5 text-brand-gray-text font-bold text-sm hover:text-brand-green">
<span className="material-symbols-outlined">thumb_up</span>
<span>3</span>
</button>
<button className="text-sm font-bold text-brand-gray-text hover:text-brand-green">Reply</button>
</div>
</div>
</div>
</div>
</div>
</main>
{/* Right Column: Expert & Community Hub */}
<aside className="lg:col-span-3 space-y-8">
<div className="p-5 bg-white dark:bg-[#1C2C14] rounded-lg shadow-sm">
<h3 className="text-lg font-bold text-text-light dark:text-text-dark mb-4">Expert Corner</h3>
<div className="space-y-4">
<div className="flex items-center gap-4">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12 shrink-0" data-alt="Agronomist Dr. Fatima Khan's profile picture"></div>
<div>
<p className="font-bold text-text-light dark:text-text-dark">Dr. Fatima Khan</p>
<p className="text-sm text-brand-gray-text dark:text-gray-400">Agronomist</p>
</div>
</div>
<div className="border-t border-gray-100 dark:border-gray-800 pt-4">
<p className="text-sm font-semibold text-text-light dark:text-text-dark">Upcoming Live Q&amp;A:</p>
<p className="text-sm text-brand-gray-text dark:text-gray-400">Pest Management - Friday, 5 PM</p>
</div>
</div>
</div>
<div className="p-5 bg-white dark:bg-[#1C2C14] rounded-lg shadow-sm">
<h3 className="text-lg font-bold text-text-light dark:text-text-dark mb-4">Video Tutorials</h3>
<div className="relative rounded-lg overflow-hidden group">
<img className="w-full h-40 object-cover" data-alt="Video thumbnail of a farmer inspecting crops." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZCzZteghHV2pwMflF-1xYSd3XxhhrCLfcygq0iXi9at7TM_YHW1C_QK9-sJ_WVrGPwCvzOu3pckT0Hang0JVJ2GaDQXvkLVaxS7FvPO8vTqeDlcM_md2Rj-IpP686Tnmi5-jucy6JIVS4anr5uTB8I9Y5YLDoFiqNNLInsg-uiUqcty7GJZPVKwU95DkViiU6tf-QjR2WJVypGub4Okt69M2j8ZKeaeI0ZhPczYkHQaleGurX4LtKpapu8yNCJuXnQa6xjVKeW7k"/>
<div className="absolute inset-0 bg-black/40 flex items-center justify-center">
<button className="w-14 h-14 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm transition-transform group-hover:scale-110">
<span className="material-symbols-outlined text-white text-4xl">play_arrow</span>
</button>
</div>
<div className="absolute bottom-0 left-0 p-3 bg-gradient-to-t from-black/60 to-transparent w-full">
<p className="text-white font-bold">How to Improve Soil Health</p>
</div>
</div>
</div>
</aside>
</div>
</main>
</div>

    </>
  );
}
