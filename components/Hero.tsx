"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaStar,
  FaClock,
  FaShieldAlt,
  FaTools,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaToilet,
  FaSink,
  FaShower,
  FaWater,
  FaUtensils,
} from "react-icons/fa";

export default function Hero() {
  const [selectedService, setSelectedService] = useState("WC Mampet");
  const [selectedArea, setSelectedArea] = useState("Kota Bandung");

  const serviceOptions = [
    { label: "WC Mampet", icon: <FaToilet className="text-amber-500" /> },
    { label: "Wastafel Dapur", icon: <FaSink className="text-amber-500" /> },
    { label: "Floor Drain Mandi", icon: <FaShower className="text-amber-500" /> },
    { label: "Got / Talang Atap", icon: <FaWater className="text-amber-500" /> },
    { label: "Grease Trap Resto", icon: <FaUtensils className="text-amber-500" /> },
  ];

  const areaOptions = [
    "Kota Bandung",
    "Cimahi",
    "Sukajadi / Pasteur",
    "Cicendo / Padjajaran",
    "Dago / Coblong",
    "Antapani / Arcamanik",
    "Buah Batu / Batununggal",
    "Cileunyi / Cibiru",
    "Bandung Barat / Selatan",
  ];

  const waOrderUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    `Halo Teknisi perbaikansaluranmampet.com, saya butuh penanganan darurat: ${selectedService} di area ${selectedArea}. Mohon respon cepat dan estimasi kedatangan.`
  )}`;

  return (
    <section className="relative bg-slate-950 text-white pt-12 pb-16 lg:pt-16 lg:pb-20 overflow-hidden font-sans border-b border-slate-800">
      {/* 🟢 SEO SCHEMA (LocalBusiness) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Plumber",
            name: "perbaikansaluranmampet.com - Perbaikan Saluran Mampet Bandung",
            image: "https://perbaikansaluranmampet.com/hero.png",
            telephone: "085122777253",
            url: "https://perbaikansaluranmampet.com",
            priceRange: "Rp 150.000 - Rp 1.000.000",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Jl. Baladewa No.114",
              addressLocality: "Bandung",
              postalCode: "40173",
              addressCountry: "ID",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: -6.9175,
              longitude: 107.6191,
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "00:00",
              closes: "23:59",
            },
            areaServed: [
              "Bandung Kota",
              "Cimahi",
              "Antapani",
              "Dago",
              "Buah Batu",
              "Setiabudi",
              "Cikutra",
              "Lembang",
              "Baleendah",
              "Cileunyi",
            ],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "194",
            },
          }),
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* TOP BALANCED 2-COLUMN GRID */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* ============================================================ */}
          {/* LEFT COLUMN: Headings, Value Prop & Direct Action           */}
          {/* ============================================================ */}
          <div className="lg:col-span-7 space-y-6 lg:space-y-7">
            {/* Live Operational Status Tag */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-slate-900 border border-slate-800 rounded-full text-xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <p className="text-slate-300 font-bold uppercase tracking-wider text-[11px]">
                Pos Siaga Bandung Online • Tiba 20–45 Menit
              </p>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-white">
                Solusi Ahli Saluran Air &amp; <br />
                <span className="text-yellow-400">WC Mampet di Bandung</span>
              </h1>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
                Penanganan kilat pipa wastafel, kloset WC, dan saluran pembuangan air kotor meluap. Dikerjakan menggunakan mesin spiral drain cleaner, <strong>100% tanpa merusak keramik</strong>, dan sistem <strong>Lancar Baru Bayar</strong>.
              </p>
            </div>

            {/* Direct Contact Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={waOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-yellow-400 text-slate-950 px-8 py-4 rounded-xl font-black text-base shadow-xl hover:bg-yellow-500 transition-all active:scale-95"
              >
                <FaWhatsapp className="text-2xl text-slate-950" />
                <span>Order Teknisi via WhatsApp</span>
              </a>

              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl transition text-slate-200 hover:text-white font-bold text-sm"
              >
                <FaPhoneAlt className="text-amber-400 text-xs" />
                <span>Telepon: {siteConfig.phone}</span>
              </a>
            </div>

            {/* Social Proof Rating */}
            <div className="pt-3 flex items-center gap-3 text-xs sm:text-sm text-slate-400">
              <div className="flex text-amber-400 text-sm gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <span className="font-semibold text-slate-300">
                4.9 / 5.0 (194+ Ulasan Pelanggan se-Bandung Raya)
              </span>
            </div>
          </div>

          {/* ============================================================ */}
          {/* RIGHT COLUMN: Interactive Quick Request / Booking Card       */}
          {/* Replaces the awkward flyer image with an engaging UI element  */}
          {/* ============================================================ */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              
              {/* Header Card */}
              <div className="border-b border-slate-800 pb-4 mb-5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-yellow-400 bg-yellow-400/10 border border-yellow-400/20 px-2.5 py-1 rounded-full">
                    Panggilan Kilat 24 Jam
                  </span>
                  <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Teknisi Siaga
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-black text-white mt-2 leading-snug">
                  Cek Estimasi &amp; Panggil Teknisi
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Pilih masalah dan lokasi Anda untuk respon prioritas:
                </p>
              </div>

              {/* Step 1: Select Service Issue */}
              <div className="space-y-2 mb-5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block">
                  1. Jenis Saluran yang Mampet:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {serviceOptions.map((opt) => {
                    const isSelected = selectedService === opt.label;
                    return (
                      <button
                        key={opt.label}
                        type="button"
                        onClick={() => setSelectedService(opt.label)}
                        className={`flex items-center gap-2 p-2.5 rounded-xl border text-xs font-semibold text-left transition ${
                          isSelected
                            ? "bg-amber-400/15 border-yellow-400 text-yellow-300 shadow-sm"
                            : "bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700"
                        }`}
                      >
                        <span className="text-sm">{opt.icon}</span>
                        <span className="truncate">{opt.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Select Area */}
              <div className="space-y-2 mb-6">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block">
                  2. Lokasi / Area Anda di Bandung:
                </label>
                <div className="relative">
                  <select
                    value={selectedArea}
                    onChange={(e) => setSelectedArea(e.target.value)}
                    className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-yellow-400 cursor-pointer"
                  >
                    {areaOptions.map((area) => (
                      <option key={area} value={area} className="bg-slate-900 text-white">
                        {area}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Action Button */}
              <div className="space-y-3">
                <a
                  href={waOrderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 bg-yellow-400 hover:bg-yellow-500 text-slate-950 py-3.5 px-4 rounded-xl font-black text-sm shadow-lg transition active:scale-95"
                >
                  <FaWhatsapp className="text-xl" />
                  <span>Kirim Panggilan via WhatsApp</span>
                </a>

                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1 font-medium">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <FaCheckCircle className="text-xs" />
                    <span>Lancar Baru Bayar</span>
                  </span>
                  <span>Estimasi Tiba: 20–45 Menit</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* ============================================================ */}
        {/* BOTTOM FULL-WIDTH TRUST STRIP                                */}
        {/* Balances the entire hero section horizontally               */}
        {/* ============================================================ */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              icon: <FaClock className="text-yellow-400 text-xl" />,
              title: "Tiba 20–45 Menit",
              desc: "Pos teknisi siaga di seluruh penjuru Bandung",
            },
            {
              icon: <FaShieldAlt className="text-yellow-400 text-xl" />,
              title: "Lancar Baru Bayar",
              desc: "Tidak bayar jika saluran belum mengalir lancar",
            },
            {
              icon: <FaTools className="text-yellow-400 text-xl" />,
              title: "100% Tanpa Bongkar",
              desc: "Mesin kawat spiral baja, keramik tetap utuh",
            },
            {
              icon: <FaCheckCircle className="text-yellow-400 text-xl" />,
              title: "Garansi Pengerjaan",
              desc: "Pemberian garansi resmi purna penanganan",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80"
            >
              <div className="mt-0.5">{item.icon}</div>
              <div>
                <h4 className="font-extrabold text-white text-xs sm:text-sm">
                  {item.title}
                </h4>
                <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
