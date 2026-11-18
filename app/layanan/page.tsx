import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { generateBreadcrumbSchema } from "@/lib/schema";
import {
  FaCheckCircle,
  FaWhatsapp,
  FaPhoneAlt,
  FaShieldAlt,
  FaTools,
  FaToilet,
  FaSink,
  FaShower,
  FaWater,
  FaUtensils,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "Layanan Pelancar Pipa & WC Bandung Tanpa Bongkar 24 Jam",
  description:
    "Layanan lengkap pelancar pipa wastafel tersumbat, WC mampet, got, dan sedot lemak grease trap di Bandung. Cepat, bergaransi, 100% tanpa bongkar lantai.",
  alternates: {
    canonical: `${siteConfig.domain}/layanan`,
  },
  openGraph: {
    title: "Layanan Pelancar Pipa & WC Bandung | perbaikansaluranmampet.com",
    description:
      "Perbaikan WC mampet, wastafel tersumbat, dan saluran air buangan rumah tangga & restoran di Bandung tanpa bongkar.",
    url: `${siteConfig.domain}/layanan`,
    siteName: siteConfig.brandName,
    locale: "id_ID",
    type: "website",
  },
};

export default function LayananPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Beranda", url: "/" },
    { name: "Layanan Saluran Mampet", url: "/layanan" },
  ]);

  const serviceIcons: Record<string, React.ReactNode> = {
    "wc-mampet": <FaToilet className="text-3xl text-amber-600" />,
    "wastafel-mampet": <FaSink className="text-3xl text-amber-600" />,
    "floor-drain-kamar-mandi": <FaShower className="text-3xl text-amber-600" />,
    "got-talang-air": <FaWater className="text-3xl text-amber-600" />,
    "grease-trap-restoran": <FaUtensils className="text-3xl text-amber-600" />,
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    "@id": `${siteConfig.domain}/layanan#serviceCatalog`,
    name: siteConfig.brandName,
    url: `${siteConfig.domain}/layanan`,
    telephone: siteConfig.phoneRaw,
    image: `${siteConfig.domain}/hero.png`,
    description:
      "Layanan spesialis perbaikan saluran mampet, wastafel, floor drain, dan sedot pipa kotor tanpa bongkar di seluruh Kota Bandung.",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.province,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    areaServed: siteConfig.areas.map((a) => ({
      "@type": "AdministrativeArea",
      name: a.fullName,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Katalog Layanan Saluran Mampet Bandung",
      itemListElement: siteConfig.services.map((srv) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: srv.name,
          description: srv.shortDesc,
          offers: {
            "@type": "Offer",
            price: srv.price,
            priceCurrency: "IDR",
          },
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
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
            <FaTools />
            <span>Spesialis Pelancar Pipa & WC Bandung</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Layanan Jasa Saluran Mampet di Bandung
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Solusi tuntas untuk segala jenis saluran air buangan tersumbat di rumah, ruko, restoran, kosan, maupun gedung komersial di seluruh Bandung. Tanpa bongkar, pengerjaan cepat, dan bergaransi resmi.
          </p>
        </div>
      </section>

      {/* SERVICES LIST */}
      <main className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Daftar Layanan Perbaikan Unggulan
            </h2>
            <p className="mt-3 text-gray-600">
              Setiap pekerjaan didukung peralatan mesin spiral drain snake modern dan teknisi bersertifikasi.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {siteConfig.services.map((srv) => (
              <div
                key={srv.id}
                id={srv.id}
                className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200/80 hover:shadow-xl hover:border-amber-400 transition duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3.5 rounded-2xl bg-amber-50">
                      {serviceIcons[srv.id] || <FaTools className="text-3xl text-amber-600" />}
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-extrabold">
                      {srv.price}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                    {srv.name}
                  </h3>

                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                    {srv.fullDesc}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-gray-100">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Keunggulan Layanan:
                    </p>
                    {srv.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-700">
                        <FaCheckCircle className="text-emerald-600 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-100">
                  <a
                    href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                      `Halo Teknisi perbaikansaluranmampet.com, saya ingin order layanan: ${srv.name}. Lokasi saya di Bandung.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition"
                  >
                    <FaWhatsapp className="text-lg text-emerald-400" />
                    <span>Order Layanan Ini via WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* INTERNAL LINKING BOX TO LOCAL AREAS */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Jangkauan Pos Teknisi perbaikansaluranmampet.com di Bandung Raya:
            </h3>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              Kami siap melayani panggilan cepat ke berbagai wilayah kecamatan dan kelurahan di Bandung. Klik area Anda untuk melihat informasi pos layanan terdekat:
            </p>
            <div className="flex flex-wrap gap-2.5">
              {siteConfig.areas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/kota/${area.slug}`}
                  className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-slate-900 hover:text-white text-gray-700 text-xs sm:text-sm font-semibold transition"
                >
                  Saluran Mampet {area.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-slate-900 border border-slate-800 text-white p-10 sm:p-14 rounded-3xl shadow-xl space-y-6">
            <h2 className="text-2xl sm:text-4xl font-extrabold">
              Saluran Air Anda Mampet Sekarang?
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg">
              Hubungi teknisi kami untuk penanganan kilat tanpa bongkar lantai dan bergaransi resmi tuntas.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-gray-950 px-10 py-4 rounded-2xl font-black text-base shadow-xl transition"
              >
                <FaWhatsapp className="text-2xl" />
                <span>Chat WhatsApp 24 Jam</span>
              </a>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-base transition"
              >
                <FaPhoneAlt />
                <span>Telepon ({siteConfig.phone})</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}