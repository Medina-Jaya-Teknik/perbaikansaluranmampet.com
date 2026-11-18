"use client";

import { siteConfig } from "@/config/site";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function FloatingWhatsApp() {
  const waUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    "Halo Teknisi perbaikansaluranmampet.com, saya butuh bantuan darurat perbaikan saluran mampet di Bandung."
  )}`;

  return (
    <>
      {/* ============================================================ */}
      {/* MOBILE EMERGENCY BOTTOM ACTION BAR (< md)                    */}
      {/* Optimized for emergency conversion with 1-tap call & WA     */}
      {/* ============================================================ */}
      <aside
        aria-label="Kontak Cepat Teknisi"
        className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-slate-950/95 backdrop-blur-lg border-t border-slate-800 px-4 py-2.5 shadow-[0_-10px_25px_rgba(0,0,0,0.5)]"
      >
        <div className="flex items-center gap-2 max-w-md mx-auto">
          {/* Quick Call Button */}
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 active:scale-95 transition"
            aria-label="Telepon Teknisi Langsung"
          >
            <FaPhoneAlt className="text-amber-400 text-sm" />
            <span>Telepon</span>
          </a>

          {/* Quick WhatsApp Button */}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-[2] flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-yellow-400 hover:bg-yellow-500 text-slate-950 font-black text-xs shadow-lg active:scale-95 transition"
            aria-label="Chat WhatsApp Teknisi 24 Jam"
          >
            <FaWhatsapp className="text-lg text-emerald-800" />
            <span>Chat WhatsApp 24 Jam</span>
          </a>
        </div>
      </aside>

      {/* ============================================================ */}
      {/* DESKTOP FLOATING PILL (>= md)                                */}
      {/* Elegant, unobtrusive floating pill with live status          */}
      {/* ============================================================ */}
      <div className="hidden md:block fixed bottom-6 right-6 z-50">
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 bg-slate-950/95 text-white pl-4 pr-5 py-3 rounded-full border border-slate-700 shadow-2xl hover:border-yellow-400 hover:bg-slate-900 transition-all duration-300 hover:-translate-y-1"
          aria-label="Chat WhatsApp Teknisi Saluran Mampet Bandung"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-emerald-500 text-white text-xl flex-shrink-0 group-hover:bg-emerald-400 transition">
            <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-slate-950"></span>
            </span>
            <FaWhatsapp />
          </div>

          <div className="text-left">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block leading-tight">
              Teknisi Siaga 24 Jam
            </span>
            <span className="text-xs font-black text-white group-hover:text-yellow-400 transition">
              Chat WA: {siteConfig.phone}
            </span>
          </div>
        </a>
      </div>
    </>
  );
}
