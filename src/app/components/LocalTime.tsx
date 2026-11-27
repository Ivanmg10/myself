"use client";

import { useSyncExternalStore } from "react";
import { MoonIcon, SunIcon } from "./icons";

const formatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Europe/Madrid",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
});

export function madridClock(now: Date): { time: string; awake: boolean } {
  const time = formatter.format(now);
  const hour = Number(time.slice(0, 2));
  return { time, awake: hour >= 8 && hour < 23 };
}

function subscribe(onChange: () => void) {
  const id = setInterval(onChange, 30_000);
  return () => clearInterval(id);
}

const getSnapshot = () => Math.floor(Date.now() / 60_000);
const getServerSnapshot = () => null;

export default function LocalTime({
  place,
  labels,
}: {
  place: string;
  labels: { awake: string; asleep: string; localTime: string };
}) {
  const minute = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const clock = minute === null ? null : madridClock(new Date(minute * 60_000));
  const status = clock && (clock.awake ? labels.awake : labels.asleep);
  const dot = !clock ? "bg-muted" : clock.awake ? "bg-[#22c55e]" : "bg-[#ef4444]";

  return (
    <p
      title={clock ? status! : undefined}
      className="mt-5 inline-flex h-[30px] items-center gap-2 rounded-full border border-line bg-surface px-3 text-[13px] tabular-nums"
    >
      <span aria-hidden="true" className={`size-2 shrink-0 rounded-full ${dot}`} />
      {clock && <span className="sr-only">{status}.</span>}
      <span>{place}</span>
      <span aria-hidden="true" className="text-muted">·</span>
      <span className="inline-flex size-3.5 text-muted">
        {clock && (clock.awake ? <SunIcon className="size-3.5" /> : <MoonIcon className="size-3.5" />)}
      </span>
      <span>
        <span className="sr-only">{labels.localTime} </span>
        {clock ? clock.time : "--:--"}
      </span>
    </p>
  );
}
