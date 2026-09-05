import { useReveal } from "../../hooks/use-reveal";
import { LINKS } from "../../lib/copy";
import { useLang } from "./lang-context";
import { SectionHead } from "./section-head";

const PLATFORMS = [
  { name: "Spotify", href: LINKS.spotify },
  { name: "Apple Music", href: LINKS.appleMusic },
  { name: "SoundCloud", href: LINKS.soundcloud },
];

export function Sets() {
  const { t } = useLang();
  const scRef = useReveal<HTMLDivElement>();
  const spRef = useReveal<HTMLDivElement>();

  return (
    <section id="sets" className="border-t border-line px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <SectionHead kicker={t.sets.kicker} title={t.sets.title} note={t.sets.note} />

        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div ref={scRef} className="reveal border border-line bg-bg-elev p-3">
            <iframe
              title="FerchX en SoundCloud"
              width="100%"
              height="420"
              allow="autoplay"
              loading="lazy"
              src="https://w.soundcloud.com/player/?url=https%3A%2F%2Fsoundcloud.com%2Fferchx0408&color=%2300e58c&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false"
            />
          </div>

          <div
            ref={spRef}
            className="reveal flex flex-col gap-6"
            style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
          >
            <div className="border border-line bg-bg-elev p-3">
              <iframe
                title="FerchX en Spotify"
                src={LINKS.spotifyEmbed}
                width="100%"
                height="352"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                style={{ border: 0 }}
              />
            </div>

            <div>
              <p className="kicker mb-3">{t.sets.platforms}</p>
              <ul className="border-t border-line">
                {PLATFORMS.map((p) => (
                  <li key={p.name} className="border-b border-line">
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between py-4 transition-colors hover:text-accent"
                    >
                      <span className="font-display text-xl">{p.name}</span>
                      <span className="kicker transition-transform group-hover:translate-x-1">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
