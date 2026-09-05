import { useReveal } from "../../hooks/use-reveal";
import { LINKS } from "../../lib/copy";
import { useLang } from "./lang-context";
import { SectionHead } from "./section-head";

export function GearRental() {
  const { t } = useLang();
  const ref = useReveal<HTMLDivElement>();
  const frameRef = useReveal<HTMLDivElement>();

  return (
    <section id="renta" className="border-t border-line px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <SectionHead kicker={t.gear.kicker} title={t.gear.title} note={t.gear.note} />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div ref={ref} className="reveal flex flex-col gap-8">
            <ul className="border-t border-line">
              {t.gear.points.map((point) => (
                <li key={point} className="flex gap-4 border-b border-line py-4">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="text-sm leading-relaxed text-fg/90 md:text-base">{point}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <a
                href={LINKS.nodo}
                target="_blank"
                rel="noreferrer"
                className="kicker border border-accent px-6 py-3 text-accent transition-colors hover:bg-accent hover:text-bg"
              >
                {t.gear.cta} ↗
              </a>
              <a
                href={LINKS.nodo}
                target="_blank"
                rel="noreferrer"
                className="kicker border border-line px-6 py-3 transition-colors hover:border-fg"
              >
                {t.gear.visit}
              </a>
            </div>
          </div>

          <div
            ref={frameRef}
            className="reveal overflow-hidden border border-line bg-bg-elev"
            style={{ "--reveal-delay": "100ms" } as React.CSSProperties}
          >
            <div className="flex items-center justify-between border-b border-line px-4 py-3">
              <span className="kicker text-accent">nododjgear.com</span>
              <span className="kicker">NODO</span>
            </div>
            <iframe
              title="Nodo DJ Gear"
              src="https://nododjgear.com"
              className="h-[420px] w-full bg-bg md:h-[520px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
