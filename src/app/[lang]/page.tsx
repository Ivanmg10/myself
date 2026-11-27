import { notFound } from "next/navigation";
import Portfolio from "../components/Portfolio";
import { hasLocale } from "@/data/content";

export default async function Page({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <Portfolio lang={lang} />;
}
