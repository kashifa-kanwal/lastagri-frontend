
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="flex min-h-screen">
{/* SideNavBar */}
<aside className="flex-shrink-0 w-64 bg-[#172211] p-4">
<div className="flex flex-col h-full">
<div className="flex flex-col gap-4">
<div className="flex items-center gap-3 px-2">
<div className="w-10 h-10 bg-center bg-no-repeat bg-cover rounded-full" data-alt="Admin profile picture"></div>
<div className="flex flex-col">
<h1 className="font-medium leading-normal text-white text-base">Admin</h1>
<p className="font-normal leading-normal text-sm text-[#a4c992]">AgriConnect</p>
</div>
</div>
<nav className="flex flex-col gap-2 mt-4">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#2f4823]" href="#">
<span className="material-symbols-outlined text-white">dashboard</span>
<p className="font-medium leading-normal text-white text-sm">Dashboard</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#2f4823]/60 transition-colors" href="#">
<span className="material-symbols-outlined text-white">group</span>
<p className="font-medium leading-normal text-white text-sm">Users</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#2f4823]/60 transition-colors" href="#">
<span className="material-symbols-outlined text-white">receipt_long</span>
<p className="font-medium leading-normal text-white text-sm">Transactions</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#2f4823]/60 transition-colors" href="#">
<span className="material-symbols-outlined text-white">database</span>
<p className="font-medium leading-normal text-white text-sm">Services</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#2f4823]/60 transition-colors" href="#">
<span className="material-symbols-outlined text-white">settings</span>
<p className="font-medium leading-normal text-white text-sm">Settings</p>
</a>
</nav>
</div>
<div className="mt-auto flex flex-col gap-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#2f4823]/60 transition-colors" href="#">
<span className="material-symbols-outlined text-white">help_outline</span>
<p className="font-medium leading-normal text-white text-sm">Support</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#2f4823]/60 transition-colors" href="#">
<span className="material-symbols-outlined text-white">logout</span>
<p className="font-medium leading-normal text-white text-sm">Logout</p>
</a>
</div>
</div>
</aside>
{/* Main Content */}
<main className="flex-1 p-8 overflow-y-auto">
<div className="max-w-7xl mx-auto">
{/* PageHeading */}
<div className="flex flex-wrap items-center justify-between gap-4 mb-8">
<p className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">System Health Dashboard</p>
<div className="flex items-center gap-2 text-sm text-text-secondary-dark">
<span className="material-symbols-outlined text-base">sync</span>
<span>Last updated: just now</span>
</div>
</div>
{/* Status Banner Card */}
<div className="mb-8 p-6 bg-container-dark rounded-xl border border-border-dark">
<div className="flex flex-wrap items-center justify-between gap-6">
<div className="flex items-center gap-4">
<div className="w-4 h-4 rounded-full bg-status-green"></div>
<div className="flex flex-col gap-1">
<p className="text-white text-xl font-bold leading-tight">All Systems Operational</p>
<p className="text-text-secondary-dark text-sm font-normal leading-normal">Last 24 hours uptime: <span className="text-status-green font-semibold">99.97%</span></p>
</div>
</div>
<div className="flex flex-wrap gap-4">
<div className="flex flex-col gap-2 rounded-lg p-4 bg-background-dark min-w-[140px]">
<p className="text-text-secondary-dark text-sm font-medium leading-normal">Active Farmers</p>
<p className="text-white tracking-light text-2xl font-bold leading-tight">1,204</p>
</div>
<div className="flex flex-col gap-2 rounded-lg p-4 bg-background-dark min-w-[140px]">
<p className="text-text-secondary-dark text-sm font-medium leading-normal">Active Suppliers</p>
<p className="text-white tracking-light text-2xl font-bold leading-tight">88</p>
</div>
<div className="flex flex-col gap-2 rounded-lg p-4 bg-background-dark min-w-[140px]">
<p className="text-text-secondary-dark text-sm font-medium leading-normal">Active Admins</p>
<p className="text-white tracking-light text-2xl font-bold leading-tight">5</p>
</div>
</div>
</div>
</div>
{/* Server Load Section */}
<div className="mb-8">
<h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-4">Server Load</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="flex flex-col items-center justify-center gap-4 p-6 bg-container-dark rounded-xl border border-border-dark">
<div className="relative w-32 h-32">
<svg className="w-full h-full" viewBox="0 0 36 36"><path className="stroke-border-dark" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeWidth="3"></path><path className="stroke-current text-status-green" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke-dasharray="35, 100" strokeLinecap="round" strokeWidth="3"></path></svg>
<div className="absolute inset-0 flex items-center justify-center"><span className="text-white text-2xl font-bold">35%</span></div>
</div>
<p className="text-white font-semibold">CPU Usage</p>
</div>
<div className="flex flex-col items-center justify-center gap-4 p-6 bg-container-dark rounded-xl border border-border-dark">
<div className="relative w-32 h-32">
<svg className="w-full h-full" viewBox="0 0 36 36"><path className="stroke-border-dark" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeWidth="3"></path><path className="stroke-current text-status-yellow" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke-dasharray="58, 100" strokeLinecap="round" strokeWidth="3"></path></svg>
<div className="absolute inset-0 flex items-center justify-center"><span className="text-white text-2xl font-bold">58%</span></div>
</div>
<p className="text-white font-semibold">Memory Usage</p>
</div>
<div className="flex flex-col items-center justify-center gap-4 p-6 bg-container-dark rounded-xl border border-border-dark">
<div className="relative w-32 h-32">
<svg className="w-full h-full" viewBox="0 0 36 36"><path className="stroke-border-dark" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeWidth="3"></path><path className="stroke-current text-status-red" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke-dasharray="82, 100" strokeLinecap="round" strokeWidth="3"></path></svg>
<div className="absolute inset-0 flex items-center justify-center"><span className="text-white text-2xl font-bold">82%</span></div>
</div>
<p className="text-white font-semibold">Disk Usage</p>
</div>
</div>
</div>
{/* Service Status Grid */}
<div className="mb-8">
<h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-4">Service Status Grid</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
{/* Service Card Example */}
<div className="flex flex-col gap-4 p-6 bg-container-dark rounded-xl border border-border-dark">
<div className="flex items-center justify-between">
<h3 className="text-white font-semibold">Web Application</h3>
<span className="material-symbols-outlined text-status-green">check_circle</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-text-secondary-dark">Uptime</span>
<span className="text-white font-medium">99.98%</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-text-secondary-dark">Last Incident</span>
<span className="text-white font-medium">3 days ago</span>
</div>
<div>
<p className="text-sm text-text-secondary-dark mb-2">Response Time (ms)</p>
<img alt="A sparkline chart showing stable response times" className="w-full h-16 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBONvLua5sY0vC1LNe2QUEWkkCA7N1HbT_yJwfYFf2EomCwop-sBXqFWhs1QXAhxhCA5QSBlH7H4ORXPCOZNNHiciz_-_CnrKdxHEBFanBQt5lJC0RgTmi8WTEj-NuEcoWOQHxAbVhlrypqkvIk-7Zjl_FbpK7YW_I9hgmzkELJscx2b814D_DzL9tBc488hwoaCFi7X4NmvEMRPREOd-lbq7gafAmYzx7nzxb-KARVGW-jPzA4fUxrz-jMAbQFdS73T1BupVrPRWo"/>
</div>
</div>
<div className="flex flex-col gap-4 p-6 bg-container-dark rounded-xl border border-border-dark">
<div className="flex items-center justify-between">
<h3 className="text-white font-semibold">Database</h3>
<span className="material-symbols-outlined text-status-green">check_circle</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-text-secondary-dark">Uptime</span>
<span className="text-white font-medium">99.99%</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-text-secondary-dark">Last Incident</span>
<span className="text-white font-medium">15 days ago</span>
</div>
<div>
<p className="text-sm text-text-secondary-dark mb-2">Response Time (ms)</p>
<img alt="A sparkline chart showing fast and stable database response times" className="w-full h-16 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAu5ZKkJeEYK0i7i8CEpMFRGO0ZmwpzNRoTBw_fagfJDD9zVXtwgxr4_dvPyXkNXpz-6d5jU11HzTeUhZ26J-4EKyZp9L_qa2uzJrUNNG0rP6fLfHcJDkYUISTaKWewmRaxRzZhFxrTDVwyDhAYBth-RY1uNrYK6lCmhFhhq6wydURAoo6mxe0DFPxQnoS5vR9Q_ZrEdp43warObMyOLE_UxLE_3AC_bqyL23lrllvzbjDht2qk89mhmjyZL4KpaduWEesxGwsOtpc"/>
</div>
</div>
<div className="flex flex-col gap-4 p-6 bg-container-dark rounded-xl border border-border-dark">
<div className="flex items-center justify-between">
<h3 className="text-white font-semibold">Payment Gateway</h3>
<span className="material-symbols-outlined text-status-yellow">warning</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-text-secondary-dark">Uptime</span>
<span className="text-white font-medium">99.85%</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-text-secondary-dark">Last Incident</span>
<span className="text-white font-medium">2 hours ago</span>
</div>
<div>
<p className="text-sm text-text-secondary-dark mb-2">Response Time (ms)</p>
<img alt="A sparkline chart showing a recent spike in response times" className="w-full h-16 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNcy91ACcd_s77RwkDQnhRaTG5PngqidrGM3e7d6TAwmgBfVcC4zyVtLBg_mT4VIzuPhKvLdxUO1KlyEewSF8-BdJUoeYJSQReSgkM5NaJcntZPcxh6NPKYeWGdkb9LknzhPRAW9rmd26y94oY7fnFv-bCZKd32JYLinsh-0KNRDGkxO9Or23rz5jghhMMJ7zvRi11CYGJfZ_13pNHSUnisqZn39qVQDb0Xm5-Mh9g0uvrWFu4v28WTUlKimd0gM0VManXPicIFjM"/>
</div>
</div>
<div className="flex flex-col gap-4 p-6 bg-container-dark rounded-xl border border-border-dark">
<div className="flex items-center justify-between">
<h3 className="text-white font-semibold">SMS Service</h3>
<span className="material-symbols-outlined text-status-red">error</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-text-secondary-dark">Uptime</span>
<span className="text-white font-medium">98.50%</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-text-secondary-dark">Last Incident</span>
<span className="text-white font-medium">5 mins ago</span>
</div>
<div>
<p className="text-sm text-text-secondary-dark mb-2">Response Time (ms)</p>
<img alt="A sparkline chart showing a major ongoing spike in response times" className="w-full h-16 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVYxECYV2D3gnI3JlQf71uyGPZkMM9tGFjuU8vIm4TEsZEtzDBpIchzkP8xhwM2cL04mWauXeTbw5sziQ-8xR0kFhMLhhk7aIF9RNtR_8dvQr6S7WOVIrg9PGTxnj3MbOqs2GtM_rw9izqojfzpXWSskeJI9rws8i67TBZpD4TCMi7XeUGbbjyw17yyS5NWD8CZojBQsVQEN_ZAnQTGIwEHzNLpaJcAat4jIYdaHFFAqdnPqykAkTnw3x-yFkUToQusbpch7TnFog"/>
</div>
</div>
<div className="flex flex-col gap-4 p-6 bg-container-dark rounded-xl border border-border-dark">
<div className="flex items-center justify-between">
<h3 className="text-white font-semibold">Chatbot</h3>
<span className="material-symbols-outlined text-status-green">check_circle</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-text-secondary-dark">Uptime</span>
<span className="text-white font-medium">99.95%</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-text-secondary-dark">Last Incident</span>
<span className="text-white font-medium">1 week ago</span>
</div>
<div>
<p className="text-sm text-text-secondary-dark mb-2">Response Time (ms)</p>
<img alt="A sparkline chart showing stable chatbot response times" className="w-full h-16 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxDBkbje-KaHHuW89iCmntACqjsiUGrzvz5e9M6X2F0w_CF27150LI71e34JbxQ2ag6N1Nv87j2r9_28wQB7RC5W8xlmS7F21JLG0vIRWCTwrc_aaBNGAMxVRzNxY-o7JL9lVyFlfhEJM6q9iOITVXyhJGvzcD0HqX1BWuuSXn3VscRtOdENcBAQ5ZlWrWOJX2nzMnGCuxHhJwcTqFNG-_1BtCz3HaFx8kGfngTEGF5Hhm9fj0TAjoB4oUVGvZLpc3lnU_9KzpfZ4"/>
</div>
</div>
</div>
</div>
{/* Real-Time Monitoring */}
<div>
<h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-4">Real-Time Monitoring</h2>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
<div className="p-6 bg-container-dark rounded-xl border border-border-dark">
<h3 className="text-white font-semibold mb-1">Transaction Throughput</h3>
<p className="text-text-secondary-dark text-sm mb-4">Orders per minute</p>
<img alt="A line graph showing transaction throughput over the last 5 minutes." className="w-full h-64 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqA2wbVmlELjiEBnIz0xjzi2y-uoFU_wv-IjJiEOU7oMCj3o1dmo6cQXUo9cun-SfhZax3V482mEsru42WfhWM4Tka_vrTbuA7GW7hwfNPmzP8IZGnNrOoNLXe-3SUaY9A2wA_tO7y--ylHpFc2jeUutq6kZ08nTyfM5JckVGSrrv7KNFn9Cyt7uoTRO-mZbL0FkaMbsERaP6Lb3jk_4S2RsTPWFqNjtkfUJ46yH3mP6xb4Y0gZCz5cY8iI0Lk_S5ha_Ut2nvh-0U"/>
</div>
<div className="p-6 bg-container-dark rounded-xl border border-border-dark">
<h3 className="text-white font-semibold mb-1">Error Rate</h3>
<p className="text-text-secondary-dark text-sm mb-4">Errors per minute</p>
<img alt="A line graph showing error rates, with a noticeable spike." className="w-full h-64 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMcGHnR2kuSu2SR-KXz4y_QRISSDK3sJICMFod_g5FOT1miY5Xrm3VD636zEThqOafXBB8txRn7dw77B8Nyhsh0rw0Pag0hnOWVLMBs6U7K_gf3LnI19r37cMG_oAnuFM1VrcQ3oMfaolFbj539qcoCzKYdvBhBS8fg7_y0cAXGLpuNE96EJLb5_GkthM2x46Y-tTbe34HC8J_MCN_ifevPKMQwtOVDXy8gZjc1x4zbnbzh8Xd7e8ZoK0zpB5gbPGZMftBupRAD8A"/>
</div>
<div className="p-6 bg-container-dark rounded-xl border border-border-dark lg:col-span-2">
<h3 className="text-white font-semibold mb-1">API Response Times</h3>
<p className="text-text-secondary-dark text-sm mb-4">P50, P95, P99 percentiles (ms)</p>
<img alt="A multi-line graph showing P50, P95, and P99 API response times." className="w-full h-64 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpkhhy0vOfPikaf7r3pMAqZH9eQIv-yaW3jALBAMyfqANU1MmWSRbkbp0iTY2D0yDuq891Ua2ZE8PHTFA-D_9PEL4ke0TCT-e-sbopFVS02V6Ve6IrivbFWUwm67NykXx-hcGnhcckc0RG5eIL9mqxnH2IcKwnkus2SDWYJmeUDxRBzhNT-shJR2vy3s1GjpvqGNFTfQSOUcwgWqNEYniuXUq8vFdxQ5yIU__b7GSEUFNTh-NikRxrBBo3k-Ik4Hzew4k78wxkggg"/>
</div>
</div>
</div>
</div>
</main>
</div>

    </>
  );
}
