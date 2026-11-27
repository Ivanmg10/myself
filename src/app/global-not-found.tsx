import "./globals.css";
import Link from "next/link";
import { Roboto, Roboto_Mono } from "next/font/google";
import type { Metadata } from "next";

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

export const metadata: Metadata = {
  title: "Page not found · Iván Márquez García",
};

const link =
  "text-fg underline decoration-line-strong underline-offset-[3px] transition-colors duration-200 hover:decoration-accent";

export default function GlobalNotFound() {
  return (
    <html lang="en" className={`${roboto.variable} ${robotoMono.variable}`}>
      <body>
        <div className="min-h-dvh bg-page px-6 py-[120px] font-sans text-fg antialiased">
          <div className="mx-auto max-w-[600px]">
            <h1 className="text-[26px] font-medium">Page not found</h1>
            <p className="mt-2 text-[15.5px] text-muted">This page does not exist.</p>
            <p className="mt-7 flex gap-6 text-[15.5px]">
              <Link href="/" prefetch={false} className={link}>
                Back to the portfolio
              </Link>
              <Link href="/es" prefetch={false} className={link}>
                <span lang="es">Volver al portfolio</span>
              </Link>
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}
