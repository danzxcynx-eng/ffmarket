'use client';

import React from 'react';
import { FiShield, FiZap, FiMessageSquare, FiStar } from 'react-icons/fi';

const TrustSection: React.FC = () => {
  const features = [
    {
      icon: FiShield,
      title: 'Transaksi Aman',
      description: 'Proses transaksi melalui sistem website',
    },
    {
      icon: FiZap,
      title: 'Proses Cepat',
      description: 'Serah terima akun setelah pembayaran terverifikasi',
    },
    {
      icon: FiMessageSquare,
      title: 'Support 24/7',
      description: 'Customer support siap membantu',
    },
    {
      icon: FiStar,
      title: 'Terpercaya',
      description: 'Rating dan review dari pembeli',
    },
  ];

  return (
    <section className="px-4 py-6 mb-6">
      <h2 className="text-lg font-bold text-white mb-4">Kenapa Beli di ZERO STORE?</h2>
      <div className="grid grid-cols-2 gap-3">
        {features.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <div
              key={idx}
              className="p-4 rounded-xl bg-gradient-to-br from-secondary/50 to-primary/50 border border-secondary/30 hover:border-accent/30 transition-all"
            >
              <Icon className="text-accent mb-2" size={24} />
              <h3 className="text-sm font-bold text-white mb-1">{feature.title}</h3>
              <p className="text-xs text-gray-400 leading-tight">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TrustSection;
