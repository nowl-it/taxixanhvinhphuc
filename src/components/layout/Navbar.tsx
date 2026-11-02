"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig, navLinks } from "@/data/config";
import Logo from "@/components/ui/Logo";
import ZaloIcon from "@/components/ui/ZaloIcon";
import HolidayBanner from "@/components/layout/HolidayBanner";
import { Phone, Clock, Menu, X, ShieldCheck } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full z-40 sticky top-0 shadow-sm">
      {/* Holiday Announcement Banner */}
      <HolidayBanner />

      {/* Top Bar */}
      <div className="bg-slate-900 text-slate-100 text-xs py-1.5 sm:py-2 border-b border-slate-800">
        <div className="container mx-auto px-3 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-1.5 sm:gap-2">
          <div className="flex items-center gap-2.5 sm:gap-4 flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1 shrink-0 whitespace-nowrap text-[11px] sm:text-xs">
              <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{siteConfig.workingHours}</span>
            </span>
            <span className="hidden sm:flex items-center gap-1 text-slate-300 shrink-0">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Xe mới 100% • Đón trả tận nơi • Không phụ phí</span>
            </span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${siteConfig.hotlineRaw}`}
              className="text-amber-300 font-bold hover:text-white transition flex items-center gap-1.5 text-xs sm:text-sm tracking-wide shrink-0 whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 shrink-0" />
              <span>Hotline 24/7: {siteConfig.hotline}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="clean-nav bg-white border-b border-slate-200">
        <div className="container mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <Logo />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden xl:flex items-center gap-0.5 2xl:gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-2.5 2xl:px-3 py-2 text-sm font-semibold text-slate-700 hover:text-amber-700 hover:bg-slate-50 rounded-lg transition-colors whitespace-nowrap shrink-0"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop Call Action Buttons (Only xl and up) */}
            <div className="hidden xl:flex items-center gap-2 shrink-0">
              <a
                href={siteConfig.zalo}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden 2xl:flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100 font-semibold text-sm transition shadow-sm"
              >
                <ZaloIcon className="w-4 h-4" />
                Chat Zalo
              </a>

              <a
                href={`tel:${siteConfig.hotlineRaw}`}
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold text-sm flex items-center gap-2 shadow-lg shadow-red-500/25 transition-all transform hover:-translate-y-0.5"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-white"></span>
                <Phone className="w-4 h-4 animate-phone-ring" />
                <span>{siteConfig.hotline}</span>
              </a>
            </div>

            {/* Mobile & Tablet Actions (Below xl) */}
            <div className="flex xl:hidden items-center gap-1.5 sm:gap-2 shrink-0">
              <a
                href={siteConfig.zalo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 sm:px-2.5 py-1.5 sm:py-2 rounded-xl bg-blue-50 text-blue-700 border border-blue-200 font-bold text-xs flex items-center gap-1 shadow-sm"
                aria-label="Chat Zalo"
              >
                <ZaloIcon className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Zalo</span>
              </a>

              <a
                href={`tel:${siteConfig.hotlineRaw}`}
                className="px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl bg-red-600 text-white font-bold text-xs sm:text-sm shadow-md flex items-center gap-1 sm:gap-1.5"
                aria-label="Gọi ngay"
              >
                <Phone className="w-3.5 h-3.5 animate-phone-ring" />
                <span className="hidden sm:inline">{siteConfig.hotline}</span>
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 sm:p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none"
                aria-label="Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in fade-in duration-200">
            <div className="space-y-1 mb-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2.5 text-base font-semibold text-slate-800 hover:text-amber-700 hover:bg-slate-50 rounded-lg transition"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href={`tel:${siteConfig.hotlineRaw}`}
                className="w-full py-3 px-4 rounded-xl bg-red-600 text-white font-bold text-center flex items-center justify-center gap-2 shadow-md"
              >
                <Phone className="w-5 h-5 animate-phone-ring" />
                <span>GỌI TỔNG ĐÀI: {siteConfig.hotline}</span>
              </a>
              <a
                href={siteConfig.zalo}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-blue-50 text-blue-700 border border-blue-200 font-bold text-center flex items-center justify-center gap-2 shadow-sm"
              >
                <ZaloIcon className="w-5 h-5" />
                <span>CHAT ZALO ĐẶT XE (058 815 555)</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
