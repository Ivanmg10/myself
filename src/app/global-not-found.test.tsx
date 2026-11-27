import { renderToStaticMarkup } from "react-dom/server";
import GlobalNotFound, { metadata } from "./global-not-found";

jest.mock("next/font/google", () => ({
  Roboto: () => ({ variable: "roboto-var" }),
  Roboto_Mono: () => ({ variable: "mono-var" }),
}));

describe("global-not-found", () => {
  it("renders the message and both links", () => {
    const html = renderToStaticMarkup(<GlobalNotFound />);
    expect(html).toContain("Page not found");
    expect(html).toContain('href="/"');
    expect(html).toContain('href="/es"');
  });

  it("sets the page title", () => {
    expect(metadata.title).toBe("Page not found · Iván Márquez García");
  });
});
