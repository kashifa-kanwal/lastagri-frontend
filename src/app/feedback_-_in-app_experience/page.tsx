
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="relative flex min-h-screen w-full flex-col items-center justify-center p-4">
{/* Modal Dialog */}
<div className="relative w-full max-w-lg overflow-hidden rounded-xl bg-white dark:bg-[#2a2a2a] shadow-2xl">
{/* Close Button */}
<button className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors">
<span className="material-symbols-outlined">close</span>
</button>
<div className="p-8 md:p-10">
{/* HeadlineText */}
<h2 className="text-center text-2xl font-bold leading-tight tracking-tight text-[#333333] dark:text-gray-100">AgriConnect kaisa chal raha hai?</h2>
{/* ReactionBar */}
<div className="flex justify-around py-8">
<label className="cursor-pointer">
<input className="peer" name="experience" type="radio" defaultValue="sad"/>
<span className="material-symbols-outlined reaction-icon sad">sentiment_sad</span>
</label>
<label className="cursor-pointer">
<input className="peer" name="experience" type="radio" defaultValue="neutral"/>
<span className="material-symbols-outlined reaction-icon">sentiment_neutral</span>
</label>
<label className="cursor-pointer">
<input className="peer" name="experience" type="radio" defaultValue="satisfied"/>
<span className="material-symbols-outlined reaction-icon">sentiment_satisfied</span>
</label>
<label className="cursor-pointer">
<input className="peer" name="experience" type="radio" defaultValue="happy"/>
<span className="material-symbols-outlined reaction-icon">sentiment_very_satisfied</span>
</label>
<label className="cursor-pointer">
<input className="peer" name="experience" type="radio" defaultValue="excited"/>
<span className="material-symbols-outlined reaction-icon">sentiment_excited</span>
</label>
</div>
{/* Conditional Sections Container */}
<div className="space-y-6">
{/* Positive Feedback Section (hidden by default) */}
<div className="space-y-4">
{/* TitleText */}
<h3 className="text-left text-lg font-bold leading-tight tracking-tight text-[#333333] dark:text-gray-100">Kya acha laga?</h3>
{/* Chips */}
<div className="flex flex-wrap gap-3">
<div className="flex h-10 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-lg bg-gray-100 dark:bg-gray-700 px-4 ring-1 ring-inset ring-gray-200 dark:ring-gray-600 hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors">
<p className="text-sm font-medium leading-normal text-[#333333] dark:text-gray-200">Easy to use</p>
</div>
<div className="flex h-10 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-lg bg-gray-100 dark:bg-gray-700 px-4 ring-1 ring-inset ring-gray-200 dark:ring-gray-600 hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors">
<p className="text-sm font-medium leading-normal text-[#333333] dark:text-gray-200">Good products</p>
</div>
<div className="flex h-10 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-lg bg-gray-100 dark:bg-gray-700 px-4 ring-1 ring-inset ring-gray-200 dark:ring-gray-600 hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors">
<p className="text-sm font-medium leading-normal text-[#333333] dark:text-gray-200">Helpful information</p>
</div>
</div>
</div>
{/* Negative Feedback Section (hidden by default) */}
<div className="space-y-4">
{/* TitleText */}
<h3 className="text-left text-lg font-bold leading-tight tracking-tight text-[#333333] dark:text-gray-100">Kya masla hai?</h3>
{/* Checkboxes */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<label className="flex items-center space-x-3 rounded-lg border border-gray-200 dark:border-gray-600 p-3 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
<input className="h-4 w-4 rounded border-gray-300 dark:border-gray-500 text-primary focus:ring-primary dark:bg-gray-700 dark:checked:bg-primary" type="checkbox"/>
<span className="text-sm text-[#333333] dark:text-gray-200">App is slow</span>
</label>
<label className="flex items-center space-x-3 rounded-lg border border-gray-200 dark:border-gray-600 p-3 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
<input className="h-4 w-4 rounded border-gray-300 dark:border-gray-500 text-primary focus:ring-primary dark:bg-gray-700 dark:checked:bg-primary" type="checkbox"/>
<span className="text-sm text-[#333333] dark:text-gray-200">Hard to find products</span>
</label>
<label className="flex items-center space-x-3 rounded-lg border border-gray-200 dark:border-gray-600 p-3 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
<input className="h-4 w-4 rounded border-gray-300 dark:border-gray-500 text-primary focus:ring-primary dark:bg-gray-700 dark:checked:bg-primary" type="checkbox"/>
<span className="text-sm text-[#333333] dark:text-gray-200">Payment issue</span>
</label>
<label className="flex items-center space-x-3 rounded-lg border border-gray-200 dark:border-gray-600 p-3 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
<input className="h-4 w-4 rounded border-gray-300 dark:border-gray-500 text-primary focus:ring-primary dark:bg-gray-700 dark:checked:bg-primary" type="checkbox"/>
<span className="text-sm text-[#333333] dark:text-gray-200">Other</span>
</label>
</div>
{/* Text Input */}
<div>
<textarea className="w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-[#333333] dark:text-gray-200 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" placeholder="Aur kuch batayein..." rows="3"></textarea>
</div>
</div>
{/* Divider */}
<div className="border-t border-gray-200 dark:border-gray-700 pt-6"></div>
{/* Final CTA Section */}
<div className="space-y-4">
<p className="text-center text-sm text-gray-600 dark:text-gray-400">Apne doston ko bataein!</p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="flex-1 w-full flex items-center justify-center gap-2 rounded-lg bg-yellow-500 hover:bg-yellow-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all">
<span className="material-symbols-outlined">share</span>
                      Share with Friends
                  </button>
<button className="flex-1 w-full rounded-lg bg-primary hover:bg-primary/90 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all">
                      Submit Feedback
                  </button>
</div>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
