import { useState, useRef } from 'react';
import {
  StickyButton,
  ZoneCard,
  DotNavigation,
  PoweredByFever,
  colors,
  fonts,
  formatPrice,
  spacing,
  radius,
  shadows,
} from './components';
import type { ZoneData } from './lib/types';

// ============================================
// VENUE DATA - EDIT THIS SECTION FOR NEW VENUE
// ============================================

const VENUE_CONFIG = {
  name: 'Parque Tejo',
  title: 'Rock in Rio Lisboa 2026',
  date: '20, 21, 27 e 28 junho 2026',
  heroImage: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1200',
};

// Entry tickets – 1 day or weekend
const ENTRY_ZONES: ZoneData[] = [
  {
    id: 'entry-day1',
    name: 'Entrada Dia 1',
    shortName: 'Dia 1',
    price: 59,
    capacity: 1,
    description: 'Acesso apenas ao primeiro dia do festival.',
    features: ['Acesso sexta-feira', 'Zona geral', 'Reentrada até meia-noite'],
    color: '#8a1343',
    image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
  },
  {
    id: 'entry-day2',
    name: 'Entrada Dia 2',
    shortName: 'Dia 2',
    price: 59,
    capacity: 1,
    description: 'Acesso apenas ao segundo dia do festival.',
    features: ['Acesso sábado', 'Zona geral', 'Reentrada até meia-noite'],
    color: '#8a1343',
    image: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
  },
  {
    id: 'entry-weekend',
    name: 'Passe Fim de Semana',
    shortName: 'Weekend',
    price: 99,
    capacity: 1,
    description: 'Acesso aos 3 dias do festival.',
    features: ['Acesso 3 dias', 'Zona geral', 'Reentrada por dia', 'Pulseira reutilizável'],
    color: '#7b0f3a',
    image: 'https://images.pexels.com/photos/2114365/pexels-photo-2114365.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
  },
];

// Camping – per person per night
const CAMPING_ZONES: ZoneData[] = [
  {
    id: 'camping-basic',
    name: 'Campismo Básico',
    shortName: 'Básico',
    price: 25,
    capacity: 1,
    description: 'Lugar por pessoa e por noite. Leva a tua tenda.',
    features: ['Lugar por pessoa', 'Casas de banho e duches', 'Zona comum'],
    color: '#24a865',
    image: 'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
  },
  {
    id: 'camping-tent',
    name: 'Campismo com Tenda',
    shortName: 'Com Tenda',
    price: 55,
    capacity: 2,
    description: 'Tenda pré-montada para 2 pessoas.',
    features: ['Tenda para 2', 'Colchão incluído', 'Casas de banho e duches', 'Zona tranquila'],
    color: '#18824c',
    image: 'https://images.pexels.com/photos/2422588/pexels-photo-2422588.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
  },
  {
    id: 'camping-premium',
    name: 'Campismo Premium',
    shortName: 'Premium',
    price: 89,
    capacity: 2,
    description: 'Tenda espaçosa com pequeno-almoço incluído.',
    features: ['Tenda premium para 2', 'Pequeno-almoço', 'Duches privados', 'Zona VIP camping'],
    color: '#0d5c36',
    image: 'https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
  },
];

const ALL_ZONES = [...ENTRY_ZONES, ...CAMPING_ZONES];

// ============================================
// COMPONENTS
// ============================================

function Navbar() {
  return (
    <nav 
      className="bg-white flex items-center justify-between px-[24px] py-[12px] w-full fixed top-0 left-0 right-0 z-50" 
      style={{ borderBottom: `1px solid ${colors.background}` }}
    >
      <div className="flex items-center gap-[24px]">
        <span style={{ fontSize: '24px', fontWeight: 700, color: colors.primary }}>fever</span>
      </div>
      <div className="flex items-center gap-[16px]">
        <div 
          className="w-[42px] h-[42px] rounded-full flex items-center justify-center"
          style={{ backgroundColor: colors.accent.blueLight }}
        >
          <svg className="w-[20px] h-[20px]" style={{ color: colors.accent.blue }} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <div className="relative w-full">
      <div 
        className="w-full h-[300px] md:h-[405px] bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(${VENUE_CONFIG.heroImage})` 
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 p-[16px] md:p-[32px]">
        <div className="max-w-[1280px] mx-auto">
          <h1 
            className="text-[28px] font-semibold text-white leading-[40px]"
            style={{ fontFamily: fonts.heading }}
          >
            {VENUE_CONFIG.title}
          </h1>
          <p className="text-white text-[16px] mt-[8px] opacity-90">
            {VENUE_CONFIG.date}
          </p>
        </div>
      </div>
    </div>
  );
}

/** Ticket selector row – Figma 716-2714 pixel-perfect (Rock in Rio 2026 Test) */
function TicketSelectorRow({
  ticket,
  isSelected,
  quantity,
  onSelect,
  onQuantityChange,
  isLast,
}: {
  ticket: { id: string; name: string; subtitle: string; price: number };
  isSelected: boolean;
  quantity: number;
  onSelect: () => void;
  onQuantityChange: (delta: number) => void;
  isLast: boolean;
}) {
  const canDecrement = quantity > 0;
  const rowPadding = spacing.lg; // 16px
  const qtyBtnSize = 40; // touch target
  const gapStepper = 8;
  const fontSizeLabel = 14;
  const fontSizeSub = 12;
  const fontSizePrice = 14;
  const fontSizeQty = 14;

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(e) => e.key === 'Enter' && onSelect()}
      className="flex flex-row items-center justify-between cursor-pointer transition-colors outline-none"
      style={{
        fontFamily: fonts.body,
        paddingTop: rowPadding,
        paddingBottom: rowPadding,
        paddingLeft: rowPadding,
        paddingRight: rowPadding,
        backgroundColor: isSelected ? colors.primaryLight : colors.white,
        borderBottom: isLast ? 'none' : `1px solid ${colors.border}`,
        minHeight: 56,
        boxSizing: 'border-box',
      }}
    >
      <div className="flex flex-col flex-1 min-w-0">
        <span style={{ fontSize: fontSizeLabel, lineHeight: '20px', fontWeight: 400, color: colors.textDark }}>
          {ticket.name}
        </span>
        <span style={{ fontSize: fontSizeSub, lineHeight: '16px', fontWeight: 600, color: colors.primaryDark }}>
          {ticket.subtitle}
        </span>
      </div>
      <div
        className="flex items-center flex-shrink-0"
        style={{ gap: 16 }}
        onClick={(e) => e.stopPropagation()}
      >
        <span
          style={{
            fontSize: fontSizePrice,
            lineHeight: '20px',
            fontWeight: isSelected ? 600 : 400,
            color: isSelected ? colors.textDark : colors.textMuted,
            minWidth: 72,
            textAlign: 'right',
          }}
        >
          {formatPrice(ticket.price)}
        </span>
        <div className="flex items-center" style={{ gap: gapStepper }}>
          <button
            type="button"
            aria-label="Diminuir quantidade"
            onClick={(e) => { e.stopPropagation(); onQuantityChange(-1); }}
            disabled={!canDecrement}
            className="flex items-center justify-center border-0 cursor-pointer transition-colors"
            style={{
              width: qtyBtnSize,
              height: qtyBtnSize,
              borderRadius: '50%',
              border: canDecrement ? 'none' : `1px solid ${colors.border}`,
              cursor: canDecrement ? 'pointer' : 'not-allowed',
              backgroundColor: canDecrement ? colors.primaryLight : colors.background,
              color: canDecrement ? colors.primary : colors.textLight,
            }}
          >
            <svg width={20} height={20} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
            </svg>
          </button>
          <span
            style={{
              fontSize: fontSizeQty,
              lineHeight: '20px',
              fontWeight: 600,
              color: colors.textDark,
              minWidth: 24,
              textAlign: 'center',
            }}
          >
            {quantity}
          </span>
          <button
            type="button"
            aria-label="Aumentar quantidade"
            onClick={(e) => { e.stopPropagation(); onQuantityChange(1); }}
            className="flex items-center justify-center border-0 cursor-pointer transition-colors"
            style={{
              width: qtyBtnSize,
              height: qtyBtnSize,
              borderRadius: '50%',
              backgroundColor: colors.primary,
              color: colors.white,
            }}
          >
            <svg width={20} height={20} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

function TicketSelector({
  selectedZone,
  onZoneSelect,
  quantities,
  onQuantityChange,
}: {
  selectedZone: string;
  onZoneSelect: (id: string) => void;
  quantities: Record<string, number>;
  onQuantityChange: (zoneId: string, delta: number) => void;
}) {
  const tickets = ALL_ZONES.map((z) => ({
    id: z.id,
    name: z.name,
    price: z.price,
    subtitle: z.capacity === 1 ? 'Por pessoa' : `Para ${z.capacity} pessoas`,
  }));

  return (
    <div
      className="flex flex-col w-full bg-white overflow-hidden"
      style={{
        maxWidth: 412,
        borderRadius: radius.lg,
        boxShadow: shadows.card,
        fontFamily: fonts.body,
      }}
    >
      {/* Header – Figma 716-2714 */}
      <div
        className="flex items-center flex-shrink-0"
        style={{
          gap: spacing.sm,
          padding: spacing.lg,
          borderBottom: `1px solid ${colors.border}`,
        }}
      >
        <svg width={24} height={24} className="flex-shrink-0" style={{ color: colors.textDark }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span style={{ fontSize: 20, lineHeight: '28px', fontWeight: 600, color: colors.textDark }}>
          Escolhe a data e o tipo de bilhete
        </span>
      </div>

      {/* All tickets: each row has name, price, + quantity − */}
      <div className="flex flex-col">
        {tickets.map((ticket, i) => (
          <TicketSelectorRow
            key={ticket.id}
            ticket={ticket}
            isSelected={false}
            quantity={quantities[ticket.id] ?? 0}
            onSelect={() => onZoneSelect(ticket.id)}
            onQuantityChange={(d) => onQuantityChange(ticket.id, d)}
            isLast={i === tickets.length - 1}
          />
        ))}
      </div>

      <div style={{ padding: spacing.lg, borderTop: `1px solid ${colors.border}` }}>
        <PoweredByFever />
      </div>
    </div>
  );
}

function ZoneCarouselRow({
  title,
  zones,
  selectedZone,
  onZoneSelect,
  quantities,
  onQuantityChange,
}: {
  title: string;
  zones: ZoneData[];
  selectedZone: string;
  onZoneSelect: (id: string) => void;
  quantities: Record<string, number>;
  onQuantityChange: (zoneId: string, delta: number) => void;
}) {
  const selectedIndex = zones.findIndex((z) => z.id === selectedZone);
  const displayIndex = selectedIndex >= 0 ? selectedIndex : 0;
  const scrollRef = useRef<HTMLDivElement>(null);

  const goToNext = () => {
    const nextIndex = (displayIndex + 1) % zones.length;
    onZoneSelect(zones[nextIndex].id);
  };

  const goToPrev = () => {
    const prevIndex = (displayIndex - 1 + zones.length) % zones.length;
    onZoneSelect(zones[prevIndex].id);
  };

  return (
    <section className="flex flex-col gap-[1rem] flex-shrink-0">
      <div className="flex items-center justify-between">
        <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: colors.textDark }}>
          {title}
        </h2>
        <span style={{ fontSize: '0.875rem', color: colors.textMuted }}>
          {displayIndex + 1} / {zones.length}
        </span>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-[0.75rem] overflow-x-auto scrollbar-hide pb-2 md:grid md:grid-cols-3 md:overflow-visible min-h-[320px]"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {zones.map((zone) => (
          <ZoneCard
            key={zone.id}
            zone={zone}
            isSelected={zone.id === selectedZone}
            onClick={() => onZoneSelect(zone.id)}
            showNavigationArrows={zone.id === selectedZone}
            onPrev={goToPrev}
            onNext={goToNext}
            quantity={quantities[zone.id] ?? 0}
            onQuantityChange={(d) => onQuantityChange(zone.id, d)}
          />
        ))}
      </div>

      <DotNavigation
        total={zones.length}
        current={displayIndex}
        onChange={(i) => onZoneSelect(zones[i].id)}
      />
    </section>
  );
}

// ============================================
// MAIN APP
// ============================================

const initialQuantities: Record<string, number> = {};
ALL_ZONES.forEach((z) => { initialQuantities[z.id] = 0; });

export default function App() {
  const [selectedZone, setSelectedZone] = useState(ENTRY_ZONES[0].id);
  const [quantities, setQuantities] = useState<Record<string, number>>(initialQuantities);
  const selectorRef = useRef<HTMLDivElement>(null);

  const totalPrice = ALL_ZONES.reduce((sum, z) => sum + z.price * (quantities[z.id] ?? 0), 0);

  const handleQuantityChange = (zoneId: string, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [zoneId]: Math.max(0, (prev[zoneId] ?? 0) + delta),
    }));
  };

  const scrollToSelector = () => {
    selectorRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleZoneSelect = (id: string) => setSelectedZone(id);
  const handleSelectorZoneSelect = (id: string) => setSelectedZone(id);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: fonts.body }}>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Muli:wght@400;600;700&display=swap" rel="stylesheet" />
      
      <Navbar />
      
      <main className="pt-[62px] pb-[80px] lg:pb-0 min-h-screen">
        <HeroSection />
        
        <div className="max-w-[1280px] mx-auto px-[16px] md:px-[32px] py-[32px]">
          <p style={{ fontSize: '11px', color: colors.textMuted, marginBottom: '8px' }}>
            Local: fever-festival-ticket-cards — selector has +/− and quantity on each row.
          </p>
          <div className="flex flex-col lg:flex-row gap-[32px]">
            <div className="flex-1 min-w-0">
              {/* Row 1: Entry ticket */}
              <section aria-label="Entry ticket options" className="mb-8">
                <ZoneCarouselRow
                  title="Entry ticket"
                  zones={ENTRY_ZONES}
                  selectedZone={selectedZone}
                  onZoneSelect={handleZoneSelect}
                  quantities={quantities}
                  onQuantityChange={handleQuantityChange}
                />
              </section>

              {/* Row 2: Camping – same design as Entry */}
              <section aria-label="Camping options" className="mb-8">
                <ZoneCarouselRow
                  title="Camping"
                  zones={CAMPING_ZONES}
                  selectedZone={selectedZone}
                  onZoneSelect={handleZoneSelect}
                  quantities={quantities}
                  onQuantityChange={handleQuantityChange}
                />
              </section>
            </div>

            {/* Ticket selector: synced with card quantities */}
            <div className="lg:w-[412px] flex-shrink-0">
              <div ref={selectorRef} className="lg:hidden mt-[32px]">
                <TicketSelector
                  selectedZone={selectedZone}
                  onZoneSelect={handleSelectorZoneSelect}
                  quantities={quantities}
                  onQuantityChange={handleQuantityChange}
                />
              </div>
              <div className="hidden lg:block sticky top-[80px]">
                <TicketSelector
                  selectedZone={selectedZone}
                  onZoneSelect={handleSelectorZoneSelect}
                  quantities={quantities}
                  onQuantityChange={handleQuantityChange}
                />
                <div className="mt-4">
                  <button
                    className="w-full h-[48px] flex items-center justify-center transition-opacity hover:opacity-90"
                    style={{
                      background: colors.primary,
                      borderRadius: '9999px',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    <span className="text-white text-[16px] font-semibold">
                      {totalPrice > 0 
                        ? `${totalPrice.toFixed(2).replace('.', ',')} € — Comprar ahora` 
                        : 'Seleccionar entradas'}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <StickyButton
        label="Seleccionar entradas"
        price={totalPrice}
        onClick={scrollToSelector}
      />
    </div>
  );
}
