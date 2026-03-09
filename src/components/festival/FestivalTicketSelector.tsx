import { colors, fonts, formatPrice } from '../../lib/theme';
import { TabButton } from '../TabButton';
import { RadioOption } from '../RadioOption';
import { QuantitySelector } from '../QuantitySelector';

export type FestivalTabType = 'entry' | 'camping';

export interface FestivalTicketOption {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  tab: FestivalTabType;
}

export interface FestivalTicketSelectorProps {
  tabs: { id: FestivalTabType; label: string }[];
  tickets: FestivalTicketOption[];
  activeTab: FestivalTabType;
  onTabChange: (tab: FestivalTabType) => void;
  selectedZone: string;
  onZoneSelect: (id: string) => void;
  quantity: number;
  onQuantityChange: (delta: number) => void;
  selectorTitle?: string;
}

export function FestivalTicketSelector({
  tabs,
  tickets,
  activeTab,
  onTabChange,
  selectedZone,
  onZoneSelect,
  quantity,
  onQuantityChange,
  selectorTitle = 'Elige la fecha y el tipo de bilhete',
}: FestivalTicketSelectorProps) {
  const filtered = tickets.filter((t) => t.tab === activeTab);
  const selectedTicket = tickets.find((t) => t.id === selectedZone);
  const totalPrice = selectedTicket ? selectedTicket.price * quantity : 0;

  return (
    <div
      className="flex flex-col w-full max-w-[412px] bg-white rounded-[1rem] overflow-hidden"
      style={{
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 0px 6px 0px',
        fontFamily: fonts.body,
      }}
    >
      <div
        className="flex items-center gap-2 px-4 py-4"
        style={{ borderBottom: `1px solid ${colors.border}` }}
      >
        <svg className="w-6 h-6 flex-shrink-0" style={{ color: colors.textDark }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="text-[1.25rem] font-semibold" style={{ color: colors.textDark }}>
          {selectorTitle}
        </span>
      </div>

      <div
        className="flex gap-3 px-4 py-4 overflow-x-auto scrollbar-hide"
        style={{ borderBottom: `1px solid ${colors.border}` }}
      >
        {tabs.map((tab) => (
          <TabButton
            key={tab.id}
            label={tab.label}
            isActive={activeTab === tab.id}
            onClick={() => onTabChange(tab.id)}
          />
        ))}
      </div>

      <div className="flex flex-col">
        {filtered.map((ticket, i) => (
          <RadioOption
            key={ticket.id}
            label={ticket.name}
            sublabel="Más info"
            price={formatPrice(ticket.price)}
            isSelected={selectedZone === ticket.id}
            onClick={() => onZoneSelect(ticket.id)}
            isLast={i === filtered.length - 1}
          />
        ))}
      </div>

      <div
        className="flex flex-col gap-4 px-4 py-4"
        style={{ borderTop: `1px solid ${colors.border}` }}
      >
        <QuantitySelector
          quantity={quantity}
          onIncrement={() => onQuantityChange(1)}
          onDecrement={() => onQuantityChange(-1)}
        />
        <button
          type="button"
          className="hidden lg:flex w-full items-center justify-center py-3 rounded-[10rem] border-0 cursor-pointer text-base font-semibold text-white"
          style={{ backgroundColor: colors.primary }}
        >
          {totalPrice.toFixed(2).replace('.', ',')} € — Comprar ahora
        </button>
        <div className="flex items-center justify-center gap-1">
          <span className="text-[0.75rem]" style={{ color: colors.textMuted }}>Powered by</span>
          <span className="text-[0.75rem] font-semibold" style={{ color: colors.textDark }}>fever</span>
        </div>
      </div>
    </div>
  );
}
