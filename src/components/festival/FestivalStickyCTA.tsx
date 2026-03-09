import { colors, formatPrice } from '../../lib/theme';

export interface FestivalStickyCTAProps {
  label: string;
  price: number;
  onClick: () => void;
  priceLabel?: string;
}

export function FestivalStickyCTA({
  label,
  price,
  onClick,
  priceLabel = 'Comprar ahora',
}: FestivalStickyCTAProps) {
  const text = price > 0 ? `${formatPrice(price)} — ${priceLabel}` : label;

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 px-[16px] py-[12px] safe-area-pb">
      <button
        type="button"
        onClick={onClick}
        className="w-full h-12 rounded-[64px] flex items-center justify-center border-0 cursor-pointer text-base font-semibold text-white"
        style={{ backgroundColor: colors.primary }}
      >
        {text}
      </button>
    </div>
  );
}
