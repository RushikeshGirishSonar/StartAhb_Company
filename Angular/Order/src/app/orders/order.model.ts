import { User } from "./user.model";

// order.model.ts
export enum OrderStatus {
  PLACED = 'PLACED',
  SHIPPED = 'SHIPPED',
  DELIVERED = 'DELIVERED',
  CANCELLED = 'CANCELLED'
}

export interface Order {
  id?: number;          // ← REQUIRED (explains later errors)
  customerName?: string;
  productName: string;
  quantity: number;
  price: number;
  deliveryAddress: string;
  status: OrderStatus;
  user?: User;
}
