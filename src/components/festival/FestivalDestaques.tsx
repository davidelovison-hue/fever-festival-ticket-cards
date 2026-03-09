import { colors } from '../../lib/theme';

export interface DestaqueItem {
  emoji: string;
  text: string;
}

export interface FestivalDestaquesProps {
  title?: string;
  items: DestaqueItem[];
}

export function FestivalDestaques({ title = 'Destaques', items }: FestivalDestaquesProps) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="m-0 text-[1.25rem] font-semibold" style={{ color: colors.textDark }}>
        {title}
      </h2>
      <ul className="list-none pl-0 m-0 flex flex-col gap-2" style={{ fontSize: '1rem', color: colors.textDark, lineHeight: 1.5 }}>
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span>{item.emoji}</span>
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
