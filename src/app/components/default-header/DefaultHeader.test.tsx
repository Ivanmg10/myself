import { render, screen } from "@testing-library/react";
import DefaultHeader from "./DefaultHeader";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

jest.mock("../social-links/SocialLinks", () => ({
  __esModule: true,
  default: () => <div data-testid="social-links">SocialLinks</div>,
}));

import { usePathname } from "next/navigation";
const mockUsePathname = usePathname as jest.Mock;

describe("DefaultHeader", () => {
  test("renders the nav element", () => {
    mockUsePathname.mockReturnValue("/unknown");
    render(<DefaultHeader />);
    expect(screen.getByTestId("default-header")).toBeInTheDocument();
  });

  test("renders navigation links", () => {
    mockUsePathname.mockReturnValue("/unknown");
    render(<DefaultHeader />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Proyectos")).toBeInTheDocument();
    expect(screen.getByText("Ivan Marquez Garcia")).toBeInTheDocument();
  });

  test("renders social links component", () => {
    mockUsePathname.mockReturnValue("/unknown");
    render(<DefaultHeader />);
    expect(screen.getByTestId("social-links")).toBeInTheDocument();
  });

  test("highlights home link when pathname is /", () => {
    mockUsePathname.mockReturnValue("/");
    render(<DefaultHeader />);
    expect(screen.getByText("Home").className.split(" ")).toContain("text-[#a29bfe]");
  });

  test("highlights about link when pathname is /pages/about", () => {
    mockUsePathname.mockReturnValue("/pages/about");
    render(<DefaultHeader />);
    expect(screen.getByText("Ivan Marquez Garcia").className.split(" ")).toContain("text-[#a29bfe]");
  });

  test("highlights projects link when pathname is /pages/projects", () => {
    mockUsePathname.mockReturnValue("/pages/projects");
    render(<DefaultHeader />);
    expect(screen.getByText("Proyectos").className.split(" ")).toContain("text-[#a29bfe]");
  });

  test("no link highlighted on unknown path", () => {
    mockUsePathname.mockReturnValue("/unknown");
    render(<DefaultHeader />);
    expect(screen.getByText("Home").className.split(" ")).not.toContain("text-[#a29bfe]");
    expect(screen.getByText("Proyectos").className.split(" ")).not.toContain("text-[#a29bfe]");
  });
});
