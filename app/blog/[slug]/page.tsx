import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/lib/blog-data";
import { siteConfig } from "@/config/site";
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from "@/lib/schema";
import {
  FaArrowLeft,
  FaClock,
  FaCalendarAlt,
  FaSyncAlt,
  FaUserCheck,
  FaCheckCircle,
  FaExclamationTriangle,
  FaInfoCircle,
  FaLightbulb,
  FaWhatsapp,
  FaPhoneAlt,
  FaShieldAlt,
} from "react-icons/fa";

interface BlogSlugProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogSlugProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Artikel Tidak Ditemukan",
    };
  }

  const postUrl = `${siteConfig.domain}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: postUrl,
      siteName: siteConfig.brandName,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updatedDate,
      authors: [post.author],
      locale: "id_ID",
      images: [
        {
          url: `${siteConfig.domain}/hero.png`,
          width: 850,
          height: 850,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [`${siteConfig.domain}/hero.png`],
    },
  };
}

export default async function BlogPostPage({ params }: BlogSlugProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const articleSchema = generateArticleSchema({
    slug: post.slug,
    title: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.updatedDate,
    authorName: post.author,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Beranda", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: post.title, url: `/blog/${post.slug}` },
  ]);

  const faqSchema =
    post.faqs && post.faqs.length > 0 ? generateFAQSchema(post.faqs) : null;

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const waUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    `Halo Teknisi perbaikansaluranmampet.com, saya membaca artikel "${post.title}". Saya ingin konsultasi / order penanganan saluran mampet di Bandung.`
  )}`;

  return (
    <>
      {/* STRUCTURED DATA SCHEMAS */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <Navbar />

      {/* HEADER HERO */}
      <section className="bg-gradient-to-br from-gray-950 via-purple-950 to-indigo-950 text-white py-16 sm:py-20 border-b border-purple-900/40">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-yellow-300 hover:text-yellow-200 font-semibold mb-6 transition"
          >
            <FaArrowLeft className="text-xs" />
            <span>Kembali ke Daftar Artikel</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold mb-4">
            <span className="px-3 py-1 rounded-full bg-yellow-400 text-gray-950 font-bold uppercase tracking-wider text-[11px]">
              {post.category}
            </span>
            <div className="flex items-center gap-1.5 text-gray-300">
              <FaCalendarAlt className="text-yellow-400" />
              <span>Dipublikasikan: {post.date}</span>
            </div>
            <div className="flex items-center gap-1.5 text-emerald-300 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
              <FaSyncAlt className="text-[10px]" />
              <span>Diperbarui: {post.updatedDate}</span>
            </div>
            <div className="flex items-center gap-1.5 text-gray-300">
              <FaClock className="text-yellow-400" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight text-white mb-6">
            {post.title}
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed font-normal border-l-4 border-yellow-400 pl-4">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-3 mt-8 pt-6 border-t border-white/10 text-sm text-gray-300">
            <div className="w-10 h-10 rounded-full bg-yellow-400/20 border border-yellow-400/40 flex items-center justify-center text-yellow-400">
              <FaUserCheck className="text-lg" />
            </div>
            <div>
              <p className="font-bold text-white">{post.author}</p>
              <p className="text-xs text-gray-400">
                Spesialis Plambing & Saluran Mampet Bandung (Pengalaman 10+ Tahun)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <main className="bg-white py-14 sm:py-20 text-gray-800">
        <div className="max-w-4xl mx-auto px-6">
          {/* TABLE OF CONTENTS */}
          {post.tableOfContents && post.tableOfContents.length > 0 && (
            <div className="mb-12 bg-purple-50/60 border border-purple-200/80 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2.5 mb-4 text-purple-900 font-bold text-lg">
                <FaInfoCircle className="text-purple-600" />
                <span>Daftar Isi Pembahasan:</span>
              </div>
              <ol className="list-decimal list-inside space-y-2 text-sm sm:text-base text-purple-950 font-medium">
                {post.tableOfContents.map((toc, idx) => (
                  <li key={idx} className="hover:text-purple-700 transition">
                    <span className="cursor-pointer">{toc}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* SECTIONS */}
          <div className="space-y-12">
            {post.sections.map((section, idx) => (
              <section key={idx} className="space-y-5">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight leading-snug">
                  {section.heading}
                </h2>

                {section.paragraphs.map((p, pIdx) => (
                  <p
                    key={pIdx}
                    className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal"
                  >
                    {p}
                  </p>
                ))}

                {/* CALLOUT BOX */}
                {section.callout && (
                  <div
                    className={`rounded-2xl p-6 border ${
                      section.callout.type === "warning"
                        ? "bg-amber-50 border-amber-300 text-amber-950"
                        : section.callout.type === "tip"
                        ? "bg-emerald-50 border-emerald-300 text-emerald-950"
                        : "bg-blue-50 border-blue-300 text-blue-950"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {section.callout.type === "warning" ? (
                        <FaExclamationTriangle className="text-amber-600 text-xl flex-shrink-0 mt-0.5" />
                      ) : (
                        <FaLightbulb className="text-emerald-600 text-xl flex-shrink-0 mt-0.5" />
                      )}
                      <div>
                        <h3 className="font-bold text-base mb-1">
                          {section.callout.title}
                        </h3>
                        <p className="text-sm sm:text-base leading-relaxed">
                          {section.callout.text}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* BULLET POINTS */}
                {section.bulletPoints && (
                  <ul className="space-y-3 pl-2">
                    {section.bulletPoints.map((bp, bpIdx) => (
                      <li
                        key={bpIdx}
                        className="flex items-start gap-3 text-base text-gray-700 leading-relaxed"
                      >
                        <FaCheckCircle className="text-yellow-500 mt-1 flex-shrink-0 text-sm" />
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* TABLE */}
                {section.table && (
                  <div className="overflow-x-auto my-6 border border-gray-200 rounded-2xl shadow-sm">
                    <table className="w-full text-left text-sm sm:text-base border-collapse">
                      <thead className="bg-gray-900 text-white font-bold">
                        <tr>
                          {section.table.headers.map((h, hIdx) => (
                            <th key={hIdx} className="p-4 border-b border-gray-700">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        {section.table.rows.map((row, rIdx) => (
                          <tr
                            key={rIdx}
                            className={rIdx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                          >
                            {row.map((cell, cIdx) => (
                              <td
                                key={cIdx}
                                className={`p-4 text-gray-800 ${
                                  cIdx === 0
                                    ? "font-bold text-purple-950"
                                    : cIdx === 2
                                    ? "font-extrabold text-emerald-700"
                                    : ""
                                }`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* IN-ARTICLE CTA BOX */}
          <div className="my-14 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-purple-900 via-indigo-900 to-gray-900 text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10 space-y-4">
              <span className="inline-block px-3.5 py-1 rounded-full bg-yellow-400 text-gray-950 text-xs font-black uppercase tracking-wider">
                Layanan Cepat 24 Jam Bandung
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Saluran Mampet di Rumah Anda Tidak Kunjung Lancar?
              </h2>
              <p className="text-gray-300 text-base sm:text-lg max-w-2xl leading-relaxed">
                Hindari risiko pipa PVC rusak atau keramik dibongkar paksa. Tim teknisi perbaikansaluranmampet.com siap meluncur ke alamat Anda di seluruh Bandung dalam hitungan menit!
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-yellow-400 hover:bg-yellow-500 text-gray-950 font-black text-base shadow-lg transition transform hover:-translate-y-0.5"
                >
                  <FaWhatsapp className="text-2xl" />
                  <span>Panggil Teknisi via WhatsApp</span>
                </a>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-base transition"
                >
                  <FaPhoneAlt />
                  <span>Telepon Langsung ({siteConfig.phone})</span>
                </a>
              </div>
            </div>
          </div>

          {/* FAQ SECTION */}
          {post.faqs && post.faqs.length > 0 && (
            <section className="mt-16 pt-12 border-t border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700">
                  <FaShieldAlt className="text-xl" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                  Pertanyaan Sering Diajukan (FAQ)
                </h2>
              </div>
              <div className="space-y-4">
                {post.faqs.map((faq, fIdx) => (
                  <div
                    key={fIdx}
                    className="p-6 rounded-2xl bg-gray-50 border border-gray-200 hover:border-purple-300 transition"
                  >
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-base text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* TAGS & INTERNAL LINKING */}
          <div className="mt-14 pt-8 border-t border-gray-200">
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">
              Topik & Kata Kunci Terkait:
            </h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-3.5 py-1.5 rounded-lg bg-gray-100 text-gray-700 text-xs font-semibold hover:bg-purple-100 hover:text-purple-800 transition cursor-default"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-gray-50 border border-gray-200 text-sm text-gray-700 leading-relaxed">
              <p>
                Informasi lebih lanjut mengenai layanan di berbagai wilayah Kota Bandung:
                kunjungi halaman{" "}
                <Link
                  href="/kota/bandung"
                  className="text-purple-700 font-bold hover:underline"
                >
                  Jasa Saluran Mampet Bandung
                </Link>
                , area{" "}
                <Link
                  href="/kota/sukajadi"
                  className="text-purple-700 font-bold hover:underline"
                >
                  Sukajadi
                </Link>
                ,{" "}
                <Link
                  href="/kota/cicendo"
                  className="text-purple-700 font-bold hover:underline"
                >
                  Cicendo
                </Link>
                ,{" "}
                <Link
                  href="/kota/antapani"
                  className="text-purple-700 font-bold hover:underline"
                >
                  Antapani
                </Link>
                , atau pelajari seluruh paket di halaman{" "}
                <Link
                  href="/layanan"
                  className="text-purple-700 font-bold hover:underline"
                >
                  Layanan Kami
                </Link>
                .
              </p>
            </div>
          </div>

          {/* RELATED ARTICLES */}
          {otherPosts.length > 0 && (
            <div className="mt-16 pt-12 border-t border-gray-200">
              <h2 className="text-2xl font-extrabold text-gray-900 mb-8">
                Artikel Seputar Saluran Mampet Lainnya
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherPosts.map((op) => (
                  <Link
                    key={op.slug}
                    href={`/blog/${op.slug}`}
                    className="group bg-white p-6 rounded-2xl border border-gray-200 hover:border-purple-500 shadow-sm hover:shadow-xl transition flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md">
                        {op.category}
                      </span>
                      <h3 className="font-bold text-base text-gray-900 group-hover:text-purple-700 transition mt-3 line-clamp-2">
                        {op.title}
                      </h3>
                      <p className="text-xs text-gray-600 mt-2 line-clamp-3 leading-relaxed">
                        {op.excerpt}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-purple-700 font-bold">
                      <span>Baca Panduan</span>
                      <span>→</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
