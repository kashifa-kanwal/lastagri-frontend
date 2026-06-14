'use client';

import { useCart } from '@/lib/contexts/CartContext';
import { useState, useEffect } from 'react';
import { ProductCategory, Product } from '@/types';
import { apiRequest } from '@/lib/api';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function MarketplacePage() {
    const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const { addToCart } = useCart();
    const { t } = useLanguage();

    const categories: { value: ProductCategory | 'all'; label: string; icon: string }[] = [
        { value: 'all', label: t('farmer.marketplace.allProducts'), icon: 'apps' },
        { value: 'fertilizers', label: t('farmer.marketplace.fertilizers'), icon: 'eco' },
        { value: 'seeds', label: t('farmer.marketplace.seeds'), icon: 'spa' },
        { value: 'pesticides', label: t('farmer.marketplace.pesticides'), icon: 'bug_report' },
        { value: 'tools', label: t('farmer.marketplace.tools'), icon: 'handyman' },
        { value: 'irrigation', label: t('farmer.marketplace.irrigation'), icon: 'water_drop' },
        { value: 'other', label: t('farmer.marketplace.other'), icon: 'category' },
    ];

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await apiRequest<any[]>('/products');
                const mappedProducts = data.map(p => ({
                    id: p.id.toString(),
                    name: p.name,
                    nameUrdu: p.name_urdu,
                    description: p.description,
                    category: p.category,
                    supplierId: p.supplier_id.toString(),
                    supplierName: p.supplier_name || 'Unknown Supplier', // Backend should send this or we fetch it
                    price: p.price,
                    unit: p.unit,
                    stock: p.stock,
                    images: p.images ? p.images.split(',').map((img: string) => img.trim()) : ['/placeholder-product.jpg'], // Split comma-separated string
                    rating: p.rating || 0,
                    reviewsCount: p.reviews_count || 0,
                    features: [],
                    isAvailable: p.is_available,
                    createdAt: new Date(p.created_at),
                } as Product));
                setProducts(mappedProducts);
            } catch (error) {
                console.error('Failed to fetch products:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchProducts();
    }, []);

    const filteredProducts = products
        .filter(p => selectedCategory === 'all' || p.category === selectedCategory)
        .filter(p => searchQuery === '' || p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.description.toLowerCase().includes(searchQuery.toLowerCase()));

    const handleAddToCart = (product: Product) => {
        addToCart(product, 1);
        console.log(`Added ${product.name} to cart!`);
    };

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indus-green"></div>
            </div>
        );
    }

    return (
        <div className="p-6 max-w-7xl mx-auto pb-24 lg:pb-6">
            {/* Header */}
            <div className="mb-6">
                <h1 className="text-3xl font-bold mb-2 text-charcoal dark:text-off-white">{t('farmer.marketplace.title')}</h1>
                <p className="text-gray-600 dark:text-gray-400">{t('farmer.marketplace.subtitle')}</p>
            </div>

            {/* Search */}
            <div className="mb-6">
                <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-gray-400">search</span>
                    <input
                        type="text"
                        placeholder={t('farmer.marketplace.searchPlaceholder')}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus::ring-2 focus:ring-indus-green/50"
                    />
                </div>
            </div>

            {/* Categories */}
            <div className="flex gap-2 overflow-x-auto pb-4 mb-6">
                {categories.map((cat) => (
                    <button
                        key={cat.value}
                        onClick={() => setSelectedCategory(cat.value)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${selectedCategory === cat.value
                            ? 'bg-indus-green text-white'
                            : 'bg-white dark:bg-charcoal/20 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                            }`}
                    >
                        <span className="material-symbols-outlined text-sm">{cat.icon}</span>
                        <span className="font-medium">{cat.label}</span>
                    </button>
                ))}
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="bg-white dark:bg-charcoal/20 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow">
                        <div className="aspect-square bg-gray-100 dark:bg-gray-800 relative">
                            {/* Use first image or placeholder */}
                            <img
                                src={product.images[0] || '/placeholder-product.jpg'}
                                alt={product.name}
                                className="w-full h-full object-cover"
                                onError={(e) => { (e.target as HTMLImageElement).src = '/placeholder-product.jpg'; }}
                            />
                            {!product.isAvailable && (
                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                    <span className="bg-alert-red text-white px-4 py-2 rounded-lg font-semibold">{t('farmer.marketplace.outOfStock')}</span>
                                </div>
                            )}
                        </div>
                        <div className="p-4">
                            <h3 className="font-semibold text-lg mb-1 text-charcoal dark:text-off-white">{product.name}</h3>
                            {product.nameUrdu && (
                                <p className="text-sm text-gray-500 font-urdu mb-2">{product.nameUrdu}</p>
                            )}
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">{product.description}</p>
                            <div className="flex items-center gap-2 mb-3">
                                <div className="flex items-center gap-1">
                                    <span className="material-symbols-outlined text-sm text-yellow-500">star</span>
                                    <span className="text-sm font-medium">{product.rating || 'N/A'}</span>
                                </div>
                                <span className="text-xs text-gray-500">({product.reviewsCount} {t('farmer.marketplace.reviews')})</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="text-2xl font-bold text-indus-green">PKR {product.price.toLocaleString()}</div>
                                    <div className="text-xs text-gray-500">{t('farmer.marketplace.per')} {product.unit}</div>
                                </div>
                                <button
                                    onClick={() => handleAddToCart(product)}
                                    disabled={!product.isAvailable}
                                    className="px-4 py-2 bg-indus-green text-white rounded-lg hover:bg-indus-green/90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                                >
                                    <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
                                    {t('farmer.marketplace.add')}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                    <span className="material-symbols-outlined text-6xl text-gray-300 dark:text-gray-600 mb-4">inventory_2</span>
                    <p className="text-gray-600 dark:text-gray-400">{t('farmer.marketplace.noProducts')}</p>
                </div>
            )}
        </div>
    );
}
