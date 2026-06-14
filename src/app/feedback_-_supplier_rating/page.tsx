
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
<div className="layout-container flex h-full grow flex-col">
{/* TopNavBar */}
<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-border-light dark:border-border-dark px-6 md:px-10 py-3 bg-card-light dark:bg-card-dark">
<div className="flex items-center gap-4 text-text-light dark:text-text-dark">
<div className="size-6 text-primary">
<svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12.38 22.03c-2.7.3-5.1-.4-6.8-1.7a7.86 7.86 0 0 1-3.05-6.23c.3-4.2 3.5-7.6 7.6-7.8l.2-1.8c-5.7.3-10.1 5-9.8 10.5.2 4.4 3.7 8.1 8 8.4h.55Z"></path>
<path d="m18.78 15.33-1.8.2c.2-5.7-4.3-10.2-9.8-10.4-1.2-.1-2.4.2-3.4.7l.5-1.9c1.2-.6 2.6-.9 4-.8 6.2.3 11.2 5.5 10.9 11.7-.1.3-.1.6-.2.5Z"></path>
<path d="M12.98 22.23c4.7-.2 8.6-3.8 8.9-8.4.2-3.8-2.3-7-5.8-8l-.5 1.9c2.7.8 4.4 3.3 4.3 6.1-.2 3.3-2.9 6-6.1 6.1l-.8 2.3Z"></path>
</svg>
</div>
<h2 className="text-text-light dark:text-text-dark text-xl font-bold leading-tight tracking-[-0.015em]">AgriConnect</h2>
</div>
<div className="hidden md:flex flex-1 justify-end gap-8">
<div className="flex items-center gap-9">
<a className="text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal" href="#">Dashboard</a>
<a className="text-primary dark:text-primary text-sm font-bold leading-normal" href="#">Suppliers</a>
<a className="text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal" href="#">Farmers</a>
<a className="text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal" href="#">Payments</a>
</div>
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="User avatar image"></div>
</div>
</header>
<main className="px-4 md:px-10 lg:px-20 flex flex-1 justify-center py-5 md:py-10">
<div className="layout-content-container flex flex-col w-full max-w-4xl flex-1 gap-6">
{/* Breadcrumbs */}
<div className="flex flex-wrap gap-2 px-4">
<a className="text-primary hover:underline text-base font-medium leading-normal" href="#">Dashboard</a>
<span className="text-text-muted-light dark:text-text-muted-dark text-base font-medium leading-normal">/</span>
<a className="text-primary hover:underline text-base font-medium leading-normal" href="#">Suppliers</a>
<span className="text-text-muted-light dark:text-text-muted-dark text-base font-medium leading-normal">/</span>
<span className="text-text-light dark:text-text-dark text-base font-medium leading-normal">Rate Supplier</span>
</div>
<div className="bg-card-light dark:bg-card-dark rounded-xl shadow-sm p-6 md:p-8">
{/* ProfileHeader */}
<div className="flex p-4 border-b border-border-light dark:border-border-dark pb-8 mb-6 @container">
<div className="flex w-full flex-col gap-4 @[520px]:flex-row @[520px]:justify-between">
<div className="flex gap-6 items-center">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-xl h-24 w-24 md:h-32 md:w-32 flex-shrink-0" data-alt="Supplier logo for GreenLeaf Organics"></div>
<div className="flex flex-col">
<p className="text-text-muted-light dark:text-text-muted-dark text-base font-normal leading-normal">You are rating</p>
<p className="text-text-light dark:text-text-dark text-2xl md:text-3xl font-bold leading-tight tracking-[-0.015em]">GreenLeaf Organics</p>
<p className="text-primary text-base font-medium leading-normal mt-1">Seed &amp; Fertilizer Supplier</p>
</div>
</div>
</div>
</div>
{/* PageHeading */}
<div className="flex flex-wrap justify-between gap-3 p-4">
<p className="text-text-light dark:text-text-dark text-2xl md:text-4xl font-black leading-tight tracking-[-0.033em] w-full">Rate Your Experience with GreenLeaf Organics</p>
</div>
{/* Rating Sections Container */}
<div className="flex flex-col gap-8 px-4 py-5">
{/* Rating Criteria 1 */}
<div className="flex flex-col gap-3">
<h3 className="text-text-light dark:text-text-dark text-xl font-bold leading-tight tracking-[-0.015em]">Ease of Inventory Management</h3>
<p className="text-text-muted-light dark:text-text-muted-dark">Rate the simplicity and efficiency of managing stock levels with this supplier.</p>
<div className="flex items-center gap-2 star-rating text-text-muted-light dark:text-text-muted-dark">
<button className="material-symbols-outlined text-4xl cursor-pointer hover:text-accent text-accent">star</button>
<button className="material-symbols-outlined text-4xl cursor-pointer hover:text-accent text-accent">star</button>
<button className="material-symbols-outlined text-4xl cursor-pointer hover:text-accent text-accent">star</button>
<button className="material-symbols-outlined text-4xl cursor-pointer hover:text-accent text-accent">star</button>
<button className="material-symbols-outlined text-4xl cursor-pointer hover:text-accent">star</button>
</div>
</div>
{/* Rating Criteria 2 */}
<div className="flex flex-col gap-3">
<h3 className="text-text-light dark:text-text-dark text-xl font-bold leading-tight tracking-[-0.015em]">Payment Settlement Satisfaction</h3>
<p className="text-text-muted-light dark:text-text-muted-dark">Rate the timeliness and accuracy of payment processes.</p>
<div className="flex items-center gap-2 star-rating text-text-muted-light dark:text-text-muted-dark">
<button className="material-symbols-outlined text-4xl cursor-pointer hover:text-accent text-accent">star</button>
<button className="material-symbols-outlined text-4xl cursor-pointer hover:text-accent text-accent">star</button>
<button className="material-symbols-outlined text-4xl cursor-pointer hover:text-accent text-accent">star</button>
<button className="material-symbols-outlined text-4xl cursor-pointer hover:text-accent text-accent">star</button>
<button className="material-symbols-outlined text-4xl cursor-pointer hover:text-accent text-accent">star</button>
</div>
</div>
{/* Rating Criteria 3 */}
<div className="flex flex-col gap-3">
<h3 className="text-text-light dark:text-text-dark text-xl font-bold leading-tight tracking-[-0.015em]">Farmer Interaction Quality</h3>
<p className="text-text-muted-light dark:text-text-muted-dark">Rate the professionalism and support provided to farmers.</p>
<div className="flex items-center gap-2 star-rating text-text-muted-light dark:text-text-muted-dark">
<button className="material-symbols-outlined text-4xl cursor-pointer hover:text-accent text-accent">star</button>
<button className="material-symbols-outlined text-4xl cursor-pointer hover:text-accent text-accent">star</button>
<button className="material-symbols-outlined text-4xl cursor-pointer hover:text-accent text-accent">star</button>
<button className="material-symbols-outlined text-4xl cursor-pointer hover:text-accent">star</button>
<button className="material-symbols-outlined text-4xl cursor-pointer hover:text-accent">star</button>
</div>
</div>
{/* Feedback Area */}
<div className="flex flex-col gap-3">
<h3 className="text-text-light dark:text-text-dark text-xl font-bold leading-tight tracking-[-0.015em]">Additional Feedback</h3>
<p className="text-text-muted-light dark:text-text-muted-dark">Share more details about your experience.</p>
<div className="relative">
<textarea className="w-full rounded-lg border border-border-light dark:border-border-dark bg-transparent p-3 text-text-light dark:text-text-dark focus:border-primary focus:ring-primary placeholder:text-text-muted-light dark:placeholder:text-text-muted-dark" id="feedback" name="feedback" placeholder="What went well? What could be improved? Your feedback helps us build better partnerships." rows="5"></textarea>
<span className="absolute bottom-3 right-3 text-xs text-text-muted-light dark:text-text-muted-dark">0/500</span>
</div>
</div>
{/* Action Buttons */}
<div className="flex flex-col-reverse sm:flex-row justify-end gap-3 pt-6 border-t border-border-light dark:border-border-dark">
<button className="flex min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-transparent text-text-light dark:text-text-dark border border-border-light dark:border-border-dark hover:bg-gray-100 dark:hover:bg-gray-800 text-base font-bold leading-normal tracking-[0.015em]">
<span className="truncate">Cancel</span>
</button>
<button className="flex min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90">
<span className="truncate">Submit Rating</span>
</button>
</div>
</div>
</div>
</div>
</main>
</div>
</div>

    </>
  );
}
