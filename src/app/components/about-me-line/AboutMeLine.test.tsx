import { render, screen } from "@testing-library/react";
import AboutMeLine from "./AboutMeLine";

test("renders work experience timeline", () => {
  render(<AboutMeLine />);
  expect(screen.getByTestId("about-me-line")).toBeInTheDocument();
});

test("renders experience heading on mobile", () => {
  render(<AboutMeLine />);
  expect(screen.getByText("Experiencia laboral")).toBeInTheDocument();
});

test("renders all work experiences", () => {
  render(<AboutMeLine />);
  expect(screen.getByText("Capgemini • 2021 - 2026")).toBeInTheDocument();
  expect(screen.getByText("Sngular • 2026 - Actualidad")).toBeInTheDocument();
});

test("renders role titles", () => {
  render(<AboutMeLine />);
  expect(screen.getByText("Desarrollador Frontend")).toBeInTheDocument();
  expect(screen.getByText("Desarrollador Frontend Senior")).toBeInTheDocument();
});
