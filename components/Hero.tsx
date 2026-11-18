"use client";

import { FaWhatsapp, FaCheckCircle, FaClock, FaMapMarkerAlt, FaShieldAlt, FaTools } from "react-icons/fa";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-[#0b0816] text-white py-16 lg:py-24 overflow-hidden font-sans">
      {/* 🟢 SEO SCHEMA (LocalBusiness) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Plumber",
            "name": "perbaikansaluranmampet.com - Perbaikan Saluran Mampet Bandung",
            "image": "https://perbaikansaluranmampet.com/hero.png",
            "telephone": "085122777253",
            "url": "https://perbaikansaluranmampet.com",
            "priceRange": "Rp 200.000 - Rp 1.000.000",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Jl. Baladewa No.114",
              "addressLocality": "Bandung",
              "postalCode": "40173",
              "addressCountry": "ID"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": -6.9175,
              "longitude": 107.6191
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "00:00",
              "closes": "23:59"
            },
            "areaServed": [
              "Bandung Kota", "Cimahi", "Antapani", "Dago", "Buah Batu", "Setiabudi", "Cikutra", "Lembang", "Baleendah", "Cileunyi"
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "187"
            },
            "review": [
              {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Budi Santoso" },
                "reviewRating": { "@type": "Rating", "ratingValue": "5" },
                "reviewBody": "Sangat cepat dan profesional. Saluran WC mampet langsung lancar tanpa bongkar."
              }
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "085122777253",
              "contactType": "customer service",
              "areaServed": "ID",
              "availableLanguage": ["Indonesian"]
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Layanan Perbaikan Saluran",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Jasa WC Mampet Bandung"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Jasa Wastafel Mampet Tanpa Bongkar"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Pembersihan Pipa Air Kotor"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Sedot Lemak/Grease Trap Restoran"
                  }
                }
              ]
            }
          })
        }}
      />

      {/* Background Depth */}
      <div className="absolute inset-0 bg-slate-950 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE: PROPORTIONAL CONTENT */}
          <div className="space-y-8 lg:space-y-10">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-slate-900 border border-slate-800 rounded-full text-xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <p className="text-slate-300 font-bold uppercase tracking-wider text-[11px]">
                Pos Siaga Bandung Online • Tiba 20–45 Menit
              </p>
            </div>

            <div className="space-y-5">
              <h1 className="text-4xl lg:text-6xl font-black leading-tight tracking-tighter text-white">
                Jasa Saluran <br />
                <span className="text-yellow-400">Mampet Bandung</span>
              </h1>
              <p className="text-base lg:text-lg text-slate-300 max-w-xl leading-relaxed font-normal">
                Solusi profesional pelancar <strong>WC mampet</strong>, wastafel tersumbat, dan saluran pipa air kotor di Bandung Raya. Pengerjaan cepat menggunakan mesin spiral, <strong>100% tanpa bongkar keramik</strong>, dan sistem <strong>Lancar Baru Bayar</strong>.
              </p>
            </div>

            {/* TRUST INDICATORS GRID */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3 pt-1">
              {[
                { icon: <FaClock className="text-yellow-400" />, text: "Respon 20-45 Mnt", sub: "Siaga 24 Jam" },
                { icon: <FaShieldAlt className="text-yellow-400" />, text: "Lancar Baru Bayar", sub: "Garansi Resmi" },
                { icon: <FaTools className="text-yellow-400" />, text: "Mesin Drain Snake", sub: "Teknologi Modern" },
                { icon: <FaCheckCircle className="text-yellow-400" />, text: "Tanpa Bongkar", sub: "Keramik Utuh" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                  <div className="text-base sm:text-lg mt-0.5">{item.icon}</div>
                  <div>
                    <span className="font-extrabold text-white text-xs sm:text-sm block leading-tight">{item.text}</span>
                    <span className="text-[10px] sm:text-[11px] text-slate-400 font-medium">{item.sub}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* CALL TO ACTION - Clean & single primary action on mobile */}
            <div className="pt-2">
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/6285122777253"
                  className="flex items-center justify-center gap-3 bg-yellow-400 text-slate-950 px-8 py-3.5 sm:py-4 rounded-xl font-black text-sm sm:text-base shadow-lg hover:bg-yellow-500 transition-all active:scale-95"
                >
                  <FaWhatsapp className="text-xl sm:text-2xl" />
                  <span>Hubungi Teknisi via WhatsApp</span>
                </a>
                <a
                  href="#layanan"
                  className="hidden sm:flex items-center justify-center gap-3 px-6 py-4 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl transition text-slate-200 hover:text-white font-bold text-sm"
                >
                  <FaMapMarkerAlt className="text-yellow-400" />
                  <span>Lihat Layanan & Tarif</span>
                </a>
              </div>

              {/* Minimal text link on mobile instead of stacked bulky second button */}
              <div className="sm:hidden text-center mt-3">
                <a
                  href="#layanan"
                  className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-yellow-400 font-medium underline underline-offset-4"
                >
                  <span>Lihat Layanan & Estimasi Biaya</span>
                  <span>↓</span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: FLYER IMAGE */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative group rounded-3xl overflow-hidden shadow-2xl border border-slate-800 max-w-lg">
              <Image
                src="/hero.png"
                alt="Jasa Saluran Mampet Bandung Tanpa Bongkar"
                width={850}
                height={850}
                className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-102"
                priority
              />
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </section>
  );
}