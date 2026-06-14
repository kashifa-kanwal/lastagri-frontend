
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-hidden">
<div className="absolute inset-0 pattern-bg"></div>
<div className="relative layout-container flex h-full grow flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
<div className="layout-content-container flex flex-col w-full max-w-sm sm:max-w-md bg-white dark:bg-[#1A1A1A] rounded-xl shadow-2xl p-6 sm:p-8">
<div className="flex flex-col items-center gap-4 mb-6">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-3xl">shield</span>
<span className="text-2xl font-bold text-slate-800 dark:text-white">AgriConnect Admin</span>
</div>
<h1 className="text-slate-800 dark:text-white tracking-tight text-2xl font-bold text-center">Admin Portal - Secure Access</h1>
</div>
<form className="flex flex-col gap-5">
<label className="flex flex-col">
<p className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-normal pb-2">Admin ID/Username</p>
<input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 h-12 placeholder:text-slate-400 dark:placeholder:text-slate-500 p-3 text-base font-normal leading-normal" placeholder="Enter your Admin ID" defaultValue=""/>
</label>
<label className="flex flex-col">
<div className="flex justify-between items-baseline">
<p className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-normal pb-2">Password</p>
<a className="text-sm text-primary hover:underline" href="#">Forgot password?</a>
</div>
<div className="relative flex w-full flex-1 items-stretch rounded-lg">
<input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 h-12 placeholder:text-slate-400 dark:placeholder:text-slate-500 p-3 text-base font-normal leading-normal" placeholder="Enter your password" type="password" defaultValue=""/>
<button className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 dark:text-slate-500 hover:text-primary" type="button">
<span className="material-symbols-outlined text-base">visibility</span>
</button>
</div>
</label>
<div className="flex flex-col items-center">
<p className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-normal pb-2">Two-Factor Authentication Code</p>
<fieldset className="relative flex gap-2 sm:gap-3">
<input className="flex h-12 w-10 sm:h-14 sm:w-12 text-center text-lg font-semibold [appearance:textfield] focus:outline-0 focus:ring-2 focus:ring-primary/50 [&amp;::-webkit-inner-spin-button]:appearance-none [&amp;::-webkit-outer-spin-button]:appearance-none rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white" max="9" maxlength="1" min="0" onkeydown="javascript:(event.key=='Backspace'&amp;&amp;this.value===''&amp;&amp;this.previousSibling&amp;&amp;((this.previousSibling.value=''),this.previousSibling.focus()))||(event.key==='ArrowLeft'&amp;&amp;this.previousSibling&amp;&amp;this.previousSibling.focus())||(event.key==='ArrowRight'&amp;&amp;this.nextSibling&amp;&amp;this.nextSibling.focus());" onkeyup="javascript:event.key.match(/^\d$/)&amp;&amp;((this.value.length&gt;1&amp;&amp;((this.nextSibling&amp;&amp;(this.nextSibling.value=this.value.slice(1))),(this.value=this.value[0]))),(this.nextSibling&amp;&amp;this.nextSibling.focus()));" type="number" defaultValue=""/>
<input className="flex h-12 w-10 sm:h-14 sm:w-12 text-center text-lg font-semibold [appearance:textfield] focus:outline-0 focus:ring-2 focus:ring-primary/50 [&amp;::-webkit-inner-spin-button]:appearance-none [&amp;::-webkit-outer-spin-button]:appearance-none rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white" max="9" maxlength="1" min="0" onkeydown="javascript:(event.key=='Backspace'&amp;&amp;this.value===''&amp;&amp;this.previousSibling&amp;&amp;((this.previousSibling.value=''),this.previousSibling.focus()))||(event.key==='ArrowLeft'&amp;&amp;this.previousSibling&amp;&amp;this.previousSibling.focus())||(event.key==='ArrowRight'&amp;&amp;this.nextSibling&amp;&amp;this.nextSibling.focus());" onkeyup="javascript:event.key.match(/^\d$/)&amp;&amp;((this.value.length&gt;1&amp;&amp;((this.nextSibling&amp;&amp;(this.nextSibling.value=this.value.slice(1))),(this.value=this.value[0]))),(this.nextSibling&amp;&amp;this.nextSibling.focus()));" type="number" defaultValue=""/>
<input className="flex h-12 w-10 sm:h-14 sm:w-12 text-center text-lg font-semibold [appearance:textfield] focus:outline-0 focus:ring-2 focus:ring-primary/50 [&amp;::-webkit-inner-spin-button]:appearance-none [&amp;::-webkit-outer-spin-button]:appearance-none rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white" max="9" maxlength="1" min="0" onkeydown="javascript:(event.key=='Backspace'&amp;&amp;this.value===''&amp;&amp;this.previousSibling&amp;&amp;((this.previousSibling.value=''),this.previousSibling.focus()))||(event.key==='ArrowLeft'&amp;&amp;this.previousSibling&amp;&amp;this.previousSibling.focus())||(event.key==='ArrowRight'&amp;&amp;this.nextSibling&amp;&amp;this.nextSibling.focus());" onkeyup="javascript:event.key.match(/^\d$/)&amp;&amp;((this.value.length&gt;1&amp;&amp;((this.nextSibling&amp;&amp;(this.nextSibling.value=this.value.slice(1))),(this.value=this.value[0]))),(this.nextSibling&amp;&amp;this.nextSibling.focus()));" type="number" defaultValue=""/>
<input className="flex h-12 w-10 sm:h-14 sm:w-12 text-center text-lg font-semibold [appearance:textfield] focus:outline-0 focus:ring-2 focus:ring-primary/50 [&amp;::-webkit-inner-spin-button]:appearance-none [&amp;::-webkit-outer-spin-button]:appearance-none rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white" max="9" maxlength="1" min="0" onkeydown="javascript:(event.key=='Backspace'&amp;&amp;this.value===''&amp;&amp;this.previousSibling&amp;&amp;((this.previousSibling.value=''),this.previousSibling.focus()))||(event.key==='ArrowLeft'&amp;&amp;this.previousSibling&amp;&amp;this.previousSibling.focus())||(event.key==='ArrowRight'&amp;&amp;this.nextSibling&amp;&amp;this.nextSibling.focus());" onkeyup="javascript:event.key.match(/^\d$/)&amp;&amp;((this.value.length&gt;1&amp;&amp;((this.nextSibling&amp;&amp;(this.nextSibling.value=this.value.slice(1))),(this.value=this.value[0]))),(this.nextSibling&amp;&amp;this.nextSibling.focus()));" type="number" defaultValue=""/>
<input className="flex h-12 w-10 sm:h-14 sm:w-12 text-center text-lg font-semibold [appearance:textfield] focus:outline-0 focus:ring-2 focus:ring-primary/50 [&amp;::-webkit-inner-spin-button]:appearance-none [&amp;::-webkit-outer-spin-button]:appearance-none rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white" max="9" maxlength="1" min="0" onkeydown="javascript:(event.key=='Backspace'&amp;&amp;this.value===''&amp;&amp;this.previousSibling&amp;&amp;((this.previousSibling.value=''),this.previousSibling.focus()))||(event.key==='ArrowLeft'&amp;&amp;this.previousSibling&amp;&amp;this.previousSibling.focus())||(event.key==='ArrowRight'&amp;&amp;this.nextSibling&amp;&amp;this.nextSibling.focus());" onkeyup="javascript:event.key.match(/^\d$/)&amp;&amp;((this.value.length&gt;1&amp;&amp;((this.nextSibling&amp;&amp;(this.nextSibling.value=this.value.slice(1))),(this.value=this.value[0]))),(this.nextSibling&amp;&amp;this.nextSibling.focus()));" type="number" defaultValue=""/>
<input className="flex h-12 w-10 sm:h-14 sm:w-12 text-center text-lg font-semibold [appearance:textfield] focus:outline-0 focus:ring-2 focus:ring-primary/50 [&amp;::-webkit-inner-spin-button]:appearance-none [&amp;::-webkit-outer-spin-button]:appearance-none rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white" max="9" maxlength="1" min="0" onkeydown="javascript:(event.key=='Backspace'&amp;&amp;this.value===''&amp;&amp;this.previousSibling&amp;&amp;((this.previousSibling.value=''),this.previousSibling.focus()))||(event.key==='ArrowLeft'&amp;&amp;this.previousSibling&amp;&amp;this.previousSibling.focus())||(event.key==='ArrowRight'&amp;&amp;this.nextSibling&amp;&amp;this.nextSibling.focus());" onkeyup="javascript:event.key.match(/^\d$/)&amp;&amp;((this.value.length&gt;1&amp;&amp;((this.nextSibling&amp;&amp;(this.nextSibling.value=this.value.slice(1))),(this.value=this.value[0]))),(this.nextSibling&amp;&amp;this.nextSibling.focus()));" type="number" defaultValue=""/>
</fieldset>
</div>
<div className="flex items-center">
<input className="h-4 w-4 rounded border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-primary focus:ring-primary/50" id="remember-device" type="checkbox"/>
<label className="ml-2 block text-sm text-slate-700 dark:text-slate-300" htmlFor="remember-device">Remember this device</label>
</div>
<div className="flex flex-col gap-3 mt-2">
<button className="flex items-center justify-center whitespace-nowrap rounded-lg bg-primary h-12 px-6 text-base font-semibold text-white transition-colors duration-200 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50" type="submit">Login</button>
<div className="text-center text-sm font-medium text-slate-500 dark:text-slate-400">Attempts remaining: <span className="font-bold text-slate-700 dark:text-slate-200">3/3</span></div>
</div>
</form>
</div>
<footer className="mt-8 text-center text-xs text-slate-400 dark:text-slate-500 max-w-md">
<div className="flex items-center justify-center gap-4 mb-2">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-base">lock</span>
<span>Secure Connection</span>
</div>
<div className="flex items-center gap-1 rounded-full bg-green-100/10 dark:bg-green-500/10 px-2 py-0.5 border border-green-200/20 dark:border-green-500/20">
<span className="text-xs font-semibold text-green-300 dark:text-green-400">HTTPS</span>
</div>
</div>
<p>Unauthorized access is monitored and logged. Report security concerns to <a className="font-semibold text-slate-300 dark:text-slate-400 hover:underline" href="#">security@agriconnect.com</a>.</p>
</footer>
</div>
</div>

    </>
  );
}
