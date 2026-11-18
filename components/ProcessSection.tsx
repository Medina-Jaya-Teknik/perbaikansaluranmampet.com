import Image from "next/image";
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
      icon: <FaCamera className="text-xl text-amber-600" />,
      title: "Hubungi & Kirim Foto/Video Kendala",
      desc: "Ceritakan titik sumbatan (WC, wastafel, floor drain, atau got) via WhatsApp. Kami berikan estimasi waktu kedatangan teknisi dan rincian biaya yang pasti di awal.",
    },
    {
      num: "02",
      icon: <FaTools className="text-xl text-amber-600" />,
      title: "Teknisi Tiba & Penanganan Mesin Spiral",
      desc: "Teknisi tiba dalam 20-45 menit membawa mesin kawat baja lentur khusus (drain cleaner) yang berputar melumat kerak lemak, rambut, dan sumbatan 100% tanpa membongkar keramik.",
    },
    {
      num: "03",
      icon: <FaCheckCircle className="text-xl text-emerald-600" />,
      title: "Uji Aliran Lancar Baru Bayar",
      desc: "Setelah sumbatan terangkat, saluran diuji coba mengalirkan air bersama Anda. Anda hanya membayar saat air benar-benar mengalir deras, lengkap dengan garansi resmi.",
    },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden" id="cara-kerja">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Real Photo & Machine Authenticity */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-950">
              <Image
                src="/teknisi.jpg"
                alt="Teknisi profesional pelancar saluran mampet Bandung menggunakan mesin spiral drain cleaner"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-6 text-white">
                <div className="flex items-center gap-2 text-yellow-400 font-bold text-xs uppercase tracking-wider mb-1">
                  <FaShieldAlt />
                  <span>Teknologi Mesin Modern</span>
                </div>
                <p className="text-sm font-semibold text-slate-200">
                  Drain Snake Elektrik: Menjangkau pipa berliku hingga 30+ meter tanpa bobok lantai ubin.
                </p>
              </div>
            </div>

            {/* Micro Quote */}
            <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 text-xs sm:text-sm text-slate-300 flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0"></span>
              <span>
                <strong>Sistem Lancar Baru Bayar:</strong> Tidak ada biaya jasa jika saluran gagal kami normalkan.
              </span>
            </div>
          </div>

          {/* Right: Steps Process */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-300 text-xs font-bold uppercase tracking-wider mb-4">
                <span>Alur Kerja Praktis & Bersih</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                3 Langkah Cepat Mengatasi Saluran Mampet di Rumah Anda
              </h2>
              <p className="mt-3 text-slate-400 text-base leading-relaxed">
                Tanpa perlu cemas lantai kotor atau keramik pecah. Standar pengerjaan kami higienis dan cepat selesai dalam 30-60 menit.
              </p>
            </div>

            <div className="space-y-6">
              {steps.map((st, sIdx) => (
                <div
                  key={sIdx}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-slate-800/50 border border-slate-700/70 hover:border-amber-400/70 transition"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-700 flex items-center justify-center font-black text-yellow-400 text-lg flex-shrink-0 border border-slate-600">
                    {st.num}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1.5">
                      {st.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {st.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                  "Halo Teknisi perbaikansaluranmampet.com, saya ingin konsultasi penanganan saluran mampet Bandung."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-slate-950 font-black px-8 py-3.5 rounded-xl shadow-lg transition"
              >
                <FaWhatsapp className="text-xl" />
                <span>Konsultasikan Masalah Pipa Sekarang</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
