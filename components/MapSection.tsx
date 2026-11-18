import { siteConfig } from "@/config/site";
import { FaMapMarkerAlt, FaClock, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function MapSection() {
  return (
    <section className="py-20 bg-slate-50" id="lokasi">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-200/80 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4">
            <FaMapMarkerAlt />
            <span>Pusat Operasional & Workshop</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Lokasi Pos Teknisi Saluran Mampet Bandung
          </h2>
          <p className="mt-4 text-slate-600 text-base leading-relaxed">
            Berlokasi strategis di Pamoyanan, Cicendo untuk kemudahan mobilisasi cepat ke seluruh wilayah Bandung, Cimahi, dan sekitarnya.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid sm:grid-cols-3 gap-4 mb-8 text-left">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center text-lg flex-shrink-0">
              <FaMapMarkerAlt />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Alamat Workshop</p>
              <p className="text-xs sm:text-sm font-semibold text-slate-900 mt-1 leading-snug">
                {siteConfig.address.street}, Pamoyanan, Kec. Cicendo, Kota Bandung 40173
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-lg flex-shrink-0">
              <FaClock />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Jam Layanan</p>
              <p className="text-xs sm:text-sm font-semibold text-slate-900 mt-1 leading-snug">
                Buka 24 Jam Nonstop (Senin – Minggu & Libur Nasional)
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-yellow-50 text-amber-700 flex items-center justify-center text-lg flex-shrink-0">
              <FaPhoneAlt />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Call Center & WA</p>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                className="text-xs sm:text-sm font-bold text-slate-900 hover:text-amber-700 mt-1 block leading-snug"
              >
                {siteConfig.phone} (Fast Response)
              </a>
            </div>
          </div>
        </div>

        {/* Map Embed */}
        <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200">
          <iframe
            src="https://www.google.com/maps?q=Jl.%20Baladewa%20No.114,%20Pamoyanan,%20Kec.%20Cicendo,%20Kota%20Bandung,%20Jawa%20Barat%2040173&output=embed"
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Peta Lokasi perbaikansaluranmampet.com Bandung"
          ></iframe>
        </div>

      </div>
    </section>
  );
}
