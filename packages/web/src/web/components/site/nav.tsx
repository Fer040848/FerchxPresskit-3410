import { useEffect, useState } from "react";
import { useLang } from "./lang-context";

const SECTIONS = ["sets", "bio", "gallery", "videos", "rider", "gear", "booking"] as const;

const ANCHORS: Record<(typeof SECTIONS)[number], string> = {
  sets: "#sets",
  bio: "#bio",
  gallery: "#galeria",
  videos: "#videos",
  rider: "#rider",
  gear: "#renta",
  booking: "#booking",
};

export function Nav() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "border-b border-line bg-bg/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 md:px-10">
        <a
          href="#top"
          className="font-display text-lg tracking-[-0.03em] transition-colors hover:text-accent"
        >
          FERCHX
        </a>

        <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
          {SECTIONS.map((key) => (
            <a
              key={key}
              href={ANCHORS[key]}
              className="kicker transition-colors hover:text-accent"
            >
              {t.nav[key]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="kicker flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => setLang("es")}
              className={`transition-colors ${lang === "es" ? "text-accent" : "hover:text-fg"}`}
              aria-pressed={lang === "es"}
            >
              ES
            </button>
            <span className="text-line">/</span>
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`transition-colors ${lang === "en" ? "text-accent" : "hover:text-fg"}`}
              aria-pressed={lang === "en"}
            >
              EN
            </button>
          </div>

          <button
            type="button"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-8 w-8 flex-col items-center justify-center gap-[5px] lg:hidden"
          >
            <span
              className={`block h-px w-5 bg-fg transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-5 bg-fg transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-line bg-bg px-5 py-5 lg:hidden">
          {SECTIONS.map((key) => (
            <a
              key={key}
              href={ANCHORS[key]}
              onClick={() => setOpen(false)}
              className="font-display py-2 text-2xl transition-colors hover:text-accent"
            >
              {t.nav[key]}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
