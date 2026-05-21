import { render, screen } from "@testing-library/react";
import SocialLinks from "./SocialLinks";

test("renders all social links", () => {
  render(<SocialLinks />);
  expect(screen.getByText("CV")).toBeInTheDocument();
  expect(screen.getByText("Git")).toBeInTheDocument();
  expect(screen.getByText("LinkedIn")).toBeInTheDocument();
});

test("renders without labels when showLabels is false", () => {
  render(<SocialLinks showLabels={false} />);
  expect(screen.queryByText("CV")).not.toBeInTheDocument();
  expect(screen.queryByText("Git")).not.toBeInTheDocument();
  expect(screen.queryByText("LinkedIn")).not.toBeInTheDocument();
});
