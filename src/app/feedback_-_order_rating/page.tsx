
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="relative flex min-h-screen w-full flex-col bg-gray-200 dark:bg-gray-800 group/design-root">
{/* This div simulates the dimmed background */}
<div className="absolute inset-0 bg-black/50 z-10"></div>
<div className="relative z-20 flex h-full grow flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
{/* Modal Dialog */}
<div className="layout-content-container flex w-full max-w-lg flex-col rounded-xl bg-background-light dark:bg-modal-dark shadow-2xl">
<div className="flex items-center justify-between border-b border-border-light dark:border-border-dark p-4 md:p-6">
{/* Header */}
<h2 className="text-xl font-bold tracking-tight text-text-light dark:text-text-dark">Apna tajruba bataein</h2>
<button className="flex h-8 w-8 items-center justify-center rounded-full text-placeholder-light transition-colors hover:bg-gray-100 dark:text-placeholder-dark dark:hover:bg-gray-700">
<span className="material-symbols-outlined !text-2xl">close</span>
</button>
</div>
<div className="flex flex-col gap-6 p-4 md:p-6">
{/* Rating Section 1 */}
<div>
<p className="text-base font-medium leading-normal text-text-light dark:text-text-dark">Product Quality</p>
{/* ReactionBar */}
<div className="mt-2 flex flex-wrap items-center justify-between gap-2">
<div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-gray-100 text-gray-400 transition-colors hover:bg-secondary/20 hover:text-secondary dark:bg-gray-700 dark:text-gray-500 dark:hover:bg-secondary/30">
<span className="material-symbols-outlined !text-3xl">sentiment_very_dissatisfied</span>
</div>
<div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-gray-100 text-gray-400 transition-colors hover:bg-secondary/20 hover:text-secondary dark:bg-gray-700 dark:text-gray-500 dark:hover:bg-secondary/30">
<span className="material-symbols-outlined !text-3xl">sentiment_dissatisfied</span>
</div>
<div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-secondary/20 text-secondary dark:bg-secondary/30">
<span className="material-symbols-outlined !text-3xl">sentiment_neutral</span>
</div>
<div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-gray-100 text-gray-400 transition-colors hover:bg-secondary/20 hover:text-secondary dark:bg-gray-700 dark:text-gray-500 dark:hover:bg-secondary/30">
<span className="material-symbols-outlined !text-3xl">sentiment_satisfied</span>
</div>
<div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-gray-100 text-gray-400 transition-colors hover:bg-secondary/20 hover:text-secondary dark:bg-gray-700 dark:text-gray-500 dark:hover:bg-secondary/30">
<span className="material-symbols-outlined !text-3xl">sentiment_very_satisfied</span>
</div>
</div>
</div>
{/* Rating Section 2 */}
<div>
<p className="text-base font-medium leading-normal text-text-light dark:text-text-dark">Supplier Service</p>
{/* ReactionBar */}
<div className="mt-2 flex flex-wrap items-center justify-between gap-2">
<div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-gray-100 text-gray-400 transition-colors hover:bg-secondary/20 hover:text-secondary dark:bg-gray-700 dark:text-gray-500 dark:hover:bg-secondary/30">
<span className="material-symbols-outlined !text-3xl">sentiment_very_dissatisfied</span>
</div>
<div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-gray-100 text-gray-400 transition-colors hover:bg-secondary/20 hover:text-secondary dark:bg-gray-700 dark:text-gray-500 dark:hover:bg-secondary/30">
<span className="material-symbols-outlined !text-3xl">sentiment_dissatisfied</span>
</div>
<div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-gray-100 text-gray-400 transition-colors hover:bg-secondary/20 hover:text-secondary dark:bg-gray-700 dark:text-gray-500 dark:hover:bg-secondary/30">
<span className="material-symbols-outlined !text-3xl">sentiment_neutral</span>
</div>
<div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-secondary/20 text-secondary dark:bg-secondary/30">
<span className="material-symbols-outlined !text-3xl">sentiment_satisfied</span>
</div>
<div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-gray-100 text-gray-400 transition-colors hover:bg-secondary/20 hover:text-secondary dark:bg-gray-700 dark:text-gray-500 dark:hover:bg-secondary/30">
<span className="material-symbols-outlined !text-3xl">sentiment_very_satisfied</span>
</div>
</div>
</div>
{/* Text Feedback Section */}
<div>
<label className="text-base font-medium leading-normal text-text-light dark:text-text-dark" htmlFor="feedback-text">Mazeed bataein (ikhtiyari)</label>
<textarea className="mt-2 block w-full rounded-lg border-border-light bg-background-light p-3 text-text-light placeholder-placeholder-light focus:border-primary focus:ring-primary dark:border-border-dark dark:bg-modal-dark dark:text-text-dark dark:placeholder-placeholder-dark" id="feedback-text" placeholder="Kya acha raha? Kya behtar ho sakta hai?" rows="4"></textarea>
</div>
{/* Photo Upload Section */}
<div>
<button className="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-dashed border-border-light px-4 py-3 text-center text-placeholder-light transition-colors hover:border-primary hover:bg-primary/10 hover:text-primary dark:border-border-dark dark:text-placeholder-dark dark:hover:border-primary/70 dark:hover:bg-primary/20 dark:hover:text-primary/70">
<span className="material-symbols-outlined">photo_camera</span>
<span className="font-semibold">Upload photos</span>
</button>
</div>
</div>
{/* Action Button */}
<div className="border-t border-border-light dark:border-border-dark p-4 md:p-6">
<button className="w-full rounded-lg bg-primary py-3 text-base font-bold text-white transition-opacity hover:opacity-90">Bhejein</button>
</div>
</div>
</div>
</div>

    </>
  );
}
