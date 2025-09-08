import { render, screen } from "@testing-library/react";
import AboutMeLine from "./AboutMeLine";

test("renders home page", () => {
  render(<AboutMeLine />);
  expect(screen.getByTestId("about-me-line")).toBeInTheDocument();
});
