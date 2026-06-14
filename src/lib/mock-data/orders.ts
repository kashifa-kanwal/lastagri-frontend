import { Order, OrderItem, OrderStatus, PaymentStatus } from '@/types';
import { mockFarmers } from './farmers';
import { mockProducts } from './products';
import { mockSuppliers } from './suppliers';

export function generateOrder(farmerId?: string, supplierId?: string): Order {
    const farmer = farmerId
        ? mockFarmers.find(f => f.id === farmerId) || mockFarmers[0]
        : mockFarmers[Math.floor(Math.random() * mockFarmers.length)];

    const supplier = supplierId
        ? mockSuppliers.find(s => s.id === supplierId) || mockSuppliers[0]
        : mockSuppliers[Math.floor(Math.random() * mockSuppliers.length)];

    const supplierProducts = mockProducts.filter(p => p.supplierId === supplier.id);
    const itemCount = Math.floor(Math.random() * 3) + 1; // 1-3 items

    const items: OrderItem[] = [];
    for (let i = 0; i < itemCount; i++) {
        const product = supplierProducts[Math.floor(Math.random() * supplierProducts.length)];
        if (product && !items.find(item => item.productId === product.id)) {
            items.push({
                productId: product.id,
                productName: product.name,
                quantity: Math.floor(Math.random() * 5) + 1,
                price: product.price,
                unit: product.unit,
            });
        }
    }

    const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = Math.floor(subtotal * 0.17); // 17% GST
    const total = subtotal + tax;

    const statuses: OrderStatus[] = ['pending', 'confirmed', 'processing', 'shipped', 'delivered'];
    const status = statuses[Math.floor(Math.random() * statuses.length)];

    const paymentStatuses: PaymentStatus[] = ['pending', 'paid', 'partial'];
    const paymentStatus = status === 'delivered'
        ? 'paid'
        : paymentStatuses[Math.floor(Math.random() * paymentStatuses.length)];

    const orderDate = new Date(Date.now() - Math.random() * 90 * 24 * 60 * 60 * 1000);
    const deliveryDate = status === 'delivered'
        ? new Date(orderDate.getTime() + Math.random() * 10 * 24 * 60 * 60 * 1000)
        : undefined;

    return {
        id: `order_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        farmerId: farmer.id,
        farmerName: farmer.name,
        supplierId: supplier.id,
        supplierName: supplier.businessName,
        items,
        subtotal,
        tax,
        total,
        status,
        paymentMethod: 'bnpl',
        paymentStatus,
        deliveryAddress: `${farmer.location.village}, ${farmer.location.tehsil}, ${farmer.location.district}`,
        orderDate,
        deliveryDate,
        notes: Math.random() > 0.7 ? 'Please deliver before 5 PM' : undefined,
    };
}

export function generateOrders(count: number): Order[] {
    return Array.from({ length: count }, () => generateOrder());
}

export const mockOrders = generateOrders(200);

export function getOrderById(id: string): Order | undefined {
    return mockOrders.find(o => o.id === id);
}

export function getOrdersByFarmerId(farmerId: string): Order[] {
    return mockOrders.filter(o => o.farmerId === farmerId);
}

export function getOrdersBySupplierId(supplierId: string): Order[] {
    return mockOrders.filter(o => o.supplierId === supplierId);
}

export function getOrdersByStatus(status: OrderStatus): Order[] {
    return mockOrders.filter(o => o.status === status);
}
