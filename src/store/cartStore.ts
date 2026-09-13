import { create } from 'zustand'

interface CartItem {
  accountId: string
  price: number
  title: string
}

interface CartStore {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (accountId: string) => void
  clearCart: () => void
  getTotalPrice: () => number
}

const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  
  addItem: (item: CartItem) => {
    const items = get().items
    const exists = items.find(i => i.accountId === item.accountId)
    if (!exists) {
      set({ items: [...items, item] })
    }
  },
  
  removeItem: (accountId: string) => {
    set({ items: get().items.filter(i => i.accountId !== accountId) })
  },
  
  clearCart: () => {
    set({ items: [] })
  },
  
  getTotalPrice: () => {
    return get().items.reduce((total, item) => total + item.price, 0)
  },
}))

export default useCartStore
