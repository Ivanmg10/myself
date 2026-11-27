import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Roboto, Roboto_Mono } from "next/font/google";
import "../globals.css";
import { content, hasLocale, SITE_URL } from "@/data/content";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-roboto",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-roboto-mono",
});

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }];
}

export const dynamicParams = false;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const c = content[lang];
  const path = lang === "en" ? "/" : "/es";
  return {
    metadataBase: new URL(SITE_URL),
    title: c.meta.title,
    description: c.meta.description,
    alternates: {
      canonical: path,
      languages: { en: "/", es: "/es", "x-default": "/" },
    },
    openGraph: {
      type: "website",
      url: path,
      siteName: "Iván Márquez García",
      title: c.meta.title,
      description: c.meta.description,
      locale: lang === "en" ? "en_US" : "es_ES",
    },
    twitter: { card: "summary_large_image" },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return (
    <html lang={lang} className={`${roboto.variable} ${robotoMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
