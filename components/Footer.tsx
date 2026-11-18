import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaShieldAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-24 md:pb-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr] gap-8 lg:gap-10">
        {/* COLUMN 1 - BRAND */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt={siteConfig.brandName}
              width={42}
              height={42}
              className="w-10 h-10 object-contain flex-shrink-0"
            />
            <div className="min-w-0">
              <h3 className="font-black text-white text-base sm:text-lg leading-tight tracking-tight break-words">
                {siteConfig.name}
              </h3>
              <p className="text-xs text-yellow-400 font-semibold tracking-tight mt-0.5">
                Layanan Cepat 24 Jam Bandung
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
            Jasa perbaikan pipa dan saluran air buangan profesional di Bandung tanpa bongkar keramik. Melayani WC, wastafel dapur, floor drain, dan sedot lemak grease trap dengan teknologi drain cleaner canggih 24 jam.
          </p>

          <div className="pt-2 flex items-center gap-2 text-xs text-emerald-400 font-bold">
            <FaShieldAlt />
            <span>Garansi Tuntas 100%: Lancar Baru Bayar</span>
          </div>
        </div>

        {/* COLUMN 2 - LAYANAN */}
        <div>
          <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4 border-b border-gray-800 pb-2">
            Layanan Unggulan
          </h4>

          <ul className="space-y-2.5 text-xs sm:text-sm text-gray-400">
            {siteConfig.services.map((srv) => (
              <li key={srv.id}>
                <Link
                  href={`/layanan#${srv.id}`}
                  className="hover:text-yellow-400 transition"
                >
                  {srv.name}
                </Link>
              </li>
            ))}
            <li className="pt-1">
              <Link
                href="/blog"
                className="text-yellow-400 hover:underline font-semibold"
              >
                Semua Panduan & Artikel Plambing
              </Link>
            </li>
          </ul>
        </div>

        {/* COLUMN 3 - AREA BANDUNG */}
        <div>
          <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4 border-b border-gray-800 pb-2">
            Cakupan Area Bandung
          </h4>

          <div className="grid grid-cols-2 gap-x-3 gap-y-2 text-xs sm:text-sm text-gray-400">
            {siteConfig.areas.map((area) => (
              <Link
                key={area.slug}
                href={`/kota/${area.slug}`}
                className="hover:text-yellow-400 transition truncate capitalize"
              >
                • {area.name}
              </Link>
            ))}
          </div>
          <div className="mt-3">
            <Link
              href="/kota/bandung"
              className="text-xs text-yellow-400 hover:underline font-semibold"
            >
              Lihat Seluruh Area Kota Bandung
            </Link>
          </div>
        </div>

        {/* COLUMN 4 - KONTAK & ALAMAT */}
        <div>
          <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4 border-b border-gray-800 pb-2">
            Pusat Operasional
          </h4>

          <div className="space-y-3 text-xs sm:text-sm text-gray-400">
            <div className="flex items-start gap-2.5">
              <FaMapMarkerAlt className="text-yellow-400 mt-1 flex-shrink-0" />
              <span>
                {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.province} {siteConfig.address.postalCode}
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <FaPhoneAlt className="text-yellow-400 flex-shrink-0" />
              <span>Telepon: {siteConfig.phone}</span>
            </div>

            <div className="flex items-center gap-2.5">
              <FaWhatsapp className="text-yellow-400 text-base flex-shrink-0" />
              <span>WhatsApp: 24 Jam Siaga</span>
            </div>
          </div>

          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full mt-5 bg-yellow-400 hover:bg-yellow-500 text-gray-950 px-4 py-2.5 rounded-xl font-bold text-xs shadow-md transition"
          >
            <FaWhatsapp className="text-base" />
            <span>Chat Teknisi Sekarang</span>
          </a>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-xs text-gray-400 px-6">
        <p>
          © {new Date().getFullYear()} {siteConfig.name} | Layanan Cepat Tanpa Bongkar Bandung. Hak Cipta Dilindungi Undang-Undang.
        </p>
      </div>
    </footer>
  );
}