import { render, screen } from "@testing-library/react";
import Home from "./page";

test("renders button with label", () => {
  render(<Home />);
  expect(screen.getByText("Mis proyectos")).toBeInTheDocument();
});
