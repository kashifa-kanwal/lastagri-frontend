// Core Types for AgriConnect BNPL System

export type UserRole = 'farmer' | 'supplier' | 'admin';

export type OrderStatus =
    | 'pending'
    | 'confirmed'
    | 'processing'
    | 'shipped'
    | 'delivered'
    | 'cancelled';

export type PaymentStatus =
    | 'pending'
    | 'paid'
    | 'partial'
    | 'overdue'
    | 'defaulted';

export type DocumentStatus =
    | 'pending'
    | 'approved'
    | 'rejected'
    | 'expired';

export type KYCStatus =
    | 'PENDING'
    | 'DOCUMENTS_SUBMITTED'
    | 'OCR_PROCESSING'
    | 'UNDER_REVIEW'
    | 'APPROVED'
    | 'AUTO_APPROVED'
    | 'AUTO_APPROVED_FLAGGED'
    | 'REJECTED'
    | 'REQUIRES_RESUBMISSION'
    | 'REQUIRES_MANUAL_REVIEW';

export type BlacklistCategory =
    | 'PAYMENT_DEFAULT'
    | 'FRAUD'
    | 'POLICY_VIOLATION'
    | 'KYC_FAILURE'
    | 'MANUAL_REVIEW'
    | 'AUTO_OVERDUE';

// User Types
export interface BaseUser {
    id: string;
    name: string;
    email: string;
    phone: string;
    avatar?: string;
    role: UserRole;
    createdAt: Date;
    kycStatus: KYCStatus;
    isActive: boolean;
}

export interface Farmer extends BaseUser {
    role: 'farmer';
    farmName: string;
    farmSize: number; // in acres
    location: {
        district: string;
        tehsil: string;
        village: string;
        coordinates?: { lat: number; lng: number };
    };
    crops: string[] | string;
    creditLimit: number;
    availableCredit: number;
    totalDebt: number;
    riskScore: number; // 0-100
    // Blacklist fields
    isBlacklisted?: boolean;
    blacklistReason?: string;
    blacklistCategory?: BlacklistCategory;
    blacklistExpiryDate?: string;
}

export interface Supplier extends BaseUser {
    role: 'supplier';
    businessName: string;
    businessType: string;
    location: string;
    productsCount: number;
    totalOrders: number;
    rating: number; // 0-5
    totalRevenue: number;
    // Blacklist fields
    isBlacklisted?: boolean;
    blacklistReason?: string;
    blacklistCategory?: BlacklistCategory;
    blacklistExpiryDate?: string;
}

export interface Admin extends BaseUser {
    role: 'admin';
    department: string;
    permissions: string[];
}

export type User = Farmer | Supplier | Admin;

// Product Types
export interface Product {
    id: string;
    name: string;
    nameUrdu?: string;
    description: string;
    category: ProductCategory;
    supplierId: string;
    supplierName: string;
    price: number;
    unit: string; // kg, liter, bag, etc.
    stock: number;
    images: string[];
    rating: number;
    reviewsCount: number;
    features: string[];
    isAvailable: boolean;
    createdAt: Date;
}

export type ProductCategory =
    | 'fertilizers'
    | 'seeds'
    | 'pesticides'
    | 'tools'
    | 'irrigation'
    | 'other';

// Order Types
export interface OrderItem {
    productId: string;
    productName: string;
    quantity: number;
    price: number;
    unit: string;
}

export interface Order {
    id: string;
    farmerId: string;
    farmerName: string;
    supplierId: string;
    supplierName: string;
    items: OrderItem[];
    subtotal: number;
    tax: number;
    total: number;
    status: OrderStatus;
    paymentMethod: 'bnpl' | 'cash' | 'bank_transfer';
    paymentStatus: PaymentStatus;
    deliveryAddress: string;
    orderDate: Date;
    deliveryDate?: Date;
    notes?: string;
}

// Payment Types
export interface InstallmentPlan {
    id: string;
    orderId: string;
    totalAmount: number;
    installments: Installment[];
    startDate: Date;
    endDate: Date;
    interestRate: number;
    status: 'active' | 'completed' | 'defaulted';
}

export interface Installment {
    id: string;
    amount: number;
    dueDate: Date;
    paidDate?: Date;
    status: PaymentStatus;
    lateFee?: number;
}

export interface Transaction {
    id: string;
    userId: string;
    type: 'credit' | 'debit';
    amount: number;
    description: string;
    category: 'order' | 'payment' | 'refund' | 'fee' | 'adjustment';
    date: Date;
    balance: number;
    referenceId?: string;
}

// Document Types
export interface Document {
    id: string;
    userId: string;
    type: 'cnic' | 'business_license' | 'tax_certificate' | 'land_ownership' | 'other';
    name: string;
    url: string;
    uploadDate: Date;
    status: DocumentStatus;
    reviewedBy?: string;
    reviewedDate?: Date;
    rejectionReason?: string;
}

// Notification Types
export interface Notification {
    id: string;
    userId: string;
    title: string;
    message: string;
    type: 'info' | 'success' | 'warning' | 'error';
    isRead: boolean;
    createdAt: Date;
    link?: string;
}

// Weather Types
export interface WeatherData {
    district: string;
    date: Date;
    temperature: {
        current: number;
        min: number;
        max: number;
    };
    humidity: number;
    rainfall: number;
    windSpeed: number;
    condition: 'sunny' | 'cloudy' | 'rainy' | 'stormy';
    forecast: DailyForecast[];
}

export interface DailyForecast {
    date: Date;
    temperatureMin: number;
    temperatureMax: number;
    condition: string;
    rainfall: number;
}

// Analytics Types
export interface SalesMetrics {
    period: string;
    totalSales: number;
    totalOrders: number;
    averageOrderValue: number;
    growth: number; // percentage
}

export interface ChartDataPoint {
    label: string;
    value: number;
    color?: string;
}

// Cart Types
export interface CartItem {
    product: Product;
    quantity: number;
}

export interface Cart {
    items: CartItem[];
    subtotal: number;
    tax: number;
    total: number;
}
