'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function WeatherPage() {
    const [location, setLocation] = useState('Rahim Yar Khan');
    const { t } = useLanguage();

    // Mock Weather Data
    const currentWeather = {
        temp: 32,
        condition: 'Sunny',
        humidity: 45,
        windSpeed: 12,
        precipitation: 0,
        icon: 'sunny',
    };

    const forecast = [
        { day: 'Today', temp: 32, condition: 'Sunny', icon: 'sunny' },
        { day: 'Tomorrow', temp: 31, condition: 'Partly Cloudy', icon: 'partly_cloudy_day' },
        { day: 'Wed', temp: 33, condition: 'Sunny', icon: 'sunny' },
        { day: 'Thu', temp: 30, condition: 'Cloudy', icon: 'cloud' },
        { day: 'Fri', temp: 29, condition: 'Rain', icon: 'rainy' },
        { day: 'Sat', temp: 28, condition: 'Thunderstorm', icon: 'thunderstorm' },
        { day: 'Sun', temp: 30, condition: 'Sunny', icon: 'sunny' },
    ];

    const alerts = [
        {
            id: 1,
            severity: 'warning',
            title: t('farmer.weather.heatWaveAlert'),
            message: t('farmer.weather.heatWaveMsg'),
            date: '2 hours ago',
        },
        {
            id: 2,
            severity: 'info',
            title: t('farmer.weather.optimalSowing'),
            message: t('farmer.weather.optimalSowingMsg'),
            date: '1 day ago',
        },
    ];

    return (
        <div className="p-6 max-w-7xl mx-auto pb-24 lg:pb-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-3xl font-bold text-charcoal dark:text-off-white mb-2">{t('farmer.weather.title')}</h1>
                    <p className="text-gray-600 dark:text-gray-400">{t('farmer.weather.subtitle')}</p>
                </div>
                <div className="bg-white dark:bg-charcoal/20 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center gap-2">
                    <span className="material-symbols-outlined text-indus-green">location_on</span>
                    <span className="font-semibold text-charcoal dark:text-off-white">{location}</span>
                </div>
            </div>

            {/* Current Weather */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <div className="lg:col-span-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                    <div className="relative z-10 flex justify-between items-center">
                        <div>
                            <div className="text-lg font-medium opacity-90 mb-1">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
                            <div className="text-6xl font-bold mb-4">{currentWeather.temp}°C</div>
                            <div className="text-2xl font-semibold flex items-center gap-2">
                                <span className="material-symbols-outlined text-3xl">{currentWeather.icon}</span>
                                {currentWeather.condition}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-8 text-center">
                            <div>
                                <div className="text-3xl font-bold mb-1">{currentWeather.humidity}%</div>
                                <div className="text-sm opacity-80">{t('farmer.weather.humidity')}</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold mb-1">{currentWeather.windSpeed} km/h</div>
                                <div className="text-sm opacity-80">{t('farmer.weather.windSpeed')}</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold mb-1">{currentWeather.precipitation}%</div>
                                <div className="text-sm opacity-80">{t('farmer.weather.precipitation')}</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold mb-1">UV</div>
                                <div className="text-sm opacity-80">{t('farmer.weather.uvIndex')}</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Alerts */}
                <div className="space-y-4">
                    {alerts.map((alert) => (
                        <div key={alert.id} className={`p-4 rounded-xl border-l-4 shadow-sm ${alert.severity === 'warning'
                                ? 'bg-orange-50 dark:bg-orange-900/20 border-orange-500'
                                : 'bg-blue-50 dark:bg-blue-900/20 border-blue-500'
                            }`}>
                            <div className="flex items-start justify-between mb-2">
                                <div className="flex items-center gap-2">
                                    <span className={`material-symbols-outlined ${alert.severity === 'warning' ? 'text-orange-600' : 'text-blue-600'
                                        }`}>
                                        {alert.severity === 'warning' ? 'warning' : 'info'}
                                    </span>
                                    <h3 className="font-bold text-charcoal dark:text-off-white">{alert.title}</h3>
                                </div>
                                <span className="text-xs text-gray-500">{alert.date}</span>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{alert.message}</p>
                        </div>
                    ))}
                    <div className="bg-white dark:bg-charcoal/20 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                        <h3 className="font-bold text-charcoal dark:text-off-white mb-2 flex items-center gap-2">
                            <span className="material-symbols-outlined text-indus-green">agriculture</span>
                            {t('farmer.weather.farmingTip')}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            {t('farmer.weather.farmingTipMsg')}
                        </p>
                    </div>
                </div>
            </div>

            {/* 7-Day Forecast */}
            <div className="bg-white dark:bg-charcoal/20 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-bold mb-6 text-charcoal dark:text-off-white">{t('farmer.weather.sevenDayForecast')}</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                    {forecast.map((day, index) => (
                        <div key={index} className="text-center p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                            <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">{day.day}</div>
                            <span className="material-symbols-outlined text-4xl text-yellow-500 mb-2">{day.icon}</span>
                            <div className="text-xl font-bold text-charcoal dark:text-off-white mb-1">{day.temp}°C</div>
                            <div className="text-xs text-gray-500">{day.condition}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
