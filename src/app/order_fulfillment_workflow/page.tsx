
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
<div className="flex h-full min-h-screen">
{/* SideNavBar */}
<aside className="flex flex-col w-64 bg-white dark:bg-background-dark border-r border-border-light dark:border-border-dark shadow-sm">
<div className="flex flex-col h-full p-4 justify-between">
<div className="flex flex-col gap-4">
<div className="flex items-center gap-3 px-3 py-2">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="AgriConnect logo placeholder"></div>
<div className="flex flex-col">
<h1 className="text-text-light dark:text-text-dark text-base font-bold leading-normal">AgriConnect</h1>
<p className="text-primary text-sm font-medium leading-normal">Warehouse Portal</p>
</div>
</div>
<nav className="flex flex-col gap-2 mt-4">
<a className="flex items-center gap-3 px-3 py-2 text-text-light dark:text-text-dark hover:bg-primary/10 rounded-lg" href="#">
<span className="material-symbols-outlined">dashboard</span>
<p className="text-sm font-medium leading-normal">Dashboard</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/20 text-primary dark:text-primary" href="#">
<span className="material-symbols-outlined">inventory_2</span>
<p className="text-sm font-bold leading-normal">Orders</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-text-light dark:text-text-dark hover:bg-primary/10 rounded-lg" href="#">
<span className="material-symbols-outlined">inventory</span>
<p className="text-sm font-medium leading-normal">Inventory</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-text-light dark:text-text-dark hover:bg-primary/10 rounded-lg" href="#">
<span className="material-symbols-outlined">local_shipping</span>
<p className="text-sm font-medium leading-normal">Suppliers</p>
</a>
</nav>
</div>
<div className="flex flex-col gap-4">
<button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]">
<span className="truncate">New Inbound Stock</span>
</button>
<div className="flex flex-col gap-1">
<a className="flex items-center gap-3 px-3 py-2 text-text-light dark:text-text-dark hover:bg-primary/10 rounded-lg" href="#">
<span className="material-symbols-outlined">settings</span>
<p className="text-sm font-medium leading-normal">Settings</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-text-light dark:text-text-dark hover:bg-primary/10 rounded-lg" href="#">
<span className="material-symbols-outlined">help</span>
<p className="text-sm font-medium leading-normal">Help</p>
</a>
</div>
</div>
</div>
</aside>
{/* Main Content */}
<main className="flex-1 flex flex-col">
{/* Initial Order Queue View (Hidden when packing) */}
<div className="flex flex-col h-full" id="order-queue-view">
<div className="p-6">
<p className="text-text-light dark:text-text-dark text-4xl font-black leading-tight tracking-[-0.033em]">Ready to Pack Orders</p>
</div>
<div className="px-6 py-3 flex-1">
<div className="overflow-hidden rounded-lg border border-border-light dark:border-border-dark bg-white dark:bg-background-dark shadow-sm">
<table className="w-full">
<thead className="bg-background-light dark:bg-slate-800">
<tr>
<th className="px-4 py-3 text-left text-text-light dark:text-text-dark text-sm font-medium leading-normal">Order ID</th>
<th className="px-4 py-3 text-left text-text-light dark:text-text-dark text-sm font-medium leading-normal">Farmer Name</th>
<th className="px-4 py-3 text-left text-text-light dark:text-text-dark text-sm font-medium leading-normal">Item Count</th>
<th className="px-4 py-3 text-left text-text-light dark:text-text-dark text-sm font-medium leading-normal">Due Pickup Time</th>
<th className="px-4 py-3 text-left text-text-light dark:text-text-dark text-sm font-medium leading-normal">Action</th>
</tr>
</thead>
<tbody>
<tr className="border-t border-border-light dark:border-border-dark">
<td className="h-[72px] px-4 py-2 text-primary text-sm font-medium leading-normal">AC-11032</td>
<td className="h-[72px] px-4 py-2 text-text-light dark:text-text-dark text-sm font-normal leading-normal">Ramesh Kumar</td>
<td className="h-[72px] px-4 py-2 text-text-light dark:text-text-dark text-sm font-normal leading-normal">5</td>
<td className="h-[72px] px-4 py-2 text-text-light dark:text-text-dark text-sm font-normal leading-normal">Today, 4:00 PM</td>
<td className="h-[72px] px-4 py-2 text-primary text-sm font-bold leading-normal tracking-[0.015em]"><a className="hover:underline" href="#">Pack Order</a></td>
</tr>
<tr className="border-t border-border-light dark:border-border-dark">
<td className="h-[72px] px-4 py-2 text-primary text-sm font-medium leading-normal">AC-11031</td>
<td className="h-[72px] px-4 py-2 text-text-light dark:text-text-dark text-sm font-normal leading-normal">Sunita Devi</td>
<td className="h-[72px] px-4 py-2 text-text-light dark:text-text-dark text-sm font-normal leading-normal">2</td>
<td className="h-[72px] px-4 py-2 text-text-light dark:text-text-dark text-sm font-normal leading-normal">Today, 5:00 PM</td>
<td className="h-[72px] px-4 py-2 text-primary text-sm font-bold leading-normal tracking-[0.015em]"><a className="hover:underline" href="#">Pack Order</a></td>
</tr>
<tr className="border-t border-border-light dark:border-border-dark">
<td className="h-[72px] px-4 py-2 text-primary text-sm font-medium leading-normal">AC-11030</td>
<td className="h-[72px] px-4 py-2 text-text-light dark:text-text-dark text-sm font-normal leading-normal">Amit Singh</td>
<td className="h-[72px] px-4 py-2 text-text-light dark:text-text-dark text-sm font-normal leading-normal">8</td>
<td className="h-[72px] px-4 py-2 text-text-light dark:text-text-dark text-sm font-normal leading-normal">Tomorrow, 9:00 AM</td>
<td className="h-[72px] px-4 py-2 text-primary text-sm font-bold leading-normal tracking-[0.015em]"><a className="hover:underline" href="#">Pack Order</a></td>
</tr>
<tr className="border-t border-border-light dark:border-border-dark">
<td className="h-[72px] px-4 py-2 text-primary text-sm font-medium leading-normal">AC-11029</td>
<td className="h-[72px] px-4 py-2 text-text-light dark:text-text-dark text-sm font-normal leading-normal">Priya Sharma</td>
<td className="h-[72px] px-4 py-2 text-text-light dark:text-text-dark text-sm font-normal leading-normal">3</td>
<td className="h-[72px] px-4 py-2 text-text-light dark:text-text-dark text-sm font-normal leading-normal">Tomorrow, 11:00 AM</td>
<td className="h-[72px] px-4 py-2 text-primary text-sm font-bold leading-normal tracking-[0.015em]"><a className="hover:underline" href="#">Pack Order</a></td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="p-4 mt-auto">
<div className="flex items-center justify-center p-4">
<a className="flex size-10 items-center justify-center" href="#">
<span className="material-symbols-outlined text-text-light dark:text-text-dark">chevron_left</span>
</a>
<a className="text-sm font-bold leading-normal tracking-[0.015em] flex size-10 items-center justify-center text-white rounded-full bg-primary" href="#">1</a>
<a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-text-light dark:text-text-dark rounded-full hover:bg-primary/10" href="#">2</a>
<a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-text-light dark:text-text-dark rounded-full hover:bg-primary/10" href="#">3</a>
<span className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-text-light dark:text-text-dark rounded-full">...</span>
<a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-text-light dark:text-text-dark rounded-full hover:bg-primary/10" href="#">10</a>
<a className="flex size-10 items-center justify-center" href="#">
<span className="material-symbols-outlined text-text-light dark:text-text-dark">chevron_right</span>
</a>
</div>
</div>
</div>
{/* Full-Screen Packing View */}
<div className="flex flex-col h-full bg-background-light dark:bg-background-dark p-6" id="packing-view">
<h1 className="text-text-light dark:text-text-dark tracking-light text-3xl font-bold leading-tight pb-4">Packing Order: AC-11032</h1>
<div className="flex-1 grid grid-cols-12 gap-6">
{/* Left Column: Order Details */}
<div className="col-span-3 flex flex-col gap-6">
<div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-5 border border-border-light dark:border-border-dark flex-1 flex flex-col">
<h2 className="text-lg font-bold text-text-light dark:text-text-dark mb-4">Order Details</h2>
<div className="space-y-5">
<div>
<h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">Farmer Information</h3>
<p className="font-medium text-text-light dark:text-text-dark">Ramesh Kumar</p>
<p className="text-sm text-gray-600 dark:text-gray-300">+91 98765 43210</p>
</div>
<hr className="border-border-light dark:border-border-dark"/>
<div>
<h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">Item List</h3>
<ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300">
<li>Urea Fertilizer (x2)</li>
<li>Organic Pesticide (x1)</li>
<li>High-Yield Seeds (x2)</li>
</ul>
</div>
<hr className="border-border-light dark:border-border-dark"/>
<div>
<h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">Delivery Address</h3>
<p className="text-sm text-gray-700 dark:text-gray-300">Village Rampur, Post Office - Khetri, District - Sikar, Rajasthan, 333503</p>
</div>
</div>
</div>
</div>
{/* Center Column: Packing Checklist */}
<div className="col-span-6 flex flex-col gap-6">
<div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-5 border border-border-light dark:border-border-dark flex-1 flex flex-col">
<div className="flex justify-between items-center mb-4">
<h2 className="text-lg font-bold text-text-light dark:text-text-dark">Packing Checklist</h2>
<div className="text-right">
<p className="font-bold text-primary">3/5 Items Packed</p>
<div className="w-40 bg-gray-200 rounded-full h-2 mt-1 dark:bg-gray-700">
<div className="bg-primary h-2 rounded-full"></div>
</div>
</div>
</div>
<div className="space-y-4 overflow-y-auto flex-1 pr-2">
{/* Checklist Item 1 */}
<div className="flex items-center gap-4 p-3 rounded-lg bg-primary/10 border border-primary">
<input defaultChecked="" className="h-6 w-6 rounded border-gray-300 text-primary focus:ring-primary" type="checkbox"/>
<img className="size-16 rounded-md object-cover" data-alt="Bag of Urea Fertilizer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAywxjeA24GYyqY9NlBy0dleQtdI-QZYyj8PP21vw79WGJum_klxnEg1WioC3e_Qj-qnND2ckLmJ_QHI4zX0h8uuJWXWv4vmHcf_jR3fgRpVuQh0RNlRxGyd8QVDqczw-MMUwa886gmGmZlwaQJSsHKK-KPB0glNsxFrmwFWwKmXe9Z7Ih2IUcLUfTYG_1AoR0YJfCoch7rd-3vty8ZSGO_S5uG6Jej2nbHwIs8Gf9CiyCEgRqp7N_hFQv03b3Gh1n1zjkq9SKCdjM"/>
<div className="flex-1">
<p className="font-bold text-text-light dark:text-text-dark">Urea Fertilizer</p>
<p className="text-sm text-gray-600 dark:text-gray-300">SKU: FER-UR-50KG</p>
</div>
<p className="font-bold text-lg text-text-light dark:text-text-dark">Qty: 2</p>
</div>
{/* Checklist Item 2 */}
<div className="flex items-center gap-4 p-3 rounded-lg bg-primary/10 border border-primary">
<input defaultChecked="" className="h-6 w-6 rounded border-gray-300 text-primary focus:ring-primary" type="checkbox"/>
<img className="size-16 rounded-md object-cover" data-alt="Bag of High-Yield Seeds" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwXisgbPx7lgO7VhRTRsSmOTfW6A24aXXxl8q8VejJHavbeq4j4YX5dp7dj0Pe4o0fruCox64rUc2ZMS68VViyo_6h27kHufaAOGVc9ynQOSMKFCKnTbhcJI8QFPiiiRCuTE1i371WhbSH2RGe2sW6Ksngz7Q7JZE2yXI1TXEf4LGKwHCjst2IdFXI3o3z2-R-MD6HMaFkFufUlOdoQ5_h2406h7zXKT2cnoOmCSTHQ3ApE61wZ6-cMzqWz8JudWMjl7SqI0GjulE"/>
<div className="flex-1">
<p className="font-bold text-text-light dark:text-text-dark">High-Yield Seeds</p>
<p className="text-sm text-gray-600 dark:text-gray-300">SKU: SED-HY-05KG</p>
</div>
<p className="font-bold text-lg text-text-light dark:text-text-dark">Qty: 2</p>
</div>
{/* Checklist Item 3 */}
<div className="flex items-center gap-4 p-3 rounded-lg bg-background-light dark:bg-slate-700 border border-border-light dark:border-border-dark">
<input className="h-6 w-6 rounded border-gray-300 text-primary focus:ring-primary" type="checkbox"/>
<img className="size-16 rounded-md object-cover" data-alt="Bottle of Organic Pesticide" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrwWxprohKCr0h8xDhB7vV4RQLFV9co-5_svPCSivhxuK9E9FF3wzWUBNHf11veMRnwhUR9jonWhS2CRlQ6vcB_hASZCST5PvOFLf3Dr0q2Nh9IOEDQGxFcNmYFvGdM8DVG67XMHxDL0vUyzqUlbuNqsV5OB7FIZuJfX8lIyzPaseA33jKn7sNyg47ydM_R8evmqG6Udx5enqkH2IgUyyqVRiqu-FvP8JK1z6tciUFGchN6qLOxa3p9c4GX4LE69SqPftjyXo8_tI"/>
<div className="flex-1">
<p className="font-bold text-text-light dark:text-text-dark">Organic Pesticide</p>
<p className="text-sm text-gray-600 dark:text-gray-300">SKU: PES-ORG-01L</p>
</div>
<p className="font-bold text-lg text-text-light dark:text-text-dark">Qty: 1</p>
</div>
</div>
</div>
</div>
{/* Right Column: Notes & Dispatch */}
<div className="col-span-3 flex flex-col gap-6">
<div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-5 border border-border-light dark:border-border-dark">
<h2 className="text-lg font-bold text-text-light dark:text-text-dark mb-4">Packing Notes</h2>
<textarea className="w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-slate-700 text-text-light dark:text-text-dark focus:ring-primary focus:border-primary" placeholder="Khas Talimat (Special Instructions)..." rows="4"></textarea>
</div>
<div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-5 border border-border-light dark:border-border-dark">
<h2 className="text-lg font-bold text-text-light dark:text-text-dark mb-4">Dispatch Details</h2>
<div className="space-y-4">
<button className="w-full flex items-center justify-center gap-2 rounded-lg h-10 px-4 border-2 border-dashed border-border-light dark:border-border-dark hover:bg-gray-50 dark:hover:bg-slate-700">
<span className="material-symbols-outlined text-gray-500">upload_file</span>
<span className="text-sm font-medium text-gray-600 dark:text-gray-300">Upload Package Photo</span>
</button>
<select className="w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-slate-700 text-text-light dark:text-text-dark focus:ring-primary focus:border-primary">
<option>Select Courier/Delivery Method</option>
<option>Delhivery</option>
<option>Blue Dart</option>
<option>Local Pickup</option>
</select>
<input className="w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-slate-700 text-text-light dark:text-text-dark focus:ring-primary focus:border-primary" placeholder="Enter Tracking Number" type="text"/>
</div>
</div>
</div>
</div>
{/* Bottom Action Bar */}
<div className="mt-6 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-md border border-border-light dark:border-border-dark flex items-center justify-between">
<div className="flex items-center gap-4">
<button className="px-5 py-2.5 rounded-lg text-sm font-semibold border border-border-light dark:border-border-dark hover:bg-gray-100 dark:hover:bg-slate-700">
                      Print Packing Slip
                  </button>
<button className="px-5 py-2.5 rounded-lg text-sm font-semibold text-red-600 border border-red-200 dark:border-red-800 hover:bg-red-50 dark:hover:bg-red-900/50">
                      Problem?
                  </button>
</div>
<button className="px-8 py-3 rounded-lg text-lg font-bold bg-primary text-white hover:bg-green-800">
                  Mark as Packed
              </button>
</div>
</div>
</main>
</div>
</div>

    </>
  );
}
