import { useReveal } from "../../hooks/use-reveal";
import { LINKS, VIDEOS } from "../../lib/copy";
import { useLang } from "./lang-context";
import { SectionHead } from "./section-head";

export function Videos() {
  const { lang, t } = useLang();
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="videos" className="border-t border-line px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <SectionHead kicker={t.videos.kicker} title={t.videos.title} note={t.videos.note} />

        <div ref={ref} className="reveal grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {VIDEOS.map((v, i) => (
            <a
              key={v.id}
              href={v.href}
              target="_blank"
              rel="noreferrer"
              className="group relative flex min-h-[280px] flex-col justify-between overflow-hidden border border-line bg-bg-elev p-6 transition-colors hover:border-accent"
              style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-40 transition-opacity group-hover:opacity-60"
                style={{
                  background:
                    "radial-gradient(70% 60% at 80% 20%, rgba(0,229,140,0.22), transparent 65%)",
                }}
              />
              <span className="kicker relative text-accent">IG · {v.kind}</span>
              <div className="relative space-y-3">
                <h3 className="font-display text-3xl leading-none">{v.title[lang]}</h3>
                <p className="text-sm leading-relaxed text-fg-dim">{v.note[lang]}</p>
                <span className="kicker inline-flex items-center gap-2 text-fg transition-transform group-hover:translate-x-1 group-hover:text-accent">
                  {t.videos.openIg} ↗
                </span>
              </div>
            </a>
          ))}

          <a
            href={`${LINKS.instagram}reels/`}
            target="_blank"
            rel="noreferrer"
            className="group flex min-h-[280px] flex-col justify-between border border-dashed border-line p-6 transition-colors hover:border-accent"
          >
            <span className="kicker text-fg-dim">REELS</span>
            <div>
              <p className="font-display text-2xl">
                {lang === "es" ? "Más cortes en Reels" : "More cuts on Reels"}
              </p>
              <p className="kicker mt-3 text-accent transition-transform group-hover:translate-x-1">
                @ferchx_bhdp ↗
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
