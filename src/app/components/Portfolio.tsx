import Image from "next/image";
import Link from "next/link";
import { content, links, type Locale } from "@/data/content";
import {
  ArrowUpRightIcon,
  CalendarIcon,
  ChevronDownIcon,
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
} from "./icons";
import LocalTime from "./LocalTime";

const count = (list: unknown[]) => String(list.length).padStart(2, "0");

const langLink =
  "relative py-1.5 transition-colors duration-200 hover:text-fg after:absolute after:-inset-x-2 after:-inset-y-3 after:content-['']";
const bioLink =
  "text-fg underline decoration-line-strong underline-offset-[3px] transition-colors duration-200 hover:decoration-fg";
const sectionTitle = "mb-3 font-mono text-[13px] font-normal text-muted";
const iconLink =
  "hit inline-flex size-[34px] items-center justify-center rounded-full text-muted transition-colors duration-200 hover:text-fg";

export default function Portfolio({ lang }: { lang: Locale }) {
  const c = content[lang];

  return (
    <div className="min-h-dvh bg-page px-6 py-[120px] font-sans text-fg antialiased">
      <div className="mx-auto max-w-[600px]">
        <header>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-4">
            <Image
              src="/images/avatar.jpg"
              alt={c.photoAlt}
              width={88}
              height={88}
              preload
              quality={90}
              className="size-[88px] shrink-0 rounded-full object-cover"
            />
            <div className="order-3 min-w-0 basis-full sm:order-2 sm:flex-1 sm:basis-auto">
              <h1 className="text-[26px] leading-tight font-medium tracking-[-0.01em]">
                Iván Márquez García
              </h1>
              <p className="mt-1 text-[15px] text-muted">{c.role}</p>
            </div>
            <nav
              aria-label={c.langNav}
              className="order-2 ml-auto flex items-center gap-3 font-mono text-[13px] text-muted sm:order-3 sm:ml-0"
            >
              <Link
                href="/?lang=en"
                prefetch={false}
                lang="en"
                hrefLang="en"
                aria-label="English"
                aria-current={lang === "en" ? "page" : undefined}
                className={langLink + (lang === "en" ? " text-fg" : "")}
              >
                en
              </Link>
              <span aria-hidden="true">/</span>
              <Link
                href="/es"
                prefetch={false}
                lang="es"
                hrefLang="es"
                aria-label="Español"
                aria-current={lang === "es" ? "page" : undefined}
                className={langLink + (lang === "es" ? " text-fg" : "")}
              >
                es
              </Link>
            </nav>
          </div>
          <LocalTime
            place={c.place}
            labels={{ awake: c.statusAwake, asleep: c.statusAsleep, localTime: c.localTime }}
          />
          <div className="mt-7 flex flex-col gap-3.5 text-[15.5px] leading-[1.75] text-muted">
            {c.bio.map((paragraph, i) => (
              <p key={i}>
                {paragraph.map((part, j) =>
                  typeof part === "string" ? (
                    part
                  ) : (
                    <a
                      key={j}
                      href={part.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={bioLink}
                    >
                      {part.text}
                    </a>
                  ),
                )}
              </p>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-2.5">
            <a
              href={links.cv}
              download
              className="hit inline-flex h-[34px] items-center gap-[7px] rounded-full border border-pill bg-pill pr-4 pl-3.5 text-[13.5px] font-medium text-on-pill transition-colors duration-200 hover:border-transparent hover:bg-pill/85"
            >
              <DownloadIcon className="size-[15px]" />
              {c.resume}
            </a>
            {/* TODO(#12): sustituir por el enlace a Cal.com cuando el soporte confirme la cuenta. */}
            <button
              type="button"
              disabled
              className="inline-flex h-[34px] cursor-not-allowed items-center gap-[7px] rounded-full border border-line bg-surface px-3.5 text-[13.5px] font-medium text-muted"
            >
              <CalendarIcon className="size-[15px]" />
              {c.call}
              <span aria-hidden="true">·</span>
              {c.callSoon}
            </button>
            <span className="-ml-2 flex items-center gap-2.5 sm:ml-1">
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`GitHub ${c.newTab}`}
                className={iconLink}
              >
                <GitHubIcon className="size-[17px]" />
              </a>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`LinkedIn ${c.newTab}`}
                className={iconLink}
              >
                <LinkedInIcon className="size-[17px]" />
            </a>
            </span>
          </div>
        </header>
        <main>
          <section aria-labelledby="projects-title" className="mt-[72px]">
            <h2 id="projects-title" className={sectionTitle}>
              {c.projectsLabel} <span aria-hidden="true">/</span> {count(c.projects)}
            </h2>
            <ul className="flex flex-col gap-1">
              {c.projects.map((p) => (
                <li key={p.name}>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="-mx-3 flex flex-wrap items-start gap-x-[18px] gap-y-3 rounded-xl border border-transparent p-3 transition-colors duration-200 hover:border-line hover:bg-card"
                  >
                    <Image
                      src={p.banner}
                      alt=""
                      width={1200}
                      height={630}
                      sizes="(min-width: 640px) 168px, 100vw"
                      className="aspect-[1200/630] w-full shrink-0 rounded-lg border border-line sm:w-[168px]"
                    />
                    <div className="min-w-0 flex-[1_1_240px]">
                      <p className="flex items-center gap-[5px] text-[15px] font-medium">
                        {p.name}
                        <ArrowUpRightIcon className="size-[13px] text-muted" />
                        <span className="sr-only">{c.newTab}</span>
                      </p>
                      <p className="mt-1 text-[14px] leading-[1.6] text-muted">{p.description}</p>
                      <p className="mt-1.5 text-[12.5px] text-muted">{p.stack.join(" · ")}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </section>
          <section aria-labelledby="experience-title" className="mt-16">
            <h2 id="experience-title" className={sectionTitle}>
              {c.experienceLabel} <span aria-hidden="true">/</span> {count(c.jobs)}
            </h2>
            <div className="flex flex-col gap-1">
              {c.jobs.map((job, i) => (
                <details key={job.company} open={i < c.jobs.length - 1} className="group">
                  <summary className="group/summary flex items-center gap-3.5 rounded-lg py-2.5">
                    <Image
                      src={job.logo}
                      alt=""
                      width={32}
                      height={32}
                      className="size-8 shrink-0 rounded-lg border border-line object-cover"
                    />
                    <span className="min-w-0 flex-1">
                      <span className="block text-[15px] font-medium">{job.company}</span>
                      <span className="mt-0.5 block text-[14px] text-muted">{job.role}</span>
                    </span>
                    <span className="whitespace-nowrap text-[13px] text-muted tabular-nums">
                      {job.dates}
                    </span>
                    <ChevronDownIcon className="size-4 shrink-0 text-muted transition-[color,transform] duration-200 group-hover/summary:text-fg group-open:rotate-180" />
                  </summary>
                  <div className="mt-1 mb-3 ml-[46px] flex flex-col gap-2.5 text-[14px] leading-[1.7] text-muted">
                    {job.paragraphs.map((t, k) => (
                      <p key={k}>{t}</p>
                    ))}
                  </div>
                </details>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
