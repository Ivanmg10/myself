/** @jest-environment node */
import { NextRequest } from "next/server";
import { config, prefersSpanish, proxy } from "./proxy";

const ORIGIN = "https://ivanmg10.vercel.app";
const ES = "es-ES,es;q=0.9,en;q=0.8";
const EN = "en-US,en;q=0.9,es;q=0.8";

function request(path: string, headers: Record<string, string> = {}) {
  return new NextRequest(`${ORIGIN}${path}`, { headers });
}

describe("proxy", () => {
  it("redirects / to /es for a Spanish browser without cookie", () => {
    const res = proxy(request("/", { "accept-language": ES }));
    expect(res.status).toBe(307);
    expect(res.headers.get("location")).toBe(`${ORIGIN}/es`);
  });

  it("rewrites / to /en for an English browser without cookie", () => {
    const res = proxy(request("/", { "accept-language": EN }));
    expect(res.headers.get("x-middleware-rewrite")).toBe(`${ORIGIN}/en`);
  });

  it("rewrites / to /en without Accept-Language", () => {
    expect(proxy(request("/")).headers.get("x-middleware-rewrite")).toBe(`${ORIGIN}/en`);
  });

  it("redirects to /es when the cookie is es, whatever the browser", () => {
    const res = proxy(request("/", { cookie: "lang=es", "accept-language": EN }));
    expect(res.status).toBe(307);
    expect(res.headers.get("location")).toBe(`${ORIGIN}/es`);
  });

  it("rewrites to /en when the cookie is en, whatever the browser", () => {
    const res = proxy(request("/", { cookie: "lang=en", "accept-language": ES }));
    expect(res.headers.get("x-middleware-rewrite")).toBe(`${ORIGIN}/en`);
  });

  it("sets the en cookie and cleans the URL on /?lang=en", () => {
    const res = proxy(request("/?lang=en", { cookie: "lang=es" }));
    expect(res.status).toBe(307);
    expect(res.headers.get("location")).toBe(`${ORIGIN}/`);
    expect(res.headers.get("set-cookie")).toContain("lang=en");
  });

  it("sets the es cookie on /es", () => {
    const res = proxy(request("/es"));
    expect(res.headers.get("set-cookie")).toContain("lang=es");
    expect(res.headers.get("set-cookie")).toContain("Max-Age=31536000");
  });

  it("redirects /en to /", () => {
    const res = proxy(request("/en"));
    expect(res.status).toBe(307);
    expect(res.headers.get("location")).toBe(`${ORIGIN}/`);
  });

  it("only matches /, /en and /es", () => {
    expect(config.matcher).toEqual(["/", "/en", "/es"]);
  });
});

describe("prefersSpanish", () => {
  it.each([
    [null, false],
    ["es", true],
    ["en;q=0.5, es;q=0.9", true],
    ["fr-FR,es;q=0.1", false],
    ["*", false],
  ])("%j -> %s", (header, expected) => {
    expect(prefersSpanish(header)).toBe(expected);
  });
});
