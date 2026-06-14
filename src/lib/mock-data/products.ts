import { Product, ProductCategory } from '@/types';
import { mockSuppliers } from './suppliers';

const productsByCategory = {
    fertilizers: [
        { 
            name: 'Urea Fertilizer', 
            nameUrdu: 'یوریا کھاد', 
            unit: '50kg bag',
            image: 'https://irfarm.com/cdn/shop/files/SonaUrea50kgFFCNitrogen46_FaujiFertilizer.webp?v=1768899164'
        },
        { 
            name: 'DAP Fertilizer', 
            nameUrdu: 'ڈی اے پی کھاد', 
            unit: '50kg bag',
            image: 'https://irfarm.com/cdn/shop/files/Sona_DAP_Fertilizer.webp?v=1765093624'
        },
        { 
            name: 'NPK Complex', 
            nameUrdu: 'این پی کے کمپلیکس', 
            unit: '25kg bag',
            image: 'https://5.imimg.com/data5/SELLER/Default/2023/2/287699119/ZN/YH/XT/7846690/npk-fertilizer-500x500.jpg'
        },
        { 
            name: 'Organic Compost', 
            nameUrdu: 'نامیاتی کھاد', 
            unit: '50kg bag',
            image: 'https://5.imimg.com/data5/SELLER/Default/2021/8/YI/TW/QE/6391181/organic-compost-500x500.jpg'
        },
        { 
            name: 'Calcium Nitrate', 
            nameUrdu: 'کیلشیم نائٹریٹ', 
            unit: '25kg bag',
            image: 'https://5.imimg.com/data5/SELLER/Default/2023/1/YH/ZN/XT/7846690/calcium-nitrate-fertilizer-500x500.jpg'
        },
    ],
    seeds: [
        { 
            name: 'Wheat Seeds (High Yield)', 
            nameUrdu: 'گندم کے بیج', 
            unit: '20kg bag',
            image: 'https://irfarm.com/cdn/shop/files/Dilkash_Wheat_Seed_50kg_Pack___Tagra_Gandum_Beej___New_Stock___High_Yield_Wheat_Variety___Global_Products.png?v=1767855315'
        },
        { 
            name: 'Rice Seeds (Basmati)', 
            nameUrdu: 'چاول کے بیج', 
            unit: '25kg bag',
            image: 'https://irfarm.com/cdn/shop/files/KissanBasmati1509PaddySeed_20kg_High.webp?v=1777268600'
        },
        { 
            name: 'Cotton Seeds (BT)', 
            nameUrdu: 'کپاس کے بیج', 
            unit: '10kg pack',
            image: 'https://5.imimg.com/data5/SELLER/Default/2022/8/UD/ZT/YH/7846690/bt-cotton-seeds-500x500.jpg'
        },
        { 
            name: 'Corn Seeds (Hybrid)', 
            nameUrdu: 'مکئی کے بیج', 
            unit: '15kg bag',
            image: 'https://5.imimg.com/data5/SELLER/Default/2023/4/303699119/ZN/YH/XT/7846690/hybrid-corn-seeds-500x500.jpg'
        },
        { 
            name: 'Vegetable Mix Seeds', 
            nameUrdu: 'سبزیوں کے بیج', 
            unit: '1kg pack',
            image: 'https://5.imimg.com/data5/SELLER/Default/2021/9/YI/TW/QE/6391181/vegetable-seeds-500x500.jpg'
        },
    ],
    pesticides: [
        { 
            name: 'Insecticide Spray', 
            nameUrdu: 'کیڑے مار دوا', 
            unit: '1 liter',
            image: 'https://irfarm.com/cdn/shop/files/LambdaCyhalothrin2.5EC1Litre.webp?v=1777273913'
        },
        { 
            name: 'Fungicide Powder', 
            nameUrdu: 'فنگس مار پاؤڈر', 
            unit: '500g pack',
            image: 'https://irfarm.com/cdn/shop/files/Embargo50WPCopperOxychloride500GmIciPesticidesFungicides.webp?v=1769522133'
        },
        { 
            name: 'Herbicide Solution', 
            nameUrdu: 'جڑی بوٹی مار', 
            unit: '1 liter',
            image: 'https://irfarm.com/cdn/shop/files/PendimethalinPomander33ec1literBestPreEmergenceHerbicideAlnoorAgroChemicals_c45abf8c-f2cc-4a5f-b0a3-abfac1e48703.webp'
        },
        { 
            name: 'Organic Pesticide', 
            nameUrdu: 'نامیاتی کیڑے مار', 
            unit: '500ml',
            image: 'https://5.imimg.com/data5/SELLER/Default/2021/10/YI/TW/QE/6391181/organic-pesticide-500x500.jpg'
        },
    ],
    tools: [
        { 
            name: 'Garden Hoe', 
            nameUrdu: 'باغبانی کُدال', 
            unit: 'piece',
            image: 'https://5.imimg.com/data5/SELLER/Default/2022/7/UD/ZT/YH/7846690/garden-hoe-500x500.jpg'
        },
        { 
            name: 'Pruning Shears', 
            nameUrdu: 'قینچی', 
            unit: 'piece',
            image: 'https://5.imimg.com/data5/SELLER/Default/2023/7/333699119/ZN/YH/XT/7846690/pruning-shears-500x500.jpg'
        },
        { 
            name: 'Water Sprayer', 
            nameUrdu: 'پانی کا اسپرے', 
            unit: 'piece',
            image: 'https://5.imimg.com/data5/SELLER/Default/2021/11/YI/TW/QE/6391181/water-sprayer-500x500.jpg'
        },
        { 
            name: 'Wheelbarrow', 
            nameUrdu: 'ٹھیلا', 
            unit: 'piece',
            image: 'https://5.imimg.com/data5/SELLER/Default/2022/12/UD/ZT/YH/7846690/wheelbarrow-500x500.jpg'
        },
    ],
    irrigation: [
        { 
            name: 'Drip Irrigation Kit', 
            nameUrdu: 'ڈرپ آبپاشی کٹ', 
            unit: '100m kit',
            image: 'https://5.imimg.com/data5/SELLER/Default/2023/8/343699119/ZN/YH/XT/7846690/drip-irrigation-kit-500x500.jpg'
        },
        { 
            name: 'Sprinkler System', 
            nameUrdu: 'چھڑکاؤ نظام', 
            unit: 'set',
            image: 'https://5.imimg.com/data5/SELLER/Default/2022/6/UD/ZT/YH/7846690/sprinkler-system-500x500.jpg'
        },
        { 
            name: 'Water Pump', 
            nameUrdu: 'پانی کا پمپ', 
            unit: 'piece',
            image: 'https://5.imimg.com/data5/SELLER/Default/2021/12/YI/TW/QE/6391181/water-pump-500x500.jpg'
        },
    ],
    other: [
        { 
            name: 'Plastic Mulch Sheet', 
            nameUrdu: 'پلاسٹک کی چادر', 
            unit: '100m roll',
            image: 'https://5.imimg.com/data5/SELLER/Default/2023/9/353699119/ZN/YH/XT/7846690/plastic-mulch-sheet-500x500.jpg'
        },
        { 
            name: 'Greenhouse Film', 
            nameUrdu: 'گرین ہاؤس فلم', 
            unit: '200 sqm',
            image: 'https://5.imimg.com/data5/SELLER/Default/2022/5/UD/ZT/YH/7846690/greenhouse-film-500x500.jpg'
        },
    ],
};

const features = [
    'High Quality',
    'Certified Product',
    'Long Lasting',
    'Eco-Friendly',
    'Fast Acting',
    'Government Approved',
    'Imported',
    'Locally Made',
];

export function generateProduct(category: ProductCategory, supplierId?: string): Product {
    const categoryProducts = productsByCategory[category];
    const productData = categoryProducts[Math.floor(Math.random() * categoryProducts.length)];
    const supplier = supplierId
        ? mockSuppliers.find(s => s.id === supplierId) || mockSuppliers[0]
        : mockSuppliers[Math.floor(Math.random() * mockSuppliers.length)];

    const basePrice = {
        fertilizers: () => Math.floor(Math.random() * 3000) + 2000,
        seeds: () => Math.floor(Math.random() * 5000) + 3000,
        pesticides: () => Math.floor(Math.random() * 2000) + 500,
        tools: () => Math.floor(Math.random() * 3000) + 1000,
        irrigation: () => Math.floor(Math.random() * 10000) + 5000,
        other: () => Math.floor(Math.random() * 2000) + 1000,
    };

    return {
        id: `product_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        name: productData.name,
        nameUrdu: productData.nameUrdu,
        description: `High quality ${productData.name.toLowerCase()} for agricultural use. Suitable for all types of crops.`,
        category,
        supplierId: supplier.id,
        supplierName: supplier.businessName,
        price: basePrice[category](),
        unit: productData.unit,
        stock: Math.floor(Math.random() * 500) + 50,
        images: [
            productData.image,
            productData.image,
        ],
        rating: parseFloat((Math.random() * 2 + 3).toFixed(1)),
        reviewsCount: Math.floor(Math.random() * 100) + 5,
        features: features.slice(0, Math.floor(Math.random() * 3) + 2),
        isAvailable: Math.random() > 0.1,
        createdAt: new Date(Date.now() - Math.random() * 180 * 24 * 60 * 60 * 1000),
    };
}

export function generateProducts(count: number): Product[] {
    const products: Product[] = [];
    const categories: ProductCategory[] = ['fertilizers', 'seeds', 'pesticides', 'tools', 'irrigation', 'other'];

    for (let i = 0; i < count; i++) {
        const category = categories[Math.floor(Math.random() * categories.length)];
        products.push(generateProduct(category));
    }

    return products;
}

export const mockProducts = generateProducts(100);

export function getProductById(id: string): Product | undefined {
    return mockProducts.find(p => p.id === id);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
    return mockProducts.filter(p => p.category === category);
}

export function getProductsBySupplierId(supplierId: string): Product[] {
    return mockProducts.filter(p => p.supplierId === supplierId);
}

export function searchProducts(query: string): Product[] {
    const lowerQuery = query.toLowerCase();
    return mockProducts.filter(p =>
        p.name.toLowerCase().includes(lowerQuery) ||
        p.description.toLowerCase().includes(lowerQuery) ||
        p.category.toLowerCase().includes(lowerQuery)
    );
}
