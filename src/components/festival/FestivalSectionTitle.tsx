import type { ReactNode } from 'react';
import { colors, fonts } from '../../lib/theme';

export interface FestivalSectionTitleProps {
  children: ReactNode;
}

export function FestivalSectionTitle({ children }: FestivalSectionTitleProps) {
  return (
    <h2
      className="m-0 text-[1.5rem] font-semibold"
      style={{ color: colors.textDark, fontFamily: fonts.heading, lineHeight: '1.75rem' }}
    >
      {children}
    </h2>
  );
}
