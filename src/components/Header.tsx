'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAuthStore } from '@/store/authStore';
import { FiSearch, FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

interface HeaderProps {
  onSearchClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSearchClick }) => {
  const [isDark, setIsDark] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { session } = useAuthStore();

  return (
    <header className="sticky top-0 z-40 bg-gradient-to-b from-primary via-primary to-secondary/50 border-b border-secondary/30 backdrop-blur-sm">
      <div className="px-4 py-3">
        {/* Logo & Search Row */}
        <div className="flex items-center gap-3 mb-3">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="text-xl font-black tracking-wider">
              <span className="text-white">ZERO</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent2"> STORE</span>
            </div>
            <div className="text-xs text-accent/80 font-semibold">FFMARKET</div>
          </Link>

          {/* Search Bar */}
          <button
            onClick={onSearchClick}
            className="flex-1 flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 border border-secondary/50 hover:border-accent/50 transition-all"
          >
            <FiSearch className="text-accent/60" size={18} />
            <span className="text-sm text-gray-400">Cari akun...</span>
          </button>

          {/* Dark Mode Toggle */}
          <button className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
            {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
