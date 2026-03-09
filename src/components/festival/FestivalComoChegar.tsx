import { colors } from '../../lib/theme';

export interface FestivalComoChegarProps {
  title?: string;
  venueName: string;
  address: string;
}

export function FestivalComoChegar({
  title = '¿Cómo llegar?',
  venueName,
  address,
}: FestivalComoChegarProps) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="m-0 text-[1.25rem] font-semibold" style={{ color: colors.textDark }}>
        {title}
      </h2>
      <p className="m-0 text-base font-semibold" style={{ color: colors.textDark }}>
        {venueName}
      </p>
      <p className="m-0 text-base" style={{ color: colors.textMuted }}>
        {address}
      </p>
    </section>
  );
}
