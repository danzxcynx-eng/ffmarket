import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

export function formatDate(date: string | Date): string {
  return new Intl.DateTimeFormat('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date))
}

export function formatDateTime(date: string | Date): string {
  return new Intl.DateTimeFormat('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(date))
}

export function formatRelativeTime(date: string | Date): string {
  const now = new Date()
  const past = new Date(date)
  const diff = now.getTime() - past.getTime()
  
  const seconds = Math.floor(diff / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  
  if (seconds < 60) return 'Baru saja'
  if (minutes < 60) return `${minutes}m yang lalu`
  if (hours < 24) return `${hours}h yang lalu`
  if (days < 7) return `${days}d yang lalu`
  
  return formatDate(date)
}

export function calculateServiceFee(amount: number, percentage: number = 2.5): number {
  return Math.round((amount * percentage) / 100)
}

export function validateEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}

export function validatePassword(password: string): boolean {
  // Minimal 8 karakter, minimal 1 huruf besar, 1 angka
  return password.length >= 8 && /[A-Z]/.test(password) && /\d/.test(password)
}

export function generateId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36)
}

export function maskAccountPassword(password: string): string {
  if (password.length <= 2) return '*'.repeat(password.length)
  return password[0] + '*'.repeat(password.length - 2) + password[password.length - 1]
}

export function isValidPhoneNumber(phone: string): boolean {
  // Indonesia phone number format
  return /^(\+62|0)[0-9]{9,12}$/.test(phone.replace(/\s/g, ''))
}
