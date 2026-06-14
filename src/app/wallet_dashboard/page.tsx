'use client';

import React, { useEffect, useState } from 'react';
import { useAuth } from '@/lib/contexts/AuthContext';
import { apiRequest } from '@/lib/api';
import { useRouter } from 'next/navigation';
import { Farmer } from '@/types';

interface Transaction {
  id: number;
  amount: number;
  type: string; // 'credit' or 'debit'
  category: string;
  timestamp: string;
  description: string;
}

interface Installment {
  id: number;
  amount: number;
  due_date: string;
  status: string;
  order_id: number;
}

interface CreditLimit {
  current_credit_limit: number;
  original_credit_limit: number;
}

export default function Page() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [installments, setInstallments] = useState<Installment[]>([]);
  const [creditData, setCreditData] = useState<CreditLimit | null>(null);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isLoading, isAuthenticated, router]);

  useEffect(() => {
    const fetchData = async () => {
      if (user?.role === 'farmer') {
        try {
          const [txData, instData, creditLimitData] = await Promise.all([
            apiRequest<Transaction[]>('/farmers/transactions', { method: 'GET' }),
            apiRequest<Installment[]>('/farmers/installments', { method: 'GET' }),
            apiRequest<CreditLimit>('/farmers/credit-limit', { method: 'GET' })
          ]);
          setTransactions(txData);
          setInstallments(instData);
          setCreditData(creditLimitData);
        } catch (error) {
          console.error("Failed to fetch wallet data", error);
        } finally {
          setLoadingData(false);
        }
      }
    };

    if (isAuthenticated && user?.role === 'farmer') {
      fetchData();
    }
  }, [isAuthenticated, user]);

  if (isLoading || loadingData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-off-white dark:bg-background-dark">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-trust-blue"></div>
      </div>
    );
  }

  const farmer = user as Farmer;
  const currentBalance = creditData?.current_credit_limit || 0;
  const outstandingDebt = (creditData?.original_credit_limit || 0) - currentBalance;

  // Calculate totals from installments
  const paidThisMonth = installments
    .filter(i => i.status === 'PAID') // Assuming status
    .reduce((sum, i) => sum + i.amount, 0); // Simplified logic

  const upcomingInstallments = installments.filter(i => i.status === 'PENDING');

  return (
    <>
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <div className="flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col w-full max-w-6xl flex-1 px-4 md:px-8">
              {/* Top Nav Bar */}
              <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 dark:border-gray-700 px-4 md:px-10 py-3 mb-6 bg-white dark:bg-neutral-dark rounded-xl shadow-sm">
                <div className="flex items-center gap-4 text-neutral-dark dark:text-white">
                  <div className="size-6 text-trust-blue">
                    <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z"></path>
                    </svg>
                  </div>
                  <h2 className="text-neutral-dark dark:text-white text-xl font-bold tracking-tight">AgriConnect</h2>
                </div>
                <div className="flex items-center gap-4">
                  <button className="flex cursor-pointer items-center justify-center rounded-full h-10 w-10 bg-gray-100 dark:bg-gray-700 text-neutral-dark dark:text-white">
                    <span className="material-symbols-outlined">notifications</span>
                  </button>
                  <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 flex items-center justify-center bg-trust-blue/10 text-trust-blue font-bold">
                    {farmer.name?.charAt(0).toUpperCase()}
                  </div>
                </div>
              </header>
              <main className="flex flex-col gap-8">
                {/* Page Heading and Balance Card */}
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-1 w-full">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="material-symbols-outlined text-4xl text-trust-blue">account_balance_wallet</span>
                      <p className="text-neutral-dark dark:text-neutral-light text-4xl font-black font-urdu tracking-wide">میری والٹ</p>
                    </div>
                    <div className="bg-trust-blue text-white rounded-xl p-6 shadow-lg w-full">
                      <p className="text-lg font-normal opacity-80 mb-2">Available Credit Limit</p>
                      <p className="text-5xl font-bold tracking-tight">PKR {currentBalance.toLocaleString()}</p>
                    </div>
                  </div>
                  <div className="w-full md:w-auto flex flex-col items-stretch gap-4">
                    <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-eco-green px-8 py-4 text-lg font-bold text-white shadow-md hover:bg-eco-green/90 transition-colors">
                      <span className="material-symbols-outlined">add</span>
                      <span className="font-urdu text-xl">Top Up / Repay</span>
                    </button>
                  </div>
                </div>
                {/* Transaction Summary */}
                <div>
                  <h2 className="text-neutral-dark dark:text-neutral-light text-2xl font-bold px-4 pb-3 pt-5 font-urdu">Financial Overview</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="flex flex-col gap-2 rounded-xl p-6 border border-gray-200 dark:border-gray-700 bg-white dark:bg-neutral-dark shadow-sm">
                      <p className="text-neutral-dark dark:text-gray-300 text-base font-medium font-urdu">کل قرض</p>
                      <p className="text-neutral-dark dark:text-white text-3xl font-bold text-alert-red">PKR {outstandingDebt.toLocaleString()}</p>
                    </div>
                    <div className="flex flex-col gap-2 rounded-xl p-6 border border-gray-200 dark:border-gray-700 bg-white dark:bg-neutral-dark shadow-sm">
                      <p className="text-neutral-dark dark:text-gray-300 text-base font-medium font-urdu">اصل حد</p>
                      <p className="text-neutral-dark dark:text-white text-3xl font-bold">PKR {(creditData?.original_credit_limit || 0).toLocaleString()}</p>
                    </div>
                  </div>
                </div>
                {/* Upcoming Payments */}
                <div>
                  <h2 className="text-neutral-dark dark:text-neutral-light text-2xl font-bold px-4 pb-3 pt-5 font-urdu">Upcoming Installments</h2>
                  <div className="flex flex-col gap-3">
                    {upcomingInstallments.length > 0 ? upcomingInstallments.map((installment) => (
                      <div key={installment.id} className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 bg-white dark:bg-neutral-dark rounded-lg border-l-4 border-harvest-gold shadow-sm">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full text-right">
                          <div className="flex flex-col"><span className="text-sm text-gray-500 dark:text-gray-400">Order Ref</span><span className="font-semibold text-neutral-dark dark:text-white">Order #{installment.order_id}</span></div>
                          <div className="flex flex-col"><span className="text-sm text-gray-500 dark:text-gray-400">Installment ID</span><span className="font-semibold text-neutral-dark dark:text-white">#{installment.id}</span></div>
                          <div className="flex flex-col"><span className="text-sm text-gray-500 dark:text-gray-400">Amount</span><span className="font-bold text-harvest-gold">PKR {installment.amount.toLocaleString()}</span></div>
                          <div className="flex flex-col"><span className="text-sm text-gray-500 dark:text-gray-400">Due Date</span><span className="font-semibold text-neutral-dark dark:text-white">{new Date(installment.due_date).toLocaleDateString()}</span></div>
                        </div>
                        <button className="w-full md:w-auto shrink-0 flex items-center justify-center gap-2 rounded-lg bg-trust-blue px-5 py-2.5 text-sm font-bold text-white hover:bg-trust-blue/90 transition-colors">
                          <span className="font-urdu text-base">ابھی ادا کریں</span>
                        </button>
                      </div>
                    )) : (
                      <div className="p-8 text-center bg-white dark:bg-neutral-dark rounded-xl text-gray-500">
                        No upcoming installments.
                      </div>
                    )}

                  </div>
                </div>
                {/* Past Transactions */}
                <div className="bg-white dark:bg-neutral-dark rounded-xl shadow-sm overflow-hidden mt-8">
                  <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <h2 className="text-neutral-dark dark:text-neutral-light text-2xl font-bold font-urdu">Recent Transactions</h2>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-right text-gray-500 dark:text-gray-400">
                      <thead className="text-xs text-gray-700 dark:text-gray-300 uppercase bg-gray-50 dark:bg-gray-800">
                        <tr>
                          <th className="px-6 py-3" scope="col">Date</th>
                          <th className="px-6 py-3" scope="col">Description</th>
                          <th className="px-6 py-3" scope="col">Type</th>
                          <th className="px-6 py-3" scope="col">Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        {transactions.length > 0 ? transactions.map((tx) => (
                          <tr key={tx.id} className="bg-white dark:bg-neutral-dark border-b dark:border-gray-700">
                            <td className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">{new Date(tx.timestamp).toLocaleDateString()}</td>
                            <td className="px-6 py-4">{tx.description || tx.category}</td>
                            <td className={`px-6 py-4 font-semibold ${tx.type === 'credit' ? 'text-eco-green' : 'text-alert-red'}`}>
                              {tx.type === 'credit' ? 'Credit (Deposit)' : 'Debit (Payment/Order)'}
                            </td>
                            <td className="px-6 py-4">PKR {tx.amount.toLocaleString()}</td>
                          </tr>
                        )) : (
                          <tr>
                            <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                              No transactions found.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
