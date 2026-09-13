import { create } from 'zustand'
import { User, AuthState } from '@/types'

interface AuthStore extends AuthState {
  login: (user: User, token: string) => void
  logout: () => void
  setLoading: (loading: boolean) => void
  setUser: (user: User | null) => void
  isAdmin: () => boolean
  isOwner: () => boolean
  isBuyer: () => boolean
}

const useAuthStore = create<AuthStore>((set, get) => ({
  user: null,
  isLoading: false,
  isAuthenticated: false,
  
  login: (user: User, token: string) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('authToken', token)
      localStorage.setItem('user', JSON.stringify(user))
    }
    set({ user, isAuthenticated: true })
  },
  
  logout: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('authToken')
      localStorage.removeItem('user')
    }
    set({ user: null, isAuthenticated: false })
  },
  
  setLoading: (isLoading: boolean) => {
    set({ isLoading })
  },
  
  setUser: (user: User | null) => {
    set({ user, isAuthenticated: !!user })
  },
  
  isAdmin: () => {
    const { user } = get()
    return user?.role === 'OWNER' || user?.role === 'ADMIN'
  },
  
  isOwner: () => {
    const { user } = get()
    return user?.role === 'OWNER'
  },
  
  isBuyer: () => {
    const { user } = get()
    return user?.role === 'BUYER'
  },
}))

export default useAuthStore
