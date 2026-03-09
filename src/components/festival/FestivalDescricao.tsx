import type { ReactNode } from 'react';
import { colors } from '../../lib/theme';

export interface FestivalDescricaoProps {
  title?: string;
  children: ReactNode;
}

export function FestivalDescricao({ title = 'Descrição', children }: FestivalDescricaoProps) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="m-0 text-[1.25rem] font-semibold" style={{ color: colors.textDark }}>
        {title}
      </h2>
      <div className="m-0 text-base leading-relaxed" style={{ color: colors.textDark }}>
        {children}
      </div>
    </section>
  );
}
