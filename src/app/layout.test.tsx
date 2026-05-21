import { render, screen } from "@testing-library/react";

jest.mock("next/font/google", () => ({
  Roboto: jest.fn(() => ({ className: "mock-roboto" })),
}));

jest.mock("./components/default-header/DefaultHeader", () => ({
  __esModule: true,
  default: () => <header data-testid="default-header">Header</header>,
}));

import RootLayout, { LayoutContent, metadata } from "./layout";

describe("RootLayout", () => {
  test("renders children inside html structure", () => {
    const consoleSpy = jest.spyOn(console, "error").mockImplementation(() => {});
    render(
      <RootLayout>
        <div data-testid="child">Child content</div>
      </RootLayout>
    );
    expect(screen.getByTestId("child")).toBeInTheDocument();
    consoleSpy.mockRestore();
  });
});

describe("LayoutContent", () => {
  test("renders DefaultHeader and children", () => {
    render(
      <LayoutContent>
        <div data-testid="child">Child content</div>
      </LayoutContent>
    );
    expect(screen.getByTestId("default-header")).toBeInTheDocument();
    expect(screen.getByTestId("child")).toBeInTheDocument();
  });
});

describe("metadata", () => {
  test("has correct title and description", () => {
    expect(metadata).toHaveProperty("title", "Ivan Marquez");
    expect(metadata).toHaveProperty("description", "Portfolio personal de Iván Márquez García — Desarrollador Frontend");
  });
});
