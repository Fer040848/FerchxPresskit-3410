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

        <div ref={ref} className="reveal grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {VIDEOS.map((v, i) => (
            <article
              key={v.id}
              className="flex flex-col overflow-hidden border border-line bg-bg-elev"
              style={{ "--reveal-delay": `${i * 60}ms` } as React.CSSProperties}
            >
              {"embed" in v && v.embed ? (
                <div className="relative aspect-[4/5] w-full overflow-hidden border-b border-line bg-bg">
                  <iframe
                    title={v.title[lang]}
                    src={v.embed}
                    className="absolute inset-0 h-full w-full"
                    loading="lazy"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              ) : (
                <a
                  href={v.href}
                  target="_blank"
                  rel="noreferrer"
                  className="relative flex min-h-[220px] flex-col justify-between p-6 transition-colors hover:bg-bg"
                >
                  <div
                    className="pointer-events-none absolute inset-0 opacity-40"
                    style={{
                      background:
                        "radial-gradient(70% 60% at 80% 20%, rgba(0,229,140,0.22), transparent 65%)",
                    }}
                  />
                  <span className="kicker relative text-accent">IG · {v.kind}</span>
                  <span className="relative font-display text-3xl leading-none">{v.title[lang]}</span>
                </a>
              )}

              <div className="flex flex-1 flex-col justify-between gap-4 p-5">
                <div>
                  <h3 className="font-display text-xl leading-tight">{v.title[lang]}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-dim">{v.note[lang]}</p>
                </div>
                <a
                  href={v.href}
                  target="_blank"
                  rel="noreferrer"
                  className="kicker self-start text-accent transition-transform hover:translate-x-1"
                >
                  {t.videos.openIg} ↗
                </a>
              </div>
            </article>
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
                {lang === "es" ? "Ver todos en Instagram" : "See all on Instagram"}
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
