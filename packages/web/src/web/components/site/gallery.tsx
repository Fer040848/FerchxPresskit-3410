import { useEffect, useState } from "react";
import { useReveal } from "../../hooks/use-reveal";
import { GALLERY } from "../../lib/copy";
import { useLang } from "./lang-context";
import { SectionHead } from "./section-head";

export function Gallery() {
  const { t } = useLang();
  const ref = useReveal<HTMLDivElement>();
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((i) => ((i ?? 0) + 1) % GALLERY.length);
      if (e.key === "ArrowLeft") setActive((i) => ((i ?? 0) - 1 + GALLERY.length) % GALLERY.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <section id="galeria" className="border-t border-line px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <SectionHead kicker={t.gallery.kicker} title={t.gallery.title} note={t.gallery.note} />

        <div ref={ref} className="reveal grid gap-3 md:grid-cols-3">
          {GALLERY.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(i)}
              className={`group relative overflow-hidden border border-line ${
                i === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <img
                src={src}
                alt={`FerchX ${String(i + 1).padStart(2, "0")}`}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] ${
                  i === 0 ? "aspect-[16/10]" : "aspect-[16/9]"
                }`}
              />
              <span className="kicker absolute bottom-3 left-3 text-fg/70 transition-colors group-hover:text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
            </button>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-bg/96 p-4 backdrop-blur-sm"
        >
          <button
            type="button"
            aria-label="Cerrar"
            onClick={() => setActive(null)}
            className="absolute inset-0 h-full w-full cursor-zoom-out"
          />
          <img
            src={GALLERY[active]}
            alt={`FerchX ${active + 1}`}
            className="pointer-events-none relative max-h-[86svh] max-w-full object-contain"
          />
          <button
            type="button"
            onClick={() => setActive(null)}
            className="kicker absolute right-5 top-5 border border-line px-4 py-2 transition-colors hover:border-accent hover:text-accent"
          >
            Esc ✕
          </button>
          <a
            href={GALLERY[active]}
            download
            onClick={(e) => e.stopPropagation()}
            className="kicker absolute bottom-5 left-1/2 -translate-x-1/2 border border-line px-5 py-2 transition-colors hover:border-accent hover:text-accent"
          >
            {t.gallery.download} ↓
          </a>
        </div>
      )}
    </section>
  );
}
