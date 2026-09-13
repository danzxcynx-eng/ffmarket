'use client';

import React from 'react';
import Link from 'next/link';
import { FiShoppingBag, FiStar } from 'react-icons/fi';
import { formatRupiah } from '@/lib/utils';

interface ProductCardProps {
  id: string;
  title: string;
  level: number;
  bundleCount: number;
  gunSkinCount: number;
  price: number;
  status?: 'AVAILABLE' | 'SOLD';
  category?: string;
  image?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  level,
  bundleCount,
  gunSkinCount,
  price,
  status = 'AVAILABLE',
  category,
}) => {
  return (
    <Link href={`/akun/${id}`}>
      <div className="bg-gradient-to-br from-secondary/50 to-primary/50 rounded-xl overflow-hidden border border-secondary/30 hover:border-accent/50 transition-all hover:shadow-glow cursor-pointer group">
        {/* Image Container */}
        <div className="relative h-32 bg-gradient-to-br from-secondary to-primary flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-accent2/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="text-4xl">🎮</span>
          {status === 'SOLD' && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <span className="text-sm font-bold text-white">TERJUAL</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-3">
          {/* Title */}
          <h3 className="text-sm font-bold text-white mb-2 line-clamp-2">{title}</h3>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2 mb-3 text-xs">
            <div className="text-center">
              <p className="text-gray-400">Level</p>
              <p className="font-bold text-white">{level}</p>
            </div>
            <div className="text-center border-x border-secondary/30">
              <p className="text-gray-400">Bundle</p>
              <p className="font-bold text-accent">{bundleCount}</p>
            </div>
            <div className="text-center">
              <p className="text-gray-400">Skin</p>
              <p className="font-bold text-accent2">{gunSkinCount}</p>
            </div>
          </div>

          {/* Price & Badge */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent2">
              {formatRupiah(price)}
            </span>
            {status === 'AVAILABLE' && (
              <span className="px-2 py-1 rounded-full bg-success/20 border border-success/50 text-xs font-semibold text-success">
                Tersedia
              </span>
            )}
          </div>

          {/* CTA Button */}
          <button className="w-full py-2 rounded-lg bg-gradient-to-r from-accent/80 to-accent2/80 hover:from-accent hover:to-accent2 text-black font-bold text-xs transition-all active:scale-95">
            Lihat Detail
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
