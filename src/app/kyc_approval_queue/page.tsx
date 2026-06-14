
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="relative flex min-h-screen w-full">
{/* SideNavBar */}
<aside className="flex h-screen w-64 flex-col bg-[#172211] p-4 sticky top-0">
<div className="flex-grow flex flex-col gap-4">
<div className="flex gap-3 items-center px-2">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="Admin profile picture"></div>
<div className="flex flex-col">
<h1 className="text-white text-base font-medium leading-normal">Admin Name</h1>
<p className="text-[#a4c992] text-sm font-normal leading-normal">Administrator</p>
</div>
</div>
<nav className="flex flex-col gap-2 mt-4">
<a className="flex items-center gap-3 px-3 py-2 text-white" href="#">
<span className="material-symbols-outlined text-white">dashboard</span>
<p className="text-sm font-medium leading-normal">Dashboard</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#2f4823] text-white" href="#">
<span className="material-symbols-outlined text-white">group</span>
<p className="text-sm font-medium leading-normal">KYC Queue</p>
</a>
</nav>
</div>
<div className="flex flex-col gap-4">
<a className="flex items-center gap-3 px-3 py-2 text-white" href="#">
<span className="material-symbols-outlined text-white">settings</span>
<p className="text-sm font-medium leading-normal">Settings</p>
</a>
<button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-[#172211] text-sm font-bold leading-normal tracking-[0.015em]">
<span className="truncate">Logout</span>
</button>
</div>
</aside>
{/* Main Content */}
<main className="flex-1 p-6 lg:p-8">
<div className="flex flex-col max-w-7xl mx-auto">
{/* PageHeading */}
<div className="flex flex-wrap justify-between gap-4 items-center mb-6">
<div className="flex min-w-72 flex-col gap-2">
<p className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">KYC Approval Queue (42)</p>
<p className="text-[#a4c992] text-base font-normal leading-normal">Review and process pending user verification requests.</p>
</div>
<button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#2f4823] text-white text-sm font-bold leading-normal tracking-[0.015em]">
<span className="truncate">Bulk Approve Selected</span>
</button>
</div>
{/* Chips/Filters */}
<div className="flex gap-3 mb-6 overflow-x-auto pb-2">
<button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#2f4823] pl-4 pr-2">
<p className="text-white text-sm font-medium leading-normal">Sort by: Oldest first</p>
<span className="material-symbols-outlined text-white text-base">expand_more</span>
</button>
<button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#2f4823] pl-4 pr-2">
<p className="text-white text-sm font-medium leading-normal">High-value first</p>
<span className="material-symbols-outlined text-white text-base">expand_more</span>
</button>
<button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#2f4823] pl-4 pr-2">
<p className="text-white text-sm font-medium leading-normal">District-based</p>
<span className="material-symbols-outlined text-white text-base">expand_more</span>
</button>
</div>
<div className="flex gap-6">
{/* Left Panel: Queue List */}
<div className="w-1/3 flex-shrink-0">
<div className="flex flex-col gap-1 bg-[#172211] rounded-xl overflow-hidden">
{/* ListItem 1 (Active) */}
<div className="flex gap-4 bg-[#2f4823] px-4 py-3 justify-between border-l-4 border-primary">
<div className="flex items-start gap-4">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-[50px] flex-shrink-0" data-alt="Profile picture of Ayesha Khan"></div>
<div className="flex flex-1 flex-col justify-center">
<div className="flex items-center gap-2">
<p className="text-white text-base font-medium leading-normal">Ayesha Khan</p>
<div className="bg-yellow-500/20 text-yellow-400 text-xs font-semibold px-2 py-0.5 rounded-full">High Priority</div>
</div>
<p className="text-[#a4c992] text-sm font-normal leading-normal">All docs uploaded ✓</p>
<p className="text-[#a4c992] text-sm font-normal leading-normal">Farmer, Registered: 12 Oct 2023</p>
</div>
</div>
<div className="shrink-0 pt-1">
<input defaultChecked="" className="h-5 w-5 rounded border-[#446732] border-2 bg-transparent text-primary defaultChecked:bg-primary defaultChecked:border-primary focus:ring-0 focus:ring-offset-0" type="checkbox"/>
</div>
</div>
{/* ListItem 2 */}
<div className="flex gap-4 bg-[#172211] px-4 py-3 justify-between hover:bg-[#203119] cursor-pointer">
<div className="flex items-start gap-4">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-[50px] flex-shrink-0" data-alt="Logo of Bilal Enterprises"></div>
<div className="flex flex-1 flex-col justify-center">
<p className="text-white text-base font-medium leading-normal">Bilal Enterprises</p>
<p className="text-[#a4c992] text-sm font-normal leading-normal">All docs uploaded ✓</p>
<p className="text-[#a4c992] text-sm font-normal leading-normal">Supplier, Registered: 11 Oct 2023</p>
</div>
</div>
<div className="shrink-0 pt-1">
<input className="h-5 w-5 rounded border-[#446732] border-2 bg-transparent text-primary defaultChecked:bg-primary defaultChecked:border-primary focus:ring-0 focus:ring-offset-0" type="checkbox"/>
</div>
</div>
{/* Add more list items as needed */}
<div className="flex gap-4 bg-[#172211] px-4 py-3 justify-between hover:bg-[#203119] cursor-pointer">
<div className="flex items-start gap-4">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-[50px] flex-shrink-0" data-alt="Profile picture of Fatima Ahmed"></div>
<div className="flex flex-1 flex-col justify-center">
<p className="text-white text-base font-medium leading-normal">Fatima Ahmed</p>
<p className="text-[#a4c992] text-sm font-normal leading-normal">All docs uploaded ✓</p>
<p className="text-[#a4c992] text-sm font-normal leading-normal">Farmer, Registered: 10 Oct 2023</p>
</div>
</div>
<div className="shrink-0 pt-1">
<input className="h-5 w-5 rounded border-[#446732] border-2 bg-transparent text-primary defaultChecked:bg-primary defaultChecked:border-primary focus:ring-0 focus:ring-offset-0" type="checkbox"/>
</div>
</div>
</div>
</div>
{/* Right Panel: Review Interface */}
<div className="w-2/3 flex-grow bg-[#172211] rounded-xl p-6 flex flex-col">
<div className="flex-grow">
<div className="grid grid-cols-2 gap-6">
{/* Left side: Document Viewer */}
<div className="flex flex-col gap-4">
<h3 className="text-lg font-bold text-white">Uploaded Documents</h3>
<div className="bg-[#2f4823]/50 p-4 rounded-lg">
<img className="rounded-lg w-full" data-alt="Scanned image of the front of a National Identity Card" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9O8OFO_91gUWHRr42JMhNEIFbjio6ouRS5pTOP8IdeaQFQ_oyQKWwXJ1r_B70rONto6WIVaLUjlQXg3buqV8OJY84fc7WR9JC2aDNHWezfP9lNyppjJqKh58cxt0GKNFZB59Xc4r36xRmCW6Tzkd4xdhMmj277p4NKkprEUOm61i7HVNjaqnJW9Fe0kSb1pov4E8Z2FI1Vhdb-b03z2CfL4MGPfT0Rk-ozvWaa9YcmsvyIF8H98M5QofNKogc3QdSImikLajzmmE"/>
<div className="flex justify-center items-center gap-4 mt-3">
<button className="text-white"><span className="material-symbols-outlined">zoom_in</span></button>
<button className="text-white"><span className="material-symbols-outlined">zoom_out</span></button>
<button className="text-white"><span className="material-symbols-outlined">rotate_right</span></button>
</div>
</div>
<div className="bg-[#2f4823]/50 p-4 rounded-lg">
<img className="rounded-lg w-full" data-alt="Scanned image of the back of a National Identity Card" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbue7zA0cKr3CrQr_Yox-oIfnJH20Gd6jb5MaGY7CtP3G_q06zsT5n0XstbkcHWyiCWcHuWNczFpDSgL_pKtc_miTsE-LL8JjoVdNsCowa_XOg8tT7-nQOMU1euHYoSVkLd7e2w5DjdaF06qYdSV2D6g--Ia2OX8a2Ds13C6SXhlOPjeMNy1UXoMpIFvrsOVTCLTQRAtZ4XNUCuBlPMTBka1XsTxNy6oHmwj_NZ1Mgw4d0strgKvAmVZssxwmbDYZV--d2JhIaEpM"/>
</div>
</div>
{/* Right side: Entered Data */}
<div className="flex flex-col gap-4">
<h3 className="text-lg font-bold text-white">Entered Profile Data</h3>
<div className="space-y-3">
<div>
<label className="text-xs text-[#a4c992]">Full Name</label>
<p className="text-white bg-[#2f4823]/50 p-2 rounded-md">Ayesha Khan</p>
</div>
<div>
<label className="text-xs text-[#a4c992]">CNIC Number</label>
<p className="text-white bg-[#2f4823]/50 p-2 rounded-md">42201-1234567-8</p>
</div>
<div>
<label className="text-xs text-[#a4c992]">Address</label>
<p className="text-white bg-[#2f4823]/50 p-2 rounded-md">House 123, Street 4, Sector G-9, Islamabad</p>
</div>
</div>
<hr className="border-t border-[#2f4823] my-2"/>
<h3 className="text-lg font-bold text-white">Verification Checklist</h3>
<ul className="space-y-2">
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-400">check_circle</span> <span className="text-white text-sm">Name matches</span></li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-400">check_circle</span> <span className="text-white text-sm">CNIC format valid</span></li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-400">check_circle</span> <span className="text-white text-sm">Photo clear</span></li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-red-400">cancel</span> <span className="text-white text-sm">Address could not be verified</span></li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-400">check_circle</span> <span className="text-white text-sm">Blacklist check passed</span></li>
</ul>
<hr className="border-t border-[#2f4823] my-2"/>
<h3 className="text-lg font-bold text-white">Tools</h3>
<div className="flex flex-wrap gap-2">
<button className="flex items-center gap-2 h-9 text-sm rounded-lg bg-[#2f4823] text-white px-3"><span className="material-symbols-outlined text-base">verified_user</span> NADRA Verification</button>
<button className="flex items-center gap-2 h-9 text-sm rounded-lg bg-[#2f4823] text-white px-3"><span className="material-symbols-outlined text-base">person_search</span> Search Blacklist</button>
<button className="flex items-center gap-2 h-9 text-sm rounded-lg bg-[#2f4823] text-white px-3"><span className="material-symbols-outlined text-base">control_point_duplicate</span> Check Duplicates</button>
</div>
</div>
</div>
</div>
{/* Decision Panel */}
<div className="border-t border-[#2f4823] pt-4 mt-6 flex flex-wrap items-center justify-end gap-3">
<button className="flex items-center justify-center rounded-lg h-10 px-4 bg-yellow-600/80 hover:bg-yellow-600 text-white text-sm font-bold">
<span className="truncate">Request More Info</span>
</button>
<button className="flex items-center justify-center rounded-lg h-10 px-4 bg-red-600/80 hover:bg-red-600 text-white text-sm font-bold">
<span className="truncate">Reject</span>
</button>
<button className="flex items-center justify-center rounded-lg h-10 px-4 bg-green-600 hover:bg-green-500 text-white text-sm font-bold">
<span className="truncate">Approve</span>
</button>
</div>
</div>
</div>
</div>
</main>
</div>

    </>
  );
}
