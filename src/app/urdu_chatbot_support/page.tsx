
import React from 'react';

export default function Page() {
  return (
    <>
      



{/* This is the main application screen where the FAB lives */}
<div className="relative flex h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-hidden">
{/* Placeholder for main app content */}
<div className="p-8">
<h1 className="text-3xl font-bold text-text-light dark:text-text-dark">AgriConnect Dashboard</h1>
<p className="text-text-light/80 dark:text-text-dark/80 mt-2">This is where the main application content would be displayed.</p>
</div>
{/* Chat Window/Overlay */}
<div className="absolute bottom-24 end-6 w-full max-w-md h-[75vh] flex flex-col bg-background-light dark:bg-background-dark shadow-2xl rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
{/* Header Bar */}
<div className="flex items-center gap-4 px-4 py-3 border-b border-gray-200 dark:border-gray-700 shrink-0">
<div className="relative">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-10 w-10" data-alt="AgriConnect chatbot avatar, a friendly robot wearing a turban"></div>
<div className="absolute bottom-0 end-0 h-3 w-3 bg-green-500 rounded-full border-2 border-background-light dark:border-background-dark"></div>
</div>
<div className="flex-1">
<p className="text-text-light dark:text-text-dark text-base font-bold leading-normal truncate">AgriConnect Madad</p>
<p className="text-green-600 dark:text-green-400 text-sm">Online</p>
</div>
<button className="text-text-light dark:text-text-dark flex size-8 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
<span className="material-symbols-outlined text-2xl">more_vert</span>
</button>
</div>
{/* Message Area */}
<div className="flex-1 overflow-y-auto p-4 space-y-6">
{/* Bot Message */}
<div className="flex items-end gap-3">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-8 h-8 shrink-0" data-alt="AgriConnect chatbot avatar"></div>
<div className="flex flex-1 flex-col gap-2 items-start">
<p className="text-base font-normal leading-normal flex max-w-[80%] rounded-lg rounded-bl-none px-4 py-3 bg-secondary dark:bg-gray-700 text-text-light dark:text-text-dark">Assalam-o-Alaikum! Mein aap ki kiya madad kar sakta hoon?</p>
</div>
</div>
{/* Quick Reply Chips */}
<div className="flex gap-2 p-1 flex-wrap justify-end">
<button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary-light dark:bg-primary/20 px-4 hover:bg-primary/20 dark:hover:bg-primary/30">
<p className="text-primary dark:text-green-300 text-sm font-medium leading-normal">Mera Credit</p>
</button>
<button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary-light dark:bg-primary/20 px-4 hover:bg-primary/20 dark:hover:bg-primary/30">
<p className="text-primary dark:text-green-300 text-sm font-medium leading-normal">Qist Dekhein</p>
</button>
<button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary-light dark:bg-primary/20 px-4 hover:bg-primary/20 dark:hover:bg-primary/30">
<p className="text-primary dark:text-green-300 text-sm font-medium leading-normal">Mausam</p>
</button>
<button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary-light dark:bg-primary/20 px-4 hover:bg-primary/20 dark:hover:bg-primary/30">
<p className="text-primary dark:text-green-300 text-sm font-medium leading-normal">Shikayat</p>
</button>
</div>
{/* User Message */}
<div className="flex items-end gap-3 justify-end">
<div className="flex flex-1 flex-col gap-1 items-end">
<p className="text-base font-normal leading-normal flex max-w-[80%] rounded-lg rounded-br-none px-4 py-3 bg-primary text-white">Mera Credit kitna hai?</p>
</div>
</div>
{/* Typing Indicator */}
<div className="flex items-end gap-3">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-8 h-8 shrink-0" data-alt="AgriConnect chatbot avatar"></div>
<div className="flex items-center gap-2 rounded-lg rounded-bl-none px-4 py-3 bg-secondary dark:bg-gray-700 text-text-light dark:text-text-dark">
<span className="text-xs">AgriConnect likh raha hai</span>
<div className="flex gap-1 items-center">
<span className="h-1.5 w-1.5 rounded-full bg-gray-400 animate-[pulse_1s_infinite_ease-in-out_0s]"></span>
<span className="h-1.5 w-1.5 rounded-full bg-gray-400 animate-[pulse_1s_infinite_ease-in-out_0.2s]"></span>
<span className="h-1.5 w-1.5 rounded-full bg-gray-400 animate-[pulse_1s_infinite_ease-in-out_0.4s]"></span>
</div>
</div>
</div>
</div>
{/* Input Bar */}
<div className="flex items-center gap-2 p-3 border-t border-gray-200 dark:border-gray-700">
<button className="flex h-12 w-12 items-center justify-center shrink-0 rounded-full bg-primary text-white hover:bg-primary/90">
<span className="material-symbols-outlined text-2xl">mic</span>
</button>
<div className="relative flex-1">
<input className="w-full h-12 px-4 bg-secondary dark:bg-gray-700 text-text-light dark:text-text-dark border-transparent rounded-full focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="Yahan likhein..." type="text"/>
<button className="absolute top-1/2 -translate-y-1/2 end-3 text-text-light/60 dark:text-text-dark/60">
<span className="material-symbols-outlined text-2xl">mood</span>
</button>
</div>
<button className="flex h-12 w-12 items-center justify-center shrink-0 rounded-full bg-primary text-white hover:bg-primary/90">
<span className="material-symbols-outlined text-2xl">send</span>
</button>
</div>
</div>
{/* FAB (Floating Action Button) */}
<div className="absolute bottom-6 end-6">
<button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-16 w-16 bg-primary text-white shadow-lg hover:bg-primary/90 transition-colors">
<span className="material-symbols-outlined text-3xl">chat</span>
</button>
</div>
</div>

    </>
  );
}
