import { Supplier } from '@/types';

const businessNames = [
    'Green Valley Supplies',
    'Faisalabad Agro Store',
    'Punjab Seeds Co.',
    'Modern Fertilizers Ltd',
    'AgriTools Pakistan',
    'Farmers Choice',
    'Harvest Equipment',
    'Quality Seeds & More',
    'AgroMax Solutions',
    'FarmCare Suppliers'
];

const businessTypes = ['Seeds Supplier', 'Fertilizer Distributor', 'Agricultural Tools', 'General Supplies'];
const locations = ['Lahore', 'Faisalabad', 'Multan', 'Sahiwal', 'Gujranwala', 'Sialkot'];

export function generateSupplier(id?: string): Supplier {
    const businessName = businessNames[Math.floor(Math.random() * businessNames.length)];
    const ownerFirstName = ['Ahmed', 'Tariq', 'Zahid', 'Rashid', 'Imran'][Math.floor(Math.random() * 5)];
    const ownerLastName = ['Khan', 'Malik', 'Shah', 'Abbas', 'Iqbal'][Math.floor(Math.random() * 5)];

    return {
        id: id || `supplier_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        name: `${ownerFirstName} ${ownerLastName}`,
        email: `${businessName.toLowerCase().replace(/\s+/g, '')}@example.com`,
        phone: `+92-42-${Math.floor(Math.random() * 9000000) + 1000000}`,
        avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${businessName}`,
        role: 'supplier',
        businessName,
        businessType: businessTypes[Math.floor(Math.random() * businessTypes.length)],
        location: locations[Math.floor(Math.random() * locations.length)],
        productsCount: Math.floor(Math.random() * 100) + 10,
        totalOrders: Math.floor(Math.random() * 500) + 50,
        rating: parseFloat((Math.random() * 2 + 3).toFixed(1)), // 3.0-5.0
        totalRevenue: Math.floor(Math.random() * 5000000) + 500000,
        createdAt: new Date(Date.now() - Math.random() * 730 * 24 * 60 * 60 * 1000),
        kycStatus: ['approved', 'approved', 'approved', 'under_review'][Math.floor(Math.random() * 4)] as any,
        isActive: Math.random() > 0.05, // 95% active
    };
}

export function generateSuppliers(count: number): Supplier[] {
    return Array.from({ length: count }, (_, i) => generateSupplier(`supplier_${i + 1}`));
}

export const mockSuppliers = [
    {
        id: 'supplier_demo_1',
        name: 'Tariq Mehmood',
        email: 'greenvalleysupplies@example.com',
        phone: '+92-42-111222333',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Green%20Valley',
        role: 'supplier' as const,
        businessName: 'Green Valley Supplies',
        businessType: 'General Supplies',
        location: 'Lahore',
        productsCount: 45,
        totalOrders: 120,
        rating: 4.8,
        totalRevenue: 2500000,
        createdAt: new Date('2023-02-20'),
        kycStatus: 'approved' as const,
        isActive: true,
    },
    ...generateSuppliers(19)
];

export function getSupplierById(id: string): Supplier | undefined {
    return mockSuppliers.find(s => s.id === id);
}
