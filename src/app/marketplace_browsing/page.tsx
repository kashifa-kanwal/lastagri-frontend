'use client';

import React, { useEffect, useState } from 'react';
import { apiRequest } from '@/lib/api';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  price: number;
  stock: number;
  unit: string;
  images: string;
  supplier_id: number;
  rating: number;
  reviews_count: number;
  is_available: boolean;
}

export default function Page() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        // Construct URL with query params
        let url = '/products/?limit=100';
        if (selectedCategory !== 'All') {
          url += `&category=${selectedCategory}`;
        }
        if (searchQuery) {
          url += `&search=${searchQuery}`;
        }

        const data = await apiRequest<Product[]>(url, { method: 'GET' });
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products", error);
      } finally {
        setLoading(false);
      }
    };

    // Debounce search
    const timeoutId = setTimeout(() => {
      fetchProducts();
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchQuery, selectedCategory]);

  const categories = ['All', 'Seeds', 'Fertilizer', 'Pesticide', 'Equipment'];

  return (
    <>
      <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <div className="flex flex-1 justify-center py-5 md:px-10 lg:px-20 xl:px-40">
            <div className="layout-content-container flex flex-col max-w-7xl flex-1">
              {/* TopNavBar */}
              <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-light-gray dark:border-primary/20 px-6 sm:px-10 py-3">
                <div className="flex items-center gap-4 text-primary dark:text-background-light">
                  <span className="material-symbols-outlined text-3xl">agriculture</span>
                  <h2 className="text-charcoal dark:text-background-light text-xl font-bold tracking-tight">AgriConnect</h2>
                </div>
                <div className="hidden md:flex flex-1 justify-end gap-8">
                  <div className="flex items-center gap-9">
                    <Link className="text-charcoal dark:text-background-light text-sm font-medium hover:text-primary dark:hover:text-accent" href="/marketplace_browsing">Marketplace</Link>
                    <Link className="text-charcoal dark:text-background-light text-sm font-medium hover:text-primary dark:hover:text-accent" href="/wallet_dashboard">My Wallet</Link>
                    <Link className="text-charcoal dark:text-background-light text-sm font-medium hover:text-primary dark:hover:text-accent" href="/profile">Profile</Link>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 w-10 bg-background-light dark:bg-background-dark text-charcoal dark:text-background-light hover:bg-light-gray/60 dark:hover:bg-primary/20">
                      <span className="material-symbols-outlined">language</span>
                    </button>
                    <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 w-10 bg-background-light dark:bg-background-dark text-charcoal dark:text-background-light hover:bg-light-gray/60 dark:hover:bg-primary/20">
                      <span className="material-symbols-outlined">notifications</span>
                    </button>
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="User profile picture"></div>
                  </div>
                </div>
              </header>
              {/* SearchBar */}
              <div className="px-6 sm:px-10 py-5">
                <label className="flex flex-col min-w-40 h-14 w-full">
                  <div className="flex w-full flex-1 items-stretch rounded-xl h-full shadow-sm">
                    <div className="text-primary flex border border-r-0 border-light-gray dark:border-primary/30 bg-white dark:bg-primary/10 items-center justify-center pl-4 rounded-l-xl">
                      <span className="material-symbols-outlined text-2xl">search</span>
                    </div>
                    <input
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-xl text-charcoal dark:text-background-light focus:outline-0 focus:ring-2 focus:ring-accent/50 border border-l-0 border-light-gray dark:border-primary/30 bg-white dark:bg-primary/10 h-full placeholder:text-brown/70 dark:placeholder:text-background-light/50 px-4 text-base font-normal leading-normal"
                      placeholder="Khaad ya beej talash karein"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <div className="text-primary flex border border-l-0 border-light-gray dark:border-primary/30 bg-white dark:bg-primary/10 items-center justify-center pr-4 rounded-r-xl cursor-pointer">
                      <span className="material-symbols-outlined text-2xl">mic</span>
                    </div>
                  </div>
                </label>
              </div>
              {/* Chips */}
              <div className="px-6 sm:px-10">
                <div className="flex gap-3 py-3 overflow-x-auto">
                  {categories.map((category) => (
                    <div
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`flex h-10 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-lg pl-3 pr-4 shadow-sm border ${selectedCategory === category
                          ? 'bg-primary text-white dark:text-charcoal dark:bg-accent border-transparent'
                          : 'bg-white dark:bg-primary/20 hover:bg-light-gray/60 dark:hover:bg-primary/40 border-light-gray dark:border-primary/30 text-charcoal dark:text-background-light'
                        }`}
                    >
                      <p className="text-sm font-medium">{category}</p>
                    </div>
                  ))}

                </div>
              </div>
              {/* ImageGrid */}
              <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 sm:p-10">
                {loading ? (
                  <div className="col-span-full h-40 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                  </div>
                ) : products.length > 0 ? (
                  products.map((product) => (
                    <div key={product.id} className="flex flex-col gap-3 rounded-xl bg-white dark:bg-primary/10 border border-light-gray dark:border-primary/20 shadow-sm transition-shadow hover:shadow-lg overflow-hidden">
                      <div
                        className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover bg-gray-100"
                        style={{ backgroundImage: `url(${product.images?.split(',')[0] || 'https://via.placeholder.com/300?text=Product'})` }}
                      ></div>
                      <div className="p-4 flex flex-col gap-3">
                        <div className="flex justify-between items-start">
                          <h3 className="text-charcoal dark:text-background-light text-base font-bold leading-tight">{product.name}</h3>
                        </div>
                        <p className="text-brown dark:text-background-light/70 text-sm font-normal">{product.unit}</p>
                        <div className="flex items-end gap-2">
                          <p className="text-accent text-lg font-bold">₨ {product.price.toLocaleString()}</p>
                        </div>
                        <div className="flex items-center gap-4 pt-2">
                          <div className="flex items-center gap-1.5 text-xs text-primary dark:text-green-300">
                            <span className="material-symbols-outlined text-base">verified</span>
                            <p>Verified</p>
                          </div>
                          {product.stock > 0 ? (
                            <div className="flex items-center gap-1.5 text-xs text-primary dark:text-green-300">
                              <div className="w-2 h-2 rounded-full bg-green-500"></div>
                              <p>In Stock</p>
                            </div>
                          ) : (
                            <div className="flex items-center gap-1.5 text-xs text-alert-red">
                              <div className="w-2 h-2 rounded-full bg-alert-red"></div>
                              <p>Out of Stock</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full py-10 text-center text-gray-500">
                    No products found in this category.
                  </div>
                )}

              </main>
            </div>
          </div>
        </div>
        {/* FAB */}
        <div className="fixed bottom-8 right-8">
          <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 w-14 bg-primary text-white shadow-lg hover:bg-primary/90">
            <span className="material-symbols-outlined text-2xl">filter_alt</span>
          </button>
        </div>
      </div>
    </>
  );
}
