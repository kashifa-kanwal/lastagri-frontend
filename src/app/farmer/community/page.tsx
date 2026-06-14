'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function CommunityPage() {
    const [activeCategory, setActiveCategory] = useState('all');
    const { t } = useLanguage();

    const categories = [
        { id: 'all', label: t('farmer.community.allTopics') },
        { id: 'farming-tips', label: t('farmer.community.farmingTips') },
        { id: 'market-prices', label: t('farmer.community.marketPrices') },
        { id: 'disease-control', label: t('farmer.community.diseaseControl') },
        { id: 'machinery', label: t('farmer.community.machinery') },
    ];

    const posts = [
        {
            id: 1,
            author: 'Muhammad Ali',
            avatar: 'MA',
            role: 'Expert Farmer',
            time: '2 hours ago',
            category: 'farming-tips',
            title: 'Best time to sow wheat in Punjab?',
            content: 'I am planning to start sowing wheat next week. Is the current temperature suitable or should I wait for a few more days? Looking for advice from experienced farmers in Rahim Yar Khan area.',
            likes: 24,
            comments: 12,
            tags: ['wheat', 'sowing', 'punjab'],
        },
        {
            id: 2,
            author: 'Green Valley Supplies',
            avatar: 'GV',
            role: 'Supplier',
            time: '5 hours ago',
            category: 'disease-control',
            title: 'New organic pesticide available for cotton',
            content: 'We have just received a stock of new organic pesticides effective against whitefly. Visit our store or order online through the marketplace. Special discount for community members!',
            likes: 15,
            comments: 4,
            tags: ['cotton', 'pesticide', 'organic'],
        },
        {
            id: 3,
            author: 'Zain Ahmed',
            avatar: 'ZA',
            role: 'Farmer',
            time: '1 day ago',
            category: 'market-prices',
            title: 'Sugarcane rates update',
            content: 'Sugar mills in the region have updated their purchase rates. Current rate is PKR 300/40kg. Payments are being cleared within 15 days.',
            likes: 45,
            comments: 28,
            tags: ['sugarcane', 'rates', 'market'],
        },
    ];

    const filteredPosts = activeCategory === 'all'
        ? posts
        : posts.filter(post => post.category === activeCategory);

    return (
        <div className="p-6 max-w-7xl mx-auto pb-24 lg:pb-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-charcoal dark:text-off-white mb-2">{t('farmer.community.title')}</h1>
                    <p className="text-gray-600 dark:text-gray-400">{t('farmer.community.subtitle')}</p>
                </div>
                <button className="px-6 py-3 bg-indus-green text-white rounded-lg hover:bg-indus-green/90 font-semibold flex items-center gap-2">
                    <span className="material-symbols-outlined">edit_square</span>
                    {t('farmer.community.createPost')}
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Sidebar - Categories */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="bg-white dark:bg-charcoal/20 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                        <h3 className="font-bold text-lg mb-4 px-2">{t('farmer.community.categories')}</h3>
                        <div className="space-y-1">
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat.id)}
                                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${activeCategory === cat.id
                                            ? 'bg-indus-green/10 text-indus-green font-semibold'
                                            : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                                        }`}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-indus-green to-green-700 rounded-xl p-6 text-white">
                        <h3 className="font-bold text-lg mb-2">{t('farmer.community.inviteFriends')}</h3>
                        <p className="text-white/90 text-sm mb-4">
                            {t('farmer.community.inviteMsg')}
                        </p>
                        <button className="w-full py-2 bg-white/20 hover:bg-white/30 rounded-lg font-semibold transition-colors">
                            {t('farmer.community.copyInviteLink')}
                        </button>
                    </div>
                </div>

                {/* Main Feed */}
                <div className="lg:col-span-3 space-y-6">
                    {filteredPosts.map((post) => (
                        <div key={post.id} className="bg-white dark:bg-charcoal/20 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                            {/* Post Header */}
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center font-bold text-gray-600 dark:text-gray-300">
                                        {post.avatar}
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <span className="font-bold text-charcoal dark:text-off-white">{post.author}</span>
                                            {post.role === 'Expert Farmer' && (
                                                <span className="material-symbols-outlined text-blue-500 text-sm" title="Verified Expert">verified</span>
                                            )}
                                            {post.role === 'Supplier' && (
                                                <span className="bg-trust-blue/10 text-trust-blue text-xs px-2 py-0.5 rounded-full font-medium">Supplier</span>
                                            )}
                                        </div>
                                        <div className="text-xs text-gray-500">{post.time}</div>
                                    </div>
                                </div>
                                <button className="text-gray-400 hover:text-gray-600">
                                    <span className="material-symbols-outlined">more_horiz</span>
                                </button>
                            </div>

                            {/* Post Content */}
                            <h3 className="font-bold text-xl mb-2 text-charcoal dark:text-off-white">{post.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{post.content}</p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {post.tags.map((tag) => (
                                    <span key={tag} className="text-xs text-indus-green bg-indus-green/5 px-2 py-1 rounded-full font-medium">
                                        #{tag}
                                    </span>
                                ))}
                            </div>

                            {/* Actions */}
                            <div className="flex items-center gap-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                                <button className="flex items-center gap-2 text-gray-500 hover:text-indus-green transition-colors">
                                    <span className="material-symbols-outlined">thumb_up</span>
                                    <span className="text-sm font-medium">{post.likes} {t('farmer.community.likes')}</span>
                                </button>
                                <button className="flex items-center gap-2 text-gray-500 hover:text-trust-blue transition-colors">
                                    <span className="material-symbols-outlined">comment</span>
                                    <span className="text-sm font-medium">{post.comments} {t('farmer.community.comments')}</span>
                                </button>
                                <button className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors ml-auto">
                                    <span className="material-symbols-outlined">share</span>
                                    <span className="text-sm font-medium">{t('farmer.community.share')}</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
