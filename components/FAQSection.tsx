"use client";

import Script from "next/script";
import { siteConfig } from "@/config/site";
import { FaQuestionCircle, FaShieldAlt } from "react-icons/fa";

export default function FAQSection() {
  const faqs = [
    {
      question: "Berapa biaya jasa perbaikan saluran mampet di Bandung?",
      answer:
        "Estimasi biaya pengerjaan saluran mampet standar di Bandung berkisar antara Rp150.000 hingga Rp350.000 tergantung jenis sumbatan dan lokasi saluran (wastafel, WC, atau pipa buangan). Teknisi kami selalu menginfokan kepastian tarif transparan di awal sebelum pengerjaan dimulai.",
    },
    {
      question: "Apakah pengerjaan saluran mampet perlu membongkar lantai keramik?",
      answer:
        "Tidak. perbaikansaluranmampet.com menggunakan mesin drain cleaner kawat spiral baja fleksibel otomatis yang dimasukkan langsung lewat lubang afur atau kloset tanpa merusak keramik, granit, maupun dinding tembok rumah Anda.",
    },
    {
      question: "Berapa lama proses pelancaran saluran biasanya selesai?",
      answer:
        "Sebagian besar kasus saluran mampet selesai ditangani dalam waktu 30 hingga 60 menit saja di lokasi.",
    },
    {
      question: "Bagaimana membedakan WC mampet vs Septic Tank penuh?",
      answer:
        "Jika WC mampet, air di dalam kloset tidak mengalir turun namun lubang pembuangan kamar mandi lainnya tetap lancar. Sedangkan jika septic tank penuh, biasanya kloset di lantai bawah meluap disertai gelembung udara dan bau menyengat di beberapa titik saluran sekaligus.",
    },
    {
      question: "Apakah melayani panggilan darurat 24 jam ke seluruh area Bandung?",
      answer:
        "Ya, teknisi kami siaga 24 jam nonstop melayani seluruh wilayah Kota Bandung (Cicendo, Sukajadi, Antapani, Arcamanik, Buah Batu, Dago) serta Cimahi dan Cileunyi.",
    },
    {
      question: "Bagaimana sistem garansi dan pembayaran di perbaikansaluranmampet.com?",
      answer:
        "Kami menerapkan sistem 'Lancar Baru Bayar'. Anda hanya membayar setelah saluran selesai dikerjakan dan terbukti lancar saat diuji coba bersama. Semua pekerjaan kami lengkapi dengan garansi resmi.",
    },
  ];

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-200/80 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <FaQuestionCircle />
            <span>Tanya Jawab Seputar Layanan</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
            FAQ: Jasa Saluran Mampet di Bandung
          </h2>
          <p className="mt-3 text-gray-600 text-sm sm:text-base">
            Jawaban lengkap atas pertanyaan yang sering diajukan pelanggan seputar biaya, proses pengerjaan, dan garansi layanan kami.
          </p>
        </div>

        <div className="space-y-5">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-gray-50 border border-gray-200/80 hover:border-amber-400 transition duration-200"
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

        <div className="mt-12 text-center p-6 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-center gap-3 text-sm text-slate-800 font-semibold">
          <FaShieldAlt className="text-amber-600 text-lg flex-shrink-0" />
          <span>
            Masih ada pertanyaan lain? Hubungi Call Center / WhatsApp kami di{" "}
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}`}
              className="underline font-bold text-slate-950 hover:text-amber-700"
            >
              {siteConfig.phone}
            </a>
          </span>
        </div>
      </div>

      {/* FAQ Schema */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: f.answer,
              },
            })),
          }),
        }}
      />
    </section>
  );
}