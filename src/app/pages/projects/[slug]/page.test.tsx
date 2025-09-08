import { render, screen } from "@testing-library/react";
import DefaultProjectsPage, { generateStaticParams } from "./page";

describe("generateStaticParams", () => {
  test("returns correct array of params", async () => {
    const result = await generateStaticParams();
    expect(result).toEqual([
      { slug: "project-1" },
      { slug: "project-2" },
      { slug: "project-3" },
    ]);
  });

  test("render default projects page", () => {
    render(<DefaultProjectsPage params={{ slug: "project-1" }} />);
    expect(screen.getByTestId("default-projects-page")).toBeInTheDocument();
  });

  test("returns an array of the correct length", async () => {
    const result = await generateStaticParams();
    expect(result).toHaveLength(3);
  });
});
