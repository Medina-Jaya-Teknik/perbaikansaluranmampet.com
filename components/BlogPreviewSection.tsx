import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";
import { FaClock, FaArrowRight, FaBookOpen } from "react-icons/fa";

export default function BlogPreviewSection() {
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <section className="bg-slate-950 py-20 text-white border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        {/* HEADING */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-300 text-xs font-bold uppercase tracking-wider mb-4">
            <FaBookOpen />
            <span>Tips & Edukasi Plambing</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
            Artikel & Panduan Saluran Mampet Terbaru
          </h2>
          <p className="mt-4 text-gray-300 text-base sm:text-lg leading-relaxed">
            Dapatkan wawasan seputar estimasi tarif jasa di Bandung, trik pelancaran mandiri tanpa merusak pipa, dan edukasi perawatan instalasi air rumah tangga.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {featuredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-semibold mb-3">
                  <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 font-bold uppercase text-[10px] tracking-wider">
                    {post.category}
                  </span>
                  <span className="text-gray-400 flex items-center gap-1 text-[11px]">
                    <FaClock className="text-amber-500" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition leading-snug">
                  {post.title}
                </h3>

                <p className="mt-3 text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-sm text-slate-800 font-bold group-hover:text-amber-600">
                <span>Baca Selengkapnya</span>
                <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>

        {/* BUTTON */}
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-950 px-8 py-3.5 rounded-xl font-black text-sm shadow-lg hover:scale-105 transition"
          >
            <span>Lihat Semua Artikel & Panduan</span>
            <FaArrowRight className="text-xs" />
          </Link>
        </div>
      </div>
    </section>
  );
}