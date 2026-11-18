"use client";

import Image from "next/image";
import { siteConfig } from "@/config/site";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaCheckCircle,
  FaClock,
  FaShieldAlt,
  FaTools,
  FaStar,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Hero() {
  const waUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    "Halo Teknisi perbaikansaluranmampet.com, saya butuh bantuan darurat perbaikan saluran mampet di Bandung. Mohon info estimasi kedatangan."
  )}`;

  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-white to-white text-slate-900 pt-10 pb-16 lg:pt-14 lg:pb-20 border-b border-slate-200">
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

      <div className="max-w-7xl mx-auto px-6">
        {/* MAIN 2-COLUMN BALANCED HERO */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* ============================================================ */}
          {/* LEFT: Human, Grounded Headline & Call To Action              */}
          {/* ============================================================ */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Operational Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-amber-100/80 border border-amber-300/80 rounded-full text-xs text-amber-900 font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              <span>Layanan Cepat 24 Jam Bandung • Respon 20–45 Menit</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Jasa Pelancar Saluran Air &amp; <br />
                <span className="text-amber-600">WC Mampet di Bandung</span>
              </h1>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
                Atasi kloset tersumbat, wastafel cuci piring meluap, got buntu, dan floor drain kamar mandi tanpa repot. Pengerjaan cepat dengan mesin spiral elektrik baja, <strong>100% tanpa merusak keramik</strong>, dan sistem <strong>Lancar Baru Bayar</strong>.
              </p>
            </div>

            {/* Direct Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-amber-400 hover:bg-amber-500 text-slate-950 px-8 py-4 rounded-xl font-black text-base shadow-md hover:shadow-lg transition active:scale-95"
              >
                <FaWhatsapp className="text-2xl text-slate-950" />
                <span>Hubungi via WhatsApp</span>
              </a>

              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold text-sm shadow-sm transition active:scale-95"
              >
                <FaPhoneAlt className="text-amber-400 text-xs" />
                <span>Telepon: {siteConfig.phone}</span>
              </a>
            </div>

            {/* Key Bullet Guarantees */}
            <div className="pt-2 space-y-2 text-xs sm:text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-emerald-600 text-sm flex-shrink-0" />
                <span><strong>Sistem Lancar Baru Bayar:</strong> Pembayaran dilakukan setelah air mengalir lancar tuntas.</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-emerald-600 text-sm flex-shrink-0" />
                <span><strong>Biaya Transparan di Awal:</strong> Mulai Rp 150.000 tanpa biaya tersembunyi.</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-emerald-600 text-sm flex-shrink-0" />
                <span><strong>Cakupan Seluruh Bandung &amp; Cimahi:</strong> Pos siaga terdekat siap meluncur 24 jam.</span>
              </div>
            </div>

            {/* Social Proof */}
            <div className="pt-1 flex items-center gap-2 text-xs text-slate-500">
              <div className="flex text-amber-500 text-sm gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <span className="font-semibold text-slate-700">
                4.9 / 5.0 rating kepuasan (194+ ulasan pelanggan di Bandung)
              </span>
            </div>

          </div>

          {/* ============================================================ */}
          {/* RIGHT: Authentic Equipment & Real Technician Image Card      */}
          {/* ============================================================ */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl bg-white group">
              
              {/* Technician Photo */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <Image
                  src="/teknisi.jpg"
                  alt="Teknisi profesional pelancar pipa saluran mampet Bandung menggunakan mesin drain snake"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover group-hover:scale-102 transition-transform duration-500"
                  priority
                />
                
                {/* Floating Badge Top Right */}
                <div className="absolute top-4 right-4 bg-slate-900/90 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-md border border-slate-700">
                  <FaShieldAlt className="text-yellow-400 text-xs" />
                  <span>Garansi Resmi</span>
                </div>
              </div>

              {/* Bottom Card Context */}
              <div className="p-5 sm:p-6 bg-white space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/80">
                    Peralatan Berstandar Industri
                  </span>
                  <span className="text-xs text-emerald-700 font-bold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    100% Tanpa Bongkar
                  </span>
                </div>

                <h3 className="font-extrabold text-base text-slate-900 leading-snug">
                  Mesin Drain Cleaner Baja Spiral Otomatis
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Kawat spiral lentur berputar melumat kerak lemak, sisa makanan, dan gumpalan kotoran langsung dari lubang pipa hingga sejauh 30 meter.
                </p>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                  <span className="flex items-center gap-1">
                    <FaMapMarkerAlt className="text-amber-600" />
                    <span>Pangkalan Cicendo, Bandung</span>
                  </span>
                  <span className="text-slate-800 font-bold">Respon 20–45 Mnt</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* ============================================================ */}
        {/* BOTTOM HORIZONTAL 4-PILLAR TRUST BAR                         */}
        {/* ============================================================ */}
        <div className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              icon: <FaClock className="text-amber-600 text-xl" />,
              title: "Tiba 20–45 Menit",
              desc: "Pos teknisi siaga di seluruh penjuru Bandung",
            },
            {
              icon: <FaShieldAlt className="text-emerald-600 text-xl" />,
              title: "Lancar Baru Bayar",
              desc: "Tanpa biaya jika air belum mengalir tuntas",
            },
            {
              icon: <FaTools className="text-amber-600 text-xl" />,
              title: "100% Tanpa Bongkar",
              desc: "Keramik dan dinding rumah tetap utuh rapi",
            },
            {
              icon: <FaCheckCircle className="text-emerald-600 text-xl" />,
              title: "Garansi Pengerjaan",
              desc: "Jaminan kepuasan dan pipa mengalir lancar",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm"
            >
              <div className="mt-0.5">{item.icon}</div>
              <div>
                <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm">
                  {item.title}
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
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
