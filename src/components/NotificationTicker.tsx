'use client';

import React, { useEffect, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';

const NotificationTicker: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const notifications = [
    { icon: '🛡️', user: 'R*', action: 'berhasil membeli', item: 'Akun Sultan #007', price: 'Rp1.250.000' },
    { icon: '⭐', user: 'Z*', action: 'berhasil membeli', item: 'Akun Rare Bundle', price: 'Rp850.000' },
    { icon: '💎', user: 'A*', action: 'berhasil membeli', item: 'Akun Veteran', price: 'Rp650.000' },
    { icon: '🔥', user: 'M*', action: 'memberikan review 5★', item: 'Akun Murah', price: 'Top Seller!' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % notifications.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const current = notifications[currentIndex];

  return (
    <div className="px-4 py-2 bg-secondary/30 border-b border-secondary/30 overflow-hidden">
      <div className="flex items-center gap-3 animate-fade-in">
        <span className="text-lg">{current.icon}</span>
        <div className="flex-1 min-w-0">
          <p className="text-xs text-gray-300 truncate">
            <span className="text-accent font-semibold">{current.user}</span> {current.action}
            {' '}
            <span className="text-white font-medium">{current.item}</span>
            {' — '}
            <span className="text-accent/80 font-semibold">{current.price}</span>
          </p>
        </div>
        <FiChevronRight size={16} className="text-accent/60 flex-shrink-0" />
      </div>
    </div>
  );
};

export default NotificationTicker;
