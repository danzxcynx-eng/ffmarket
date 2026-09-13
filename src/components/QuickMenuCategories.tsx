'use client';

import React from 'react';

const QuickMenuCategories: React.FC = () => {
  const categories = [
    { icon: '🔥', label: 'Akun Sultan' },
    { icon: '💎', label: 'Akun Rare' },
    { icon: '👑', label: 'Veteran' },
    { icon: '🎯', label: 'Banyak Skin' },
    { icon: '💰', label: 'Akun Murah' },
    { icon: '⭐', label: 'Premium' },
  ];

  return (
    <div className="px-4 mb-6">
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            className="flex flex-col items-center gap-2 p-3 rounded-xl bg-secondary/40 hover:bg-secondary/70 border border-secondary/50 hover:border-accent/50 transition-all flex-shrink-0 min-w-[70px]"
          >
            <span className="text-2xl">{cat.icon}</span>
            <span className="text-xs text-center text-gray-300 leading-tight font-medium">
              {cat.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickMenuCategories;
