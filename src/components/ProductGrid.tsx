'use client';

import React from 'react';
import ProductCard from '@/components/ProductCard';
import { FiArrowRight } from 'react-icons/fi';

interface ProductGridProps {
  title: string;
  icon?: string;
  showViewAll?: boolean;
  onViewAll?: () => void;
  columns?: 2 | 3 | 4;
}

const dummyProducts = [
  { id: '1', title: 'Akun Sultan #001', level: 75, bundleCount: 120, gunSkinCount: 45, price: 750000 },
  { id: '2', title: 'Akun Veteran Season 1', level: 68, bundleCount: 85, gunSkinCount: 38, price: 550000 },
  { id: '3', title: 'Akun Rare Bundle Eksklusif', level: 72, bundleCount: 150, gunSkinCount: 52, price: 950000 },
  { id: '4', title: 'Akun Murah Full Skin', level: 45, bundleCount: 30, gunSkinCount: 28, price: 250000 },
];

const ProductGrid: React.FC<ProductGridProps> = ({
  title,
  icon = '🔥',
  showViewAll = true,
  onViewAll,
  columns = 2,
}) => {
  return (
    <section className="px-4 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <span>{icon}</span>
          {title}
        </h2>
        {showViewAll && (
          <button
            onClick={onViewAll}
            className="text-sm text-accent hover:text-accent2 transition-colors flex items-center gap-1"
          >
            Lihat Semua
            <FiArrowRight size={16} />
          </button>
        )}
      </div>

      <div className={`grid gap-3 grid-cols-${columns}`}>
        {dummyProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
