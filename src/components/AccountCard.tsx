'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Heart, Shield } from 'lucide-react'
import { AccountListing } from '@/types'
import { formatCurrency } from '@/lib/utils'
import useWishlistStore from '@/store/wishlistStore'

interface AccountCardProps {
  listing: AccountListing
}

const AccountCard: React.FC<AccountCardProps> = ({ listing }) => {
  const { isInWishlist, addItem, removeItem } = useWishlistStore()
  const inWishlist = isInWishlist(listing.id)
  
  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault()
    if (inWishlist) {
      removeItem(listing.id)
    } else {
      addItem(listing)
    }
  }
  
  return (
    <Link href={`/account/${listing.id}`}>
      <div className="card-hover cursor-pointer overflow-hidden group h-full flex flex-col">
        {/* Image Section */}
        <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
          {listing.images[0] ? (
            <Image
              src={listing.images[0]}
              alt={listing.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-600">
              <span className="text-sm">Tidak ada gambar</span>
            </div>
          )}
          
          {/* Badge */}
          <div className="absolute top-2 right-2 flex gap-2">
            {listing.seller.verified && (
              <div className="bg-success/20 border border-success rounded-lg px-2 py-1 flex items-center gap-1">
                <Shield className="w-3 h-3 text-success" />
                <span className="text-xs font-medium text-success">Verified</span>
              </div>
            )}
          </div>
          
          {/* Wishlist Button */}
          <button
            onClick={handleWishlistToggle}
            className={cn(
              'absolute bottom-2 right-2 p-2 rounded-lg transition-all',
              inWishlist ? 'bg-accent text-white' : 'bg-black/50 text-white hover:bg-accent'
            )}
          >
            <Heart className={`w-5 h-5 ${inWishlist ? 'fill-current' : ''}`} />
          </button>
        </div>
        
        {/* Content Section */}
        <div className="flex-1 p-4 flex flex-col gap-3">
          {/* Title */}
          <h3 className="font-bold text-white line-clamp-2 group-hover:text-accent transition-colors">
            {listing.title}
          </h3>
          
          {/* Specs Grid */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-secondary/50 rounded px-2 py-1">
              <span className="text-gray-400">Level</span>
              <p className="text-white font-bold">{listing.level}</p>
            </div>
            <div className="bg-secondary/50 rounded px-2 py-1">
              <span className="text-gray-400">Bundle</span>
              <p className="text-white font-bold">{listing.bundles}</p>
            </div>
            <div className="bg-secondary/50 rounded px-2 py-1">
              <span className="text-gray-400">Gun Skin</span>
              <p className="text-white font-bold">{listing.gunSkins}</p>
            </div>
            <div className="bg-secondary/50 rounded px-2 py-1">
              <span className="text-gray-400">Diamond</span>
              <p className="text-white font-bold">{listing.diamonds}</p>
            </div>
          </div>
          
          {/* Seller Info */}
          <div className="text-xs text-gray-400 border-t border-gray-700 pt-2 mt-auto">
            <p className="font-medium text-white">{listing.seller.name}</p>
            <p>⭐ {listing.seller.rating} • {listing.seller.totalSales} penjualan</p>
          </div>
        </div>
        
        {/* Footer */}
        <div className="border-t border-gray-700 p-4 flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-400">Harga</p>
            <p className="font-bold text-accent text-lg">{formatCurrency(listing.price)}</p>
          </div>
          <button className="btn btn-primary text-sm">
            Lihat Detail
          </button>
        </div>
      </div>
    </Link>
  )
}

export default AccountCard
