import { render, screen } from "@testing-library/react";
import AboutPage from "./page";

test("renders about page with components", () => {
  render(<AboutPage />);
  expect(screen.getByTestId("about-page")).toBeInTheDocument();
  expect(screen.getByTestId("about-me-component")).toBeInTheDocument();
  expect(screen.getByTestId("about-me-line")).toBeInTheDocument();
});

test("renders about page heading", () => {
  render(<AboutPage />);
  expect(screen.getByText("Sobre mí")).toBeInTheDocument();
});
