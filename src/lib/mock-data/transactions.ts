import { Transaction } from '@/types';

const descriptions = {
    order: ['Order Payment', 'Product Purchase', 'BNPL Order'],
    payment: ['Installment Payment', 'Full Payment', 'Partial Payment'],
    refund: ['Order Refund', 'Cancellation Refund'],
    fee: ['Late Payment Fee', 'Processing Fee', 'Service Charge'],
    adjustment: ['Credit Adjustment', 'Balance Correction'],
};

export function generateTransaction(userId: string, initialBalance: number = 0): Transaction {
    const categories = ['order', 'payment', 'refund', 'fee', 'adjustment'] as const;
    const category = categories[Math.floor(Math.random() * categories.length)];

    const type = ['order', 'fee'].includes(category) ? 'debit' : 'credit';
    const amount = Math.floor(Math.random() * 50000) + 1000;

    const categoryDescriptions = descriptions[category];
    const description = categoryDescriptions[Math.floor(Math.random() * categoryDescriptions.length)];

    const balance = type === 'debit' ? initialBalance - amount : initialBalance + amount;

    return {
        id: `txn_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        userId,
        type,
        amount,
        description,
        category,
        date: new Date(Date.now() - Math.random() * 60 * 24 * 60 * 60 * 1000), // Last 60 days
        balance,
        referenceId: Math.random() > 0.5 ? `ref_${Math.random().toString(36).substr(2, 9)}` : undefined,
    };
}

export function generateTransactions(userId: string, count: number): Transaction[] {
    const transactions: Transaction[] = [];
    let balance = Math.floor(Math.random() * 100000) + 50000; // Starting balance

    for (let i = 0; i < count; i++) {
        const transaction = generateTransaction(userId, balance);
        balance = transaction.balance;
        transactions.push(transaction);
    }

    // Sort by date descending
    return transactions.sort((a, b) => b.date.getTime() - a.date.getTime());
}
