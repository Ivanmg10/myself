import { content, hasLocale, links, locales, SITE_URL } from "./content";

type Shape = string | { [key: string]: Shape } | Shape[];

function shape(value: unknown): Shape {
  if (typeof value === "string") return "string";
  if (Array.isArray(value)) return value.map(shape);
  return Object.fromEntries(
    Object.entries(value as object).map(([k, v]) => [k, shape(v)]),
  );
}

function strings(value: unknown): string[] {
  if (typeof value === "string") return [value];
  return Object.values(value as object).flatMap(strings);
}

describe("hasLocale", () => {
  it.each(["en", "es"])("accepts %s", (value) => {
    expect(hasLocale(value)).toBe(true);
  });

  it.each(["fr", ""])("rejects %j", (value) => {
    expect(hasLocale(value)).toBe(false);
  });
});

describe("constants", () => {
  it("lists the supported locales", () => {
    expect(locales).toEqual(["en", "es"]);
  });

  it("uses absolute URLs for the site and external links", () => {
    expect(SITE_URL.startsWith("https://")).toBe(true);
    const { cv, ...external } = links;
    expect(cv).toBe("/cv.pdf");
    Object.values(external).forEach((url) => expect(url.startsWith("https://")).toBe(true));
  });
});

describe("content", () => {
  it("has the same structure in en and es", () => {
    expect(shape(content.en)).toEqual(shape(content.es));
  });

  it("has the same number of projects, jobs and paragraphs", () => {
    expect(content.es.projects).toHaveLength(content.en.projects.length);
    expect(content.es.jobs).toHaveLength(content.en.jobs.length);
    content.en.jobs.forEach((job, i) => {
      expect(content.es.jobs[i].paragraphs).toHaveLength(job.paragraphs.length);
    });
  });

  it("has no em dashes", () => {
    expect(strings(content).filter((s) => s.includes("—"))).toEqual([]);
  });
});
