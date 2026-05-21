import { render, screen } from "@testing-library/react";
import NotFound from "./not-found";

test("renders 404 heading", () => {
  render(<NotFound />);
  expect(screen.getByText("404")).toBeInTheDocument();
});

test("renders not found message", () => {
  render(<NotFound />);
  expect(
    screen.getByText("Página no encontrada"),
  ).toBeInTheDocument();
});

test("renders back to home link", () => {
  render(<NotFound />);
  expect(
    screen.getByText("Volver al inicio"),
  ).toBeInTheDocument();
});
