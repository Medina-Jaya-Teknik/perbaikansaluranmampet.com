import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/site";
import { generateAreaPageGraphSchema, generateFAQSchema } from "@/lib/schema";
import {
  FaMapMarkerAlt,
  FaWhatsapp,
  FaPhoneAlt,
  FaCheckCircle,
  FaShieldAlt,
  FaTools,
  FaClock,
  FaMoneyBillWave,
  FaQuestionCircle,
} from "react-icons/fa";

interface AreaPageProps {
  params: Promise<{
    area: string;
  }>;
}

export async function generateStaticParams() {
  return siteConfig.areas.map((a) => ({
    area: a.slug,
  }));
}

export async function generateMetadata({
  params,
}: AreaPageProps): Promise<Metadata> {
  const { area } = await params;
  const areaData = siteConfig.areas.find((a) => a.slug === area);

  if (!areaData) {
    return {
      title: "Area Layanan Tidak Ditemukan",
    };
  }

  const title =
    areaData.slug === "bandung"
      ? "Jasa Saluran Mampet Bandung Terdekat - Pelancar WC 24 Jam"
      : `Jasa Saluran Mampet ${areaData.name} Bandung Terdekat 24 Jam`;
  const description =
    areaData.slug === "bandung"
      ? `Jasa perbaikan saluran mampet Bandung terdekat & pelancar WC tanpa bongkar. Teknisi ahli bergaransi 24 jam. Hubungi ☎️ ${siteConfig.phone}.`
      : `Jasa saluran mampet ${areaData.name} Bandung tanpa bongkar. Teknisi pipa & WC mampet siaga 24 jam bergaransi resmi. Hubungi ☎️ ${siteConfig.phone}.`;
  const canonicalUrl = `${siteConfig.domain}/kota/${areaData.slug}`;

  return {
    title,
    description,
    keywords: [
      `jasa saluran mampet ${areaData.name.toLowerCase()}`,
      `wc mampet ${areaData.name.toLowerCase()}`,
      `wastafel mampet ${areaData.name.toLowerCase()}`,
      `tukang saluran air ${areaData.name.toLowerCase()}`,
      `pipa tersumbat ${areaData.name.toLowerCase()}`,
      `sedot wc ${areaData.name.toLowerCase()}`,
      `saluran mampet bandung`,
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: siteConfig.brandName,
      locale: "id_ID",
      type: "website",
      images: [
        {
          url: `${siteConfig.domain}/hero.png`,
          width: 850,
          height: 850,
          alt: `Jasa Saluran Mampet ${areaData.name} Bandung`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteConfig.domain}/hero.png`],
    },
  };
}

export default async function AreaPage({ params }: AreaPageProps) {
  const { area } = await params;
  const areaData = siteConfig.areas.find((a) => a.slug === area);

  if (!areaData) {
    notFound();
  }

  const graphSchema = generateAreaPageGraphSchema(areaData.slug, areaData.name);

  const areaFaqs = [
    {
      question: `Berapa lama teknisi tiba di lokasi area ${areaData.name}?`,
      answer: `Dengan pos teknisi siaga di kawasan ${areaData.name} (${areaData.landmark}), estimasi waktu kedatangan teknisi rata-rata 20 hingga 45 menit setelah konfirmasi pesanan via WhatsApp.`,
    },
    {
      question: `Berapa estimasi biaya jasa saluran mampet di ${areaData.name}?`,
      answer: `Biaya perbaikan saluran mampet standar di ${areaData.name} mulai dari Rp150.000 hingga Rp350.000 tergantung jenis saluran (wastafel, kloset WC, atau floor drain) dan tingkat keparahan sumbatan. Tarif selalu disepakati di awal tanpa biaya tersembunyi.`,
    },
    {
      question: `Apakah pengerjaan di area ${areaData.name} perlu membongkar lantai keramik?`,
      answer: `Sebagian besar (lebih dari 95%) kasus saluran mampet berhasil kami tuntaskan tanpa membongkar lantai sama sekali, menggunakan mesin drain cleaner spiral baja fleksibel otomatis.`,
    },
    {
      question: `Apakah ada garansi pengerjaan untuk wilayah ${areaData.name}?`,
      answer: `Ya, semua pekerjaan perbaikan saluran mampet di perbaikansaluranmampet.com disertai garansi pengerjaan resmi. Pembayaran baru dilakukan setelah saluran diuji coba mengalir lancar kembali.`,
    },
  ];

  const faqSchema = generateFAQSchema(areaFaqs);

  const waUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    `Halo Teknisi perbaikansaluranmampet.com, saya membutuhkan jasa perbaikan saluran mampet di area ${areaData.name}, Bandung (${areaData.landmark}). Mohon respon cepat.`
  )}`;

  const otherAreas = siteConfig.areas.filter((a) => a.slug !== areaData.slug);

  return (
    <>
      {/* SCHEMA INJECTION */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graphSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />

      {/* HERO SECTION */}
      <section className="bg-slate-950 text-white py-16 sm:py-24 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-300 text-xs sm:text-sm font-bold uppercase tracking-wider mb-6">
            <FaMapMarkerAlt className="text-yellow-400" />
            <span>Pos Layanan Prioritas: {areaData.fullName}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight">
            Jasa Saluran Mampet di <span className="text-yellow-400">{areaData.name}</span>, Bandung
          </h1>

          <p className="mt-6 text-base sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {areaData.description} Solusi cepat, higienis, <strong>100% tanpa bongkar keramik</strong>, dan bergaransi resmi untuk rumah tinggal, ruko, restoran, kosan, dan kantor.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-yellow-400 hover:bg-yellow-500 text-gray-950 font-black text-base shadow-xl transition transform hover:-translate-y-0.5"
            >
              <FaWhatsapp className="text-2xl" />
              <span>Order Teknisi Area {areaData.name}</span>
            </a>

            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-base transition"
            >
              <FaPhoneAlt />
              <span>{siteConfig.phone} (24 Jam)</span>
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs sm:text-sm font-semibold text-gray-300 max-w-3xl mx-auto pt-6 border-t border-white/10">
            <div className="flex items-center justify-center gap-2">
              <FaClock className="text-yellow-400" />
              <span>Respon 20-45 Menit</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <FaShieldAlt className="text-yellow-400" />
              <span>Garansi Tuntas</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <FaTools className="text-yellow-400" />
              <span>Tanpa Bongkar</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <FaMoneyBillWave className="text-yellow-400" />
              <span>Lancar Baru Bayar</span>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="bg-white py-16 sm:py-24 text-gray-800">
        <div className="max-w-5xl mx-auto px-6 space-y-16">
          {/* DETAIL CAKUPAN AREA */}
          <section className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-4">
              <FaMapMarkerAlt className="text-amber-600 text-2xl" />
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                Cakupan Wilayah & Penanganan Area {areaData.name}
              </h2>
            </div>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              {areaData.coverageDetail}
            </p>
            <div className="mt-4 pt-4 border-t border-slate-200 flex flex-wrap items-center gap-2 text-sm text-slate-900 font-medium">
              <span className="font-bold">Landmark & Koridor Siaga Terdekat:</span>
              <span className="bg-white px-3 py-1 rounded-full border border-slate-300 text-xs font-semibold">
                {areaData.landmark}
              </span>
            </div>
          </section>

          {/* LAYANAN YANG TERSEDIA DI AREA INI */}
          <section>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                Layanan Saluran Mampet Kami di {areaData.name}
              </h2>
              <p className="mt-3 text-gray-600">
                Peralatan canggih dan teknisi ahli siap menangani segala jenis sumbatan pipa di lokasi Anda:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {siteConfig.services.map((srv) => (
                <div
                  key={srv.id}
                  className="p-8 rounded-2xl bg-white border border-gray-200 hover:border-amber-400 shadow-sm hover:shadow-md transition"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-xl text-gray-900">
                      {srv.name}
                    </h3>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">
                      {srv.price}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {srv.shortDesc}
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                    {srv.features.slice(0, 2).map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <FaCheckCircle className="text-emerald-600 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* MENGAPA WARGA AREA MEMILIH PERBAIKANSALURANMAMPET.COM */}
          <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 text-center">
              Keunggulan Jasa Kami di Wilayah {areaData.name}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-yellow-400 text-gray-950 flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <h3 className="font-bold text-lg text-white">Tanpa Merusak Lantai</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Tidak perlu khawatir keramik mahal pecah atau dinding jebol. Semua pengerjaan menggunakan kawat spiral fleksibel dari lubang pipa afur.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-yellow-400 text-gray-950 flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <h3 className="font-bold text-lg text-white">Respon Cepat 24 Jam</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Panggilan darurat tengah malam atau hari libur nasional tetap dilayani dengan sigap oleh pos teknisi terdekat di {areaData.name}.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-yellow-400 text-gray-950 flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <h3 className="font-bold text-lg text-white">Garansi & Transparan</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Biaya diinformasikan secara jelas di awal sebelum pengerjaan. Jika belum lancar, Anda tidak dipungut biaya apapun!
                </p>
              </div>
            </div>
          </section>

          {/* AREA FAQ */}
          <section className="pt-6">
            <div className="flex items-center gap-3 mb-6">
              <FaQuestionCircle className="text-amber-600 text-2xl" />
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                FAQ: Saluran Mampet di {areaData.name}
              </h2>
            </div>
            <div className="space-y-4">
              {areaFaqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-gray-50 border border-gray-200"
                >
                  <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA BANNER */}
          <section className="text-center bg-slate-900 border border-slate-800 text-white p-10 sm:p-14 rounded-3xl shadow-xl space-y-6">
            <h2 className="text-2xl sm:text-4xl font-extrabold">
              Butuh Tukang Saluran Mampet di {areaData.name} Hari Ini?
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Hubungi kami via WhatsApp sekarang. Teknisi terdekat akan segera meluncur membawa perlengkapan lengkap ke alamat Anda.
            </p>
            <div className="pt-2">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-gray-950 font-black px-10 py-4 rounded-2xl shadow-xl text-lg transition transform hover:scale-105"
              >
                <FaWhatsapp className="text-2xl" />
                <span>Pesan Layanan Sekarang (WhatsApp)</span>
              </a>
            </div>
          </section>

          {/* INTERNAL LINKS TO OTHER AREAS */}
          <section className="pt-8 border-t border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Area Layanan Lainnya di Sekitar Bandung:
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {otherAreas.map((oa) => (
                <Link
                  key={oa.slug}
                  href={`/kota/${oa.slug}`}
                  className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-slate-900 hover:text-white text-gray-700 font-semibold text-xs sm:text-sm transition"
                >
                  Saluran Mampet {oa.name}
                </Link>
              ))}
            </div>
            <p className="mt-6 text-xs text-gray-500">
              Pelajari juga panduan kami mengenai{" "}
              <Link
                href="/blog/biaya-jasa-saluran-mampet-bandung"
                className="text-slate-900 font-bold hover:text-amber-600 underline underline-offset-2"
              >
                biaya jasa saluran mampet Bandung
              </Link>
              ,{" "}
              <Link
                href="/blog/cara-mengatasi-wc-mampet-bandung"
                className="text-slate-900 font-bold hover:text-amber-600 underline underline-offset-2"
              >
                cara mengatasi WC mampet tanpa bongkar
              </Link>
              , dan{" "}
              <Link
                href="/blog/penyebab-saluran-air-mampet-di-rumah"
                className="text-slate-900 font-bold hover:text-amber-600 underline underline-offset-2"
              >
                penyebab pipa tersumbat
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