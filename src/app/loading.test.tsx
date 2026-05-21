import { render } from "@testing-library/react";
import Loading from "./loading";

test("renders loading spinner", () => {
  const { container } = render(<Loading />);
  const spinner = container.querySelector(".animate-spin");
  expect(spinner).toBeInTheDocument();
});
