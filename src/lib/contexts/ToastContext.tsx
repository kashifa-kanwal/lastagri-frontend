'use client';

import React, { createContext, useContext, useState, useCallback, useRef, useEffect } from 'react';

type ToastType = 'success' | 'error' | 'warning' | 'info';

interface Toast {
    id: number;
    message: string;
    type: ToastType;
    exiting?: boolean;
}

interface ToastContextType {
    showToast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function useToast() {
    const context = useContext(ToastContext);
    if (!context) throw new Error('useToast must be used within ToastProvider');
    return context;
}

const ICONS: Record<ToastType, string> = {
    success: 'check_circle',
    error: 'error',
    warning: 'warning',
    info: 'info',
};

const COLORS: Record<ToastType, { bg: string; border: string; icon: string; text: string }> = {
    success: {
        bg: 'bg-emerald-50 dark:bg-emerald-950/80',
        border: 'border-emerald-200 dark:border-emerald-800',
        icon: 'text-emerald-500',
        text: 'text-emerald-800 dark:text-emerald-200',
    },
    error: {
        bg: 'bg-red-50 dark:bg-red-950/80',
        border: 'border-red-200 dark:border-red-800',
        icon: 'text-red-500',
        text: 'text-red-800 dark:text-red-200',
    },
    warning: {
        bg: 'bg-amber-50 dark:bg-amber-950/80',
        border: 'border-amber-200 dark:border-amber-800',
        icon: 'text-amber-500',
        text: 'text-amber-800 dark:text-amber-200',
    },
    info: {
        bg: 'bg-blue-50 dark:bg-blue-950/80',
        border: 'border-blue-200 dark:border-blue-800',
        icon: 'text-blue-500',
        text: 'text-blue-800 dark:text-blue-200',
    },
};

function ToastItem({ toast, onDismiss }: { toast: Toast; onDismiss: (id: number) => void }) {
    const c = COLORS[toast.type];

    return (
        <div
            className={`
                flex items-start gap-3 px-4 py-3 rounded-xl border shadow-lg backdrop-blur-sm
                max-w-sm w-full pointer-events-auto
                ${c.bg} ${c.border}
                ${toast.exiting ? 'animate-toast-out' : 'animate-toast-in'}
            `}
            role="alert"
        >
            <span className={`material-symbols-outlined text-xl mt-0.5 shrink-0 ${c.icon}`}>
                {ICONS[toast.type]}
            </span>
            <p className={`text-sm font-medium flex-1 leading-snug ${c.text}`}>
                {toast.message}
            </p>
            <button
                onClick={() => onDismiss(toast.id)}
                className={`shrink-0 p-0.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors ${c.text}`}
            >
                <span className="material-symbols-outlined text-base">close</span>
            </button>
        </div>
    );
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
    const [toasts, setToasts] = useState<Toast[]>([]);
    const idRef = useRef(0);

    const dismiss = useCallback((id: number) => {
        setToasts(prev => prev.map(t => t.id === id ? { ...t, exiting: true } : t));
        setTimeout(() => {
            setToasts(prev => prev.filter(t => t.id !== id));
        }, 300);
    }, []);

    const showToast = useCallback((message: string, type: ToastType = 'success') => {
        const id = ++idRef.current;
        setToasts(prev => [...prev, { id, message, type }]);
        setTimeout(() => dismiss(id), 4000);
    }, [dismiss]);

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            {/* Toast Container — fixed bottom-right */}
            <div className="fixed bottom-6 right-6 z-[9999] flex flex-col-reverse gap-3 pointer-events-none">
                {toasts.map(toast => (
                    <ToastItem key={toast.id} toast={toast} onDismiss={dismiss} />
                ))}
            </div>
        </ToastContext.Provider>
    );
}
