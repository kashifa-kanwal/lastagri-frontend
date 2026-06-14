
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="relative flex h-screen min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-hidden">
<div className="flex h-full grow">
{/* SideNavBar */}
<div className="flex h-full w-64 flex-col justify-between border-r border-slate-grey/10 bg-background-light dark:bg-background-dark p-4 dark:border-white/10">
<div className="flex flex-col gap-4">
<div className="flex items-center gap-3 px-3 py-2">
<svg className="size-8 text-primary" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
</svg>
<h2 className="text-slate-grey dark:text-white text-xl font-bold">AgriConnect</h2>
</div>
<div className="flex flex-col gap-2 pt-4">
<div className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-grey dark:text-white/80">
<span className="material-symbols-outlined">dashboard</span>
<p className="text-sm font-medium">Dashboard</p>
</div>
<div className="flex items-center gap-3 rounded-lg bg-primary/20 px-3 py-2 text-slate-grey dark:text-white">
<span className="material-symbols-outlined">partly_cloudy_day</span>
<p className="text-sm font-medium">Weather</p>
</div>
<div className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-grey dark:text-white/80">
<span className="material-symbols-outlined">grass</span>
<p className="text-sm font-medium">Crop Management</p>
</div>
<div className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-grey dark:text-white/80">
<span className="material-symbols-outlined">account_balance_wallet</span>
<p className="text-sm font-medium">Finances</p>
</div>
<div className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-grey dark:text-white/80">
<span className="material-symbols-outlined">groups</span>
<p className="text-sm font-medium">Community</p>
</div>
</div>
</div>
<div className="flex flex-col gap-4">
<div className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-grey dark:text-white/80">
<span className="material-symbols-outlined">settings</span>
<p className="text-sm font-medium">Settings</p>
</div>
<div className="flex items-center gap-3 border-t border-slate-grey/10 pt-4 dark:border-white/10">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="User profile picture of Ahmed Khan"></div>
<div className="flex flex-col">
<h1 className="text-slate-grey dark:text-white text-base font-medium leading-normal">Ahmed Khan</h1>
<p className="text-primary text-sm font-normal leading-normal">Faisalabad, Punjab</p>
</div>
</div>
</div>
</div>
{/* Main Content */}
<main className="flex-1 overflow-y-auto p-8">
<div className="flex flex-col gap-6">
{/* PageHeading */}
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-slate-grey dark:text-white/80 text-2xl">location_on</span>
<p className="text-slate-grey dark:text-white/80 text-lg font-medium leading-normal">Faisalabad, Punjab</p>
</div>
<button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/20 text-slate-grey dark:text-white dark:bg-primary/30 text-sm font-bold leading-normal tracking-[0.015em]">
<span className="truncate">Change Location</span>
</button>
</div>
{/* Main Grid */}
<div className="grid grid-cols-3 gap-6">
{/* Left Column */}
<div className="col-span-1 flex flex-col gap-6">
{/* Current Weather Card */}
<div className="flex flex-col gap-4 rounded-xl bg-white dark:bg-slate-grey/10 p-6 shadow-sm">
<p className="text-primary text-sm font-medium">Aaj ka Mausam (Today's Weather)</p>
<div className="flex items-start justify-between">
<p className="text-slate-grey dark:text-white text-7xl font-bold">۳۵°C</p>
<span className="material-symbols-outlined text-6xl text-harvest-gold">sunny</span>
</div>
<div className="grid grid-cols-2 gap-x-2 gap-y-4 pt-4 border-t border-slate-grey/10 dark:border-white/10">
<div className="flex flex-col gap-1">
<p className="text-primary/80 dark:text-primary/70 text-sm font-normal">Humidity</p>
<p className="text-slate-grey dark:text-white text-sm font-medium">65%</p>
</div>
<div className="flex flex-col gap-1">
<p className="text-primary/80 dark:text-primary/70 text-sm font-normal">Wind Speed</p>
<p className="text-slate-grey dark:text-white text-sm font-medium">10 km/h</p>
</div>
<div className="flex flex-col gap-1">
<p className="text-primary/80 dark:text-primary/70 text-sm font-normal">Sunrise</p>
<p className="text-slate-grey dark:text-white text-sm font-medium">5:30 AM</p>
</div>
<div className="flex flex-col gap-1">
<p className="text-primary/80 dark:text-primary/70 text-sm font-normal">Sunset</p>
<p className="text-slate-grey dark:text-white text-sm font-medium">6:45 PM</p>
</div>
</div>
</div>
{/* 7-Day Forecast */}
<div className="flex flex-col gap-4 rounded-xl bg-white dark:bg-slate-grey/10 p-6 shadow-sm">
<p className="text-primary text-sm font-medium">7-Day Forecast</p>
<div className="flex w-full space-x-3 overflow-x-auto pb-2">
<div className="flex min-w-[60px] flex-col items-center gap-2 rounded-lg bg-primary/10 dark:bg-primary/20 p-3 text-center">
<p className="text-slate-grey dark:text-white/90 text-xs font-bold">Mon</p>
<span className="material-symbols-outlined text-harvest-gold">sunny</span>
<p className="text-slate-grey dark:text-white text-sm font-medium">36°/24°</p>
</div>
<div className="flex min-w-[60px] flex-col items-center gap-2 rounded-lg bg-background-light dark:bg-slate-grey/20 p-3 text-center">
<p className="text-slate-grey dark:text-white/90 text-xs font-bold">Tue</p>
<span className="material-symbols-outlined text-sky-blue">rainy</span>
<p className="text-slate-grey dark:text-white text-sm font-medium">32°/22°</p>
</div>
<div className="flex min-w-[60px] flex-col items-center gap-2 rounded-lg bg-background-light dark:bg-slate-grey/20 p-3 text-center">
<p className="text-slate-grey dark:text-white/90 text-xs font-bold">Wed</p>
<span className="material-symbols-outlined text-slate-grey/60 dark:text-white/60">cloud</span>
<p className="text-slate-grey dark:text-white text-sm font-medium">34°/23°</p>
</div>
<div className="flex min-w-[60px] flex-col items-center gap-2 rounded-lg bg-background-light dark:bg-slate-grey/20 p-3 text-center">
<p className="text-slate-grey dark:text-white/90 text-xs font-bold">Thu</p>
<span className="material-symbols-outlined text-sky-blue">thunderstorm</span>
<p className="text-slate-grey dark:text-white text-sm font-medium">30°/21°</p>
</div>
<div className="flex min-w-[60px] flex-col items-center gap-2 rounded-lg bg-background-light dark:bg-slate-grey/20 p-3 text-center">
<p className="text-slate-grey dark:text-white/90 text-xs font-bold">Fri</p>
<span className="material-symbols-outlined text-harvest-gold">sunny</span>
<p className="text-slate-grey dark:text-white text-sm font-medium">37°/25°</p>
</div>
<div className="flex min-w-[60px] flex-col items-center gap-2 rounded-lg bg-background-light dark:bg-slate-grey/20 p-3 text-center">
<p className="text-slate-grey dark:text-white/90 text-xs font-bold">Sat</p>
<span className="material-symbols-outlined text-harvest-gold">partly_cloudy_day</span>
<p className="text-slate-grey dark:text-white text-sm font-medium">36°/24°</p>
</div>
<div className="flex min-w-[60px] flex-col items-center gap-2 rounded-lg bg-background-light dark:bg-slate-grey/20 p-3 text-center">
<p className="text-slate-grey dark:text-white/90 text-xs font-bold">Sun</p>
<span className="material-symbols-outlined text-harvest-gold">sunny</span>
<p className="text-slate-grey dark:text-white text-sm font-medium">38°/26°</p>
</div>
</div>
</div>
</div>
{/* Right Column */}
<div className="col-span-2 flex flex-col gap-6">
{/* Agricultural Advisories */}
<div className="flex flex-col gap-4 rounded-xl bg-white dark:bg-slate-grey/10 p-6 shadow-sm">
<h3 className="text-slate-grey dark:text-white text-lg font-bold">Kisani Mashwaray (Farming Advice)</h3>
<div className="grid grid-cols-2 gap-4">
<div className="flex flex-col justify-between gap-3 rounded-lg bg-background-light dark:bg-slate-grey/20 p-4">
<div className="flex items-start gap-3">
<div className="flex size-10 items-center justify-center rounded-full bg-sky-blue/20">
<span className="material-symbols-outlined text-sky-blue">water_drop</span>
</div>
<div className="flex flex-col">
<p className="font-bold text-slate-grey dark:text-white">Irrigation</p>
<p className="text-sm text-slate-grey/80 dark:text-white/70">Soil is dry. Consider watering wheat crops within 24 hours.</p>
</div>
</div>
<a className="text-right text-sm font-bold text-primary" href="#">Mazeed (More)</a>
</div>
<div className="flex flex-col justify-between gap-3 rounded-lg bg-harvest-gold/10 dark:bg-harvest-gold/20 p-4">
<div className="flex items-start gap-3">
<div className="flex size-10 items-center justify-center rounded-full bg-harvest-gold/20">
<span className="material-symbols-outlined text-harvest-gold">bug_report</span>
</div>
<div className="flex flex-col">
<p className="font-bold text-slate-grey dark:text-white">Pest Alert</p>
<p className="text-sm text-slate-grey/80 dark:text-white/70">Aphid activity reported in your area. Monitor cotton fields.</p>
</div>
</div>
<a className="text-right text-sm font-bold text-primary" href="#">Mazeed (More)</a>
</div>
<div className="flex flex-col justify-between gap-3 rounded-lg bg-background-light dark:bg-slate-grey/20 p-4">
<div className="flex items-start gap-3">
<div className="flex size-10 items-center justify-center rounded-full bg-primary/20">
<span className="material-symbols-outlined text-primary">compost</span>
</div>
<div className="flex flex-col">
<p className="font-bold text-slate-grey dark:text-white">Fertilizer</p>
<p className="text-sm text-slate-grey/80 dark:text-white/70">It's time for the second dose of Urea for the current crop stage.</p>
</div>
</div>
<a className="text-right text-sm font-bold text-primary" href="#">Mazeed (More)</a>
</div>
<div className="flex flex-col justify-between gap-3 rounded-lg bg-background-light dark:bg-slate-grey/20 p-4">
<div className="flex items-start gap-3">
<div className="flex size-10 items-center justify-center rounded-full bg-primary/20">
<span className="material-symbols-outlined text-primary">cut</span>
</div>
<div className="flex flex-col">
<p className="font-bold text-slate-grey dark:text-white">Harvest Timing</p>
<p className="text-sm text-slate-grey/80 dark:text-white/70">Clear skies expected. Ideal conditions for harvesting in 3-4 days.</p>
</div>
</div>
<a className="text-right text-sm font-bold text-primary" href="#">Mazeed (More)</a>
</div>
</div>
</div>
{/* Rainfall Prediction */}
<div className="flex flex-col gap-4 rounded-xl bg-white dark:bg-slate-grey/10 p-6 shadow-sm">
<h3 className="text-slate-grey dark:text-white text-lg font-bold">Baarish ki Peshgoi (Rainfall Prediction)</h3>
<div className="flex h-48 w-full items-end justify-between gap-4">
<div className="flex h-full w-full flex-col-reverse items-center gap-2">
<div className="w-full rounded-t-sm bg-sky-blue/30"></div>
<p className="text-xs text-slate-grey/80 dark:text-white/70">Mon</p>
</div>
<div className="flex h-full w-full flex-col-reverse items-center gap-2">
<div className="w-full rounded-t-sm bg-sky-blue"></div>
<p className="text-xs text-slate-grey/80 dark:text-white/70">Tue</p>
</div>
<div className="flex h-full w-full flex-col-reverse items-center gap-2">
<div className="w-full rounded-t-sm bg-sky-blue/30"></div>
<p className="text-xs text-slate-grey/80 dark:text-white/70">Wed</p>
</div>
<div className="flex h-full w-full flex-col-reverse items-center gap-2">
<div className="w-full rounded-t-sm bg-sky-blue"></div>
<p className="text-xs text-slate-grey/80 dark:text-white/70">Thu</p>
</div>
<div className="flex h-full w-full flex-col-reverse items-center gap-2">
<div className="w-full rounded-t-sm bg-sky-blue/30"></div>
<p className="text-xs text-slate-grey/80 dark:text-white/70">Fri</p>
</div>
<div className="flex h-full w-full flex-col-reverse items-center gap-2">
<div className="w-full rounded-t-sm bg-sky-blue/30"></div>
<p className="text-xs text-slate-grey/80 dark:text-white/70">Sat</p>
</div>
<div className="flex h-full w-full flex-col-reverse items-center gap-2">
<div className="w-full rounded-t-sm bg-sky-blue/30"></div>
<p className="text-xs text-slate-grey/80 dark:text-white/70">Sun</p>
</div>
</div>
</div>
</div>
</div>
{/* Alert Banner */}
<div className="flex items-center justify-between rounded-lg bg-alert-red/10 dark:bg-alert-red/20 px-6 py-3">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-alert-red">warning</span>
<p className="text-sm font-medium text-alert-red">Heatwave Warning: Temperatures expected to exceed 42°C over the next 3 days. Take necessary precautions for crops and livestock.</p>
</div>
<button className="material-symbols-outlined text-alert-red/70 text-lg">close</button>
</div>
{/* Footer */}
<footer className="text-center text-xs text-slate-grey/60 dark:text-white/50 pt-4">
                        Data source: Pakistan Meteorological Department
                    </footer>
</div>
</main>
</div>
</div>

    </>
  );
}
