import { useRef } from 'react';
import { colors, fonts } from '../../lib/theme';
import type { ZoneData } from '../../lib/types';
import { FestivalTicketCard } from './FestivalTicketCard';

export interface FestivalTicketCardRowProps {
  title: string;
  cards: ZoneData[];
  selectedZone: string;
  onSelect: (id: string) => void;
  /** Optional badges by zone id, e.g. { 'entry-weekend': 'Mejor precio' } */
  badges?: Record<string, string>;
}

export function FestivalTicketCardRow({
  title,
  cards,
  selectedZone,
  onSelect,
  badges = {},
}: FestivalTicketCardRowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const selectedIndex = cards.findIndex((c) => c.id === selectedZone);
  const displayIndex = selectedIndex >= 0 ? selectedIndex : 0;

  return (
    <div className="flex flex-col" style={{ gap: '1rem', fontFamily: fonts.body }}>
      <div className="flex items-center justify-between">
        <h3
          className="m-0 text-[1.125rem] font-semibold"
          style={{ color: colors.textDark, lineHeight: '1.5rem' }}
        >
          {title}
        </h3>
        {cards.length >= 2 && (
          <span className="text-[0.875rem]" style={{ color: colors.textMuted }}>
            {displayIndex + 1} / {cards.length}
          </span>
        )}
      </div>

      <div className="relative overflow-hidden">
        <div
          ref={scrollRef}
          className={`flex gap-3 overflow-x-auto scrollbar-hide pb-2 md:grid md:grid-cols-2 md:overflow-visible ${cards.length >= 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'}`}
          style={{
            scrollSnapType: 'x mandatory',
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {cards.map((zone) => (
            <FestivalTicketCard
              key={zone.id}
              zone={zone}
              isSelected={selectedZone === zone.id}
              onClick={() => onSelect(zone.id)}
              badge={badges[zone.id]}
            />
          ))}
        </div>
      </div>

      {cards.length > 1 && (
        <div className="flex flex-col items-center" style={{ gap: '0.5rem' }}>
          <div className="flex justify-center" style={{ gap: '0.375rem' }}>
            {cards.map((z) => (
              <button
                key={z.id}
                type="button"
                onClick={() => onSelect(z.id)}
                style={{
                  height: '0.5rem',
                  borderRadius: '0.25rem',
                  border: 'none',
                  cursor: 'pointer',
                  width: selectedZone === z.id ? '1.5rem' : '0.5rem',
                  backgroundColor: selectedZone === z.id ? colors.primary : colors.border,
                }}
              />
            ))}
          </div>
          <p className="md:hidden text-[12px] flex items-center gap-1 m-0" style={{ color: colors.textMuted }}>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
            Desliza para ver más
          </p>
        </div>
      )}
    </div>
  );
}
