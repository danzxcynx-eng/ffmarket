// User & Auth Types
export type UserRole = 'OWNER' | 'BUYER' | 'ADMIN'

export interface User {
  id: string
  email: string
  name: string
  role: UserRole
  avatar?: string
  createdAt: string
  verified: boolean
  phone?: string
}

export interface AuthState {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
}

// Account Listing Types
export type AccountStatus = 'active' | 'sold' | 'draft' | 'pending_review' | 'rejected'
export type ServerRegion = 'id' | 'global'

export interface AccountListing {
  id: string
  title: string
  price: number
  description: string
  level: number
  diamonds: number
  bundles: number
  gunSkins: number
  pets: number
  characters: number
  vehicles: number
  achievements: number
  rareItems: string[]
  images: string[]
  status: AccountStatus
  region: ServerRegion
  seller: {
    id: string
    name: string
    verified: boolean
    rating: number
    totalSales: number
  }
  createdAt: string
  updatedAt: string
}

// Transaction Types
export type TransactionStatus = 'pending' | 'paid' | 'processing' | 'completed' | 'refunded' | 'disputed'

export interface Transaction {
  id: string
  accountId: string
  buyerId: string
  sellerId: string
  amount: number
  serviceFee: number
  totalAmount: number
  status: TransactionStatus
  paymentMethod: 'bank_transfer' | 'e_wallet' | 'credit_card'
  accountDetails?: {
    username: string
    password: string // Encrypted
    email: string
  }
  createdAt: string
  completedAt?: string
  expiresAt: string
}

// Chat Types
export interface ChatMessage {
  id: string
  senderId: string
  senderName: string
  receiverId: string
  content: string
  image?: string
  timestamp: string
  read: boolean
  warningShown?: boolean
}

export interface ChatRoom {
  id: string
  participants: string[]
  lastMessage?: ChatMessage
  updatedAt: string
}

// Review Types
export interface Review {
  id: string
  transactionId: string
  reviewerId: string
  reviewerName: string
  rating: number
  comment: string
  createdAt: string
}

// Wishlist Types
export interface WishlistItem {
  id: string
  userId: string
  accountId: string
  addedAt: string
}

// Dispute Types
export type DisputeStatus = 'open' | 'in_review' | 'resolved' | 'closed'
export type DisputeType = 'account_issue' | 'payment_issue' | 'seller_fraud' | 'other'

export interface Dispute {
  id: string
  transactionId: string
  reporterId: string
  defendantId: string
  type: DisputeType
  reason: string
  description: string
  evidence: string[]
  status: DisputeStatus
  resolution?: string
  createdAt: string
  resolvedAt?: string
}

// Dashboard Stats
export interface AdminStats {
  totalUsers: number
  totalListings: number
  totalTransactions: number
  totalRevenue: number
  pendingVerification: number
  activeDisputes: number
  reportsCount: number
}

export interface SellerStats {
  totalListings: number
  soldListings: number
  totalRevenue: number
  balance: number
  rating: number
  totalReviews: number
}

export interface BuyerStats {
  totalPurchases: number
  totalSpent: number
  wishlists: number
  reviews: number
}
