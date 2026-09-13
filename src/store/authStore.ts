import { create } from 'zustand';
import { User, AuthSession } from '@/types';

interface AuthStore {
  session: AuthSession | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  setSession: (session: AuthSession | null) => void;
  setLoading: (loading: boolean) => void;
  logout: () => void;
  isOwner: () => boolean;
  isBuyer: () => boolean;
}

export const useAuthStore = create<AuthStore>((set, get) => ({
  session: null,
  isLoading: true,
  isAuthenticated: false,
  setSession: (session) =>
    set({
      session,
      isAuthenticated: !!session,
      isLoading: false,
    }),
  setLoading: (loading) => set({ isLoading: loading }),
  logout: () =>
    set({
      session: null,
      isAuthenticated: false,
    }),
  isOwner: () => get().session?.user.role === 'OWNER',
  isBuyer: () => get().session?.user.role === 'BUYER',
}));
