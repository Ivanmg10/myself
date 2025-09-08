import { render, screen } from "@testing-library/react";
import DefaultHeader from "./DefaultHeader";

test("renders home page", () => {
  render(<DefaultHeader />);
  expect(screen.getByTestId("default-header")).toBeInTheDocument();
});
