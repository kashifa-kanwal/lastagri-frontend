'use client';

import React, { useEffect } from 'react';
import { useAuth } from '@/lib/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { Supplier } from '@/types';

export default function Page() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isLoading, isAuthenticated, router]);

  if (isLoading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-off-white dark:bg-background-dark">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-trust-blue"></div>
      </div>
    );
  }

  const supplier = user as Supplier;

  return (
    <>
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          {/* TopNavBar Component */}
          <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 dark:border-gray-700 px-6 sm:px-8 md:px-10 py-3 bg-white dark:bg-background-dark sticky top-0 z-10">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3 text-text-primary dark:text-white">
                <div className="size-6 text-primary">
                  <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
                  </svg>
                </div>
                <h2 className="text-xl font-bold leading-tight tracking-[-0.015em]">AgriConnect</h2>
              </div>
            </div>
            <div className="flex-1 max-w-lg">
              <label className="flex flex-col min-w-40 !h-10">
                <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                  <div className="text-gray-500 dark:text-gray-400 flex bg-background-light dark:bg-gray-800 items-center justify-center pl-4 rounded-l-lg border-y border-l border-gray-200 dark:border-gray-700">
                    <span className="material-symbols-outlined">search</span>
                  </div>
                  <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-text-primary dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border-y border-r border-gray-200 dark:border-gray-700 bg-background-light dark:bg-gray-800 h-full placeholder:text-gray-500 dark:placeholder:text-gray-400 px-4 text-base font-normal leading-normal" placeholder="Search orders, farmers, products..." defaultValue="" />
                </div>
              </label>
            </div>
            <div className="flex flex-1 justify-end gap-4">
              <button className="relative flex cursor-pointer items-center justify-center overflow-hidden rounded-full size-10 bg-background-light dark:bg-gray-800 text-text-primary dark:text-gray-300">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-2 right-2 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-alert opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-status-alert"></span>
                </span>
              </button>
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 bg-trust-blue/10 flex items-center justify-center text-trust-blue font-bold">
                {supplier.name ? supplier.name.charAt(0).toUpperCase() : 'S'}
              </div>
            </div>
          </header>
          <main className="flex-1 p-6 sm:p-8 md:p-10">
            <div className="layout-content-container flex flex-col gap-6">

              <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Welcome back, {supplier.businessName || supplier.name}
                </h1>
              </div>

              {/* Stats Component */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                  <p className="text-base font-medium leading-normal text-gray-600 dark:text-gray-400">Total Sales (month)</p>
                  <p className="text-text-primary dark:text-white tracking-light text-3xl font-bold leading-tight">PKR {supplier.totalRevenue || 0}</p>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-green-500 text-lg">arrow_upward</span>
                    <p className="text-green-500 text-sm font-medium leading-normal">12% from last month</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                  <p className="text-base font-medium leading-normal text-gray-600 dark:text-gray-400">Total Orders</p>
                  <p className="text-text-primary dark:text-white tracking-light text-3xl font-bold leading-tight">{supplier.totalOrders || 0}</p>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-red-500 text-lg">arrow_downward</span>
                    <p className="text-red-500 text-sm font-medium leading-normal">5% from last month</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                  <p className="text-base font-medium leading-normal text-gray-600 dark:text-gray-400">Revenue Pending Settlement</p>
                  <p className="text-text-primary dark:text-white tracking-light text-3xl font-bold leading-tight">PKR 45,200</p>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-green-500 text-lg">arrow_upward</span>
                    <p className="text-green-500 text-sm font-medium leading-normal">8% from last month</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                  <p className="text-base font-medium leading-normal text-gray-600 dark:text-gray-400">Active Products</p>
                  <p className="text-text-primary dark:text-white tracking-light text-3xl font-bold leading-tight">{supplier.productsCount || 0}</p>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-green-500 text-lg">arrow_upward</span>
                    <p className="text-green-500 text-sm font-medium leading-normal">2% from last month</p>
                  </div>
                </div>
              </div>
              {/* Main Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                {/* Left Column (Recent Orders) */}
                <div className="lg:col-span-3 flex flex-col gap-4">
                  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                    <h2 className="text-text-primary dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] px-6 pb-3 pt-5">Recent Orders</h2>
                    {/* Table Component */}
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-gray-50 dark:bg-gray-700">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Order ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Farmer Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Items</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Order Date</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Action</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary">#1024</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-text-primary dark:text-white">Ali Khan</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Fertilizer, Seeds...</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">2023-10-26</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-status-delivered/20 text-status-delivered">Delivered</span></td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium"><a className="text-primary hover:text-primary/80" href="#">View Details</a></td>
                          </tr>
                          {/* More rows can be dynamically rendered later */}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/* Right Column (Quick Stats & Alerts) */}
                <div className="lg:col-span-2 flex flex-col gap-6">
                  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-text-primary dark:text-white mb-4">Quick Stats</h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Product Category Distribution</h4>
                        <div className="flex justify-center items-center h-48">
                          <img data-alt="A doughnut chart showing product category distribution: Fertilizers 45%, Seeds 25%, Pesticides 15%, Tools 10%, Other 5%." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3d5X7eBOFSFQsb8kyoPajulqGbJhIIiZPKkcpP1LuZe1n8iAf1iOO_YTqg7UP2F5bCQZIH-5ef1cqwKJHYMUST0Mc4y_lSHXVNvozQ-ulKwxOq3VvXY04_GCZCsjq634C0k4bpM67NBXeUTPCrHxq6ENAkBi1-ZBGef_EljCJ0jwGMyuwcz8GpO7arCa98eIxqSKhbLexLyEWYt3vCmVInqB68trdIdGM8VkpqBaS5tRmkGPsfdBKHEPUb2DG17brY35EQFarYAc" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Sales by District</h4>
                        <div className="flex justify-center items-center h-48">
                          <img data-alt="A bar chart showing sales by district. Lahore has the highest sales, followed by Faisalabad, Multan, and Sahiwal." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg35qJka3lTau1T6cDRmenE9KKHyPbrMzEm0Paz9j20HKS9QvVDcYEgFfDB9s_Zf8yiJHa93j7aeJZX1DWpIzjISq3GlowpPIGM1PzkAJE-fpwUTOogwGiZGMMXZz5TZdUBQxBvMr63xz_PEF3BvzffmrM0EWkywPW_7rSkD9Izwzck6sL5bLSW59eBVC1D2jLetjNxr3EbHg79joUQ9PtDcYIyIAhSjm0ZExV7OiEZKkAJw8fDxk5S-BlvsY-PBbdWDhzwYqpj50" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-text-primary dark:text-white mb-4">Low Stock Alerts</h3>
                    <ul className="space-y-4">
                      <li className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-text-primary dark:text-white">Urea Fertilizer (50kg Bag)</p>
                          <p className="text-sm text-status-alert">Only 8 units left</p>
                        </div>
                        <button className="text-sm font-bold text-primary hover:underline">Add Stock</button>
                      </li>
                      <li className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-text-primary dark:text-white">Wheat Seeds (High-Yield)</p>
                          <p className="text-sm text-status-alert">Only 5 units left</p>
                        </div>
                        <button className="text-sm font-bold text-primary hover:underline">Add Stock</button>
                      </li>
                      {/* More alerts... */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
        {/* Floating Action Button */}
        <button className="fixed bottom-8 right-8 z-20 flex items-center justify-center h-14 w-14 rounded-full bg-primary text-white shadow-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 dark:focus:ring-offset-background-dark">
          <span className="material-symbols-outlined !text-3xl">add</span>
          <span className="sr-only">Add New Product</span>
        </button>
      </div>
    </>
  );
}
