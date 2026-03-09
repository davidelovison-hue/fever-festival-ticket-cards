import { fonts } from '../../lib/theme';

export interface FestivalHeroProps {
  title: string;
  intro: string;
  heroImage: string;
  showOfficialPartner?: boolean;
}

export function FestivalHero({ title, intro, heroImage, showOfficialPartner = true }: FestivalHeroProps) {
  return (
    <div className="relative w-full">
      <div
        className="w-full h-[300px] md:h-[405px] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6)), url(${heroImage})`,
        }}
      />
      {showOfficialPartner && (
        <div className="absolute top-4 left-4 md:top-6 md:left-6">
          <span
            className="px-3 py-1 rounded text-xs font-semibold text-white"
            style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
          >
            Official Partner
          </span>
        </div>
      )}
      <div className="absolute bottom-0 left-0 right-0 p-[16px] md:p-[32px]">
        <div className="max-w-[1280px] mx-auto">
          <h1
            className="text-[28px] md:text-[32px] font-semibold text-white leading-tight m-0"
            style={{ fontFamily: fonts.heading }}
          >
            {title}
          </h1>
          <p className="text-white text-[14px] md:text-[16px] mt-2 md:mt-3 mb-0 opacity-95 max-w-[720px]">
            {intro}
          </p>
        </div>
      </div>
    </div>
  );
}
