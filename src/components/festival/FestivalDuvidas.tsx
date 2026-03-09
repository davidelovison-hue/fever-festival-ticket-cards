import type { ReactNode } from 'react';
import { colors } from '../../lib/theme';

export interface FestivalDuvidasProps {
  title?: string;
  message: ReactNode;
}

export function FestivalDuvidas({ title = '¿Alguna duda?', message }: FestivalDuvidasProps) {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center gap-1">
        <svg className="w-[26px] h-[26px]" style={{ color: colors.textDark }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h2 className="m-0 text-[1.25rem] font-semibold" style={{ color: colors.textDark }}>
          {title}
        </h2>
      </div>
      <div className="text-base m-0" style={{ color: colors.textDark }}>
        {message}
      </div>
    </section>
  );
}
