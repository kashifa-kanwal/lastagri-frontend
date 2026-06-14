
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
<div className="layout-container flex h-full grow flex-col">
<div className="flex flex-1 justify-center py-5">
<div className="layout-content-container flex flex-col w-full max-w-7xl px-4 flex-1">
{/* TopNavBar */}
<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-border-light dark:border-border-dark px-6 py-4 mb-4">
<div className="flex items-center gap-4 text-text-light dark:text-text-dark">
<span className="material-symbols-outlined text-primary text-3xl">grass</span>
<h2 className="text-xl font-bold leading-tight tracking-[-0.015em]">Weather Intelligence Dashboard</h2>
</div>
<div className="flex flex-1 justify-end items-center gap-4">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-lg">location_on</span>
<span className="text-sm font-medium">Faisalabad, Punjab</span>
</div>
<button className="flex cursor-pointer items-center justify-center rounded-lg h-10 bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark text-text-light dark:text-text-dark gap-2 text-sm font-bold leading-normal tracking-[0.015em] w-10">
<span className="material-symbols-outlined">settings</span>
</button>
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="User profile picture"></div>
</div>
</header>
{/* ActionPanel / Extreme Weather Alert */}
<div className="px-4 pb-4">
<div className="flex flex-1 flex-col items-start justify-between gap-4 rounded-xl border border-danger/50 bg-danger/10 p-5 @[480px]:flex-row @[480px]:items-center">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-danger text-3xl">cyclone</span>
<div className="flex flex-col gap-1">
<p className="text-danger text-base font-bold leading-tight">Storm Alert: Tonight 8-10 PM</p>
<p className="text-danger/80 text-base font-normal leading-normal">Aandhi ka khatra: Aaj raat 8-10 PM. Take necessary precautions for your crops and livestock.</p>
</div>
</div>
<button className="text-sm font-bold leading-normal tracking-[0.015em] flex items-center gap-2 text-text-light dark:text-text-dark">
                Dismiss
                <span className="material-symbols-outlined">close</span>
</button>
</div>
</div>
<main className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4">
{/* Left Column */}
<div className="lg:col-span-2 flex flex-col gap-6">
{/* Current Conditions & Detailed Metrics */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{/* Current Conditions Card */}
<div className="md:col-span-1 p-4">
<div className="flex flex-col gap-4 rounded-xl bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark p-6 shadow-sm h-full justify-between">
<div className="flex flex-col gap-1">
<p className="text-sm font-medium text-text-light/70 dark:text-text-dark/70">Current Conditions</p>
<p className="text-text-light dark:text-text-dark text-6xl font-bold leading-tight">28°C</p>
<p className="text-text-light/80 dark:text-text-dark/80 text-base font-normal leading-normal">Feels like 30°C</p>
</div>
<div className="flex items-center justify-between">
<span className="material-symbols-outlined text-5xl text-amber-500">partly_cloudy_day</span>
<p className="text-xs text-text-light/60 dark:text-text-dark/60">Updated 5m ago</p>
</div>
</div>
</div>
{/* Detailed Metrics */}
<div className="md:col-span-2">
<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
<div className="flex flex-col gap-2 rounded-xl p-4 border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark shadow-sm">
<p className="text-base font-medium leading-normal flex items-center gap-2"><span className="material-symbols-outlined text-lg">humidity_percentage</span>Humidity</p>
<p className="tracking-light text-2xl font-bold leading-tight">65%</p>
</div>
<div className="flex flex-col gap-2 rounded-xl p-4 border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark shadow-sm">
<p className="text-base font-medium leading-normal flex items-center gap-2"><span className="material-symbols-outlined text-lg">air</span>Wind</p>
<p className="tracking-light text-2xl font-bold leading-tight">15 km/h</p>
</div>
<div className="flex flex-col gap-2 rounded-xl p-4 border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark shadow-sm">
<p className="text-base font-medium leading-normal flex items-center gap-2"><span className="material-symbols-outlined text-lg">wb_sunny</span>UV Index</p>
<p className="tracking-light text-2xl font-bold leading-tight">7 (High)</p>
</div>
<div className="flex flex-col gap-2 rounded-xl p-4 border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark shadow-sm">
<p className="text-base font-medium leading-normal flex items-center gap-2"><span className="material-symbols-outlined text-lg">visibility</span>Visibility</p>
<p className="tracking-light text-2xl font-bold leading-tight">10 km</p>
</div>
<div className="flex flex-col gap-2 rounded-xl p-4 border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark shadow-sm">
<p className="text-base font-medium leading-normal flex items-center gap-2"><span className="material-symbols-outlined text-lg">dew_point</span>Dew Point</p>
<p className="tracking-light text-2xl font-bold leading-tight">18°C</p>
</div>
<div className="flex flex-col gap-2 rounded-xl p-4 border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark shadow-sm">
<p className="text-base font-medium leading-normal flex items-center gap-2"><span className="material-symbols-outlined text-lg">compress</span>Pressure</p>
<p className="tracking-light text-2xl font-bold leading-tight">1012 hPa</p>
</div>
</div>
</div>
</div>
{/* Forecast Section */}
<div className="flex flex-col gap-6">
<h2 className="text-2xl font-bold leading-tight tracking-[-0.015em] px-4">Forecast</h2>
{/* Hourly Forecast */}
<div className="rounded-xl border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark shadow-sm p-6">
<h3 className="text-lg font-bold mb-4">Hourly Forecast (Next 48 Hours)</h3>
<div className="w-full h-64 bg-center bg-no-repeat bg-contain" data-alt="A line graph showing temperature curve and a bar chart for precipitation probability over the next 48 hours."></div>
</div>
{/* Extended Forecast Table */}
<div className="rounded-xl border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark shadow-sm p-6 overflow-x-auto">
<h3 className="text-lg font-bold mb-4">14-Day Forecast</h3>
<table className="w-full text-sm text-left">
<thead className="text-xs uppercase bg-background-light dark:bg-background-dark border-b border-border-light dark:border-border-dark">
<tr>
<th className="px-4 py-3" scope="col">Date</th>
<th className="px-4 py-3 text-center" scope="col">Temp (H/L)</th>
<th className="px-4 py-3 text-center" scope="col">Precipitation</th>
<th className="px-4 py-3" scope="col">Wind</th>
<th className="px-4 py-3" scope="col">Sunrise/Sunset</th>
</tr>
</thead>
<tbody>
<tr className="border-b border-border-light dark:border-border-dark">
<td className="px-4 py-3 font-medium">Today <span className="font-normal text-text-light/70 dark:text-text-dark/70">/ 14 Dhul-Hijjah</span></td>
<td className="px-4 py-3 text-center">32° / 21°</td>
<td className="px-4 py-3 text-center">10%</td>
<td className="px-4 py-3">12 km/h NW</td>
<td className="px-4 py-3">5:05 AM / 7:15 PM</td>
</tr>
<tr className="border-b border-border-light dark:border-border-dark">
<td className="px-4 py-3 font-medium">Tomorrow <span className="font-normal text-text-light/70 dark:text-text-dark/70">/ 15 Dhul-Hijjah</span></td>
<td className="px-4 py-3 text-center">33° / 22°</td>
<td className="px-4 py-3 text-center">5%</td>
<td className="px-4 py-3">10 km/h W</td>
<td className="px-4 py-3">5:05 AM / 7:16 PM</td>
</tr>
<tr className="border-b border-border-light dark:border-border-dark">
<td className="px-4 py-3 font-medium">Sat, Jun 22 <span className="font-normal text-text-light/70 dark:text-text-dark/70">/ 16 Dhul-Hijjah</span></td>
<td className="px-4 py-3 text-center">34° / 23°</td>
<td className="px-4 py-3 text-center">20%</td>
<td className="px-4 py-3">15 km/h SW</td>
<td className="px-4 py-3">5:06 AM / 7:16 PM</td>
</tr>
</tbody>
</table>
</div>
</div>
{/* Analytics Section */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{/* Rainfall Analytics */}
<div className="rounded-xl border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark shadow-sm p-6">
<h3 className="text-lg font-bold mb-4">Rainfall Analytics</h3>
<p className="text-sm mb-4">Comparison of current year vs. 5-year average.</p>
<div className="w-full h-56 bg-center bg-no-repeat bg-contain" data-alt="A bar chart comparing historical rainfall data for the current year against a 5-year average."></div>
</div>
{/* Soil Moisture Estimation */}
<div className="rounded-xl border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark shadow-sm p-6">
<h3 className="text-lg font-bold mb-4">Soil Moisture Estimation</h3>
<div className="flex items-center justify-center h-56">
<div className="w-full h-full bg-center bg-no-repeat bg-contain" data-alt="A visual gauge showing soil moisture level at Optimal."></div>
</div>
<p className="text-sm text-center">Irrigation not needed for next 48 hours.</p>
</div>
</div>
</div>
{/* Right Column / Agricultural Impact */}
<div className="lg:col-span-1 flex flex-col gap-6">
<h2 className="text-2xl font-bold leading-tight tracking-[-0.015em] px-4">Agricultural Impact Analysis</h2>
<div className="flex flex-col gap-4">
{/* Suggestion Card */}
<div className="flex flex-col gap-3 rounded-xl bg-primary/10 border border-primary/50 p-5">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary">agriculture</span>
<h4 className="font-bold text-primary">Harvest Advisory</h4>
</div>
<p className="text-sm text-text-light dark:text-text-dark">Clear weather for next 5 days. Ideal for wheat harvest.</p>
</div>
{/* Warning Card */}
<div className="flex flex-col gap-3 rounded-xl bg-warning/10 border border-warning/50 p-5">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-warning">bug_report</span>
<h4 className="font-bold text-warning">Pest Alert</h4>
</div>
<p className="text-sm text-text-light dark:text-text-dark">High humidity may cause aphid outbreak. Consider preventive spray.</p>
</div>
{/* Info Card */}
<div className="flex flex-col gap-3 rounded-xl bg-info/10 border border-info/50 p-5">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-info">water_drop</span>
<h4 className="font-bold text-info">Irrigation Recommendation</h4>
</div>
<p className="text-sm text-text-light dark:text-text-dark">Next 3 days no rain expected. Irrigate wheat fields.</p>
</div>
</div>
{/* Weather Maps */}
<div className="flex flex-col gap-4 mt-2">
<h2 className="text-2xl font-bold leading-tight tracking-[-0.015em] px-4">Weather Maps</h2>
<div className="rounded-xl border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark shadow-sm p-4">
<div className="w-full h-64 bg-cover bg-center rounded-lg" data-alt="A district-level heat map showing rainfall distribution." data-location="Faisalabad District"></div>
<div className="flex justify-around mt-4">
<button className="text-sm font-bold text-primary border-b-2 border-primary pb-1">Rainfall</button>
<button className="text-sm font-medium text-text-light/70 dark:text-text-dark/70">Temperature</button>
<button className="text-sm font-medium text-text-light/70 dark:text-text-dark/70">Satellite</button>
</div>
</div>
</div>
</div>
</main>
{/* Footer */}
<footer className="text-center py-8 px-4 mt-8 border-t border-border-light dark:border-border-dark">
<p className="text-xs text-text-light/60 dark:text-text-dark/60">Weather data provided by Pakistan Meteorological Department. Updated every 3 hours.</p>
<p className="text-xs text-text-light/60 dark:text-text-dark/60 mt-1">Accuracy of forecast is subject to change. Use as a supplementary tool for farming decisions.</p>
</footer>
</div>
</div>
</div>
</div>

    </>
  );
}
