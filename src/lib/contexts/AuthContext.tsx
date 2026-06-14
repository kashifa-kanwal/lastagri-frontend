'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, UserRole, Farmer, Supplier, Admin } from '@/types';
import { apiRequest } from '@/lib/api';

interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    login: (email: string, password: string, role: UserRole) => Promise<boolean>;
    logout: () => void;
    isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const clearSession = () => {
        setUser(null);
        localStorage.removeItem('agriconnect_user');
        localStorage.removeItem('agriconnect_token');
    };

    useEffect(() => {
        const initAuth = async () => {
            const token = localStorage.getItem('agriconnect_token');
            const storedUser = localStorage.getItem('agriconnect_user');

            if (token && storedUser) {
                // Verify token by fetching user profile
                try {
                    const userRole = JSON.parse(storedUser).role;
                    await fetchUserProfile(userRole);
                } catch (e) {
                    console.error("[AUTH] Failed to restore session, clearing old token:", e);
                    clearSession();
                }
            }
            setIsLoading(false);
        };
        initAuth();
    }, []);

    const fetchUserProfile = async (role: UserRole) => {
        let endpoint = '';
        if (role === 'farmer') endpoint = '/farmers/me';
        else if (role === 'supplier') endpoint = '/suppliers/me';
        else if (role === 'admin') endpoint = '/admin/me'; // Not implemented yet

        if (!endpoint) return;

        const data = await apiRequest<any>(endpoint);
        const mappedUser = mapBackendUserToFrontend(data, role);
        setUser(mappedUser);
        localStorage.setItem('agriconnect_user', JSON.stringify(mappedUser));
    };

    const login = async (username: string, password: string, role: UserRole): Promise<boolean> => {
        setIsLoading(true);
        try {
            let loginEndpoint = '';
            if (role === 'farmer') loginEndpoint = '/farmers/login';
            else if (role === 'supplier') loginEndpoint = '/suppliers/login';
            else if (role === 'admin') loginEndpoint = '/admin/login';

            console.log(`[AUTH] Attempting login for role: ${role} at endpoint: ${loginEndpoint}`);

            const response = await apiRequest<{ access_token: string; role: string; username: string }>(loginEndpoint, {
                method: 'POST',
                body: JSON.stringify({ username, password }),
            });

            console.log('[AUTH] Login response received:', { hasToken: !!response.access_token, role: response.role });

            if (response.access_token) {
                localStorage.setItem('agriconnect_token', response.access_token);

                // For admin, create a basic user object instead of fetching profile
                if (role === 'admin') {
                    const adminUser: Admin = {
                        id: '1',
                        name: username,
                        email: 'admin@agriconnect.com',
                        phone: '',
                        role: 'admin',
                        department: 'Administration',
                        permissions: ['all'],
                        createdAt: new Date(),
                        kycStatus: 'APPROVED',
                        isActive: true,
                    };
                    setUser(adminUser);
                    localStorage.setItem('agriconnect_user', JSON.stringify(adminUser));
                    console.log('[AUTH] Admin user set successfully');
                } else {
                    await fetchUserProfile(role);
                }

                setIsLoading(false);
                return true;
            }

            setIsLoading(false);
            return false;
        } catch (error) {
            console.error('[AUTH] Login failed with error:', error);
            setIsLoading(false);
            return false;
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('agriconnect_user');
        localStorage.removeItem('agriconnect_token');
    };

    return (
        <AuthContext.Provider value={{
            user,
            isAuthenticated: !!user,
            login,
            logout,
            isLoading,
        }}>
            {children}
        </AuthContext.Provider>
    );
}

// Helper to map backend snake_case to frontend camelCase
function mapBackendUserToFrontend(data: any, role: UserRole): User {
    const base = {
        id: data.id.toString(),
        name: data.name || data.business_name || data.username,
        email: data.email || '',
        phone: data.phone_number || '',
        role: role,
        createdAt: new Date(), // Backend doesn't send this yet?
        kycStatus: data.kyc_status || 'PENDING',
        isActive: true,
    };

    if (role === 'farmer') {
        return {
            ...base,
            role: 'farmer',
            farmName: data.farm_name || '',
            farmSize: data.land_holding || data.farm_size || 0,
            location: {
                district: data.district || '',
                tehsil: data.tehsil || '',
                village: data.village || '',
            },
            crops: typeof data.crops === 'string' ? data.crops.split(',').map((c: string) => c.trim()) : [],
            creditLimit: data.credit_limit || 0,
            availableCredit: data.credit_limit || 0, // Assuming available = limit for now
            totalDebt: 0, // Not in profile response
            riskScore: 0,
        } as Farmer;
    } else if (role === 'supplier') {
        return {
            ...base,
            role: 'supplier',
            businessName: data.business_name || '',
            businessType: data.business_type || '',
            location: data.location || '',
            productsCount: 0,
            totalOrders: 0,
            rating: data.rating || 0,
            totalRevenue: 0,
        } as Supplier;
    }

    return base as Admin; // Fallback
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
