import { render, screen } from "@testing-library/react";
import Portfolio from "./Portfolio";

describe("Portfolio (en)", () => {
  beforeEach(() => {
    render(<Portfolio lang="en" />);
  });

  it("renders heading and role", () => {
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Iván Márquez García");
    expect(screen.getByText("Senior frontend developer at Sngular")).toBeInTheDocument();
  });

  it.each([
    ["Sngular", "https://www.sngular.com"],
    ["Capgemini", "https://www.capgemini.com"],
    ["CheevoVault", "https://cheevovault.com"],
    ["Eden Psicología", "https://edenpsicologia.com"],
  ])("links %s in the bio", (name, href) => {
    const link = screen.getAllByRole("link", { name }).find((l) => l.className.includes("underline"));
    expect(link).toHaveAttribute("href", href);
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("has the resume download", () => {
    const link = screen.getByRole("link", { name: "Resume" });
    expect(link).toHaveAttribute("href", "/cv.pdf");
    expect(link).toHaveAttribute("download");
  });

  it("has a disabled call button", () => {
    const button = screen.getByRole("button", { name: /Book a call.*soon/ });
    expect(button).toBeDisabled();
  });

  it("labels the social links", () => {
    expect(screen.getByRole("link", { name: "GitHub (opens in a new tab)" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "LinkedIn (opens in a new tab)" })).toBeInTheDocument();
  });

  it("marks the active language", () => {
    expect(screen.getByRole("link", { name: "English" })).toHaveAttribute("aria-current", "page");
    const es = screen.getByRole("link", { name: "Español" });
    expect(es).toHaveAttribute("href", "/es");
    expect(es).not.toHaveAttribute("aria-current");
  });

  it("renders section titles", () => {
    expect(document.getElementById("projects-title")).toHaveTextContent("projects / 02");
    expect(document.getElementById("experience-title")).toHaveTextContent("experience / 02");
  });

  it("opens all jobs but the last", () => {
    const [first, second] = Array.from(document.querySelectorAll("details"));
    expect(first).toHaveAttribute("open");
    expect(second).not.toHaveAttribute("open");
  });

  it("uses the English banner", () => {
    expect(document.querySelector('img[src*="cheevovault-en"]')).toBeInTheDocument();
  });
});

describe("Portfolio (es)", () => {
  beforeEach(() => {
    render(<Portfolio lang="es" />);
  });

  it("renders the Spanish copy", () => {
    expect(screen.getByText("Desarrollador frontend senior en Sngular")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Currículum" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Reservar una llamada.*pronto/ })).toBeDisabled();
  });

  it("marks Español as active and links en to the cookie reset", () => {
    expect(screen.getByRole("link", { name: "Español" })).toHaveAttribute("aria-current", "page");
    const en = screen.getByRole("link", { name: "English" });
    expect(en).toHaveAttribute("href", "/?lang=en");
    expect(en).not.toHaveAttribute("aria-current");
  });

  it("uses the Spanish banner", () => {
    expect(document.querySelector('img[src*="cheevovault-es"]')).toBeInTheDocument();
  });
});
