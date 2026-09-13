'use client'

import React from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-primary border-t border-gray-700 mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Branding */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent-light rounded-lg flex items-center justify-center">
                <span className="font-bold text-white">FF</span>
              </div>
              <span className="font-bold text-white">FFMARKET</span>
            </div>
            <p className="text-gray-400 text-sm">
              Marketplace terpercaya untuk jual beli akun Free Fire dengan sistem pembayaran yang aman.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-4">Navigasi</h3>
            <div className="space-y-2">
              <Link href="/marketplace" className="text-gray-400 text-sm hover:text-accent transition-colors">
                Jelajahi Akun
              </Link>
              <Link href="/how-it-works" className="text-gray-400 text-sm hover:text-accent transition-colors">
                Cara Kerja
              </Link>
              <Link href="/help" className="text-gray-400 text-sm hover:text-accent transition-colors">
                Bantuan
              </Link>
              <Link href="/contact" className="text-gray-400 text-sm hover:text-accent transition-colors">
                Kontak
              </Link>
            </div>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="font-bold text-white mb-4">Legal</h3>
            <div className="space-y-2">
              <Link href="/terms" className="text-gray-400 text-sm hover:text-accent transition-colors">
                Syarat & Ketentuan
              </Link>
              <Link href="/privacy" className="text-gray-400 text-sm hover:text-accent transition-colors">
                Kebijakan Privasi
              </Link>
              <Link href="/security" className="text-gray-400 text-sm hover:text-accent transition-colors">
                Keamanan
              </Link>
            </div>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-4">Hubungi Kami</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-accent" />
                <span>support@ffmarket.id</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-accent" />
                <span>+62 812 3456 7890</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Jakarta, Indonesia</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-700 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © 2024 FFMARKET. Semua hak dilindungi. Bukan afiliasi resmi Garena/Free Fire.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
