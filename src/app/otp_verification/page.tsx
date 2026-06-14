
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-background-light dark:bg-background-dark group/design-root overflow-hidden text-text-light dark:text-text-dark">
<div className="layout-container flex h-full grow flex-col items-center w-full max-w-lg p-4 sm:p-6">
{/* Progress Bar */}
<div className="w-full px-4 pt-4 pb-8">
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<p className="text-sm font-medium">Step 3 of 4</p>
<p className="text-sm font-medium">75%</p>
</div>
<div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
<div className="h-2 rounded-full bg-secondary"></div>
</div>
</div>
</div>
{/* Main Content */}
<div className="flex w-full flex-1 flex-col items-center justify-center text-center">
{/* Illustration/Image */}
<div className="mb-8">
<svg className="h-32 w-32 text-primary" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect>
<line x1="12" x2="12.01" y1="18" y2="18"></line>
<path d="M8 6h8"></path>
<path d="M8 10h5"></path>
<path d="M8 14h3"></path>
<path d="M18 6l-2.5 2.5"></path>
<path d="M15.5 8.5l2.5 2.5"></path>
</svg>
</div>
{/* Page Heading */}
<div className="mb-8 flex flex-col gap-2">
<h1 className="text-4xl font-black tracking-tight text-primary">Tasdeeqi Code</h1>
<p className="text-base">Aap ke number +92 XXX XXX XXXX par code bheja gaya hai</p>
</div>
{/* Confirmation Code Input */}
<div className="mb-6 flex w-full justify-center">
<fieldset className="relative flex justify-center gap-2 sm:gap-4">
<input className="flex h-14 w-12 sm:h-16 sm:w-16 rounded-lg border-2 border-gray-300 bg-transparent text-center text-2xl font-bold [appearance:textfield] focus:border-primary focus:outline-none focus:ring-0 dark:border-gray-600 [&amp;::-webkit-inner-spin-button]:appearance-none [&amp;::-webkit-outer-spin-button]:appearance-none" maxlength="1" oninput="this.value=this.value.slice(0,1)" onkeyup="if(this.value.length === 1) this.nextElementSibling?.focus()" type="number"/>
<input className="flex h-14 w-12 sm:h-16 sm:w-16 rounded-lg border-2 border-gray-300 bg-transparent text-center text-2xl font-bold [appearance:textfield] focus:border-primary focus:outline-none focus:ring-0 dark:border-gray-600 [&amp;::-webkit-inner-spin-button]:appearance-none [&amp;::-webkit-outer-spin-button]:appearance-none" maxlength="1" oninput="this.value=this.value.slice(0,1)" onkeyup="if(this.value.length === 1) this.nextElementSibling?.focus(); else if (event.key === 'Backspace') this.previousElementSibling?.focus()" type="number"/>
<input className="flex h-14 w-12 sm:h-16 sm:w-16 rounded-lg border-2 border-gray-300 bg-transparent text-center text-2xl font-bold [appearance:textfield] focus:border-primary focus:outline-none focus:ring-0 dark:border-gray-600 [&amp;::-webkit-inner-spin-button]:appearance-none [&amp;::-webkit-outer-spin-button]:appearance-none" maxlength="1" oninput="this.value=this.value.slice(0,1)" onkeyup="if(this.value.length === 1) this.nextElementSibling?.focus(); else if (event.key === 'Backspace') this.previousElementSibling?.focus()" type="number"/>
<input className="flex h-14 w-12 sm:h-16 sm:w-16 rounded-lg border-2 border-gray-300 bg-transparent text-center text-2xl font-bold [appearance:textfield] focus:border-primary focus:outline-none focus:ring-0 dark:border-gray-600 [&amp;::-webkit-inner-spin-button]:appearance-none [&amp;::-webkit-outer-spin-button]:appearance-none" maxlength="1" oninput="this.value=this.value.slice(0,1)" onkeyup="if(this.value.length === 1) this.nextElementSibling?.focus(); else if (event.key === 'Backspace') this.previousElementSibling?.focus()" type="number"/>
<input className="flex h-14 w-12 sm:h-16 sm:w-16 rounded-lg border-2 border-gray-300 bg-transparent text-center text-2xl font-bold [appearance:textfield] focus:border-primary focus:outline-none focus:ring-0 dark:border-gray-600 [&amp;::-webkit-inner-spin-button]:appearance-none [&amp;::-webkit-outer-spin-button]:appearance-none" maxlength="1" oninput="this.value=this.value.slice(0,1)" onkeyup="if(this.value.length === 1) this.nextElementSibling?.focus(); else if (event.key === 'Backspace') this.previousElementSibling?.focus()" type="number"/>
<input className="flex h-14 w-12 sm:h-16 sm:w-16 rounded-lg border-2 border-gray-300 bg-transparent text-center text-2xl font-bold [appearance:textfield] focus:border-primary focus:outline-none focus:ring-0 dark:border-gray-600 [&amp;::-webkit-inner-spin-button]:appearance-none [&amp;::-webkit-outer-spin-button]:appearance-none" maxlength="1" oninput="this.value=this.value.slice(0,1)" onkeyup="if(event.key === 'Backspace') this.previousElementSibling?.focus()" type="number"/>
</fieldset>
</div>
{/* Timer / Resend Link */}
<div className="mb-10 text-center">
<p className="text-accent text-sm">Code dubara bhejna: 0:45</p>
{/* This would be shown after timer expires */}
{/* <a href="#" className="text-secondary font-semibold text-sm hover:underline">Code dubara bhejein</a> */}
</div>
{/* Primary CTA Button */}
<div className="w-full px-4">
<button className="h-12 w-full rounded-lg bg-disabled text-white font-bold text-lg" disabled="">
                    Tasdeeq Karein
                </button>
{/* Active State Example */}
{/* <button className="h-12 w-full rounded-lg bg-primary text-white font-bold text-lg hover:bg-primary/90">
                    Tasdeeq Karein
                </button> */}
</div>
</div>
</div>
{/* Floating Action Button (Help) */}
<button className="fixed bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg">
<span className="material-symbols-outlined">help_outline</span>
</button>
</div>

    </>
  );
}
