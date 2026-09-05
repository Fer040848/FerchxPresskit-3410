import { useEffect, useState } from "react";
import { useReveal } from "../../hooks/use-reveal";
import { LIGHTING_GALLERY, LIGHTING_EXPERTISE } from "../../lib/copy";
import { useLang } from "./lang-context";
import { SectionHead } from "./section-head";

export function Lighting() {
  const { lang, t } = useLang();
  const bodyRef = useReveal<HTMLDivElement>();
  const gridRef = useReveal<HTMLDivElement>();
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight")
        setActive((i) => ((i ?? 0) + 1) % LIGHTING_GALLERY.length);
      if (e.key === "ArrowLeft")
        setActive((i) => ((i ?? 0) - 1 + LIGHTING_GALLERY.length) % LIGHTING_GALLERY.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <section id="iluminacion" className="relative overflow-hidden border-t border-line px-5 py-20 md:px-10 md:py-28">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 50% at 12% 20%, rgba(0,229,140,0.10), transparent 65%), radial-gradient(40% 45% at 90% 80%, rgba(0,229,140,0.06), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1400px]">
        <SectionHead
          kicker={t.lighting.kicker}
          title={t.lighting.title}
          note={t.lighting.note}
        />

        <div ref={bodyRef} className="reveal mb-14 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-6">
            {t.lighting.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="max-w-[62ch] text-base leading-relaxed text-fg/90 md:text-lg">
                {p}
              </p>
            ))}
            <p className="kicker text-accent">{t.lighting.years}</p>
          </div>

          <div className="border border-line bg-bg-elev/80 p-6 md:p-8">
            <p className="kicker mb-5 text-accent">{t.lighting.expertiseLabel}</p>
            <ul className="space-y-0 border-t border-line">
              {LIGHTING_EXPERTISE.map((item) => (
                <li
                  key={item.id}
                  className="flex items-start justify-between gap-4 border-b border-line py-4"
                >
                  <div>
                    <p className="font-display text-lg leading-tight md:text-xl">{item.title[lang]}</p>
                    <p className="mt-1 text-sm leading-relaxed text-fg-dim">{item.detail[lang]}</p>
                  </div>
                  <span className="kicker shrink-0 pt-1 text-fg/40">{item.code}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-4 flex items-end justify-between gap-4">
          <p className="kicker text-accent">{t.lighting.galleryLabel}</p>
          <p className="kicker hidden sm:block">{t.lighting.galleryHint}</p>
        </div>

        <div ref={gridRef} className="reveal grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {LIGHTING_GALLERY.map((shot, i) => (
            <button
              key={shot.src}
              type="button"
              onClick={() => setActive(i)}
              className={`group relative overflow-hidden border border-line bg-bg-elev text-left ${
                i === 0 ? "sm:col-span-2 lg:col-span-2 lg:row-span-2" : ""
              }`}
              style={{ "--reveal-delay": `${i * 70}ms` } as React.CSSProperties}
            >
              <img
                src={shot.src}
                alt={shot.caption[lang]}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] ${
                  i === 0 ? "aspect-[16/10] min-h-[280px]" : "aspect-[4/3]"
                }`}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/20 to-transparent opacity-90" />
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                <p className="kicker mb-1 text-accent">{shot.tag[lang]}</p>
                <p className="font-display text-lg leading-tight md:text-xl">{shot.caption[lang]}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-3 md:grid-cols-3">
          {t.lighting.services.map((svc, i) => (
            <div key={svc} className="border border-line bg-bg-elev p-5">
              <span className="kicker text-accent">{String(i + 1).padStart(2, "0")}</span>
              <p className="mt-3 font-display text-xl leading-tight">{svc}</p>
            </div>
          ))}
        </div>
      </div>

      {active !== null && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-bg/96 p-4 backdrop-blur-sm">
          <button
            type="button"
            aria-label="Cerrar"
            onClick={() => setActive(null)}
            className="absolute inset-0 h-full w-full cursor-zoom-out"
          />
          <img
            src={LIGHTING_GALLERY[active].src}
            alt={LIGHTING_GALLERY[active].caption[lang]}
            className="pointer-events-none relative max-h-[86svh] max-w-full object-contain"
          />
          <button
            type="button"
            onClick={() => setActive(null)}
            className="kicker absolute right-5 top-5 border border-line px-4 py-2 transition-colors hover:border-accent hover:text-accent"
          >
            Esc ✕
          </button>
        </div>
      )}
    </section>
  );
}
