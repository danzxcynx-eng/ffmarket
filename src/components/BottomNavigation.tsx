'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiHome, FiGrid, FiShoppingBag, FiHelpCircle, FiUser } from 'react-icons/fi';
import { useAuthStore } from '@/store/authStore';

const BottomNavigation: React.FC = () => {
  const pathname = usePathname();
  const { isAuthenticated } = useAuthStore();

  const navItems = [
    { label: 'Beranda', icon: FiHome, href: '/' },
    { label: 'Katalog', icon: FiGrid, href: '/katalog' },
    { label: 'Pesanan', icon: FiShoppingBag, href: '/orders' },
    { label: 'Bantuan', icon: FiHelpCircle, href: '/help' },
    { label: 'Akun', icon: FiUser, href: '/account' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-lg border-t border-secondary/30">
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center py-3 px-4 flex-1 transition-all ${
                isActive
                  ? 'text-accent'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              <Icon size={24} className="mb-1" />
              <span className="text-xs font-medium">{item.label}</span>
              {isActive && (
                <div className="absolute bottom-0 w-12 h-1 bg-gradient-to-r from-accent to-accent2 rounded-t-lg" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation;
