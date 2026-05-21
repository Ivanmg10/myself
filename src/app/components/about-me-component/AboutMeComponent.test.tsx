import { render, screen } from "@testing-library/react";
import AboutMeComponent from "./AboutMeComponent";

test("renders about me section with heading", () => {
  render(<AboutMeComponent />);
  expect(screen.getByTestId("about-me-component")).toBeInTheDocument();
  expect(screen.getByText("Sobre mí")).toBeInTheDocument();
});

test("renders biography text", () => {
  render(<AboutMeComponent />);
  expect(
    screen.getByText(/mi nombre es Iván/i),
  ).toBeInTheDocument();
});

test("renders technology icons", () => {
  render(<AboutMeComponent />);
  expect(screen.getByText("Tecnologías")).toBeInTheDocument();
  expect(screen.getByAltText("React")).toBeInTheDocument();
  expect(screen.getByAltText("TypeScript")).toBeInTheDocument();
  expect(screen.getByAltText("Next.js")).toBeInTheDocument();
});
