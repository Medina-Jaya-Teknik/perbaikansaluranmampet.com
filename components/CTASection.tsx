export default function CTASection() {
  return (
    <section className="bg-slate-900 text-white py-20 border-y border-slate-800 relative">
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
          Butuh Jasa Saluran Mampet di Bandung?
          <span className="block text-yellow-400 mt-2">
            Kami Siap Datang Sekarang Juga!
          </span>
        </h2>

        {/* Description */}
        <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Jangan biarkan WC mampet, pipa tersumbat, atau saluran air bermasalah mengganggu kenyamanan Anda. Tim profesional kami siap menangani dengan cepat, bersih, dan tanpa merusak keramik.
        </p>

        {/* Trust Line */}
        <div className="mt-8 text-sm text-slate-300 flex flex-wrap justify-center gap-6 font-medium">
          <span className="flex items-center gap-1.5"><span className="text-emerald-400">✔</span> Respon Cepat 24 Jam</span>
          <span className="flex items-center gap-1.5"><span className="text-emerald-400">✔</span> Biaya Transparan</span>
          <span className="flex items-center gap-1.5"><span className="text-emerald-400">✔</span> Garansi Lancar Baru Bayar</span>
          <span className="flex items-center gap-1.5"><span className="text-emerald-400">✔</span> Tanpa Bongkar Lantai</span>
        </div>

        {/* CTA Button */}
        <div className="mt-10">
          <a
            href="https://wa.me/6285122777253"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-slate-950 px-10 py-4 rounded-xl font-black shadow-xl hover:-translate-y-0.5 transition text-lg active:scale-95"
          >
            Hubungi via WhatsApp (0851-2277-7253)
          </a>
        </div>

        {/* Microcopy */}
        <p className="mt-4 text-xs sm:text-sm text-slate-400">
          Konsultasi gratis • Estimasi sebelum pengerjaan • Tanpa biaya tersembunyi
        </p>

      </div>
    </section>
  );
}