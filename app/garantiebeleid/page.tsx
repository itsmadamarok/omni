import { CONSTANTS, generateSEOMetadata } from '@/lib/seo';
import Link from 'next/link';
import {
  RefreshCw,
  ShieldCheck,
  CheckCircle,
  AlertCircle,
  Mail,
  MessageSquare,
  Wrench,
  Wifi,
  FileCheck,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';

export const metadata = generateSEOMetadata(
  'Garantie & Terugbetalingsbeleid',
  `Bekijk de officiële voorwaarden van de 7 dagen kwaliteitsgarantie van ${CONSTANTS.BRAND_NAME}. Transparante technische richtlijnen en ondersteuningsprocedures.`,
  '/garantiebeleid'
);

const warrantyScopeItems = [
  'De melding wordt schriftelijk ingediend binnen exact 7 kalenderdagen na het initiële aankooptijdstip.',
  'Er is sprake van een aanhoudende, server-gerelateerde totale uitval van de zenderinfrastructuur.',
  'Onze 24/7 technische helpdesk heeft minimaal 24 uur de gelegenheid gekregen om het gemelde verbindingsprobleem op te lossen of alternatieve routering in te stellen.',
  'De gebruiker heeft de standaard diagnostische verificatiestappen (zoals router-herstart, app-cache legen en DNS-controle) doorlopen.',
];

const nonRefundableItems = [
  {
    label: 'Persoonlijke voorkeur:',
    text: 'Verzoeken gebaseerd op smaak, interface-beleving of het "niet meer nodig hebben" van het abonnement.',
  },
  {
    label: 'Lokale netwerkbeperkingen:',
    text: 'Buffering veroorzaakt door een instabiele Wi-Fi verbinding, lokale netwerkcongestie of een internetsnelheid van minder dan 25 Mbps.',
  },
  {
    label: 'Apparaat-incompatibiliteit:',
    text: 'Problemen veroorzaakt door verouderde Smart TV-firmware, niet-ondersteunde IPTV-applicaties van derden of onjuiste lokale configuratie.',
  },
  {
    label: 'Zenderwijzigingen:',
    text: 'Tijdelijke herstructurering of wijziging van individuele zenders binnen de tienduizenden beschikbare kanalen.',
  },
  {
    label: 'Fair Use schendingen:',
    text: 'Accounts die automatisch zijn geblokkeerd wegens illegaal gelijktijdig streamen op meer schermen dan aangeschaft.',
  },
];

const diagnosticSteps = [
  {
    icon: Wrench,
    title: '1. Lijnverificatie',
    desc: 'Controle van uw M3U-token op onze actieve serverpoorten.',
  },
  {
    icon: Wifi,
    title: '2. Server Reset',
    desc: 'Herroutering van uw streamingsprofiel naar een alternatieve Europese node.',
  },
  {
    icon: FileCheck,
    title: '3. Vrijgave',
    desc: 'Blijft de storing onoplosbaar? Dan volgt onmiddellijke restitutiegoedkeuring.',
  },
];

export default function RefundPolicyPage() {
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
              Geverifieerde Servergarantie
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight leading-[1.06] mb-5">
            Garantie &amp; <span className="text-[#FFD700]">Terugbetaling</span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-white/80 font-medium max-w-2xl mx-auto leading-relaxed">
            <strong className="text-white">{CONSTANTS.BRAND_NAME}</strong> staat voor ongeëvenaarde stabiliteit. Wij hanteren een transparante 7-daagse technische kwaliteitsgarantie op al onze actieve streamingverbindingen.
          </p>

          <p className="text-xs text-white/55 mt-4 font-bold uppercase tracking-wider">
            Laatst herzien:{' '}
            {new Date().toLocaleDateString('nl-NL', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>
      </section>

      {/* =========================================================
          2. MAIN LIGHT-MODE POLICY SECTION [LIGHT #F7F7F7 + WHITE CARDS]
          ========================================================= */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F7F7F7] text-[#0B132B] overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 h-[300px] w-[720px] rounded-full bg-[#F4A7A7]/35 blur-[145px]"
        />

        <div className="max-w-4xl mx-auto w-full relative z-10">
          {/* Trust Banner Card */}
          <div className="bg-white border-2 border-[#0B132B]/15 rounded-3xl p-6 sm:p-8 mb-10 shadow-sm">
            <div className="flex gap-4 items-start">
              <div className="shrink-0 w-12 h-12 rounded-2xl bg-[#1B1B1F] flex items-center justify-center">
                <RefreshCw className="w-6 h-6 text-[#FFD700]" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <span className="inline-block text-[11px] font-black uppercase tracking-[0.2em] text-[#E3182B] mb-1">
                  Kwaliteitsoverzicht
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-[#0B132B] uppercase tracking-tight mb-2 pl-4 border-l-4 border-[#E3182B]">
                  Onze 7 Dagen Kwaliteitsgarantie
                  <span className="block w-14 h-[3px] bg-[#FFD700] rounded-full mt-2" />
                </h2>
                <p className="text-[#1E293B] font-semibold text-sm sm:text-base leading-relaxed">
                  Wij leveren uitsluitend hoogwaardige 4K- en Full HD-streams. Om misbruik van digitale licenties te voorkomen en onze serverintegriteit te waarborgen, treedt deze garantie in werking zodra er sprake is van een geverifieerd technisch defect dat onze storingsdienst niet binnen de gestelde hersteltijd kan verhelpen.
                </p>
              </div>
            </div>
          </div>

          {/* Main Policy Card */}
          <div className="bg-white border-2 border-[#0B132B]/15 rounded-3xl p-6 sm:p-10 shadow-sm space-y-11">
            <section>
              <span className="inline-block text-[11px] font-black uppercase tracking-[0.2em] text-[#E3182B] mb-1.5">
                Artikel 01
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-[#0B132B] uppercase tracking-tight mb-4 pl-4 border-l-4 border-[#E3182B] pb-2 border-b border-[#0B132B]/12">
                1. Toepassingsgebied van de Technische Garantie
                <span className="block w-14 h-[3px] bg-[#FFD700] rounded-full mt-2" />
              </h2>
              <p className="text-[#1E293B] text-sm sm:text-base font-semibold leading-relaxed mb-4">
                Een terugbetaling wordt uitsluitend toegekend indien de geleverde dienst structureel en aantoonbaar niet functioneert door oorzaken binnen onze serverinfrastructuur. De volgende voorwaarden zijn cumulatief van toepassing:
              </p>

              <ul className="bg-[#F7F7F7] border border-[#0B132B]/12 border-l-4 border-l-[#0B132B] rounded-2xl p-5 sm:p-6 space-y-3">
                {warrantyScopeItems.map((item, idx) => (
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
                Artikel 02
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-[#0B132B] uppercase tracking-tight mb-4 pl-4 border-l-4 border-[#E3182B] pb-2 border-b border-[#0B132B]/12">
                2. Uitzonderingen &amp; Niet-Vergoedbare Situaties (Niet-Technische Redenen)
                <span className="block w-14 h-[3px] bg-[#FFD700] rounded-full mt-2" />
              </h2>
              <p className="text-[#1E293B] text-sm sm:text-base font-semibold leading-relaxed mb-4">
                Aangezien digitale M3U-afspeellijsten en Xtream-toegangscodes direct na aankoop definitief worden aangemaakt op onze load-balancers, kan <strong className="text-[#0B132B]">geen aanspraak</strong> worden gemaakt op restitutie in de volgende situaties:
              </p>

              <div className="bg-[#F7F7F7] border-2 border-[#0B132B]/12 rounded-2xl p-5 sm:p-6">
                <div className="flex gap-4 items-start">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-[#1B1B1F] flex items-center justify-center mt-0.5">
                    <AlertCircle className="w-5 h-5 text-[#FFD700]" aria-hidden="true" />
                  </div>
                  <ul className="space-y-2.5 text-[#1E293B] text-xs sm:text-sm font-semibold leading-relaxed min-w-0">
                    {nonRefundableItems.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#E3182B] font-black">•</span>
                        <span>
                          <strong className="text-[#0B132B]">{item.label}</strong> {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <span className="inline-block text-[11px] font-black uppercase tracking-[0.2em] text-[#E3182B] mb-1.5">
                Artikel 03
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-[#0B132B] uppercase tracking-tight mb-4 pl-4 border-l-4 border-[#E3182B] pb-2 border-b border-[#0B132B]/12">
                3. Verplichte Diagnose- &amp; Herstelprocedure
                <span className="block w-14 h-[3px] bg-[#FFD700] rounded-full mt-2" />
              </h2>
              <p className="text-[#1E293B] text-sm sm:text-base font-semibold leading-relaxed mb-5">
                Alvorens een terugbetaling kan worden geautoriseerd, doorloopt onze storingsdienst onderstaand drie-stappenprotocol:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                {diagnosticSteps.map((step) => (
                  <div
                    key={step.title}
                    className="p-5 rounded-2xl bg-[#F7F7F7] border-2 border-[#0B132B]/12 hover:border-[#E3182B] transition-colors text-center flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-[#1B1B1F] flex items-center justify-center mx-auto mb-3">
                        <step.icon className="w-5 h-5 text-[#FFD700]" aria-hidden="true" />
                      </div>
                      <h3 className="font-black text-sm text-[#0B132B] uppercase tracking-tight mb-1.5 inline-block border-b-2 border-[#FFD700] pb-0.5">
                        {step.title}
                      </h3>
                      <p className="text-xs text-[#1E293B] font-semibold leading-relaxed mt-1.5">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <span className="inline-block text-[11px] font-black uppercase tracking-[0.2em] text-[#E3182B] mb-1.5">
                Artikel 04
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-[#0B132B] uppercase tracking-tight mb-4 pl-4 border-l-4 border-[#E3182B] pb-2 border-b border-[#0B132B]/12">
                4. Aanvraagprocedure &amp; Verwerkingstijd
                <span className="block w-14 h-[3px] bg-[#FFD700] rounded-full mt-2" />
              </h2>
              <p className="text-[#1E293B] text-sm sm:text-base font-semibold leading-relaxed mb-6">
                Voldoet uw melding aan de technische garantievoorwaarden? Dien uw verzoek in via een van de onderstaande kanalen met vermelding van uw bestelnummer en een korte foutomschrijving:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <div className="bg-[#F7F7F7] border-2 border-[#0B132B]/15 rounded-2xl p-6 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#1B1B1F] flex items-center justify-center mb-3">
                      <MessageSquare className="w-5 h-5 text-[#FFD700]" aria-hidden="true" />
                    </div>
                    <h3 className="text-base sm:text-lg font-black text-[#0B132B] uppercase tracking-tight mb-1.5 inline-block border-b-2 border-[#FFD700] pb-0.5">
                      WhatsApp Storingsdienst (Direct)
                    </h3>
                    <p className="text-[#1E293B] text-xs sm:text-sm font-semibold leading-relaxed mb-5 mt-2">
                      Stuur uw bestelgegevens en een schermafbeelding van de foutmelding voor real-time storingsdiagnose.
                    </p>
                  </div>
                  <a
                    href={`https://live-support.netlify.app/?text=${encodeURIComponent('Hallo, ik ervaar een aanhoudend technisch probleem met mijn, account en wil graag de diagnoseprocedure starten.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-[#FFD700] text-[#1B1B1F] font-black text-xs uppercase tracking-wider hover:brightness-95 transition-all shadow-sm"
                  >
                    <span>Start Diagnose via WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>

                <div className="bg-[#F7F7F7] border-2 border-[#0B132B]/15 rounded-2xl p-6 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#1B1B1F] flex items-center justify-center mb-3">
                      <Mail className="w-5 h-5 text-[#FFD700]" aria-hidden="true" />
                    </div>
                    <h3 className="text-base sm:text-lg font-black text-[#0B132B] uppercase tracking-tight mb-1.5 inline-block border-b-2 border-[#FFD700] pb-0.5">
                      Schriftelijk per E-mail
                    </h3>
                    <p className="text-[#1E293B] text-xs sm:text-sm font-semibold leading-relaxed mb-5 mt-2">
                      Stuur uw transactiebewijs en foutcode naar support@{CONSTANTS.DOMAIN}.
                    </p>
                  </div>
                  <a
                    href={`mailto:support@${CONSTANTS.DOMAIN}?subject=Technisch%20Storingsverzoek`}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-[#1B1B1F] text-white font-black text-xs uppercase tracking-wider hover:bg-[#232329] transition-all"
                  >
                    <span>E-mail Storingsdienst</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#FFD700]" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <p className="text-[#1E293B] text-xs sm:text-sm leading-relaxed font-semibold">
                Na officiële technische autorisatie wordt het bedrag binnen 1 tot 3 werkdagen teruggestort via de oorspronkelijke betaalmethode (iDEAL, Bancontact, Creditcard of Crypto).
              </p>
            </section>
          </div>

          {/* Support CTA Card */}
          <div className="mt-10 bg-white border-2 border-[#0B132B]/15 rounded-3xl p-8 sm:p-10 text-center shadow-sm">
            <span className="inline-block text-[11px] font-black uppercase tracking-[0.2em] text-[#E3182B] mb-2">
              Hulp &amp; Setup
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#0B132B] uppercase tracking-tight mb-2">
              Hulp nodig bij uw installatie?
            </h3>
            <p className="text-[#1E293B] font-semibold text-sm sm:text-base max-w-md mx-auto mb-6 leading-relaxed">
              In 99% van de gevallen lossen onze streaming-experts haperingen binnen 2 minuten op.
            </p>
            <div className="flex flex-col sm:flex-row gap-3.5 justify-center items-center w-full max-w-md mx-auto">
              <Link
                href="/contact"
                className="w-full sm:w-auto text-center px-8 py-4 rounded-full bg-[#FFD700] text-[#1B1B1F] font-black text-xs uppercase tracking-widest hover:brightness-95 transition-all shadow-md"
              >
                Direct Hulp Vragen
              </Link>
              <Link
                href="/installatie"
                className="w-full sm:w-auto text-center px-8 py-4 rounded-full bg-[#1B1B1F] text-white font-black text-xs uppercase tracking-widest hover:bg-[#232329] transition-all"
              >
                Installatie Handleiding
              </Link>
            </div>
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