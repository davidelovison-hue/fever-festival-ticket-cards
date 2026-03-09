import { colors } from '../../lib/theme';

export interface FestivalSobreLocalProps {
  title?: string;
  venueName: string;
  description: string;
  lerMaisLabel?: string;
}

export function FestivalSobreLocal({
  title = 'Sobre o local',
  venueName,
  description,
  lerMaisLabel = 'Ler mais',
}: FestivalSobreLocalProps) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="m-0 text-[1.25rem] font-semibold" style={{ color: colors.textDark }}>
        {title}
      </h2>
      <p className="m-0 text-base font-semibold" style={{ color: colors.textDark }}>
        {venueName}
      </p>
      <p className="m-0 text-base leading-relaxed" style={{ color: colors.textDark }}>
        {description}
      </p>
      <span className="text-base font-semibold cursor-pointer" style={{ color: colors.accent.blue }}>
        {lerMaisLabel}
      </span>
    </section>
  );
}
