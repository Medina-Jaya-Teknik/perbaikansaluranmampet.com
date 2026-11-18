"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-3.5 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt={siteConfig.brandName}
            width={44}
            height={44}
            priority
            className="w-10 h-10 object-contain"
          />
          <div>
            <span className="font-extrabold text-base sm:text-lg text-gray-900 block leading-tight">
              {siteConfig.name}
            </span>
            <span className="text-[11px] font-semibold text-amber-600 block tracking-tight">
              Layanan Cepat 24 Jam Bandung
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6 text-slate-700 font-semibold text-sm">
          <Link href="/" className="hover:text-amber-600 transition">
            Beranda
          </Link>
          <Link href="/#layanan" className="hover:text-amber-600 transition">
            Layanan
          </Link>
          <Link href="/#cara-kerja" className="hover:text-amber-600 transition">
            Cara Kerja
          </Link>
          <Link href="/#area" className="hover:text-amber-600 transition">
            Area Pos
          </Link>
          <Link href="/#faq" className="hover:text-amber-600 transition">
            FAQ
          </Link>
          <Link href="/blog" className="hover:text-amber-600 transition">
            Blog
          </Link>
          <Link href="/kontak" className="hover:text-amber-600 transition">
            Kontak
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-950 font-bold px-4 py-2 rounded-xl text-xs shadow-sm transition"
          >
            <FaWhatsapp className="text-base" />
            <span>WA 24 Jam</span>
          </a>
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <div className="space-y-1.5 w-6">
            <span
              className={`block h-0.5 bg-gray-900 transition-all ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 bg-gray-900 transition-all ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 bg-gray-900 transition-all ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-xl">
          <div className="flex flex-col px-6 py-5 space-y-3.5 text-slate-800 font-semibold text-sm">
            <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-amber-600">
              Beranda
            </Link>
            <Link href="/#layanan" onClick={() => setIsOpen(false)} className="hover:text-amber-600">
              Layanan Utama
            </Link>
            <Link href="/#cara-kerja" onClick={() => setIsOpen(false)} className="hover:text-amber-600">
              Cara Kerja & Mesin
            </Link>
            <Link href="/#area" onClick={() => setIsOpen(false)} className="hover:text-amber-600">
              Area Pos Siaga
            </Link>
            <Link href="/#faq" onClick={() => setIsOpen(false)} className="hover:text-amber-600">
              FAQ / Tanya Jawab
            </Link>
            <Link href="/blog" onClick={() => setIsOpen(false)} className="hover:text-amber-600">
              Blog & Tips Pipa
            </Link>
            <Link href="/kontak" onClick={() => setIsOpen(false)} className="hover:text-amber-600">
              Kontak 24 Jam
            </Link>
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-yellow-400 text-slate-950 font-black py-3 rounded-xl shadow-md text-sm"
              >
                <FaWhatsapp className="text-xl" />
                <span>Chat WhatsApp 24 Jam</span>
              </a>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="flex items-center justify-center gap-2 bg-slate-100 text-slate-800 font-bold py-2.5 rounded-xl text-xs"
              >
                <FaPhoneAlt />
                <span>Telepon ({siteConfig.phone})</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}