import { render, screen } from "@testing-library/react";
import Error from "./error";

const mockReset = jest.fn();

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
});

afterEach(() => {
  jest.restoreAllMocks();
});

test("renders error heading", () => {
  render(
    <Error error={new Error("test error")} reset={mockReset} />,
  );
  expect(screen.getByText("Algo salió mal")).toBeInTheDocument();
});

test("renders retry button", () => {
  render(
    <Error error={new Error("test error")} reset={mockReset} />,
  );
  expect(
    screen.getByText("Intentar de nuevo"),
  ).toBeInTheDocument();
});
