import { CONSTANTS, generateSEOMetadata } from '@/lib/seo';
import Link from 'next/link';
import {
  Award,
  Globe,
  Users,
  Server,
  Zap,
  ShieldCheck,
  Trophy,
  Headphones,
  Sparkles,
  Heart,
  Star,
  ArrowRight,
  ArrowLeft,
  Tv,
  Film,
  Activity,
} from 'lucide-react';

export const metadata = generateSEOMetadata(
  'Over Ons',
  `Ontdek het verhaal achter ${CONSTANTS.BRAND_NAME}: dé betrouwbare IPTV aanbieder van Nederland en België met 25.000+ zenders in 4K Ultra HD en 99.9% uptime.`,
  '/about'
);

const statsItems = [
  { icon: Users, value: '25.000+', label: 'Tevreden Klanten' },
  { icon: Globe, value: '100+', label: 'Landen Beschikbaar' },
  { icon: Server, value: '99.9%', label: 'Server Uptime' },
  { icon: Trophy, value: '4.9/5', label: 'Gemiddelde Score' },
];

const featureItems = [
  {
    icon: ShieldCheck,
    title: '99.9% Uptime Garantie',
    desc: 'Onze redundante serverclusters zorgen ervoor dat uw favoriete uitzendingen altijd live en storingsvrij beschikbaar zijn.',
  },
  {
    icon: Zap,
    title: 'Anti-Freeze Technologie',
    desc: 'Geavanceerde load-balancers voorkomen buffering tijdens piekuren en drukbezochte live sportevenementen.',
  },
  {
    icon: Server,
    title: 'Europese High-Speed Servers',
    desc: 'Direct aangesloten op grote Europese internetknooppunten (AMS-IX) voor minimale vertraging en snelle zaptijden.',
  },
  {
    icon: Headphones,
    title: '24/7 WhatsApp Klantenservice',
    desc: 'Deskundige hulp bij installatie, app-keuze en zenderconfiguratie binnen enkele minuten.',
  },
];

const catalogItems = [
  'Alle Nederlandse zenders (NPO 1/2/3, RTL 4/5/7/8, SBS6, Veronica, Net5) in 4K & Full HD',
  'Live sportzenders inclusief Viaplay, Ziggo Sport Totaal, ESPN Compleet en DAZN',
  'Formule 1, Eredivisie, Premier League, Champions League en alle UFC PPV evenementen',
  'Groot internationaal aanbod uit België, het Verenigd Koninkrijk, Duitsland, Frankrijk, Turkije en Marokko',
  'Dagelijks bijgewerkte VOD-catalogus met Nederlandse ondertiteling voor bioscoopfilms en topseries',
  'Elektronische Programmagids (EPG) en 7-daagse terugkijkfunctie (Catch-up)',
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#1B1B1F] text-white overflow-x-clip selection:bg-[#FFD700] selection:text-[#1B1B1F]">
      {/* =========================================================
          1. HERO SECTION [DARK #1B1B1F]
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
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[340px] w-[740px] rounded-full bg-[#E3182B]/15 blur-[145px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-1/4 h-[220px] w-[420px] rounded-full bg-[#F4A7A7]/10 blur-[130px]"
        />

        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-[#232329] border border-[#FFD700]/40 px-4 py-1.5 rounded-full mb-6 shadow-md">
            <Sparkles className="w-4 h-4 text-[#FFD700]" aria-hidden="true" />
            <span className="text-[#FFD700] font-black text-xs uppercase tracking-widest">
              Ons Verhaal &amp; Missie
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-[1.05] mb-5">
            Over <span className="text-[#FFD700]">{CONSTANTS.BRAND_NAME}</span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-white/80 font-medium max-w-2xl mx-auto leading-relaxed">
            De nummer #1 premium IPTV provider voor Nederland en België. Ervaar grenzeloos streamen in 4K beeldkwaliteit zonder haperingen of dure contracten.
          </p>
        </div>
      </section>

      {/* =========================================================
          2. MAIN LIGHT-MODE SECTION: STATS, CARDS, CATALOG & CTA
             [LIGHT #F7F7F7 + WHITE #FFFFFF FLAT CARDS]
          ========================================================= */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F7F7F7] text-[#0B132B] overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 h-[300px] w-[720px] rounded-full bg-[#F4A7A7]/35 blur-[145px]"
        />

        <div className="max-w-5xl mx-auto w-full relative z-10 space-y-14">
          {/* Statistics Grid in Light Mode */}
          <div aria-label="Bedrijfsstatistieken" className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {statsItems.map((stat, idx) => (
              <div
                key={idx}
                className="text-center p-6 bg-white border-2 border-[#0B132B]/15 hover:border-[#E3182B] rounded-3xl shadow-sm transition-colors"
              >
                <div className="w-11 h-11 rounded-2xl bg-[#1B1B1F] flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-5 h-5 text-[#FFD700]" aria-hidden="true" />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-[#0B132B] uppercase tracking-tight">
                  {stat.value}
                </div>
                <div className="text-[#1E293B] text-xs font-black uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Welcome Card */}
          <div className="bg-white border-2 border-[#0B132B]/15 rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <div className="shrink-0 w-12 h-12 rounded-2xl bg-[#1B1B1F] flex items-center justify-center">
                <Heart className="w-6 h-6 text-[#FFD700]" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <span className="inline-block text-[11px] font-black uppercase tracking-[0.2em] text-[#E3182B] mb-1">
                  Introductie
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-[#0B132B] uppercase tracking-tight mb-2 pl-4 border-l-4 border-[#E3182B]">
                  Welkom bij {CONSTANTS.BRAND_NAME}
                  <span className="block w-14 h-[3px] bg-[#FFD700] rounded-full mt-2" />
                </h2>
                <p className="text-[#1E293B] font-semibold text-sm sm:text-base leading-relaxed">
                  Wij zijn opgericht met een helder doel: premium live televisie en on-demand media toegankelijk en betaalbaar maken voor iedereen in Nederland en Vlaanderen, zonder concessies te doen aan beeldkwaliteit of stabiliteit.
                </p>
              </div>
            </div>
          </div>

          {/* Mission & Why Choose Us in White Card Container */}
          <div className="bg-white border-2 border-[#0B132B]/15 rounded-3xl p-6 sm:p-10 shadow-sm space-y-12">
            <section>
              <span className="inline-block text-[11px] font-black uppercase tracking-[0.2em] text-[#E3182B] mb-1.5">
                Visie &amp; Doel
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-[#0B132B] uppercase tracking-tight mb-4 pl-4 border-l-4 border-[#E3182B] pb-2 border-b border-[#0B132B]/12">
                Onze Missie &amp; Visie
                <span className="block w-14 h-[3px] bg-[#FFD700] rounded-full mt-2" />
              </h2>
              <p className="text-[#1E293B] text-sm sm:text-base leading-relaxed font-semibold mb-4">
                Traditionele kabelabonnementen worden elk jaar duurder, terwijl het zenderaanbod beperkt blijft. Consumenten worden gedwongen om meerdere losse abonnementen af te sluiten voor voetbal, Formule 1 en films.
              </p>
              <p className="text-[#1E293B] text-sm sm:text-base leading-relaxed font-semibold">
                Bij <strong className="text-[#0B132B]">{CONSTANTS.BRAND_NAME}</strong> bundelen we alles op één intuïtief platform: live sport, nationale zenders en de nieuwste bioscoopfilms in 4K Ultra HD. Wij investeren continu in geavanceerde servercapaciteit om haperingen definitief tot het verleden te laten behoren.
              </p>
            </section>

            {/* Feature Grid */}
            <section>
              <span className="inline-block text-[11px] font-black uppercase tracking-[0.2em] text-[#E3182B] mb-1.5">
                Voordelen
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-[#0B132B] uppercase tracking-tight mb-6 pl-4 border-l-4 border-[#E3182B] pb-2 border-b border-[#0B132B]/12">
                Waarom {CONSTANTS.BRAND_NAME} De Beste Keuze Is
                <span className="block w-14 h-[3px] bg-[#FFD700] rounded-full mt-2" />
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {featureItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 p-5 sm:p-6 bg-[#F7F7F7] rounded-2xl border-2 border-[#0B132B]/12 hover:border-[#E3182B] transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#1B1B1F] flex items-center justify-center shrink-0 mt-0.5">
                      <item.icon className="w-5 h-5 text-[#FFD700]" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-black text-[#0B132B] text-sm sm:text-base uppercase tracking-tight inline-block border-b-2 border-[#FFD700] pb-0.5">
                        {item.title}
                      </h3>
                      <p className="text-[#1E293B] text-xs sm:text-sm font-semibold mt-2 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Infrastructure Card */}
            <section>
              <span className="inline-block text-[11px] font-black uppercase tracking-[0.2em] text-[#E3182B] mb-1.5">
                Technologie
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-[#0B132B] uppercase tracking-tight mb-4 pl-4 border-l-4 border-[#E3182B] pb-2 border-b border-[#0B132B]/12">
                Onze Technische Serverinfrastructuur
                <span className="block w-14 h-[3px] bg-[#FFD700] rounded-full mt-2" />
              </h2>
              <p className="text-[#1E293B] text-sm sm:text-base leading-relaxed font-semibold mb-6">
                In tegenstelling tot standaard IPTV wederverkopers beheren wij onze eigen streamingservers met dedicated 10 Gbps glasvezelverbindingen. Onze servers routeren het videosignaal automatisch via het dichtstbijzijnde knooppunt, waardoor u altijd geniet van een vloeiende 50/60 fps streamkwaliteit.
              </p>
              <div className="bg-[#F7F7F7] border border-[#0B132B]/12 rounded-2xl p-5 sm:p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="p-4 bg-white rounded-2xl border border-[#0B132B]/12">
                    <Activity className="w-7 h-7 text-[#E3182B] mx-auto mb-2" aria-hidden="true" />
                    <div className="text-base font-black text-[#0B132B] uppercase">Lage Latency</div>
                    <p className="text-xs text-[#1E293B] font-semibold mt-1">
                      Minimale vertraging bij live sport
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-2xl border border-[#0B132B]/12">
                    <Film className="w-7 h-7 text-[#E3182B] mx-auto mb-2" aria-hidden="true" />
                    <div className="text-base font-black text-[#0B132B] uppercase">H.265 / HEVC</div>
                    <p className="text-xs text-[#1E293B] font-semibold mt-1">
                      Optimaal dataverbruik bij 4K
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-2xl border border-[#0B132B]/12">
                    <Tv className="w-7 h-7 text-[#E3182B] mx-auto mb-2" aria-hidden="true" />
                    <div className="text-base font-black text-[#0B132B] uppercase">Universeel</div>
                    <p className="text-xs text-[#1E293B] font-semibold mt-1">
                      Werkt op elk Smart TV systeem
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Content Catalog List */}
            <section>
              <span className="inline-block text-[11px] font-black uppercase tracking-[0.2em] text-[#E3182B] mb-1.5">
                Aanbod
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-[#0B132B] uppercase tracking-tight mb-4 pl-4 border-l-4 border-[#E3182B] pb-2 border-b border-[#0B132B]/12">
                Het Meest Complete Zenderaanbod
                <span className="block w-14 h-[3px] bg-[#FFD700] rounded-full mt-2" />
              </h2>
              <p className="text-[#1E293B] text-sm sm:text-base leading-relaxed font-semibold mb-5">
                Met meer dan <strong className="text-[#0B132B]">25.000 live televisiezenders</strong> en een videobibliotheek van <strong className="text-[#0B132B]">60.000+ films en series</strong> bieden wij het breedste zenderpakket van de Benelux:
              </p>
              <ul className="bg-[#F7F7F7] border border-[#0B132B]/12 border-l-4 border-l-[#0B132B] rounded-2xl p-5 sm:p-6 space-y-3">
                {catalogItems.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-[#1E293B] font-semibold text-sm sm:text-base leading-relaxed"
                  >
                    <Star className="w-5 h-5 text-[#E3182B] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Guarantee Card */}
            <section>
              <div className="bg-[#F7F7F7] border-2 border-[#10B981]/50 rounded-2xl p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-[#10B981]/15 flex items-center justify-center shrink-0">
                    <Award className="w-6 h-6 text-[#10B981]" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[#0B132B] font-black text-lg sm:text-xl uppercase tracking-tight mb-2 inline-block border-b-3 border-[#FFD700] pb-0.5">
                      Onze 7 Dagen Tevredenheidsgarantie
                    </h3>
                    <p className="text-[#1E293B] text-sm sm:text-base font-semibold leading-relaxed mt-2">
                      Wij zijn 100% overtuigd van de kwaliteit van ons platform. Mocht u binnen 7 dagen om welke reden dan ook niet tevreden zijn over de streams of zenders, dan storten wij uw aankoopbedrag direct terug. Geen gedoe, geen kleine lettertjes.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Bottom CTA Card */}
          <div className="bg-white border-2 border-[#0B132B]/15 rounded-3xl p-8 sm:p-12 text-center shadow-sm">
            <span className="inline-block text-[11px] font-black uppercase tracking-[0.2em] text-[#E3182B] mb-2">
              Direct Starten
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0B132B] uppercase tracking-tight mb-3">
              Ervaar Het Zelf Zonder Risico
            </h2>
            <p className="text-[#1E293B] font-semibold text-sm sm:text-base max-w-lg mx-auto mb-8 leading-relaxed">
              Sluit u aan bij duizenden tevreden huishoudens in Nederland en België. Binnen 5 minuten na bestelling geïnstalleerd en geactiveerd.
            </p>
            <div className="flex flex-col sm:flex-row gap-3.5 justify-center items-center w-full max-w-md mx-auto">
              <Link
                href="/pakketten"
                className="w-full sm:w-auto text-center px-8 py-4 rounded-full bg-[#FFD700] text-[#1B1B1F] font-black text-xs sm:text-sm uppercase tracking-widest hover:brightness-95 transition-transform hover:scale-105 shadow-md"
              >
                Kies Uw Pakket
              </Link>
              <Link
                href="/installatie"
                className="w-full sm:w-auto text-center px-8 py-4 rounded-full bg-[#1B1B1F] text-white font-black text-xs sm:text-sm uppercase tracking-widest hover:bg-[#232329] transition-colors"
              >
                Installatie Handleiding
              </Link>
            </div>
          </div>

          {/* Back Link */}
          <div className="pt-4 border-t border-[#0B132B]/12 text-center">
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

      {/* =========================================================
          3. DARK PROMO BANNER [DARK #1B1B1F]
          ========================================================= */}
      <section className="w-full bg-[#1B1B1F] text-white py-12 px-4 sm:px-6 border-t border-white/10">
        <div className="max-w-3xl mx-auto flex flex-col items-center justify-center text-center gap-4">
          <div className="bg-[#232329] border border-[#FFD700]/40 text-[#FFD700] font-black text-xs px-4 py-1.5 rounded-full uppercase tracking-widest">
            DIRECT BESPAREN OP KABELTEVISIE
          </div>
          <h2 className="text-white text-xl sm:text-3xl font-black uppercase tracking-tight leading-snug max-w-2xl">
            KLAAR VOOR DE BESTE IPTV ERVARING?
          </h2>
          <p className="text-white/75 text-sm sm:text-base font-medium max-w-xl leading-relaxed">
            Stop met teveel betalen voor losse abonnementen. Krijg alle sport, films en Nederlandse zenders in één compleet pakket.
          </p>
          <div className="mt-2">
            <Link
              href="/pakketten"
              className="inline-flex items-center justify-center gap-2.5 bg-[#FFD700] text-[#1B1B1F] hover:brightness-95 transition-all px-9 py-3.5 rounded-full font-black text-xs sm:text-sm uppercase tracking-widest shadow-lg"
            >
              <span>Bekijk Abonnementen</span>
              <ArrowRight className="w-4 h-4 text-[#1B1B1F]" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}