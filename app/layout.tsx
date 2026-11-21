import type { Metadata } from "next";
import Script from "next/script";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { siteConfig } from "@/config/site";
import { generateLocalBusinessSchema } from "@/lib/schema";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: "perbaikansaluranmampet.com - Jasa Saluran Mampet Bandung Terdekat 24 Jam",
    template: "%s | perbaikansaluranmampet.com",
  },
  description:
    "Jasa perbaikan saluran mampet Bandung terdekat & pelancar WC tanpa bongkar. Teknisi ahli bergaransi 24 jam. Hubungi ☎️ 0851-2277-7253.",
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
    title: "perbaikansaluranmampet.com - Jasa Saluran Mampet Bandung Terdekat 24 Jam",
    description:
      "Jasa perbaikan saluran mampet Bandung terdekat & pelancar WC tanpa bongkar. Teknisi ahli bergaransi 24 jam. Hubungi ☎️ 0851-2277-7253.",
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
    title: `${siteConfig.brandName} - Jasa Saluran Mampet Bandung 24 Jam`,
    description:
      "Jasa perbaikan saluran mampet Bandung terdekat tanpa bongkar. Hubungi ☎️ 0851-2277-7253.",
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