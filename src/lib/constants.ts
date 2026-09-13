// Owner Email
export const OWNER_EMAIL = 'danzxcynx@gmail.com'

// Price Range
export const MIN_PRICE = 10000
export const MAX_PRICE = 50000000

// Level Range
export const MIN_LEVEL = 1
export const MAX_LEVEL = 60

// Service Fee Percentage
export const SERVICE_FEE_PERCENTAGE = 2.5

// Transaction Timeout (24 hours)
export const TRANSACTION_TIMEOUT = 24 * 60 * 60 * 1000

// Categories
export const CATEGORIES = [
  { id: 'sultan', name: 'Sultan', icon: '👑', description: 'Akun dengan banyak item premium' },
  { id: 'cheap', name: 'Murah', icon: '💰', description: 'Akun dengan harga terjangkau' },
  { id: 'bundles', name: 'Banyak Bundle', icon: '📦', description: 'Akun dengan banyak bundle' },
  { id: 'skins', name: 'Banyak Skin Senjata', icon: '🎨', description: 'Akun dengan koleksi skin lengkap' },
  { id: 'veteran', name: 'Akun Veteran', icon: '⭐', description: 'Akun dari season lama' },
  { id: 'rare', name: 'Akun Langka', icon: '💎', description: 'Akun dengan item eksklusif' },
]

// Payment Methods
export const PAYMENT_METHODS = [
  { id: 'bank_transfer', name: 'Transfer Bank', icon: '🏦' },
  { id: 'e_wallet', name: 'E-Wallet', icon: '📱' },
  { id: 'credit_card', name: 'Kartu Kredit', icon: '💳' },
]

// Server Regions
export const REGIONS = [
  { id: 'id', name: 'Indonesia' },
  { id: 'global', name: 'Global' },
]

// Transaction Status
export const TRANSACTION_STATUS_LABELS: Record<string, string> = {
  pending: 'Menunggu Pembayaran',
  paid: 'Pembayaran Diterima',
  processing: 'Diproses',
  completed: 'Selesai',
  refunded: 'Dikembalikan',
  disputed: 'Disputing',
}

// Account Status
export const ACCOUNT_STATUS_LABELS: Record<string, string> = {
  active: 'Aktif',
  sold: 'Terjual',
  draft: 'Draft',
  pending_review: 'Menunggu Review',
  rejected: 'Ditolak',
}
