'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function NotificationsPage() {
    const [filter, setFilter] = useState<'all' | 'orders' | 'payments' | 'system'>('all');
    const { t } = useLanguage();

    const notifications = [
        {
            id: 1,
            type: 'orders',
            title: t('farmer.notifications.orderShipped'),
            message: 'Your order #ORD-2023-001 has been shipped by Green Valley Supplies.',
            time: '2 hours ago',
            read: false,
            icon: 'local_shipping',
            color: 'blue',
        },
        {
            id: 2,
            type: 'payments',
            title: t('farmer.notifications.paymentDue'),
            message: 'Upcoming installment of PKR 15,000 for Order #ORD-2023-001 is due on Dec 01.',
            time: '1 day ago',
            read: true,
            icon: 'payments',
            color: 'orange',
        },
        {
            id: 3,
            type: 'system',
            title: t('farmer.notifications.welcome'),
            message: 'Thank you for joining Pakistan\'s leading agricultural BNPL platform.',
            time: '3 days ago',
            read: true,
            icon: 'waving_hand',
            color: 'green',
        },
        {
            id: 4,
            type: 'orders',
            title: t('farmer.notifications.orderConfirmed'),
            message: 'Your order #ORD-2023-001 has been confirmed.',
            time: '3 days ago',
            read: true,
            icon: 'check_circle',
            color: 'green',
        },
    ];

    const filteredNotifications = filter === 'all'
        ? notifications
        : notifications.filter(n => n.type === filter);

    return (
        <div className="p-6 max-w-4xl mx-auto pb-24 lg:pb-6">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-3xl font-bold text-charcoal dark:text-off-white mb-2">{t('farmer.notifications.title')}</h1>
                    <p className="text-gray-600 dark:text-gray-400">{t('farmer.notifications.subtitle')}</p>
                </div>
                <button className="text-indus-green font-semibold hover:underline">{t('farmer.notifications.markAllRead')}</button>
            </div>

            {/* Filters */}
            <div className="flex gap-2 overflow-x-auto pb-4 mb-6">
                {['all', 'orders', 'payments', 'system'].map((f) => (
                    <button
                        key={f}
                        onClick={() => setFilter(f as any)}
                        className={`px-4 py-2 rounded-full text-sm font-semibold capitalize transition-colors ${filter === f
                                ? 'bg-indus-green text-white'
                                : 'bg-white dark:bg-charcoal/20 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                            }`}
                    >
                        {f}
                    </button>
                ))}
            </div>

            {/* Notifications List */}
            <div className="space-y-4">
                {filteredNotifications.map((notification) => (
                    <div
                        key={notification.id}
                        className={`bg-white dark:bg-charcoal/20 rounded-xl p-4 border transition-all hover:shadow-md flex gap-4 ${notification.read
                                ? 'border-gray-200 dark:border-gray-700 opacity-75'
                                : 'border-l-4 border-l-indus-green border-y-gray-200 border-r-gray-200 dark:border-y-gray-700 dark:border-r-gray-700'
                            }`}
                    >
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${notification.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                                notification.color === 'orange' ? 'bg-orange-100 text-orange-600' :
                                    'bg-green-100 text-green-600'
                            }`}>
                            <span className="material-symbols-outlined">{notification.icon}</span>
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-start mb-1">
                                <h3 className={`font-bold text-charcoal dark:text-off-white ${!notification.read && 'text-indus-green'}`}>
                                    {notification.title}
                                </h3>
                                <span className="text-xs text-gray-500">{notification.time}</span>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                {notification.message}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {filteredNotifications.length === 0 && (
                <div className="text-center py-12">
                    <span className="material-symbols-outlined text-6xl text-gray-300 dark:text-gray-600 mb-4 block">notifications_off</span>
                    <p className="text-gray-500">{t('farmer.notifications.noNotifications')}</p>
                </div>
            )}
        </div>
    );
}
