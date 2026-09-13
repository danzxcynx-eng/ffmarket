import { create } from 'zustand'
import { AccountListing } from '@/types'

interface WishlistStore {
  items: AccountListing[]
  addItem: (listing: AccountListing) => void
  removeItem: (id: string) => void
  isInWishlist: (id: string) => boolean
  clearWishlist: () => void
}

const useWishlistStore = create<WishlistStore>((set, get) => ({
  items: [],
  
  addItem: (listing: AccountListing) => {
    const items = get().items
    const exists = items.find(i => i.id === listing.id)
    if (!exists) {
      set({ items: [...items, listing] })
    }
  },
  
  removeItem: (id: string) => {
    set({ items: get().items.filter(i => i.id !== id) })
  },
  
  isInWishlist: (id: string) => {
    return get().items.some(i => i.id === id)
  },
  
  clearWishlist: () => {
    set({ items: [] })
  },
}))

export default useWishlistStore
