import { CONSTANTS, generateSEOMetadata } from '@/lib/seo';
import Link from 'next/link';
import { ShieldCheck, Mail, AlertCircle, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';

export const metadata = generateSEOMetadata(
  'DMCA Beleid & Copyright',
  `Lees het officiële DMCA en auteursrechtenbeleid van ${CONSTANTS.BRAND_NAME}. Informatie over copyright bescherming en procedures voor verwijderingsverzoeken.`,
  '/dmca-beleid'
);

const dmcaRequirements = [
  'Een fysieke of elektronische handtekening van de auteursrechthebbende of diens bevoegde vertegenwoordiger.',
  'Een duidelijke specificatie van het auteursrechtelijk beschermde werk waarop inbreuk zou zijn gemaakt.',
  'De exacte links of streamverwijzingen die verwijderd dienen te worden.',
  'Uw volledige contactgegevens: officiële naam, adres, telefoonnummer en e-mailadres.',
  'Een verklaring te goeder trouw dat het betwiste gebruik niet is toegestaan door de auteursrechthebbende.',
  'Een verklaring dat de verstrekte informatie accuraat is, opgesteld op straffe van meineed.',
];

export default function DMCAPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#1B1B1F] text-white overflow-x-clip selection:bg-[#FFD700] selection:text-[#1B1B1F]">
      {/* =========================================================
          1. HERO HEADER [DARK #1B1B1F]
          ========================================================= */}
      <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-[#1B1B1F] text-white border-b border-white/10 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #FFFFFF 1px, transparent 1px), linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[320px] w-[720px] rounded-full bg-[#E3182B]/15 blur-[145px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-1/4 h-[220px] w-[420px] rounded-full bg-[#F4A7A7]/10 blur-[130px]"
        />

        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-[#232329] border border-[#FFD700]/40 px-4 py-1.5 rounded-full mb-6 shadow-md">
            <ShieldCheck className="w-4 h-4 text-[#FFD700]" aria-hidden="true" />
            <span className="text-[#FFD700] font-black text-xs uppercase tracking-widest">
              Auteursrechten &amp; Copyright
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight leading-[1.06] mb-5">
            DMCA <span className="text-[#FFD700]">Beleid</span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-white/80 font-medium max-w-2xl mx-auto leading-relaxed">
            <strong className="text-white">{CONSTANTS.BRAND_NAME}</strong> respecteert de intellectuele eigendomsrechten van derden en leeft de Digital Millennium Copyright Act (DMCA) strikt na.
          </p>
        </div>
      </section>

      {/* =========================================================
          2. CALLOUT BANNER [DARK ACCENT #232329]
          ========================================================= */}
      <section className="w-full bg-[#232329] py-10 px-4 sm:px-6 border-y border-white/10 relative z-10 overflow-hidden">
        <div className="max-w-3xl mx-auto flex flex-col items-center justify-center text-center gap-4">
          <div className="bg-[#1B1B1F] border border-[#FFD700]/40 text-[#FFD700] font-black text-xs px-4 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
            OFFICIËLE MEDEDELING
          </div>
          <h2 className="text-[#0B132B] bg-white border-2 border-[#0B132B]/15 px-6 py-3 rounded-2xl text-xl sm:text-3xl font-black uppercase tracking-tight leading-snug shadow-sm max-w-2xl pl-5 border-l-4 border-l-[#E3182B]">
            PREMIUM STREAMING MET INTEGRITEIT
          </h2>
          <p className="text-white/75 text-sm sm:text-base font-medium max-w-xl leading-relaxed">
            Heeft u vragen over onze diensten, abonnementen of ondersteuning? Ons team helpt u graag verder.
          </p>
          <div className="mt-1">
            <Link
              href="/pakketten"
              className="inline-flex items-center justify-center gap-2.5 bg-[#FFD700] text-[#1B1B1F] hover:brightness-95 transition-all px-9 py-3.5 rounded-full font-black text-xs sm:text-sm uppercase tracking-widest shadow-lg"
            >
              <span>Bekijk Pakketten</span>
              <ArrowRight className="w-4 h-4 text-[#1B1B1F]" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          3. MAIN LIGHT-MODE LEGAL DOCUMENT [LIGHT #F7F7F7 + WHITE CARDS]
          ========================================================= */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F7F7F7] text-[#0B132B] overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 h-[280px] w-[680px] rounded-full bg-[#F4A7A7]/35 blur-[145px]"
        />

        <div className="max-w-4xl mx-auto w-full relative z-10">
          {/* Notice Card in Light Mode */}
          <div className="bg-white border-2 border-[#0B132B]/15 rounded-3xl p-6 sm:p-8 mb-10 shadow-sm">
            <div className="flex gap-4 items-start">
              <div className="shrink-0 w-12 h-12 rounded-2xl bg-[#1B1B1F] flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-[#FFD700]" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <span className="inline-block text-[11px] font-black uppercase tracking-[0.18em] text-[#E3182B] mb-1">
                  Belangrijke Kennisgeving
                </span>
                <p className="text-[#1E293B] font-semibold text-sm sm:text-base leading-relaxed">
                  <strong className="text-[#0B132B]">{CONSTANTS.BRAND_NAME}</strong> host, uploadt of beheert zelf geen mediabestanden op eigen servers. Onze software indexeert en organiseert uitsluitend streams en afspeellijsten die openbaar beschikbaar zijn op het internet.
                </p>
              </div>
            </div>
          </div>

          {/* Main Legal Article Card */}
          <div className="bg-white border-2 border-[#0B132B]/15 rounded-3xl p-6 sm:p-10 shadow-sm space-y-10">
            <section>
              <span className="inline-block text-[11px] font-black uppercase tracking-[0.2em] text-[#E3182B] mb-1.5">
                Artikel 01
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-[#0B132B] uppercase tracking-tight mb-4 pl-4 border-l-4 border-[#E3182B] pb-2 border-b border-[#0B132B]/12 relative">
                1. Naleving van het Auteursrecht
                <span className="block w-14 h-[3px] bg-[#FFD700] rounded-full mt-2" />
              </h2>
              <p className="text-[#1E293B] text-sm sm:text-base font-semibold leading-relaxed">
                <strong className="text-[#0B132B]">{CONSTANTS.BRAND_NAME}</strong> ({'wij'}, {'ons'} of {'onze'}) zet zich in om de rechten van auteursrechthebbenden wereldwijd te respecteren en de bepalingen van de Digital Millennium Copyright Act (DMCA) en de toepasselijke Europese wetgeving strikt na te leven. Wij verwachten van al onze gebruikers en partners dat zij dezelfde normen hanteren.
              </p>
            </section>

            <section>
              <span className="inline-block text-[11px] font-black uppercase tracking-[0.2em] text-[#E3182B] mb-1.5">
                Artikel 02
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-[#0B132B] uppercase tracking-tight mb-4 pl-4 border-l-4 border-[#E3182B] pb-2 border-b border-[#0B132B]/12">
                2. Wat Wij Niet Hosten
                <span className="block w-14 h-[3px] bg-[#FFD700] rounded-full mt-2" />
              </h2>
              <p className="text-[#1E293B] text-sm sm:text-base font-semibold leading-relaxed mb-4">
                Het is essentieel om te benadrukken dat <strong className="text-[#0B132B]">{CONSTANTS.BRAND_NAME}</strong> geen streamingmedia, videobestanden of tv-uitzendingen uitzendt, opslaat of host vanaf eigen hardware.
              </p>
              <p className="text-[#1E293B] text-sm sm:text-base font-semibold leading-relaxed">
                Onze dienst fungeert als een technische interface en gids die openbare streamlinks indexeert. Wij hebben geen zeggenschap over, eigendom van of controle over de inhoud van streams die door externe providers op het internet worden gepubliceerd.
              </p>
            </section>

            <section>
              <span className="inline-block text-[11px] font-black uppercase tracking-[0.2em] text-[#E3182B] mb-1.5">
                Artikel 03
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-[#0B132B] uppercase tracking-tight mb-4 pl-4 border-l-4 border-[#E3182B] pb-2 border-b border-[#0B132B]/12">
                3. Kennisgeving van Inbreuk (Takedown Notice)
                <span className="block w-14 h-[3px] bg-[#FFD700] rounded-full mt-2" />
              </h2>
              <p className="text-[#1E293B] text-sm sm:text-base font-semibold leading-relaxed">
                Indien u de rechtmatige eigenaar bent van een auteursrechtelijk beschermd werk, of bevoegd bent om namens een eigenaar op te treden, en u van mening bent dat inhoud binnen onze directory inbreuk maakt op uw rechten, kunt u een officieel verwijderingsverzoek (DMCA Notice) indienen. Na ontvangst van een geldige melding zullen wij de betreffende streamverwijzingen zo spoedig mogelijk deactiveren.
              </p>
            </section>

            <section>
              <span className="inline-block text-[11px] font-black uppercase tracking-[0.2em] text-[#E3182B] mb-1.5">
                Artikel 04
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-[#0B132B] uppercase tracking-tight mb-4 pl-4 border-l-4 border-[#E3182B] pb-2 border-b border-[#0B132B]/12">
                4. Procedure voor het Indienen van een Verzoek
                <span className="block w-14 h-[3px] bg-[#FFD700] rounded-full mt-2" />
              </h2>
              <p className="text-[#1E293B] text-sm sm:text-base font-semibold leading-relaxed mb-6">
                Om een formeel DMCA-verzoek in te dienen bij <strong className="text-[#0B132B]">{CONSTANTS.BRAND_NAME}</strong>, verzoeken wij u contact op te nemen via ons officiële e-mailadres:
              </p>

              {/* Contact Email Box */}
              <div className="bg-[#F7F7F7] border-2 border-[#0B132B]/15 rounded-2xl p-6 my-6 text-center">
                <div className="w-11 h-11 rounded-2xl bg-[#1B1B1F] flex items-center justify-center mx-auto mb-2.5">
                  <Mail className="w-5 h-5 text-[#FFD700]" aria-hidden="true" />
                </div>
                <p className="text-[11px] uppercase font-black text-[#E3182B] tracking-widest mb-1">
                  Auteursrechten Afdeling
                </p>
                <a
                  href={`mailto:dmca@${CONSTANTS.DOMAIN}`}
                  className="text-[#0B132B] font-black text-lg sm:text-2xl hover:text-[#E3182B] transition-colors break-all"
                >
                  dmca@{CONSTANTS.DOMAIN}
                </a>
              </div>

              <h3 className="text-sm sm:text-base font-black text-[#0B132B] uppercase tracking-wide mb-4 inline-block border-b-3 border-[#FFD700] pb-0.5">
                Uw melding dient de volgende gegevens te bevatten:
              </h3>

              <ul className="bg-[#F7F7F7] border border-[#0B132B]/12 border-l-4 border-l-[#0B132B] rounded-2xl p-5 sm:p-6 space-y-3.5">
                {dmcaRequirements.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-[#1E293B] font-semibold text-sm sm:text-base leading-relaxed"
                  >
                    <CheckCircle className="w-5 h-5 text-[#E3182B] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <span className="inline-block text-[11px] font-black uppercase tracking-[0.2em] text-[#E3182B] mb-1.5">
                Artikel 05
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-[#0B132B] uppercase tracking-tight mb-4 pl-4 border-l-4 border-[#E3182B] pb-2 border-b border-[#0B132B]/12">
                5. Herhaaldelijke Inbreukmakers
                <span className="block w-14 h-[3px] bg-[#FFD700] rounded-full mt-2" />
              </h2>
              <p className="text-[#1E293B] text-sm sm:text-base font-semibold leading-relaxed">
                <strong className="text-[#0B132B]">{CONSTANTS.BRAND_NAME}</strong> hanteert een strikt beleid waarbij de accounts en toegangen van wederverkopers of gebruikers die herhaaldelijk inbreuk maken op intellectuele eigendomsrechten, onmiddellijk en definitief worden beëindigd.
              </p>
            </section>
          </div>

          {/* Back Link */}
          <div className="mt-12 pt-6 border-t border-[#0B132B]/12 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#0B132B] hover:text-[#E3182B] transition-colors font-black text-xs uppercase tracking-widest"
            >
              <ArrowLeft className="w-4 h-4 text-[#E3182B]" aria-hidden="true" />
              <span>Terug naar de homepage</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}