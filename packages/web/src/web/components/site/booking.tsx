import { useReveal } from "../../hooks/use-reveal";
import { LINKS } from "../../lib/copy";
import { useLang } from "./lang-context";
import { SectionHead } from "./section-head";

export function Booking() {
  const { t } = useLang();
  const ref = useReveal<HTMLDivElement>();

  return (
    <section
      id="booking"
      className="relative overflow-hidden border-t border-line px-5 py-20 md:px-10 md:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(50% 60% at 85% 0%, rgba(0,229,140,0.12), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1400px]">
        <SectionHead kicker={t.booking.kicker} title={t.booking.title} note={t.booking.line} />

        <div ref={ref} className="reveal grid gap-3 md:grid-cols-2">
          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col justify-between gap-10 border border-line bg-bg-elev p-8 transition-colors hover:border-accent"
          >
            <span className="kicker text-accent">{t.booking.whatsapp}</span>
            <span className="font-display text-[clamp(1.6rem,4vw,2.6rem)] transition-colors group-hover:text-accent">
              {LINKS.phoneLabel}
            </span>
          </a>

          <a
            href={LINKS.instagram}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col justify-between gap-10 border border-line bg-bg-elev p-8 transition-colors hover:border-accent"
          >
            <span className="kicker text-accent">{t.booking.instagram}</span>
            <span className="font-display text-[clamp(1.6rem,4vw,2.6rem)] transition-colors group-hover:text-accent">
              @ferchx_bhdp
            </span>
          </a>
        </div>

        <p className="kicker mt-8">{t.booking.basedIn}</p>
      </div>
    </section>
  );
}

export function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line px-5 py-10 md:px-10">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <p className="display text-[clamp(2.4rem,10vw,7rem)] leading-none">FERCHX</p>
        <div className="kicker space-y-2 md:text-right">
          <p>{t.footer.builtWith}</p>
          <p>
            © {year} FerchX — {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
