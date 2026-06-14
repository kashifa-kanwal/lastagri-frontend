'use client';

import { useState, useEffect } from 'react';
import { apiRequest } from '@/lib/api';
import { useToast } from '@/lib/contexts/ToastContext';

interface SupportMessage {
    id: number;
    farmer_id: number;
    subject: string;
    message: string;
    category: string;
    status: string;
    admin_reply: string | null;
    replied_at: string | null;
    created_at: string;
}

const STATUS_COLORS: Record<string, string> = {
    OPEN: 'bg-yellow-100 text-yellow-700',
    IN_PROGRESS: 'bg-blue-100 text-blue-700',
    RESOLVED: 'bg-green-100 text-green-700',
};

const CATEGORY_ICONS: Record<string, string> = {
    PAYMENT: 'payments',
    KYC: 'badge',
    ORDER: 'shopping_bag',
    GENERAL: 'help',
    OTHER: 'more_horiz',
};

export default function AdminMessagesPage() {
    const [messages, setMessages] = useState<SupportMessage[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [filterStatus, setFilterStatus] = useState('all');
    const [activeMsg, setActiveMsg] = useState<SupportMessage | null>(null);
    const [reply, setReply] = useState('');
    const [replyStatus, setReplyStatus] = useState('RESOLVED');
    const [submitting, setSubmitting] = useState(false);
    const { showToast } = useToast();

    const fetchMessages = async () => {
        try {
            const url = filterStatus === 'all' ? '/admin/support/messages' : `/admin/support/messages?status=${filterStatus}`;
            const data = await apiRequest<SupportMessage[]>(url);
            setMessages(data);
        } catch (e) {
            console.error('Failed to fetch messages', e);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => { fetchMessages(); }, [filterStatus]);

    const handleReply = async () => {
        if (!reply.trim() || !activeMsg) return;
        setSubmitting(true);
        try {
            await apiRequest(`/admin/support/messages/${activeMsg.id}/reply`, {
                method: 'PUT',
                body: JSON.stringify({ reply, status: replyStatus }),
            });
            showToast('Reply bhej di!', 'success');
            setReply('');
            setActiveMsg(null);
            fetchMessages();
        } catch (e) {
            console.error('Reply failed', e);
        } finally {
            setSubmitting(false);
        }
    };

    const openCount = messages.filter(m => m.status === 'OPEN').length;

    if (isLoading) {
        return <div className="flex justify-center items-center min-h-screen"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-trust-blue"></div></div>;
    }

    return (
        <div className="p-6 max-w-5xl mx-auto pb-24 lg:pb-6">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-3xl font-bold text-charcoal dark:text-off-white mb-1">Support Messages</h1>
                    <p className="text-gray-500 text-sm">Farmers ke messages aur support requests</p>
                </div>
                {openCount > 0 && (
                    <div className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-lg font-semibold text-sm flex items-center gap-2">
                        <span className="material-symbols-outlined text-base">mark_unread_chat_alt</span>
                        {openCount} Open
                    </div>
                )}
            </div>


            {/* Filter */}
            <div className="flex gap-2 mb-6 overflow-x-auto">
                {['all', 'OPEN', 'IN_PROGRESS', 'RESOLVED'].map(s => (
                    <button
                        key={s}
                        onClick={() => setFilterStatus(s)}
                        className={`px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-colors ${filterStatus === s ? 'bg-trust-blue text-white' : 'bg-white dark:bg-charcoal/20 text-gray-600 border border-gray-200'}`}
                    >
                        {s === 'all' ? 'All Messages' : s.replace('_', ' ')}
                    </button>
                ))}
            </div>

            {/* Messages */}
            {messages.length === 0 ? (
                <div className="bg-white dark:bg-charcoal/20 rounded-xl p-12 text-center border border-gray-200">
                    <span className="material-symbols-outlined text-5xl text-gray-300 mb-3 block">forum</span>
                    <p className="text-gray-500">Koi message nahi</p>
                </div>
            ) : (
                <div className="space-y-3">
                    {messages.map(msg => (
                        <div key={msg.id} className="bg-white dark:bg-charcoal/20 rounded-xl border border-gray-200 dark:border-gray-700 p-5">
                            <div className="flex justify-between items-start mb-3">
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center shrink-0">
                                        <span className="material-symbols-outlined text-gray-500 text-lg">
                                            {CATEGORY_ICONS[msg.category] || 'help'}
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-charcoal dark:text-off-white">{msg.subject}</h4>
                                        <p className="text-xs text-gray-400 mt-0.5">
                                            Farmer #{msg.farmer_id} • {msg.category} •{' '}
                                            {new Date(msg.created_at).toLocaleDateString('en-PK', { day: 'numeric', month: 'short', year: 'numeric' })}
                                        </p>
                                    </div>
                                </div>
                                <span className={`px-2 py-0.5 rounded-full text-xs font-semibold shrink-0 ${STATUS_COLORS[msg.status] || 'bg-gray-100 text-gray-600'}`}>
                                    {msg.status}
                                </span>
                            </div>

                            {/* Message */}
                            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3 mb-3 text-sm text-gray-700 dark:text-gray-300">
                                {msg.message}
                            </div>

                            {/* Existing Reply */}
                            {msg.admin_reply && (
                                <div className="bg-trust-blue/10 border border-trust-blue/20 rounded-lg p-3 mb-3">
                                    <div className="flex items-center gap-1 mb-1">
                                        <span className="material-symbols-outlined text-trust-blue text-sm">admin_panel_settings</span>
                                        <span className="text-xs font-bold text-trust-blue">Aapki Reply</span>
                                    </div>
                                    <p className="text-sm text-gray-700 dark:text-gray-300">{msg.admin_reply}</p>
                                </div>
                            )}

                            {/* Reply Button */}
                            {msg.status !== 'RESOLVED' && (
                                <button
                                    onClick={() => { setActiveMsg(msg); setReply(''); }}
                                    className="text-sm text-trust-blue font-semibold flex items-center gap-1 hover:underline"
                                >
                                    <span className="material-symbols-outlined text-base">reply</span>
                                    {msg.admin_reply ? 'Update Reply' : 'Reply Karein'}
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            )}

            {/* Reply Modal */}
            {activeMsg && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <div className="bg-white dark:bg-charcoal rounded-2xl shadow-2xl w-full max-w-lg">
                        <div className="flex justify-between items-center p-5 border-b border-gray-200">
                            <h3 className="font-bold text-lg">Reply: {activeMsg.subject}</h3>
                            <button onClick={() => setActiveMsg(null)} className="p-1.5 rounded-full hover:bg-gray-100">
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>
                        <div className="p-5 space-y-4">
                            {/* Original message */}
                            <div className="bg-gray-50 rounded-lg p-3 text-sm text-gray-600">
                                <p className="font-semibold text-xs text-gray-400 mb-1">Farmer Ka Message:</p>
                                {activeMsg.message}
                            </div>

                            {/* Reply input */}
                            <div>
                                <label className="block text-sm font-semibold mb-1">Aapka Jawab *</label>
                                <textarea
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-trust-blue focus:outline-none text-sm resize-none"
                                    rows={4}
                                    placeholder="Farmer ko jawab likhein..."
                                    value={reply}
                                    onChange={e => setReply(e.target.value)}
                                />
                            </div>

                            {/* Status */}
                            <div>
                                <label className="block text-sm font-semibold mb-1">Status Update</label>
                                <select
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-trust-blue focus:outline-none text-sm"
                                    value={replyStatus}
                                    onChange={e => setReplyStatus(e.target.value)}
                                >
                                    <option value="IN_PROGRESS">In Progress</option>
                                    <option value="RESOLVED">Resolved</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex gap-3 p-5 border-t border-gray-200">
                            <button onClick={() => setActiveMsg(null)} className="flex-1 py-2 border border-gray-300 rounded-lg text-sm font-semibold">Cancel</button>
                            <button
                                onClick={handleReply}
                                disabled={submitting || !reply.trim()}
                                className="flex-1 py-2 bg-trust-blue text-white rounded-lg text-sm font-bold hover:bg-trust-blue/90 disabled:opacity-60 flex items-center justify-center gap-2"
                            >
                                {submitting ? <><div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div><span>Bhej raha hai...</span></> : 'Reply Bhejein'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}