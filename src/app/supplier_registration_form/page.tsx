'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { apiRequest } from '@/lib/api';

export default function SupplierSignup() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    business_name: '',
    owner_name: '',
    cnic: '',
    phone_number: '',
    email: '',
    address: '',
    location: '', // City/District
    business_type: '',
    username: '',
    password: '',
    confirm_password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirm_password) {
      setError("Passwords do not match");
      return;
    }

    setIsLoading(true);

    try {
      await apiRequest('/suppliers/signup', {
        method: 'POST',
        body: JSON.stringify({
          business_name: formData.business_name,
          owner_name: formData.owner_name,
          cnic: formData.cnic,
          phone_number: formData.phone_number,
          email: formData.email,
          address: formData.address,
          location: formData.location,
          business_type: formData.business_type,
          username: formData.username,
          password: formData.password
        })
      });

      // Redirect to login on success
      router.push('/login?registered=true');
    } catch (err: any) {
      setError(err.message || 'Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-off-white dark:bg-background-dark py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white dark:bg-container-dark rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">

        {/* Visual Side */}
        <div className="md:w-5/12 bg-primary p-8 flex flex-col justify-between text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 0 L 100 0 L 100 80 C 50 100 20 100 0 80 Z" fill="currentColor" />
            </svg>
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-8">
              <span className="material-symbols-outlined text-3xl">storefront</span>
              <span className="text-2xl font-bold tracking-tight">AgriConnect</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">Partner With Us</h2>
            <ul className="space-y-4 opacity-90">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-yellow-300">verified</span>
                <span>Reach Thousands of Farmers</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-yellow-300">verified</span>
                <span>Guaranteed Payments</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-yellow-300">verified</span>
                <span>Manage Inventory Easily</span>
              </li>
            </ul>
          </div>

          <div className="relative z-10 mt-12">
            <p className="text-sm opacity-75">Already a partner?</p>
            <Link href="/login" className="inline-block mt-2 px-6 py-2 border-2 border-white rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
              Partner Login
            </Link>
          </div>
        </div>

        {/* Form Side */}
        <div className="md:w-7/12 p-8 lg:p-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Register Your Business</h2>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 flex items-start gap-2 rounded">
              <span className="material-symbols-outlined text-xl">error</span>
              <span className="text-sm">{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Business Info */}
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Business Information</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Business Name</label>
                  <input
                    name="business_name"
                    type="text"
                    required
                    value={formData.business_name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none bg-transparent dark:text-white"
                    placeholder="Agri Supplies Co."
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Owner Name</label>
                    <input
                      name="owner_name"
                      type="text"
                      required
                      value={formData.owner_name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none bg-transparent dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Owner CNIC</label>
                    <input
                      name="cnic"
                      type="text"
                      required
                      value={formData.cnic}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none bg-transparent dark:text-white"
                      placeholder="42201-1234567-1"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone Number</label>
                    <input
                      name="phone_number"
                      type="tel"
                      required
                      value={formData.phone_number}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none bg-transparent dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none bg-transparent dark:text-white"
                    />
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-gray-200 dark:border-gray-700" />

            {/* Location & Details */}
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Location & Type</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Address</label>
                  <input
                    name="address"
                    type="text"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none bg-transparent dark:text-white"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">City / District</label>
                    <input
                      name="location"
                      type="text"
                      required
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none bg-transparent dark:text-white"
                      placeholder="Karachi"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Business Type</label>
                    <select
                      name="business_type"
                      required
                      value={formData.business_type}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none bg-transparent dark:text-white"
                    >
                      <option value="">Select Type</option>
                      <option value="Fertilizers">Fertilizers</option>
                      <option value="Seeds">Seeds</option>
                      <option value="Machinery">Machinery</option>
                      <option value="Pesticides">Pesticides</option>
                      <option value="General Store">General Store</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-gray-200 dark:border-gray-700" />

            {/* Credentials */}
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Account Credentials</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Username</label>
                  <input
                    name="username"
                    type="text"
                    required
                    value={formData.username}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none bg-transparent dark:text-white"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Password</label>
                    <input
                      name="password"
                      type="password"
                      required
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none bg-transparent dark:text-white"
                      placeholder="••••••••"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Confirm Password</label>
                    <input
                      name="confirm_password"
                      type="password"
                      required
                      value={formData.confirm_password}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none bg-transparent dark:text-white"
                      placeholder="••••••••"
                    />
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary text-white py-3 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Register Business
                </>
              ) : (
                "Create Account"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
