import { useReveal } from "../../hooks/use-reveal";
import { GEAR, LINKS } from "../../lib/copy";
import { useLang } from "./lang-context";
import { SectionHead } from "./section-head";

export function Rider() {
  const { lang, t } = useLang();
  const listRef = useReveal<HTMLUListElement>();
  const sideRef = useReveal<HTMLDivElement>();
  const cardsRef = useReveal<HTMLDivElement>();

  return (
    <section id="rider" className="border-t border-line px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <SectionHead kicker={t.rider.kicker} title={t.rider.title} note={t.rider.note} />

        <p className="kicker mb-5 text-accent">{t.rider.gearTitle}</p>
        <div ref={cardsRef} className="reveal mb-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {GEAR.map((item, i) => (
            <article
              key={item.id}
              className="gear-card reveal-card border border-line bg-bg-elev p-6 transition-colors hover:border-accent"
              style={{ "--reveal-delay": `${i * 70}ms` } as React.CSSProperties}
            >
              <div className="mb-6 flex items-start justify-between gap-3">
                <span className="kicker text-accent">{item.role[lang]}</span>
                <span className="font-mono text-2xl text-fg/40">{item.qty}</span>
              </div>
              <h3 className="font-display text-xl leading-tight md:text-2xl">{item.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-fg-dim">{item.detail[lang]}</p>
            </article>
          ))}
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <ul ref={listRef} className="reveal border-t border-line">
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

          <div
            ref={sideRef}
            className="reveal flex flex-col justify-between gap-6 border border-line bg-bg-elev p-7"
            style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
          >
            <p className="text-sm leading-relaxed text-fg-dim">{t.rider.flexible}</p>
            <div className="flex flex-col gap-3">
              <a
                href={LINKS.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="kicker self-start border border-accent px-6 py-3 text-accent transition-colors hover:bg-accent hover:text-bg"
              >
                WhatsApp ↗
              </a>
              <a
                href="#renta"
                className="kicker self-start border border-line px-6 py-3 transition-colors hover:border-accent hover:text-accent"
              >
                {lang === "es" ? "Rentar equipo →" : "Rent gear →"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
