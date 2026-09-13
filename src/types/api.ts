import { User, AccountListing, Transaction, ChatMessage, Review, Dispute } from './index'

// Auth API
export interface LoginRequest {
  email: string
  password: string
}

export interface LoginResponse {
  user: User
  token: string
}

export interface RegisterRequest {
  email: string
  name: string
  password: string
  phone?: string
}

export interface RegisterResponse {
  user: User
  token: string
}

// Listing API
export interface CreateListingRequest {
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
  region: 'id' | 'global'
}

export interface UpdateListingRequest extends Partial<CreateListingRequest> {
  id: string
}

// Listing Filter
export interface ListingFilters {
  search?: string
  minPrice?: number
  maxPrice?: number
  minLevel?: number
  maxLevel?: number
  minBundles?: number
  minGunSkins?: number
  region?: string
  sortBy?: 'price_asc' | 'price_desc' | 'newest' | 'popular'
}

// Transaction API
export interface InitiateCheckoutRequest {
  accountId: string
  paymentMethod: string
}

export interface ConfirmPurchaseRequest {
  transactionId: string
  accountUsername?: string
  accountEmail?: string
}

// Chat API
export interface SendMessageRequest {
  recipientId: string
  content: string
  image?: string
}

// Review API
export interface CreateReviewRequest {
  transactionId: string
  rating: number
  comment: string
}

// Dispute API
export interface CreateDisputeRequest {
  transactionId: string
  type: string
  reason: string
  description: string
  evidence: string[]
}

// API Response Wrapper
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: {
    code: string
    message: string
    details?: Record<string, any>
  }
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  pageSize: number
  totalPages: number
}
