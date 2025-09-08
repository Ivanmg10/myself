import { render, screen } from "@testing-library/react";
import Home from "./page";

test("renders home page", () => {
  render(<Home />);
  expect(screen.getByText("Mis proyectos")).toBeInTheDocument();
});
