import { render, screen } from "@testing-library/react";
import ProjectsPage from "./page";

jest.mock("@/constants/project", () => ({
  hasProjects: true,
}));

test("renders projects page", () => {
  render(<ProjectsPage />);
  expect(screen.getByTestId("projects-page")).toBeInTheDocument();
});

// test("renders projects with no projects", () => {
//   render(<ProjectsPage />);
//   expect(screen.getByTestId("projects-page")).toBeInTheDocument();
//   expect(screen.queryByTestId("project-card-flowey")).toBeInTheDocument();
// });

test("renders projects with projects", () => {
  render(<ProjectsPage />);
  expect(screen.getByTestId("projects-page")).toBeInTheDocument();
  expect(screen.queryByTestId("project-card-1")).toBeInTheDocument();
});
