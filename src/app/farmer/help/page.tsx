'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/lib/contexts/AuthContext';
import { apiRequest } from '@/lib/api';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { useToast } from '@/lib/contexts/ToastContext';

interface SupportMessage {
    id: number;
    subject: string;
    message: string;
    category: string;
    status: string;
    admin_reply: string | null;
    replied_at: string | null;
    created_at: string;
}

const CATEGORIES = [
    { value: 'GENERAL', label: 'General Question' },
    { value: 'PAYMENT', label: 'Payment Issue' },
    { value: 'KYC', label: 'KYC / Verification' },
    { value: 'ORDER', label: 'Order Problem' },
    { value: 'OTHER', label: 'Other' },
];

const STATUS_COLORS: Record<string, string> = {
    OPEN: 'bg-yellow-100 text-yellow-700',
    IN_PROGRESS: 'bg-blue-100 text-blue-700',
    RESOLVED: 'bg-green-100 text-green-700',
};

export default function HelpPage() {
    const { user } = useAuth();
    const [activeFaq, setActiveFaq] = useState<number | null>(null);
    const [activeTab, setActiveTab] = useState<'help' | 'messages'>('help');
    const [messages, setMessages] = useState<SupportMessage[]>([]);
    const [showForm, setShowForm] = useState(false);
    const [form, setForm] = useState({ subject: '', message: '', category: 'GENERAL' });
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState('');
    const { t } = useLanguage();
    const { showToast } = useToast();

    const faqs = [
        {
            id: 1,
            question: 'BNPL (Buy Now Pay Later) kaise kaam karta hai?',
            answer: 'AgriConnect BNPL mein aap abhi product khareedein aur fasal ke baad pay karein. Koi interest nahi — sirf 2 installments: 40% darmiyan season (90 din) aur 60% fasal ke baad (180 din).',
        },
        {
            id: 2,
            question: 'Mera credit limit kaise barh sakta hai?',
            answer: 'Credit limit aapki zameen ki miqdaar, fasal ki history, aur payment record par mabni hai. Waqt par payment karein — credit limit khud barh jaegi.',
        },
        {
            id: 3,
            question: 'Agar payment miss ho jaaye to kya hoga?',
            answer: 'Late payment par late fee lagti hai. 15 din baad overdue ho jaata hai. 3 mahine overdue rahne par account blacklist ho sakta hai. Koi problem ho toh Admin se rabta karein.',
        },
        {
            id: 4,
            question: 'Kharab product wapas kaise karein?',
            answer: 'Delivery ke 48 ghante ke andar supplier se direct contact karein. Order details mein supplier ka phone number milega.',
        },
        {
            id: 5,
            question: 'KYC verify kyun zaruri hai?',
            answer: 'KYC se aapki identity verify hoti hai aur credit limit milti hai. CNIC front, back aur selfie upload karein — AI automatically verify karega.',
        },
    ];

    const fetchMessages = async () => {
        try {
            const data = await apiRequest<SupportMessage[]>('/farmers/support/messages');
            setMessages(data);
        } catch (e) {
            console.error('Failed to fetch messages', e);
        }
    };

    useEffect(() => {
        if (user && activeTab === 'messages') fetchMessages();
    }, [user, activeTab]);

    const handleSubmit = async () => {
        if (!form.subject.trim() || !form.message.trim()) {
            setError('Subject aur message zaruri hain.');
            return;
        }
        setSubmitting(true);
        setError('');
        try {
            await apiRequest('/farmers/support/message', {
                method: 'POST',
                body: JSON.stringify(form),
            });
            showToast('Message bhej diya gaya! Admin jald jawab dega.', 'success');
            setForm({ subject: '', message: '', category: 'GENERAL' });
            setShowForm(false);
            fetchMessages();
        } catch (e: any) {
            setError(e.message || 'Message nahi bheja ja saka.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="p-6 max-w-4xl mx-auto pb-24 lg:pb-6">

            {/* Header */}
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-2 text-charcoal dark:text-off-white">
                    {t('farmer.help.title')}
                </h1>
                <p className="text-gray-500">Koi masla ho toh hum yahan hain</p>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 mb-6">
                <button
                    onClick={() => setActiveTab('help')}
                    className={`px-5 py-2 rounded-lg font-semibold text-sm transition-colors ${activeTab === 'help' ? 'bg-indus-green text-white' : 'bg-white dark:bg-charcoal/20 text-gray-600 border border-gray-200'}`}
                >
                    Help Center
                </button>
                <button
                    onClick={() => setActiveTab('messages')}
                    className={`px-5 py-2 rounded-lg font-semibold text-sm transition-colors flex items-center gap-2 ${activeTab === 'messages' ? 'bg-indus-green text-white' : 'bg-white dark:bg-charcoal/20 text-gray-600 border border-gray-200'}`}
                >
                    <span className="material-symbols-outlined text-base">forum</span>
                    Mere Messages
                    {messages.filter(m => m.admin_reply && m.status === 'RESOLVED').length > 0 && (
                        <span className="w-5 h-5 bg-red-500 text-white rounded-full text-xs flex items-center justify-center">
                            {messages.filter(m => m.admin_reply).length}
                        </span>
                    )}
                </button>
            </div>

            {/* ── HELP TAB ── */}
            {activeTab === 'help' && (
                <>
                    {/* Contact Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                        <a href="tel:0800-12345" className="bg-white dark:bg-charcoal/20 rounded-xl p-5 border border-gray-200 dark:border-gray-700 text-center hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-indus-green/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                <span className="material-symbols-outlined text-indus-green text-2xl">call</span>
                            </div>
                            <h3 className="font-bold mb-1 text-charcoal dark:text-off-white">Call Us</h3>
                            <div className="font-semibold text-indus-green mb-1">0800-12345</div>
                            <div className="text-xs text-gray-500">Mon-Sat, 9am - 6pm</div>
                        </a>

                        <a href="mailto:support@agriconnect.pk" className="bg-white dark:bg-charcoal/20 rounded-xl p-5 border border-gray-200 dark:border-gray-700 text-center hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-trust-blue/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                <span className="material-symbols-outlined text-trust-blue text-2xl">mail</span>
                            </div>
                            <h3 className="font-bold mb-1 text-charcoal dark:text-off-white">Email Support</h3>
                            <div className="font-semibold text-trust-blue mb-1">support@agriconnect.pk</div>
                            <div className="text-xs text-gray-500">Response within 24 hours</div>
                        </a>

                        <button
                            onClick={() => setActiveTab('messages')}
                            className="bg-white dark:bg-charcoal/20 rounded-xl p-5 border border-gray-200 dark:border-gray-700 text-center hover:shadow-md transition-shadow"
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                <span className="material-symbols-outlined text-primary text-2xl">forum</span>
                            </div>
                            <h3 className="font-bold mb-1 text-charcoal dark:text-off-white">Admin Ko Message</h3>
                            <div className="font-semibold text-primary mb-1">Message Bhejein</div>
                            <div className="text-xs text-gray-500">Admin jawab dega</div>
                        </button>
                    </div>

                    {/* FAQs */}
                    <h2 className="text-xl font-bold mb-4 text-charcoal dark:text-off-white">
                        Aksar Pooche Jane Wale Sawalaat
                    </h2>
                    <div className="space-y-3">
                        {faqs.map((faq) => (
                            <div key={faq.id} className="bg-white dark:bg-charcoal/20 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                                <button
                                    onClick={() => setActiveFaq(activeFaq === faq.id ? null : faq.id)}
                                    className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                                >
                                    <span className="font-semibold text-charcoal dark:text-off-white pr-6">{faq.question}</span>
                                    <span className={`material-symbols-outlined text-gray-400 transition-transform duration-300 shrink-0 ${activeFaq === faq.id ? 'rotate-180' : ''}`}>
                                        expand_more
                                    </span>
                                </button>
                                <div className={`transition-all duration-300 overflow-hidden ${activeFaq === faq.id ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="p-5 pt-0 text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-100 dark:border-gray-700/50">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}

            {/* ── MESSAGES TAB ── */}
            {activeTab === 'messages' && (
                <div className="space-y-4">
                    {/* New Message Button */}
                    {!showForm && (
                        <button
                            onClick={() => setShowForm(true)}
                            className="w-full py-3 bg-indus-green text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-indus-green/90"
                        >
                            <span className="material-symbols-outlined">edit</span>
                            Naya Message Bhejein
                        </button>
                    )}

                    {/* Message Form */}
                    {showForm && (
                        <div className="bg-white dark:bg-charcoal/20 rounded-xl p-5 border border-gray-200 dark:border-gray-700">
                            <h3 className="font-bold text-lg mb-4">Admin Ko Message Bhejein</h3>

                            {error && <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-600 text-sm mb-4">{error}</div>}

                            <div className="space-y-3">
                                <div>
                                    <label className="block text-sm font-semibold mb-1">Category</label>
                                    <select
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indus-green focus:outline-none text-sm"
                                        value={form.category}
                                        onChange={e => setForm({ ...form, category: e.target.value })}
                                    >
                                        {CATEGORIES.map(c => <option key={c.value} value={c.value}>{c.label}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold mb-1">Subject *</label>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indus-green focus:outline-none text-sm"
                                        placeholder="Maslan: Payment issue hai"
                                        value={form.subject}
                                        onChange={e => setForm({ ...form, subject: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold mb-1">Message *</label>
                                    <textarea
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indus-green focus:outline-none text-sm resize-none"
                                        rows={4}
                                        placeholder="Apna masla detail mein likhein..."
                                        value={form.message}
                                        onChange={e => setForm({ ...form, message: e.target.value })}
                                    />
                                </div>
                                <div className="flex gap-3">
                                    <button
                                        onClick={() => { setShowForm(false); setError(''); }}
                                        className="flex-1 py-2 border border-gray-300 rounded-lg text-sm font-semibold hover:bg-gray-50"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={handleSubmit}
                                        disabled={submitting}
                                        className="flex-1 py-2 bg-indus-green text-white rounded-lg text-sm font-bold hover:bg-indus-green/90 disabled:opacity-60 flex items-center justify-center gap-2"
                                    >
                                        {submitting ? <><div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div><span>Bhej raha hai...</span></> : 'Bhejein'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Messages List */}
                    {messages.length === 0 ? (
                        <div className="text-center py-12 bg-white dark:bg-charcoal/20 rounded-xl border border-gray-200">
                            <span className="material-symbols-outlined text-5xl text-gray-300 mb-3 block">forum</span>
                            <p className="text-gray-500">Abhi tak koi message nahi</p>
                            <p className="text-xs text-gray-400 mt-1">Upar button se admin ko message bhejein</p>
                        </div>
                    ) : (
                        <div className="space-y-3">
                            {messages.map(msg => (
                                <div key={msg.id} className="bg-white dark:bg-charcoal/20 rounded-xl border border-gray-200 dark:border-gray-700 p-5">
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <h4 className="font-bold text-charcoal dark:text-off-white">{msg.subject}</h4>
                                            <p className="text-xs text-gray-400 mt-0.5">
                                                {msg.category} • {new Date(msg.created_at).toLocaleDateString('en-PK', { day: 'numeric', month: 'short', year: 'numeric' })}
                                            </p>
                                        </div>
                                        <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${STATUS_COLORS[msg.status] || 'bg-gray-100 text-gray-600'}`}>
                                            {msg.status}
                                        </span>
                                    </div>

                                    {/* Farmer's message */}
                                    <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3 mb-3 text-sm text-gray-700 dark:text-gray-300">
                                        {msg.message}
                                    </div>

                                    {/* Admin reply */}
                                    {msg.admin_reply && (
                                        <div className="bg-indus-green/10 border border-indus-green/20 rounded-lg p-3">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="material-symbols-outlined text-indus-green text-sm">admin_panel_settings</span>
                                                <span className="text-xs font-bold text-indus-green">Admin Reply</span>
                                                {msg.replied_at && (
                                                    <span className="text-xs text-gray-400">
                                                        • {new Date(msg.replied_at).toLocaleDateString('en-PK', { day: 'numeric', month: 'short' })}
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-sm text-gray-700 dark:text-gray-300">{msg.admin_reply}</p>
                                        </div>
                                    )}

                                    {!msg.admin_reply && (
                                        <p className="text-xs text-amber-600 flex items-center gap-1">
                                            <span className="material-symbols-outlined text-sm">hourglass_empty</span>
                                            Admin ka jawab intezaar mein hai...
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}