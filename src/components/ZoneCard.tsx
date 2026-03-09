import { colors, fonts, radius, shadows } from '../lib/theme';
import type { ZoneData } from '../lib/types';
import { QuantitySelector } from './QuantitySelector';

interface ZoneCardProps {
  zone: ZoneData;
  onClick: () => void;
  quantity?: number;
  onQuantityChange?: (delta: number) => void;
}

export function ZoneCard({
  zone,
  onClick,
  quantity,
  onQuantityChange,
}: ZoneCardProps) {
  return (
    <div
      className="flex-shrink-0 flex flex-col cursor-pointer w-[calc(100%-4rem)] md:w-[260px]"
      style={{
        fontFamily: fonts.body,
        backgroundColor: colors.white,
        border: `1px solid ${colors.border}`,
        borderRadius: radius.lg,
        boxShadow: shadows.cardHover,
        overflow: 'hidden',
        transition: 'all 0.3s ease-in-out',
        scrollSnapAlign: 'start',
      }}
      onClick={onClick}
    >
      <div className="relative flex-shrink-0 w-full h-[12.5rem]">
        <img
          src={zone.image}
          alt={zone.name}
          className="w-full h-full object-cover"
        />
        <div
          className="absolute flex items-center justify-center"
          style={{
            top: '0.75rem',
            left: '0.75rem',
            padding: '0.25rem 0.5rem',
            borderRadius: radius.sm,
            backgroundColor: zone.color,
            fontSize: '0.75rem',
            lineHeight: '1rem',
            fontWeight: 600,
            color: colors.white,
          }}
        >
          {zone.shortName}
        </div>
      </div>

      <div className="flex-1 flex flex-col" style={{ padding: '1rem', gap: '1rem' }}>
        <div>
          <h3
            style={{
              fontSize: '1.125rem',
              lineHeight: '1.25rem',
              fontWeight: 600,
              color: colors.textDark,
              textTransform: 'uppercase',
              margin: 0,
            }}
          >
            {zone.shortName}
          </h3>
          <p
            style={{
              fontSize: '0.875rem',
              lineHeight: '1.25rem',
              fontWeight: 600,
              color: colors.primary,
              marginTop: '0.25rem',
              marginBottom: 0,
            }}
          >
            desde {zone.price}€
          </p>
          <p
            style={{
              fontSize: '0.875rem',
              lineHeight: '1.25rem',
              fontWeight: 400,
              color: colors.textMuted,
              margin: 0,
            }}
          >
            Para {zone.capacity} personas
          </p>
        </div>

        <p
          style={{
            fontSize: '0.875rem',
            lineHeight: '1.25rem',
            fontWeight: 400,
            color: colors.textDark,
            margin: 0,
          }}
        >
          {zone.description}
        </p>

        <div className="flex flex-col" style={{ gap: '0.25rem' }}>
          {zone.features.map((feature, i) => (
            <div key={i} className="flex items-start" style={{ gap: '0.25rem' }}>
              <div
                className="flex-shrink-0 flex items-center justify-center"
                style={{ width: '0.9375rem', height: '0.9375rem', marginTop: '0.125rem' }}
              >
                <div
                  style={{
                    width: '0.375rem',
                    height: '0.375rem',
                    borderRadius: '50%',
                    backgroundColor: colors.accent.green,
                  }}
                />
              </div>
              <span
                style={{
                  fontSize: '0.875rem',
                  lineHeight: '1.25rem',
                  fontWeight: 400,
                  color: colors.textDark,
                }}
              >
                {feature}
              </span>
            </div>
          ))}
        </div>

        {onQuantityChange && (
          <div
            onClick={(e) => e.stopPropagation()}
            className="mt-auto pt-3 border-t flex flex-col gap-1"
            style={{ borderColor: colors.border, minHeight: '56px' }}
          >
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: colors.textMuted }}>Quantidade</span>
            <QuantitySelector
              quantity={quantity ?? 0}
              onIncrement={() => onQuantityChange(1)}
              onDecrement={() => onQuantityChange(-1)}
              itemLabel="bilhete"
              itemLabelPlural="bilhetes"
              min={0}
            />
          </div>
        )}
      </div>
    </div>
  );
}
