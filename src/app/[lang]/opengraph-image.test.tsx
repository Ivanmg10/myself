/** @jest-environment node */
import Image, { alt, contentType, size } from "./opengraph-image";

const mockImageResponse = jest.fn();

jest.mock("next/og", () => ({
  ImageResponse: function (...args: unknown[]) {
    mockImageResponse(...args);
  },
}));

jest.mock("next/navigation", () => ({
  notFound: () => {
    throw new Error("NEXT_NOT_FOUND");
  },
}));

const props = (lang: string) => ({ params: Promise.resolve({ lang }) });

describe("opengraph image", () => {
  beforeEach(() => mockImageResponse.mockClear());

  it("exports its metadata", () => {
    expect(size).toEqual({ width: 1200, height: 630 });
    expect(contentType).toBe("image/png");
    expect(alt).toBe("Iván Márquez García, senior frontend developer");
  });

  it("renders the Spanish card at 1200x630", async () => {
    await Image(props("es"));
    const [element, options] = mockImageResponse.mock.calls[0];
    expect(options).toEqual({ width: 1200, height: 630 });
    expect(JSON.stringify(element)).toContain("Desarrollador frontend senior en Sngular");
  });

  it("404s an unknown locale", async () => {
    await expect(Image(props("fr"))).rejects.toThrow("NEXT_NOT_FOUND");
  });
});
