"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
  FaChevronRight,
  FaShieldAlt,
} from "react-icons/fa";

export default function AreaSection() {
  const [showAll, setShowAll] = useState(false);
  const areas = siteConfig.areas;
  const visibleAreas = showAll ? areas : areas.slice(0, 6);

  return (
    <section className="py-20 bg-slate-50" id="area">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-200/80 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4">
            <FaMapMarkerAlt />
            <span>Jangkauan Wilayah Bandung Raya</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Pos Siaga Teknisi Terdekat di Lokasi Anda
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg leading-relaxed">
            Teknisi kami tersebar di berbagai koridor strategis Kota Bandung, Cimahi, dan Bandung Barat untuk memastikan estimasi tiba hanya dalam 20–45 menit.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {visibleAreas.map((area) => (
            <div
              key={area.slug}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-amber-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center text-sm font-bold">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-slate-900 group-hover:text-amber-700 transition">
                        {area.name}
                      </h3>
                      <p className="text-[11px] text-slate-500 font-semibold">{area.fullName}</p>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                    <FaClock className="text-[10px]" />
                    <span>20-45 mnt</span>
                  </span>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
                  {area.description}
                </p>

                <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 space-y-1 mb-5">
                  <p className="font-semibold text-slate-700">Patokan / Koridor:</p>
                  <p className="line-clamp-1 text-slate-600">{area.landmark}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                    `Halo Teknisi perbaikansaluranmampet.com, saya butuh bantuan perbaikan saluran mampet di area ${area.name}, Bandung (${area.landmark}).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-amber-400 hover:text-slate-950 text-white font-bold text-xs transition"
                >
                  <FaWhatsapp className="text-sm text-emerald-400 group-hover:text-slate-950" />
                  <span>Order Pos Ini</span>
                </a>

                <Link
                  href={`/kota/${area.slug}`}
                  className="p-2.5 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition"
                  title={`Detail Layanan ${area.name}`}
                  aria-label={`Detail Layanan ${area.name}`}
                >
                  <FaChevronRight className="text-xs" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Toggle Button */}
        {areas.length > 6 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-slate-900 text-slate-900 font-extrabold text-sm hover:bg-slate-900 hover:text-white transition"
            >
              <span>{showAll ? "Tampilkan Lebih Sedikit Area" : `Tampilkan Seluruh ${areas.length} Area Pos Siaga`}</span>
            </button>
          </div>
        )}

        {/* Trust Highlight Box */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-yellow-400/20 text-amber-700 flex items-center justify-center text-lg flex-shrink-0">
              <FaShieldAlt />
            </div>
            <div>
              <p className="font-extrabold text-slate-900 text-sm">
                Lokasi Anda belum tercantum di daftar di atas?
              </p>
              <p className="text-xs text-slate-600">
                Kami melayani seluruh 30 kecamatan di Bandung Raya, Cimahi, Padalarang, Soreang, hingga Cileunyi.
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
              "Halo Teknisi perbaikansaluranmampet.com, apakah bisa melayani panggilan saluran mampet ke alamat saya di Bandung?"
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-slate-950 font-bold px-5 py-2.5 rounded-xl text-xs transition"
          >
            <FaWhatsapp className="text-sm" />
            <span>Tanyakan Lokasi Saya via WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
