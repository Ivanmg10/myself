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

  test("returns an array of the correct length", async () => {
    const result = await generateStaticParams();
    expect(result).toHaveLength(3);
  });
});

describe("DefaultProjectsPage", () => {
  test("renders with given slug from params Promise", async () => {
    const params = Promise.resolve({ slug: "project-1" });
    render(await DefaultProjectsPage({ params }));
    expect(screen.getByTestId("default-projects-page")).toBeInTheDocument();
    expect(screen.getByText("project-1")).toBeInTheDocument();
  });

  test("renders heading", async () => {
    const params = Promise.resolve({ slug: "project-2" });
    render(await DefaultProjectsPage({ params }));
    expect(screen.getByText("My Projects")).toBeInTheDocument();
  });
});
