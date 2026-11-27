import { render, screen } from "@testing-library/react";
import Page from "./page";

jest.mock("next/navigation", () => ({
  notFound: () => {
    throw new Error("NEXT_NOT_FOUND");
  },
}));

const props = (lang: string) => ({ params: Promise.resolve({ lang }) }) as never;

describe("[lang] page", () => {
  it("renders the portfolio", async () => {
    render(await Page(props("en")));
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Iván Márquez García");
  });

  it("404s an unknown locale", async () => {
    await expect(Page(props("fr"))).rejects.toThrow("NEXT_NOT_FOUND");
  });
});
