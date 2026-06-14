
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="relative flex h-auto min-h-screen w-full">
{/* SideNavBar */}
<aside className="flex flex-col w-64 p-4 bg-surface-light dark:bg-surface-dark border-r border-border-light dark:border-border-dark">
<div className="flex flex-col gap-4">
<div className="flex items-center gap-3 px-2">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="AgriConnect company logo"></div>
<div className="flex flex-col">
<h1 className="text-base font-bold">AgriConnect</h1>
<p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">Document Center</p>
</div>
</div>
<nav className="flex flex-col gap-2 mt-6">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary dark:bg-primary/20" href="#">
<span className="material-symbols-outlined">folder</span>
<p className="text-sm font-medium">All Documents</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5" href="#">
<span className="material-symbols-outlined">badge</span>
<p className="text-sm font-medium">Identity Proof</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5" href="#">
<span className="material-symbols-outlined">home_pin</span>
<p className="text-sm font-medium">Address Proof</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5" href="#">
<span className="material-symbols-outlined">business_center</span>
<p className="text-sm font-medium">Business Docs</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5" href="#">
<span className="material-symbols-outlined">verified_user</span>
<p className="text-sm font-medium">Insurance</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5" href="#">
<span className="material-symbols-outlined">more_horiz</span>
<p className="text-sm font-medium">Other</p>
</a>
</nav>
</div>
</aside>
{/* Main Content */}
<main className="flex-1 p-8">
<div className="w-full max-w-6xl mx-auto">
{/* PageHeading */}
<div className="flex flex-wrap items-center justify-between gap-3 mb-6">
<h1 className="text-4xl font-black tracking-tighter">My Documents</h1>
<button className="flex items-center justify-center gap-2 min-w-[84px] cursor-pointer overflow-hidden rounded-lg h-10 px-4 bg-accent text-white text-sm font-bold leading-normal tracking-[0.015em]">
<span className="material-symbols-outlined">add</span>
<span className="truncate">Upload Document</span>
</button>
</div>
{/* ActionPanel (Notification Banner) */}
<div className="mb-6 @container">
<div className="flex flex-1 flex-col items-start justify-between gap-4 rounded-lg border border-status-pending/50 bg-status-pending/10 p-5 @[480px]:flex-row @[480px]:items-center">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-status-pending">warning</span>
<div className="flex flex-col gap-1">
<p className="text-base font-bold">Upcoming document expiry</p>
<p className="text-sm font-normal text-text-secondary-light dark:text-text-secondary-dark">Your Crop Insurance Policy will expire in 28 days. Please upload a renewed version.</p>
</div>
</div>
<button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-primary text-white text-sm font-medium leading-normal">
<span className="truncate">Renew Now</span>
</button>
</div>
</div>
{/* Upload Interface (Modified EmptyState and ButtonGroup) */}
<div className="p-4 mb-8 bg-surface-light dark:bg-surface-dark rounded-xl">
<div className="flex flex-col items-center gap-6 rounded-xl border-2 border-dashed border-border-light dark:border-border-dark px-6 py-14">
<div className="flex flex-col items-center gap-2 text-center">
<span className="material-symbols-outlined text-5xl text-accent">cloud_upload</span>
<p className="text-lg font-bold tracking-tight">Upload New Document</p>
<p className="text-sm text-text-secondary-light dark:text-text-secondary-dark max-w-sm">Drag &amp; drop files here, or click to browse. Accepted formats: JPG, PNG, PDF. Max 5MB.</p>
</div>
<div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
<button className="flex min-w-[84px] grow cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 bg-accent/10 text-accent dark:bg-accent/20 text-sm font-bold leading-normal">
<span className="material-symbols-outlined">upload_file</span>
<span className="truncate">Browse Files</span>
</button>
<button className="flex min-w-[84px] grow cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 bg-black/5 dark:bg-white/5 text-sm font-bold leading-normal">
<span className="material-symbols-outlined">photo_camera</span>
<span className="truncate">Use Webcam</span>
</button>
</div>
</div>
</div>
{/* Document Cards Grid */}
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
{/* Document Card - Verified */}
<div className="flex flex-col bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark overflow-hidden">
<div className="bg-gray-200 dark:bg-gray-700 h-32 flex items-center justify-center">
<img className="object-cover w-full h-full" data-alt="Preview of National ID Card" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMy_VREgCqP0DiPfN8Aw4_DkRq0Q08goyGt3_HmDWlz72bgETgfjNeOduH2yrpnz5d91NN2LQL8Rk-9CRZdjehvWxKtWJhwdLXbsc_NdY8RsrNpvOf68I03UgfwcK_Mg_or9xJAmMYLGpqv5F5jmYibPvKXbcO1UFYu6SltI9-Cf7nvLUvEPM3wQ9S2PKsw_-Fdco_wdFvhjpHzIVJ--rfHFfq2pgcPSxJrBAwg1vdbzjzyko6ohVTyVVCYrrbR4xD5c1AO9IvBbQ"/>
</div>
<div className="p-4 flex flex-col gap-3">
<div className="flex items-center justify-between">
<span className="text-xs font-semibold px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">CNIC Front</span>
<div className="flex items-center gap-1 text-primary">
<span className="material-symbols-outlined text-base">check_circle</span>
<span className="text-xs font-bold">Verified</span>
</div>
</div>
<h3 className="font-bold truncate">cnic_front_2023.jpg</h3>
<p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">Uploaded: 12 Aug 2023 • 1.2MB</p>
</div>
<div className="p-2 border-t border-border-light dark:border-border-dark bg-black/5 dark:bg-white/5 flex justify-around">
<button className="p-2 rounded-md hover:bg-black/10 dark:hover:bg-white/10" title="View"><span className="material-symbols-outlined text-lg">visibility</span></button>
<button className="p-2 rounded-md hover:bg-black/10 dark:hover:bg-white/10" title="Download"><span className="material-symbols-outlined text-lg">download</span></button>
<button className="p-2 rounded-md hover:bg-black/10 dark:hover:bg-white/10" title="Replace"><span className="material-symbols-outlined text-lg">change_circle</span></button>
<button className="p-2 rounded-md hover:bg-red-500/10 text-status-rejected" title="Delete"><span className="material-symbols-outlined text-lg">delete</span></button>
</div>
</div>
{/* Document Card - Pending Review */}
<div className="flex flex-col bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark overflow-hidden">
<div className="bg-gray-200 dark:bg-gray-700 h-32 flex items-center justify-center">
<img className="object-cover w-full h-full" data-alt="Preview of a utility bill" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUmAGGOlX1dHU4sDrwJupZEEvGd30SI4H__CuQFhskJjx_Jp9lWgPoQrQFUGIRV8_upnMQnRTJ53mdyyJv__4E0S_POEqLq64UsWs4bUtyxUOuGnFdQ4OWIbTYswvP4LOki2c9HLMD-tbznXPyC8BZwzjzPGH85m0m4WqqriR_x6HtgBjR7N5pDWeOEmAtvLSluLxWyx9DaSCOhxiedRjoCmd7f_ho7uQbvbE8YALfvVGHeatxlUpyUj9knFL4zXgkqywyBXOFF0A"/>
</div>
<div className="p-4 flex flex-col gap-3">
<div className="flex items-center justify-between">
<span className="text-xs font-semibold px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200">Utility Bill</span>
<div className="flex items-center gap-1 text-status-pending">
<span className="material-symbols-outlined text-base">schedule</span>
<span className="text-xs font-bold">Pending</span>
</div>
</div>
<h3 className="font-bold truncate">electricity_bill_sept.pdf</h3>
<p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">Uploaded: 05 Sep 2023 • 850KB</p>
</div>
<div className="p-2 border-t border-border-light dark:border-border-dark bg-black/5 dark:bg-white/5 flex justify-around">
<button className="p-2 rounded-md hover:bg-black/10 dark:hover:bg-white/10" title="View"><span className="material-symbols-outlined text-lg">visibility</span></button>
<button className="p-2 rounded-md hover:bg-black/10 dark:hover:bg-white/10" title="Download"><span className="material-symbols-outlined text-lg">download</span></button>
<button className="p-2 rounded-md hover:bg-black/10 dark:hover:bg-white/10" title="Replace"><span className="material-symbols-outlined text-lg">change_circle</span></button>
<button className="p-2 rounded-md hover:bg-red-500/10 text-status-rejected" title="Delete"><span className="material-symbols-outlined text-lg">delete</span></button>
</div>
</div>
{/* Document Card - Rejected */}
<div className="flex flex-col bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark overflow-hidden">
<div className="bg-gray-200 dark:bg-gray-700 h-32 flex items-center justify-center">
<img className="object-cover w-full h-full" data-alt="Preview of a rejected document" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5MdqHnFJwLleP6f87F5TizklmTT5AlD5UAtRCypBs4lKwd0PfTJlxwAi_f71wGppMkbZhy0AprlhgvRJt0alCvrhnJvB9hzzuxxKZdVYXbLKXzmfBryBLuyRZq7ABpmi5Cc9e3YDIEpHOib7E4UXQJ1LqOGurFTFscJwpKPq1G_jZl_DfE26ASpdet2njZFuYNTprWJBR-Hq-iinI13NqRf0Cxm1yykJOHK1ATMQcJBUdUxbZLxo7LFUCqJoEZFUg-r2tfkbYIk0"/>
</div>
<div className="p-4 flex flex-col gap-3">
<div className="flex items-center justify-between">
<span className="text-xs font-semibold px-2 py-1 rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">Land Ownership</span>
<div className="flex items-center gap-1 text-status-rejected">
<span className="material-symbols-outlined text-base">cancel</span>
<span className="text-xs font-bold">Rejected</span>
</div>
</div>
<h3 className="font-bold truncate">farm_deed_scan.png</h3>
<p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">Uploaded: 01 Sep 2023 • 2.1MB</p>
</div>
<div className="p-2 border-t border-border-light dark:border-border-dark bg-black/5 dark:bg-white/5 flex justify-around">
<button className="p-2 rounded-md hover:bg-black/10 dark:hover:bg-white/10" title="View"><span className="material-symbols-outlined text-lg">visibility</span></button>
<button className="p-2 rounded-md hover:bg-black/10 dark:hover:bg-white/10" title="Download"><span className="material-symbols-outlined text-lg">download</span></button>
<button className="p-2 rounded-md hover:bg-black/10 dark:hover:bg-white/10" title="Replace"><span className="material-symbols-outlined text-lg">change_circle</span></button>
<button className="p-2 rounded-md hover:bg-red-500/10 text-status-rejected" title="Delete"><span className="material-symbols-outlined text-lg">delete</span></button>
</div>
</div>
{/* Document Card - Expiring */}
<div className="flex flex-col bg-surface-light dark:bg-surface-dark rounded-xl border-2 border-status-pending overflow-hidden">
<div className="bg-gray-200 dark:bg-gray-700 h-32 flex items-center justify-center">
<img className="object-cover w-full h-full" data-alt="Preview of an insurance document" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaOijNRXCQcc3X3hWsFkg_0FsIfUnEdLp97TDNeaaf4aTJV8EFkfJ0oiAaw8RaKvtREItXt7jWtJV5q_O2B7j5mF2m81Eg8FndyNUJFhiuQy0iakUCKys1gSwL2FDd26HhZa8TLpjQTSlL5Zk8FZxfmiotCcC8Op0xTC7c-skW440ecHq8l_G29fYYVNflUQSySTkSrZMCQS0J8xOndcXHV19f3uEMVZej2vu9e4f4XG3VK6xzP3giZTygFmpWxgm5Q4nxa4qPh7s"/>
</div>
<div className="p-4 flex flex-col gap-3">
<div className="flex items-center justify-between">
<span className="text-xs font-semibold px-2 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200">Crop Insurance</span>
<div className="flex items-center gap-1 text-primary">
<span className="material-symbols-outlined text-base">check_circle</span>
<span className="text-xs font-bold">Verified</span>
</div>
</div>
<h3 className="font-bold truncate">crop_insurance_23.pdf</h3>
<p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">Expires: 15 Oct 2023 • 4.5MB</p>
</div>
<div className="p-2 border-t border-status-pending bg-black/5 dark:bg-white/5 flex justify-around">
<button className="p-2 rounded-md hover:bg-black/10 dark:hover:bg-white/10" title="View"><span className="material-symbols-outlined text-lg">visibility</span></button>
<button className="p-2 rounded-md hover:bg-black/10 dark:hover:bg-white/10" title="Download"><span className="material-symbols-outlined text-lg">download</span></button>
<button className="p-2 rounded-md hover:bg-black/10 dark:hover:bg-white/10" title="Replace"><span className="material-symbols-outlined text-lg">change_circle</span></button>
<button className="p-2 rounded-md hover:bg-red-500/10 text-status-rejected" title="Delete"><span className="material-symbols-outlined text-lg">delete</span></button>
</div>
</div>
</div>
</div>
</main>
</div>

    </>
  );
}
