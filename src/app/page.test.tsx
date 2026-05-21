import { render, screen } from "@testing-library/react";
import Home from "./page";

test("renders home page with heading and navigation", () => {
  render(<Home />);
  expect(screen.getByText("Iván Márquez García.")).toBeInTheDocument();
  expect(screen.getByText("Mis proyectos")).toBeInTheDocument();
  expect(screen.getByText("Sobre mi")).toBeInTheDocument();
});

test("renders social links in footer", () => {
  render(<Home />);
  expect(screen.getByText("CV")).toBeInTheDocument();
  expect(screen.getByText("Git")).toBeInTheDocument();
  expect(screen.getByText("LinkedIn")).toBeInTheDocument();
});
