
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-gray-900/30 p-4 dark:bg-black/50">
<div className="flex w-full max-w-[960px] flex-col rounded-xl bg-background-light dark:bg-background-dark shadow-2xl">
<div className="flex items-center justify-between gap-3 border-b border-gray-200 p-4 dark:border-gray-700">
<p className="text-2xl font-bold text-[#121b0d] dark:text-gray-100">Create New Post</p>
<button className="flex h-10 w-10 items-center justify-center rounded-full text-[#121b0d] hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800">
<span className="material-symbols-outlined">close</span>
</button>
</div>
<div className="flex-1 overflow-y-auto p-4">
<div className="flex items-start gap-4 @container">
<div className="h-12 w-12 shrink-0 rounded-full bg-cover bg-center" data-alt="User's profile picture"></div>
<div className="flex-1">
<textarea className="form-input w-full resize-none rounded-xl border border-[#d7e7cf] bg-[#f9fcf8] p-4 text-base font-normal leading-normal text-[#121b0d] placeholder:text-[#bbd7ad] focus:border-[#d7e7cf] focus:outline-0 focus:ring-0 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:placeholder:text-gray-500" placeholder="Apna tajruba ya sawal share karein" rows="4"></textarea>
</div>
</div>
<div className="mt-4 pl-16">
<p className="px-4 pb-3 pt-1 text-sm font-normal leading-normal text-[#669a4c] dark:text-green-400">Add Photos (up to 5)</p>
<div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4 pt-0">
<div className="relative flex aspect-square flex-col justify-end gap-3 rounded-xl bg-cover bg-center" data-alt="A close-up of a wheat field under a blue sky">
<button className="absolute right-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70">
<span className="material-symbols-outlined !text-base">close</span>
</button>
</div>
<div className="relative flex aspect-square flex-col justify-end gap-3 rounded-xl bg-cover bg-center" data-alt="Cotton bolls on a plant, ready for harvest">
<button className="absolute right-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70">
<span className="material-symbols-outlined !text-base">close</span>
</button>
</div>
<div className="relative flex aspect-square flex-col justify-end gap-3 rounded-xl bg-cover bg-center" data-alt="A tractor plowing a field during sunset">
<button className="absolute right-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70">
<span className="material-symbols-outlined !text-base">close</span>
</button>
</div>
<button className="flex aspect-square flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-gray-300 text-gray-500 hover:border-gray-400 hover:text-gray-600 dark:border-gray-600 dark:text-gray-400 dark:hover:border-gray-500 dark:hover:text-gray-300">
<span className="material-symbols-outlined !text-4xl">add_photo_alternate</span>
<span className="text-sm">Add Photos</span>
</button>
</div>
<p className="px-4 text-sm font-normal leading-normal text-[#669a4c] dark:text-green-400">3/5 photos</p>
</div>
<div className="mt-4 pl-16">
<p className="px-4 pb-3 pt-1 text-sm font-normal leading-normal text-[#669a4c] dark:text-green-400">Add Crop Tags</p>
<div className="flex flex-wrap gap-3 p-3 pt-0">
<div className="flex h-8 shrink-0 items-center justify-center gap-x-1 rounded-xl bg-[#ebf3e7] pl-2 pr-2 dark:bg-gray-700">
<p className="text-sm font-medium text-[#121b0d] dark:text-gray-200">Wheat</p>
<button className="flex h-6 w-6 items-center justify-center rounded-full text-[#121b0d] hover:bg-gray-300/50 dark:text-gray-300 dark:hover:bg-gray-600">
<span className="material-symbols-outlined !text-base">close</span>
</button>
</div>
<div className="flex h-8 shrink-0 items-center justify-center gap-x-1 rounded-xl bg-[#ebf3e7] pl-2 pr-2 dark:bg-gray-700">
<p className="text-sm font-medium text-[#121b0d] dark:text-gray-200">Cotton</p>
<button className="flex h-6 w-6 items-center justify-center rounded-full text-[#121b0d] hover:bg-gray-300/50 dark:text-gray-300 dark:hover:bg-gray-600">
<span className="material-symbols-outlined !text-base">close</span>
</button>
</div>
<input className="h-8 w-40 flex-1 rounded-xl border border-[#d7e7cf] bg-[#f9fcf8] px-3 text-sm text-[#121b0d] placeholder:text-[#bbd7ad] focus:border-[#d7e7cf] focus:outline-0 focus:ring-0 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:placeholder:text-gray-500" placeholder="e.g., #Wheat" type="text"/>
</div>
</div>
<div className="mt-2 flex flex-col gap-4 border-t border-gray-200 p-4 dark:border-gray-700">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-gray-500 dark:text-gray-400">location_on</span>
<p className="text-sm text-gray-700 dark:text-gray-300">Location: <span className="font-medium text-[#121b0d] dark:text-gray-100">Faisalabad District</span></p>
</div>
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-gray-500 dark:text-gray-400">visibility</span>
<p className="text-sm text-gray-700 dark:text-gray-300">Who can see this post?</p>
<div className="relative">
<select className="form-select w-full rounded-lg border-gray-300 bg-gray-50 py-2 pl-3 pr-10 text-sm text-gray-800 focus:border-primary/50 focus:ring-primary/50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200">
<option>Public</option>
<option>District Only</option>
<option>Friends</option>
</select>
</div>
</div>
</div>
</div>
<div className="flex items-center justify-end gap-4 border-t border-gray-200 p-4 dark:border-gray-700">
<button className="min-w-[84px] cursor-pointer items-center justify-center rounded-xl px-4 py-2 text-sm font-medium text-[#121b0d] hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800">Cancel</button>
<button className="min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-primary px-6 py-2 text-sm font-medium text-[#121b0d] hover:bg-opacity-90">Post</button>
</div>
</div>
</div>

    </>
  );
}
