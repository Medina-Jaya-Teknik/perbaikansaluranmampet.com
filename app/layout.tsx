import type { Metadata } from "next";
import Script from "next/script";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { siteConfig } from "@/config/site";
import { generateLocalBusinessSchema } from "@/lib/schema";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: "perbaikansaluranmampet.com - Ahli Pelancar Pipa & WC Bandung Tanpa Bongkar",
    template: "%s | perbaikansaluranmampet.com",
  },
  description:
    "Layanan profesional pelancar pipa tersumbat dan WC mampet di Bandung 100% tanpa bongkar keramik. Respon cepat 24 jam bergaransi resmi.",
  keywords: [
    "perbaikansaluranmampet.com",
    "jasa saluran mampet bandung",
    "wc mampet bandung",
    "pipa tersumbat bandung",
    "wastafel mampet bandung",
    "tukang pipa mampet terdekat",
    "sedot wc bandung",
    "pelancar saluran air bandung",
  ],
  alternates: {
    canonical: siteConfig.domain,
  },
  openGraph: {
    title: "perbaikansaluranmampet.com - Ahli Pelancar Pipa & WC Bandung",
    description:
      "Layanan profesional pelancar pipa tersumbat dan WC mampet di Bandung 100% tanpa bongkar keramik. Respon cepat 24 jam.",
    url: siteConfig.domain,
    siteName: siteConfig.brandName,
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: `${siteConfig.domain}/hero.png`,
        width: 850,
        height: 850,
        alt: `${siteConfig.brandName} - Jasa Saluran Mampet Bandung`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.brandName} - Jasa Saluran Mampet di Bandung`,
    description:
      "Layanan profesional WC mampet dan pipa tersumbat di Bandung tanpa bongkar.",
    images: [`${siteConfig.domain}/hero.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="bg-slate-50 text-slate-900 min-h-screen flex flex-col font-sans antialiased">
        <div className="flex-grow">{children}</div>
        <FloatingWhatsApp />
      </body>
    </html>
  );
}