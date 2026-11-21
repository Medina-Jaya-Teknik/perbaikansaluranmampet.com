"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  FaToilet,
  FaSink,
  FaShower,
  FaWater,
  FaUtensils,
  FaCheckCircle,
  FaWhatsapp,
  FaArrowRight,
} from "react-icons/fa";

export default function ServicesGrid() {
  const serviceIcons: Record<string, React.ReactNode> = {
    "wc-mampet": <FaToilet className="text-2xl text-amber-600" />,
    "wastafel-mampet": <FaSink className="text-2xl text-amber-600" />,
    "floor-drain-kamar-mandi": <FaShower className="text-2xl text-amber-600" />,
    "got-talang-air": <FaWater className="text-2xl text-amber-600" />,
    "grease-trap-restoran": <FaUtensils className="text-2xl text-amber-600" />,
  };

  return (
    <section className="py-20 bg-white" id="layanan">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4">
            <span>Katalog Layanan Utama</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Solusi Masalah Saluran Air & WC Mampet Bandung
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Dikerjakan oleh teknisi bersertifikasi menggunakan mesin spiral elektrik lentur tanpa merusak nat keramik dan bergaransi resmi tuntas.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {siteConfig.services.map((srv) => {
            const waOrderUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
              `Halo Teknisi perbaikansaluranmampet.com, saya ingin order layanan: ${srv.name}. Lokasi saya di Bandung.`
            )}`;

            return (
              <div
                key={srv.id}
                className="bg-slate-50/70 border border-slate-200/90 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-amber-400 hover:shadow-lg hover:bg-white transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-amber-100/70 flex items-center justify-center group-hover:bg-amber-100 transition">
                      {serviceIcons[srv.id] || <FaWater className="text-2xl text-amber-600" />}
                    </div>
                    <span className="text-xs font-black px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                      {srv.price}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-slate-900 mb-2 leading-snug group-hover:text-amber-700 transition">
                    <Link href="/layanan/saluran-mampet-bandung">
                      {srv.name}
                    </Link>
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-5">
                    {srv.shortDesc}
                  </p>

                  <ul className="space-y-2 pt-4 border-t border-slate-200/80 mb-6">
                    {srv.features.slice(0, 3).map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                        <FaCheckCircle className="text-emerald-600 flex-shrink-0 text-xs" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <a
                    href={waOrderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-white font-bold text-xs sm:text-sm transition-all duration-200 shadow-sm"
                  >
                    <FaWhatsapp className="text-base text-emerald-400 group-hover:text-slate-950" />
                    <span>Panggil Teknisi via WA</span>
                  </a>
                </div>
              </div>
            );
          })}

          {/* Quick Consultation Highlight Card */}
          <div className="bg-slate-950 text-white rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-slate-800 shadow-lg relative overflow-hidden">
            <div className="space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-yellow-300 bg-yellow-400/10 border border-yellow-400/20 px-2.5 py-1 rounded-full inline-block">
                Konsultasi Kasus Khusus
              </span>
              <h3 className="text-xl font-black text-white leading-snug">
                Punya Kendala Pipa Lain di Rumah Anda?
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Kirim foto atau video saluran air yang mampet ke WhatsApp kami. Tim kami memberikan estimasi gratis dan solusi tanpa bongkar dalam 5 menit.
              </p>
            </div>

            <div className="pt-6">
              <Link
                href="/layanan"
                className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-yellow-400 hover:bg-yellow-500 text-slate-950 font-black text-xs sm:text-sm transition"
              >
                <span>Lihat Seluruh Layanan & Tarif</span>
                <FaArrowRight className="text-xs" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
