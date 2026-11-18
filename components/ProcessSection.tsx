import { siteConfig } from "@/config/site";
import {
  FaCamera,
  FaTools,
  FaCheckCircle,
  FaWhatsapp,
  FaShieldAlt,
} from "react-icons/fa";

export default function ProcessSection() {
  const steps = [
    {
      num: "01",
      icon: <FaCamera className="text-2xl text-amber-600" />,
      title: "Kirim Foto / Ceritakan Kendala via WhatsApp",
      desc: "Jelaskan titik pipa atau WC yang tersumbat. Kami berikan estimasi waktu kedatangan teknisi dan kepastian tarif transparan di awal tanpa biaya tersembunyi.",
    },
    {
      num: "02",
      icon: <FaTools className="text-2xl text-amber-600" />,
      title: "Teknisi Datang & Eksekusi Mesin Spiral Baja",
      desc: "Teknisi tiba 20–45 menit dengan mesin drain cleaner kawat fleksibel yang berputar melumat kerak lemak, rambut, dan sumbatan 100% tanpa membongkar keramik.",
    },
    {
      num: "03",
      icon: <FaCheckCircle className="text-2xl text-emerald-600" />,
      title: "Uji Coba Air Lancar, Baru Bayar",
      desc: "Setelah sumbatan terangkat tuntas, saluran diuji coba mengalirkan air bersama Anda. Anda hanya membayar setelah air benar-benar mengalir lancar, lengkap dengan garansi resmi.",
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200" id="cara-kerja">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4">
            <FaShieldAlt />
            <span>Alur Kerja Praktis &amp; Bersih</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            3 Langkah Praktis Penanganan Saluran Mampet
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg leading-relaxed">
            Tidak perlu repot memikirkan renovasi lantai. Proses pengerjaan higienis dan rata-rata selesai dalam 30–60 menit.
          </p>
        </div>

        {/* 3 Step Horizontal Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((st, sIdx) => (
            <div
              key={sIdx}
              className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:border-amber-400 hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center">
                    {st.icon}
                  </div>
                  <span className="text-2xl font-black text-slate-300">
                    {st.num}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                  {st.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {st.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-emerald-700 flex items-center gap-1.5">
                <FaCheckCircle className="text-emerald-600" />
                <span>Terjamin &amp; Bergaransi</span>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-sm">
          <div className="space-y-1">
            <h4 className="font-extrabold text-slate-900 text-base">
              Siap Mengatasi Saluran Air Anda Sekarang?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              Teknisi terdekat di wilayah Anda siap meluncur dalam hitungan menit membawa mesin lengkap.
            </p>
          </div>

          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
              "Halo Teknisi perbaikansaluranmampet.com, saya ingin konsultasi penanganan saluran mampet di Bandung."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2.5 bg-amber-400 hover:bg-amber-500 text-slate-950 font-black px-6 py-3 rounded-xl text-xs sm:text-sm shadow-md transition"
          >
            <FaWhatsapp className="text-lg" />
            <span>Hubungi Teknisi via WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
