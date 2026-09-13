'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ShoppingCart, User, LogOut, Settings } from 'lucide-react'
import useAuthStore from '@/store/authStore'
import useCartStore from '@/store/cartStore'
import { cn } from '@/lib/utils'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { user, isAuthenticated, logout, isOwner } = useAuthStore()
  const { items } = useCartStore()
  
  const handleLogout = () => {
    logout()
    setIsOpen(false)
  }
  
  const navLinks = [
    { href: '/', label: 'Beranda' },
    { href: '/marketplace', label: 'Cari Akun' },
    { href: '/how-it-works', label: 'Cara Kerja' },
    { href: '/help', label: 'Bantuan' },
  ]
  
  if (isOwner()) {
    navLinks.splice(2, 0, { href: '/admin', label: 'Dashboard Admin' })
  }
  
  return (
    <nav className="sticky top-0 z-40 bg-primary/95 backdrop-blur-md border-b border-gray-700 shadow-lg">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent-light rounded-lg flex items-center justify-center">
              <span className="font-bold text-white text-lg">FF</span>
            </div>
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="font-bold text-white text-lg">FFMARKET</span>
              <span className="text-xs text-accent">Premium Accounts</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-400 hover:text-accent transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Cart */}
            <Link href="/cart" className="relative group">
              <ShoppingCart className="w-6 h-6 text-gray-400 group-hover:text-accent transition-colors" />
              {items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {items.length}
                </span>
              )}
            </Link>
            
            {/* Auth Buttons */}
            {!isAuthenticated ? (
              <div className="hidden sm:flex gap-2">
                <Link href="/login" className="btn btn-secondary text-sm">
                  Login
                </Link>
                <Link href="/register" className="btn btn-primary text-sm">
                  Daftar
                </Link>
              </div>
            ) : (
              <div className="hidden sm:flex items-center gap-2">
                <Link href="/dashboard" className="btn btn-secondary text-sm">
                  <User className="w-4 h-4" />
                  Dashboard
                </Link>
                <button onClick={handleLogout} className="btn btn-outline text-sm">
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            )}
            
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-gray-400 hover:text-accent transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-700 space-y-2">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-gray-400 hover:text-accent hover:bg-secondary rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            
            {!isAuthenticated ? (
              <div className="flex flex-col gap-2 px-4 pt-2">
                <Link href="/login" className="btn btn-secondary text-sm w-full" onClick={() => setIsOpen(false)}>
                  Login
                </Link>
                <Link href="/register" className="btn btn-primary text-sm w-full" onClick={() => setIsOpen(false)}>
                  Daftar
                </Link>
              </div>
            ) : (
              <div className="flex flex-col gap-2 px-4 pt-2">
                <Link href="/dashboard" className="btn btn-secondary text-sm w-full" onClick={() => setIsOpen(false)}>
                  <User className="w-4 h-4" />
                  Dashboard
                </Link>
                <button onClick={handleLogout} className="btn btn-outline text-sm w-full">
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
