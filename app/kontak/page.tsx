import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { generateBreadcrumbSchema } from "@/lib/schema";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaClock,
  FaShieldAlt,
  FaEnvelope,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "Kontak Layanan 24 Jam Bandung",
  description:
    "Hubungi teknisi pelancar pipa dan WC Bandung 24 jam. Alamat Jl. Baladewa No.114 Cicendo Bandung. WhatsApp: 0851-2277-7253. Respon cepat 20-45 menit ke lokasi Anda.",
  alternates: {
    canonical: `${siteConfig.domain}/kontak`,
  },
  openGraph: {
    title: "Kontak 24 Jam | perbaikansaluranmampet.com",
    description:
      "Layanan teknisi saluran mampet Bandung 24 jam nonstop. Telepon & WhatsApp siaga setiap hari.",
    url: `${siteConfig.domain}/kontak`,
    siteName: siteConfig.brandName,
    locale: "id_ID",
    type: "website",
  },
};

export default function KontakPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Beranda", url: "/" },
    { name: "Kontak Layanan", url: "/kontak" },
  ]);

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Kontak ${siteConfig.brandName}`,
    url: `${siteConfig.domain}/kontak`,
    mainEntity: {
      "@type": "Plumber",
      "@id": `${siteConfig.domain}/#organization`,
      name: siteConfig.brandName,
      legalName: siteConfig.legalName,
      telephone: siteConfig.phoneRaw,
      priceRange: siteConfig.priceRange,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.province,
        postalCode: siteConfig.address.postalCode,
        addressCountry: siteConfig.address.country,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: siteConfig.address.geo.latitude,
        longitude: siteConfig.address.geo.longitude,
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
      sameAs: [`https://wa.me/${siteConfig.whatsappNumber}`],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navbar />

      {/* HERO */}
      <section className="bg-gradient-to-br from-gray-950 via-purple-950 to-indigo-950 text-white py-20 border-b border-purple-900/40">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-300 text-xs font-bold uppercase tracking-wider mb-6">
            <FaPhoneAlt />
            <span>Call Center Siaga 24 Jam</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Kontak Teknisi Saluran Mampet Bandung
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Butuh penanganan darurat WC mampet atau pipa tersumbat? Teknisi perbaikansaluranmampet.com siap meluncur ke seluruh lokasi Bandung, Cimahi, dan sekitarnya.
          </p>
        </div>
      </section>

      {/* CONTENT GRID */}
      <main className="bg-white py-20 text-gray-800">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* CONTACT INFO CARD */}
          <div className="space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-100 px-3.5 py-1.5 rounded-full">
                Informasi Kontak Resmi
              </span>
              <h2 className="text-3xl font-black text-gray-900 mt-4">
                Hubungi Kami Kapan Saja
              </h2>
              <p className="mt-3 text-gray-600 leading-relaxed text-sm sm:text-base">
                Layanan darurat 24 jam nonstop setiap hari termasuk hari Minggu dan hari libur nasional.
              </p>
            </div>

            <div className="space-y-6">
              {/* WHATSAPP */}
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 flex items-start gap-4">
                <div className="p-3 bg-emerald-100 text-emerald-700 rounded-xl text-2xl flex-shrink-0">
                  <FaWhatsapp />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-base">WhatsApp Fast Response</h3>
                  <p className="text-xs text-gray-500 mb-2">Respon tercepat dalam hitungan menit</p>
                  <a
                    href={`https://wa.me/${siteConfig.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block font-extrabold text-purple-800 text-lg hover:underline"
                  >
                    {siteConfig.phone} (Klik untuk Chat)
                  </a>
                </div>
              </div>

              {/* TELEPON */}
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 flex items-start gap-4">
                <div className="p-3 bg-blue-100 text-blue-700 rounded-xl text-2xl flex-shrink-0">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-base">Telepon Langsung</h3>
                  <p className="text-xs text-gray-500 mb-2">Panggilan darurat pipa meluap</p>
                  <a
                    href={`tel:${siteConfig.phoneRaw}`}
                    className="inline-block font-extrabold text-gray-900 text-lg hover:underline"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </div>

              {/* ALAMAT */}
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 flex items-start gap-4">
                <div className="p-3 bg-purple-100 text-purple-700 rounded-xl text-2xl flex-shrink-0">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-base">Alamat Kantor / Workshop</h3>
                  <p className="text-sm text-gray-700 leading-relaxed mt-1">
                    {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.province} {siteConfig.address.postalCode}
                  </p>
                </div>
              </div>

              {/* JAM KERJA */}
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 flex items-start gap-4">
                <div className="p-3 bg-yellow-100 text-yellow-800 rounded-xl text-2xl flex-shrink-0">
                  <FaClock />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-base">Jam Operasional</h3>
                  <p className="text-sm text-gray-700 mt-1 font-semibold text-emerald-700">
                    Buka 24 Jam Nonstop (Senin - Minggu)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: MAP & GUARANTEE */}
          <div className="space-y-8 flex flex-col justify-between">
            <div className="bg-gradient-to-br from-purple-900 to-indigo-950 text-white p-8 sm:p-10 rounded-3xl shadow-xl space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-yellow-300 bg-yellow-400/20 px-3 py-1 rounded-full">
                Jaminan Kualitas Layanan
              </span>
              <h2 className="text-2xl sm:text-3xl font-black">
                Kenapa Pelanggan Mempercayai perbaikansaluranmampet.com?
              </h2>

              <ul className="space-y-4 text-sm sm:text-base text-gray-200">
                <li className="flex items-start gap-3">
                  <FaShieldAlt className="text-yellow-400 mt-1 flex-shrink-0" />
                  <span><strong>Metode Tanpa Bongkar:</strong> Menggunakan mesin spiral elektrik baja lentur tanpa merusak ubin keramik.</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaShieldAlt className="text-yellow-400 mt-1 flex-shrink-0" />
                  <span><strong>Sistem Lancar Baru Bayar:</strong> Pembayaran dilakukan setelah Anda memverifikasi air mengalir tuntas.</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaShieldAlt className="text-yellow-400 mt-1 flex-shrink-0" />
                  <span><strong>Teknisi Berpengalaman:</strong> Terlatih menangani instalasi pipa rumit rumah tinggal hingga restoran besar.</span>
                </li>
              </ul>

              <div className="pt-4">
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-gray-950 font-black py-4 rounded-2xl text-base shadow-lg transition"
                >
                  <FaWhatsapp className="text-2xl" />
                  <span>Order Teknisi Sekarang</span>
                </a>
              </div>
            </div>

            {/* AREA LINKS BOX */}
            <div className="p-6 rounded-3xl bg-gray-50 border border-gray-200 text-xs sm:text-sm text-gray-700">
              <p className="font-bold text-gray-900 mb-2">
                Pos Siaga Teknisi di Seluruh Wilayah Bandung:
              </p>
              <p className="leading-relaxed">
                Cicendo, Sukajadi, Buah Batu, Antapani, Arcamanik, Dago, Cileunyi, Ujungberung, dan Kota Cimahi.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}