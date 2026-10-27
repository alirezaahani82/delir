
import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://rogayedelirazar.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "رقیه دلیر اسمعیلی آذر | وب‌سایت رسمی",
    template: "%s | رقیه دلیر اسمعیلی آذر",
  },

  description:
    "وب‌سایت رسمی رقیه دلیر اسمعیلی آذر؛ معرفی زندگی‌نامه، تحصیلات، سوابق فعالیت‌های سیاسی، اقتصادی و اجتماعی و حوزه‌های مورد توجه در تبریز و آذربایجان‌شرقی.",

  applicationName: "وب‌سایت رقیه دلیر اسمعیلی آذر",

  authors: [
    {
      name: "رقیه دلیر اسمعیلی آذر",
    },
  ],

  alternates: {
    canonical: "/",
    languages: {
      "fa-IR": "/",
    },
  },

  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: siteUrl,
    siteName: "رقیه دلیر اسمعیلی آذر",
    title: "رقیه دلیر اسمعیلی آذر | وب‌سایت رسمی",
    description:
      "آشنایی با زندگی‌نامه، تحصیلات و سوابق فعالیت‌های سیاسی، اقتصادی و اجتماعی رقیه دلیر اسمعیلی آذر.",
    images: [
      {
        url: "/images/delir.jpg",
        width: 1200,
        height: 1500,
        alt: "رقیه دلیر اسمعیلی آذر",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "رقیه دلیر اسمعیلی آذر | وب‌سایت رسمی",
    description:
      "زندگی‌نامه و معرفی سوابق فعالیت‌های سیاسی، اقتصادی و اجتماعی.",
    images: ["/images/delir.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "website",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b1730",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
