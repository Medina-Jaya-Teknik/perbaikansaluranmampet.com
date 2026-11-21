import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import {
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from "@/lib/schema";
import {
  FaCheckCircle,
  FaWhatsapp,
  FaPhoneAlt,
  FaTools,
  FaShieldAlt,
  FaClock,
  FaExclamationTriangle,
  FaMapMarkerAlt,
  FaArrowRight,
  FaToilet,
  FaSink,
  FaShower,
  FaWater,
  FaUtensils,
} from "react-icons/fa";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: {
    absolute: "Jasa Saluran Mampet Bandung Terdekat & Bergaransi 24 Jam",
  },
  description:
    "Jasa saluran mampet Bandung terdekat, atasi pipa tersumbat & WC mampet tanpa bongkar keramik. Teknisi ahli 24 jam. Hubungi ☎️ 0851-2277-7253.",
  keywords: [
    "jasa saluran mampet bandung",
    "jasa saluran mampet terdekat",
    "perbaikan saluran mampet bandung",
    "pelancar saluran mampet bandung",
    "wc mampet bandung",
    "wastafel mampet bandung",
    "tukang pipa mampet bandung 24 jam",
    "biaya pelancar saluran mampet bandung",
    "saluran air mampet tanpa bongkar",
    "ahli pipa mampet bandung",
  ],
  alternates: {
    canonical: `${siteConfig.domain}/layanan/saluran-mampet-bandung`,
  },
  openGraph: {
    title: "Jasa Saluran Mampet Bandung Terdekat & Bergaransi 24 Jam",
    description:
      "Jasa saluran mampet Bandung terdekat, atasi pipa tersumbat & WC mampet tanpa bongkar keramik. Teknisi ahli 24 jam. Hubungi ☎️ 0851-2277-7253.",
    url: `${siteConfig.domain}/layanan/saluran-mampet-bandung`,
    siteName: siteConfig.brandName,
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: `${siteConfig.domain}/hero.png`,
        width: 850,
        height: 850,
        alt: `${siteConfig.brandName} - Jasa Saluran Mampet Bandung`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasa Saluran Mampet Bandung Terdekat 24 Jam",
    description:
      "Jasa perbaikan pipa tersumbat & WC mampet Bandung tanpa bongkar. Hubungi ☎️ 0851-2277-7253.",
    images: [`${siteConfig.domain}/hero.png`],
  },
};

export default function SaluranMampetBandungPage() {
  const serviceSchema = generateServiceSchema(
    "Jasa Saluran Mampet Bandung Terdekat & Bergaransi 24 Jam",
    "Layanan darurat pelancaran saluran pipa mampet untuk wastafel dapur, kloset WC, floor drain kamar mandi, dan got pembuangan air kotor di Bandung.",
    `${siteConfig.domain}/layanan/saluran-mampet-bandung`
  );

  const faqs = [
    {
      question: "Berapa lama teknisi saluran mampet tiba di lokasi rumah saya di Bandung?",
      answer:
        "Untuk wilayah Kota Bandung dan Cimahi, teknisi perbaikansaluranmampet.com siaga di pangkalan Cicendo serta titik pos terdekat, dan dapat tiba di lokasi Anda dalam waktu 20 hingga 40 menit setelah pemesanan dikonfirmasi via WhatsApp.",
    },
    {
      question: "Apakah pelancaran pipa mampet ini benar-benar tanpa membongkar keramik?",
      answer:
        "Ya, 100% tanpa bongkar keramik lantai atau dinding! Kami menggunakan mesin spiral fleksibel baja otomatis (drain cleaner) yang berputar mengikuti lekukan pipa PVC untuk memotong, mengikis lemak, dan menarik sumbatan dari dalam.",
    },
    {
      question: "Berapa biaya jasa saluran mampet di Bandung?",
      answer:
        "Tarif jasa mulai dari Rp150.000 untuk wastafel dapur atau floor drain kamar mandi standar. Biaya transparan disampaikan di awal sebelum teknisi bekerja, dengan sistem garansi lancar (Lancar Baru Bayar).",
    },
    {
      question: "Mengapa dilarang menggunakan soda api untuk saluran mampet?",
      answer:
        "Reaksi kimia soda api menghasilkan panas ekstrem di atas 100°C yang dapat melumerkan sambungan lem pipa PVC dan menyebabkan kebocoran fatal di balik dinding. Selain itu, soda api yang bereaksi dengan minyak goreng bekas akan mengeras menjadi sabun kapur yang membuat pipa tersumbat total.",
    },
    {
      question: "Apakah layanan saluran mampet ini bergaransi?",
      answer:
        "Ya, seluruh pengerjaan kami bergaransi tuntas lancar. Kami selalu melakukan uji siram air deras di depan pemilik rumah untuk memastikan saluran benar-benar plong sebelum pekerjaan dinyatakan selesai.",
    },
  ];

  const faqSchema = generateFAQSchema(faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Beranda", url: "/" },
    { name: "Layanan", url: "/layanan" },
    { name: "Jasa Saluran Mampet Bandung", url: "/layanan/saluran-mampet-bandung" },
  ]);

  const bookingWaUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    "Halo perbaikansaluranmampet.com, saya butuh jasa saluran mampet darurat di Bandung."
  )}`;

  const serviceCategories = [
    {
      id: "wastafel",
      title: "Wastafel Dapur & Kitchen Sink",
      desc: "Endapan minyak goreng beku, mentega, sisa lemak makanan yang mengeras di leher angsa pipa cuci piring.",
      price: "Mulai Rp150.000",
      features: ["Kikis kerak lemak membandel", "Tanpa bahan kimia perusak pipa", "Uji siram air deras"],
      icon: <FaSink className="text-2xl text-amber-600" />,
    },
    {
      id: "wc",
      title: "Kloset Duduk & Jongkok (WC Mampet)",
      desc: "Sumbatan tisu, pembalut, kain lap, mainan, atau kotoran padat di leher siphon porselen tanpa retak.",
      price: "Mulai Rp150.000",
      features: ["Porselen kloset dijamin aman", "Mesin spiral lentur 360°", "Pengerjaan 30-45 menit"],
      icon: <FaToilet className="text-2xl text-amber-600" />,
    },
    {
      id: "floordrain",
      title: "Floor Drain Lantai Kamar Mandi",
      desc: "Genangan air buangan busa sabun bercampur jalinan rambut rontok dan pasir di pipa pembuangan lantai.",
      price: "Mulai Rp150.000",
      features: ["Menarik jalinan rambut mati", "Menghilangkan aroma tak sedap", "Air mengalir deras seketika"],
      icon: <FaShower className="text-2xl text-amber-600" />,
    },
    {
      id: "talang",
      title: "Got, Bak Kontrol & Talang Dak Atap",
      desc: "Pipa dak cor dan got yang tertutup endapan lumpur, daun kering, lumut tebal, atau semen sisa renovasi.",
      price: "Mulai Rp200.000",
      features: ["Jangkauan kabel pipa puluhan meter", "Mencegah dak atap meluap bocor", "Pembersihan bak kontrol"],
      icon: <FaWater className="text-2xl text-amber-600" />,
    },
    {
      id: "greasetrap",
      title: "Grease Trap Restoran & Usaha Kuliner",
      desc: "Pembersihan total kerak minyak jenuh dan pipa perangkap lemak restoran di seluruh kawasan kuliner Bandung.",
      price: "Mulai Rp300.000",
      features: ["Siap dikerjakan malam hari", "Bebas bau dapur komersial", "Layanan rutin berkala tersedia"],
      icon: <FaUtensils className="text-2xl text-amber-600" />,
    },
  ];

  return (
    <>
      {/* Schema Markup JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white pt-12 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6 text-xs text-slate-400 flex items-center gap-2">
            <Link href="/" className="hover:text-amber-400 transition">Beranda</Link>
            <span>/</span>
            <Link href="/layanan" className="hover:text-amber-400 transition">Layanan</Link>
            <span>/</span>
            <span className="text-amber-400 font-semibold">Saluran Mampet Bandung</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-bold tracking-wide uppercase mb-4">
              <FaClock className="text-amber-400 animate-pulse" />
              <span>Respon Cepat 24 Jam • Bandung Raya & Cimahi</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-5">
              Jasa Saluran Mampet Bandung Terdekat & Bergaransi Resmi
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
              Solusi tuntas atasi WC mampet, wastafel tersumbat minyak, floor drain kamar mandi menggenang, dan pipa pembuangan air kotor di Bandung. Dikerjakan <span className="text-amber-400 font-bold">100% tanpa bongkar keramik</span> menggunakan mesin spiral drain cleaner elektrik mutakhir.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <a
                href={bookingWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-base shadow-lg shadow-amber-500/25 transition active:scale-95"
              >
                <FaWhatsapp className="text-xl" />
                <span>Panggil Teknisi via WhatsApp</span>
              </a>

              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-base border border-slate-700 transition"
              >
                <FaPhoneAlt className="text-amber-400 text-sm" />
                <span>Telepon: {siteConfig.phone}</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="mt-8 pt-8 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-semibold text-slate-300">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-emerald-400 flex-shrink-0" />
                <span>Tanpa Bongkar Keramik</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-emerald-400 flex-shrink-0" />
                <span>Lancar Baru Bayar</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-emerald-400 flex-shrink-0" />
                <span>Tiba dalam 30 Menit</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-emerald-400 flex-shrink-0" />
                <span>Garansi Pengerjaan</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Jenis Saluran Pipa Mampet yang Kami Tangani di Bandung
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Setiap jenis sumbatan membutuhkan mata pisau spiral berbeda agar pipa bersih maksimal tanpa merusak dinding PVC.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((item) => (
              <div
                key={item.id}
                className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-400 hover:shadow-md transition group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-4 group-hover:scale-105 transition">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {item.desc}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {item.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-xs text-slate-700">
                        <FaCheckCircle className="text-emerald-600 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-sm font-black text-amber-700">{item.price}</span>
                  <a
                    href={bookingWaUrl}
                    className="inline-flex items-center gap-1 text-xs font-bold text-slate-900 hover:text-amber-600 transition"
                  >
                    <span>Pesan Layanan</span>
                    <FaArrowRight className="text-[10px]" />
                  </a>
                </div>
              </div>
            ))}

            {/* Quick Contact Box */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 flex flex-col justify-between border border-slate-800 shadow-md">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-full inline-block mb-3">
                  Panggilan Darurat
                </span>
                <h3 className="text-xl font-black text-white mb-2 leading-snug">
                  Air Kotor Meluap Membanjiri Lantai?
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Jangan panik. Teknisi kami siap meluncur dengan perlengkapan lengkap ke rumah, ruko, kantor, atau kafe Anda di area Bandung.
                </p>
              </div>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="w-full py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm text-center transition flex items-center justify-center gap-2"
              >
                <FaPhoneAlt className="text-xs" />
                <span>Hubungi 0851-2277-7253</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Spiral Machine vs Soda Api */}
      <section className="py-16 bg-amber-50/60 border-y border-amber-200/60">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-16 h-16 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center flex-shrink-0 text-3xl shadow-lg shadow-amber-500/20">
              <FaTools />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-amber-900 mb-1">
                <FaExclamationTriangle className="text-amber-600" />
                <span>Peringatan Bahaya Kimia</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-snug">
                Kenapa Tidak Boleh Memakai Soda Api untuk Pipa Mampet?
              </h2>
              <p className="mt-2 text-slate-700 text-sm sm:text-base leading-relaxed">
                Soda api yang dicampur air panas memicu reaksi eksotermik di atas 100°C. Hal ini dapat <strong>melumerkan sambungan lem pipa PVC</strong> hingga bocor di dalam dinding rumah Anda. Selain itu, soda api yang bercampur lemak dingin akan mengeras membatu menjadi zat kapur padat.
              </p>
              <div className="mt-4 flex flex-wrap gap-4 text-xs font-bold text-slate-800">
                <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-amber-300 shadow-sm">
                  ✔ Mesin Drain Cleaner Lentur 100% Aman untuk Pipa PVC
                </span>
                <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-amber-300 shadow-sm">
                  ✔ Menghancurkan Kerak Tanpa Kerusakan Struktur Bangunan
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
              <FaMapMarkerAlt className="text-amber-600" />
              <span>Jangkauan Wilayah Bandung</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Pangkalan Teknisi Saluran Mampet di Kota Bandung
            </h2>
            <p className="mt-2 text-slate-600 text-sm">
              Teknisi kami tersebar di berbagai pos strategis untuk menjamin waktu tiba tercepat 20-40 menit ke alamat Anda.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {siteConfig.areas.map((area) => (
              <Link
                key={area.slug}
                href={`/kota/${area.slug}`}
                className="p-4 rounded-xl border border-slate-200 hover:border-amber-400 hover:bg-amber-50/40 transition group flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-amber-700 group-hover:underline block">
                    Kecamatan
                  </span>
                  <h3 className="font-extrabold text-slate-900 text-sm sm:text-base group-hover:text-amber-700 transition mt-0.5">
                    {area.name}
                  </h3>
                  <p className="text-[11px] text-slate-500 line-clamp-1 mt-1">
                    {area.landmark}
                  </p>
                </div>
                <span className="text-[11px] text-slate-400 group-hover:text-amber-600 font-semibold mt-3 flex items-center gap-1">
                  <span>Lihat Area Pos</span>
                  <FaArrowRight className="text-[9px]" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Pertanyaan Umum Seputar Jasa Saluran Mampet Bandung
            </h2>
            <p className="mt-2 text-slate-600 text-sm">
              Semua hal yang perlu Anda ketahui sebelum memesan layanan teknisi perbaikansaluranmampet.com.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"
              >
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
