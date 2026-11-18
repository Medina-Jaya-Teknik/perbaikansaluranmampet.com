import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { generateBreadcrumbSchema } from "@/lib/schema";
import {
  FaShieldAlt,
  FaTools,
  FaUserTie,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Profil perbaikansaluranmampet.com: penyedia layanan pelancar pipa profesional di Bandung dengan pengalaman 10+ tahun, peralatan modern tanpa bongkar, dan garansi resmi.",
  alternates: {
    canonical: `${siteConfig.domain}/tentang`,
  },
  openGraph: {
    title: "Tentang Kami | perbaikansaluranmampet.com",
    description:
      "Profil perbaikansaluranmampet.com: spesialis saluran mampet dan WC tersumbat di Bandung tanpa bongkar.",
    url: `${siteConfig.domain}/tentang`,
    siteName: siteConfig.brandName,
    locale: "id_ID",
    type: "website",
  },
};

export default function TentangPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Beranda", url: "/" },
    { name: "Tentang Kami", url: "/tentang" },
  ]);

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: `Tentang Kami - ${siteConfig.brandName}`,
    url: `${siteConfig.domain}/tentang`,
    mainEntity: {
      "@type": "Plumber",
      name: siteConfig.brandName,
      legalName: siteConfig.legalName,
      telephone: siteConfig.phoneRaw,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.province,
        postalCode: siteConfig.address.postalCode,
        addressCountry: siteConfig.address.country,
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navbar />

      {/* HERO */}
      <section className="bg-slate-950 text-white py-20 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-300 text-xs font-bold uppercase tracking-wider mb-6">
            <FaUserTie />
            <span>Profil Perusahaan & Teknisi</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Tentang perbaikansaluranmampet.com
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Dedikasi kami selama lebih dari 10 tahun adalah menghadirkan solusi saluran mampet profesional, cepat, higienis, dan 100% tanpa merusak lantai keramik di seluruh Bandung Raya.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <main className="bg-white py-20 text-gray-800">
        <div className="max-w-5xl mx-auto px-6 space-y-16">
          {/* PROFILE STORY */}
          <section className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-extrabold text-gray-900 leading-snug">
                Solusi Ahli Plambing Terpercaya di Kota Bandung
              </h2>
              <p className="text-gray-700 leading-relaxed">
                <strong>perbaikansaluranmampet.com</strong> berawal dari komitmen untuk mengatasi masalah klasik saluran air tersumbat yang sering kali merepotkan pemilik rumah dan pengusaha di Bandung. Di masa lalu, saluran mampet selalu identik dengan membongkar lantai keramik dan memakan biaya renovasi besar.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Kami mengubah paradigma tersebut dengan berinvestasi pada teknologi <em>modern rigid drain cleaner</em> kawat baja fleksibel. Hasilnya, lebih dari 95% masalah saluran pipa wastafel, kloset WC, dan floor drain dapat diselesaikan langsung dari luar tanpa merusak nat keramik maupun dinding sedikit pun.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 text-white p-8 sm:p-10 rounded-3xl shadow-xl space-y-6">
              <h3 className="text-2xl font-bold text-yellow-300">
                Prinsip Layanan perbaikansaluranmampet.com:
              </h3>
              <ul className="space-y-4 text-sm sm:text-base">
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-yellow-400 mt-1 flex-shrink-0" />
                  <span><strong>Lancar Baru Bayar:</strong> Tidak ada biaya jasa jika saluran air tidak berhasil kami tuntaskan.</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-yellow-400 mt-1 flex-shrink-0" />
                  <span><strong>100% Tanpa Bongkar:</strong> Menjaga keindahan keramik dan struktur lantai rumah Anda.</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-yellow-400 mt-1 flex-shrink-0" />
                  <span><strong>Harga Transparan di Awal:</strong> Bebas biaya siluman dan kepastian tarif sebelum teknisi bekerja.</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-yellow-400 mt-1 flex-shrink-0" />
                  <span><strong>Garansi Pengerjaan Resmi:</strong> Jaminan saluran tetap lancar pasca penanganan.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* WORKSHOP & NAP CARD */}
          <section className="p-8 sm:p-10 rounded-3xl bg-gray-50 border border-gray-200 grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-amber-700 font-bold text-xs uppercase tracking-wider">
                <FaMapMarkerAlt />
                <span>Pusat Pangkalan Teknisi</span>
              </div>
              <h3 className="text-2xl font-black text-gray-900">
                Kantor Operasional Bandung
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.province} {siteConfig.address.postalCode}.
              </p>
              <p className="text-gray-600 text-xs leading-relaxed">
                Pangkalan teknisi kami di kawasan Cicendo memudahkan mobilisasi cepat ke wilayah Kota Bandung bagian utara, tengah, selatan, timur, barat, hingga Kota Cimahi.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-6 py-4 bg-yellow-400 hover:bg-yellow-500 text-gray-950 font-black rounded-2xl shadow-md transition"
              >
                <FaWhatsapp className="text-xl" />
                <span>Chat WhatsApp 24 Jam</span>
              </a>

              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="flex items-center justify-center gap-3 px-6 py-4 bg-white hover:bg-gray-100 border border-gray-300 text-gray-800 font-bold rounded-2xl transition"
              >
                <FaPhoneAlt />
                <span>{siteConfig.phone}</span>
              </a>
            </div>
          </section>

          {/* INTERNAL LINKS */}
          <section className="pt-6 border-t border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Jelajahi Informasi Layanan & Panduan Terkait:
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Ketahui lebih dalam mengenai{" "}
              <Link href="/layanan" className="text-slate-900 font-bold hover:text-amber-600 underline underline-offset-2">
                Katalog Layanan Plambing
              </Link>
              , cek tarif di artikel{" "}
              <Link href="/blog/biaya-jasa-saluran-mampet-bandung" className="text-slate-900 font-bold hover:text-amber-600 underline underline-offset-2">
                Biaya Saluran Mampet Bandung
              </Link>
              , atau lihat pos siaga kami di{" "}
              <Link href="/kota/bandung" className="text-slate-900 font-bold hover:text-amber-600 underline underline-offset-2">
                Area Kota Bandung
              </Link>
              .
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}