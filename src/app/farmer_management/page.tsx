
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
<div className="layout-container flex h-full grow flex-col">
<div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 flex flex-1 justify-center py-5">
<div className="layout-content-container flex flex-col w-full max-w-screen-2xl flex-1">
{/* Page Heading and Actions */}
<div className="flex flex-wrap justify-between items-center gap-4 p-4">
<p className="text-3xl lg:text-4xl font-black tracking-[-0.033em] min-w-72">Farmer Management</p>
<div className="flex flex-1 gap-3 flex-wrap justify-start sm:justify-end">
<button className="flex min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 bg-gray-200 dark:bg-surface-dark text-text-light-primary dark:text-dark-primary text-sm font-bold leading-normal tracking-[0.015em]">
<span className="material-symbols-outlined text-base">download</span>
<span className="truncate">Export List</span>
</button>
<button className="flex min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]">
<span className="material-symbols-outlined text-base">add</span>
<span className="truncate">Add Farmer</span>
</button>
</div>
</div>
{/* Filters Accordion */}
<div className="flex flex-col p-4 gap-3">
<details className="flex flex-col rounded-lg border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark px-[15px] group" open="">
<summary className="flex cursor-pointer items-center justify-between gap-6 py-3">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-text-light-secondary dark:text-dark-secondary">filter_list</span>
<p className="text-sm font-medium leading-normal">Filters</p>
</div>
<div className="material-symbols-outlined text-text-light-secondary dark:text-dark-secondary group-open:rotate-180 transition-transform">expand_more</div>
</summary>
<div className="border-t border-border-light dark:border-border-dark pt-4 pb-4">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
{/* Search Input */}
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-text-light-secondary dark:text-dark-secondary">Search by Name, CNIC, Phone</label>
<input className="w-full h-10 px-3 rounded-md border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-sm focus:ring-2 focus:ring-primary focus:border-primary" placeholder="Start typing to search..." type="text"/>
</div>
{/* Registration Status */}
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-text-light-secondary dark:text-dark-secondary">Registration Status</label>
<select className="w-full h-10 px-3 rounded-md border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-sm focus:ring-2 focus:ring-primary focus:border-primary">
<option>All</option>
<option>Pending</option>
<option>Approved</option>
<option>Rejected</option>
</select>
</div>
{/* Risk Category */}
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-text-light-secondary dark:text-dark-secondary">Risk Category</label>
<select className="w-full h-10 px-3 rounded-md border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-sm focus:ring-2 focus:ring-primary focus:border-primary">
<option>All</option>
<option>Low</option>
<option>Medium</option>
<option>High</option>
</select>
</div>
{/* District */}
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-text-light-secondary dark:text-dark-secondary">District</label>
<select className="w-full h-10 px-3 rounded-md border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-sm focus:ring-2 focus:ring-primary focus:border-primary">
<option>All Districts</option>
<option>Sahiwal</option>
<option>Multan</option>
<option>Faisalabad</option>
<option>Lahore</option>
</select>
</div>
</div>
<div className="flex justify-end gap-3 mt-4">
<button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-gray-200 dark:bg-surface-dark text-text-light-primary dark:text-dark-primary text-sm font-bold leading-normal">Clear All</button>
<button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-primary text-white text-sm font-bold leading-normal">Apply Filters</button>
</div>
</div>
</details>
</div>
{/* Table */}
<div className="px-4 py-3 @container">
<div className="flex flex-col overflow-hidden rounded-lg border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark">
<div className="overflow-x-auto">
<table className="w-full">
<thead className="bg-gray-50 dark:bg-gray-900/20">
<tr>
<th className="px-4 py-3 text-left w-12"><input className="h-4 w-4 rounded border-border-light dark:border-border-dark bg-transparent text-primary defaultChecked:bg-primary focus:ring-primary/50" type="checkbox"/></th>
<th className="px-4 py-3 text-left text-xs font-medium text-text-light-secondary dark:text-dark-secondary uppercase tracking-wider w-14">Avatar</th>
<th className="px-4 py-3 text-left text-xs font-medium text-text-light-secondary dark:text-dark-secondary uppercase tracking-wider">Farmer</th>
<th className="px-4 py-3 text-left text-xs font-medium text-text-light-secondary dark:text-dark-secondary uppercase tracking-wider">Contact</th>
<th className="px-4 py-3 text-left text-xs font-medium text-text-light-secondary dark:text-dark-secondary uppercase tracking-wider">Location</th>
<th className="px-4 py-3 text-left text-xs font-medium text-text-light-secondary dark:text-dark-secondary uppercase tracking-wider">Land</th>
<th className="px-4 py-3 text-left text-xs font-medium text-text-light-secondary dark:text-dark-secondary uppercase tracking-wider">Credit</th>
<th className="px-4 py-3 text-left text-xs font-medium text-text-light-secondary dark:text-dark-secondary uppercase tracking-wider">Risk Score</th>
<th className="px-4 py-3 text-left text-xs font-medium text-text-light-secondary dark:text-dark-secondary uppercase tracking-wider">Status</th>
<th className="px-4 py-3 text-left text-xs font-medium text-text-light-secondary dark:text-dark-secondary uppercase tracking-wider">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-border-light dark:divide-border-dark">
<tr className="hover:bg-gray-50 dark:hover:bg-white/5">
<td className="px-4 py-2 text-center"><input className="h-4 w-4 rounded border-border-light dark:border-border-dark bg-transparent text-primary defaultChecked:bg-primary focus:ring-primary/50" type="checkbox"/></td>
<td className="px-4 py-2"><img className="aspect-square rounded-full w-10 h-10 object-cover" data-alt="Portrait of Ameer Hamza" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1xhOcZSSFHtuExjnBjBkoy-oqKql20pVTU7Vo8dMYOwFs_lZSO9aKIAyJrq7ejs5u8fSEjKPHImhZ2uKQhRczPi7B71Zpwl0DGAXZz1o8kL4leWfbYMZkGNLbVMZl7zGRz0Z4krfCP4LcXA5T7nAixAogFfkZIaZFerhctKygE0rUjc_TE3nl_YTxaoRCySl8OSryuk3wC51vnSyIkGkoe1GVk5pIAC-sNscDnfoBADjxyNPNwlXJfaUBIZLbllBVX6SpZp9UrQg"/></td>
<td className="px-4 py-2">
<div className="font-medium text-text-light-primary dark:text-dark-primary">Ameer Hamza</div>
<div className="text-sm text-text-light-secondary dark:text-dark-secondary">FARM-001</div>
</td>
<td className="px-4 py-2">
<div className="text-sm text-text-light-primary dark:text-dark-primary">0300-1234567</div>
<div className="text-sm text-text-light-secondary dark:text-dark-secondary">****-*******-1</div>
</td>
<td className="px-4 py-2 text-sm text-text-light-secondary dark:text-dark-secondary">Sahiwal</td>
<td className="px-4 py-2 text-sm text-text-light-secondary dark:text-dark-secondary">12.5 acres</td>
<td className="px-4 py-2">
<div className="text-sm text-text-light-primary dark:text-dark-primary">PKR 15,000</div>
<div className="text-xs text-text-light-secondary dark:text-dark-secondary">of 50,000</div>
</td>
<td className="px-4 py-2"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success/10 text-success">Low</span></td>
<td className="px-4 py-2"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-info/10 text-info">Active</span></td>
<td className="px-4 py-2 text-sm font-medium">
<div className="flex items-center gap-2 text-text-light-secondary dark:text-dark-secondary">
<button className="p-1 hover:text-primary"><span className="material-symbols-outlined text-xl">visibility</span></button>
<button className="p-1 hover:text-primary"><span className="material-symbols-outlined text-xl">edit</span></button>
<button className="p-1 hover:text-danger"><span className="material-symbols-outlined text-xl">block</span></button>
</div>
</td>
</tr>
<tr className="hover:bg-gray-50 dark:hover:bg-white/5">
<td className="px-4 py-2 text-center"><input className="h-4 w-4 rounded border-border-light dark:border-border-dark bg-transparent text-primary defaultChecked:bg-primary focus:ring-primary/50" type="checkbox"/></td>
<td className="px-4 py-2"><img className="aspect-square rounded-full w-10 h-10 object-cover" data-alt="Portrait of Fatima Khan" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkM65Z9O_-BhGTrMOpfAjf_M-EdlgpnmR0kwP_imbjVQqK9O3O-Roe78NbVqrpAYKZoZV6IO10QtmoMclu1ka-90ClKBzSlyVywRvYk60LH8bA8fp29Pss5VT6g2odYx48TpcmQuFXfOqjX8wxMfpVrfOmb4v9D8YjtYgKWbkCreqJfdb_9kKIiViaMp5fS09pdGXMB-Jo75Wpfy17am2IG6BHHZJVu7ixCqljRgfk9i_oWOcZ7sZp3RLzevJ_Xj1iaJcgjf7oKBE"/></td>
<td className="px-4 py-2">
<div className="font-medium text-text-light-primary dark:text-dark-primary">Fatima Khan</div>
<div className="text-sm text-text-light-secondary dark:text-dark-secondary">FARM-002</div>
</td>
<td className="px-4 py-2">
<div className="text-sm text-text-light-primary dark:text-dark-primary">0321-9876543</div>
<div className="text-sm text-text-light-secondary dark:text-dark-secondary">****-*******-2</div>
</td>
<td className="px-4 py-2 text-sm text-text-light-secondary dark:text-dark-secondary">Multan</td>
<td className="px-4 py-2 text-sm text-text-light-secondary dark:text-dark-secondary">25.0 acres</td>
<td className="px-4 py-2">
<div className="text-sm text-text-light-primary dark:text-dark-primary">PKR 75,000</div>
<div className="text-xs text-text-light-secondary dark:text-dark-secondary">of 75,000</div>
</td>
<td className="px-4 py-2"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-danger/10 text-danger">High</span></td>
<td className="px-4 py-2"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-info/10 text-info">Active</span></td>
<td className="px-4 py-2 text-sm font-medium">
<div className="flex items-center gap-2 text-text-light-secondary dark:text-dark-secondary">
<button className="p-1 hover:text-primary"><span className="material-symbols-outlined text-xl">visibility</span></button>
<button className="p-1 hover:text-primary"><span className="material-symbols-outlined text-xl">edit</span></button>
<button className="p-1 hover:text-danger"><span className="material-symbols-outlined text-xl">block</span></button>
</div>
</td>
</tr>
<tr className="hover:bg-gray-50 dark:hover:bg-white/5">
<td className="px-4 py-2 text-center"><input className="h-4 w-4 rounded border-border-light dark:border-border-dark bg-transparent text-primary defaultChecked:bg-primary focus:ring-primary/50" type="checkbox"/></td>
<td className="px-4 py-2"><img className="aspect-square rounded-full w-10 h-10 object-cover" data-alt="Portrait of Bilal Ahmed" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVHFO5A3R9B7XwKDVU7AYOQYroMy95sgRvxyMRzUEYzg_8kAm37uutR77i6gObpToYTCe6HF2idhMdokk9tlWzIjrKLJCRO-AGEChLBZNFmpIqZDy6p3NQ3z13LljfIBRcsAr_Kl2iykYpS_Nm7kcs28y57GkJ0s-U4YUX1Pegib_0XJVODH9WLJs-vF_wkBe74WnHEIJ1ikm0uBbfsRDbOeQfsKzd6mi67nPkpdCP3yH5D0--nDlYSVT8h6v1_JVp9ovvqXhDLXE"/></td>
<td className="px-4 py-2">
<div className="font-medium text-text-light-primary dark:text-dark-primary">Bilal Ahmed</div>
<div className="text-sm text-text-light-secondary dark:text-dark-secondary">FARM-003</div>
</td>
<td className="px-4 py-2">
<div className="text-sm text-text-light-primary dark:text-dark-primary">0333-5554433</div>
<div className="text-sm text-text-light-secondary dark:text-dark-secondary">****-*******-3</div>
</td>
<td className="px-4 py-2 text-sm text-text-light-secondary dark:text-dark-secondary">Faisalabad</td>
<td className="px-4 py-2 text-sm text-text-light-secondary dark:text-dark-secondary">8.0 acres</td>
<td className="px-4 py-2">
<div className="text-sm text-text-light-primary dark:text-dark-primary">PKR 0</div>
<div className="text-xs text-text-light-secondary dark:text-dark-secondary">of 30,000</div>
</td>
<td className="px-4 py-2"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success/10 text-success">Low</span></td>
<td className="px-4 py-2"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-400/10 text-gray-500">Inactive</span></td>
<td className="px-4 py-2 text-sm font-medium">
<div className="flex items-center gap-2 text-text-light-secondary dark:text-dark-secondary">
<button className="p-1 hover:text-primary"><span className="material-symbols-outlined text-xl">visibility</span></button>
<button className="p-1 hover:text-primary"><span className="material-symbols-outlined text-xl">edit</span></button>
<button className="p-1 hover:text-danger"><span className="material-symbols-outlined text-xl">block</span></button>
</div>
</td>
</tr>
<tr className="hover:bg-gray-50 dark:hover:bg-white/5">
<td className="px-4 py-2 text-center"><input className="h-4 w-4 rounded border-border-light dark:border-border-dark bg-transparent text-primary defaultChecked:bg-primary focus:ring-primary/50" type="checkbox"/></td>
<td className="px-4 py-2"><img className="aspect-square rounded-full w-10 h-10 object-cover" data-alt="Portrait of Ayesha Iqbal" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRNMeMwjibqe0Nc_ojS7FeB5hEVFaWoLtG3LWTJA81fGJ0bho5SIJnOIjFv2Dk4Jqrbgid1dVKIStlvQLnsLQiDZEuSbiDar7y7MIXzphWZJLlwNpTp0MO-yOK6dWVJjgA4UwTM2KRkODPEj7EAe13Ij_BeS3jeoupoZRpkZPwa_3Xj91zqUZxD0is8c0plWNPyXv686cpqK4m9r3IyxJlhRWbBG6fuJCLfL10pZnY3LiKE1KOCWw3gfqKtbb1rZTFHIXSOTlwMqo"/></td>
<td className="px-4 py-2">
<div className="font-medium text-text-light-primary dark:text-dark-primary">Ayesha Iqbal</div>
<div className="text-sm text-text-light-secondary dark:text-dark-secondary">FARM-004</div>
</td>
<td className="px-4 py-2">
<div className="text-sm text-text-light-primary dark:text-dark-primary">0312-3456789</div>
<div className="text-sm text-text-light-secondary dark:text-dark-secondary">****-*******-4</div>
</td>
<td className="px-4 py-2 text-sm text-text-light-secondary dark:text-dark-secondary">Lahore</td>
<td className="px-4 py-2 text-sm text-text-light-secondary dark:text-dark-secondary">50.0 acres</td>
<td className="px-4 py-2">
<div className="text-sm text-text-light-primary dark:text-dark-primary">PKR 100,000</div>
<div className="text-xs text-text-light-secondary dark:text-dark-secondary">of 150,000</div>
</td>
<td className="px-4 py-2"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-warning/10 text-warning">Medium</span></td>
<td className="px-4 py-2"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-info/10 text-info">Active</span></td>
<td className="px-4 py-2 text-sm font-medium">
<div className="flex items-center gap-2 text-text-light-secondary dark:text-dark-secondary">
<button className="p-1 hover:text-primary"><span className="material-symbols-outlined text-xl">visibility</span></button>
<button className="p-1 hover:text-primary"><span className="material-symbols-outlined text-xl">edit</span></button>
<button className="p-1 hover:text-danger"><span className="material-symbols-outlined text-xl">block</span></button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
{/* Pagination */}
<div className="flex flex-col sm:flex-row items-center justify-between p-4 gap-4">
<div className="flex items-center gap-2 text-sm text-text-light-secondary dark:text-dark-secondary">
<span>Rows per page:</span>
<select className="h-8 py-0 pl-2 pr-7 rounded-md border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-sm focus:ring-1 focus:ring-primary focus:border-primary">
<option>10</option>
<option selected="">25</option>
<option>50</option>
</select>
</div>
<div className="flex items-center justify-center">
<a className="flex size-9 items-center justify-center rounded-md hover:bg-gray-100 dark:hover:bg-white/10" href="#">
<div className="material-symbols-outlined text-lg">chevron_left</div>
</a>
<a className="text-sm font-bold flex size-9 items-center justify-center rounded-md bg-primary text-white" href="#">1</a>
<a className="text-sm font-normal flex size-9 items-center justify-center rounded-md hover:bg-gray-100 dark:hover:bg-white/10" href="#">2</a>
<a className="text-sm font-normal flex size-9 items-center justify-center rounded-md hover:bg-gray-100 dark:hover:bg-white/10" href="#">3</a>
<span className="text-sm font-normal flex size-9 items-center justify-center">...</span>
<a className="text-sm font-normal flex size-9 items-center justify-center rounded-md hover:bg-gray-100 dark:hover:bg-white/10" href="#">8</a>
<a className="text-sm font-normal flex size-9 items-center justify-center rounded-md hover:bg-gray-100 dark:hover:bg-white/10" href="#">9</a>
<a className="text-sm font-normal flex size-9 items-center justify-center rounded-md hover:bg-gray-100 dark:hover:bg-white/10" href="#">10</a>
<a className="flex size-9 items-center justify-center rounded-md hover:bg-gray-100 dark:hover:bg-white/10" href="#">
<div className="material-symbols-outlined text-lg">chevron_right</div>
</a>
</div>
<div className="text-sm text-text-light-secondary dark:text-dark-secondary">
                           Showing 1-10 of 245 farmers
                       </div>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
