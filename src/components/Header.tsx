import { useEffect, useState } from "react";
import { NAV, APPLY_LABEL } from "../lib/content";
import { Container, PillLink } from "./ui";
import { Sparkle } from "./shapes";

export function Wordmark({ dark = false }: { dark?: boolean }) {
  return (
    <a
      href="#home"
      className="inline-flex items-center gap-2.5"
      aria-label="SmartBryte — back to top"
    >
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-violet">
        <Sparkle className="h-5 w-5 text-sun" />
      </span>
      <span
        className={`text-xl font-extrabold tracking-[-0.02em] ${
          dark ? "text-paper" : "text-ink"
        }`}
      >
        Smart<span className={dark ? "text-sun" : "text-violet"}>Bryte</span>
      </span>
    </a>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#home");

  // Lightweight scroll-spy: highlight the section currently in view.
  useEffect(() => {
    const ids = NAV.map((n) => n.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur-[2px]">
      <Container className="flex h-[72px] items-center justify-between gap-4">
        <Wordmark />

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={active === item.href ? "true" : undefined}
              className={`relative text-[15px] font-medium transition-colors hover:text-ink ${
                active === item.href ? "text-violet" : "text-ink-soft"
              }`}
            >
              {item.label}
              <span
                aria-hidden
                className={`absolute -bottom-1.5 left-0 h-[2px] rounded-full bg-violet transition-all duration-200 ${
                  active === item.href ? "w-full" : "w-0"
                }`}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <PillLink
            href="#apply"
            size="sm"
            className="hidden sm:inline-flex"
            arrow={false}
          >
            {APPLY_LABEL}
          </PillLink>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 text-ink lg:hidden"
          >
            <span aria-hidden className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 top-0 h-[2px] w-full rounded bg-current transition-transform duration-200 ${
                  open ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[6px] h-[2px] w-full rounded bg-current transition-opacity duration-200 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[12px] h-[2px] w-full rounded bg-current transition-transform duration-200 ${
                  open ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-line transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-[420px] border-b" : "max-h-0"
        }`}
      >
        <Container className="flex flex-col gap-1 py-4">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-base font-medium text-ink-soft transition-colors hover:bg-paper-soft hover:text-ink"
            >
              {item.label}
            </a>
          ))}
          <PillLink
            href="#apply"
            size="md"
            className="mt-2 self-start"
            onClick={() => setOpen(false)}
          >
            {APPLY_LABEL}
          </PillLink>
        </Container>
      </div>
    </header>
  );
}
