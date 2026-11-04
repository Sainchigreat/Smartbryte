import { NAV, APPLY_LABEL } from "../lib/content";
import { Container } from "./ui";
import { Wordmark } from "./Header";
import { Starburst, Sparkle } from "./shapes";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-paper">
      <Starburst className="pointer-events-none absolute -bottom-10 -right-8 h-36 w-36 rotate-12 text-violet opacity-60" />
      <Container className="relative py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <Wordmark dark />

          <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[15px] font-medium text-paper/70 transition-colors hover:text-paper"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#apply"
              className="text-[15px] font-semibold text-sun transition-colors hover:text-sun-deep"
            >
              {APPLY_LABEL}
            </a>
          </nav>
        </div>

        <div className="mt-12 flex items-center gap-2.5 border-t border-paper/15 pt-6">
          <Sparkle className="h-4 w-4 text-sun" />
          <span className="text-sm font-semibold tracking-[-0.01em] text-paper/60">
            SmartBryte
          </span>
        </div>
      </Container>
    </footer>
  );
}
