
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="flex h-screen w-full">
{/* SideNavBar */}
<aside className="flex flex-col w-64 bg-panel-light dark:bg-panel-dark border-r border-border-light dark:border-border-dark">
<div className="flex flex-col grow p-4">
<div className="flex gap-3 items-center mb-6">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="AgriConnect company logo"></div>
<div className="flex flex-col">
<h1 className="text-text-light dark:text-text-dark text-base font-bold leading-normal">AgriConnect Admin</h1>
<p className="text-text-muted-light dark:text-text-muted-dark text-sm font-normal leading-normal">Administrator Panel</p>
</div>
</div>
<nav className="flex flex-col gap-2">
<a className="flex items-center gap-3 px-3 py-2 text-text-muted-light dark:text-text-muted-dark hover:bg-gray-100 dark:hover:bg-gray-800 rounded" href="#">
<span className="material-symbols-outlined">dashboard</span>
<p className="text-sm font-medium leading-normal">Dashboard</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary" href="#">
<span className="material-symbols-outlined !fill-1">task_alt</span>
<p className="text-sm font-medium leading-normal">Verification Queue</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-text-muted-light dark:text-text-muted-dark hover:bg-gray-100 dark:hover:bg-gray-800 rounded" href="#">
<span className="material-symbols-outlined">groups</span>
<p className="text-sm font-medium leading-normal">Farmers</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-text-muted-light dark:text-text-muted-dark hover:bg-gray-100 dark:hover:bg-gray-800 rounded" href="#">
<span className="material-symbols-outlined">storefront</span>
<p className="text-sm font-medium leading-normal">Suppliers</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-text-muted-light dark:text-text-muted-dark hover:bg-gray-100 dark:hover:bg-gray-800 rounded" href="#">
<span className="material-symbols-outlined">summarize</span>
<p className="text-sm font-medium leading-normal">Reports</p>
</a>
</nav>
</div>
<div className="flex flex-col gap-1 p-4 border-t border-border-light dark:border-border-dark">
<a className="flex items-center gap-3 px-3 py-2 text-text-muted-light dark:text-text-muted-dark hover:bg-gray-100 dark:hover:bg-gray-800 rounded" href="#">
<span className="material-symbols-outlined">settings</span>
<p className="text-sm font-medium leading-normal">Settings</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-text-muted-light dark:text-text-muted-dark hover:bg-gray-100 dark:hover:bg-gray-800 rounded" href="#">
<span className="material-symbols-outlined">logout</span>
<p className="text-sm font-medium leading-normal">Logout</p>
</a>
</div>
</aside>
{/* Main Content */}
<main className="flex-1 flex flex-col h-screen overflow-hidden">
{/* Page Heading */}
<header className="flex flex-wrap justify-between items-center gap-3 p-6 border-b border-border-light dark:border-border-dark">
<div className="flex flex-col gap-1">
<h1 className="text-text-light dark:text-text-dark text-2xl font-bold leading-tight">Document Verification</h1>
<p className="text-text-muted-light dark:text-text-muted-dark text-base font-normal leading-normal">Review and approve pending documents from farmers and suppliers.</p>
</div>
<button className="flex items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 bg-gray-100 dark:bg-gray-800 text-text-light dark:text-text-dark text-sm font-bold leading-normal hover:bg-gray-200 dark:hover:bg-gray-700">
<span className="material-symbols-outlined">layers</span>
<span className="truncate">Bulk Actions</span>
</button>
</header>
<div className="flex flex-1 overflow-hidden">
{/* Left Column (Review Queue) */}
<div className="w-1/3 max-w-sm flex flex-col border-r border-border-light dark:border-border-dark bg-panel-light dark:bg-panel-dark">
<div className="p-4 border-b border-border-light dark:border-border-dark">
<label className="flex flex-col w-full">
<div className="flex w-full flex-1 items-stretch rounded-lg h-11">
<div className="text-text-muted-light dark:text-text-muted-dark flex bg-gray-100 dark:bg-gray-800 items-center justify-center pl-3 rounded-l-lg border-r-0">
<span className="material-symbols-outlined">search</span>
</div>
<input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border-none bg-gray-100 dark:bg-gray-800 h-full placeholder:text-text-muted-light dark:placeholder:text-text-muted-dark px-2 text-sm font-normal" placeholder="Search by User ID, document type..."/>
</div>
</label>
<div className="flex gap-2 pt-3 overflow-x-auto">
<button className="flex h-8 shrink-0 items-center justify-center gap-x-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 px-3">
<span className="material-symbols-outlined text-text-muted-light dark:text-text-muted-dark">swap_vert</span>
<p className="text-text-light dark:text-text-dark text-xs font-medium">Sort by: Priority</p>
</button>
<button className="flex h-8 shrink-0 items-center justify-center gap-x-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 px-3">
<p className="text-text-light dark:text-text-dark text-xs font-medium">Status: Pending</p>
<span className="material-symbols-outlined text-text-muted-light dark:text-text-muted-dark">arrow_drop_down</span>
</button>
</div>
</div>
<div className="flex-1 overflow-y-auto">
{/* List Item Selected */}
<div className="flex gap-4 p-4 justify-between bg-primary/10 border-l-4 border-primary">
<input className="form-checkbox rounded border-gray-400 text-primary focus:ring-primary/50 mt-1" type="checkbox"/>
<div className="flex items-start gap-3 flex-1">
<img className="aspect-square rounded-full h-10 w-10 object-cover" data-alt="Profile picture of Ahmad Al-Falah" src="https://lh3.googleusercontent.com/aida-public/AB6AXuApoZ8Lxu47bIJOj1UUEmOfLRp8ag9-u0K6HVdLYGwwAv4Tc5YmhdPP3dMd3NMATR0wlXfPmz7jmeYrcynDSOYJc4EPyjXjXtS3VUHYR5we5O2-Lv1n5d8qN58Vga3bG1MdOv_mpHJp1AP_jIIewq_9-Xpfn5Fy2LFLtw4TPDe24jAKpV057fjbwHWLEKhvsaY73zhfaqwUA9FrdY29nqjLlJ283_-XJLtB9dICT-hJ9M90j9WYAx2sSF-CIZ7ZjID_N0lcDAy5_JA"/>
<div className="flex flex-1 flex-col justify-center">
<p className="text-text-light dark:text-text-dark text-sm font-bold leading-normal">Ahmad Al-Falah</p>
<div className="flex items-center gap-1.5">
<span className="inline-block size-2 rounded-full bg-accent"></span>
<p className="text-accent text-xs font-medium">High Priority</p>
</div>
<p className="text-text-muted-light dark:text-text-muted-dark text-xs">National ID</p>
</div>
</div>
<div className="shrink-0"><p className="text-text-muted-light dark:text-text-muted-dark text-xs font-normal">2024-10-26</p></div>
</div>
{/* Other List Items */}
<div className="flex gap-4 px-4 py-3 justify-between items-center border-b border-border-light dark:border-border-dark hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer">
<input className="form-checkbox rounded border-gray-400 text-primary focus:ring-primary/50" type="checkbox"/>
<div className="flex items-start gap-3 flex-1">
<img className="aspect-square rounded-full h-10 w-10 object-cover" data-alt="Profile picture of Budi Santoso" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD10j0RoycaBhBpcfTXNMsiNIZsNTgQP6ihuL1RfuHlJMbRzu_BwrIwOFlrOGL6ymWLg0QViMBoPiNnnLQz4wTBRUosBxvF7-WIVR4oc8R4r_KzU6ikJ4swwE4ygwNAWGOfIrbmkj9d3NR-8wyoIGnJ7aKLHmg8bQjJCXPJYpbhPN-ySI9nLGxff7jGX3dt360k8Akf7sOrkSZcSr8b9IGjuGf8GU6KUrDgp9Ewwbfhw2yV3e0xUQ3hq5Pu_CQRWYQO5gnvBjh5yyE"/>
<div className="flex flex-1 flex-col justify-center">
<p className="text-text-light dark:text-text-dark text-sm font-semibold">Budi Santoso</p>
<p className="text-text-muted-light dark:text-text-muted-dark text-xs">Business License</p>
</div>
</div>
<div className="shrink-0"><p className="text-text-muted-light dark:text-text-muted-dark text-xs">2024-10-25</p></div>
</div>
<div className="flex gap-4 px-4 py-3 justify-between items-center border-b border-border-light dark:border-border-dark hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer">
<input className="form-checkbox rounded border-gray-400 text-primary focus:ring-primary/50" type="checkbox"/>
<div className="flex items-start gap-3 flex-1">
<img className="aspect-square rounded-full h-10 w-10 object-cover" data-alt="Profile picture of Fatima Zahra" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiomYEyquYLvLUnrtm1EaiYlwcVweGAsn9uX5BfJjYmfb2cqz2YXQ_1Ab8JMPPc6cWCfMMnWmvd7md1YBoztJT8jlPlOIafzKvbNFlnhifOZFehaslbzqO5ETNHHtG1MmSOW4p_yrx95Cr9PNVHBvCf_EV5BUoHQ_s9FpaVph4OduKWXAGyplrIig10tKHuW0NtlTE21cAxGOhd8xM6jdiCCTs0qAoBOcTpIheng9KIvwbkc4l-w5bgXDygZFagWZNUB7ODNkS5cg"/>
<div className="flex flex-1 flex-col justify-center">
<p className="text-text-light dark:text-text-dark text-sm font-semibold">Fatima Zahra</p>
<p className="text-text-muted-light dark:text-text-muted-dark text-xs">Tax Certificate</p>
</div>
</div>
<div className="shrink-0"><p className="text-text-muted-light dark:text-text-muted-dark text-xs">2024-10-24</p></div>
</div>
</div>
</div>
{/* Center Column (Document Viewer & Comparison) */}
<div className="flex-1 flex flex-col bg-background-light dark:bg-background-dark overflow-y-auto">
<div className="grid grid-cols-2 gap-6 p-6 flex-1">
{/* Document Viewer */}
<div className="flex flex-col bg-panel-light dark:bg-panel-dark rounded-lg border border-border-light dark:border-border-dark shadow-sm">
<div className="flex justify-between items-center p-3 border-b border-border-light dark:border-border-dark">
<h3 className="font-bold text-base text-text-light dark:text-text-dark">National ID - Ahmad Al-Falah</h3>
<div className="flex items-center gap-1">
<button className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-text-muted-light dark:text-text-muted-dark"><span className="material-symbols-outlined">zoom_in</span></button>
<button className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-text-muted-light dark:text-text-muted-dark"><span className="material-symbols-outlined">zoom_out</span></button>
<button className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-text-muted-light dark:text-text-muted-dark"><span className="material-symbols-outlined">rotate_right</span></button>
</div>
</div>
<div className="flex-1 p-4 relative bg-gray-50 dark:bg-gray-900/50 flex items-center justify-center">
<img className="max-w-full max-h-full object-contain rounded" data-alt="A sample national ID card for document verification" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAw-j6sCvggah87m1xeuHqw9evxNTQyor6bPUtEYdutXOM32CWRzrhTvq4tIaSXtI4cGKz781Domw_Fu1auXhmHvtvss2tW_VoX2Sot0Ki-xkYUwwGnLcjGIai6XjZmfYd2KMSPn_uYsKSN7pXUXdS8B8BlMNsnlmqaoNKVm1heAY2c1Rd2WwbrPWOjHvmpZDBTfxg7OQfwqLzuAho3nwfcF51E84hCxxoyrZTAGteL0lvxkcTuQo733hIgxFbE3eL9ROLcL2FDr_o"/>
<div className="absolute bottom-2 right-2 text-xs text-black/20 dark:text-white/20 font-mono select-none">Admin: ADM-007 | 2024-10-27 14:32:01</div>
</div>
</div>
{/* Profile Data */}
<div className="flex flex-col bg-panel-light dark:bg-panel-dark rounded-lg border border-border-light dark:border-border-dark shadow-sm">
<div className="p-3 border-b border-border-light dark:border-border-dark">
<h3 className="font-bold text-base text-text-light dark:text-text-dark">Profile Data Comparison</h3>
</div>
<div className="flex-1 p-4 space-y-4">
<div>
<p className="text-xs font-medium text-text-muted-light dark:text-text-muted-dark">Full Name</p>
<p className="text-base text-text-light dark:text-text-dark">Ahmad Al-Falah</p>
</div>
<div>
<p className="text-xs font-medium text-text-muted-light dark:text-text-muted-dark">Date of Birth</p>
<p className="text-base text-text-light dark:text-text-dark">1985-03-15</p>
</div>
<div>
<p className="text-xs font-medium text-text-muted-light dark:text-text-muted-dark">ID Number</p>
<p className="text-base font-mono text-text-light dark:text-text-dark bg-gray-100 dark:bg-gray-800 p-2 rounded">19850315-**-****</p>
</div>
<div>
<p className="text-xs font-medium text-text-muted-light dark:text-text-muted-dark">Address</p>
<p className="text-base text-text-light dark:text-text-dark">123 Palm Grove, Amman, Jordan</p>
</div>
<div>
<p className="text-xs font-medium text-text-muted-light dark:text-text-muted-dark">Expiry Date</p>
<p className="text-base text-text-light dark:text-text-dark">2028-12-31</p>
</div>
</div>
</div>
</div>
</div>
{/* Right Column (Action & Info Hub) */}
<div className="w-1/3 max-w-sm flex flex-col border-l border-border-light dark:border-border-dark bg-panel-light dark:bg-panel-dark overflow-y-auto">
<div className="p-4 space-y-5">
{/* Verification Checklist */}
<div>
<h3 className="font-bold text-base text-text-light dark:text-text-dark mb-3">Verification Checklist</h3>
<ul className="space-y-2">
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary !fill-1">check_circle</span>
<p className="text-sm text-text-light dark:text-text-dark">Image is clear and legible</p>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary !fill-1">check_circle</span>
<p className="text-sm text-text-light dark:text-text-dark">Details match profile data</p>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary !fill-1">check_circle</span>
<p className="text-sm text-text-light dark:text-text-dark">Document is not expired</p>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-danger !fill-1">cancel</span>
<p className="text-sm text-text-light dark:text-text-dark">No signs of tampering</p>
</li>
</ul>
</div>
{/* Actions */}
<div>
<h3 className="font-bold text-base text-text-light dark:text-text-dark mb-3">Actions</h3>
<div className="flex flex-col gap-2">
<button className="w-full flex items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 bg-secondary text-white text-sm font-bold hover:bg-secondary/90">
<span className="material-symbols-outlined">check</span>
<span className="truncate">Approve Document</span>
</button>
<button className="w-full flex items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 bg-danger text-white text-sm font-bold hover:bg-danger/90">
<span className="material-symbols-outlined">close</span>
<span className="truncate">Reject Document</span>
</button>
<button className="w-full flex items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 bg-gray-200 dark:bg-gray-700 text-text-light dark:text-text-dark text-sm font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
<span className="material-symbols-outlined">upload_file</span>
<span className="truncate">Request Resubmission</span>
</button>
</div>
</div>
</div>
<div className="border-t border-border-light dark:border-border-dark p-4 space-y-4">
{/* Audit Trail */}
<div>
<h3 className="font-bold text-base text-text-light dark:text-text-dark mb-3">Audit Trail</h3>
<ul className="space-y-2 text-xs text-text-muted-light dark:text-text-muted-dark max-h-32 overflow-y-auto pr-2">
<li className="flex justify-between"><span>Viewed by ADM-007</span> <span>14:32:01</span></li>
<li className="flex justify-between"><span>Auto-checked for tampering</span> <span>14:30:15</span></li>
<li className="flex justify-between"><span>Submitted by User-101</span> <span>14:30:05</span></li>
</ul>
</div>
{/* Privacy & Compliance */}
<div>
<h3 className="font-bold text-base text-text-light dark:text-text-dark mb-2">Privacy &amp; Compliance</h3>
<ul className="list-disc list-inside space-y-1 text-xs text-text-muted-light dark:text-text-muted-dark">
<li>Data is retained for 5 years post-account closure.</li>
<li>User has consented to data processing for verification.</li>
<li>Admin access and downloads are logged.</li>
<li>Sensitive data is auto-redacted in logs.</li>
</ul>
</div>
</div>
</div>
</div>
</main>
</div>

    </>
  );
}
