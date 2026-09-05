import { useState } from "react";
import { useReveal } from "../../hooks/use-reveal";
import { useLang } from "./lang-context";
import { SectionHead } from "./section-head";

export function Bio() {
  const { t } = useLang();
  const ref = useReveal<HTMLDivElement>();
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    const text = t.bio.paragraphs.join("\n\n");
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const area = document.createElement("textarea");
      area.value = text;
      document.body.appendChild(area);
      area.select();
      document.execCommand("copy");
      area.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="bio" className="border-t border-line px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <SectionHead kicker={t.bio.kicker} title={t.bio.title} />

        <div ref={ref} className="reveal grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <div className="flex flex-col gap-6">
            <img
              src="/images/ferchx-02.jpg"
              alt="FerchX"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover grayscale-[35%] transition-[filter] duration-700 hover:grayscale-0"
            />
            <ul className="flex flex-wrap gap-2">
              {t.bio.roles.map((role) => (
                <li key={role} className="kicker border border-line px-3 py-2 text-fg">
                  {role}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="space-y-6 text-[17px] leading-[1.75] text-fg/90">
              {t.bio.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>

            <button
              type="button"
              onClick={copy}
              className={`kicker mt-10 border px-6 py-3 transition-colors ${
                copied
                  ? "border-accent bg-accent text-bg"
                  : "border-line hover:border-accent hover:text-accent"
              }`}
            >
              {copied ? t.bio.copied : t.bio.copyBtn}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
