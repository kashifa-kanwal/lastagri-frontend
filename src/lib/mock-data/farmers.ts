import { Farmer } from '@/types';

const firstNames = ['Ahmad', 'Muhammad', 'Ali', 'Hassan', 'Hussain', 'Usman', 'Omar', 'Bilal', 'Tariq', 'Rashid'];
const lastNames = ['Khan', 'Ahmed', 'Ali', 'Shah', 'Malik', 'Hussain', 'Akbar', 'Raza', 'Iqbal', 'Abbas'];
const districts = ['Lahore', 'Faisalabad', 'Multan', 'Sahiwal', 'Gujranwala', 'Sialkot', 'Bahawalpur'];
const crops = ['Wheat', 'Rice', 'Cotton', 'Sugarcane', 'Maize', 'Vegetables', 'Fruits'];

export function generateFarmer(id?: string): Farmer {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const name = `${firstName} ${lastName}`;
    const district = districts[Math.floor(Math.random() * districts.length)];

    const creditLimit = Math.floor(Math.random() * 150000) + 50000; // 50k-200k
    const usedCredit = Math.floor(Math.random() * creditLimit * 0.7);
    const availableCredit = creditLimit - usedCredit;

    return {
        id: id || `farmer_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        name,
        email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`,
        phone: `+92-3${Math.floor(Math.random() * 900000000) + 100000000}`,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`,
        role: 'farmer',
        farmName: `${lastName} Farms`,
        farmSize: Math.floor(Math.random() * 50) + 5, // 5-55 acres
        location: {
            district,
            tehsil: `${district} Tehsil`,
            village: `Village ${Math.floor(Math.random() * 100)}`,
        },
        crops: crops.slice(0, Math.floor(Math.random() * 3) + 2),
        creditLimit,
        availableCredit,
        totalDebt: usedCredit,
        riskScore: Math.floor(Math.random() * 30) + 70, // 70-100 (good scores)
        createdAt: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000),
        kycStatus: ['approved', 'under_review', 'approved', 'approved'][Math.floor(Math.random() * 4)] as any,
        isActive: Math.random() > 0.1, // 90% active
    };
}

export function generateFarmers(count: number): Farmer[] {
    return Array.from({ length: count }, (_, i) => generateFarmer(`farmer_${i + 1}`));
}

export const mockFarmers = [
    {
        id: 'farmer_demo_1',
        name: 'Ahmad Khan',
        email: 'ahmad.khan@example.com',
        phone: '+92-300-1234567',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmad%20Khan',
        role: 'farmer' as const,
        farmName: 'Khan Farms',
        farmSize: 25,
        location: {
            district: 'Rahim Yar Khan',
            tehsil: 'Khanpur',
            village: 'Chak 42',
        },
        crops: ['Wheat', 'Cotton', 'Sugarcane'],
        creditLimit: 100000,
        availableCredit: 75000,
        totalDebt: 25000,
        riskScore: 85,
        createdAt: new Date('2023-01-15'),
        kycStatus: 'approved' as const,
        isActive: true,
    },
    ...generateFarmers(49)
];

export function getFarmerById(id: string): Farmer | undefined {
    return mockFarmers.find(f => f.id === id);
}
