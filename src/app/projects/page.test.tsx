import { render, screen } from "@testing-library/react";
import ProjectsPage from "./page";

test("renders projects page", () => {
  render(<ProjectsPage />);
  expect(screen.getByTestId("projects-page")).toBeInTheDocument();
});

test("renders projects heading", () => {
  render(<ProjectsPage />);
  expect(screen.getByText("Mis Proyectos")).toBeInTheDocument();
});

test("renders project cards", () => {
  render(<ProjectsPage />);
  expect(screen.getByTestId("project-card-1")).toBeInTheDocument();
  expect(screen.getByTestId("project-card-2")).toBeInTheDocument();
});

test("renders project names", () => {
  render(<ProjectsPage />);
  expect(screen.getByText("Aplicación del tiempo")).toBeInTheDocument();
  expect(screen.getByText("Clon Spotify")).toBeInTheDocument();
});
