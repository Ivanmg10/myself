import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";
import { content, hasLocale } from "@/data/content";

export const alt = "Iván Márquez García, senior frontend developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const avatar = readFile(join(process.cwd(), "public/images/avatar.jpg"), "base64");

export default async function Image({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const c = content[lang];
  const photo = `data:image/jpeg;base64,${await avatar}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0a0a0a",
          display: "flex",
          alignItems: "center",
          gap: 56,
          padding: 96,
        }}
      >
        <img src={photo} alt="" width={220} height={220} style={{ borderRadius: 9999 }} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 64, color: "#ededed" }}>Iván Márquez García</div>
          <div style={{ fontSize: 34, color: "#a3a3a3", marginTop: 16 }}>{c.role}</div>
          <div style={{ fontSize: 28, color: "#a3a3a3", marginTop: 12 }}>{c.place}</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
