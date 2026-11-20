import { CONSTANTS, generateSEOMetadata } from '@/lib/seo';
import Link from 'next/link';
import {
  FileText,
  AlertCircle,
  CheckCircle,
  CreditCard,
  UserCheck,
  Ban,
  RefreshCw,
  Mail,
  Scale,
  ArrowLeft,
} from 'lucide-react';

export const metadata = generateSEOMetadata(
  'Algemene Voorwaarden',
  `Lees de algemene voorwaarden van ${CONSTANTS.BRAND_NAME}. Duidelijke afspraken over abonnementen, onze 7 dagen geld-terug-garantie en acceptabel gebruik.`,
  '/voorwaarden'
);

const accessibilityItems = [
  'U minimaal 18 jaar oud bent en handelingsbekwaam om een overeenkomst aan te gaan.',
  'U correcte en actuele gegevens verstrekt bij het aanvragen van uw account.',
  'U uw persoonlijke inloggegevens en M3U-afspeellijsten strikt geheimhoudt en niet doorverkoopt.',
  'U onze service niet gebruikt voor commerciële heruitzending of openbare vertoning.',
  'U beschikt over een geschikte internetverbinding (minimaal 25 Mbps voor soepel 4K streamen).',
];

const subscriptionItems = [
  'Betalingen worden vooraf voldaan via de beveiligde betaalmethoden (o.a. iDEAL, Crypto, Creditcard of PayPal).',
  'Abonnementen worden niet stilzwijgend verlengd; u bepaalt zelf wanneer u verlengt.',
  'Uw account wordt direct geactiveerd zodra de betalingsbevestiging is afgerond.',
  'Prijzen zijn inclusief alle toepasselijke heffingen, tenzij uitdrukkelijk anders aangegeven.',
];

const fairUseItems = [
  'Het doorverkopen, restreamen of klonen van uw toegewezen streamingslijnen.',
  'Het gelijktijdig streamen op meer apparaten dan uw gekozen pakket toestaat.',
  'Pogingen tot reverse-engineering, server-scraping of netwerkoverbelasting (DDoS).',
  'Het downloaden, permanent opnemen of herdistribueren van digitale uitzendingen.',
  'Elk gebruik dat in strijd is met de toepasselijke nationale of internationale wetgeving.',
];

const availabilityItems = [
  'Zenderlijsten en VOD-catalogi te updaten of te optimaliseren voor een betere beeldkwaliteit.',
  'Kortstondig gepland serveronderhoud uit te voeren buiten piekuren.',
  'Prijswijzigingen door te voeren voor nieuwe abonnementsperioden.',
];

export default function TermsPage() {
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
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[320px] w-[720px] rounded-full bg-[#E3182B]/15 blur-[145px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-1/4 h-[220px] w-[420px] rounded-full bg-[#F4A7A7]/10 blur-[130px]"
        />

        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-[#232329] border border-[#FFD700]/40 px-4 py-1.5 rounded-full mb-6 shadow-md">
            <Scale className="w-4 h-4 text-[#FFD700]" aria-hidden="true" />
            <span className="text-[#FFD700] font-black text-xs uppercase tracking-widest">
              Juridische Overeenkomst
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight leading-[1.06] mb-5">
            Algemene <span className="text-[#FFD700]">Voorwaarden</span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-white/80 font-medium max-w-2xl mx-auto leading-relaxed">
            Lees deze voorwaarden zorgvuldig door voordat u gebruikmaakt van de diensten en streamingabonnementen van <strong className="text-white">{CONSTANTS.BRAND_NAME}</strong>.
          </p>

          <p className="text-xs text-white/55 mt-4 font-bold uppercase tracking-wider">
            Laatst bijgewerkt:{' '}
            {new Date().toLocaleDateString('nl-NL', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>
      </section>

      {/* =========================================================
          2. MAIN LIGHT-MODE LEGAL DOCUMENT [LIGHT #F7F7F7 + WHITE CARDS]
          ========================================================= */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F7F7F7] text-[#0B132B] overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 h-[300px] w-[720px] rounded-full bg-[#F4A7A7]/35 blur-[145px]"
        />

        <div className="max-w-4xl mx-auto w-full relative z-10">
          {/* Acceptance Card */}
          <div className="bg-white border-2 border-[#0B132B]/15 rounded-3xl p-6 sm:p-8 mb-10 shadow-sm">
            <div className="flex gap-4 items-start">
              <div className="shrink-0 w-12 h-12 rounded-2xl bg-[#1B1B1F] flex items-center justify-center">
                <FileText className="w-6 h-6 text-[#FFD700]" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <span className="inline-block text-[11px] font-black uppercase tracking-[0.18em] text-[#E3182B] mb-1">
                  Aanvaarding van Voorwaarden
                </span>
                <p className="text-[#1E293B] font-semibold text-sm sm:text-base leading-relaxed">
                  Door een abonnement af te sluiten of gebruik te maken van de website en diensten van <strong className="text-[#0B132B]">{CONSTANTS.BRAND_NAME}</strong>, verklaart u zich akkoord met deze Algemene Voorwaarden en ons Privacybeleid.
                </p>
              </div>
            </div>
          </div>

          {/* Main Legal Sections Card */}
          <div className="bg-white border-2 border-[#0B132B]/15 rounded-3xl p-6 sm:p-10 shadow-sm space-y-11">
            <section>
              <span className="inline-block text-[11px] font-black uppercase tracking-[0.2em] text-[#E3182B] mb-1.5">
                Artikel 01
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-[#0B132B] uppercase tracking-tight mb-4 pl-4 border-l-4 border-[#E3182B] pb-2 border-b border-[#0B132B]/12">
                1. Omschrijving van de Dienst
                <span className="block w-14 h-[3px] bg-[#FFD700] rounded-full mt-2" />
              </h2>
              <p className="text-[#1E293B] text-sm sm:text-base font-semibold leading-relaxed">
                <strong className="text-[#0B132B]">{CONSTANTS.BRAND_NAME}</strong> levert digitale IPTV streamingdiensten waarmee abonnees toegang krijgen tot live televisiezenders, video-on-demand (VOD) films en series via het internet. Onze dienst is uitsluitend bestemd voor persoonlijk, niet-commercieel thuisgebruik.
              </p>
            </section>

            <section>
              <span className="inline-block text-[11px] font-black uppercase tracking-[0.2em] text-[#E3182B] mb-1.5">
                Artikel 02
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-[#0B132B] uppercase tracking-tight mb-4 pl-4 border-l-4 border-[#E3182B] pb-2 border-b border-[#0B132B]/12">
                2. Toegankelijkheid &amp; Verantwoordelijkheid
                <span className="block w-14 h-[3px] bg-[#FFD700] rounded-full mt-2" />
              </h2>
              <p className="text-[#1E293B] text-sm sm:text-base font-semibold leading-relaxed mb-4">
                Door gebruik te maken van onze diensten verklaart en garandeert u dat:
              </p>

              <ul className="bg-[#F7F7F7] border border-[#0B132B]/12 border-l-4 border-l-[#0B132B] rounded-2xl p-5 sm:p-6 mb-6 space-y-3">
                {accessibilityItems.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-[#1E293B] font-semibold text-sm sm:text-base leading-relaxed"
                  >
                    <CheckCircle className="w-5 h-5 text-[#E3182B] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-[#F7F7F7] border-2 border-[#0B132B]/12 rounded-2xl p-5 sm:p-6">
                <div className="flex gap-4 items-start">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-[#1B1B1F] flex items-center justify-center">
                    <UserCheck className="w-5 h-5 text-[#FFD700]" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[#0B132B] font-black text-xs sm:text-sm uppercase tracking-wider inline-block border-b-2 border-[#FFD700] pb-0.5 mb-1.5">
                      Accountbeveiliging
                    </h3>
                    <p className="text-[#1E293B] text-xs sm:text-sm font-semibold leading-relaxed">
                      U bent te allen tijde zelf verantwoordelijk voor alle activiteiten die plaatsvinden onder uw account en M3U-inloggegevens.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <span className="inline-block text-[11px] font-black uppercase tracking-[0.2em] text-[#E3182B] mb-1.5">
                Artikel 03
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-[#0B132B] uppercase tracking-tight mb-4 pl-4 border-l-4 border-[#E3182B] pb-2 border-b border-[#0B132B]/12">
                3. Abonnementen, Prijzen &amp; Betaling
                <span className="block w-14 h-[3px] bg-[#FFD700] rounded-full mt-2" />
              </h2>
              <p className="text-[#1E293B] text-sm sm:text-base font-semibold leading-relaxed mb-4">
                Onze actuele abonnementsopties en tarieven staan vermeld op de pagina Pakketten. Bij aankoop stemt u in met het volgende:
              </p>

              <ul className="bg-[#F7F7F7] border border-[#0B132B]/12 border-l-4 border-l-[#0B132B] rounded-2xl p-5 sm:p-6 mb-6 space-y-3">
                {subscriptionItems.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-[#1E293B] font-semibold text-sm sm:text-base leading-relaxed"
                  >
                    <CheckCircle className="w-5 h-5 text-[#E3182B] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-[#F7F7F7] border-2 border-[#10B981]/50 rounded-2xl p-5 sm:p-6">
                <div className="flex gap-4 items-start">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-[#10B981]/15 flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-[#10B981]" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[#0B132B] font-black text-xs sm:text-sm uppercase tracking-wider inline-block border-b-2 border-[#FFD700] pb-0.5 mb-1.5">
                      Veilige Betaling
                    </h3>
                    <p className="text-[#1E293B] text-xs sm:text-sm font-semibold leading-relaxed">
                      Alle transacties verlopen via PCI-DSS gecertificeerde betaalgateways met 256-bit SSL-versleuteling.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <span className="inline-block text-[11px] font-black uppercase tracking-[0.2em] text-[#E3182B] mb-1.5">
                Artikel 04
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-[#0B132B] uppercase tracking-tight mb-4 pl-4 border-l-4 border-[#E3182B] pb-2 border-b border-[#0B132B]/12">
                4. Beleid voor Acceptabel Gebruik (Fair Use)
                <span className="block w-14 h-[3px] bg-[#FFD700] rounded-full mt-2" />
              </h2>
              <p className="text-[#1E293B] text-sm sm:text-base font-semibold leading-relaxed mb-4">
                Het is ten strengste verboden om de dienst te gebruiken voor:
              </p>

              <ul className="bg-[#F7F7F7] border border-[#0B132B]/12 border-l-4 border-l-[#0B132B] rounded-2xl p-5 sm:p-6 mb-6 space-y-3">
                {fairUseItems.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-[#1E293B] font-semibold text-sm sm:text-base leading-relaxed"
                  >
                    <Ban className="w-5 h-5 text-[#E3182B] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-[#F7F7F7] border-2 border-[#0B132B]/12 rounded-2xl p-5 sm:p-6">
                <div className="flex gap-4 items-start">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-[#1B1B1F] flex items-center justify-center">
                    <AlertCircle className="w-5 h-5 text-[#FFD700]" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[#0B132B] font-black text-xs sm:text-sm uppercase tracking-wider inline-block border-b-2 border-[#FFD700] pb-0.5 mb-1.5">
                      Gevolgen van Misbruik
                    </h3>
                    <p className="text-[#1E293B] text-xs sm:text-sm font-semibold leading-relaxed">
                      Bij overtreding van het acceptabel gebruik beleid behouden wij ons het recht voor om het account direct te blokkeren zonder recht op restitutie.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <span className="inline-block text-[11px] font-black uppercase tracking-[0.2em] text-[#E3182B] mb-1.5">
                Artikel 05
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-[#0B132B] uppercase tracking-tight mb-4 pl-4 border-l-4 border-[#E3182B] pb-2 border-b border-[#0B132B]/12">
                5. 7 Dagen Niet-Goed-Geld-Terug Garantie
                <span className="block w-14 h-[3px] bg-[#FFD700] rounded-full mt-2" />
              </h2>
              <p className="text-[#1E293B] text-sm sm:text-base font-semibold leading-relaxed">
                Wij hanteren een volledige tevredenheidsgarantie van 7 dagen. Mocht onze dienst niet aan uw verwachtingen voldoen of mocht u technische problemen ervaren die niet opgelost kunnen worden, dan kunt u binnen 7 dagen na aankoop een volledige terugbetaling aanvragen via onze klantenservice.
              </p>
            </section>

            <section>
              <span className="inline-block text-[11px] font-black uppercase tracking-[0.2em] text-[#E3182B] mb-1.5">
                Artikel 06
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-[#0B132B] uppercase tracking-tight mb-4 pl-4 border-l-4 border-[#E3182B] pb-2 border-b border-[#0B132B]/12">
                6. Beschikbaarheid &amp; Zenderwijzigingen
                <span className="block w-14 h-[3px] bg-[#FFD700] rounded-full mt-2" />
              </h2>
              <p className="text-[#1E293B] text-sm sm:text-base font-semibold leading-relaxed mb-4">
                Wij streven naar een constante 99.9% uptime. Desondanks kan het voorkomen dat tijdelijk onderhoud nodig is of dat externe zenders wijzigen. <strong className="text-[#0B132B]">{CONSTANTS.BRAND_NAME}</strong> behoudt zich het recht voor om:
              </p>

              <ul className="bg-[#F7F7F7] border border-[#0B132B]/12 border-l-4 border-l-[#0B132B] rounded-2xl p-5 sm:p-6 space-y-3">
                {availabilityItems.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-[#1E293B] font-semibold text-sm sm:text-base leading-relaxed"
                  >
                    <RefreshCw className="w-5 h-5 text-[#E3182B] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <span className="inline-block text-[11px] font-black uppercase tracking-[0.2em] text-[#E3182B] mb-1.5">
                Artikel 07
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-[#0B132B] uppercase tracking-tight mb-4 pl-4 border-l-4 border-[#E3182B] pb-2 border-b border-[#0B132B]/12">
                7. Intellectueel Eigendom &amp; Aansprakelijkheid
                <span className="block w-14 h-[3px] bg-[#FFD700] rounded-full mt-2" />
              </h2>
              <p className="text-[#1E293B] text-sm sm:text-base font-semibold leading-relaxed">
                Alle merktekens, logo’s, teksten en softwarecode op deze website zijn het intellectuele eigendom van <strong className="text-[#0B132B]">{CONSTANTS.BRAND_NAME}</strong>. Voor zover wettelijk toegestaan is <strong className="text-[#0B132B]">{CONSTANTS.BRAND_NAME}</strong> niet aansprakelijk voor indirecte schade, dataverlies of storingen veroorzaakt door externe internetproviders of apparatuur van de gebruiker.
              </p>
            </section>

            <section>
              <span className="inline-block text-[11px] font-black uppercase tracking-[0.2em] text-[#E3182B] mb-1.5">
                Artikel 08
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-[#0B132B] uppercase tracking-tight mb-4 pl-4 border-l-4 border-[#E3182B] pb-2 border-b border-[#0B132B]/12">
                8. Contact &amp; Klantenservice
                <span className="block w-14 h-[3px] bg-[#FFD700] rounded-full mt-2" />
              </h2>
              <p className="text-[#1E293B] text-sm sm:text-base font-semibold leading-relaxed mb-4">
                Voor vragen over deze algemene voorwaarden of ondersteuning bij uw abonnement kunt u contact opnemen met onze juridische en supportafdeling:
              </p>

              <div className="bg-[#F7F7F7] border-2 border-[#0B132B]/15 rounded-2xl p-6 my-6 text-center">
                <div className="w-11 h-11 rounded-2xl bg-[#1B1B1F] flex items-center justify-center mx-auto mb-2.5">
                  <Mail className="w-5 h-5 text-[#FFD700]" aria-hidden="true" />
                </div>
                <p className="text-[11px] uppercase font-black text-[#E3182B] tracking-widest mb-1">
                  Klantenservice &amp; Juridische Zaken
                </p>
                <a
                  href={`mailto:legal@${CONSTANTS.DOMAIN}`}
                  className="text-[#0B132B] font-black text-lg sm:text-2xl hover:text-[#E3182B] transition-colors break-all"
                >
                  legal@{CONSTANTS.DOMAIN}
                </a>
              </div>
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