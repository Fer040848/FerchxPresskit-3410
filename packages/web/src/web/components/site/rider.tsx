import { useReveal } from "../../hooks/use-reveal";
import { LINKS } from "../../lib/copy";
import { useLang } from "./lang-context";
import { SectionHead } from "./section-head";

export function Rider() {
  const { t } = useLang();
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="rider" className="border-t border-line px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <SectionHead kicker={t.rider.kicker} title={t.rider.title} note={t.rider.note} />

        <div ref={ref} className="reveal grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <ul className="border-t border-line">
            {t.rider.rows.map((row) => (
              <li
                key={row.label}
                className="grid gap-1 border-b border-line py-5 md:grid-cols-[200px_1fr] md:gap-8"
              >
                <span className="kicker pt-1 text-accent">{row.label}</span>
                <span className="font-mono text-sm leading-relaxed text-fg/90">{row.value}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col justify-between gap-6 border border-line bg-bg-elev p-7">
            <p className="text-sm leading-relaxed text-fg-dim">{t.rider.flexible}</p>
            <a
              href={LINKS.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="kicker self-start border border-accent px-6 py-3 text-accent transition-colors hover:bg-accent hover:text-bg"
            >
              WhatsApp ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
