
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="relative flex min-h-screen w-full flex-col items-center justify-center p-4">
<div className="relative w-full max-w-2xl rounded-xl bg-white dark:bg-zinc-900 shadow-2xl ring-1 ring-border-light-gray dark:ring-zinc-800">
<button className="absolute top-4 right-4 text-zinc-500 hover:text-text-dark-gray dark:hover:text-zinc-300 transition-colors">
<span className="material-symbols-outlined">close</span>
</button>
<div className="p-8 md:p-12">
{/* Step 1: NPS Score */}
<div className="flex flex-col gap-8">
{/* Progress Bar */}
<div className="flex flex-col gap-3">
<div className="flex justify-between items-center">
<p className="text-text-dark-gray dark:text-zinc-300 text-base font-medium">Step 1 of 2</p>
</div>
<div className="w-full rounded-full bg-border-light-gray dark:bg-zinc-700">
<div className="h-2 rounded-full bg-primary-green"></div>
</div>
<p className="text-primary-green dark:text-light-green text-sm font-normal">Quarterly Feedback</p>
</div>
{/* Headline and Body Text */}
<div className="text-center">
<h1 className="text-text-dark-gray dark:text-zinc-100 tracking-tight text-3xl font-bold leading-tight">
              Kitna yaqeen hai ke aap AgriConnect doston ko recommend karein ge?
            </h1>
<p className="mt-2 text-zinc-600 dark:text-zinc-400 text-base font-normal">Aapka jawab hamaray liye bohat ahem hai.</p>
</div>
{/* Segmented Buttons for Score */}
<div className="flex flex-col">
<div className="flex w-full items-center justify-center rounded-lg bg-background-light dark:bg-background-dark p-1.5">
<div className="grid grid-cols-11 gap-1 w-full">
<label className="flex h-12 cursor-pointer items-center justify-center rounded-md text-sm font-medium transition-colors has-[:checked]:bg-primary-green has-[:checked]:text-white has-[:checked]:shadow-lg text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700">
<span>0</span><input className="sr-only" name="nps-score" type="radio" defaultValue="0"/>
</label>
<label className="flex h-12 cursor-pointer items-center justify-center rounded-md text-sm font-medium transition-colors has-[:checked]:bg-primary-green has-[:checked]:text-white has-[:checked]:shadow-lg text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700">
<span>1</span><input className="sr-only" name="nps-score" type="radio" defaultValue="1"/>
</label>
<label className="flex h-12 cursor-pointer items-center justify-center rounded-md text-sm font-medium transition-colors has-[:checked]:bg-primary-green has-[:checked]:text-white has-[:checked]:shadow-lg text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700">
<span>2</span><input className="sr-only" name="nps-score" type="radio" defaultValue="2"/>
</label>
<label className="flex h-12 cursor-pointer items-center justify-center rounded-md text-sm font-medium transition-colors has-[:checked]:bg-primary-green has-[:checked]:text-white has-[:checked]:shadow-lg text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700">
<span>3</span><input className="sr-only" name="nps-score" type="radio" defaultValue="3"/>
</label>
<label className="flex h-12 cursor-pointer items-center justify-center rounded-md text-sm font-medium transition-colors has-[:checked]:bg-primary-green has-[:checked]:text-white has-[:checked]:shadow-lg text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700">
<span>4</span><input className="sr-only" name="nps-score" type="radio" defaultValue="4"/>
</label>
<label className="flex h-12 cursor-pointer items-center justify-center rounded-md text-sm font-medium transition-colors has-[:checked]:bg-primary-green has-[:checked]:text-white has-[:checked]:shadow-lg text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700">
<span>5</span><input className="sr-only" name="nps-score" type="radio" defaultValue="5"/>
</label>
<label className="flex h-12 cursor-pointer items-center justify-center rounded-md text-sm font-medium transition-colors has-[:checked]:bg-primary-green has-[:checked]:text-white has-[:checked]:shadow-lg text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700">
<span>6</span><input className="sr-only" name="nps-score" type="radio" defaultValue="6"/>
</label>
<label className="flex h-12 cursor-pointer items-center justify-center rounded-md text-sm font-medium transition-colors has-[:checked]:bg-primary-green has-[:checked]:text-white has-[:checked]:shadow-lg text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700">
<span>7</span><input defaultChecked="" className="sr-only" name="nps-score" type="radio" defaultValue="7"/>
</label>
<label className="flex h-12 cursor-pointer items-center justify-center rounded-md text-sm font-medium transition-colors has-[:checked]:bg-primary-green has-[:checked]:text-white has-[:checked]:shadow-lg text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700">
<span>8</span><input className="sr-only" name="nps-score" type="radio" defaultValue="8"/>
</label>
<label className="flex h-12 cursor-pointer items-center justify-center rounded-md text-sm font-medium transition-colors has-[:checked]:bg-primary-green has-[:checked]:text-white has-[:checked]:shadow-lg text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700">
<span>9</span><input className="sr-only" name="nps-score" type="radio" defaultValue="9"/>
</label>
<label className="flex h-12 cursor-pointer items-center justify-center rounded-md text-sm font-medium transition-colors has-[:checked]:bg-primary-green has-[:checked]:text-white has-[:checked]:shadow-lg text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700">
<span>10</span><input className="sr-only" name="nps-score" type="radio" defaultValue="10"/>
</label>
</div>
</div>
<div className="flex justify-between px-2 pt-2">
<p className="text-zinc-500 dark:text-zinc-400 text-sm font-normal">Bilkul nahi</p>
<p className="text-zinc-500 dark:text-zinc-400 text-sm font-normal">Yaqeenan</p>
</div>
</div>
</div>
{/* Step 2: Follow-up Question (Dynamically Shown) */}
<div className="mt-10 border-t border-border-light-gray dark:border-zinc-700 pt-8">
<h2 className="text-xl font-bold text-text-dark-gray dark:text-zinc-100">Thank you! What would make your experience perfect?</h2>
<p className="mt-1 text-zinc-600 dark:text-zinc-400 text-sm">Your feedback helps us improve AgriConnect for everyone.</p>
<textarea className="mt-4 w-full rounded-lg border border-border-light-gray dark:border-zinc-700 bg-background-light dark:bg-zinc-800 p-3 text-text-dark-gray dark:text-zinc-200 focus:ring-2 focus:ring-primary-green focus:border-transparent transition" placeholder="Apni raye yahan likhein..." rows="4"></textarea>
</div>
{/* Call to Action */}
<div className="mt-8 flex justify-end">
<button className="flex items-center justify-center gap-2 rounded-lg bg-primary-green px-6 py-3 text-base font-bold text-white shadow-md hover:bg-opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-light-green focus:ring-offset-2 dark:focus:ring-offset-zinc-900 disabled:bg-zinc-300 dark:disabled:bg-zinc-600 disabled:cursor-not-allowed">
            Submit Feedback
            <span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
</div>
</div>
</div>

    </>
  );
}
