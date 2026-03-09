import { colors, fonts } from '../../lib/theme';
import type { ZoneData } from '../../lib/types';

export interface FestivalTicketCardProps {
  zone: ZoneData;
  isSelected: boolean;
  onClick: () => void;
  /** Optional badge e.g. "Novo", "Melhor Experiência" */
  badge?: string;
}

export function FestivalTicketCard({ zone, isSelected, onClick, badge }: FestivalTicketCardProps) {
  const priceStr = `Entrada de 1 día – ${zone.price.toFixed(2).replace('.', ',')} €`;

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      className="flex flex-col flex-shrink-0 cursor-pointer overflow-hidden rounded-[1rem] border-2 transition-all duration-200 w-[calc(100%-2rem)] md:w-full"
      style={{
        backgroundColor: isSelected ? colors.primaryLight : colors.white,
        borderColor: isSelected ? colors.primary : colors.border,
        boxShadow: '0 0 6px rgba(0,0,0,0.08)',
        scrollSnapAlign: 'start',
      }}
    >
      <div className="relative w-full h-[8rem] md:h-[9rem] flex-shrink-0">
        <img src={zone.image} alt={zone.shortName} className="w-full h-full object-cover" />
        {badge && (
          <span
            className="absolute top-2 right-2 px-2 py-0.5 rounded text-xs font-semibold text-white"
            style={{ backgroundColor: zone.color }}
          >
            {badge}
          </span>
        )}
        {isSelected && (
          <span
            className="absolute top-2 left-2 flex items-center justify-center w-6 h-6 rounded-full text-white"
            style={{ backgroundColor: colors.primary }}
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </span>
        )}
      </div>
      <div className="flex flex-col flex-1 p-4" style={{ fontFamily: fonts.body }}>
        <h3 className="text-[1.125rem] font-semibold m-0" style={{ color: colors.textDark }}>
          {zone.shortName}
        </h3>
        <ul
          className="list-none pl-0 mt-2 mb-3 flex flex-col gap-1"
          style={{ fontSize: '0.875rem', color: colors.textMuted, lineHeight: 1.35 }}
        >
          {zone.features.map((f, i) => (
            <li key={i} className="flex items-start gap-2">
              <span style={{ color: colors.accent.green, flexShrink: 0 }}>•</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-col gap-1">
          <span className="text-[0.875rem] font-semibold" style={{ color: colors.textDark }}>
            {priceStr}
          </span>
          <span
            className="text-[0.875rem] font-semibold"
            style={{ color: isSelected ? colors.primary : colors.accent.blue, cursor: 'pointer' }}
          >
            {isSelected ? 'Seleccionado' : 'Selecciona'}
          </span>
        </div>
      </div>
    </div>
  );
}
