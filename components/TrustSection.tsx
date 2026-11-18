import { siteConfig } from "@/config/site";
import { FaShieldAlt, FaTools, FaClock, FaCheckCircle, FaWhatsapp, FaAward } from "react-icons/fa";

export default function TrustSection() {
  const advantages = [
    {
      icon: <FaTools className="text-yellow-500 text-3xl" />,
      title: "100% Tanpa Bongkar Lantai",
      desc: "Menggunakan mesin spiral elektrik fleksibel berstandar internasional yang membersihkan kerak lemak dan sumbatan langsung melalui lubang pipa tanpa merusak keramik atau dinding.",
    },
    {
      icon: <FaClock className="text-yellow-500 text-3xl" />,
      title: "Respon Cepat 24 Jam Bandung",
      desc: "Pos teknisi kami tersebar di berbagai koridor strategis (Cicendo, Sukajadi, Antapani, Buah Batu, Cimahi) sehingga siap meluncur ke lokasi Anda dalam 20-45 menit.",
    },
    {
      icon: <FaShieldAlt className="text-yellow-500 text-3xl" />,
      title: "Sistem 'Lancar Baru Bayar'",
      desc: "Kepercayaan Anda adalah prioritas kami. Biaya disepakati transparan di awal, dan pembayaran hanya dilakukan setelah saluran air benar-benar diuji coba mengalir lancar.",
    },
    {
      icon: <FaAward className="text-yellow-500 text-3xl" />,
      title: "Teknisi Berpengalaman 10+ Tahun",
      desc: "Tim teknisi plambing profesional yang terlatih menghadapi berbagai kasus rumit: WC duduk/jongkok mampet, wastafel dapur, floor drain, talang dak atap, hingga grease trap resto.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="keunggulan">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 border border-amber-200/80 px-3.5 py-1.5 rounded-full">
            Keunggulan perbaikansaluranmampet.com
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-4 tracking-tight">
            Mengapa Memilih Jasa Saluran Mampet Kami di Bandung?
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed text-base sm:text-lg">
            Kami hadir memberikan solusi perbaikan saluran mampet profesional, cepat, bersih, dan bergaransi tanpa risiko kerusakan instalasi pipa rumah Anda.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {advantages.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-3xl shadow-sm border border-gray-200/80 hover:shadow-xl hover:border-amber-400 transition duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="mb-5 p-3 rounded-2xl bg-yellow-50 inline-block">
                  {item.icon}
                </div>
                <h3 className="font-extrabold text-lg text-gray-900 mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-1.5 text-xs text-emerald-600 font-bold">
                <FaCheckCircle />
                <span>Teruji & Terpercaya</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-slate-950 px-8 py-4 rounded-2xl font-black shadow-lg shadow-yellow-500/20 hover:scale-105 transition"
          >
            <FaWhatsapp className="text-xl" />
            <span>Konsultasi Gratis via WhatsApp (24 Jam)</span>
          </a>
        </div>
      </div>
    </section>
  );
}