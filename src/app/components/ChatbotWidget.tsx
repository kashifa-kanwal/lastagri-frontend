'use client';

import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { useAuth } from '@/lib/contexts/AuthContext';
import { Supplier } from '@/types';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';

interface Message {
    role: 'user' | 'bot';
    text: string;
}

export default function ChatbotWidget() {
    const { t, locale } = useLanguage();
    const { user } = useAuth();

    // All useState and useRef hooks MUST come before any conditional return
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [hasGreeted, setHasGreeted] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // All useEffect hooks MUST come before any conditional return
    // Scroll to bottom on new messages
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isTyping]);

    // Focus input when chat opens
    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    // Add greeting when chat is first opened
    useEffect(() => {
        if (isOpen && !hasGreeted) {
            setHasGreeted(true);
            const greeting: Message = {
                role: 'bot',
                text: t('chatbot.greeting'),
            };
            setMessages([greeting]);

            const { role } = getUserContext();
            const defaultSuggestions = getDefaultSuggestions(role);
            setSuggestions(defaultSuggestions);
        }
    }, [isOpen, hasGreeted, t]);

    // KYC guard — computed AFTER all hooks
    const KYC_APPROVED_STATUSES = ['APPROVED', 'AUTO_APPROVED', 'AUTO_APPROVED_FLAGGED'];
    const isKycLocked =
        user !== null &&
        (user.role === 'farmer' || user.role === 'supplier') &&
        !KYC_APPROVED_STATUSES.includes(user.kycStatus ?? '');

    // Helper for chatbot API calls
    const getUserContext = () => {
        if (user) {
            return {
                role: user.role,
                name: user.name || (user as Supplier).businessName || '',
            };
        }
        return { role: 'guest', name: '' };
    };

    const getDefaultSuggestions = (role: string): string[] => {
        const key = `chatbot.chips.${role}`;
        const chips = t(key);
        if (chips && chips !== key) {
            return chips.split('|').map((s: string) => s.trim());
        }
        if (locale === 'ur') {
            return ['رجسٹریشن کیسے کریں', 'BNPL کیا ہے', 'رابطہ کریں'];
        }
        return ['How to Register', 'What is BNPL', 'Contact Support'];
    };

    const sendMessage = async (text: string) => {
        if (!text.trim()) return;

        const userMsg: Message = { role: 'user', text: text.trim() };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsTyping(true);
        setSuggestions([]);

        const { role, name } = getUserContext();

        const history = [...messages, userMsg].map(m => ({
            role: m.role === 'user' ? 'user' : 'bot',
            text: m.text,
        }));

        try {
            const res = await fetch(`${API_URL}/chatbot/message`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: text.trim(),
                    role,
                    user_name: name,
                    locale,
                    history: history.slice(-20),
                }),
            });

            if (!res.ok) throw new Error('API error');

            const data = await res.json();
            const botMsg: Message = { role: 'bot', text: data.reply };
            setMessages(prev => [...prev, botMsg]);

            if (data.suggestions?.length) {
                setSuggestions(data.suggestions);
            }
        } catch {
            const errorMsg: Message = {
                role: 'bot',
                text: t('chatbot.error'),
            };
            setMessages(prev => [...prev, errorMsg]);
            setSuggestions(getDefaultSuggestions(getUserContext().role));
        } finally {
            setIsTyping(false);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        sendMessage(input);
    };

    const handleChipClick = (chip: string) => {
        sendMessage(chip);
    };

    // Safe to return null AFTER all hooks
    if (isKycLocked) return null;

    return (
        <>
            {/* Chat Window */}
            {isOpen && (
                <div className="fixed bottom-20 lg:bottom-24 end-4 lg:end-6 w-[calc(100vw-2rem)] max-w-md h-[70vh] max-h-[600px] flex flex-col bg-white dark:bg-gray-900 shadow-2xl rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 z-[9999]">
                    {/* Header */}
                    <div className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white shrink-0">
                        <div className="relative">
                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                <span className="material-symbols-outlined text-2xl">smart_toy</span>
                            </div>
                            <div className="absolute bottom-0 end-0 w-3 h-3 bg-green-300 rounded-full border-2 border-green-700"></div>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="font-bold text-base truncate">{t('chatbot.title')}</p>
                            <p className="text-green-200 text-xs">{t('chatbot.online')}</p>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
                        >
                            <span className="material-symbols-outlined">close</span>
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-800/50">
                        {messages.map((msg, i) => (
                            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                {msg.role === 'bot' && (
                                    <div className="w-7 h-7 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center shrink-0 me-2 mt-1">
                                        <span className="material-symbols-outlined text-green-600 dark:text-green-400 text-sm">smart_toy</span>
                                    </div>
                                )}
                                <div
                                    className={`max-w-[80%] px-4 py-2.5 text-sm leading-relaxed whitespace-pre-wrap ${
                                        msg.role === 'user'
                                            ? 'bg-green-600 text-white rounded-2xl rounded-br-md'
                                            : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-2xl rounded-bl-md shadow-sm border border-gray-100 dark:border-gray-600'
                                    }`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}

                        {/* Typing Indicator */}
                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="w-7 h-7 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center shrink-0 me-2 mt-1">
                                    <span className="material-symbols-outlined text-green-600 dark:text-green-400 text-sm">smart_toy</span>
                                </div>
                                <div className="bg-white dark:bg-gray-700 rounded-2xl rounded-bl-md px-4 py-3 shadow-sm border border-gray-100 dark:border-gray-600">
                                    <div className="flex items-center gap-1.5">
                                        <span className="text-xs text-gray-400">{t('chatbot.typing')}</span>
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }}></span>
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }}></span>
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }}></span>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    {/* Quick Reply Chips */}
                    {suggestions.length > 0 && !isTyping && (
                        <div className="flex gap-2 px-4 py-2 overflow-x-auto bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-700 shrink-0">
                            {suggestions.map((chip, i) => (
                                <button
                                    key={i}
                                    onClick={() => handleChipClick(chip)}
                                    className="shrink-0 px-3 py-1.5 text-xs font-medium rounded-full bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-900/40 transition-colors whitespace-nowrap"
                                >
                                    {chip}
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Input Bar */}
                    <form onSubmit={handleSubmit} className="flex items-center gap-2 p-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shrink-0">
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder={t('chatbot.placeholder')}
                            disabled={isTyping}
                            className="flex-1 h-10 px-4 text-sm bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-full border-none outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400 disabled:opacity-50"
                        />
                        <button
                            type="submit"
                            disabled={!input.trim() || isTyping}
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-green-600 text-white hover:bg-green-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors shrink-0"
                        >
                            <span className="material-symbols-outlined text-xl">send</span>
                        </button>
                    </form>
                </div>
            )}

            {/* FAB (Floating Action Button) */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`fixed bottom-20 lg:bottom-6 end-4 lg:end-6 w-14 h-14 flex items-center justify-center rounded-full shadow-lg z-[9999] transition-all duration-300 ${
                    isOpen
                        ? 'bg-gray-600 hover:bg-gray-700 rotate-0'
                        : 'bg-green-600 hover:bg-green-700 animate-[bounce_2s_ease-in-out_3]'
                }`}
            >
                <span className="material-symbols-outlined text-white text-2xl">
                    {isOpen ? 'close' : 'chat'}
                </span>
            </button>
        </>
    );
}
