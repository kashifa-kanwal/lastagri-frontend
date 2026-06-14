'use client';

import React, { useEffect, useState } from 'react';
import { useAuth } from '@/lib/contexts/AuthContext';
import { apiRequest } from '@/lib/api';
import { useRouter } from 'next/navigation';
import { useToast } from '@/lib/contexts/ToastContext';

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
  is_available: boolean;
  sku?: string;
}

interface ProductForm {
  name: string;
  description: string;
  category: string;
  price: string;
  stock: string;
  unit: string;
  images: string;
  is_available: boolean;
}

const CATEGORIES = ['Fertilizers', 'Seeds', 'Pesticides', 'Tools', 'Irrigation', 'Other'];
const UNITS = ['kg', 'bag', 'liter', 'bottle', 'piece', 'box', 'ton'];

const emptyForm: ProductForm = {
  name: '',
  description: '',
  category: 'Fertilizers',
  price: '',
  stock: '',
  unit: 'kg',
  images: '',
  is_available: true,
};

export default function Page() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();
  const { showToast } = useToast();
  const [products, setProducts] = useState<Product[]>([]);
  const [loadingData, setLoadingData] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState<ProductForm>(emptyForm);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [editProduct, setEditProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isLoading, isAuthenticated, router]);

  const fetchProducts = async () => {
    if (user?.role === 'supplier') {
      try {
        const data = await apiRequest<Product[]>('/suppliers/products', { method: 'GET' });
        setProducts(data);
      } catch (error) {
        console.error('Failed to fetch products', error);
      } finally {
        setLoadingData(false);
      }
    }
  };

  useEffect(() => {
    if (isAuthenticated && user?.role === 'supplier') {
      fetchProducts();
    }
  }, [isAuthenticated, user]);

  const openAddModal = () => {
    setEditProduct(null);
    setForm(emptyForm);
    setError('');
    setSuccess('');
    setShowModal(true);
  };

  const openEditModal = (product: Product) => {
    setEditProduct(product);
    setForm({
      name: product.name,
      description: product.description || '',
      category: product.category,
      price: String(product.price),
      stock: String(product.stock),
      unit: product.unit,
      images: product.images || '',
      is_available: product.is_available,
    });
    setError('');
    setSuccess('');
    setShowModal(true);
  };

  const handleSubmit = async () => {
    setError('');
    if (!form.name || !form.price || !form.stock) {
      setError('Name, price, and stock are required.');
      return;
    }
    setSubmitting(true);
    try {
      const payload = {
        name: form.name,
        description: form.description,
        category: form.category,
        price: parseFloat(form.price),
        stock: parseInt(form.stock),
        unit: form.unit,
        images: form.images,
        is_available: form.is_available,
      };

      if (editProduct) {
        await apiRequest(`/suppliers/products/${editProduct.id}`, {
          method: 'PUT',
          body: JSON.stringify(payload),
        });
        setSuccess('Product updated successfully!');
      } else {
        await apiRequest('/products/', {
          method: 'POST',
          body: JSON.stringify(payload),
        });
        setSuccess('Product added successfully!');
      }

      await fetchProducts();
      setTimeout(() => {
        setShowModal(false);
        setSuccess('');
      }, 1200);
    } catch (err: any) {
      setError(err?.message || 'Failed to save product. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (productId: number) => {
    if (!confirm('Are you sure you want to delete this product?')) return;
    try {
      await apiRequest(`/suppliers/products/${productId}`, { method: 'DELETE' });
      await fetchProducts();
    } catch (err) {
      showToast('Failed to delete product.', 'error');
    }
  };

  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filterCategory === 'All' || p.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  if (isLoading || loadingData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-off-white dark:bg-background-dark">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <>
      <div className="flex h-screen w-full">
        {/* Filters Sidebar */}
        <aside className="flex-shrink-0 w-72 bg-container-light dark:bg-container-dark border-r border-border-light dark:border-border-dark p-6 flex flex-col gap-6 mobile-hidden">
          <h2 className="text-lg font-bold">Filters</h2>
          <div className="relative">
            <input
              className="w-full pl-10 pr-4 py-2 border border-border-light dark:border-border-dark rounded-md bg-background-light dark:bg-background-dark focus:ring-primary focus:border-primary"
              placeholder="Search products..."
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Category</h3>
            <div className="space-y-2">
              {['All', ...CATEGORIES].map((cat) => (
                <label key={cat} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    type="radio"
                    name="category"
                    checked={filterCategory === cat}
                    onChange={() => setFilterCategory(cat)}
                  />
                  <span>{cat}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="p-8">
            {/* Top Bar */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-3xl font-bold">My Products Catalog</h1>
                <p className="text-gray-500 mt-1">{products.length} products total</p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={openAddModal}
                  className="flex items-center justify-center h-10 px-4 rounded-md bg-primary text-white text-sm font-bold hover:bg-primary/90 transition"
                >
                  <span className="material-symbols-outlined mr-1 text-base">add</span>
                  <span>Add Product</span>
                </button>
              </div>
            </div>

            {/* Grid View */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-container-light dark:bg-container-dark border border-border-light dark:border-border-dark rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div
                      className="h-40 bg-gray-200 dark:bg-gray-700 flex items-center justify-center"
                      style={{
                        backgroundImage: product.images ? `url(${product.images.split(',')[0]})` : undefined,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    >
                      {!product.images && (
                        <span className="material-symbols-outlined text-5xl text-gray-400 dark:text-gray-500">image</span>
                      )}
                    </div>
                    <div className="p-4">
                      <div className="flex items-start justify-between mb-1">
                        <h3 className="font-bold text-base">{product.name}</h3>
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${product.is_available ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'}`}>
                          {product.is_available ? 'Active' : 'Inactive'}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400 mb-1">{product.category}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Unit: {product.unit}</p>
                      <div className="flex justify-between items-center my-3">
                        <span className="font-bold text-lg">Rs {product.price.toLocaleString()}</span>
                        <span className={`text-sm font-medium px-2 py-0.5 rounded-full text-white ${product.stock < 10 ? 'bg-red-500' : 'bg-green-500'}`}>
                          {product.stock} units
                        </span>
                      </div>
                      {/* BNPL installment preview */}
                      <div className="bg-green-50 dark:bg-green-900/20 rounded-md p-2 mb-3 text-xs text-green-700 dark:text-green-300">
                        <span className="font-semibold">BNPL:</span> 4 installments of Rs {Math.round(product.price / 4).toLocaleString()}/month
                      </div>
                      <div className="flex justify-end gap-2 pt-2 border-t border-border-light dark:border-border-dark">
                        <button
                          onClick={() => openEditModal(product)}
                          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                          title="Edit"
                        >
                          <span className="material-symbols-outlined">edit</span>
                        </button>
                        <button
                          onClick={() => handleDelete(product.id)}
                          className="p-2 rounded-full hover:bg-red-50 dark:hover:bg-red-900/20 text-red-500"
                          title="Delete"
                        >
                          <span className="material-symbols-outlined">delete</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full flex flex-col items-center justify-center text-center p-16 border-2 border-dashed border-border-light dark:border-border-dark rounded-xl mt-8">
                  <span className="material-symbols-outlined text-8xl text-gray-300 mb-4">inventory_2</span>
                  <h2 className="text-2xl font-bold mb-2">Your catalog is empty</h2>
                  <p className="text-gray-500 dark:text-gray-400 mb-6">
                    Get started by adding your first agricultural product.
                  </p>
                  <button
                    onClick={openAddModal}
                    className="flex items-center justify-center h-12 px-6 rounded-md bg-primary text-white text-base font-bold hover:bg-primary/90 transition"
                  >
                    <span className="material-symbols-outlined mr-2">add</span>
                    <span>Add your first product</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>

      {/* Add/Edit Product Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-container-dark rounded-2xl shadow-2xl w-full max-w-lg mx-4 max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-border-light dark:border-border-dark">
              <h2 className="text-xl font-bold">{editProduct ? 'Edit Product' : 'Add New Product'}</h2>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-4">
              {error && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3 text-red-600 dark:text-red-400 text-sm">
                  {error}
                </div>
              )}
              {success && (
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-3 text-green-600 dark:text-green-400 text-sm">
                  ✅ {success}
                </div>
              )}

              {/* Product Name */}
              <div>
                <label className="block text-sm font-semibold mb-1">Product Name *</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-border-light dark:border-border-dark rounded-lg bg-background-light dark:bg-background-dark focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="e.g. DAP Fertilizer 50kg"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-semibold mb-1">Description</label>
                <textarea
                  className="w-full px-3 py-2 border border-border-light dark:border-border-dark rounded-lg bg-background-light dark:bg-background-dark focus:ring-2 focus:ring-primary focus:outline-none resize-none"
                  rows={3}
                  placeholder="Product description..."
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                />
              </div>

              {/* Category + Unit */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-1">Category *</label>
                  <select
                    className="w-full px-3 py-2 border border-border-light dark:border-border-dark rounded-lg bg-background-light dark:bg-background-dark focus:ring-2 focus:ring-primary focus:outline-none"
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                  >
                    {CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">Unit *</label>
                  <select
                    className="w-full px-3 py-2 border border-border-light dark:border-border-dark rounded-lg bg-background-light dark:bg-background-dark focus:ring-2 focus:ring-primary focus:outline-none"
                    value={form.unit}
                    onChange={(e) => setForm({ ...form, unit: e.target.value })}
                  >
                    {UNITS.map((u) => (
                      <option key={u} value={u}>{u}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Price + Stock */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-1">Price (Rs) *</label>
                  <input
                    type="number"
                    min="0"
                    className="w-full px-3 py-2 border border-border-light dark:border-border-dark rounded-lg bg-background-light dark:bg-background-dark focus:ring-2 focus:ring-primary focus:outline-none"
                    placeholder="e.g. 8500"
                    value={form.price}
                    onChange={(e) => setForm({ ...form, price: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">Stock *</label>
                  <input
                    type="number"
                    min="0"
                    className="w-full px-3 py-2 border border-border-light dark:border-border-dark rounded-lg bg-background-light dark:bg-background-dark focus:ring-2 focus:ring-primary focus:outline-none"
                    placeholder="e.g. 100"
                    value={form.stock}
                    onChange={(e) => setForm({ ...form, stock: e.target.value })}
                  />
                </div>
              </div>

              {/* BNPL Preview */}
              {form.price && parseFloat(form.price) > 0 && (
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg p-3">
                  <p className="text-sm font-semibold text-green-700 dark:text-green-300 mb-1">📦 BNPL Installment Preview</p>
                  <p className="text-sm text-green-600 dark:text-green-400">
                    4 equal installments of <strong>Rs {Math.round(parseFloat(form.price) / 4).toLocaleString()}</strong>/month
                  </p>
                  <p className="text-xs text-green-500 mt-1">Farmers can buy on credit and pay in 4 monthly installments</p>
                </div>
              )}

              {/* Image URL */}
              <div>
                <label className="block text-sm font-semibold mb-1">Image URL (optional)</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-border-light dark:border-border-dark rounded-lg bg-background-light dark:bg-background-dark focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="https://example.com/image.jpg"
                  value={form.images}
                  onChange={(e) => setForm({ ...form, images: e.target.value })}
                />
              </div>

              {/* Available Toggle */}
              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div>
                  <p className="font-semibold text-sm">Product Available</p>
                  <p className="text-xs text-gray-500">Farmers can see and order this product</p>
                </div>
                <button
                  type="button"
                  onClick={() => setForm({ ...form, is_available: !form.is_available })}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${form.is_available ? 'bg-primary' : 'bg-gray-300'}`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${form.is_available ? 'translate-x-6' : 'translate-x-1'}`}
                  />
                </button>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex gap-3 p-6 border-t border-border-light dark:border-border-dark">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 h-10 rounded-lg border border-border-light dark:border-border-dark text-sm font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                disabled={submitting}
                className="flex-1 h-10 rounded-lg bg-primary text-white text-sm font-bold hover:bg-primary/90 transition disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {submitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Saving...</span>
                  </>
                ) : (
                  <span>{editProduct ? 'Update Product' : 'Add Product'}</span>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}