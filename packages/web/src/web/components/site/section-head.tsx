import { useReveal } from "../../hooks/use-reveal";

type Props = {
  kicker: string;
  title: string;
  note?: string;
};

export function SectionHead({ kicker, title, note }: Props) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="reveal mb-10 md:mb-14">
      <p className="kicker text-accent">{kicker}</p>
      <h2 className="display mt-4 text-[clamp(2.6rem,8vw,6rem)]">{title}</h2>
      {note && <p className="mt-4 max-w-[46ch] text-sm text-fg-dim">{note}</p>}
    </div>
  );
}
