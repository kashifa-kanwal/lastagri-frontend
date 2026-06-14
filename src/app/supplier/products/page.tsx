'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/lib/contexts/AuthContext';
import { apiRequest } from '@/lib/api';
import { Supplier } from '@/types';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { useToast } from '@/lib/contexts/ToastContext';

interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    unit: string;
    stock: number;
    images: string;
    description: string;
    rating: number | null;
    supplier_id: number;
    is_available: boolean;
}

interface ProductStats {
    total_products: number;
    in_stock: number;
    out_of_stock: number;
    high_rated: number;
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
    name: '', description: '', category: 'Fertilizers',
    price: '', stock: '', unit: 'kg', images: '', is_available: true,
};

// Crop Cycle BNPL — 40% mid-season (90 days), 60% post-harvest (180 days)
function calcBNPL(price: number) {
    return {
        midSeason: Math.round(price * 0.40),
        postHarvest: Math.round(price * 0.60),
    };
}

export default function SupplierProductsPage() {
    const { user } = useAuth();
    const supplier = user as Supplier;
    const [products, setProducts] = useState<Product[]>([]);
    const [productStats, setProductStats] = useState<ProductStats | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [showAddModal, setShowAddModal] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [editProduct, setEditProduct] = useState<Product | null>(null);
    const [form, setForm] = useState<ProductForm>(emptyForm);
    const [submitting, setSubmitting] = useState(false);
    const [formError, setFormError] = useState('');
    const [formSuccess, setFormSuccess] = useState('');
    const { t } = useLanguage();
    const { showToast } = useToast();

    useEffect(() => {
        fetchProducts();
        fetchProductStats();
    }, []);

    const fetchProducts = async () => {
        try {
            const data = await apiRequest<Product[]>('/suppliers/products');
            setProducts(data);
        } catch (error) {
            console.error('Failed to fetch products:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const fetchProductStats = async () => {
        try {
            const stats = await apiRequest<ProductStats>('/suppliers/products/stats');
            setProductStats(stats);
        } catch (error) {
            console.error('Failed to fetch product stats:', error);
        }
    };

    const openAddModal = () => {
        setEditProduct(null);
        setForm(emptyForm);
        setFormError('');
        setFormSuccess('');
        setShowAddModal(true);
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
            is_available: product.is_available ?? true,
        });
        setFormError('');
        setFormSuccess('');
        setShowAddModal(true);
    };

    const handleSubmit = async () => {
        setFormError('');
        if (!form.name || !form.price || !form.stock) {
            setFormError('Naam, qeemat aur stock zaruri hain.');
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
                setFormSuccess('Product update ho gaya!');
            } else {
                await apiRequest('/products/', {
                    method: 'POST',
                    body: JSON.stringify(payload),
                });
                setFormSuccess('Product add ho gaya!');
            }

            await fetchProducts();
            await fetchProductStats();
            setTimeout(() => {
                setShowAddModal(false);
                setFormSuccess('');
            }, 1200);
        } catch (err: any) {
            setFormError(err?.message || 'Kuch masla hua. Dobara try karein.');
        } finally {
            setSubmitting(false);
        }
    };

    const handleDeleteProduct = async (productId: number) => {
        if (!confirm('Yeh product delete karna chahte hain?')) return;
        try {
            await apiRequest(`/suppliers/products/${productId}`, { method: 'DELETE' });
            await fetchProducts();
            await fetchProductStats();
        } catch (error: any) {
            showToast(`Delete nahi hua: ${error.message}`, 'error');
        }
    };

    const filteredProducts = selectedCategory === 'all'
        ? products
        : products.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase());

    const categories = [
        { value: 'all', label: t('supplier.products.allProducts') },
        { value: 'fertilizers', label: t('supplier.products.fertilizers') },
        { value: 'seeds', label: t('supplier.products.seeds') },
        { value: 'pesticides', label: t('supplier.products.pesticides') },
        { value: 'tools', label: t('supplier.products.tools') },
        { value: 'irrigation', label: t('supplier.products.irrigation') },
        { value: 'other', label: t('supplier.products.other') },
    ];

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-trust-blue"></div>
            </div>
        );
    }

    return (
        <div className="p-6 max-w-7xl mx-auto pb-24 lg:pb-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-extrabold text-charcoal dark:text-off-white mb-1">{t('supplier.products.title')}</h1>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{t('supplier.products.subtitle')}</p>
                </div>
                <button
                    onClick={openAddModal}
                    className="flex items-center gap-2 px-6 py-3 bg-trust-blue text-white rounded-xl hover:bg-trust-blue/90 font-bold shadow-md shadow-trust-blue/20 transition-all duration-200 hover:shadow-lg"
                >
                    <span className="material-symbols-outlined">add_circle</span>
                    {t('supplier.products.addProduct')}
                </button>
            </div>

            {/* Stats */}
            {productStats && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <div className="bg-gradient-to-br from-trust-blue to-trust-blue/80 rounded-2xl p-5 text-white shadow-lg shadow-trust-blue/10">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                                <span className="material-symbols-outlined text-xl">inventory_2</span>
                            </div>
                            <div className="text-sm font-medium opacity-90">{t('supplier.products.totalProducts')}</div>
                        </div>
                        <div className="text-3xl font-extrabold">{productStats.total_products}</div>
                    </div>
                    <div className="bg-gradient-to-br from-indus-green to-indus-green/80 rounded-2xl p-5 text-white shadow-lg shadow-indus-green/10">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                                <span className="material-symbols-outlined text-xl">check_circle</span>
                            </div>
                            <div className="text-sm font-medium opacity-90">{t('supplier.products.inStock')}</div>
                        </div>
                        <div className="text-3xl font-extrabold">{productStats.in_stock}</div>
                    </div>
                    <div className="bg-gradient-to-br from-orange-500 to-orange-400 rounded-2xl p-5 text-white shadow-lg shadow-orange-500/10">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                                <span className="material-symbols-outlined text-xl">remove_shopping_cart</span>
                            </div>
                            <div className="text-sm font-medium opacity-90">{t('supplier.products.outOfStock')}</div>
                        </div>
                        <div className="text-3xl font-extrabold">{productStats.out_of_stock}</div>
                    </div>
                    <div className="bg-gradient-to-br from-amber-500 to-amber-400 rounded-2xl p-5 text-white shadow-lg shadow-amber-500/10">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                                <span className="material-symbols-outlined text-xl">star</span>
                            </div>
                            <div className="text-sm font-medium opacity-90">{t('supplier.products.highRated')}</div>
                        </div>
                        <div className="text-3xl font-extrabold">{productStats.high_rated}</div>
                    </div>
                </div>
            )}

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto pb-4 mb-6">
                {categories.map((cat) => (
                    <button
                        key={cat.value}
                        onClick={() => setSelectedCategory(cat.value)}
                        className={`px-5 py-2.5 rounded-xl whitespace-nowrap text-sm font-semibold transition-all duration-200 ${selectedCategory === cat.value
                            ? 'bg-trust-blue text-white shadow-md shadow-trust-blue/20'
                            : 'bg-white dark:bg-charcoal/20 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700'
                            }`}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => {
                    const bnpl = calcBNPL(product.price);
                    return (
                        <div key={product.id} className="group bg-white dark:bg-charcoal/20 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl hover:border-trust-blue/30 transition-all duration-300">
                            {/* Image Section */}
                            <div className="aspect-[4/3] bg-gray-100 dark:bg-gray-800 relative overflow-hidden">
                                {product.images ? (
                                    <img
                                        src={product.images.split(',')[0]}
                                        alt={product.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                                        <span className="material-symbols-outlined text-5xl text-gray-300 dark:text-gray-600 mb-2">image</span>
                                        <span className="text-xs text-gray-400 dark:text-gray-500">No image</span>
                                    </div>
                                )}
                                {/* Badges overlay */}
                                <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
                                    <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-white/90 dark:bg-charcoal/80 text-gray-700 dark:text-gray-200 backdrop-blur-sm shadow-sm">
                                        {product.category}
                                    </span>
                                    <span className={`px-3 py-1 rounded-lg text-xs font-bold backdrop-blur-sm shadow-sm ${product.stock > 0
                                        ? 'bg-green-500/90 text-white'
                                        : 'bg-red-500/90 text-white'
                                        }`}>
                                        {product.stock > 0 ? `${product.stock} in stock` : t('supplier.products.outOfStock')}
                                    </span>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-5">
                                {/* Name & Rating */}
                                <div className="flex items-start justify-between gap-2 mb-3">
                                    <h3 className="font-bold text-lg text-charcoal dark:text-off-white leading-tight">{product.name}</h3>
                                    <div className="flex items-center gap-1 shrink-0 bg-amber-50 dark:bg-amber-900/20 px-2 py-1 rounded-lg">
                                        <span className="material-symbols-outlined text-sm text-amber-500">star</span>
                                        <span className="text-xs font-bold text-amber-700 dark:text-amber-300">
                                            {product.rating ? product.rating.toFixed(1) : '—'}
                                        </span>
                                    </div>
                                </div>

                                {/* Price */}
                                <div className="mb-4">
                                    <div className="text-2xl font-extrabold text-trust-blue">PKR {product.price.toLocaleString()}</div>
                                    <div className="text-xs text-gray-400 font-medium">{t('supplier.products.per')} {product.unit}</div>
                                </div>

                                {/* Crop Cycle BNPL Preview */}
                                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/15 dark:to-teal-900/15 rounded-xl p-3 mb-4 border border-emerald-100 dark:border-emerald-800/30">
                                    <div className="flex items-center gap-1.5 mb-2">
                                        <span className="text-sm">🌾</span>
                                        <p className="text-xs font-bold text-emerald-700 dark:text-emerald-300">Fasal Cycle Qist</p>
                                    </div>
                                    <div className="space-y-1.5">
                                        <div className="flex justify-between items-center text-xs">
                                            <span className="text-emerald-600 dark:text-emerald-400">Season (90 din)</span>
                                            <span className="font-bold text-emerald-700 dark:text-emerald-300 bg-white dark:bg-emerald-900/30 px-2 py-0.5 rounded-md">Rs {bnpl.midSeason.toLocaleString()}</span>
                                        </div>
                                        <div className="flex justify-between items-center text-xs">
                                            <span className="text-emerald-600 dark:text-emerald-400">Harvest (180 din)</span>
                                            <span className="font-bold text-emerald-700 dark:text-emerald-300 bg-white dark:bg-emerald-900/30 px-2 py-0.5 rounded-md">Rs {bnpl.postHarvest.toLocaleString()}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-2 pt-1">
                                    <button
                                        onClick={() => openEditModal(product)}
                                        className="flex-1 px-4 py-2.5 bg-trust-blue text-white rounded-xl hover:bg-trust-blue/90 text-sm font-bold flex items-center justify-center gap-2 transition-all duration-200 hover:shadow-md hover:shadow-trust-blue/20"
                                    >
                                        <span className="material-symbols-outlined text-base">edit</span>
                                        {t('supplier.products.edit')}
                                    </button>
                                    <button
                                        onClick={() => handleDeleteProduct(product.id)}
                                        className="px-3.5 py-2.5 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-700 dark:hover:text-gray-200 transition-all duration-200"
                                        title="Delete product"
                                    >
                                        <span className="material-symbols-outlined text-base">delete</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {filteredProducts.length === 0 && (
                <div className="bg-white dark:bg-charcoal/20 rounded-2xl p-16 text-center border-2 border-dashed border-gray-200 dark:border-gray-700">
                    <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-5">
                        <span className="material-symbols-outlined text-4xl text-gray-400 dark:text-gray-500">inventory_2</span>
                    </div>
                    <h2 className="text-2xl font-bold mb-2 text-charcoal dark:text-off-white">{t('supplier.products.noProducts')}</h2>
                    <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-sm mx-auto">
                        {selectedCategory === 'all' ? t('supplier.products.noProductsAdded') : `No products in ${selectedCategory} category`}
                    </p>
                    <button
                        onClick={openAddModal}
                        className="px-8 py-3 bg-trust-blue text-white rounded-xl hover:bg-trust-blue/90 font-bold shadow-md shadow-trust-blue/20 transition-all duration-200 flex items-center gap-2 mx-auto"
                    >
                        <span className="material-symbols-outlined">add_circle</span>
                        {t('supplier.products.addFirst')}
                    </button>
                </div>
            )}

            {/* Add / Edit Product Modal */}
            {showAddModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white dark:bg-charcoal rounded-xl max-w-lg w-full max-h-[92vh] overflow-y-auto">
                        {/* Modal Header */}
                        <div className="p-5 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                            <h2 className="text-xl font-bold text-charcoal dark:text-off-white">
                                {editProduct ? 'Product Edit Karein' : t('supplier.products.addNew')}
                            </h2>
                            <button onClick={() => setShowAddModal(false)} className="text-gray-500 hover:text-gray-700">
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="p-5 space-y-4">
                            {formError && (
                                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-lg p-3 text-red-600 dark:text-red-400 text-sm">
                                    {formError}
                                </div>
                            )}
                            {formSuccess && (
                                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg p-3 text-green-600 dark:text-green-400 text-sm">
                                    ✅ {formSuccess}
                                </div>
                            )}

                            {/* Name */}
                            <div>
                                <label className="block text-sm font-semibold mb-1 text-charcoal dark:text-off-white">Product Ka Naam *</label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-charcoal/40 text-charcoal dark:text-off-white focus:ring-2 focus:ring-trust-blue focus:outline-none text-sm"
                                    placeholder="Maslan: DAP Khaad 50kg"
                                    value={form.name}
                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                />
                            </div>

                            {/* Description */}
                            <div>
                                <label className="block text-sm font-semibold mb-1 text-charcoal dark:text-off-white">Tafseelat</label>
                                <textarea
                                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-charcoal/40 text-charcoal dark:text-off-white focus:ring-2 focus:ring-trust-blue focus:outline-none resize-none text-sm"
                                    rows={2}
                                    placeholder="Product ki maloomat..."
                                    value={form.description}
                                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                                />
                            </div>

                            {/* Category + Unit */}
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-charcoal dark:text-off-white">Category *</label>
                                    <select
                                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-charcoal/40 text-charcoal dark:text-off-white focus:ring-2 focus:ring-trust-blue focus:outline-none text-sm"
                                        value={form.category}
                                        onChange={(e) => setForm({ ...form, category: e.target.value })}
                                    >
                                        {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-charcoal dark:text-off-white">Unit *</label>
                                    <select
                                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-charcoal/40 text-charcoal dark:text-off-white focus:ring-2 focus:ring-trust-blue focus:outline-none text-sm"
                                        value={form.unit}
                                        onChange={(e) => setForm({ ...form, unit: e.target.value })}
                                    >
                                        {UNITS.map((u) => <option key={u} value={u}>{u}</option>)}
                                    </select>
                                </div>
                            </div>

                            {/* Price + Stock */}
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-charcoal dark:text-off-white">Qeemat (Rs) *</label>
                                    <input
                                        type="number" min="0"
                                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-charcoal/40 text-charcoal dark:text-off-white focus:ring-2 focus:ring-trust-blue focus:outline-none text-sm"
                                        placeholder="8500"
                                        value={form.price}
                                        onChange={(e) => setForm({ ...form, price: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-charcoal dark:text-off-white">Stock *</label>
                                    <input
                                        type="number" min="0"
                                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-charcoal/40 text-charcoal dark:text-off-white focus:ring-2 focus:ring-trust-blue focus:outline-none text-sm"
                                        placeholder="100"
                                        value={form.stock}
                                        onChange={(e) => setForm({ ...form, stock: e.target.value })}
                                    />
                                </div>
                            </div>

                            {/* Live BNPL Preview */}
                            {form.price && parseFloat(form.price) > 0 && (
                                <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-xl p-4">
                                    <p className="text-sm font-bold text-amber-700 dark:text-amber-300 mb-3">🌾 Fasal Cycle BNPL Preview</p>
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between bg-white dark:bg-amber-900/30 rounded-lg p-2.5">
                                            <div>
                                                <p className="text-xs font-semibold text-amber-700 dark:text-amber-300">Qist 1 — Darmiyan Season</p>
                                                <p className="text-xs text-amber-500">90 din baad • fasal ugne ke dauran</p>
                                            </div>
                                            <span className="text-sm font-bold text-amber-700 dark:text-amber-300">
                                                Rs {Math.round(parseFloat(form.price) * 0.40).toLocaleString()}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between bg-white dark:bg-amber-900/30 rounded-lg p-2.5">
                                            <div>
                                                <p className="text-xs font-semibold text-amber-700 dark:text-amber-300">Qist 2 — Fasal ke Baad</p>
                                                <p className="text-xs text-amber-500">180 din baad • fasal bikne ke baad</p>
                                            </div>
                                            <span className="text-sm font-bold text-amber-700 dark:text-amber-300">
                                                Rs {Math.round(parseFloat(form.price) * 0.60).toLocaleString()}
                                            </span>
                                        </div>
                                    </div>
                                    <p className="text-xs text-amber-500 mt-2">✅ Monthly burden nahi — fasal cycle ke saath</p>
                                </div>
                            )}

                            {/* Image URL */}
                            <div>
                                <label className="block text-sm font-semibold mb-1 text-charcoal dark:text-off-white">Image URL (optional)</label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-charcoal/40 text-charcoal dark:text-off-white focus:ring-2 focus:ring-trust-blue focus:outline-none text-sm"
                                    placeholder="https://..."
                                    value={form.images}
                                    onChange={(e) => setForm({ ...form, images: e.target.value })}
                                />
                            </div>

                            {/* Available Toggle */}
                            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                <div>
                                    <p className="font-semibold text-sm text-charcoal dark:text-off-white">Product Available Hai?</p>
                                    <p className="text-xs text-gray-500">Kisan order kar sakte hain</p>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setForm({ ...form, is_available: !form.is_available })}
                                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${form.is_available ? 'bg-trust-blue' : 'bg-gray-300'}`}
                                >
                                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${form.is_available ? 'translate-x-6' : 'translate-x-1'}`} />
                                </button>
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="flex gap-3 p-5 border-t border-gray-200 dark:border-gray-700">
                            <button
                                onClick={() => setShowAddModal(false)}
                                className="flex-1 h-11 rounded-lg border border-gray-300 dark:border-gray-600 text-sm font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition text-charcoal dark:text-off-white"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSubmit}
                                disabled={submitting}
                                className="flex-1 h-11 rounded-lg bg-trust-blue text-white text-sm font-bold hover:bg-trust-blue/90 transition disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {submitting ? (
                                    <><div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div><span>Saving...</span></>
                                ) : (
                                    <span>{editProduct ? 'Update Karein' : 'Add Karein'}</span>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}