import { renderToStaticMarkup } from "react-dom/server";
import RootLayout, { dynamicParams, generateMetadata, generateStaticParams, viewport } from "./layout";

jest.mock("next/font/google", () => ({
  Roboto: () => ({ variable: "roboto-var", className: "roboto" }),
  Roboto_Mono: () => ({ variable: "mono-var", className: "mono" }),
}));

jest.mock("next/navigation", () => ({
  notFound: () => {
    throw new Error("NEXT_NOT_FOUND");
  },
}));

const props = (lang: string) =>
  ({ params: Promise.resolve({ lang }) }) as unknown as Parameters<typeof generateMetadata>[0];

describe("[lang] layout", () => {
  it("generates both locales statically", () => {
    expect(generateStaticParams()).toEqual([{ lang: "en" }, { lang: "es" }]);
    expect(dynamicParams).toBe(false);
  });

  it("exports the viewport", () => {
    expect(viewport).toEqual({ width: "device-width", initialScale: 1 });
  });

  it("builds English metadata", async () => {
    const meta = await generateMetadata(props("en"));
    expect(meta.alternates).toEqual({
      canonical: "/",
      languages: { en: "/", es: "/es", "x-default": "/" },
    });
    expect(meta.openGraph).toMatchObject({ url: "/", locale: "en_US" });
  });

  it("builds Spanish metadata", async () => {
    const meta = await generateMetadata(props("es"));
    expect(meta.alternates?.canonical).toBe("/es");
    expect(meta.openGraph).toMatchObject({ url: "/es", locale: "es_ES" });
  });

  it("404s metadata for an unknown locale", async () => {
    await expect(generateMetadata(props("fr"))).rejects.toThrow("NEXT_NOT_FOUND");
  });

  it("renders html with the locale", async () => {
    const html = renderToStaticMarkup(
      await RootLayout({ ...props("es"), children: <p>hola</p> } as never),
    );
    expect(html).toContain('lang="es"');
    expect(html).toContain("roboto-var mono-var");
    expect(html).toContain("<p>hola</p>");
  });

  it("404s the layout for an unknown locale", async () => {
    await expect(RootLayout({ ...props("fr"), children: null } as never)).rejects.toThrow(
      "NEXT_NOT_FOUND",
    );
  });
});
