import { colors } from '../../lib/theme';

const FEVER_LOGO = 'https://feverup.com/logo/fever-logo-black.svg';

export function FestivalNavbar() {
  return (
    <nav
      className="bg-white flex items-center justify-between px-[24px] py-[12px] w-full fixed top-0 left-0 right-0 z-50"
      style={{ borderBottom: '1px solid #f2f3f3' }}
    >
      <div className="flex items-center gap-[24px]">
        <img src={FEVER_LOGO} alt="Fever" className="h-[24px] w-auto object-contain" />
        <div className="hidden md:flex items-center gap-[8px]" style={{ color: colors.textDark }}>
          <svg className="w-[20px] h-[20px]" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <span className="text-[16px]">Lisboa</span>
        </div>
        <div className="hidden md:flex items-center gap-[8px]" style={{ color: colors.textDark }}>
          <svg className="w-[20px] h-[20px]" fill="currentColor" viewBox="0 0 20 20">
            <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
          <span className="text-[16px]">Categorias</span>
        </div>
      </div>

      <div className="flex-1 max-w-[600px] mx-[24px] hidden lg:flex">
        <div
          className="flex items-center gap-[8px] bg-white border rounded-[32px] px-[16px] py-[12px] w-full"
          style={{ borderColor: colors.border }}
        >
          <svg className="w-[20px] h-[20px]" style={{ color: colors.textMuted }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span className="text-[16px]" style={{ color: colors.textMuted }}>Pesquisar eventos</span>
        </div>
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
