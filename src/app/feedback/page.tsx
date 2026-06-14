'use client';

import { useState } from 'react';

export default function FeedbackPage() {
    const [rating, setRating] = useState(0);
    const [feedbackType, setFeedbackType] = useState('general');

    return (
        <div className="p-6 max-w-2xl mx-auto pb-24 lg:pb-6">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-2 text-charcoal dark:text-off-white">We Value Your Feedback</h1>
                <p className="text-gray-600 dark:text-gray-400">Help us improve AgriConnect for everyone</p>
            </div>

            <div className="bg-white dark:bg-charcoal/20 rounded-xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm">
                {/* NPS Rating */}
                <div className="mb-8 text-center">
                    <label className="block text-lg font-semibold mb-4 text-charcoal dark:text-off-white">
                        How likely are you to recommend AgriConnect to a friend?
                    </label>
                    <div className="flex justify-center gap-2 flex-wrap">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                            <button
                                key={num}
                                onClick={() => setRating(num)}
                                className={`w-10 h-10 rounded-full font-bold transition-all ${rating === num
                                        ? 'bg-indus-green text-white scale-110'
                                        : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                                    }`}
                            >
                                {num}
                            </button>
                        ))}
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-2 px-4 max-w-md mx-auto">
                        <span>Not Likely</span>
                        <span>Extremely Likely</span>
                    </div>
                </div>

                {/* Feedback Form */}
                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Feedback Type</label>
                        <div className="flex gap-4">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="type"
                                    value="general"
                                    checked={feedbackType === 'general'}
                                    onChange={(e) => setFeedbackType(e.target.value)}
                                    className="text-indus-green focus:ring-indus-green"
                                />
                                <span className="text-gray-700 dark:text-gray-300">General</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="type"
                                    value="bug"
                                    checked={feedbackType === 'bug'}
                                    onChange={(e) => setFeedbackType(e.target.value)}
                                    className="text-indus-green focus:ring-indus-green"
                                />
                                <span className="text-gray-700 dark:text-gray-300">Report a Bug</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="type"
                                    value="feature"
                                    checked={feedbackType === 'feature'}
                                    onChange={(e) => setFeedbackType(e.target.value)}
                                    className="text-indus-green focus:ring-indus-green"
                                />
                                <span className="text-gray-700 dark:text-gray-300">Feature Request</span>
                            </label>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Your Message</label>
                        <textarea
                            rows={5}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-indus-green focus:border-transparent outline-none transition-all"
                            placeholder="Tell us what you think..."
                        ></textarea>
                    </div>

                    <button className="w-full py-3 bg-indus-green text-white rounded-lg hover:bg-indus-green/90 font-bold shadow-lg shadow-indus-green/20 transition-transform active:scale-95">
                        Submit Feedback
                    </button>
                </div>
            </div>
        </div>
    );
}
