// User & Authentication Types
export type UserRole = 'OWNER' | 'BUYER' | 'ADMIN';

export interface User {
  id: string;
  email: string;
  username: string;
  role: UserRole;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthSession {
  user: User;
  token: string;
  expiresAt: Date;
}

// Account Listing Types
export type ListingStatus = 'AVAILABLE' | 'RESERVED' | 'SOLD' | 'DRAFT' | 'SUSPENDED';

export interface GameAccount {
  id: string;
  listingId: string;
  accountName: string;
  level: number;
  serverRegion: string;
  status: ListingStatus;
  createdAt: Date;
  updatedAt: Date;
}

export interface AccountListing {
  id: string;
  accountId: string;
  title: string;
  description: string;
  price: number;
  bundleCount: number;
  gunSkinCount: number;
  petCount: number;
  characterCount: number;
  vehicleCount: number;
  images: string[];
  category: 'SULTAN' | 'RARE' | 'VETERAN' | 'CHEAP' | 'FULL_SKIN' | 'PREMIUM';
  status: ListingStatus;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
}

// Order Types
export type OrderStatus =
  | 'PENDING_PAYMENT'
  | 'PAYMENT_FAILED'
  | 'PAID'
  | 'WAITING_DELIVERY'
  | 'DELIVERED'
  | 'COMPLETED'
  | 'DISPUTED'
  | 'REFUNDED'
  | 'CANCELLED';

export interface Order {
  id: string;
  orderNumber: string;
  listingId: string;
  buyerId: string;
  totalPrice: number;
  serviceFee: number;
  totalAmount: number;
  status: OrderStatus;
  paymentMethod?: string;
  paymentProof?: string;
  deliveryNotes?: string;
  disputeReason?: string;
  timeline: OrderTimeline[];
  createdAt: Date;
  updatedAt: Date;
  completedAt?: Date;
}

export interface OrderTimeline {
  timestamp: Date;
  status: OrderStatus;
  description: string;
  performedBy?: string;
}

// Payment Types
export type PaymentMethod = 'QRIS' | 'VIRTUAL_ACCOUNT' | 'E_WALLET' | 'BANK_TRANSFER';

export interface Payment {
  id: string;
  orderId: string;
  amount: number;
  method: PaymentMethod;
  status: 'PENDING' | 'PROCESSING' | 'SUCCESS' | 'FAILED';
  reference?: string;
  externalId?: string;
  expiresAt?: Date;
  verifiedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

// Review Types
export interface Review {
  id: string;
  orderId: string;
  reviewerId: string;
  rating: number;
  comment?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Chat Types
export interface ChatMessage {
  id: string;
  orderId?: string;
  senderId: string;
  receiverId: string;
  message: string;
  attachments?: string[];
  isRead: boolean;
  createdAt: Date;
}

// Wishlist Types
export interface Wishlist {
  id: string;
  userId: string;
  listingId: string;
  createdAt: Date;
}

// Admin Report Types
export interface Report {
  id: string;
  reporterId: string;
  targetType: 'LISTING' | 'USER' | 'ORDER';
  targetId: string;
  reason: string;
  description?: string;
  evidence?: string[];
  status: 'PENDING' | 'UNDER_REVIEW' | 'RESOLVED' | 'REJECTED';
  resolution?: string;
  createdAt: Date;
  updatedAt: Date;
  resolvedAt?: Date;
}

// Notification Types
export type NotificationType =
  | 'ORDER_CREATED'
  | 'PAYMENT_SUCCESS'
  | 'PAYMENT_FAILED'
  | 'DELIVERY_READY'
  | 'ACCOUNT_DELIVERED'
  | 'DELIVERY_CONFIRMED'
  | 'DISPUTE_CREATED'
  | 'DISPUTE_RESOLVED'
  | 'REFUND_PROCESSED'
  | 'ORDER_COMPLETED';

export interface Notification {
  id: string;
  userId: string;
  type: NotificationType;
  title: string;
  message: string;
  relatedId?: string;
  isRead: boolean;
  createdAt: Date;
}
