import { GALLERY, LINKS, MARQUEE } from "../../lib/copy";
import { useLang } from "./lang-context";

export function Hero() {
  const { t } = useLang();

  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden">
      {/* photo backdrop */}
      <div className="absolute inset-0">
        <img
          src={GALLERY[0]}
          alt="FerchX en cabina"
          className="h-full w-full object-cover object-center opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/70 to-bg/40" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 45% at 78% 18%, rgba(0,229,140,0.16), transparent 70%)",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1400px] px-5 pb-10 md:px-10 md:pb-14">
        <div className="rise kicker mb-6 flex items-center gap-3" style={{ "--rise-delay": "120ms" } as React.CSSProperties}>
          <span className="h-px w-10 bg-accent" />
          <span className="text-accent">{t.hero.tag}</span>
        </div>

        <h1
          className="rise display text-[clamp(4rem,19vw,17rem)]"
          style={{ "--rise-delay": "200ms" } as React.CSSProperties}
        >
          FERCHX
        </h1>

        <div
          className="rise mt-7 flex flex-col gap-6 border-t border-line pt-6 md:flex-row md:items-end md:justify-between"
          style={{ "--rise-delay": "380ms" } as React.CSSProperties}
        >
          <div className="space-y-2">
            <p className="kicker text-fg">{t.hero.genres}</p>
            <p className="kicker">{t.hero.city}</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#sets"
              className="kicker border border-accent px-6 py-3 text-accent transition-colors hover:bg-accent hover:text-bg"
            >
              {t.hero.cta}
            </a>
            <a
              href={LINKS.instagram}
              target="_blank"
              rel="noreferrer"
              className="kicker border border-line px-6 py-3 transition-colors hover:border-fg"
            >
              Instagram ↗
            </a>
          </div>
        </div>
      </div>

      {/* marquee */}
      <div
        className="rise relative border-y border-line bg-bg/40 py-3 backdrop-blur-sm"
        style={{ "--rise-delay": "520ms" } as React.CSSProperties}
      >
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0" aria-hidden={copy === 1}>
              {MARQUEE.map((word) => (
                <span key={`${copy}-${word}`} className="kicker flex items-center px-6">
                  {word}
                  <span className="ml-6 h-1 w-1 rounded-full bg-accent" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
