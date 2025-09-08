import { render, screen } from "@testing-library/react";
import AboutMeComponent from "./AboutMeComponent";

test("renders home page", () => {
  render(<AboutMeComponent />);
  expect(screen.getByTestId("about-me-component")).toBeInTheDocument();
});
