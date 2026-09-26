import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/lib/blog-data";
import { siteConfig } from "@/config/site";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { FaCalendarAlt, FaClock, FaArrowRight, FaBookOpen } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Tips & Panduan Perawatan Pipa Air Bandung",
  description:
    "Kumpulan panduan teknis, tips mengatasi WC mampet mandiri, rincian biaya terbaru di Bandung, dan edukasi perawatan pipa pembuangan tanpa bongkar.",
  alternates: {
    canonical: `${siteConfig.domain}/blog`,
  },
  openGraph: {
    title: "Tips & Panduan Perawatan Pipa Air Bandung | perbaikansaluranmampet.com",
    description:
      "Panduan praktis WC mampet, wastafel tersumbat, rincian biaya, dan tips plambing dari teknisi profesional Bandung.",
    url: `${siteConfig.domain}/blog`,
    siteName: siteConfig.brandName,
    locale: "id_ID",
    type: "website",
  },
};

export default function BlogPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Beranda", url: "/" },
    { name: "Blog & Panduan", url: "/blog" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navbar />

      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-gray-950 via-purple-950 to-indigo-950 text-white py-20 border-b border-purple-900/40">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-300 text-xs font-bold uppercase tracking-wider mb-6">
            <FaBookOpen />
            <span>Pusat Edukasi & Panduan Plambing Bandung</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Artikel Seputar Saluran Mampet & Pipa
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Dapatkan informasi akurat seputar penanganan WC mampet, wastafel dapur tersumbat, estimasi biaya jasa terbaru di Bandung, serta trik merawat pipa tanpa perlu bongkar keramik.
          </p>
        </div>
      </section>

      {/* BLOG LIST SECTION */}
      <main className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between gap-2 mb-4 text-xs font-semibold">
                    <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-900 font-bold uppercase text-[11px] tracking-wider">
                      {post.category}
                    </span>
                    <span className="text-gray-500 flex items-center gap-1.5">
                      <FaClock className="text-purple-600" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-black text-gray-900 group-hover:text-purple-700 transition leading-snug">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-purple-700 transition"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="px-8 pb-8 pt-4 border-t border-gray-100 flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <FaCalendarAlt className="text-gray-400" />
                    <span>{post.date}</span>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-purple-700 hover:text-purple-900 font-bold transition"
                  >
                    <span>Baca Lengkap</span>
                    <FaArrowRight className="text-xs" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* BOTTOM CONSULTATION CARD */}
          <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-purple-900 to-indigo-900 text-white text-center shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-black mb-4">
              Punya Masalah Saluran Mampet yang Butuh Penanganan Sekarang?
            </h2>
            <p className="text-purple-200 max-w-2xl mx-auto mb-8 text-base sm:text-lg leading-relaxed">
              Konsultasikan kendala pipa atau kloset Anda bersama teknisi berpengalaman perbaikansaluranmampet.com. Siaga 24 jam di seluruh wilayah Bandung!
            </p>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                "Halo Teknisi perbaikansaluranmampet.com, saya ingin order jasa saluran mampet Bandung."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-950 font-black px-10 py-4 rounded-2xl shadow-lg transition transform hover:scale-105"
            >
              Hubungi WhatsApp Teknisi 24 Jam
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}