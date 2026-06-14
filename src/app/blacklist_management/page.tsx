
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="relative flex min-h-screen w-full">
{/* SideNavBar */}
<aside className="flex flex-col w-64 bg-[#1F2937] dark:bg-[#111827] text-white sticky top-0 h-screen">
<div className="flex items-center justify-center h-20 border-b border-gray-700">
<h1 className="text-2xl font-bold text-primary">AgriConnect</h1>
</div>
<div className="flex flex-col justify-between flex-grow p-4">
<nav className="flex flex-col gap-2">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-700" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span className="text-sm font-medium">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/20 text-primary" href="#">
<span className="material-symbols-outlined">gavel</span>
<span className="text-sm font-medium">Blacklist Management</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-700" href="#">
<span className="material-symbols-outlined">group</span>
<span className="text-sm font-medium">User Management</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-700" href="#">
<span className="material-symbols-outlined">receipt_long</span>
<span className="text-sm font-medium">Transactions</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-700" href="#">
<span className="material-symbols-outlined">assessment</span>
<span className="text-sm font-medium">Reports</span>
</a>
</nav>
<div className="flex flex-col gap-2">
<div className="flex items-center gap-4 p-3 border-t border-gray-700">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="Admin user avatar"></div>
<div className="flex flex-col">
<h1 className="text-white text-sm font-medium">Karim Ahmed</h1>
<p className="text-gray-400 text-xs">Administrator</p>
</div>
</div>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-700" href="#">
<span className="material-symbols-outlined">settings</span>
<span className="text-sm font-medium">Settings</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-700" href="#">
<span className="material-symbols-outlined">logout</span>
<span className="text-sm font-medium">Logout</span>
</a>
</div>
</div>
</aside>
{/* Main Content */}
<main className="flex-1 p-8 overflow-y-auto">
<div className="w-full max-w-7xl mx-auto">
{/* PageHeading */}
<div className="flex flex-wrap items-center justify-between gap-4 mb-8">
<div className="flex flex-col gap-1">
<h1 className="text-3xl font-bold text-gray-900 dark:text-white">Blacklist Management</h1>
<p className="text-gray-600 dark:text-gray-400">Monitor, add, and manage users on the blacklist.</p>
</div>
{/* Stats */}
<div className="flex flex-wrap gap-4">
<div className="flex min-w-[200px] flex-1 flex-col gap-2 rounded-xl p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
<p className="text-base font-medium text-gray-600 dark:text-gray-300">Total Blacklisted Users</p>
<p className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">1,204</p>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
{/* Left Column: Add to Blacklist */}
<div className="lg:col-span-1 flex flex-col gap-6 sticky top-8">
{/* SectionHeader */}
<h2 className="text-2xl font-bold text-gray-900 dark:text-white">Add User to Blacklist</h2>
{/* Add User Form */}
<div className="flex flex-col gap-6 p-6 bg-white rounded-xl dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
{/* TextField for CNIC */}
<label className="flex flex-col w-full">
<p className="text-sm font-medium text-gray-700 dark:text-gray-300 pb-2">Search by CNIC</p>
<div className="relative flex items-center w-full">
<input className="w-full h-12 pl-4 pr-12 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-primary focus:border-primary" placeholder="XXXXX-XXXXXXX-X" type="text"/>
<button className="absolute inset-y-0 right-0 flex items-center justify-center w-12 text-gray-500 rounded-r-lg hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600">
<span className="material-symbols-outlined">search</span>
</button>
</div>
</label>
{/* User Profile Display (Conditional) */}
<div className="p-4 border border-dashed rounded-lg border-gray-300 dark:border-gray-600 text-center">
<p className="text-sm text-gray-500 dark:text-gray-400">Search for a user to see their profile details here.</p>
</div>
{/* Reason for Blacklisting */}
<label className="flex flex-col w-full">
<p className="text-sm font-medium text-gray-700 dark:text-gray-300 pb-2">Reason for Blacklisting</p>
<select className="w-full h-12 px-4 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-primary focus:border-primary">
<option>Select a reason...</option>
<option>Payment Default</option>
<option>Suspected Fraud</option>
<option>Multiple Failed Verifications</option>
<option>Duplicate Account</option>
<option>Court Order</option>
<option>Manual Review/Other</option>
</select>
</label>
{/* Severity */}
<div className="flex flex-col w-full gap-2">
<p className="text-sm font-medium text-gray-700 dark:text-gray-300">Severity Level</p>
<div className="grid grid-cols-3 gap-2">
<label className="flex items-center justify-center p-3 text-sm text-center border rounded-lg cursor-pointer peer-checked:bg-danger/20 peer-checked:border-danger peer-checked:text-danger dark:border-gray-600 dark:peer-checked:border-danger">
<input className="sr-only peer" name="severity" type="radio"/>
                                        Permanent
                                    </label>
<label className="flex items-center justify-center p-3 text-sm text-center border rounded-lg cursor-pointer peer-checked:bg-warning/20 peer-checked:border-warning peer-checked:text-warning dark:border-gray-600 dark:peer-checked:border-warning">
<input className="sr-only peer" name="severity" type="radio"/>
                                        Temporary
                                    </label>
<label className="flex items-center justify-center p-3 text-sm text-center border rounded-lg cursor-pointer peer-checked:bg-primary/20 peer-checked:border-primary peer-checked:text-primary dark:border-gray-600 dark:peer-checked:border-primary">
<input className="sr-only peer" name="severity" type="radio"/>
                                        Grace Period
                                    </label>
</div>
</div>
{/* Suspension End Date (Conditional) */}
<label className="flex flex-col w-full">
<p className="text-sm font-medium text-gray-700 dark:text-gray-300 pb-2">Suspension End Date</p>
<input className="w-full h-12 px-4 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-primary focus:border-primary" placeholder="Select end date" type="date"/>
</label>
{/* Evidence Upload */}
<div className="flex flex-col w-full">
<p className="text-sm font-medium text-gray-700 dark:text-gray-300 pb-2">Supporting Evidence</p>
<div className="flex items-center justify-center w-full p-6 border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600">
<div className="text-center">
<span className="material-symbols-outlined text-4xl text-gray-400">cloud_upload</span>
<p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
<span className="font-semibold text-primary">Click to upload</span> or drag and drop
                                        </p>
<p className="text-xs text-gray-500 dark:text-gray-400">PDF, PNG, JPG up to 10MB</p>
</div>
<input className="hidden" type="file"/>
</div>
</div>
<button className="w-full h-12 text-sm font-semibold text-white rounded-lg bg-danger hover:bg-danger/90">Blacklist User</button>
</div>
</div>
{/* Right Column: Current Blacklist */}
<div className="lg:col-span-2 flex flex-col gap-6">
<div className="flex flex-wrap items-center justify-between gap-4">
<h2 className="text-2xl font-bold text-gray-900 dark:text-white">Currently Blacklisted Users</h2>
<div className="flex items-center gap-2">
<button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
<span className="material-symbols-outlined text-base">download</span> Export CSV
                                </button>
<button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
<span className="material-symbols-outlined text-base">picture_as_pdf</span> Export PDF
                                </button>
</div>
</div>
{/* Data Table */}
<div className="overflow-x-auto bg-white rounded-xl dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
<tr>
<th className="px-6 py-3" scope="col">CNIC</th>
<th className="px-6 py-3" scope="col">Name</th>
<th className="px-6 py-3" scope="col">Reason</th>
<th className="px-6 py-3" scope="col">Blacklisted On</th>
<th className="px-6 py-3" scope="col">Status</th>
<th className="px-6 py-3" scope="col">Actions</th>
</tr>
</thead>
<tbody>
<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
<td className="px-6 py-4 font-mono text-gray-900 dark:text-white">35201-1234567-1</td>
<td className="px-6 py-4">Ali Raza</td>
<td className="px-6 py-4">Payment Default</td>
<td className="px-6 py-4">2023-10-26</td>
<td className="px-6 py-4"><span className="px-2 py-1 text-xs font-medium text-red-800 bg-red-100 rounded-full dark:bg-red-900 dark:text-red-300">Active</span></td>
<td className="px-6 py-4 flex items-center gap-2">
<button className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary"><span className="material-symbols-outlined">visibility</span></button>
<button className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary"><span className="material-symbols-outlined">edit</span></button>
<button className="text-gray-500 hover:text-danger dark:text-gray-400 dark:hover:text-danger"><span className="material-symbols-outlined">delete</span></button>
</td>
</tr>
<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
<td className="px-6 py-4 font-mono text-gray-900 dark:text-white">42101-9876543-2</td>
<td className="px-6 py-4">Fatima Khan</td>
<td className="px-6 py-4">Suspected Fraud</td>
<td className="px-6 py-4">2023-09-15</td>
<td className="px-6 py-4"><span className="px-2 py-1 text-xs font-medium text-red-800 bg-red-100 rounded-full dark:bg-red-900 dark:text-red-300">Active</span></td>
<td className="px-6 py-4 flex items-center gap-2">
<button className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary"><span className="material-symbols-outlined">visibility</span></button>
<button className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary"><span className="material-symbols-outlined">edit</span></button>
<button className="text-gray-500 hover:text-danger dark:text-gray-400 dark:hover:text-danger"><span className="material-symbols-outlined">delete</span></button>
</td>
</tr>
<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
<td className="px-6 py-4 font-mono text-gray-900 dark:text-white">61101-2233445-5</td>
<td className="px-6 py-4">Zainab Bibi</td>
<td className="px-6 py-4">Court Order</td>
<td className="px-6 py-4">2023-08-01</td>
<td className="px-6 py-4"><span className="px-2 py-1 text-xs font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-900 dark:text-gray-300">Expired</span></td>
<td className="px-6 py-4 flex items-center gap-2">
<button className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary"><span className="material-symbols-outlined">visibility</span></button>
<button className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary"><span className="material-symbols-outlined">edit</span></button>
<button className="text-gray-500 hover:text-danger dark:text-gray-400 dark:hover:text-danger"><span className="material-symbols-outlined">delete</span></button>
</td>
</tr>
<tr className="bg-white dark:bg-gray-800">
<td className="px-6 py-4 font-mono text-gray-900 dark:text-white">33100-5566778-9</td>
<td className="px-6 py-4">Usman Javed</td>
<td className="px-6 py-4">Duplicate Account</td>
<td className="px-6 py-4">2023-07-20</td>
<td className="px-6 py-4"><span className="px-2 py-1 text-xs font-medium text-yellow-800 bg-yellow-100 rounded-full dark:bg-yellow-900 dark:text-yellow-300">Appealed</span></td>
<td className="px-6 py-4 flex items-center gap-2">
<button className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary"><span className="material-symbols-outlined">visibility</span></button>
<button className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary"><span className="material-symbols-outlined">edit</span></button>
<button className="text-gray-500 hover:text-danger dark:text-gray-400 dark:hover:text-danger"><span className="material-symbols-outlined">delete</span></button>
</td>
</tr>
</tbody>
</table>
{/* Pagination */}
<nav aria-label="Table navigation" className="flex items-center justify-between p-4">
<span className="text-sm font-normal text-gray-500 dark:text-gray-400">Showing <span className="font-semibold text-gray-900 dark:text-white">1-4</span> of <span className="font-semibold text-gray-900 dark:text-white">1204</span></span>
<ul className="inline-flex items-center -space-x-px">
<li>
<a className="px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" href="#">Previous</a>
</li>
<li>
<a className="px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" href="#">1</a>
</li>
<li>
<a className="px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" href="#">Next</a>
</li>
</ul>
</nav>
</div>
</div>
</div>
</div>
</main>
</div>

    </>
  );
}
