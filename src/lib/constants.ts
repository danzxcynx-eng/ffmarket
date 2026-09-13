// Role Constants
export const ROLES = {
  OWNER: 'OWNER',
  BUYER: 'BUYER',
  ADMIN: 'ADMIN',
} as const;

// Listing Status
export const LISTING_STATUS = {
  AVAILABLE: 'AVAILABLE',
  RESERVED: 'RESERVED',
  SOLD: 'SOLD',
  DRAFT: 'DRAFT',
  SUSPENDED: 'SUSPENDED',
} as const;

// Order Status
export const ORDER_STATUS = {
  PENDING_PAYMENT: 'PENDING_PAYMENT',
  PAYMENT_FAILED: 'PAYMENT_FAILED',
  PAID: 'PAID',
  WAITING_DELIVERY: 'WAITING_DELIVERY',
  DELIVERED: 'DELIVERED',
  COMPLETED: 'COMPLETED',
  DISPUTED: 'DISPUTED',
  REFUNDED: 'REFUNDED',
  CANCELLED: 'CANCELLED',
} as const;

// Payment Methods
export const PAYMENT_METHODS = {
  QRIS: 'QRIS',
  VIRTUAL_ACCOUNT: 'VIRTUAL_ACCOUNT',
  E_WALLET: 'E_WALLET',
  BANK_TRANSFER: 'BANK_TRANSFER',
} as const;

// Categories
export const ACCOUNT_CATEGORIES = [
  { id: 'SULTAN', label: 'Akun Sultan', icon: '🔥' },
  { id: 'RARE', label: 'Akun Rare', icon: '💎' },
  { id: 'VETERAN', label: 'Veteran', icon: '👑' },
  { id: 'FULL_SKIN', label: 'Banyak Skin', icon: '🎯' },
  { id: 'CHEAP', label: 'Akun Murah', icon: '💰' },
  { id: 'PREMIUM', label: 'Premium', icon: '⭐' },
] as const;

// App Config
export const APP_CONFIG = {
  appName: 'ZERO STORE',
  subBrand: 'FFMARKET',
  tagline: 'Marketplace Akun Free Fire Terpercaya',
  serviceFeePercent: 5,
  confirmationTimeoutHours: 24,
  autoCompleteHours: 48,
  minPrice: 50000,
  maxPrice: 10000000,
} as const;

// Routes
export const ROUTES = {
  HOME: '/',
  KATALOG: '/katalog',
  DETAIL: '/akun/:id',
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  CHECKOUT: '/checkout/:listingId',
  ORDERS: '/orders',
  WISHLIST: '/wishlist',
  ACCOUNT: '/account',
  HELP: '/help',
  ADMIN: '/admin',
  ADMIN_DASHBOARD: '/admin/dashboard',
  ADMIN_LISTINGS: '/admin/listings',
  ADMIN_ADD: '/admin/add-account',
  ADMIN_ORDERS: '/admin/orders',
  ADMIN_CHAT: '/admin/chat',
  ADMIN_USERS: '/admin/users',
  CHAT: '/chat/:conversationId',
} as const;
