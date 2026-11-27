import { act, render, screen } from "@testing-library/react";
import { renderToString } from "react-dom/server";
import LocalTime, { madridClock } from "./LocalTime";

const labels = {
  awake: "Awake right now",
  asleep: "Outside my hours right now",
  localTime: "Local time:",
};

describe("madridClock", () => {
  it.each([
    ["2026-01-15T06:59:00Z", "07:59", false],
    ["2026-01-15T07:00:00Z", "08:00", true],
    ["2026-07-15T20:59:00Z", "22:59", true],
    ["2026-07-15T21:00:00Z", "23:00", false],
  ])("%s -> %s (awake: %s)", (iso, time, awake) => {
    expect(madridClock(new Date(iso))).toEqual({ time, awake });
  });
});

describe("LocalTime", () => {
  afterEach(() => jest.useRealTimers());

  it("shows the Madrid time and status", () => {
    jest.useFakeTimers({ now: new Date("2026-01-15T12:00:00Z") });
    const { container } = render(<LocalTime place="Oviedo, Spain" labels={labels} />);
    expect(screen.getByText("13:00")).toBeInTheDocument();
    expect(screen.getByText("Awake right now.")).toBeInTheDocument();
    expect(container.querySelector("p")).toHaveAttribute("title", "Awake right now");
  });

  it("updates when the time moves on", () => {
    jest.useFakeTimers({ now: new Date("2026-01-15T12:00:00Z") });
    render(<LocalTime place="Oviedo, Spain" labels={labels} />);
    jest.setSystemTime(new Date("2026-01-15T22:30:00Z"));
    act(() => {
      jest.advanceTimersByTime(30_000);
    });
    expect(screen.getByText("23:30")).toBeInTheDocument();
    expect(screen.getByText("Outside my hours right now.")).toBeInTheDocument();
  });

  it("renders a placeholder on the server", () => {
    expect(renderToString(<LocalTime place="Oviedo, Spain" labels={labels} />)).toContain("--:--");
  });
});
