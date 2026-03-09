import { colors } from '../../lib/theme';

export interface FestivalInfoProps {
  title?: string;
  items: string[];
}

export function FestivalInfo({ title = 'Informações gerais', items }: FestivalInfoProps) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="m-0 text-[1.25rem] font-semibold" style={{ color: colors.textDark }}>
        {title}
      </h2>
      <ul className="list-none pl-0 m-0 flex flex-col gap-2" style={{ fontSize: '1rem', color: colors.textDark, lineHeight: 1.5 }}>
        {items.map((text, i) => (
          <li key={i}>{text}</li>
        ))}
      </ul>
    </section>
  );
}
