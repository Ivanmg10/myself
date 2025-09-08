import { render, screen } from "@testing-library/react";
import AboutPage from "./page";

test("render about page", () => {
  render(<AboutPage />);
  expect(screen.getByTestId("about-page")).toBeInTheDocument();
});
