import { create } from 'zustand'
import { AccountListing, ListingFilters } from '@/types'

interface ListingStore {
  listings: AccountListing[]
  filteredListings: AccountListing[]
  filters: ListingFilters
  isLoading: boolean
  selectedListing: AccountListing | null
  
  setListings: (listings: AccountListing[]) => void
  setFilters: (filters: ListingFilters) => void
  applyFilters: () => void
  setSelectedListing: (listing: AccountListing | null) => void
  setLoading: (loading: boolean) => void
  addListing: (listing: AccountListing) => void
  removeListing: (id: string) => void
  updateListing: (id: string, updates: Partial<AccountListing>) => void
}

const useListingStore = create<ListingStore>((set, get) => ({
  listings: [],
  filteredListings: [],
  filters: {},
  isLoading: false,
  selectedListing: null,
  
  setListings: (listings: AccountListing[]) => {
    set({ listings })
    get().applyFilters()
  },
  
  setFilters: (filters: ListingFilters) => {
    set({ filters })
    get().applyFilters()
  },
  
  applyFilters: () => {
    const { listings, filters } = get()
    
    let filtered = listings.filter(item => item.status === 'active')
    
    if (filters.search) {
      const searchLower = filters.search.toLowerCase()
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchLower) ||
        item.description.toLowerCase().includes(searchLower)
      )
    }
    
    if (filters.minPrice !== undefined) {
      filtered = filtered.filter(item => item.price >= filters.minPrice!)
    }
    
    if (filters.maxPrice !== undefined) {
      filtered = filtered.filter(item => item.price <= filters.maxPrice!)
    }
    
    if (filters.minLevel !== undefined) {
      filtered = filtered.filter(item => item.level >= filters.minLevel!)
    }
    
    if (filters.maxLevel !== undefined) {
      filtered = filtered.filter(item => item.level <= filters.maxLevel!)
    }
    
    if (filters.minBundles !== undefined) {
      filtered = filtered.filter(item => item.bundles >= filters.minBundles!)
    }
    
    if (filters.minGunSkins !== undefined) {
      filtered = filtered.filter(item => item.gunSkins >= filters.minGunSkins!)
    }
    
    if (filters.region) {
      filtered = filtered.filter(item => item.region === filters.region)
    }
    
    // Apply sorting
    if (filters.sortBy === 'price_asc') {
      filtered.sort((a, b) => a.price - b.price)
    } else if (filters.sortBy === 'price_desc') {
      filtered.sort((a, b) => b.price - a.price)
    } else if (filters.sortBy === 'newest') {
      filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    }
    
    set({ filteredListings: filtered })
  },
  
  setSelectedListing: (listing: AccountListing | null) => {
    set({ selectedListing: listing })
  },
  
  setLoading: (loading: boolean) => {
    set({ isLoading: loading })
  },
  
  addListing: (listing: AccountListing) => {
    set({ listings: [listing, ...get().listings] })
    get().applyFilters()
  },
  
  removeListing: (id: string) => {
    set({ listings: get().listings.filter(l => l.id !== id) })
    get().applyFilters()
  },
  
  updateListing: (id: string, updates: Partial<AccountListing>) => {
    const updated = get().listings.map(l => 
      l.id === id ? { ...l, ...updates } : l
    )
    set({ listings: updated })
    get().applyFilters()
  },
}))

export default useListingStore
